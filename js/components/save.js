var currentSave = 0;
var saves = {
    0: null,
    1: null,
    2: null
};

function saveGame() {
    localStorage.setItem(savedGame, JSON.stringify(gameSave));
    if (!silent) $.notify(changed ? "Game Loaded" : "Game Saved", "info")
}

function onLoad() {
    if (player.money === undefined || isNaN(player.money)) player.money = player.money
    if (player.artists === undefined) player.artists = 0;
    if (player.graphics === undefined) player.graphics = 0;
    if (player.marketing === undefined) player.marketing = 0;
    if (player.lootboxTeam === undefined) player.lootboxTeam = 0;
    if (player.lastUpdate === undefined) player.lastUpdate = new Date().getTime();
}