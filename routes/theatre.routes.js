const { getAllTheatres, getTheatreBasedOnId, createTheatre,
    updateTheatre, deleteTheatre, updateMoviesInTheatre, checkMovieInTheatre } = require('../controller/theatre.controller');
const {verifyToken,verifyTheatreReqBody, isAdmin, isAdminOrClient} = require('../middleware');

module.exports = (app) => {
   app.get('/mba/api/v1/theatres', verifyToken, getAllTheatres);   
   app.get('/mba/api/v1/theatre/:id',verifyToken, getTheatreBasedOnId); 
   app.post('/mba/api/v1/theatre',[verifyToken, isAdminOrClient, verifyTheatreReqBody],createTheatre); 
   app.put('/mba/api/v1/theatre/:id',[verifyToken, isAdminOrClient, verifyTheatreReqBody], updateTheatre);
   app.delete('/mba/api/v1/theatre/:id',verifyToken, isAdminOrClient, deleteTheatre);
   app.put('/mba/api/v1/theatre/:id/movies',[verifyToken, isAdminOrClient], updateMoviesInTheatre);
   app.get('/mba/api/v1/theatres/:theatreId/movies/:movieId',verifyToken, checkMovieInTheatre)
}