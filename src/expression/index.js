'use strict';

/**
 * Expression Types.
 * Each of these represents an expression encountered in a statement
 * @namespace Expression
 */
module.exports = {
	Base: require('./base'),
	// Static Values
	BooleanValue: require('./values/boolean'),
	FloatValue: require('./values/float'),
	IntegerValue: require('./values/integer'),
	NullValue: require('./values/null'),
	StringValue: require('./values/string'),
	// Operators
	LeftRightOperator: require('./operators/baseLeftRight'),
	RightOperator: require('./operators/baseRight'),
	// Boolean operators
	AndOperator: require('./operators/boolean/and'),
	EqualityOperator: require('./operators/boolean/equality'),
	GreaterThanOperator: require('./operators/boolean/greaterThan'),
	GreaterThanOrEqualOperator: require('./operators/boolean/greaterThanOrEqual'),
	LessThanOperator: require('./operators/boolean/lessThan'),
	LessThanOrEqualOperator: require('./operators/boolean/lessThanOrEqual'),
	NotOperator: require('./operators/boolean/not'),
	NotEqualityOperator: require('./operators/boolean/notequality'),
	OrOperator: require('./operators/boolean/or'),
	XorOperator: require('./operators/boolean/xor'),
	// Math Operators
	AddOperator: require('./operators/math/add'),
	SubtractOperator: require('./operators/math/subtract'),
	DivideOperator: require('./operators/math/divide'),
	MultiplyOperator: require('./operators/math/multiply'),
	ModulusOperator: require('./operators/math/modulus'),
	NegativeOperator: require('./operators/math/negative'),
	// Assignment Operators
	AssignmentOperator: require('./operators/assignment/base'),
	AddAssignOperator: require('./operators/assignment/addAssign'),
	AssignOperator: require('./operators/assignment/assign'),
	DivideAssignOperator: require('./operators/assignment/divideAssign'),
	ModulusAssignOperator: require('./operators/assignment/modulusAssign'),
	MultiplyAssignOperator: require('./operators/assignment/multiplyAssign'),
	SubtractAssignOperator: require('./operators/assignment/subtractAssign'),
	// Other
	Function: require('./function'),
	Variable: require('./variable'),
}