"use strict";
/*!
 * Copyright (c) 2013-2014 9elements GmbH
 *
 * Released under Attribution-NonCommercial 3.0 Unported
 * http://creativecommons.org/licenses/by-nc/3.0/
 *
 * For commercial use, please contact us at contact@9elements.com
 */

var fs = require("fs");
var Template = require("../../../base/template");

/**
 * An operation button
 *
 * @class
 * @extends ImglyKit.UI.Template
 * @private
 */
var OperationButtonPartial = Template.extend();

/**
 * The string that will be used in the parent template
 * @type {String}
 */
OperationButtonPartial.prototype.name = "operationButton";

/**
 * The source of this partial
 * @type {String}
 */
OperationButtonPartial.prototype.source = fs.readFileSync(__dirname + "/../../templates/controls/operation-button.mustache", "utf8");

module.exports = OperationButtonPartial;
