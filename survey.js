const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
});

let responses = [];

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (listen) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (dish) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${dish} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});

// console.log(responses);