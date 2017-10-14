exports.up = function(knex, Promise) {
  return knex.schema.createTable('occasions', function(table){
    table.increments();  // ID column
    table.integer('creator_id').defaultTo( null );
    table.integer('giftee_id').defaultTo( null );
    table.boolean('is_past').defaultTo( false );
    table.timestamp('date_given').default(knex.fn.now());
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
    table.string('annidate').defaultTo( null );
    table.integer('anniday_price').defaultTo( null )
    table.timestamp('created_at').default(knex.fn.now());



  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('occasions');
};
