// js/admin.js : Script client pour l'espace d'administration
console.log('Script Admin chargé.');

// UA.122.32 - Sélectionner et manipuler le DOM
// Exemple : Confirmation avant suppression d'une catégorie
document.addEventListener('DOMContentLoaded', function () {
    const liensSuppression = document.querySelectorAll('a[href*="supprimer="]');
    liensSuppression.forEach(function (lien) {
        lien.addEventListener('click', function (e) {
            const confirmation = confirm("Voulez-vous vraiment supprimer cet élément ?");
            if (!confirmation) {
                e.preventDefault();
            }
        });
    });
});
