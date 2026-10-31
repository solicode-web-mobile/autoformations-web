# Domaine JavaScript & DOM (`domaine-js`)

> **Ressource Didactique — Solicode**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Manipulation du DOM, écouteurs d'événements, interactions dynamiques.

---

## 1. Isolation de l'Espace de Travail
- Le HTML et le CSS de départ sont isolés dans `data_html` et `data_css`.
- Les fonctions utilitaires de démonstration sont encapsulées dans une balise `<script>` au sein de `data_html`.
- Le champ `data_js` est strictement réservé aux instructions rédigées par l'apprenant.

---

## 2. Progression Didactique N1
Sélection d'éléments (`document.querySelector`, `querySelectorAll`) → Écouteurs d'événements (`addEventListener('click', ...)`) → Modification du contenu et attributs (`textContent`, `setAttribute`) → Manipulation des classes CSS (`classList.add`, `remove`, `toggle`) → Rendu dynamique et conditions simples.

---

## 3. Débogage Interactif
Encourager systématiquement l'affichage dans la console (`console.log(element)`, `console.log(event)`) pour vérifier ce qui est capturé avant toute modification du DOM.
