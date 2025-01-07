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
    fetch('/get', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ msg: userInput })
    })
    .then(response => response.json())
    .then(data => {
        var messages = document.getElementById('messages');
        messages.innerHTML += `<div>${data}</div>`;
        document.getElementById('userInput').value = '';
    });
}