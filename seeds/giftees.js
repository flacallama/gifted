
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('giftees').del()
    .then(function () {
      // Inserts seed entries
      return knex('giftees').insert([
        {creator_id: 1, first_name: 'Mary', last_name: "Minsk", relationship: 'mother', email: 'mom@mom.com', age: 54},
        {creator_id: 1, first_name: 'Barry', last_name: "Hartman", relationship: 'father', email: 'test@test.com', age: 45},
        {creator_id: 1, first_name: 'Harry', last_name: "Hartman", relationship: 'brother', email: 'test@test.com', age: 24},
        {creator_id: 1, first_name: 'Bobby', last_name: "Bobel", relationship: 'brother', email: 'test@test.com', age: 24},
        {creator_id: 1, first_name: 'Suzy', last_name: "Simford", relationship: 'sister', email: 'test@test.com', age: 24},
        {creator_id: 1, first_name: 'Lisa', last_name: "Simford", relationship: 'niece', email: 'test@test.com', age: 44}
      ]);
    });
};
