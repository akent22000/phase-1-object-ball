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
        },
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
          blocks: 7,
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
  };
}
//gameObject().home.players["Alan Anderson"].points
//console.log(gameObject().home.players["Alan Anderson"].points)
//gameObject().home.players["Alan Anderson"].shoe

function homeTeamName() {
    const object = gameObject()
    return object.home.teamName
}
// gameObject().home.players["Alan Anderson"].points



//Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored (name){
const game = gameObject();
//debugger
//iterate through game keys (home, away)
for (let gameKey in game) {
const teamObj = game[gameKey]
const playerObj = teamObj.players
//debugger
//iterate through players
for (let playerKey in playerObj) {
//debugger
//checking if player matches name entenred in function argument
if (playerKey === name){
//return player's points
return playerObj[playerKey].points;
}
}
}
}
console.log("Alan Anderson Points Scored:" + numPointsScored("Alan Anderson"))



//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize (name){
const game = gameObject();
//debugger
//iterate through game keys (home, away)
for (let gameKey in game) {
const teamObj = game[gameKey]
const playerObj = teamObj.players
//debugger
//iterate through players
for (let playerKey in playerObj) {
//debugger
//checking if player matches name entenred in function argument
if (playerKey === name){
//return player's points
return playerObj[playerKey].shoe;
}
}
}
}
console.log("Alan Anderson Shoe Size:" + shoeSize("Alan Anderson"))



//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(team) {
  const game = gameObject()
  for (key in game) {
      if (game[key].teamName === team) {
          return game[key].colors
      }
  }
}
console.log("Brooklyn Nets Colors:", teamColors("Brooklyn Nets"));
console.log("Charlotte Hornets Colors:", teamColors("Charlotte Hornets"));




//Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames(){
  const game = gameObject()
return [game.away.teamName, game.home.teamName]
}
console.log("Team names:", teamNames());





//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamName) {
    const game = gameObject()
    result = []
    if (game.away.teamName === teamName) {
        for (player in game.away.players) {
            result.push(game.away.players[player].number)
        }
    }
    if (game.home.teamName === teamName) {
        for (player in game.home.players) {
            result.push(game.home.players[player].number)
        }
    }
    return result
}

console.log("Brooklyn Nets Jersey Numbers:" + playerNumbers("Brooklyn Nets"))
console.log("Charlotte Hornets Jersey Numbers:" + playerNumbers("Charlotte Hornets"))


//Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats. Check out the following example of the expected return value of the playerStats function:
function playerStats(playerName) {
    const game = gameObject()
    result = {}
    for (gameKey in game) {
        for (player in game[gameKey].players) {
            if (player === playerName) {
                result = game[gameKey].players[player]
            }
        }
    }
    return result
  
}

console.log("Alan Anderson Stats:", playerStats("Alan Anderson"))
