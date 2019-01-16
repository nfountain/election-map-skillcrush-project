// Create Politician Factory Object

var createPolitician = function (polName) {
    var politician = {};
    politician.name = polName;
    politician.electionResults = null;
    politician.totalVotes = 0;

    return politician;
};

var candidate1 = createPolitician('George');
var candidate2 = createPolitician('Julie');

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

/* create for loop to sum the election results as a rough doublecheck to use in the console to verify that the data was entered correctly:

var sumElectionResults = function (i) {
    var total = 0;
    for (i = 0; i < electionResults.length; i++) {
        total = total + electionResults[i];
    }
    console.log(total);
};

sumElectionResults();
*/
