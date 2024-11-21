const logincontrolar1 = require('../controlar/controlar1')
const { registration } = require('../controlar/controlar1')
const infocontrolar = require('../controlar/controlar2')
const contactforms = require('../controlar/controlar3')
const { photoUpload, fileUpload } = require('../fileUpload'); // Correct import
const dashcontrolar = require('../controlar/dashcontrolar1')
// const fileUpload = require('../fileUpload')

const express = require('express')

const route = express.Router()

route.post('/registration', photoUpload.single('photo'), registration)
route.get('/findbyemail/:email', logincontrolar1.findbyemail)

route.post('/login', logincontrolar1.login)

// route.get('/fecthdata', infocontrolar.getdata)

// route.post('/postinterninfo',fileUpload.single('offerLetter') ,infocontrolar.postdata)

route.get('./getinterninfo',infocontrolar.getdata)

route.post('/postinterninfo', fileUpload.fields([
    { name: 'offerLetter', maxCount: 1 },
    { name: 'firstReviewDocument', maxCount: 1 },
    { name: 'secondReviewDocument', maxCount: 1 }
]), infocontrolar.postdata);


route.get('/getcontactdata', contactforms.getcontactdata)

route.post('/postcontactdata', contactforms.postcontactdata)

route.post('/dashregistration', dashcontrolar.dashregistration )

route.post('/dashlogin', dashcontrolar.dashlogin)

module.exports = route