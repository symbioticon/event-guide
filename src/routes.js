const VotingService = require('./services/votingService.js');
var votingService = new VotingService();

module.exports = function (app) {

  app.get('/voting/new', function (req, res) {
    // Render the standings template and pass the photos
    res.render('voting_new', {});
  });

  var handleOptions = function(reqBody) {
    var options = [];
    Object.keys(reqBody).forEach(function(key){
      if(key.startsWith('option_')){
        options.push(reqBody[key]);
      }
    });
    return options;
  };

  app.post('/voting/new', function (req, res) {
    console.log(req.body);
    var question = req.body.question,
      options = handleOptions(req.body),
      singleVote = req.body.singleVote;
    var voting = votingService.create(question, options, singleVote);
    res.redirect('/voting/' + voting.id);
  });

  app.post('/voting/:votingId', function (req, res) {
    var votingId = req.params.votingId,
      optionIds = req.body.optionIds;
    var result = votingService.vote(votingId, optionIds);
    if (!result) {
      res.redirect('/voting/' + votingId + '/view');
    } else {
      res.render('/voting/' + votingId + '/vote', {errors: result});
    }
  });

  app.get('/voting/:id/vote', function (req, res) {
    var voting = votingService.retrieve(req.params.id);
    if (voting) {
      res.render('voting_vote', {voting: voting});
    } else {
      res.status(404).end();
    }
  });

  app.get('/voting/:id/view', function (req, res) {
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