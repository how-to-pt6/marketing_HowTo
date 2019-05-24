const contactForm = document.querySelector('#contactForm');
const subButton = document.querySelector('#submitButton');
let messages = document.querySelectorAll('.row input, textarea');
console.log(messages);
subButton.addEventListener('click', (e) => {
  let name = document.querySelector('#name'),
      email = document.querySelector('#email'),
      message = document.querySelector('#message');

  if (name.value == '' || email.value == '' || message.value == '') {
    const error = alert('Please fill out all fields.');
    error;
  }
  else {
    // e.preventDefault();
    messages.forEach((input) => {
      input.value = '';
    })
    alert('Thank you. We will get back to you as soon as we can.');

  }
});