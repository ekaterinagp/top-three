const { Model } = require("objection");

class Items extends Model {
  static get tableName() {
    return "items";
  }
}

module.exports = Items;
