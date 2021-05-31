// create variable to store user  - use empty string as default
let user = " ";

// create ternery expression to determine outcome if user name is entered or not
user ? console.log("Hello, stranger!") : console.log(`Hello, ${user}`);

// create variable to store magic ball user question
let userQuestion = "Will I be a billionaire?";

// test userQuestion
//console.log(userQuestion)

// generate a random whole number between 0-7 and save to a variable
let randomNum = Math.floor(Math.random() * 8);

// create a variable and set to an empty string that will return an answer depending on the random number generated
let magicAnswer = " ";

// create switch statement to bring it all together

switch (randomNum) {
    case 0:
        magicAnswer = "It's not in the cards";
        break;
    case 1:
        magicAnswer = "Oh you betcha";
        break;
    case 2:
        magicAnswer = "All signs point to yes";
        break;
    case 3:
        magicAnswer = "Answer is hazy - try again later";
        break;
    case 4:
        magicAnswer = "It is certain";
        break;
    case 5:
        magicAnswer = "Sorry - there is no chance of it";
        break;
    case 6:
        magicAnswer = "Outlook - decent";
        break;
    case 7:
        magicAnswer = "LOL! Nope!";
        break;
    default:
        magicAnswer = "Ye aulde Magick Ball is busted --- come back later"                             
}

console.log(magicAnswer)
