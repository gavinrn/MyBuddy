const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Like = require("./Like");

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// TO DO, ASSOCIATIONS FOR "LIKE"

module.exports = {
  User,
  Post,
  Comment,
  Like,
};

/* 
APPENDIX:
- User hasMany Post (when you go to your user wall, see just your posts)
- Post belongs to User (the homepage wall of posts)
- Post hasMany Comment (looking at a post on any page, see all comments)
- Comment belongs to User (For the comment, which user posted it)
*/
