const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CourseInfo extends Model { }

CourseInfo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        website:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        contactInfo: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        hoursOfOp:{ 
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'course_info',
    }
);

module.exports = CourseInfo