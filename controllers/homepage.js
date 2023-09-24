const router = require('express').Router();
const { Club, User, Round } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/club', withAuth, async (req, res) => {
  try {
    const clubData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Club,
          attributes: ['name', 'yardage']
        }
      ]
    })
    const club = clubData.Club.map((club) => this.post.get({ plain: true }));
    res.render('dashboard', {
      club,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;