const router = require('express').Router();
const adverController = require('../controller/started.controller');

router.post("/registerstarted",adverController.registerstarted);
router.post("/getstartedlength",adverController.getstartedlength);
router.post("/getstartedunique",adverController.getstartedunique);

module.exports = router;
