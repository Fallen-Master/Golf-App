const router = require('express').Router();
const { Club, User, Round } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});
//pulls up club names and yardage
router.get('/clubRanges', withAuth, async (req, res) => {
  try {
    const clubData = await Club.findAll({
      where:{
        user_id: req.session.user_id,
      },
      order: [
        ['name', 'ASC']
      ],
      attributes: ['name', 'yardage']
    })
    const clubinfo = clubData.map((cl) => cl.get({ plain: true }));
    res.render('clubRanges', {
      clubinfo,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//looks for all history descending
router.get('/history', withAuth, async (req, res) => {
  try {
    const historyData = await Round.findAll({
      where: {
        user_id: req.session.user_id,
      },
      order: [
        ['date', 'DESC'],
      ],
      attributes: ['courseName', 'date', 'score', 'par', 'comment'],
    });
    const history = historyData.map((his) => his.get({ plain: true }));
    res.render('history', {
      history,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

//Looks for previous fivE games
router.get('/startSession', withAuth, async (req, res) =>{
  try {
   const historyData = await Round.findAll({
      where: {
        user_id: req.session.user_id,
      },
      limit: 5,
      order: [
        ['date', 'DESC'],
      ],
      attributes: ['courseName', 'date', 'score', 'par', 'comment'],
    });
    
    const history = historyData.map((his) => his.get({ plain: true }));
    res.render('startSession', {
      history,
      logged_in: req.session.logged_in
    });
  } catch(err) {
    res.status(500).json(err)
  }
 
})
// if user is logged in it takes them to the thier history
router.get('/login', (req, res) => { 
  if (req.session.logged_in) {
    res.redirect('/history');
    return;
  }
  res.render('login');
});

// Signup
router.get('/signup', async (req, res) => {
  res.render('signup');
})

module.exports = router;