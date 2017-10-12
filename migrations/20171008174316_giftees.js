exports.up = function(knex, Promise) {
  return knex.schema.createTable('giftees', function(table){
    table.increments();  // ID column
    table.integer('creator_id').defaultTo( null );
    table.string('first_name').defaultTo( null );
    table.string('last_name').defaultTo( null );
    table.string('relationship').defaultTo( null );
    table.string('budget').defaultTo( null );
    table.string('email').defaultTo( null );
    table.integer('age').defaultTo( null );
    table.boolean('birthday').defaultTo( false );
    table.timestamp('birthdate').defaultTo( null );
    table.integer('birthday_price').defaultTo( null );
    table.boolean('xmas').defaultTo( false );
    table.integer('xmas_price').defaultTo( null )
    table.boolean('hanukka').defaultTo( false );
    table.integer('hanukka_price').defaultTo( null )
    table.boolean('mothersday').defaultTo( false );
    table.integer('mothersday_price').defaultTo( null )
    table.boolean('fathersday').defaultTo( false );
    table.integer('fathersday_price').defaultTo( null )
    table.boolean('valentines').defaultTo( false );
    table.integer('valentines_price').defaultTo( null )
    table.boolean('anniday').defaultTo( false );
    table.timestamp('annidate').defaultTo( null );
    table.integer('anniday_price').defaultTo( null )
    table.timestamp('created_at').default(knex.fn.now());

  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('giftees');
};
