---
name: domaine-algo
description: >-
  Expert en règles de rédaction pour les tutoriels du domaine Algorithmique (algo).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié à l'algorithmique ou au traitement logique.
---

# Règles de rédaction - Domaine Algorithmique (Algo)

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels appartenant au domaine de l'algorithmique (comme les tutoriels liés au domaine D.121.1).

## 1. Exemples Exécutables (Règle d'or absolue)

Notre plateforme web intègre un éditeur de code interactif. **Chaque bloc de code dans un tutoriel doit pouvoir être copié-collé et exécuté directement sans aucune modification.**

Pour cela, chaque exemple doit obligatoirement :

*   **Déclarer toutes ses variables** : ne jamais utiliser une variable sans la déclarer avec `let` ou `const` dans le même bloc.
*   **Inclure une instruction de sortie** : terminer le bloc par au moins un `console.log(...)` pour que l'apprenant voie un résultat dans la console.
*   **Être autonome** : le bloc ne doit pas dépendre d'un code d'une autre section ou d'une variable définie ailleurs.

**Exemple incorrect (non exécutable) :**
```javascript
if (age >= 18) {
    console.log("Accès autorisé"); // ❌ age n'est pas déclaré !
}
```

**Exemple correct (exécutable) :**
```javascript
let age = 20; // ✅ variable déclarée
if (age >= 18) {
    console.log("Accès autorisé"); // ✅ sortie console présente
}
```

## 2. Démarche Pédagogique Algorithmique

*   Privilégiez l'explication de la logique pas-à-pas.
*   Décomposez toujours un problème en sous-problèmes.
*   Dans les exercices de la partie Pratique, incluez systématiquement des jeux d'essai pour inciter l'apprenant à tester plusieurs cas de figure (dont les cas limites).

## 3. Livrables Attendus (Format .js)

**Tous les livrables demandés à l'apprenant dans un tutoriel d'algorithmique doivent impérativement être des fichiers `.js`.**
Ne demandez jamais à l'apprenant de rendre un document Markdown, un fichier texte ou un Google Doc. Le livrable doit être le code source lui-même, prêt à être exécuté. S'il y a des explications ou des réponses textuelles à fournir, l'apprenant doit les écrire en commentaires (`//` ou `/* */`) directement dans son fichier `.js`.

## 4. Visualisation des Tableaux

Pour illustrer le fonctionnement d'un tableau (ses index et ses valeurs), **ne dessinez jamais de schémas manuels en texte ASCII ou en Mermaid**. Utilisez toujours le composant réutilisable Liquid spécialement prévu à cet effet pour une UI/UX optimale :

```liquid
{% include array-svg.html
   name="notes"
   title="Tableau de notes"
   values="12,15,8,17"
   highlight="1"
%}
```

**Paramètres du composant `array-svg.html` :**
* `values` *(Obligatoire)* : Les valeurs du tableau séparées par des virgules. La largeur du schéma s'ajuste automatiquement au nombre d'éléments.
* `name` *(Optionnel)* : Le nom de la variable (s'affiche entre parenthèses).
* `title` *(Optionnel)* : Un titre explicatif affiché au-dessus du composant.
* `highlight` *(Optionnel)* : L'index (commençant par 0) de la case à mettre en surbrillance visuelle.

## Procédure de vérification du rédacteur

Avant de finaliser un tutoriel d'algorithmique, vous devez toujours vous poser cette question pour chaque bloc de code :
> "Si l'apprenant copie-colle ce bloc tel quel dans l'éditeur du site et l'exécute, le code va-t-il tourner sans erreur et afficher un résultat dans la console ?"

Si ce n'est pas le cas, modifiez le code pour le rendre exécutable.
