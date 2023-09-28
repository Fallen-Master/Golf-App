const router = require('express').Router();
const { Club, User, Round } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});
router.get('/')
// if user is logged in it takes them to the thier history
router.get('/login', (req, res) => { 
  if (req.session.logged_in) {
    res.redirect('/hompage');
    return;
  }
  res.render('login');
});

module.exports = router;