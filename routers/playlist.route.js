const router = require('express').Router();
const playlistController = require('../controller/playlist.controller');

router.post("/getcourseplaylist",playlistController.getcourseplaylist);

module.exports = router;
