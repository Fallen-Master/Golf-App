const router = require('express').Router();
const { CourseInfo, User, Comment } = require('../models')
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});
router.get('/homepage', async (req, res) => {
  res.render('homepage');
});router.get('/clubRanges', async (req, res) => {
  res.render('ClubRanges');
});
router.get('/signup', async (req, res) => {
  res.render('signup');
});
router.get('/playingPage/:courseName', (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a41af16ff5msh7a6c6e9df83c957p184bbajsncd5a40f520fb',
      'X-RapidAPI-Host': 'golf-course-api.p.rapidapi.com'
    }
  };
  const currentCourse = req.params.courseName
  const requestUrl = `https://golf-course-api.p.rapidapi.com/search?name=${currentCourse}`;

  fetch(requestUrl, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(JSON.stringify(data))
      res.render('playingPage', {
        holes:data[0].scorecard
      } )
    });
 
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Signup
router.get('/signup', async (req, res) => {
  res.render('signup');
})

module.exports = router;