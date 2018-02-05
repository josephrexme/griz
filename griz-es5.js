'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.GridCol = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  flex: 1;\n  width: 100%;\n  ', '\n  ', '\n'], ['\n  display: block;\n  flex: 1;\n  width: 100%;\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex: 0 0 ', '%;\n    max-width: ', '%;\n  '], ['\n    flex: 0 0 ', '%;\n    max-width: ', '%;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    margin-left: ', '%;\n  '], ['\n    margin-left: ', '%;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  & + &{\n    margin-top: ', 'px;\n    padding-top: 0;\n  }\n  padding: ', 'px;\n  > ', '{\n    padding: ', 'px;\n  }\n  @media (max-width: ', '){\n    ', '\n  }\n  @media (max-width: ', '){\n    ', '\n  }\n  @media (max-width: ', '){\n    ', '\n  }\n  ', '\n'], ['\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  & + &{\n    margin-top: ', 'px;\n    padding-top: 0;\n  }\n  padding: ', 'px;\n  > ', '{\n    padding: ', 'px;\n  }\n  @media (max-width: ', '){\n    ', '\n  }\n  @media (max-width: ', '){\n    ', '\n  }\n  @media (max-width: ', '){\n    ', '\n  }\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n      flex-direction: column;\n      > ', '{\n        margin-bottom: ', 'px;\n        margin-left: 0;\n        max-width: 100%;\n        width: 100%;\n      }\n    '], ['\n      flex-direction: column;\n      > ', '{\n        margin-bottom: ', 'px;\n        margin-left: 0;\n        max-width: 100%;\n        width: 100%;\n      }\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    padding: 0;\n    > ', '{\n      padding: 0;\n    }\n  '], ['\n    padding: 0;\n    > ', '{\n      padding: 0;\n    }\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gutterWidth = 10;
var responsiveSmBreak = '567px';
var responsiveMdBreak = '767px';
var responsiveLgBreak = '1023px';

var GridCol = exports.GridCol = _styledComponents2.default.div(_templateObject, function (props) {
  return props.column && (0, _styledComponents.css)(_templateObject2, props.column, props.column);
}, function (props) {
  return props.offset && (0, _styledComponents.css)(_templateObject3, props.offset);
});

var Grid = exports.Grid = _styledComponents2.default.div(_templateObject4, function (props) {
  return (props.gutterWidth || gutterWidth) / 2 * -1;
}, function (props) {
  return (props.gutterWidth || gutterWidth) / 2;
}, GridCol, function (props) {
  return (props.gutterWidth || gutterWidth) / 2;
}, responsiveSmBreak, function (props) {
  return props.responsiveSm && (0, _styledComponents.css)(_templateObject5, GridCol, (props.gutterWidth || gutterWidth) * 3 / 2);
}, responsiveMdBreak, function (props) {
  return props.responsiveMd && (0, _styledComponents.css)(_templateObject5, GridCol, (props.gutterWidth || gutterWidth) * 3 / 2);
}, responsiveLgBreak, function (props) {
  return props.responsiveLg && (0, _styledComponents.css)(_templateObject5, GridCol, (props.gutterWidth || gutterWidth) * 3 / 2);
}, function (props) {
  return props.gutterless && (0, _styledComponents.css)(_templateObject6, GridCol);
});
