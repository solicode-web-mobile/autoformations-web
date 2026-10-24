---
name: domaine-js
description: >-
  Expert en règles de rédaction pour les tutoriels du domaine JavaScript et Interactivité Web (js).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié à JavaScript, à la manipulation du DOM, ou aux événements.
---

# Règles de rédaction - Domaine JavaScript (JS)

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels appartenant au domaine JavaScript pour l'interactivité web (domaine D.122.3).

## 1. Exécutabilité des Exemples et Éditeur Intégré

Notre plateforme web intègre un éditeur de code interactif. Les tutoriels JavaScript doivent permettre à l'apprenant d'observer immédiatement le résultat des interactions dans le navigateur.

* **Configuration de l'éditeur** : Chaque tutoriel manipulant le DOM doit obligatoirement inclure sous le front matter le script de configuration :

```html
<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>
```

* **HTML de départ fourni** : Lorsque le script JavaScript manipule des éléments (`button`, `input`, `div`), la structure HTML correspondante **doit être impérativement fournie** dans le champ `data_html` du front matter.
* **Ne jamais manipuler un élément inexistant** : Tout sélecteur (`document.getElementById` ou `document.querySelector`) doit cibler un élément explicitement présent dans `data_html`.

## 2. Bonnes Pratiques de Ciblage et Manipulation du DOM

* **Sélecteurs modernes** : Privilégier `document.querySelector()` et `document.querySelectorAll()` pour les classes et sélecteurs composés, ou `document.getElementById()` pour les identifiants uniques.
* **Classes plutôt que styles inline** : Pour modifier l'apparence visuelle d'un élément, encourager l'utilisation de `element.classList.add()`, `element.classList.remove()` ou `element.classList.toggle()` avec une classe CSS définie, plutôt que `element.style.propriete = "..."`.
* **Événements avec `addEventListener`** : Toujours utiliser `addEventListener('click', ...)` et proscrire les attributs HTML inline obsolètes (ex: pas de `onclick="..."` dans le HTML).
* **Interception de formulaires** : Lors de la validation de formulaires, montrer systématiquement l'utilisation de `event.preventDefault()` pour empêcher le rechargement de page indésirable.

## 3. Démarche Pédagogique JavaScript N1

La progression pédagogique doit suivre scrupuleusement les étapes :
1. **Sélectionner** : Trouver l'élément dans la page (`const bouton = document.querySelector(...)`).
2. **Écouter** : Attacher un écouteur d'événement (`bouton.addEventListener('click', ...)`).
3. **Agir** : Modifier le contenu (`textContent`), un attribut (`src`, `value`) ou une classe (`classList`).

Pour chaque bloc de code théorique ou pratique :
* Déclarer toutes les constantes et variables (`const`, `let`).
* Éviter le code asynchrone complexe (`async/await`, `fetch`) au niveau N1 sauf tutoriel dédié explicite.
* Fournir des messages de trace avec `console.log()` pour aider l'apprenant à vérifier l'exécution à chaque étape.

## 4. Livrables Attendus

* Pour les exercices intégrés dans la plateforme : code JavaScript complet à coller dans l'éditeur.
* Pour les tutoriels de synthèse ou projets : fichier `.js` externe propre relié à la page HTML via `<script src="..."></script>`.

## Procédure de vérification du rédacteur

Avant de finaliser un tutoriel JavaScript, vérifiez systématiquement :
> "Le code HTML nécessaire est-il bien renseigné dans `data_html` ?"
> "Le script de configuration `window.pageData` est-il présent ?"
> "Tous les sélecteurs ciblent-ils des balises existantes ?"
> "L'apprenant peut-il tester l'interaction et voir un résultat visuel ou dans la console sans blocage ?"
