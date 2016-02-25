'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}




  /**
   * index action
   * @return {Promise} []
   */_class.prototype.
  indexAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 





      n;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:this.assign({ title: "house", css: "index", js: "index" });n = this.display();return _context.abrupt('return', 
              n);case 3:case 'end':return _context.stop();}}}, _callee, this);}));return function indexAction() {return ref.apply(this, arguments);};}();_class.prototype.

  moreAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 
      data;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this.model('house').select();case 2:data = _context2.sent;return _context2.abrupt('return', 
              this.success(data));case 4:case 'end':return _context2.stop();}}}, _callee2, this);}));return function moreAction() {return ref.apply(this, arguments);};}();_class.prototype.

  zlAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {var 
      num, 
      model, 
      data;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:num = this.post('id');model = this.model("zl");_context3.next = 4;return model.where({ id: num }).find();case 4:data = _context3.sent;return _context3.abrupt('return', 
              this.end(data));case 6:case 'end':return _context3.stop();}}}, _callee3, this);}));return function zlAction() {return ref.apply(this, arguments);};}();_class.prototype.

  zhuceAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {var 
      username, 
      qq, 
      mail, 
      telephone, 
      zhenjian, 
      pass, 
      sign, 
      data, 








      result;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:username = this.post('username');qq = this.post('qq');mail = this.post('mail');telephone = this.post('telephone');zhenjian = this.post('zhenjian');pass = this.post('pass');sign = this.post('sign');data = { username: username, qq: qq, mail: mail, telephone: telephone, zhenjian: zhenjian, pass: pass, sign: sign };_context4.next = 10;return this.model('user').add(data);case 10:result = _context4.sent;return _context4.abrupt('return', 
              this.success(result));case 12:case 'end':return _context4.stop();}}}, _callee4, this);}));return function zhuceAction() {return ref.apply(this, arguments);};}();_class.prototype.

  dlAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {var 
      name, 
      pass, 
      model, 
      data, 
      msg;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:name = this.post('u_name');pass = this.post("u_pass");model = this.model("user");_context5.next = 5;return model.where({ username: name }).find();case 5:data = _context5.sent;msg = "";
              if (data.pass == pass) {
                msg = data.sign;}
              ;return _context5.abrupt('return', 
              this.success(msg));case 10:case 'end':return _context5.stop();}}}, _callee5, this);}));return function dlAction() {return ref.apply(this, arguments);};}();_class.prototype.

  dmAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {var 
      index, 
      model, 
      data;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:index = this.post('id');model = this.model("dm");_context6.next = 4;return model.where({ dm_id: index }).select();case 4:data = _context6.sent;return _context6.abrupt('return', 
              this.success(data));case 6:case 'end':return _context6.stop();}}}, _callee6, this);}));return function dmAction() {return ref.apply(this, arguments);};}();_class.prototype.

  adddmAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {var 
      index, 
      msg, 
      name, 
      model, 
      data, 




      result;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:index = this.post('id');msg = this.post('msg');name = this.post('name');model = this.model("dm");data = { username: name, dm_id: index, msg: msg };_context7.next = 7;return this.model('dm').add(data);case 7:result = _context7.sent;return _context7.abrupt('return', 
              this.success(result));case 9:case 'end':return _context7.stop();}}}, _callee7, this);}));return function adddmAction() {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;