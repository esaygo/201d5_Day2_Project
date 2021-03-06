// setting up counter for keeping score of how many correct answers the user gets
var counter = 0;

//making variables for changing html text
var res1 = document.getElementById('r1');
var res2 = document.getElementById('r2');
var res3 = document.getElementById('r3');

var user = prompt('What is your name?');
console.log('The user\'s name is :' + user);

alert('Hi ' + user + '. I\'m going to ask you 3 yes or no questions. Please answer yes or no for each question.');

function ask1 () {
  var answer1 = prompt(user + ', am I a resident of Washington state?');
  console.log('user\'s answer1 is: ' + answer1);

  // make is so we can accept 'y' or 'Y' or 'yes' or 'YES' as an acceptable response to the question
  if (answer1.toLowerCase() === 'y' || answer1.toLowerCase() === 'yes') {
    //alert('Great ' + user + ', you got the first question right')
    res1.textContent = 'Great ' + user + ', you got the first question right';
    console.log('user got question1 correct.');
    counter ++;
    console.log('variable counter now = ' + counter);
  } else {
    //alert('Sorry ' + user + ', that\'s not right, I am a resident of Washington.')
    res1.textContent = 'Sorry ' + user + ', that\'s not right, I am a resident of Washington.';
    console.log('user got question 1 wrong.');
  }
}

function ask2 (){
  var answer2 = prompt(user + ', here is question number 2: Do I have brown hair?');
  console.log('user\'s answer2 is: ' + answer2);
  // make is so we can accept 'y' or 'Y' or 'yes' or 'YES' as an acceptable response to the question
  if (answer2.toLowerCase() === 'y' || answer2.toLowerCase() === 'yes') {
    //alert('Fantastic ' + user + ', you are right!')
    res2.textContent = 'Fantastic ' + user + ', you are right!';
    console.log('user got question2 correct');
    counter ++;
    console.log('variable counter now = ' + counter);
  } else {
    //alert('Bummer ' + user + ', you got question 2 wrong.')
    res2.textContent = 'Bummer ' + user + ', you got question 2 wrong.';
    console.log('user got question2 wrong. I do have brown hair.');
  }
}

function ask3 () {
  var answer3 = prompt(user + ', here is question number 3: Do I have 4 kids?');
  console.log('user\'s answer3 is: ' + answer3);
  if (answer3.toLowerCase() === 'n' || answer3.toLowerCase() === 'no') {
    //alert('Awesome ' + user + ', you got this one right!');
    res3.textContent = 'Awesome ' + user + ', you got this one right!';
    console.log('user got question3 right.');
    counter ++;
    console.log('variable counter now = ' + counter);
  } else {
    //alert('Oops, ' + user + ', you got this one wrong.');
    res3.textContent = 'Oops, ' + user + ', you got this one wrong.';
    console.log('user got question3 wrong.');
  }
}

//calling question functions
ask1();
ask2();
ask3();

document.write('You got ' + counter + ' out of 3 questions correct.');

function ask4() {
  alert(user + ', time for a bonus question. Please respond with a number, such as 2, not \'two\'.');
  do {
  var answer4 = prompt(user + ', how many years have I been married?');
  console.log('user\'s answer4 is: ' + answer4);
  if (answer4 > 5) {
    alert('Sorry ' + user + ', your answer is too high, I\'m not that old! Guess again.');
    console.log('user\'s answer4 is too high.');
  }else if (answer4 == 5) {
    alert('Fantastic ' + user + ', you nailed it!');
    console.log('user\'s answer4 is correct');
  }else if (answer4 < 5) {
    alert('Sorry ' + user + ', your answer was too low. Do you see the grey hair in my beard? Guess again.');
    console.log('user\'s answer4 is too low.');
  }else {
    alert('It looks like you didn\'t enter a numeric value. Please enter a number, or I\'ll have to find a tack hammer.')
    console.log('user\'s answer4 was not a number.');
  };
  } while (answer4 != 5);
}

ask4();
