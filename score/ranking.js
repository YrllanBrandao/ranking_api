const Connection = require("../database/database");
const Sequelize = require("sequelize");



const User = Connection.define("user", {
    nickname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    score: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


User.sync({force:false})


module.exports = User;