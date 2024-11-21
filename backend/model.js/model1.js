const mongoose = require('mongoose')

const signupschema = mongoose.Schema({
   fullname: {
      type: String,
      required: true
   },
   email: {
      type: String,
      unique: true,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   phoneNumber: {
      type: Number,
      required: true
   },
   course: {
      type: String,
      required: true
   },
   photo: String
})

module.exports = mongoose.model('registration', signupschema)