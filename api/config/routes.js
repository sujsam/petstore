var petController = require('../controllers/petController.js');

module.exports = function(app){
    

    app.get('/api/pets/:id',function(request,response){
        petController.details(request,response);
    });

    app.get('/api/pets',function(request,response){
        petController.index(request,response);
    });

    app.post('/api/pets/:id/adopt',function(request,response){
        petController.adopt(request,response);
    });

    app.post('/api/pets/:id/like',function(request,response){
        petController.like(request,response);
    });
    app.post('/api/pets/:id',function(request,response){
        petController.update(request,response);
    });
    app.post('/api/pets',function(request,response){
        petController.create(request,response);
    });

}