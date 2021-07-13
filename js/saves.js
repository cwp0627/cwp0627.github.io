

function saveGame() {
    var gameSave = {
        player: player,
        firstArtist: firstArtist,
        firstMarketing: firstMarketing,        
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(gameSave));
}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem(gameSave));
    if (typeof savedGame.player !== "undefined") player = savedGame.player;
    if (typeof savedGame.firstArtist !== "undefined") firstArtist = savedGame.firstArtist;
    if (typeof savedGame.firstMarketing !== "undefined") firstMarketing = savedGame.firstMarketing;
}

window.onload = function() {
    loadGame();
}