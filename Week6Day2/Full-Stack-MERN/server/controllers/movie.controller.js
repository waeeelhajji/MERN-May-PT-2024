const Movie = require('../models/movie.model');






//!---READ ALL
module.exports.findAllMovies = (req, res) => {
    Movie.find()
        .then((AllMovies) => {
            //! AllMovies ==> res.data
            res.json( AllMovies)
        })
        .catch((err) => {
            res.json(err)
        });
}

//!---READ One

module.exports.findOneSingleMovie = (req, res) => {
    Movie.findOne({ _id: req.params.id })
        .then(oneSingleMovie => {
            res.json( oneSingleMovie )
        })
        .catch((err) => {
            res.json(err)
        });}

//!---CREATE

module.exports.createNewMovie = (req, res) => {
    Movie.create(req.body)
        .then(CreatedMovie => {
            res.json({ CreatedMovie})
        })
        .catch((err) => {
            res.json(err)
        });}

//!---Update
module.exports.updateExistingMovie = (req, res) => {
    Movie.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(UpdatedMovie => {
            res.json({ UpdatedMovie })
        })
        .catch((err) => {
            res.json(err)
        });
}
        
//!---Delete
module.exports.deleteAnExistingMovie = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });}








































