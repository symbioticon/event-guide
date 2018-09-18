var Voting = function(id, question, singleVote){
  this.id = id;
  this.question = question;
  this.singleVote = singleVote ? singleVote : false;
  this.options = [];
  this.addOption = function(votingOption) {
    this.options.push(votingOption);
  }
};

module.exports = Voting;