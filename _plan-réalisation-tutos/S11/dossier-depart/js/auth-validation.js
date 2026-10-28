// js/auth-validation.js : Contrôle des saisies côté navigateur (UA.122.34)
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form[action="login.php"]');
    if (!loginForm) return;

    loginForm.addEventListener('submit', function (e) {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        if (!emailInput || !passwordInput) return;

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === '' || password === '') {
            e.preventDefault();
            alert('Veuillez remplir tous les champs avant de vous connecter.');
            return;
        }

        if (!email.includes('@')) {
            e.preventDefault();
            alert('Veuillez saisir une adresse email valide.');
            emailInput.focus();
        }
    });
});
