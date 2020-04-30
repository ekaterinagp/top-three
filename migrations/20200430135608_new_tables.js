exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id");
      table.string("email").notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("password").notNullable();
      table.boolean("is_admin").defaultTo("N");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("items", (table) => {
      table.increments("id");
      table.string("item_1").notNullable();
      table.string("description_1").notNullable();
      table.string("item_2").notNullable();
      table.string("description_2").notNullable();
      table.string("item_3").notNullable();
      table.string("description_3").notNullable();
      table.integer("user_id").unsigned().notNullable();
      table
        .foreign("user_id")
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("comments", (table) => {
      table.increments("id");
      table.string("text").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .foreign("user_id")
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("items")
    .dropTableIfExists("users")
    .dropTableIfExists("comments");
};
