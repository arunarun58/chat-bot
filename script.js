
var btn_press = document.getElementById("send-el");
var enter_press = document.getElementById("user-el");
btn_press.addEventListener("click", function() { 
  processfunction()
})

enter_press.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      processfunction()
    }
})

function processfunction() {

  const userMessage0 = document.getElementById("user-el").value;
  const userMessage = userMessage0.toLowerCase()
  
  const output = document.getElementById("messages");
  var speed = 50;

  
  let user = ["hi", "hello", "hey", "ha"];
  let questions = ["what is your name", "who are you", "who made you", "what is your name?", "who are you?", "who made you?"];


  let greetings = ["Hello, there", "Hi, there"];
  let quser = "My name is Chatbot, made by Unknown"
  

  

  output.innerHTML +=  `<p class="user-message">${userMessage0}</p>`;
  document.getElementById("user-el").value = "";

  if (user.includes(userMessage)) {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    const botOut = greetings[randomIndex];
    output.innerHTML +=  `<p class="bot-message">${botOut}</p>`;
  } else if (questions.includes(userMessage)) {
    const botOut = quser;
    output.innerHTML +=  `<p class="bot-message">${botOut}</p>`;
  } else {
    output.innerHTML +=  `<p class="bot-message">${"Sorry, I could not understand you!"}</p>`;
  }

}


