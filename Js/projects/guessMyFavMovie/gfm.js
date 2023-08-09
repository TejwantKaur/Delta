let favMovie = 'avatar';
let guess = prompt('Guess');

// while((guess != favMovie) && (guess != 'quit')){
//     console.log(`${guess} is Wrong!! Try again`);
//     guess = prompt('Wrong!! Try again');
// }

// if(guess === favMovie){
//     console.log(`Congrats!!`)
// }else{
//     console.log(`You Quit!!`)
// }

while((guess != favMovie)){
    if(guess == 'quit'){
        console.log(`You Quit!!`);
        break;
    }else{
        console.log(`${guess} is Wrong!! Try again`);
        guess = prompt('Wrong!! Try again');
    }
} 
if(guess === favMovie){
    console.log(`Congrats!!`)
} else{}
