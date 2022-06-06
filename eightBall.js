let userName = '';

userName ? console.log(`Hello ${userName}!`) : console.log("Hello!")

const userQuestion = "Should I do this?"

userName ? console.log(`${userName} asked ${userQuestion}`) : console.log(`${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8)

let eightball = ''

switch (randomNumber) {
  case randomNumber = 0:
    eightball = 'It is certain';
    break;
  case randomNumber = 1:
    eightball = 'It is decidedly so';
    break;
  case randomNumber = 2:
    eightball = 'Reply hazy try again';
    break;
  case randomNumber = 3:
    eightball = 'Cannot predict now';
    break;
  case randomNumber = 4:
    eightball = 'Do not count on it';
    break;
  case randomNumber = 5:
    eightball = 'My sources say no';
    break;
  case randomNumber = 6:
    eightball = 'Outlook not so good';
    break;
  case randomNumber = 7:
    eightball = 'Signs point to yes';
    break;
}

console.log(eightball)