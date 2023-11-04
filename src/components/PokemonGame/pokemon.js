//set player and enemy current pokemon
//[0] for bulbasaur, [1] for charmander, [2] for squirtle
var playerCurrentPokemon = [0];
var enemyCurrentPokemon = [0];

//pokemon element box objects
var grassElement = {
    background:'#65bb69',
    border:'#43a047', 
}

var fireElement = {
    background:'#fe9100',
    border:'#fe5722', 
}

var waterElement = {
    background:'#1d88e4',
    border:'#0c47a1', 
}


//attacks objects
var tackle = {
    name: 'Tackle',
    power: '5',
    pp: ''
}

var scratch = {
    name: 'Scratch',
    power: '6',
    pp: ''
}

var vinewhip = {
    name: 'Vine Whip',
    power: '7',
    pp: ''
}

var ember = {
    name: 'Ember',
    power: '10',
    pp: ''
}

var bubble = {
    name: 'Bubble',
    power: '12',
    pp: ''
}


//pokemon objects
var bulbasaur = {
    name: 'Bulbasaur',
    type: 'grass',
    lvl: 100,
    currentLVL: 1,
    hp: 100,
    currentHP: 100,
    attack: [tackle, vinewhip],
    spritefront:'bulbasaur_front',
    spriteback:'bulbasaur_back',
    background: grassElement.background,
    border: grassElement.border,
};

var charmander = {
    name: 'Charmander',
    type: 'fire',
    lvl: 100,
    currentLVL: 1,
    hp: 100,
    currentHP: 100,
    attack: [scratch, ember],
    spritefront:'charmander_front',
    spriteback:'charmander_back',
    background: fireElement.background,
    border: fireElement.border,
};

var squirtle = {
    name: 'Squirtle',
    type: 'water',
    lvl: 100,
    currentLVL: 1,
    hp: 100,
    currentHP: 100,
    attack: [tackle, bubble],
    spritefront:'squirtle_front',
    spriteback:'squirtle_back',
    background: waterElement.background,
    border: waterElement.border,
};

//item objects
var potion = {
    name: 'potion',
    value: 20,
}

var pokeball = {
    name: 'pokeball',
    value: 1,
}

var rareCandy = {
    name: 'rare candy',
    value: 1,
}


//pokemon arrays
var playerPokemon = [bulbasaur, charmander, squirtle];
var enemyPokemon = [bulbasaur, charmander, squirtle];


//pokemon current hp
var playerCurrentHP = playerPokemon[playerCurrentPokemon].hp;
var enemyCurrentHP = playerPokemon[enemyCurrentPokemon].hp;


//pokemon current pokemon random
var playerCurrentPokemon = Math.floor(Math.random() * playerPokemon.length);
var enemyCurrentPokemon = Math.floor(Math.random() * enemyPokemon.length);

//pokemon current lvl random
playerPokemon[playerCurrentPokemon].currentLVL = Math.floor(Math.random() * playerPokemon[playerCurrentPokemon].lvl) + 1;
enemyPokemon[enemyCurrentPokemon].currentLVL = Math.floor(Math.random() * enemyPokemon[enemyCurrentPokemon].lvl) + 1;


//item arrays
var item = [potion, pokeball, rareCandy]


//left menu/text box
var leftMenuVisible = 0;



const gameClient = document.getElementById("app")

//renders the client
renderGame()
function renderGame(){
  gameClient.innerHTML= /*html*/`
    <div id="app-game-box">
      ${renderScreen()}
    </div>
    <div id="app-text-box">
      ${currentLeftMenu()}
    </div>
    <div id="app-menu-box">
      ${renderRightMenu()}
    </div>
  `;
}


