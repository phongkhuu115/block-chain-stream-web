const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Subscribes', {
    subscribe_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    subscribe_user: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    subscribe_channel: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'Channels',
        key: 'channel_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Subscribes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subscribe_id" },
        ]
      },
      {
        name: "fk_subscriber",
        using: "BTREE",
        fields: [
          { name: "subscribe_user" },
        ]
      },
      {
        name: "fk_sub_channel",
        using: "BTREE",
        fields: [
          { name: "subscribe_channel" },
        ]
      },
    ]
  });
};
