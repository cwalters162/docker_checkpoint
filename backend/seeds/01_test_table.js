
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('test').del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert([
        {text: 'test 1'},
        {text: 'test 2'},
        {text: 'test 3'}
      ]);
    });
};
