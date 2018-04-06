'use strict';

const Static = 'static';
const Variable = 'variable';
const Function = 'function';
const Operation = 'operation';

const StaticTypes = {
	Integer: "Integer",
	Float: "Float",
	String: "String",
	Boolean: "Boolean",
	Null: "Null"
}

const Operators = {
	LessThanOrEqual: "LTE",
	GreaterThanOrEqual: "GTE",
	Equal: "EQ",
	LessThan: "LT",
	GreaterThan: "GT",
	NotEqual: "NEQ",
	And: "AND",
	Or: "OR",
	Xor: "XOR",
	Not: "Not",
	Add: "Add",
	Subtract: "Sub",
	Divide: "Div",
	Multiply: "Mult",
	Modulus: "Mod",
	Assign: "=",
	AddAssign: "Add=",
	SubtractAssign: "Sub=",
	MultiplyAssign: "Mult=",
	ModulusAssign: "Mod=",
	DivideAssign: "Div=",
	Unknown: "N/a"
}

module.exports = {
	Static, Function, Operation, Variable, Operators, StaticTypes
}