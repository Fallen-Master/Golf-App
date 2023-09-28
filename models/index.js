const User = require('./User');
const Comment = require('./Comment');
const CourseInfo = require('./courseInfo');


User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE' 
});


Comment.belongsTo(User, {
  foreignKey: 'user_id'
});


Comment.belongsTo(CourseInfo, {
  foreignKey: 'courseInfo',
  as: 'course_information'
});


CourseInfo.hasMany(Comment, {
  foreignKey: 'courseInfo',
  as: 'course_comments'
});

module.exports = { User, Comment, CourseInfo };
