'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _localizer = require('./localizer');

var _momentLocalizer = require('./moment-localizer');

var _momentLocalizer2 = _interopRequireDefault(_momentLocalizer);

var _globalizeLocalizer = require('./globalize-localizer');

var _globalizeLocalizer2 = _interopRequireDefault(_globalizeLocalizer);

var _utilsViewLabel = require('./utils/viewLabel');

var _utilsViewLabel2 = _interopRequireDefault(_utilsViewLabel);

var _utilsMove = require('./utils/move');

var _utilsMove2 = _interopRequireDefault(_utilsMove);

_extends(_Calendar2['default'], {
  setLocalizer: _localizer.set,
  globalizeLocalizer: _globalizeLocalizer2['default'],
  momentLocalizer: _momentLocalizer2['default'],
  label: _utilsViewLabel2['default'],
  move: _utilsMove2['default']
});

exports['default'] = _Calendar2['default'];
module.exports = exports['default'];