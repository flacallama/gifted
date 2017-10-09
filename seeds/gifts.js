
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('gifts').insert([
        {creator_id: 1, giftee_id: 1, idea: "new shoes", idea_notes: 'mom likes shoes', is_past: false, date_given: null},
        {creator_id: 1, giftee_id: 1, idea: "mink stoll", idea_notes: 'mom likes soft things', is_past: true, date_given: '12/25/2016'},
        {creator_id: 1, giftee_id: 1, idea: "iPhone 10", idea_notes: 'iPhone 4s is scratched', is_past: false, date_given: null},
      ]);
    });
};
