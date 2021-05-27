var mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
    name: {type:String},
    type: {type:String},
    likes: {type:Number},
    skill1: {type:String},
    skill2: {type:String},
    skill3: {type:String}
});

mongoose.model('Pet',PetSchema);