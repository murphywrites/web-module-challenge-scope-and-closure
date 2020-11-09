// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
  Counter 1 uses nested functions and counter 2 does not
  2. Which of the two uses a closure? How can you tell?
  Counter 1. Because the function counter() uses a variable from its parent function
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
     Counter 1 would be better for creating multiple new counters. Counter 2 would be better for adding counts to existing counters.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
console.log("task1",counter1())
console.log("task1",counter1())
console.log("task1",counterMaker())


// counter2 code
let count = 0;

function counter2() {
  return count++;
}
console.log("task1a",counter2())
console.log("task1a",counter2())
console.log("task1a",counter2())


/* Task 2: inning() 
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  NOTE: You will be using this function over and over again in the tasks below
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
*/

function inning(){

    return Math.floor(Math.random()*3)

}

/* Task 3: finalScore()
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the game
For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inningCB,numInnings){
  let homeScore = 0;
  let awayScore = 0;

  for(let i = 0;i<numInnings;i++){
    homeScore = homeScore + inningCB()
    awayScore = awayScore + inningCB()  
  }

 return {
   "Home": homeScore,
   "Away": awayScore
 }

}
console.log('task3',finalScore(inning, 9))
/* Task 4: 
// create a function called getInningScore 
// the function should take the inning function as an argument 
// it should return an object with with a score for home and a score for away that that populates from invoking the inning callback. */

function getInningScore(inningCB) {
  return {
    'Home':inningCB(),
    'Away':inningCB()
  }
}
console.log('task4',getInningScore(inning))
/* Task 5: scoreboard()
Use the scoreboard function below to do the following:
  1. Receive a callback function, that you create, called `getInningScore`
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning (see example below)
  5. If there's a tie, add this message with the score to the end of the array: 
     "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there is no tie, add this message to the end of the array: 
     "Final Score: Away 13 - Home 11"  (see no tie example below)
  HINT: `getInningScore` should be invoked by `scoreboard` and use `inning` to get and return the scores back to `scoreboard`
  
  For example: If there is no tie, invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 3",
  "Inning 3: Away 4 - Home 4", 
  "Inning 4: Away 5 - Home 5", 
  "Inning 5: Away 7 - Home 7", 
  "Inning 6: Away 9 - Home 8", 
  "Inning 7: Away 10 - Home 8", 
  "Inning 8: Away 12 - Home 9",
  "Inning 9: Away 13 - Home 11", 
  "Final Score: Away 13 - Home 11"  
]  
  If there is a tie, invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 3",
  "Inning 3: Away 4 - Home 4", 
  "Inning 4: Away 5 - Home 5", 
  "Inning 5: Away 7 - Home 7", 
  "Inning 6: Away 9 - Home 8", 
  "Inning 7: Away 10 - Home 8", 
  "Inning 8: Away 12 - Home 10",
  "Inning 9: Away 12 - Home 12", 
  "This game will require extra innings: Away 12 - Home 12"
]  
  */

function scoreboard(inningScoreCB, inningCB, numInnings) { let gameScoreArray = [];
  let homeScore = 0;
  let awayScore = 0;
  for (let i=0;i<numInnings;i++) {
    awayScore = awayScore + inningScoreCB(inningCB).Away
    homeScore = homeScore + inningScoreCB(inningCB).Home

    gameScoreArray.push(`Inning ${i+1}: Away ${awayScore} - Home ${homeScore}`)

  }
  if (homeScore != awayScore){
    gameScoreArray.push(`Final Score: Away ${awayScore} - Home ${homeScore}`)
  } else {
    gameScoreArray.push(`This game will require extra innings: Away ${awayScore} - Home ${homeScore}`)
  }
return gameScoreArray
}

console.log('task5',scoreboard(getInningScore,inning,9))


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
export default{
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}