import React, { useState, useEffect } from 'react';
import './PokemonGame.css';

const PokemonGame = () => {
  // set player and enemy current pokemon
  // [0] for bulbasaur, [1] for charmander, [2] for squirtle
  const [playerCurrentPokemon, setPlayerCurrentPokemon] = useState(0);
  const [enemyCurrentPokemon, setEnemyCurrentPokemon] = useState(0);

  // Attacks objects
  const tackle = {
    name: 'Tackle',
    power: '5',
    pp: '',
  };

  const scratch = {
    name: 'Scratch',
    power: '6',
    pp: '',
  };

  const vinewhip = {
    name: 'Vine Whip',
    power: '7',
    pp: '',
  };

  const ember = {
    name: 'Ember',
    power: '10',
    pp: '',
  };

  const bubble = {
    name: 'Bubble',
    power: '12',
    pp: '',
  };

  // Pokemon objects
  const bulbasaur = {
    name: 'Bulbasaur',
    type: 'grass',
    lvl: 100,
    currentLVL: 1,
    hp: 100,
    currentHP: 100,
    attack: [tackle, vinewhip],
    spritefront: 'bulbasaur_front',
    spriteback: 'bulbasaur_back',
    background: '#65bb69',
    border: '#43a047',
  };

  const charmander = {
    name: 'Charmander',
    type: 'fire',
    lvl: 100,
    currentLVL: 1,
    hp: 100,
    currentHP: 100,
    attack: [scratch, ember],
    spritefront: 'charmander_front',
    spriteback: 'charmander_back',
    background: '#fe9100',
    border: '#fe5722',
  };

  const squirtle = {
    name: 'Squirtle',
    type: 'water',
    lvl: 100,
    currentLVL: 1,
    hp: 100,
    currentHP: 100,
    attack: [tackle, bubble],
    spritefront: 'squirtle_front',
    spriteback: 'squirtle_back',
    background: '#1d88e4',
    border: '#0c47a1',
  };

  // Item objects
  const potion = {
    name: 'potion',
    value: 20,
  };

  const pokeball = {
    name: 'pokeball',
    value: 1,
  };

  const rareCandy = {
    name: 'rare candy',
    value: 1,
  };

  // Pokemon arrays
  const playerPokemon = [bulbasaur, charmander, squirtle];
  const enemyPokemon = [bulbasaur, charmander, squirtle];

  // Pokemon current hp
  const [playerCurrentHP, setPlayerCurrentHP] = useState(playerPokemon[playerCurrentPokemon].currentHP);
  const [enemyCurrentHP, setEnemyCurrentHP] = useState(playerPokemon[enemyCurrentPokemon].currentHP);

  // Pokemon current pokemon random
  const randomPlayerCurrentPokemon = Math.floor(Math.random() * playerPokemon.length);
  const randomEnemyCurrentPokemon = Math.floor(Math.random() * enemyPokemon.length);

  // Set initial player and enemy current pokemon
  useEffect(() => {
    setPlayerCurrentPokemon(randomPlayerCurrentPokemon);
    setEnemyCurrentPokemon(randomEnemyCurrentPokemon);
  }, []);

  // Pokemon current lvl random
  playerPokemon[playerCurrentPokemon].currentLVL = Math.floor(Math.random() * playerPokemon[playerCurrentPokemon].lvl) + 1;
  enemyPokemon[enemyCurrentPokemon].currentLVL = Math.floor(Math.random() * enemyPokemon[enemyCurrentPokemon].lvl) + 1;

  // Item arrays
  const item = [potion, pokeball, rareCandy];

  // Left menu/text box
  const [leftMenuVisible, setLeftMenuVisible] = useState(0);

  // Render the game
  useEffect(() => {
    renderGame();
  });

  const renderGame = () => {
    return (
      <div id="box">
      <div id="app-game-box">{renderScreen()}
        <div id="app-text-box">{currentLeftMenu()}</div>
        <div id="app-menu-box">{renderRightMenu()}</div>
      </div>
      </div>
    );
  };

  // Render all the game fight info and sprites
  const renderScreen = () => {
    return (
      <div className="root">
        <style>
          {`
            #element-box-player {
              background-color: ${playerPokemon[playerCurrentPokemon].background};
              border-color: ${playerPokemon[playerCurrentPokemon].border};
            }
            #element-box-enemy {
              background-color: ${playerPokemon[enemyCurrentPokemon].background};
              border-color: ${playerPokemon[enemyCurrentPokemon].border};
            }
          `}
        </style>
        <img src="/src/components/PokemonGame/assets/background/forest.png" id="background-picture" alt="Background" />

        {/* PLAYER */}
        <div id="player-stats">
          <div className="stats-name-box">{playerPokemon[playerCurrentPokemon].name}</div>
          <div className="stats-hp-box">
            <span className="stats-text-hp">HP.</span>
            {playerPokemon[playerCurrentPokemon].currentHP}/{playerPokemon[playerCurrentPokemon].hp}
          </div>
          <div className="stats-lvl-box">
            <span className="stats-text-lvl">LV.</span>
            <span className="stats-text-lvl-number">{playerPokemon[playerCurrentPokemon].currentLVL}</span>
          </div>
          <div id="element-box-player">
            <span id="element-box-player-text">{playerPokemon[playerCurrentPokemon].type}</span>
          </div>
        </div>
        <img
          src={`/src/components/PokemonGame/assets/pokemon/${playerPokemon[playerCurrentPokemon].spriteback}.png`}
          id="foreground-pokemon-player"
          alt="Player Pokemon"
        />

        {/* ENEMY */}
        <div id="enemy-stats">
          <div className="stats-name-box">{enemyPokemon[enemyCurrentPokemon].name}</div>
          <div className="stats-hp-box">
            <span className="stats-text-hp">HP.</span>
            {enemyCurrentHP}/{enemyPokemon[enemyCurrentPokemon].hp}
          </div>
          <div className="stats-lvl-box">
            <span className="stats-text-lvl">LV.</span>
            <span className="stats-text-lvl-number">{enemyPokemon[enemyCurrentPokemon].currentLVL}</span>
          </div>
          <div id="element-box-enemy">
            <span id="element-box-player-enemy">{enemyPokemon[enemyCurrentPokemon].type}</span>
          </div>
        </div>
        <img
          src={`/src/components/PokemonGame/assets/pokemon/${enemyPokemon[enemyCurrentPokemon].spritefront}.png`}
          id="foreground-pokemon-enemy"
          alt="Enemy Pokemon"
        />
      </div>
    );
  };

  // Function to choose the current left menu to show
  const currentLeftMenu = () => {
    let currentMenu;
    if (leftMenuVisible === 0) {
      currentMenu = null; // No menu when leftMenuVisible is 0
    } else if (leftMenuVisible === 1) {
      currentMenu = renderMenuFight();
    } else if (leftMenuVisible === 2) {
      currentMenu = renderMenuBag();
    } else if (leftMenuVisible === 3) {
      currentMenu = renderMenuPokemon();
    } else if (leftMenuVisible === 4) {
      currentMenu = resetGame();
    }
    return currentMenu;
  };

  // Render main menu buttons
  const renderRightMenu = () => {
    return (
      <div>
        <button onClick={() => toggleMenuLeft(1)} id="menu-button-1">
          fight
        </button>
        <button onClick={() => toggleMenuLeft(2)} id="menu-button-2">
          bag
        </button>
        <button onClick={() => toggleMenuLeft(3)} id="menu-button-3">
          pokemon
        </button>
        <button onClick={resetGame} id="menu-button-4">
          reset
        </button>
      </div>
    );
  };

  // Render fight menu buttons
  const renderMenuFight = () => {
    return (
      <div>
        <button onClick={() => playerAttackBtn(0)} id="fight-text-button-1">
          {playerPokemon[playerCurrentPokemon].attack[0].name}
        </button>
        <button onClick={() => playerAttackBtn(1)} id="fight-text-button-2">
          {playerPokemon[playerCurrentPokemon].attack[1].name}
        </button>
      </div>
    );
  };

  // Render pokemon menu buttons
  const renderMenuPokemon = () => {
    return (
      <div>
        <button onClick={() => changePokemon(0)} id="pokemon-1">
          {playerPokemon[0].name}
        </button>
        <button onClick={() => changePokemon(1)} id="pokemon-2">
          {playerPokemon[1].name}
        </button>
        <button onClick={() => changePokemon(2)} id="pokemon-3">
          {playerPokemon[2].name}
        </button>
      </div>
    );
  };

  // Render bag menu buttons
  const renderMenuBag = () => {
    return (
      <div>
        <button onClick={useItemPotion} id="bag-1">
          {item[0].name}
        </button>
        <button onClick={useItemPokemon} id="bag-2">
          {item[1].name}
        </button>
        <button onClick={useItemRareCandy} id="bag-3">
          {item[2].name}
        </button>
      </div>
    );
  };

  // Function to toggle the left menu
  const toggleMenuLeft = (menuId) => {
    if (leftMenuVisible === menuId) {
      setLeftMenuVisible(0);
    } else {
      setLeftMenuVisible(menuId);
    }
  };

  // Function to change the current Pokemon
  const changePokemon = (pokemonId) => {
    if (playerCurrentPokemon === pokemonId) {
      // Do nothing if the selected Pokemon is the current one
    } else {
      setPlayerCurrentPokemon(pokemonId);
    }
  };

  // Function to handle player's attack
  const playerAttackBtn = (attackId) => {
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
  };

  // Function to use a potion
  const useItemPotion = () => {
    playerPokemon[playerCurrentPokemon].currentHP += potion.value;
    if (playerPokemon[playerCurrentPokemon].currentHP > playerPokemon[playerCurrentPokemon].hp) {
      playerPokemon[playerCurrentPokemon].currentHP = playerPokemon[playerCurrentPokemon].hp;
    }
  };

  // Function to use a rare candy
  const useItemRareCandy = () => {
    if (playerPokemon[playerCurrentPokemon].currentLVL === 100) {
      return;
    }
    playerPokemon[playerCurrentPokemon].currentLVL += rareCandy.value;
    if (playerPokemon[playerCurrentPokemon].currentLVL > 100) {
      playerPokemon[playerCurrentPokemon].currentLVL = playerPokemon[playerCurrentPokemon].lvl;
    }
  };

  // Function to end the game when the player wins
  const endGameWon = () => {
    const confirmation = window.confirm('You won!');
    if (confirmation) {
      window.location.reload();
    }
  };

  // Function to end the game when the player loses
  const endGameLost = () => {
    const confirmation = window.confirm('You lost!');
    if (confirmation) {
      window.location.reload();
    }
  };

  // Function to reset the game
  const resetGame = () => {
    const confirmation = window.confirm('Are you sure you want to reset the game?');
    if (confirmation) {
      window.location.reload();
    }
  };

  return (
    <div id="app-game-box">
      {renderScreen()}
      <div id="app-text-box">{currentLeftMenu()}</div>
      <div id="app-menu-box">{renderRightMenu()}</div>
    </div>
  );
};

export default PokemonGame;
