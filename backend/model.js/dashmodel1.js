const mongoose = require('mongoose')

const dashschema = mongoose.Schema({
   firstname: {
      type: String,
      required: true
   },
   lastname: {
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
   }
})

module.exports = mongoose.model('dashlogin', dashschema)