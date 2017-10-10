
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('giftees').del()
    .then(function () {
      // Inserts seed entries
      return knex('giftees').insert([
        {creator_id: 1, first_name: 'Mary', last_name: "Minsk", relationship: 'mother', budget: 100, email: 'mom@mom.com', age: 54, birthday: true, birthdate: "12/12/56", xmas: true, hanukka: false, mothersday: true, fathersday: false, valentines: true, anniday: true, annidate: '10/1/76'},
        {creator_id: 1, first_name: 'Barry', last_name: "Hartman", relationship: 'father', budget: 30, email: 'test@test.com', age: 45, birthday: true, birthdate: "12/12/57", xmas: true, hanukka: false, mothersday: false, fathersday: true, valentines: false, anniday: true, annidate: '10/1/76'},
        {creator_id: 1, first_name: 'Harry', last_name: "Hartman", relationship: 'brother', budget: 10, email: 'test@test.com', age: 24, birthday: true, birthdate: "12/1291", xmas: true, hanukka: false, mothersday: false, fathersday: false, valentines: false, anniday: false, annidate: null},
      ]);
    });
};
