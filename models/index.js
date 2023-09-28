const Club = require('./club');
const Comment = require('./round');
const User = require('./user');

// User and Round relationship
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    Club,
    User
};