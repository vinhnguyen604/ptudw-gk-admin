var express = require('express');
var router = express.Router();
const users = require('../controllers/users');

/* GET users listing. */
router.get('/', users.getUsers);

router.get('/guest', users.getGuests);

router.get('/admin', users.getAdmins);

router.post('/block', users.blockUser);

router.post('/unblock', users.unblockUser);

module.exports = router;
