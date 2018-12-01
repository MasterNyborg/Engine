function updateEntities(dt) {
    switch (gameState) {
        case "ingame":
            if (!ingameInit) {
                console.log("initializing ingame");
                stateSizeX = 512; //
                stateSizeY = 480; //entire size of current level
                player.pos = [100, 100];
                centerCamera();
                click = false;
                var door = {
                    pos: [randNum(0, canvas.width - 25), randNum(0, canvas.height - 40)],
                    sprite: new Sprite('img/door.png', [0, 0], [25, 40], 5, [[0, 1]], true)
                };
                var door2 = {
                    pos: [randNum(0, canvas.width - 25), randNum(0, canvas.height - 40)],
                    sprite: new Sprite('img/door.png', [0, 0], [25, 40], 5, [[0, 1]], false)
                };
                doors = [];
                doors.push(door);
                doors.push(door2);
                ingameInit = true;
            }
            player.sprite.update(dt);
            updateDoors(dt);
            break;
        case "test":
            if (!testInit) {
                stateSizeX = 1024; //
                stateSizeY = 960; //entire size of current level
                player.pos = [100,100]
                centerCamera();
                click = false;
                var door = {
                    pos: [randNum(0, stateSizeX - 25), randNum(0, stateSizeY - 40)],
                    sprite: new Sprite('img/door.png', [0, 0], [25, 40], 5, [[0, 1]], true)
                };
                var door2 = {
                    pos: [randNum(0, stateSizeX - 25), randNum(0, stateSizeY - 40)],
                    sprite: new Sprite('img/door.png', [0, 0], [25, 40], 5, [[0, 1]], false)
                };
                doors = [];
                doors.push(door);
                doors.push(door2);
                testInit = true;
            }
            player.sprite.update(dt);
            updateDoors(dt);
            break;
        default: ;
    }
}

function checkCollisions() {
    checkPlayerBounds();
    switch (gameState) {
        case "ingame":
            if (collision(player, doors[0])) {
                console.log("touched door");
                gameState = "test";
                ingameInit = false;
            } else if (collision(player, doors[1])) {
                console.log("restarting");
                gameState = 'ingame'
                ingameInit = false;
            }
        case "test":
            if (collision(player, doors[0])) {
                console.log("touched door");
                gameState = "test";
                testInit = false;
            } else if (collision(player, doors[1])) {
                console.log("restarting");
                gameState = 'ingame'
                testInit = false;
            }
            break;
        default: ;
    }
}

function render() {
    switch (gameState) {
        case "ingame":
            setCamera();
            drawBackground(testBg, testBgh);
            renderEntity(player);
            renderEntities(doors);
            break;
        case "test":
            setCamera();
            drawBackground(testBg1, testBgh1);
            renderEntity(player);
            renderEntities(doors);
            if (debug) {
                ctx.beginPath();
                ctx.moveTo(scrollBuffer,scrollBuffer); //top left
                ctx.lineTo(scrollBuffer, canvas.height-scrollBuffer);
                ctx.lineTo(canvas.width - scrollBuffer, canvas.height-scrollBuffer);
                ctx.lineTo(canvas.width - scrollBuffer, scrollBuffer);
                ctx.lineTo(scrollBuffer,scrollBuffer);
                ctx.stroke();
            }
            break;
        default: ;
    }
};