//render all the game fight info and sprites
function renderScreen(){
  const screenWindow = /*html*/`
  <style>
  #element-box-player{
    background-color: ${playerPokemon[playerCurrentPokemon].background};
    border-color: ${playerPokemon[playerCurrentPokemon].border};
  }
  #element-box-enemy{
    background-color: ${playerPokemon[enemyCurrentPokemon].background};
    border-color: ${playerPokemon[enemyCurrentPokemon].border};
  }
</style>
  <img src="assets/background/forest.png" id="background-picture"></img>

  <!-- PLAYER -->
    <div id="player-stats">
      <div class="stats-name-box">${playerPokemon[playerCurrentPokemon].name}</div>
      <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${playerPokemon[playerCurrentPokemon].currentHP}/${playerPokemon[playerCurrentPokemon].hp}</div>
      <div class="stats-lvl-box"><text class="stats-text-lvl">LV.</text><text class="stats-text-lvl-number">${playerPokemon[playerCurrentPokemon].currentLVL}</text></div>
      <div id="element-box-player"><text id="element-box-player-text">${playerPokemon[playerCurrentPokemon].type}</text></div>
    </div>
    <img src="assets/pokemon/${playerPokemon[playerCurrentPokemon].spriteback}.png" id="foreground-pokemon-player"></img>

  <!-- ENEMY -->
    <div id="enemy-stats">
      <div class="stats-name-box">${enemyPokemon[enemyCurrentPokemon].name}</div>
      <div class="stats-hp-box"><text class="stats-text-hp">HP.</text>${enemyCurrentHP}/${enemyPokemon[enemyCurrentPokemon].hp}</div> 
      <div class="stats-lvl-box"><text class="stats-text-lvl">LV.</text><text class="stats-text-lvl-number">${enemyPokemon[enemyCurrentPokemon].currentLVL}</text></div>
      <div id="element-box-enemy"><text id="element-box-player-enemy">${playerPokemon[enemyCurrentPokemon].type}</text></div>    
    </div>|
    <img src="assets/pokemon/${enemyPokemon[enemyCurrentPokemon].spritefront}.png" id="foreground-pokemon-enemy"></img>
  `;
  return screenWindow
}


//chooses the current left menu to show
function currentLeftMenu(){
  let currentMenu;
  if (leftMenuVisible === 0) {
      currentMenu = renderMenuText()
  } 
  else if (leftMenuVisible === 1) {
           currentMenu = renderMenuFight()
  }
  else if (leftMenuVisible === 2){
           currentMenu = renderMenuBag()
  }
  else if (leftMenuVisible === 3){
           currentMenu = renderMenuPokemon()
  }
  else if (leftMenuVisible === 4){
           currentMenu = resetGame()
  }
  return currentMenu;
}


function renderMenuText(){
  const leftMenuText = /*html*/`
  <div id="render-main-menu-text">What will ${playerPokemon[playerCurrentPokemon].name} do?</div>
  `;
  return leftMenuText
}


//render main menu buttons
function renderRightMenu(){
  const rightMenuButtons = /*html*/`
  <button onclick="toggleMenuLeft(1)" id="menu-button-1">fight</button>
  <button onclick="toggleMenuLeft(2)" id="menu-button-2">bag</button>
  <button onclick="toggleMenuLeft(3)" id="menu-button-3">pokemon</button>
  <button onclick="resetGame()" id="menu-button-4">reset</button>
  `;
  return rightMenuButtons
}


//render fight menu buttons
function renderMenuFight(){
  const leftMenuFight = /*html*/`
  <button onclick="playerAttackBtn(0)" id="fight-text-button-1">${playerPokemon[playerCurrentPokemon].attack[0].name}</button>
  <button onclick="playerAttackBtn(1)" id="fight-text-button-2">${playerPokemon[playerCurrentPokemon].attack[1].name}</button>
  <!--<button onclick="playerAttackBtn(2)" id="fight-text-button-3">${playerPokemon[playerCurrentPokemon].attack[0].name}</button>
  <button onclick="playerAttackBtn(3)" id="fight-text-button-4">${playerPokemon[playerCurrentPokemon].attack[0].name}</button>-->
  `;
  return leftMenuFight
}

