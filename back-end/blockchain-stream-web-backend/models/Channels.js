const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Channels', {
    channel_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    channel_owner: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id'
      },
      unique: "fk_channel_owner"
    },
    channel_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Channels',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
      {
        name: "owner_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "channel_owner" },
        ]
      },
    ]
  });
};
