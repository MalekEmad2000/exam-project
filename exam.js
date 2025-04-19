var questionTitle=document.getElementById("question-title");
var choices=document.querySelectorAll(".choice-button");
var pageNumber=document.getElementsByClassName("question-number")[0];

// global variable to get current question index starting with index 0 aka first question;
var currentQuestion=0;  
// array containig all questions
var questions=[];


// ajax request to fetch exam questions
function getQuestions(){

    var questionsReq=new XMLHttpRequest();
    questionsReq.open("get","questions.json");
    questionsReq.send();
    questionsReq.addEventListener("readystatechange",function(){
  
            if(questionsReq.readyState===4 && questionsReq.status ===200){
              
              questions=JSON.parse(questionsReq.response)['questions'];
              renderQuestion();
            }
  
    })
  
  }

  getQuestions();
// adding event listener to all choice buttons and handling choice selection a
  choices.forEach(function(button){

    button.addEventListener("click",function(event){
          
      // saving selected choice in questions array
        questions[currentQuestion].answer=this.value;
        // adding to update css for selected choice
        renderQuestion();
        console.log(questions);

    })
}) 
// function to render a question
function renderQuestion(){
 
  var question=questions[currentQuestion];
  pageNumber.textContent=currentQuestion+1;
  questionTitle.textContent=question.questionTitle;
  const choiceKeys = Object.keys(question.choices); 

  choices.forEach(function(choice,index){
     
    const key = choiceKeys[index];
    const label = choice.closest("label");

      choice.value=key;
      // if user selected a choice highlight selected questino
      questions[currentQuestion].answer  === choice.value ? label.classList.add("selected-choice") :label.classList.remove("selected-choice");  
      label.textContent=question["choices"][key];
      label.prepend(choice);
  })

}

function next(){
     
    if(currentQuestion <questions.length-1){
        currentQuestion++;
        renderQuestion();
    }



}
function prev(){

   if(currentQuestion>0){
    currentQuestion--;
    renderQuestion();
   }

}

function mark(){


  
}