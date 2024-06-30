const express = require('express');
const router = express.Router();

const applicationController = require('../controllers/application.controller');

router.get('/', applicationController.getApplication);
router.post('/process', applicationController.processApplication);

module.exports = router;