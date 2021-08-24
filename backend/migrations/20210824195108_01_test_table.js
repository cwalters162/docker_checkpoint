
exports.up = function(knex) {
  return knex.schema.createTable('test', function (table) {
    table.increments();
    table.string('text');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('test')
};
