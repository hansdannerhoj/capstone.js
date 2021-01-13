const readlineSync = require('readline-sync')

const name = readlineSync.question('what is your name? ');

readlineSync.question('hello ' + name + ', welcome to doom!  will you risk your life to defeat evil?. Press enter to begin.');

const badGuys = [ ' killer zombie', 'demon', "lost soul", 'cyber demon'];
const treasure = [ 'med kit', 'armor', "berserker pack", " health potion"];
var prize = [];
let userHealth = 40;
const options = ['walk', 'exit', 'print'];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random()* (5 - 4 + 3) + 5);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 40;
    const badGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5 );

    const index = readlineSync.keyInSelect(options, 'what would you like to do next?');

    if(options[index] == 'exit') {
        return userHealth = 0;
    } else if (options[index] == 'print'){
        console.log(name + '\n' + userHealth + '\nTreasure: ' + pickUp);
    }else if (options[index] === 'walk'){
        let key = Math.random();
        if (key <= .3){
            console.log('walking . . . ');
        }else if (key >= .3){
                console.log(badGuy + 'showed up.');

        while(badGuysHealth > 0 && userHealth > 0){
      const user = readlineSync.question(' what do you want to do? enter "r" to run or "a" to attack: ');
         switch (user){
         case 'r': 
         
         const run = Math.random();
                        if(run < .5){
                            console.log('before you can run away ' + badGuy + ' attacks you with: ');
                        } else{
                            console.log(' you ran away!');
                            break;
                        }
                        case 'a':
                        
                            badGuysHealth -= attackPower;
                            console.log(' you attacked ' + badGuy + 'with' + attackPower + 'attack power');
                            userHealth -= badGuysPower;
                            console.log('enemy just attacked you with: ' + badGuysPower + ' attack power');
                            if (badGuysHealth <= 0){
                                console.log('you killed ' + badGuy + '.\n' + badGuy + 'left' + pickUp );
                                let loot = Math.random();
                                if (loot<= .3){
                                    prize.push(pickUp);
                                }
                                } else if(userHealth <= 0){
                                    console.log(badGuy +  'has defeated you. you are dead');
                                }
                            }        
                    }
                }
            }
    }
    while ( userHealth > 0){
        userRestore = function(){
            userActive = true;
            userHealth = 40;
        };
        userRestore();
        game();
}