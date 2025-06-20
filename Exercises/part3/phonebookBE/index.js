
const express = require('express')
const morgan = require('morgan')
const app = express()


app.use(express.json())
app.use(express.static('dist'))
app.use(morgan('tiny'))

let persons = [
  {
    "id": "1",
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": "2",
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": "3",
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": "4",
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const receivedAt = new Date()
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
     <p>${receivedAt}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find((person) => person.id === id)

  if (person)
    response.send(person)
  else
    response.status(404).end()
})

app.post('/api/persons', (request, response) => {
  const { id, name, number } = request.body
  const person = request.body
  const maxID = persons.length > 0
    ? Math.max(...persons.map(n => Number(n.id)))
    : 0

  if (name === "" || number === "") {
    return response.status(400).json({ error: 'Missing name or number' })
  }
  if (persons.find(x => x.name === name)) {
    return response.status(400).json({ error: 'Name already exists in phonebook' })
  }

  person.id = String(maxID + 1)
  persons = persons.concat(person)
  console.log(person)
  response.json(person)
})
morgan.token('content', function (req, res) { return req.body })

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter((person) => person.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})