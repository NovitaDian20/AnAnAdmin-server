var express = require('express');
var router = express.Router();
const { viewSignin, actionSignin, actionLogout} = require('./controller')

// const { isLoginAdmin } = require('../middleware/auth')

// router.use(isLoginAdmin)

router.get('/', viewSignin);
router.post('/', actionSignin);
router.get('/logout', actionLogout);
module.exports = router;
