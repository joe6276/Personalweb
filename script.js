const sendBtn = document.getElementById('send-btn'),
      resetBtn = document.getElementById('reset-btn'),
      sendEmailForm = document.getElementById('contact-form');

      eventListeners();

function eventListeners() {
     document.addEventListener('DOMContentLoaded', appInit);
    sendEmailForm.addEventListener('submit', sendEmail);
     resetBtn.addEventListener('click', resetForm);
}

function sendEmail(e) {
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'Images/mail.gif';
    sendEmailImg.style.display = 'block';
    setTimeout(function() {
         
         spinner.style.display = 'none';
         document.querySelector('#loaders').appendChild( sendEmailImg );
         setTimeout(function() {
              sendEmailForm.reset();
              sendEmailImg.remove();
         }, 5000);
    }, 3000 );
}

function resetForm(e) {
    e.preventDefault();
   sendEmailForm.reset();
}
