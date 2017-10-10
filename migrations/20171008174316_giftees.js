exports.up = function(knex, Promise) {
  return knex.schema.createTable('giftees', function(table){
    table.increments();  // ID column
    table.integer('creator_id');
    table.string('first_name');
    table.string('last_name');
    table.string('relationship');
    table.string('budget');
    table.string('email');
    table.integer('age');
    table.boolean('birthday');
    table.string('birthdate');
    table.boolean('xmas');
    table.boolean('hanukka');
    table.string('mothersday');
    table.string('fathersday');
    table.string('valentines');
    table.boolean('anniday');
    table.string('annidate');
    table.timestamp('created_at').default(knex.fn.now());

  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('giftees');
};
