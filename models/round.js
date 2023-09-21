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
            type: DataTypes.STRING,
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
        par:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        comment:{
            type: DataTypes.TEXT,
            allowNull:true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'round',
    }
);

module.exports = Round