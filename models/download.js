const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const Downloadurl = new Schema({
    filename:{
        type:String,
        required:true
    },
    fileURL:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
});

module.exports = mongoose.model('Download', Downloadurl);


/*
const Sequelize =require('sequelize');
const sequelize = require('../util/database');



const Downloadurl = sequelize.define('downloadurl' , {
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    filename:{
        type:Sequelize.STRING,
        allowNull:false,
    }
    fileURL:{
        type:Sequelize.STRING,
        allowNull:false,
    }
})

module.exports = Downloadurl
*/