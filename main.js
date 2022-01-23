const quizData =[
{
    question:"how old is amru",
    a: '20',
    b: '34',
    c:'15',
    d: '26',
    correct:'d'
},
{
    question:'what is the best programming language',
    a:'python',
    b:'react',
    c:'php',
    d:'java',
    correct:'a'
},{
    qusetion: "what is html stands for?",
    a:'cascading style sheet',
    b:'hyper text markup language',
    c:'json file handling',
    d:'heading tang markup language',
    correct:'b'
    

}
];
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = docment.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

// functions
let currentQuiz = 0;
 loadQuiz();

 function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
    

   
 }

 submitBtn.addEventListener('click',()=>{
    currentQuestion++;
    if(currentQuiz < quizData.length ){
        loadQuiz();
    }else{
        // to show results
        alert("You Finished get yourself an orange lemonade");
        
    }
    
 })