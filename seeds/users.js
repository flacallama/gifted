
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: "Testey", last_name: 'McTester', password: "test", email: 'test@test.com', age: 31, birthday: '12/12/12', anniday: '12/12/12', xmas: true, hannuka: false},
      ]);
    });
};
