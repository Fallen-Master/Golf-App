const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Club extends Model { }

Club.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        user_id: {
            tpye: DataTypes.INTEGER,
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
        modelName: 'club',
    }
);

module.exports = Club; 