module.exports = function(app){

  app.get('/voting/new', function(req, res){
    // Render the standings template and pass the photos
    res.render('voting_new', {});
  });

  app.post('/api/v1/voting', function(req, res){
    res.status(200);
  });
};