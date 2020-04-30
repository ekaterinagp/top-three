exports.up = function (knex, Promise) {
  return knex.schema.createTable("comments", (table) => {
    table.increments("id");
    table.string("text").notNullable();
    table.foreign("user_id").references("users.id");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("comments");
};
