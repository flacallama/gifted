
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('occasions').del()
    .then(function () {
      // Inserts seed entries
      return knex('occasions').insert([
        {giftee_id: 1, is_past: false, birthday: true, birthdate: '2017-11-05T16:46:38.855Z', birthday_price: 50, xmas: true, xmas_price: 60, hanukka: false, mothersday: true, mothersday_price: 30, fathersday: false, valentines: true, valentines_price: 25, anniday: true, anniday_price: 20, annidate: '2017-11-27T16:46:38.855Z'},
        {giftee_id: 3, birthday: true, birthdate: '2017-12-17T16:46:38.855Z', birthday_price: 25, xmas: false, hanukka: true, hanukka_price: 20, mothersday: false, fathersday: false, valentines: false, anniday: true, annidate: '2017-10-27T16:46:38.855Z', anniday_price: 25},
        {giftee_id: 3, birthday: true, birthdate: '2017-12-17T16:46:38.855Z', birthday_price: 25, xmas: false, hanukka: true, hanukka_price: 20, mothersday: false, fathersday: false, valentines: false, anniday: true, annidate: '2017-10-27T16:46:38.855Z', anniday_price: 25},
        {giftee_id: 4, birthday: true, birthdate: '2017-09-17T16:46:38.855Z', birthday_price: 35, xmas: true, xmas_price: 30, hanukka: true, hanukka_price: 20, mothersday: false, fathersday: false, valentines: false, anniday: true, annidate: '2017-12-27T16:46:38.855Z', anniday_price: 25},
        {giftee_id: 5, birthday: true, birthdate: '2017-03-07T16:46:38.855Z', birthday_price: 45, xmas: true, xmas_price: 40, hanukka: false, hanukka_price: null, mothersday: false, fathersday: false, valentines: true, valentines_price: 15, anniday: true, annidate: '2017-12-31T16:46:38.855Z', anniday_price: 55},
        {giftee_id: 6, birthday: true, birthdate: '2017-11-20T16:46:38.855Z', birthday_price: 15, xmas: true, xmas_price: 20, hanukka: false, hanukka_price: null, mothersday: false, fathersday: false, valentines: true, valentines_price: 10, anniday: true, annidate: '2017-08-31T16:46:38.855Z', anniday_price: 55}

      ]);
    });
};
