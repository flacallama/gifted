
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('gifts').insert([
        {creator_id: 1, giftee_id: 1, idea: "new shoes", idea_notes: 'mom likes shoes', is_past: false, date_given: null, received: false},
        {creator_id: 1, giftee_id: 1, idea: "mink stoll", idea_notes: 'mom likes soft things', is_past: true, date_given: '12/25/2016', received: false},
        {creator_id: 1, giftee_id: 1, idea: "iPhone 10", idea_notes: 'iPhone 4s is scratched', is_past: false, date_given: null, received: true},
        {creator_id: 1, giftee_id: 2, idea: "Horse", idea_notes: 'Dressage is an emerging interest', is_past: true, date_given: 12/25/12, received: false},
        {creator_id: 1, giftee_id: 2, idea: "Bag Pipes", idea_notes: 'Dad has been wanting a counter balance to moms violin', is_past: false, date_given: null, received: false},
        {creator_id: 1, giftee_id: 2, idea: "Necktie", idea_notes: 'Ill never wear this', is_past: true, date_given: 12/25/12, received: true},
        {creator_id: 1, giftee_id: 3, idea: "itune gift card", idea_notes: 'Thats what everyone wants, right?', is_past: false, date_given: null, received: false},
        {creator_id: 1, giftee_id: 3, idea: "certificate to Olive Garde ", idea_notes: 'He said to enjoy the breadscticks', is_past: true, date_given: 12/25/12, received: true},

      ]);
    });
};
