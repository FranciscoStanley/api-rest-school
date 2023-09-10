"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _StudentController = require('../controllers/StudentController'); var _StudentController2 = _interopRequireDefault(_StudentController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.post('/create', _StudentController2.default.create);
router.get('/', _loginRequired2.default, _StudentController2.default.getAll);
router.get('/:id', _loginRequired2.default, _StudentController2.default.getById);
router.patch('/update/:id', _loginRequired2.default, _StudentController2.default.update);
router.delete('/delete/:id', _loginRequired2.default, _StudentController2.default.delete);

exports. default = router;
