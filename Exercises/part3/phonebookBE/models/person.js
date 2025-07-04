const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
  },
  number: {
    type: String,
    minLength: 7,
    validate: {
      validator: (number) => {
        return /\d{3}-\d{3}-\d{4}/.test(number) || /\d{3}-\d{4}/.test(number)
      },
      message: props => `${props.value} is the wrong phone number format`
    }
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)