const router = require('express').Router();
const { Comment, User } = require('../../models');
const { courseCheck } = require('../../utils/courseCheck');
const withAuth = require('../../utils/auth')

router.post('/add-comment/:courseName', withAuth, async (req, res) => {
  try {
    const { content } = req.body;
    const { user_id } = req.session.user;
    const { courseName } = req.params;

    const courseId = await courseCheck(courseName);

    const newComment = await Comment.create({
      content,
      user_id,
      club_id: courseId,
    });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
