const router = require('express').Router();
const { Club, User, Round } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/clubRanges', withAuth, async (req, res) => {
  try {
    const clubData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Club,
          attributes: ['name', 'yardage']
        }
      ]
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

router.get('/history', withAuth, async (req, res) => {
  try {
    const historyData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Round,
          attributes: ['courseName', 'date', 'score', 'par', 'comment']
        }
      ]
    })
    const history = historyData.map((his) => his.get({ plain: true }));
    res.render('history', {
      history,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('./startSession', withAuth, async (req, res) =>{
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
  }
 
})

router.get('/login', (req, res) => { 
  if (req.session.logged_in) {// if user is logged in it takes them to the thier history
    res.redirect('/history');
    return;
  }
  res.render('login');
});

module.exports = router;