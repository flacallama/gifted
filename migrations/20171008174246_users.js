exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();  // ID column
    table.string('first_name');
    table.string('last_name');
    table.string('password');
    table.string('email');
    table.integer('age');
    table.string('birthday');
    table.string('anniday');
    table.boolean('xmas');
    table.boolean('hannuka');


  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
