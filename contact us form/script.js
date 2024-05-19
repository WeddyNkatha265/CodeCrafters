// script.js
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;

//     // Perform simple form validation
//     if (name && email && phone && subject && message) {
//         // Display a success message
//         document.getElementById('statusMessage').textContent = 'Thank you for contacting us!';
//         document.getElementById('statusMessage').style.color = 'green';

//         // Here you can add the code to send the form data to the server
//         // For example, using fetch or XMLHttpRequest
//     } else {
//         document.getElementById('statusMessage').textContent = 'Please fill in all fields.';
//     }
// });



document.getElementById("contactForm").onsubmit = function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !phone || !subject || !message) {
        document.getElementById("statusMessage").innerText = "Please fill out all fields.";
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("statusMessage").innerText = "Please enter a valid email address.";
        return false;
    }

    document.getElementById("statusMessage").innerText = "Form submitted successfully!";
    return true;
};


