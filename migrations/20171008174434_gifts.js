exports.up = function(knex, Promise) {
  return knex.schema.createTable('gifts', function(table){
    table.increments();  // ID column
    table.integer('creator_id');
    table.integer('giftee_id');
    table.string('idea');
    table.string('idea_notes');
    table.boolean('is_past');
    table.string('date_given');
    table.boolean('received').defaultTo( false );
    table.boolean('birthday').defaultTo( false );
    table.boolean('xmas').defaultTo( false );
    table.boolean('hanukka').defaultTo( false );
    table.boolean('anniversary').defaultTo( false );
    table.boolean('valentines').defaultTo( false );
    table.boolean('mothersday').defaultTo( false )
    table.boolean('fathersday').defaultTo( false );
    table.boolean('graduation').defaultTo( false );
    table.boolean('barmitzvah').defaultTo( false );
    table.boolean('bahmitzvah').defaultTo( false );
    table.string('other_occasion');
    table.timestamp('created_at').default(knex.fn.now());


  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gifts');
};
