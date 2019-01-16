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
