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
  this.vote = function(voteId, optionIds){
    var voting = this.votes[voteId];
    if (voting) {
      var errors = [];
      optionIds.forEach(function(optionId){
          var option = voting.options[optionId];
          if(option){
              var vote = new Vote();
              option.addVote(vote);
              voting.voteCount++;
          }  else {
            errors.push('voteId could not be found: ' + optionId);
          }
      });
      return errors.length > 0 ? errors : undefined;
    } else {
      return ['voting could not be found'];
    }
    return;
  };
};

module.exports = VotingService;