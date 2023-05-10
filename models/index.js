const User = require('./User');
const Interest = require('./Interest');

User.hasMany(Interest, {
  foreignKey: 'user_id'
});
Interest.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Interest };
