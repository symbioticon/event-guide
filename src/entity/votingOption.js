var VotingOption = function(id, text) {
  this.id = id;
  this.text = text;
  this.votes = [];
  this.addVote = function(vote){
    this.votes.push(vote);
  }
};

module.exports = VotingOption;