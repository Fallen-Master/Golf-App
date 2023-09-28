const router = require('express').Router();
const userRoutes = require('./userRoutes');
const courseRoutes = require('./courseRoutes');
const commentRoutes = require('./commentRoute');

router.use('/user', userRoutes);

router.use('/course', courseRoutes);

router.use('/comment', commentRoutes);

module.exports = router;
