exports.up = function(knex, Promise) {
  return knex.schema.createTable('giftees', function(table){
    table.increments();  // ID column
    table.integer('creator_id').defaultTo( null );
    table.string('first_name').defaultTo( null );
    table.string('last_name').defaultTo( null );
    table.string('relationship').defaultTo( null );
    table.string('email').defaultTo( null );
    table.integer('age').defaultTo( null );
    table.timestamp('created_at').default(knex.fn.now());

  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('giftees');
};
