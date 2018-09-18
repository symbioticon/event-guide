const Voting = require('../entity/voting'),
  VotingOption = require('../entity/votingOption'),
  Vote = require('../entity/vote'),
  uuidv1 = require('uuid/v1')
;

VotingService = function () {
  this.votes = {};
  this.create = function (question, options, singleVote) {
    var voting = new Voting(uuidv1(), question, [], singleVote);
    if(options) {
      options.forEach(function (option) {
        var votingOption = new VotingOption(uuidv1(), option);
        voting.addOption(votingOption);
      });
    }
    this.votes[voting.id] = voting;
    return voting;
  };
  this.retrieve = function(id) {
    return this.votes[id];
  };
  this.vote = function(voteId, optionId){
    var voting = this.votes[voteId];
    if (voting) {
      var option = voting.options[optionId];
      if(option){
        var vote = new Vote();
        option.addVote(vote);
      }
    }
  };
};

module.exports = VotingService;