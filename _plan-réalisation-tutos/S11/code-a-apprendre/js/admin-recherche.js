// js/admin-recherche.js : Filtrage dynamique en direct dans le DOM (UA.122.35 & UA.122.36)
document.addEventListener('DOMContentLoaded', function () {
    const inputRecherche = document.getElementById('champ-recherche');
    const tableArticles = document.getElementById('table-articles');

    if (!inputRecherche || !tableArticles) return;

    // UA.122.35 - Modifier dynamiquement l'interface sans rechargement
    // UA.122.36 - Combiner les interactions JavaScript (événement input + modification style display)
    inputRecherche.addEventListener('input', function () {
        const filtre = inputRecherche.value.toLowerCase().trim();
        const lignes = tableArticles.querySelectorAll('tbody tr.ligne-article');
        let visibles = 0;

        lignes.forEach(function (ligne) {
            const titreElement = ligne.querySelector('.colonne-titre');
            const titreTexte = titreElement ? titreElement.textContent.toLowerCase() : '';

            if (titreTexte.includes(filtre)) {
                ligne.style.display = '';
                visibles++;
            } else {
                ligne.style.display = 'none';
            }
        });

        // Afficher un message si aucune ligne ne correspond
        let ligneAucun = document.getElementById('ligne-aucun-js');
        if (visibles === 0) {
            if (!ligneAucun) {
                ligneAucun = document.createElement('tr');
                ligneAucun.id = 'ligne-aucun-js';
                ligneAucun.innerHTML = '<td colspan="4" style="text-align:center; color: #6b7280; padding: 15px;">Aucun article ne correspond à votre saisie.</td>';
                tableArticles.querySelector('tbody').appendChild(ligneAucun);
            }
            ligneAucun.style.display = '';
        } else if (ligneAucun) {
            ligneAucun.style.display = 'none';
        }
    });
});
