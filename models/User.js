const { Model, ref } = require("objection");
const Items = require("./Items");
const Comments = require("./Comments");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      items: {
        relation: Model.HasManyRelation,
        modelClass: Items,
        join: {
          from: "users.id",
          to: "items.user_id",
        },
      },
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comments,
        join: {
          from: "users.id",
          to: "comments.user_id",
        },
      },
    };
  }
}

module.exports = User;
