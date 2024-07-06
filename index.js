// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(namesArray, eventName) {
  let cards = []; 

  for (let i = 0; i < namesArray.length; i++) {
      
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      cards.push(message); 
  }

  return cards; 
}

let names = ["Alice", "Bob", "Charlie"];
let event = "birthday";

let messages = writeCards(names, event);
console.log(messages);

function countDown(startingNumber) {
  
  if (startingNumber <= 0 || !Number.isInteger(startingNumber)) {
      console.log("Please enter a positive integer.");
      return;
  }

  let currentNumber = startingNumber;

  
  while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
  }
}