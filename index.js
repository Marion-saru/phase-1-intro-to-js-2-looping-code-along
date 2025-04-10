const names =  [ 'Guadalupe', 'Ollie', 'Aki' ];

function writeCards(names) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    return messages;
  }
  console.log(writeCards(names));

  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  console.log(countDown(10));