const personsRouter = require('express').Router()
const Person = require('../models/person')

personsRouter.get('/', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

personsRouter.get('/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person)
        response.json(person)
      else
        response.status(404).end()
    })
    .catch(error => next(error))
})

personsRouter.post('/', (request, response, next) => {
  const { name, number } = request.body

  if (name === '' || number === '') {
    return response.status(400).json({ error: 'Missing name or number' })
  }

  const person = new Person({
    name: name,
    number: number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
    .catch(error => next(error))

})

personsRouter.put('/:id', (request, response, next) => {
  const data = request.body

  Person.findById(request.params.id)
    .then(person => {
      if (!person)
        return response.status(404).end()

      person.number = data.number

      return person.save().then(updatedPerson => {
        response.json(updatedPerson)
      })
        .catch(error => next(error))
    })
})

personsRouter.delete('/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

module.exports = personsRouter