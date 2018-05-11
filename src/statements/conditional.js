'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a clause of the conditional statement
 * @memberof Statement.Conditional
 * @class Clause
 */
class Clause {
	constructor(statements, location, test) {
		const privates = {
			test: test,
			statements: statements,
			location: location,
		}

		if (test != null) privates.test = test;

		this.publicProperties = true;

		privateProps.set(this, privates);
	}

	/**
	 * Returns the test to be applied to see if we execute this clauses's statements
	 * If test is null or undefined, the statements should be exeuted if this clause is reached.
	 * @memberof Statement.Conditional.Clause
	 * @returns {Expression}
	 */
	get test() { return privateProps.get(this).test; }

	/**
	 * Returns the statements to execute if the test was succesful (or if there is no test)
	 * @memberof Statement.Conditional.Clause
	 * @returns {Statement.Base[]} an array of statements to execute
	 */
	get statements() { return privateProps.get(this).statements; }
}

/**
 * Represents a conditional statement in the node body
 * @memberof Statement
 * @augments Base
 * @class Conditional
 */
class Conditional extends Base {
	constructor(clauses, location) {
		super(location);

		const privates = {
			clauses: clauses,
		}

		privateProps.set(this, privates);
	}

	/** 
	 * Clauses should be tested in order returned and the first one that passes has it's statements executed
	 * @memberof Statement.Conditional 
	 * @instance
	 * @returns {Statement.Conditional.Clause[]} an array of clauses to test and execute. */
	get clauses() { return privateProps.get(this).clauses; }
}

Conditional.Clause = Clause;

module.exports = Conditional;