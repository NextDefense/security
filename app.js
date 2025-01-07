const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//  ---- chatbot ----
function openChat() {
  document.getElementById('chatPopup').style.display = 'block';
}

function sendMessage() {
  var userInput = document.getElementById('userInput').value;
  var messages = document.getElementById('messages');
  messages.innerHTML += `<div>You: ${userInput}</div>`;
  var botResponse = getBotResponse(userInput);
  messages.innerHTML += `<div>Bot: ${botResponse}</div>`;
  document.getElementById('userInput').value = '';
}

function getBotResponse(input) {
  // Simple chatbot logic
  if (input.toLowerCase().includes("request")) {
      return "Go to https://therman5.github.io/NextDefense/products.html then fill out the form\n, a team member will be with you shortly.";
  } else if (input.toLowerCase().includes("cost"|"prices")) {
      return "Our prices start at $3,000 for the basic test and go up to $4,000 for the Premium test.";
  } else if (input.toLowerCase().includes("contact")) {
      return "You can send us an email at nextdefense24@gmail.com and someone will be in contact with you shortly.";
  }
  else {
    return "I'm sorry I don't know how to best answer that.";
  }
}
// --- end chatbot ----