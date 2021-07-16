
var player = {
    money: 10,
    graphics: 0,
    marketing: [],
    artists: [],
    lootboxTeam: [],
    lastUpdate: Date.now()
  }
  
  var firstMarketing = {
    tier: 0,
    cost: 10,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "Amazon Ad Campaign"
  }
  
  var firstArtist = {
    tier: 0,
    cost: 30,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "Nvidia Artist"
  }
  
  player.marketing.push(new Generator(firstMarketing))
  player.artists.push(new Generator(firstArtist))


  