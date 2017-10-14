exports.up = function(knex, Promise) {
  return knex.schema.createTable('gifts', function(table){
    table.increments();  // ID column
    table.integer('creator_id').defaultTo( null );
    table.integer('giftee_id').defaultTo( null );
    table.string('idea').defaultTo( null );
    table.string('idea_notes').defaultTo( null );
    table.boolean('is_past').defaultTo( null );
    table.string('date_given').defaultTo( null );
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
    table.boolean('babyshower').defaultTo( false );
    table.string('other_occasion').defaultTo( null );
    table.timestamp('created_at').default(knex.fn.now());


  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gifts');
};
