module.exports = function (app) {

  app.get('/voting/new', function (req, res) {
    // Render the standings template and pass the photos
    res.render('voting_new', {});
  });

  app.post('/api/v1/voting', function (req, res) {
    var uuid = '12314124515125125125125';
    res.redirect('/voting/' + uuid);
  });

  app.get('/voting/:uuid/vote', function (req, res) {
    res.render('voting_vote', {});
  });

  app.get('/voting/:uuid/view', function (req, res) {
    res.render('voting_view', {});
  });

  app.get('/voting/:uuid', function (req, res) {
    res.render('voting_view', {});
  });
};