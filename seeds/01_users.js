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
    .then(() => {
      return knex("items").insert([
        {
          user_id: 1,
          title: "My list",
          item_1: "SQL",
          description_1:
            "I want to master SQL and become database administrator",
          item_2: "Surf",
          description_2: "I want to catch a wave in Australia",
          item_3: "Read",
          description_3: "I want to read all the books in the world",
        },
        {
          user_id: 2,
          title: "Adventure list",
          item_1: "Waterfall",
          description_1: "Abseil down a waterfall",
          item_2: "Danger",
          description_2: "Air boat across an alligator  swamp",
          item_3: "Zip line",
          description_3: "Ride a zip line",
        },
        {
          user_id: 3,
          title: "List",
          item_1: "Tattoo",
          description_1: "Get a tattoo",
          item_2: "Love elephants",
          description_2: "Bathe an elephant",
          item_3: "Nature",
          description_3: "Feed a koala bear",
        },
      ]);
    })
    .then(() => {
      return knex("comments").insert([
        {
          text: "Wow, I also want it",
          user_id: 1,
          items_id: 2,
        },
        {
          text: "Elephants are gross",
          user_id: 1,
          items_id: 3,
        },
        {
          text: "I also want a tattoo",
          user_id: 2,
          items_id: 3,
        },
      ]);
    });
};
