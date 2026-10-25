# Domaine Algorithmique (`domaine-algo`)

> **Ressource Didactique — Spartel N1**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Logique de programmation, variables, boucles, conditions, tableaux, fonctions.

---

## 1. Règle d'or Absolue : Code Exécutable
Chaque bloc d'exemple doit pouvoir être copié-collé et exécuté immédiatement dans l'éditeur interactif sans aucune modification :
- Déclarer systématiquement toutes les variables avec `let` ou `const`.
- Inclure obligatoirement une instruction de sortie (`console.log(...)`).
- Le bloc doit être strictement autonome (zéro dépendance externe cachée).

---

## 2. Format du Code Livrable
- Le livrable est un **fichier `.js` pur** (aucun rendu Markdown ou document traitement de texte).
- Les explications ou raisonnements de l'apprenant sont rédigés en commentaires de code (`//` ou `/* */`).
- *(Note : La gouvernance de l'arborescence et du dépôt unique des livrables relève exclusivement du skill `tutorial-writer`)*.

---

## 3. Schémas Visuels & Diagrammes Algorithmiques (Mermaid)
Pour rendre les notions algorithmiques concrètes (*« Je vois → Je comprends »*), **utiliser des diagrammes Mermaid (`flowchart TD` ou `flowchart LR`)** dans les explications théoriques :
- **Flux d'exécution séquentiel :** Montrer l'ordre d'évaluation des instructions.
- **Cycle d'une fonction :** Distinguer visuellement la déclaration (mise en mémoire) et l'appel (déclenchement).
- **Conditions & Boucles :** Utiliser les losanges de décision `{Condition ?}` avec branches claires `Oui / Non`.
- **Clarté N1 :** Garder des nœuds courts, sans syntaxe complexe, avec des textes explicites.

---

## 4. Visualisation Spécifique des Tableaux en Mémoire
Pour représenter le **contenu en mémoire d'un tableau indexé**, ne jamais dessiner de tableau en texte brut ni en Mermaid. Utiliser obligatoirement le composant Liquid natif :

```liquid
{% include array-svg.html
   name="notes"
   title="Tableau de notes"
   values="12,15,8,17"
   highlight="1"
%}
```

---

## 5. Progression Didactique N1
Variables & types simples → Opérateurs & expressions booléennes → Conditions `if/else` → Boucles `for` et `while` → Tableaux indexés → Parcours et accumulateurs → Algorithmes de recherche et filtrage → Fonctions (déclaration, appel, réutilisation, paramètres, retour).
