const { response } = require('express');
var mongoose = require('mongoose');
var pets = mongoose.model('Pet');


module.exports={
    index:function(request,response){
        pets.find()
        .then(data=>response.json(data))
        .cach(err=>response.json(error));
    },

    details:function(request,response){
        
        pets.findOne({_id:request.params.id})
        .then(data=>response.json(data))
        .cach(err=>response.json(error));
  
    },

    create:function(request,response){
        var pet = new Pet({
            name:request.body.name,
            type:request.body.type,
            likes:0,
            skill1:request.body.skill1,
            skill2:request.body.skill2,
            skill3:request.body.skill3
        });
        pet.save()
        .then(data=>console.log(data))
        .cach(err=>console.log(err));
    },

    update:function(request,response){
        pets.findOne({_id:request.params.id})
        .then(pet=>{
            pet.name= request.body.name;
            pet.type= request.body.type;
            pet.skill1 = request.body.skill1;
            pet.skill2 = request.body.skill2;
            pet.skill3 = request.body.skill3;
            pet.save()
            .then(data=>response.json(data))
            .catch(err=>response.json(err));
        })
        .catch(err=>response.json(err));
    },

    like:function(request,response){
        pets.findOne({_id:request.params.id})
        .then(pet=>{
            pet.likes= pet.likes+1;
            pet.save()
            .then(data=>response.json(data))
            .catch(err=>response.json(err));
        })
        .catch(err=>response.json(err));
    },

    adopt:function(request,reponse){
        pets.deleteOne({_id:request.params.id})
        .then(data=>response.json(data))
        .catch(err=>response.json(err));
    }
}