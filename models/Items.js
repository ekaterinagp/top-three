const { Model, ref } = require("objection");

class Items extends Model {
  static get tableName() {
    return "items";
  }

  static get relationMappings() {
    const Comments = require("./Comments");
    const User = require("./User");
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comments,
        join: {
          from: "items.id",
          to: "comments.items_id",
        },
      },
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "items.user_id",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Items;
