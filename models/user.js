const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    ispremiumuser:{
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('User',userSchema);

/*const Sequelize = require('sequelize');

const sequelize = require('../util/database');



const User = sequelize.define('user', {
    
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    username:{
        type: Sequelize.STRING,
        
    },
    email:{
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    password: {
        type: Sequelize.STRING,
        
    },
    ispremiumuser:{
        type: Sequelize.BOOLEAN,
        default: false
    }

});

module.exports = User;*/