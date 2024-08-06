document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    if (form.checkValidity() === false) {
        event.stopPropagation();
    } else {
        // Assuming successful login
        setTimeout(function() {
            window.location.href = 'home.html'; // Redirect to index page after successful login
        }, 500); // Simulate server processing delay
    }

    form.classList.add('was-validated');
});
