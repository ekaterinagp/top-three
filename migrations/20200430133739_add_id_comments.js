exports.up = function (knex, Promise) {
  knex.schema.table("comments", function (table) {
    table.foreign("user_id").reference("users.id");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.table("comments", function (table) {
    table.enum("id", "text", "created_at", "user_id");
  });
};
