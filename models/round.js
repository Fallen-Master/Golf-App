const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Round extends Model {}

Round.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true,
        },
        courseName:{
            type: DataType.STRING,
            allowNull: false,
        },
        date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull:false,
        },
        score:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        
    }
)