exports.up = function (knex) {
  return knex.schema.createTable('cars', table => {
    table.increments('id')
    table.string('vin', 17).notNullable().unique()
    table.string('make', 255).notNullable()
    table.string('model', 255).notNullable()
    table.integer('mileage').unsigned().notNullable()
    table.string('title', 255)
    table.string('transmission', 255)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
