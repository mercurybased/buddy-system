const User = require('./User');
const Interest = require('./Interest');
// const Biography = require('./Biography');
// const Location = require('./Location');
// const Image = require('./Image');


User.hasMany(Interest, {
  foreignKey: 'interest_id'
});
Interest.belongsTo(User, {
  foreignKey: 'user_id'
});

// User.hasOne(Location)
// Location.hasMany(User, {
//     foreignKey: 'user_id'
// })

// User.hasOne(Biography)
// Biography.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// User.hasOne(Image)
// Image.hasMany(Users)

module.exports = { User, Interest};
