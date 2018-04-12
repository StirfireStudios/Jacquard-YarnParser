'use strict';

const Base = require('../base');

const privateProps = new WeakMap();

/**
 * a null value
 * @memberof Expression
 * @augments Expression.Base
 * @class NullValue
 */
class NullValue extends Base {
}

module.exports = NullValue;