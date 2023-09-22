const Club = require('./club')
const Round = require('./round')
const User = require('./user')

Club.belongsToMany(Round, {
    through:{
        model: User,
        unique: false
    },
    as:'clubRound'
});

Round.belongsToMany(Club, {
    through:{
        model: User,
        unique: false
    },
    as: 'roundClub'
})