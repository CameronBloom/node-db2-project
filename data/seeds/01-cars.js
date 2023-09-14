const cars = [
  {
    vin: "11111111111111111",
    make: "Ford",
    model: "Escape",
    mileage: "75000",
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "22222222222222222",
    make: "Jeep",
    model: "Renegade",
    mileage: "15000",
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "33333333333333333",
    make: "BMW",
    model: "Mini Cooper",
    mileage: "12000",
    title: "clean",
    transmission: "automatic",
  },
]

exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}