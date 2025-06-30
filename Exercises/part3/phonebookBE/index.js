
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const Person = require('./models/person')

const app = express()

app.use(express.json())
app.use(express.static('dist'))
app.use(morgan('tiny'))

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/info', (request, response) => {
  const receivedAt = new Date()
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
     <p>${receivedAt}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person)
        response.json(person)
      else
        response.status(404).end()
    })
    .catch(error => {
      console.log(error)
      response.status(500).end()
    }
    )
})

app.post('/api/persons', (request, response) => {
  const { id, name, number } = request.body

  if (name === "" || number === "") {
    return response.status(400).json({ error: 'Missing name or number' })
  }

  const person = new Person({
    name: name,
    number: number
  })

  person.save().then(savedPerson => {
    console.log(person)
    response.json(person)
  })

})
morgan.token('content', function (req, res) { return req.body })

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter((person) => person.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})