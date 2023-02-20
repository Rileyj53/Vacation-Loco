const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
// let phone = document.getElementById('phone');
let radio = document.getElementById('radio');
let people = document.getElementById('people');
let days = document.getElementById('days');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(radio.value)
    console.log(people.value)
    console.log(days.value)
    // change the css for the class success-message from display: none to display: block
    document.querySelector('.success-message').style.display = 'block';
    document.querySelector('.contact-form').style.display = 'none';
    document.getElementById('success1').innerHTML = `Thank you ${name.value} for your inquiry about a trip to ${radio.value} for ${people.value} people and ${days.value} nights.`;
    document.getElementById('success2').innerHTML = `We will be in touch with you shortly at ${email.value} with more information about your trip.`;

});