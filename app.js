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

function closeChat() {
  document.getElementById("chatPopup").style.display = "none";
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

  if (input.toLowerCase().includes("request")) {
      return "Visit our Products page to request more information and\n, a team member will be with you shortly.";
  } else if (input.toLowerCase().includes("cost")) {
      return "Our prices start at $3,000 for the basic test and go up to $4,000 for the Premium test.";
  } else if (input.toLowerCase().includes("contact")) {
      return "You can send us an email at nextdefense24@gmail.com and someone will be in contact with you shortly.";
  } else if (input.toLowerCase().includes("prices")) {
    return "Our prices start at $3,000 for the basic test and go up to $4,000 for the Premium test.";
  } else if (input.toLowerCase().includes("small")) {
    return "If your business is small we suggest the Basic test\n, although more advanced testing levels may be needed.";
  } else if (input.toLowerCase().includes("medium")) {
    return "If your business is small to medium we suggest the Advanced test\n, although you may need the Preimum option of testing.";
  } else if (input.toLowerCase().includes("included")) {
    return "We will run in depth tests on your systems scanning for malware\n, suspious code, and even sql injections. You then get a detailed report of all findings.";
  } else if (input.toLowerCase().includes("includes")) {
    return "We will run in depth tests on your systems scanning for malware\n, suspious code, and even sql injections. You then get a detailed report of all findings.";
  } else if (input.toLowerCase().includes("include")) {
    return "We will run in depth tests on your systems scanning for malware\n, suspious code, and even sql injections. You then get a detailed report of all findings.";
  } else {
    return "I'm sorry I don't know how to best answer that.";
  }
}
// --- end chatbot ----
