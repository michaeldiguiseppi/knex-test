
exports.up = function(knex, Promise) {
  // update to the table
  return knex.schema.createTable('albums', function(table){
    table.increments();
    table.string('artist');
    table.string('name');
    table.string('genre');
    table.integer('stars');
    table.boolean('explicit');
  })
};

exports.down = function(knex, Promise) {
  // rolls back changes
  return knex.schema.dropTable('albums');
};
