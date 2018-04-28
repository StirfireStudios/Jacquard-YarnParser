'use strict';

export function findVars(expressions) {
  const vars = [];
  expressions.forEach(expression => {
    expression.variables.forEach(variable => {
      vars.push(variable);
    });
  });

  return vars;
}

export function findFuncs(expressions) {
  const funcs = [];

  expressions.forEach(expression => {
    expression.functions.forEach(funcName => {
      funcs.push(funcName);
    });
  });  

  return funcs;
}