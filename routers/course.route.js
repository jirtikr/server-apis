const router = require('express').Router();
const courseController = require('../controller/course.controller');

router.post("/getallcourse",courseController.getalldata);

module.exports = router;
