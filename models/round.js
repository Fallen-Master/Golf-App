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
        date:{
            type: DataTypes.DATE,
            type: DataTypes.NOW,
            allowNull:false,

        },
    }
)