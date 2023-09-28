const router = require('express').Router();
const { CourseInfo, User, Comment } = require('../models')
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});
router.post('/search', withAuth, async (req, res) => {
  try {
    const { searchQuery } = req.body;
    
    // Perform a search query based on user input
    const courses = await Club.findAll({
      where: {
        name: {
          [Op.iLike]: `%${searchQuery}%`, // Use case-insensitive search
        },
      },
    });

    res.render('homepage', { courses, user: req.session.user });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => { 
  if (req.session.logged_in) {
    res.redirect('/hompage');
    return;
  }
  res.render('login');
});

module.exports = router;