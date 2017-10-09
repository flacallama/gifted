exports.up = function(knex, Promise) {
  return knex.schema.createTable('gifts', function(table){
    table.increments();  // ID column
    table.integer('creator_id');
    table.integer('giftee_id');
    table.string('idea');
    table.string('idea_notes');
    table.boolean('is_past');
    table.string('date_given');

  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gifts');
};
