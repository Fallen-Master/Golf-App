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
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'courseInfo',
    }
);

module.exports = CourseInfo