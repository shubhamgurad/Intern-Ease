const mongoose = require('mongoose')

const userschema = mongoose.Schema({
   companyName: {
      type : String,
      required : true
   },
   contactNumber : {
      type : Number,
      required : true
   },
   copmanyEmail : {
      type : String,
      required : true
  },                                                           
  guideName:{
   type : String,
   required : true
  },
  joiningDate : {
   type : Date,
   required : true
  },
// Next page project information
  
  projectTitle : {
   type : String,
   required : true
  },
  technology : {
   type : String,
   required : true
  },
  offerLetter : String,

  Objective : {
   type : String,
   required : true
  },     
// // Next page review information
firstReviewSubmitted: Boolean,
firstSubmissionDate: Date,
firstReviewDocument: String,
secondReviewSubmitted: Boolean,
secondSubmissionDate: Date,
secondReviewDocument: String


})


module.exports=mongoose.model('interninfo',userschema) 