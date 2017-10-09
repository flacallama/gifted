
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('giftees').del()
    .then(function () {
      // Inserts seed entries
      return knex('giftees').insert([
        {creator_id: 1, first_name: 'Mary', last_name: "Mommy", relationship: 'mother', budget: 100, email: 'mom@mom.com', age: 54, birthday: true, birthdate: "12/12/56", xmas: true, hanukka: false, mothersday: true, fathersday: false, valentines: true, anniday: true, annidate: '10/1/76'},
      ]);
    });
};
