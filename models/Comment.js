const { Model } = require("objection");

class Comments extends Model {
  static get tableName() {
    return "comments";
  }

  static get relationMappings() {
    const Items = require("./Items");
    const User = require("./User");
    return {
      items: {
        relation: Model.HasManyRelation,
        modelClass: Items,
        join: {
          from: "comments.user_id",
          to: "items.user_id",
        },
      },
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "comments.user_id",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Comments;
