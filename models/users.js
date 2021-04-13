const { DataTypes } = require('sequelize');
const db = require('./db');


const User = db.define('User', {
    // Model attributes are defined here
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
});


// const User = [{
//     id : 1,
//     Name: 'Quang Huy',
//     email: '18600109',
//     password: 'kocopass'
// }];


User.findByEmail = async function (email) {
    return User.findOne({
        where: {
            email,
        },
    });
}


User.findById = async function(id){
    return User.findBypk(id);
};

module.exports = User;