const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    eamount:{
        type:Number,
        required:true
    },
    edescription:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
    }

})

module.exports = mongoose.model('Expense', expenseSchema);

//const Sequelize = require('sequelize');


/*
const sequelize = require('../util/database');

const Expense = sequelize.define('expense',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    eamount:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    edescription:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false
    }
    

});
*/



//module.exports = Expense;