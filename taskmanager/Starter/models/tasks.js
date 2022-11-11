const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
 name : {
 type : String,
 completed : Boolean,
 required: [true, "name must not be empty"],
 trim : Boolean,
 maxlength : [20, 'name cannot be more than 20 characters'] 
},
completed : {
 type : Boolean,
 default : false
}
})

module.exports = mongoose.model('Task', TaskSchema)

