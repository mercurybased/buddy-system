const User = require('./User');
const Interest = require('./Interest');

Interest.hasMany(User, {
  foreignKey: 'interest_id',
  onDelete: 'CASCADE'
});

User.belongsTo(Interest, {
  foreignKey: 'interest_id'
});
module.exports = { User, Interest };
