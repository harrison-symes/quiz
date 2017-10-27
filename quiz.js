function answerQuiz(iscorrect,display_in) {
  if (iscorrect){
  console.log("correkt");

  document.getElementById(display_in).innerHTML = "Correct!"
  document.getElementById(display_in).style.display = "block";

 }

 else {
    console.log("incorrekt");
    document.getElementById(display_in).innerHTML = "Not Correct!"
    document.getElementById(display_in).style.display = "block";
 }
}


var question1 = {
  question: '<p>How do you add an event listener to &lt;button id="btn"&gt;?</p>',
  question_id: 'q1',
  answers: [
    { 
      text: "document.getElementById('btn').addEventListener(eventtype, callbackfunction)",
      isCorrect: true
    },
    { 
      text: "document.getElementByClass('btn').addEventListener(eventtype, callbackfunction)",
      isCorrect: false
    },
    {
      text: "btn.addEventListener(eventtype, callbackfunction)",
      isCorrect: false
    }, {
      text: "btn.getElementById('btn').addEventListener(eventtype, callbackfunction)",
      isCorrect: false
    },
  ]
}

var question2 = {
  question: '<p>6*7</p>',
  question_id: 'q1',
  answers: [
    {
      text: "35",
      isCorrect: false
    },
    {
      text: "40",
      isCorrect: false
    },
    {
      text: "42",
      isCorrect: true
    }, {
      text: "Life the universe and everything!",
      isCorrect: true
    },
  ]
}


function renderQuestion (question) {
  var htmlText = '<h1>Question</h1>'
  htmlText += question.question
  for (var i = 0; i < question.answers.length; i++) {
    htmlText += ` <label class="question"><input type="radio" name="option" value=${i} id="option${i}" class="question">${question.answers[i].text}</label><br>`
  }
  htmlText +=`<div id="${question.question_id}"></div>`
  
  document.getElementById('question1').innerHTML += htmlText
  for (var i = 0; i < question.answers.length; i++) {
    document.getElementById('option' + i).addEventListener('click', answerQuiz.bind(null, question.answers[i].isCorrect,question.question_id))
  }
  
  
}

renderQuestion(question1)
renderQuestion(question2)
