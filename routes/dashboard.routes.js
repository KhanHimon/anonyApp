var express = require('express');
var router = express.Router();
const POSTS_CONTROLLER = require('../controllers/posts.controller');
const MESSAGE_CONTROLLER = require('../controllers/message.controller');
const DASHBOARD_CONTROLLER = require('../controllers/dashboard.controller');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + '.jpg' )
  }
})
   
  var upload = multer({ storage: storage })

/* GET home page. */
router.get('/',  DASHBOARD_CONTROLLER.show_dashboard);
router.post('/message', MESSAGE_CONTROLLER.new_message);
router.post('/comment', POSTS_CONTROLLER.new_comment);
router.post('/bai-dang', upload.single('img_posts'), POSTS_CONTROLLER.new_posts);


module.exports = router;
