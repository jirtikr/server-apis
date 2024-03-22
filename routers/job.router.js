const router = require('express').Router();
const jobController = require('../controller/job.controller');

router.post("/registerjob",jobController.registerjob);
router.post("/getalljob",jobController.getalljob);
router.post("/updatejob",jobController.updatejob);

module.exports = router;
