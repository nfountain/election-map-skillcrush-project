// Create Politician Factory Object

var createPolitician = function (polName, partyColor) {
    var politician = {};
    politician.name = polName;
    politician.partyColor = partyColor;
    politician.electionResults = [];
    politician.totalVotes = 0;
    politician.sumElectionResults = function (i) {
        this.totalVotes = 0;
        for (var i = 0; i < this.electionResults.length; i++) {
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }
        console.log(this.totalVotes);
    };

    return politician;
};

var candidate1 = createPolitician('George', [132, 17, 11]);
var candidate2 = createPolitician('Julie', [245, 141, 136]);

candidate1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

candidate2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

// New counts are in; fix the counts
// FL
candidate1.electionResults.splice(9, 1, 1);
candidate2.electionResults.splice(9, 1, 28);
// CA
candidate1.electionResults.splice(4, 1, 17);
candidate2.electionResults.splice(4, 1, 38);
// TX
candidate1.electionResults.splice(43, 1, 11);
candidate2.electionResults.splice(43, 1, 27);

// total up the votes

var setStateResults = function (state) {

    theStates[state].winner = null;

    if (candidate1.electionResults[state] > candidate2.electionResults[state]) {
        theStates[state].winner = candidate1;
    }
    else if (candidate2.electionResults[state] > candidate1.electionResults[state]) {
        theStates[state].winner = candidate2;
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }
};

candidate1.sumElectionResults();
candidate2.sumElectionResults();
//console.log(candidate1.totalVotes);
//console.log(candidate2.totalVotes);

// Declare winner

var winner = "???"

if (candidate1.totalVotes > candidate2.totalVotes) {
    winner = candidate1.name;
} else if (candidate1.totalVotes < candidate2.totalVotes) {
    winner = candidate2.name;
} else {
    winner = "DRAW."
}
console.log(winner);