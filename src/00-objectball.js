const gameObject = {
  home: {
      teamName: "Brooklyn Nets",
      colors: "Black, White",
      players: {
              playerName: "Alan Anderson",
              number: "0",
              shoe: "16",
              points: "22",
              rebounds: "12",
              assists: "12",
              steals: "3",
              blocks: "1",
              slamDunks: "1",
      }
  },


away: {
    teamName: "Charlotte Hornets",
    colors: "Turquoise, Purple",
    players: {
            playerName: "Jeff Adrien",
            number: "4",
            shoe: "18",
            points: "10",
            rebounds: "1",
            assists: "1",
            steals: "2",
            blocks: "7",
            slamDunks: "2",
    }
}
}


function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger;

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player;
      for (let key in data) {
        debugger;
      }
    }
  }
}