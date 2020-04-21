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
          email: "admin@admin.dk",
          first_name: "Admin",
          last_name: "Admins",
          password:
            "$2b$10$G/v/MRwgMgOAtCUCQRKJTO8GRD/rKxyu61J5wfYimsHd0/FSxuVAq",
          is_admin: "Y",
        },
        {
          email: "powern@power.dk",
          first_name: "User",
          last_name: "Power",
          password:
            "$2b$10$G/v/MRwgMgOAtCUCQRKJTO8GRD/rKxyu61J5wfYimsHd0/FSxuVAq",
          is_admin: "N",
        },
        {
          email: "a@aa.dk",
          first_name: "A",
          last_name: "AA",
          password:
            "$2b$10$G/v/MRwgMgOAtCUCQRKJTO8GRD/rKxyu61J5wfYimsHd0/FSxuVAq",
          is_admin: "N",
        },
      ]);
    })
    .then((userId) => {
      return knex("items").insert([
        {
          user_id: 17,
          item_1: "SQL",
          description_1: "I like SQL",
          item_2: "HTML",
          description_2: "HTML rules",
          item_3: "No CSS",
          description_3: "Never CSS again",
        },
        {
          user_id: 18,
          item_1: "JavaScript",
          description_1: "JavaScript JavaScript JavaScript",
          item_2: "HTML",
          description_2: "HTML HTML HTML",
          item_3: "Node",
          description_3: "Node Node Node",
        },
        {
          user_id: 19,
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
