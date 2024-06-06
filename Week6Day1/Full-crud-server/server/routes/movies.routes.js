const MovieController = require('../controllers/movie.controller');
 
module.exports =( app) => {
    app.get('/api/movies', MovieController.findAllMovies);
    app.get('/api/movies/:id',MovieController.findOneSingleMovie);
    app.patch('/api/movies/:id', MovieController.updateExistingMovie);
    app.post('/api/movies', MovieController.createNewMovie);
    app.delete('/api/movies/:id', MovieController.deleteAnExistingMovie);
}
