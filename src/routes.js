const VotingService = require('./services/votingService.js');
var votingService = new VotingService();

module.exports = function (app) {

  app.get('/voting/new', function (req, res) {
    // Render the standings template and pass the photos
    res.render('voting_new', {});
  });

  app.post('/api/v1/voting', function (req, res) {
    var question = req.body.question,
      options = req.body.options,
      singleVote = req.body.singleVote;
    var voting = votingService.create(question, options, singleVote);
    res.redirect('/voting/' + voting.id);
  });

  app.post('/api/v1/voting/:votingId', function (req, res) {
    var votingId = req.params.votingId,
      optionIds = req.body.optionIds;
    var result = votingService.vote(votingId, optionIds);
    res.redirect('/voting/' + votingId + '/view');
  });

  app.get('/voting/:id/vote', function (req, res) {
    var voting = votingService.retrieve(req.params.id);
    if (voting) {
      res.render('voting_vote', {voting: voting});
    } else {
      res.status(404).end();
    }
  });

  app.get('/voting/:uuid/view', function (req, res) {
    var voting = votingService.retrieve(req.params.id);
    if (voting) {
      res.render('voting_view', {voting: voting});
    } else {
      res.status(404).end();
    }
  });

  app.get('/voting/:id', function (req, res) {
    var voting = votingService.retrieve(req.params.id);
    if (voting) {
      res.render('voting_view', {voting: voting});
    } else {
      res.status(404).end();
    }
  });
};