const Club = require('./club');
const Round = require('./round');
const User = require('./user');

// User and Round relationship
User.hasMany(Round, {
    foreignKey: 'user_id'
});
Round.belongsTo(User, {
    foreignKey: 'user_id'
});

// User and Club relationship
User.hasMany(Club, {
    foreignKey: 'user_id'
});
Club.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    Club,
    Round,
    User
};