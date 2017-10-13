
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('giftees').del()
    .then(function () {
      // Inserts seed entries
      return knex('giftees').insert([
        {creator_id: 1, first_name: 'Mary', last_name: "Minsk", relationship: 'mother', budget: "$100+", email: 'mom@mom.com', age: 54, birthday: true, birthdate: '2017-11-05T16:46:38.855Z', birthday_price: 50, xmas: true, xmas_price: 60, hanukka: false, mothersday: true, mothersday_price: 30, fathersday: false, valentines: true, valentines_price: 25, anniday: true, anniday_price: 20, annidate: '2017-11-27T16:46:38.855Z'},
        {creator_id: 1, first_name: 'Barry', last_name: "Hartman", relationship: 'father', budget: "$30-$49", email: 'test@test.com', age: 45, birthday: true, birthdate: '2017-10-29T16:46:38.855Z', birthday_price: 25, xmas: true, xmas_price: 30, hanukka: false, mothersday: false, fathersday: true, fathersday_price: 20, valentines: false, anniday: true, annidate: '2017-11-05T16:46:38.855Z', anniday_price: 20},
        {creator_id: 1, first_name: 'Harry', last_name: "Hartman", relationship: 'brother', budget: "$0-$14", email: 'test@test.com', age: 24, birthday: true, birthdate: '2017-12-17T16:46:38.855Z', birthday_price: 25, xmas: false, hanukka: true, hanukka_price: 20, mothersday: false, fathersday: false, valentines: false, anniday: true, annidate: '2017-10-27T16:46:38.855Z', anniday_price: 25},
        {creator_id: 1, first_name: 'Bobby', last_name: "Bobel", relationship: 'brother', budget: "$0-$14", email: 'test@test.com', age: 24, birthday: true, birthdate: '2017-09-17T16:46:38.855Z', birthday_price: 35, xmas: true, xmas_price: 30, hanukka: true, hanukka_price: 20, mothersday: false, fathersday: false, valentines: false, anniday: true, annidate: '2017-12-27T16:46:38.855Z', anniday_price: 25},
      ]);
    });
};
