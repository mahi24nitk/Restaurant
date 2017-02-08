var express = require('express');
var router = express.Router();
router.use('/restaurant/',require('../controller/restinformation'));
router.use('/restaurant/',require('../controller/restinformation'));
router.use('/restaurant/detail/',require('../controller/restinformation'));
router.use('/restaurant/remove/',require('../controller/restinformation'));
router.use('/restaurant/',require('../controller/restuser'));
router.use('/restaurant/',require('../controller/restuser'));
router.use('/restaurant/booking',require('../controller/booking'));
router.use('/restaurant/bookdelete/',require('../controller/booking'));
router.use('/restaurant/edit/',require('../controller/booking'));
router.use('/restaurant/',require('../controller/booking'));
router.use('/restaurant/update/',require('../controller/booking'));
router.use('/restaurant/review/',require('../controller/review'));
router.use('/restaurant/review/',require('../controller/review'));




module.exports = router;
