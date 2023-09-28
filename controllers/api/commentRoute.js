const router = require('express').Router();
const { Comment, User } = require('../../models');
const { courseCheck } = require('../../utils/courseCheck');

// Create a comment for a specific golf course
router.post('/add-comment/:courseName', withAuth, async (req, res) => {
  try {
    const { content } = req.body;
    const { user_id } = req.session.user;
    const { courseName } = req.params;

    // Ensure the course exists or create it
    const courseId = await courseCheck(courseName);

    // Create the comment and associate it with the golf course and user
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
