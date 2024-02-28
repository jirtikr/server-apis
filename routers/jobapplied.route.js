const router = require('express').Router();
const jobController = require('../controller/jobapplied.controller');

router.post("/registerjobapplied",jobController.registerjobapplied);
router.post("/getalljobapplied",jobController.getalljobapplied);
router.post("/updatejobapplied",jobController.updatejobapplied);

module.exports = router;
