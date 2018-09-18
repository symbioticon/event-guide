var Voting = function(id, question, singleVote){
  this.id = id;
  this.question = question;
  this.singleVote = singleVote ? singleVote : false;
  this.options = {};
  this.addOption = function(votingOption) {
    this.options[votingOption.id]=votingOption;
  }
  this.voteCount = 0;
};

module.exports = Voting;