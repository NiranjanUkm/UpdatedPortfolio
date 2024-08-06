document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    if (form.checkValidity() === false) {
        event.stopPropagation();
    } else {
        // Assuming successful signup
        setTimeout(function() {
            window.location.href = 'login.html'; // Redirect to login page after successful signup
        }, 500); // Simulate server processing delay
    }

    form.classList.add('was-validated');
});
