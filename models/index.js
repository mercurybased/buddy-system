
// const Post = require('./Post');
// const Comment = require('./Comments');


// Post.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete:"CASCADE"
// });
// Post.hasMany(Comment, {
//   foreignKey: 'post_id',
//   onDelete:"CASCADE"
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete:"CASCADE"
// });




const User = require('./User');
const Interest = require('./Interest');
const Biography = require('./Biography');
// const Location = require('./Location');
// const Image = require('./Image');
module.exports = { 
  User, 
  // Post, Comment 
};

User.hasMany(Interest, {
  foreignKey: 'user_id'
});
Interest.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasOne(Biography)
Biography.belongsTo(User, {
  foreignKey: 'user_id'
});

// User.hasOne(Location)

// User.hasOne(Image)

module.exports = { User, Interest, Biography};
