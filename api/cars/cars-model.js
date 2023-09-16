// need a database wrapper
const database = require('../../data/db-config')
const getAll = () => {
  return database('cars')
}

const getById = (id) => {
  return database('cars').where('id', id).first()
}

const getByVin = (vin) => {
  return database('cars').where('vin', vin).first()
}

const create = (car) => {
  return database('cars').insert(car).then(([id]) => getById(id))
}

module.exports = {
  getAll,
  getById,
  getByVin,
  create,
}