const User = require('./User');
const Interest = require('./Interest');

User.hasMany(Interest, {
  foreignKey: 'user_id'
});
Interest.belongsTo(User, {
  foreignKey: 'user_id'
});

// User.hasOne(Biography)
// Biography.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// User.hasOne(Location)

// User.hasOne(Image)

module.exports = { User, Interest };
