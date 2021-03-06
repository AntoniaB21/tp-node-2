const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

(async() => {
    await sequelize.sync();
});

class User extends Model{}

User.init({
    username: DataTypes.STRING,
    birdthdate: DataTypes.DATE,
},{ sequelize, modelName: 'user'});

module.exports = {
    User,
}