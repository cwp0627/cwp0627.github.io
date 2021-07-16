var gameSave = {
    player: player,
    firstArtist: firstArtist,
    firstMarketing: firstMarketing,
}

function saveGame() {
    console.log() 
    localStorage.setItem(savedGame, JSON.stringify(gameSave));
}

function loadGame() {
    console.log() 
    var savedGame = JSON.parse(localStorage.getItem(gameSave));
    if (typeof saveGame.player !== "undefined") player = savedGame.player;
    if (typeof saveGame.firstArtist !== "undefined") firstArtist = savedGame.firstArtist;
    if (typeof saveGame.firstMarketing !== "undefined") firstMarketing = savedGame.firstMarketing;
}

window.onload = function() {
    loadGame();
}