exports.seed = function (knex) {
  // First Deletes ALL existing entries
  return knex("items")
    .del()
    .then(() => {
      return knex("users").del();
    })
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        // password
        {
          username: "admin",
          first_name: "Admin",
          last_name: "Admins",
          password:
            "$2b$10$G/v/MRwgMgOAtCUCQRKJTO8GRD/rKxyu61J5wfYimsHd0/FSxuVAq",
          email: "admin@admin.dk",
          is_admin: "Y",
        },
        {
          username: "powerUser",
          first_name: "User",
          last_name: "Power",
          password:
            "$2b$10$G/v/MRwgMgOAtCUCQRKJTO8GRD/rKxyu61J5wfYimsHd0/FSxuVAq",
          email: "powern@power.dk",
          is_admin: "N",
        },
        ,
        {
          username: "A",
          first_name: "A",
          last_name: "AA",
          password:
            "$2b$10$G/v/MRwgMgOAtCUCQRKJTO8GRD/rKxyu61J5wfYimsHd0/FSxuVAq",
          email: "a@aa.dk",
          is_admin: "N",
        },
      ]);
    })
    .then(() => {
      return knex("items").insert([
        {
          user_id: 1,
          item_1: "SQL",
          description_1: "I like SQL",
          item_2: "HTML",
          description_2: "HTML rules",
          item_3: "No CSS",
          description_3: "Never CSS again",
        },
        {
          user_id: 2,
          item_1: "JavaScript",
          description_1: "JavaScript JavaScript JavaScript",
          item_2: "HTML",
          description_2: "HTML HTML HTML",
          item_3: "Node",
          description_3: "Node Node Node",
        },
        {
          user_id: 3,
          item_1: "SQL",
          description_1: "SQL SQL SQL",
          item_2: "PHP",
          description_2: "PHP rules",
          item_3: "CSS",
          description_3: "CSS CSS CSS",
        },
      ]);
    });
};
