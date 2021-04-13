const db = require('./db');
const User = require('./users');


const Todo = db.define('Todo', {
    // Model attributes are defined here
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    done: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false
      // allowNull defaults to true
    },
});


Todo.belongsTo(User);
User.hasMany(Todo);

module.exports = Todo;