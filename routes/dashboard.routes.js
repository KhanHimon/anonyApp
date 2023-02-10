var express = require('express');
var router = express.Router();
const POSTS_CONTROLLER = require('../controllers/posts.controller');

/* GET home page. */
router.get('/',  POSTS_CONTROLLER.show_posts);
router.post('/bai-dang', POSTS_CONTROLLER.new_posts);

module.exports = router;
