function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    }
}

function numPointsScored(playerName) {
    let game = gameObject();
    for (let team in game) {
        let teamObj = game[team];
        let playersObj = teamObj.players;
        for (let playerKey in playersObj) {
            if (playerKey === playerName) {
                return playersObj[playerKey].points;
            }

        }
    }
}

function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
        let teamObj = game[team];
        let playersObj = teamObj.players;
        for (let playerKey in playersObj) {
            if (playerKey === playerName) {
                return playersObj[playerKey].shoe;
            }

        }
    }
}

function teamColors(teamName) {
    let game = gameObject();

    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    }
}

function teamNames() {
    let game = gameObject();
    const teams = [];
    for (let teamObj in game) {
        let team = game[teamObj];
        teams.push(team.teamName);
    }
    return teams;
}

function playerNumbers(teamNameInput) {
    let game = gameObject();
    const jerseyNumbers = [];
    if (teamNameInput === "Charlotte Hornets") {
        let players = game.away.players;
        for (let playerObj in players) {
            let jerseyNum = players[playerObj].number;
            jerseyNumbers.push(jerseyNum);
        }
        return jerseyNumbers;
    }
    if (teamNameInput === "Brooklyn Nets") {
        let players = game.home.players;
        for (let playerObj in players) {
            let jerseyNum = players[playerObj].number;
            jerseyNumbers.push(jerseyNum);
        }
        return jerseyNumbers;
    } else {
        return console.log("That team was not found.");
    }
}

function playerStats(playerNameInput) {
    let game = gameObject();
    for (let teamObj in game) {
        let homeOrAway = game[teamObj];
        let players = homeOrAway.players;
        for (let playerObj in players) {
            let playerName = players[playerObj];
            if (playerObj === playerNameInput) {
                return playerName;
            } else {
                return console.log("Player not found.");
            }
        }
    }
}

function bigShoeRebounds() {
    let game = gameObject();
    let maxShoe = 0;
    for (let teamObj in game) {
        let homeOrAway = game[teamObj];
        let players = homeOrAway.players;
        for (let playerObj in players) {
            let playerName = players[playerObj];
            if (maxShoe < playerName.shoe) {
                maxShoe = playerName.shoe;
            }
        }
        for (let playerObj in players) {
            let playerName = players[playerObj];
            if (playerName.shoe === maxShoe) {
                return console.log(playerName.rebounds);
            }
        }
    }
}

function mostPointsScored() {
    let game = gameObject();
    let maxPoints = 0;
    let playerName = "";

    for (let teamObj in game) {
        for (let playerObj in game[teamObj].players) {
            if (game[teamObj].players[playerObj].points > maxPoints) {
                maxPoints = game[teamObj].players[playerObj].points;
                playerName = playerObj;
            }
        }
    }
    return playerName;
}

function winningTeam () {
    let game = gameObject();
    let netsPoints = 0;
    let hornetsPoints = 0;
    const netsPlayers = game.home.players;
    const hornetsPlayers = game.away.players;
    
    for (let playerObj in netsPlayers) {
        let player = netsPlayers[playerObj];
        netsPoints += player.points;
    }

    for (let playerObj in hornetsPlayers) {
        let player = hornetsPlayers[playerObj];
        hornetsPoints += player.points;
    }

    if (netsPoints > hornetsPoints) {
        return "Brooklyn Nets";
    } else if (hornetsPoints > netsPoints) {
        return "Charlotte Hornets";
    } else if (netsPoints === hornetsPoints) {
        return "Tied";
    }
}

function playerWithLongestName () {
    let game = gameObject();
    let playerNames = [];
    let maxChars = 0;
    for (let gameObj in game) {
        let homeOrAway = game[gameObj];
        let players = homeOrAway.players;
        let playerNameArray = Object.keys(players);
        playerNames = playerNames.concat(playerNameArray);    
    }
    
    for (let names of playerNames) {
        if (names.length > maxChars) {
            maxChars = names.length;
        }
    }

    let longestName = playerNames.find((name) => name.length === maxChars);
    return longestName;
}

function doesLongNameStealATon () {
    let playerLongName = playerWithLongestName();
    let mostSteals = 0;
    let mostStealsPlayer = "";
    let game = gameObject();

    for (let gameObj in game) {
        let homeOrAway = game[gameObj];
        for (let playerObj in homeOrAway.players) {
            let steals = homeOrAway.players[playerObj].steals;
            if (steals > mostSteals) {
                mostSteals = steals;
            }
            if (steals === mostSteals) {
                mostStealsPlayer = playerObj;
            }
        }
    }
    if (playerLongName === mostStealsPlayer) {
        return true
    } else {
        return false
    }
}