var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("What is your name: ");
console.log("Hi " + userName + ", I am meet ved");
console.log("Lets play a small quiz to test your knowledge");
var agree = readlineSync.question("Type Y for yes and N for no: ");
var highScores = [{
  name:"meet",
  score: 13,
},

{
  name:"rohit",
  score: 11,
},
{
  name:"pant",
  score: 12,
},
];
function showScores() {
  console.log("YAY!YOUR FINAL SCORE: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
  // for(var i=0;i<=highScores.length;i++)
  // {
  //   console.log(highScores[i]);
  // }
}

if (agree.toUpperCase() === "Y") {
  var cricketQuestions = [
    {
      question: "1 Who is the coolest captain in Indian Cricket?",
      answer: "Dhoni"
    },
    {
      question: "2 Who scored three doubled hundreds?",
      answer: "Rohit Sharma"
    },
    {
      question: "3 Which country won the 2011 Cricket World cup?",
      answer: "India"
    },
    {
      question: "4 Which player is called as the Master Blaster?",
      answer: "Sachin Ramesh Tendulkar"
    },
    {
      question: "5 Full form of IPL?",
      answer: "Indian Premier League"
    }
  ];

  for (var i = 0; i < cricketQuestions.length; i++) {
    var currentQuestion = cricketQuestions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }



  //Round 2
  if (score === 4 || score === 5) {
    console.log("Congratulaions !!! You are qualified for the  Round 2 !!");
    console.log("Now the difficulty Increases");
    var proQuestions = [
      {
        question: "6 Who is the Founder of language C?",
        answer: "Dennis Ritchie"
      },
      {
        question: "7 Who is the founder of Facebook?",
        answer: "Mark Zuckerberg"
      },
      {
        question: "8 What is the fullform of OOP?",
        answer: "Object Oriented Programming"
      },
      {
        question: "9 Who is the founder of Microsoft?",
        answer: "Bill Gates"
      },
      {
        question: "10 Who is the founder of Apple Inc.?",
        answer: "Steve Jobs"
      }];

    for (var i = 0; i < proQuestions.length; i++) {
      var currentQuestion = proQuestions[i];
      play(currentQuestion.question, currentQuestion.answer);
    }
  }
  else {
    console.log("You need minimum score = 4 to qualify for round 2 !! ");
  }

  //ROund 3
  if (score === 6 ||score===9 ||score === 10) {
    console.log("Congratulaions !!! You are qualified for the final round i.e.Round 3 !!");
    console.log("Now the quiz will be about F.R.I.E.N.D.S show!!");
    var agree1 = readlineSync.question("Do you want to continue??\nType yes or no\n");
    if (agree1.toUpperCase() === "YES") {
      var friQuestions = [{
        question: "11 How many seasons are there in FRIENDS?",
        answer: "10"
      },
      {
        question: "12 How many marriages did ROSS have?",
        answer: "3"
      },
      {
        question: "13 How does Joey flirt with girls?",
        answer: "How you Doin?"
      },
      {
        question: "14 Where does Racheal work?",
        answer: "Ralph Lauren"
      },
      {
        question: "15 What is the name of show in which Joey got famous?",
        answer: "Days of our lives"
      }];
      for (var i = 0; i < friQuestions.length; i++) {
        var currentQuestion = friQuestions[i];
        play(currentQuestion.question, currentQuestion.answer);
      }
    }
    else {
      console.log("You need minimum score = 8 to qualify for round 3 !! ");
      
    }

  }
}

 else {
  console.log("Its ok if you are not interested. Have anice day!");
}

var totalScore = score;
console.log("Your total score is: ", totalScore);
showScores();
 

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are Right!!");
    score = score + 1;
  } else {
    console.log("You are wrong!!");

  }
  console.log("Current score is: ", score);
  console.log("-----------------------------------");

}




