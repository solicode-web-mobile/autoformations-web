# Domaine Algorithmique (`domaine-algo`)

> **Ressource Didactique — Spartel N1**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Logique de programmation, variables, boucles, conditions, tableaux.

---

## 1. Règle d'or Absolue : Code Exécutable
Chaque bloc d'exemple doit pouvoir être copié-collé et exécuté immédiatement dans l'éditeur interactif sans aucune modification :
- Déclarer systématiquement toutes les variables avec `let` ou `const`.
- Inclure obligatoirement une instruction de sortie (`console.log(...)`).
- Le bloc doit être strictement autonome (zéro dépendance externe cachée).

---

## 2. Format du Livrable
- Le livrable est un **fichier `.js` pur** (aucun rendu Markdown ou document traitement de texte).
- Les explications ou raisonnements de l'apprenant sont écrits en commentaires de code (`//` ou `/* */`).
- Le fichier doit être commité sur le dépôt GitHub de l'apprenant.

---

## 3. Visualisation des Tableaux en Mémoire
Ne jamais dessiner de tableaux en texte brut ou en Mermaid. Utiliser obligatoirement le composant Liquid natif :

```liquid
{% include array-svg.html
   name="notes"
   title="Tableau de notes"
   values="12,15,8,17"
   highlight="1"
%}
```

---

## 4. Progression Didactique N1
Variables & types simples $\rightarrow$ Opérateurs & expressions booléennes $\rightarrow$ Conditions `if/else` $\rightarrow$ Boucles `for` et `while` $\rightarrow$ Tableaux indexés $\rightarrow$ Parcours et accumulateurs $\rightarrow$ Algorithmes de recherche et filtrage.
