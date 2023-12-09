var DataTypes = require("sequelize").DataTypes;
var _Channels = require("./Channels");
var _Comments = require("./Comments");
var _Followers = require("./Followers");
var _Labels = require("./Labels");
var _User_Favorites = require("./User_Favorites");
var _Users = require("./Users");
var _Video_Labels = require("./Video_Labels");
var _Videos = require("./Videos");

function initModels(sequelize) {
  var Channels = _Channels(sequelize, DataTypes);
  var Comments = _Comments(sequelize, DataTypes);
  var Followers = _Followers(sequelize, DataTypes);
  var Labels = _Labels(sequelize, DataTypes);
  var User_Favorites = _User_Favorites(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);
  var Video_Labels = _Video_Labels(sequelize, DataTypes);
  var Videos = _Videos(sequelize, DataTypes);

  Labels.belongsToMany(Users, { as: 'user_id_Users', through: User_Favorites, foreignKey: "label_id", otherKey: "user_id" });
  Labels.belongsToMany(Videos, { as: 'video_id_Videos', through: Video_Labels, foreignKey: "label_id", otherKey: "video_id" });
  Users.belongsToMany(Labels, { as: 'label_id_Labels', through: User_Favorites, foreignKey: "user_id", otherKey: "label_id" });
  Videos.belongsToMany(Labels, { as: 'label_id_Labels_Video_Labels', through: Video_Labels, foreignKey: "video_id", otherKey: "label_id" });
  User_Favorites.belongsTo(Labels, { as: "label", foreignKey: "label_id"});
  Labels.hasMany(User_Favorites, { as: "User_Favorites", foreignKey: "label_id"});
  Video_Labels.belongsTo(Labels, { as: "label", foreignKey: "label_id"});
  Labels.hasMany(Video_Labels, { as: "Video_Labels", foreignKey: "label_id"});
  Channels.belongsTo(Users, { as: "channel_owner_User", foreignKey: "channel_owner"});
  Users.hasOne(Channels, { as: "Channel", foreignKey: "channel_owner"});
  Comments.belongsTo(Users, { as: "comment_user_User", foreignKey: "comment_user"});
  Users.hasMany(Comments, { as: "Comments", foreignKey: "comment_user"});
  Followers.belongsTo(Users, { as: "follower", foreignKey: "follower_id"});
  Users.hasMany(Followers, { as: "Followers", foreignKey: "follower_id"});
  Followers.belongsTo(Users, { as: "following", foreignKey: "following_id"});
  Users.hasMany(Followers, { as: "following_Followers", foreignKey: "following_id"});
  User_Favorites.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(User_Favorites, { as: "User_Favorites", foreignKey: "user_id"});
  Videos.belongsTo(Users, { as: "video_owner_User", foreignKey: "video_owner"});
  Users.hasMany(Videos, { as: "Videos", foreignKey: "video_owner"});
  Comments.belongsTo(Videos, { as: "comment_video_Video", foreignKey: "comment_video"});
  Videos.hasMany(Comments, { as: "Comments", foreignKey: "comment_video"});
  Video_Labels.belongsTo(Videos, { as: "video", foreignKey: "video_id"});
  Videos.hasMany(Video_Labels, { as: "Video_Labels", foreignKey: "video_id"});

  return {
    Channels,
    Comments,
    Followers,
    Labels,
    User_Favorites,
    Users,
    Video_Labels,
    Videos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
