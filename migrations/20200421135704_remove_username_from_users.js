exports.up = function (knex, Promise) {
  return knex.schema.table("users", function (t) {
    t.dropColumn("username");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.table("users", function (t) {
    t.enum("username", [
      "id",
      "email",
      "first_name",
      "last_name",
      "password",
    ]).notNull();
  });
};
