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
            type: DataTypes.TEXT,
            allowNull: false,
            unique:true,
        },
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