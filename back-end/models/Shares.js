const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shares', {
    share_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    share_user: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    share_video: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'Videos',
        key: 'video_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Shares',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "share_id" },
        ]
      },
      {
        name: "fk_share_user",
        using: "BTREE",
        fields: [
          { name: "share_user" },
        ]
      },
      {
        name: "fk_share_video",
        using: "BTREE",
        fields: [
          { name: "share_video" },
        ]
      },
    ]
  });
};