/*
//Undertale-Exploration and player interraction 
Animal Crossing- Daily driven life sim with town upgrades and NPC freinds
Fallout- Open world with choices that change your game
Zelda-Adventure game with different environments and items to aid as you play
Paper Mario- eqiuppable 'badge' perks to help mold progression to how you fit on a day to day basis

//things

"You gave upon the ugliest [object] you've ever seen in your life." "You remember this game was only made by 1 person."

Click yes to reload the level. Clicking no will corrupt your save and you will have to restart your whole game over. This is only the appearance of a choice. Click Yes.
Clicking yes just reloads the level. Clicking No will play two cowboy gunshot sounds and the text "I like your gumption pardner" appears. User gets an achievement. 
 1/100 chance the game fake crashes and fake deletes the save until the player clicks new game. Then they are awarded a secret 'Gotcha' achievement and the game resumes as normal.

 //Nunyo Beezwax

 //group of conspiracy lunatics that think the entire game world is round

//every trash can in the game has 'something' in it. Be it dialogue or an item

shopkeepers in the wild you can buy or steal from

when an NPC is preparing to move into the village they pack a box from a 'closet' in their old living space. They bring items from the closet to the box
the items they bring from the closet to the box are a specific tileset of random items they could be packing

//mushrooms, glowing mushrooms

A candle that smells like nothing. If that makes any scents
snow scented candle makes no scents "sense"

"Job simulator"
at first you find a nice storefront to buy supplies and the cashier at the store is an angry and miserable person who has no patience for anything
If you take too long to decide on something they'll close the dialogue out.
Reacts very poorly to certain high value items when inquired
pretty much a total burden to the player to interract with at any point
later get the opportunity to work for the store
Work a shift every day in a terrible fantasy retail store
Store has multiple departments. Some departments are fun and others are not
boss moves you around departments daily and randomly changes you to the bad one
Get assigned shifts minutes shorter than the 'good' shifts
interract with the cashier player who also has to go through all the same shit as you
As you play each day you slowly learn that the cashier is miserable because your boss is a dickface
eventually the cashier gets fed up and quits the job and you can offer them to move into your village.
In the village you can assign the cashier to work at the store and they end up becoming a very happy person over time when working in the store

/////////
//areas//
/////////

//Cave exploration/ mining area
//farming area
//fishing area
//forest area
//main town//maze
//make a level in case the game breaks
//bridge level where you dodge fish like in mario. Also finish minigames?
Certain areas go on forever and are randomly generated
each major area has slightly different variances for each day of the week

A level where the player gets approached by a giant who sends out a pocket monster and battles you + catches you. You then get sent into a 'pokeball' like object with a small puzzle where 
you are then transferred to the 'pc' where you meet other 'pokemon' in wait. Some of them are sick with pokerus

////////////////
//CASTLE LEVEL//
////////////////
player finds entrance to castle in the world. Entering the front door of the castle shows a guard post that prevents the player from entering
the main facility if they are not royalty. [royalty will be acquired through a later quest(bees?) and the player can choose to equip or unequip
 the item(crown?)]
If they are not royalty they need to explore the room until the find a hidden passage into a side room. Entering this side room starts a big stealth 
mission requiring the player to navigate the entire castle without alerting the guards. Alerting the guards send the player to the beginning of the castle 
forcing them to restart from the beginning. Navigating through the castle successfully will allow players to find new items for their home/town in addition
to receiving either an HP or an ability upgrade slot. Getting caught in specific rooms of the castle that have higher security priority will throw the 
player into jail which starts a seperate 'jailbreak' mission. The jailbreak mission will involve its own puzzles that the player must navigate through to 
be able to resume the game as normal. Entering the castle as 'royalty' will stop all the guards and residents from being 'hostile' and throwing the player
outside/into the dungeon.

//Dungeons
Beating a dungeon unlocks a warp to the entrance for use as fast travel to the far ends of the areas away from home

Fire Dungeon
Water Dungeon
Ice dungeon


/////////////////
//SETTINGS MENU//
/////////////////
set option for game window size (3 size options)
option for camera movements attached to player, small box, big box

~~~~~~~~~~
Game Loops
~~~~~~~~~~
Player starts in their town. 
They tend to their crops
They cook a meal to boost their adventure
cook meals for villagers
They put item in backpack(items with slot upgrades)
They attach any applicable badges
They enter the openworld


find coins in world to play arcade games -beat a game to get a cartridge for your home
Avoid obstacles pertaining to each part of the world
Encounter NPCs and NICs in the world who give quests or present direct puzzles for the players. Some NPCs need items and some NPCs can be befriended to move into your village




upgrade house
upgrade friends house
donate to museum
decorate home
decorate town
buy clothes 


~~~~~~~~~~
Characters
~~~~~~~~~~

Catopolis-
    Catricia

Deep Sea
    Cassandra the Squirrel

Inconvenience store
    Cashier
    Jerk Boss

Villain of the game messes with mechanics of the game and the UI as you play
The player gets presented with a choice with both options seeming really good but they are unable to select anything for a bit. The Villain will then reveal himself as an evil computer?


~~~~~~~~~~~~
Acheivements
~~~~~~~~~~~~
Acheivements are dynamic. You are able to Gain and Lose acheivements through gameplay. Player Score is directly linked to acheivements



















































*/
