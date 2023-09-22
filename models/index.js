const Club = require('./club')
const Round = require('./round')
const User = require('./user')

User.hasMany(Round, {
    foreignKey:'user_id'
})
Round.belongsTo(User,{
    foreignKey:'user_id'
})

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