//render pokemon menu buttons
function renderMenuPokemon(){
  const leftMenuPokemon = /*html*/`
  <button onclick="changePokemon(0)" id="pokemon-1">${playerPokemon[0].name}</button>
  <button onclick="changePokemon(1)" id="pokemon-2">${playerPokemon[1].name}</button>
  <button onclick="changePokemon(2)" id="pokemon-3">${playerPokemon[2].name}</button>
  `;
  return leftMenuPokemon
}

//render bag menu buttons
function renderMenuBag(){
  const leftMenuPokemon = /*html*/`
  <button onclick="useItemPotion()" id="bag-1">${item[0].name}</button>
  <button onclick="useItemPokemon()" id="bag-2">${item[1].name}</button>
  <button onclick="useItemRareCandy()" id="bag-3">${item[2].name}</button>
  `;
  return leftMenuPokemon
}




//toogle the left menu
function toggleMenuLeft(menuId){
    if (leftMenuVisible === menuId) {
        leftMenuVisible = 0;
    } 
    else { 
      leftMenuVisible = menuId;
    }
    renderGame();
  }
  
  
  function changePokemon(pokemonId){
    if (playerCurrentPokemon === pokemonId){
    }
    else {
      playerCurrentPokemon = pokemonId;
    }
    renderGame();
  }
  
  
  //fight menu attack function
  function playerAttackBtn(attackId){
  //Makes the enemy do random attack
    const enemyAttackNum = Math.floor(Math.random()*2)+1;
    let enemyAttack;
      if (enemyAttackNum === 1) {
          enemyAttack = enemyPokemon[enemyCurrentPokemon].attack[0];
      } 
      else {
          enemyAttack = enemyPokemon[enemyCurrentPokemon].attack[1];
      }
  
  
  //PLAYER attack
  const damageToEnemy = playerPokemon[playerCurrentPokemon].attack[attackId].power;
        enemyCurrentHP -= damageToEnemy;
  //check if ENEMY has 0 or less hp
      if (enemyCurrentHP <= 0) {
        enemyCurrentHP = 0; //sets enemy to 0hp
          endGameWon(); //player wins
      }
  
  
  //ENEMY attack
  const damageToPlayer = enemyAttack.power;
          playerPokemon[playerCurrentPokemon].currentHP -= damageToPlayer;
  //check if PLAYER has 0 or less hp
      if (playerPokemon[playerCurrentPokemon].currentHP <= 0) {
        playerPokemon[playerCurrentPokemon].currentHP = 0;
          endGameLost(); //enemy wins
      }
      renderGame();
  }
  
  
  //this function adds 20hp when using potions
  function useItemPotion() {
    playerPokemon[playerCurrentPokemon].currentHP += potion.value;
    if (playerPokemon[playerCurrentPokemon].currentHP > playerPokemon[playerCurrentPokemon].hp) {
      playerPokemon[playerCurrentPokemon].currentHP = playerPokemon[playerCurrentPokemon].hp;
    }
    renderGame();
  }
  
  
  //this function adds 1 lvl when using rare candy
  function useItemRareCandy() {
    if (playerPokemon[playerCurrentPokemon].currentLVL === 100) {
      return;
    }
    playerPokemon[playerCurrentPokemon].currentLVL += rareCandy.value;
    if (playerPokemon[playerCurrentPokemon].currentLVL > 100) {
      playerPokemon[playerCurrentPokemon].currentLVL = playerPokemon[playerCurrentPokemon].lvl;
    }
    renderGame();
  }
  
  
  //this runs when the game had ended if you win
  function endGameWon() {
    var confirmation = confirm("You won!");
    if (confirmation) {
      location.reload();
    }
  }
  
  
  //this runs when the game had ended if you loose
  function endGameLost() {
    var confirmation = confirm("You lost!");
    if (confirmation) {
      location.reload();
    }
  }
  
  
  //this function resets the game
  function resetGame() {
    var confirmation = confirm("Are you sure you want to reset the game?");
    if (confirmation) {
      location.reload();
    }
  }