const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
  email: {
    type: String,
    require: [true, 'email must be filled']
  },
  name: {
    type: String,
    require: [true, 'name must be filled']
  },
  password: {
    type: String,
    require: [true, 'password must be filled']
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'admin'
  },
  status: {
    type: String,
    enum: ['Y', 'N'],
    default: 'Y'
  },
  phoneNumber: {
    type: String,
    require: [true, 'Phone number must be filled']
  },

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
