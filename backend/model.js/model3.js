const mongoose = require('mongoose')

const userschema = mongoose.Schema({
//    name: {
//       type : String,
//       required : true
//    },
//    email : {
//       type : String,
//       required : true
//   },
//   message:{
//    type : String,
//    required : true
//   }
name:String,
email:String,
message:String
})


module.exports=mongoose.model('contactforms',userschema)