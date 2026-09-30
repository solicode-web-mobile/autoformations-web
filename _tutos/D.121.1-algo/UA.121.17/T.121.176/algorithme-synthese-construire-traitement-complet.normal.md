---
title: "Algorithme de synthèse : construire un traitement complet"
layout: tuto
slug: "algorithme-synthese-construire-traitement-complet"
permalink: /tutos/:slug/
tuto_id: "T.121.176"
type: "algorithme"
version: "normal"
ua: "UA.121.17"
nav_order: 6
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans les tutoriels précédents, vous avez appris à :

* décomposer un problème ;
* identifier les responsabilités ;
* définir les entrées et les sorties ;
* construire des sous-traitements ;
* tester chaque traitement ;
* identifier les dépendances ;
* organiser les traitements ;
* chaîner les résultats.

Dans ce tutoriel, vous allez utiliser toutes ces compétences pour construire un **traitement complet**.

Vous allez partir d'un problème global et construire progressivement :

```text id="8r4m1c"
Problème global
↓
Décomposition
↓
Sous-traitements
↓
Entrées / sorties
↓
Dépendances
↓
Chaînage
↓
Traitement complet
↓
Tests
↓
Vérification
```

L'objectif n'est pas de découvrir une nouvelle notion.

L'objectif est de **construire une solution complète à partir des traitements déjà appris**.

## 2. Prérequis

Vous devez savoir :

* manipuler des variables ;
* utiliser des conditions ;
* utiliser des boucles ;
* utiliser des tableaux ;
* créer des fonctions ;
* utiliser des paramètres ;
* retourner une valeur avec `return` ;
* calculer une somme ;
* calculer une moyenne ;
* trouver un maximum ;
* trouver un minimum ;
* compter selon une règle ;
* trier une collection ;
* décomposer un problème ;
* définir les entrées et sorties ;
* construire un sous-traitement ;
* identifier une dépendance ;
* chaîner plusieurs traitements.

Vous devez avoir terminé les tutoriels :

```text id="7k4m2p"
T.121.171 — Comprendre la décomposition d'un problème
T.121.172 — Définir les entrées et sorties des traitements
T.121.173 — Construire les sous-traitements
T.121.174 — Exercices de décomposition
T.121.175 — Construire et chaîner plusieurs traitements
```

## Données de départ

Madani Ali doit analyser les résultats d'un groupe.

Les notes sont :

```javascript id="u6q3m9"
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Le programme doit produire :

```text id="z8v2r5"
Nombre de notes
Somme
Moyenne
Maximum
Minimum
Nombre de notes validées
Moyenne des notes validées
Appréciation
```

Une note est validée lorsque :

```text id="e3p7w1"
note >= 10
```

Les règles d'appréciation sont :

```text id="m4c9x2"
moyenne >= 16 → Très bien
moyenne >= 10 → Validé
moyenne < 10 → Non validé
```

## Partie 1 — Théorie

### 1.1. Comprendre le problème global

Le problème global est :

```text id="y7k3q4"
Analyser les résultats d'un groupe.
```

Ce problème contient plusieurs traitements.

Il ne faut pas commencer directement par écrire un grand programme.

La première étape consiste à le décomposer.

### 1.2. Décomposer le problème

On peut identifier :

```text id="p3v8n6"
Analyser les résultats
│
├── compter les notes
├── calculer la somme
├── calculer la moyenne
├── trouver le maximum
├── trouver le minimum
├── compter les notes validées
├── calculer la moyenne validée
└── déterminer l'appréciation
```

Chaque élément possède une responsabilité différente.

### 1.3. Définir les traitements

On peut associer les responsabilités à des fonctions :

```text id="g2m7x9"
compterNotes()
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
calculerMoyenneValidees()
determinerAppreciation()
```

Le programme sera donc construit à partir de plusieurs traitements simples.

### 1.4. Définir les entrées et sorties

On peut décrire les traitements ainsi :

| Traitement                  | Entrée  | Sortie          |
| --------------------------- | ------- | --------------- |
| `compterNotes()`            | notes   | nombre          |
| `calculerSomme()`           | notes   | somme           |
| `calculerMoyenne()`         | notes   | moyenne         |
| `trouverMaximum()`          | notes   | maximum         |
| `trouverMinimum()`          | notes   | minimum         |
| `compterValidees()`         | notes   | nombre validé   |
| `calculerMoyenneValidees()` | notes   | moyenne validée |
| `determinerAppreciation()`  | moyenne | appréciation    |

Cette description permet de vérifier les responsabilités avant le code.

### 1.5. Identifier les traitements indépendants

Plusieurs traitements utilisent directement :

```text id="p8n4v2"
notes
```

Par exemple :

```text id="a5m7q1"
notes
├──→ compterNotes()
├──→ calculerSomme()
├──→ calculerMoyenne()
├──→ trouverMaximum()
├──→ trouverMinimum()
└──→ compterValidees()
```

Ces traitements n'ont pas besoin d'attendre le résultat d'un autre traitement.

### 1.6. Identifier les traitements dépendants

Certains traitements dépendent d'un résultat précédent.

La moyenne permet de déterminer l'appréciation :

```text id="c7r2m9"
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
↓
appréciation
```

La moyenne des notes validées utilise quant à elle les notes validées.

On peut la décrire comme :

```text id="x9k3v5"
notes
↓
identifier les notes validées
↓
calculer la moyenne des notes validées
```

### 1.7. Organiser le traitement

Le programme peut être organisé en plusieurs étapes.

```text id="m6q8z1"
1. Définir les fonctions.
2. Définir les données.
3. Calculer les résultats indépendants.
4. Calculer les résultats dépendants.
5. Afficher le résultat final.
```

Cette organisation rend le programme plus clair.

### 1.8. Construire `compterNotes()`

Ce traitement doit répondre à une seule question :

> Combien de notes contient le tableau ?

Entrée :

```text id="v3x7k2"
notes
```

Sortie :

```text id="n8p4q5"
nombre de notes
```

On peut construire :

```javascript id="h5r2m8"
function compterNotes(notes) {
    return notes.length;
}
```

Test :

```javascript id="c9v6n3"
console.log(compterNotes([12, 8, 15, 9]));
```

Résultat :

```text id="a2m7q4"
4
```

### 1.9. Construire `calculerSomme()`

Responsabilité :

```text id="r8x5p1"
additionner les notes
```

```javascript id="n4q6m2"
function calculerSomme(notes) {
    let somme = 0;

    for (let i = 0; i < notes.length; i++) {
        somme = somme + notes[i];
    }

    return somme;
}
```

Test :

```javascript id="z7c3v9"
console.log(calculerSomme([12, 8, 15]));
```

Résultat :

```text id="p6m4x8"
35
```

### 1.10. Construire `calculerMoyenne()`

La moyenne peut réutiliser la somme :

```javascript id="f8r2k6"
function calculerMoyenne(notes) {
    let somme = calculerSomme(notes);

    return somme / notes.length;
}
```

La relation est :

```text id="w5n7c3"
notes
↓
calculerSomme()
↓
somme
↓
calculerMoyenne()
↓
moyenne
```

Ce traitement montre qu'un sous-traitement peut réutiliser un autre traitement déjà construit.

### 1.11. Construire `trouverMaximum()`

```javascript id="q4m8z2"
function trouverMaximum(notes) {
    let maximum = notes[0];

    for (let i = 1; i < notes.length; i++) {
        if (notes[i] > maximum) {
            maximum = notes[i];
        }
    }

    return maximum;
}
```

Responsabilité :

```text id="x7c5p9"
trouver la plus grande note
```

### 1.12. Construire `trouverMinimum()`

```javascript id="m3v8q1"
function trouverMinimum(notes) {
    let minimum = notes[0];

    for (let i = 1; i < notes.length; i++) {
        if (notes[i] < minimum) {
            minimum = notes[i];
        }
    }

    return minimum;
}
```

Responsabilité :

```text id="k6r4n2"
trouver la plus petite note
```

### 1.13. Construire `compterValidees()`

La règle est :

```text id="p9x3m7"
note >= 10
```

La fonction devient :

```javascript id="v2q8k5"
function compterValidees(notes) {
    let compteur = 0;

    for (let i = 0; i < notes.length; i++) {
        if (notes[i] >= 10) {
            compteur++;
        }
    }

    return compteur;
}
```

### 1.14. Construire `calculerMoyenneValidees()`

Ce traitement doit calculer la moyenne uniquement des notes validées.

On a besoin de :

```text id="c5m9x4"
somme des notes validées
+
nombre de notes validées
```

On peut construire :

```javascript id="s8q2m6"
function calculerMoyenneValidees(notes) {
    let somme = 0;
    let compteur = 0;

    for (let i = 0; i < notes.length; i++) {
        if (notes[i] >= 10) {
            somme = somme + notes[i];
            compteur++;
        }
    }

    if (compteur === 0) {
        return null;
    }

    return somme / compteur;
}
```

Pourquoi vérifier `compteur === 0` ?

Parce qu'il est impossible de calculer :

```text
somme / 0
```

La fonction retourne donc :

```text id="f7n3w5"
null
```

lorsqu'aucune note n'est validée.

### 1.15. Construire `determinerAppreciation()`

La fonction reçoit la moyenne.

```javascript id="r1m6z8"
function determinerAppreciation(moyenne) {
    if (moyenne >= 16) {
        return "Très bien";
    }

    if (moyenne >= 10) {
        return "Validé";
    }

    return "Non validé";
}
```

Son entrée est :

```text id="p5c9x2"
moyenne
```

et sa sortie :

```text id="q8v4m7"
appréciation
```

### 1.16. Construire le graphe des dépendances

Le traitement peut maintenant être représenté ainsi :

```text id="z3m7q5"
notes
│
├──→ compterNotes()
│
├──→ calculerSomme()
│
├──→ calculerMoyenne()
│       │
│       ↓
│   moyenne
│       │
│       └──→ determinerAppreciation()
│
├──→ trouverMaximum()
│
├──→ trouverMinimum()
│
├──→ compterValidees()
│
└──→ calculerMoyenneValidees()
```

Les traitements principaux utilisent `notes`.

La seule dépendance directe entre deux résultats ici est :

```text id="k5r8v1"
moyenne
↓
determinerAppreciation()
```

### 1.17. Construire le traitement principal

Une fois les fonctions testées, on peut les utiliser ensemble.

```javascript id="y6q2m9"
let notes = [12, 8, 15, 9, 17, 6, 14, 10];

let nombre = compterNotes(notes);
let somme = calculerSomme(notes);
let moyenne = calculerMoyenne(notes);
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
let validees = compterValidees(notes);
let moyenneValidee = calculerMoyenneValidees(notes);
let appreciation = determinerAppreciation(moyenne);
```

On obtient alors les résultats nécessaires.

### 1.18. Afficher le résultat final

```javascript id="c7m4x8"
console.log("Nombre de notes :", nombre);
console.log("Somme :", somme);
console.log("Moyenne :", moyenne);
console.log("Maximum :", maximum);
console.log("Minimum :", minimum);
console.log("Notes validées :", validees);

if (moyenneValidee === null) {
    console.log("Moyenne validée : aucune note validée");
} else {
    console.log("Moyenne validée :", moyenneValidee);
}

console.log("Appréciation :", appreciation);
```

Le programme assemble maintenant les différents sous-traitements.

### 1.19. Tester chaque traitement

Avant de considérer le programme complet comme correct, vérifiez les sous-traitements.

```text id="x2q6m8"
compterNotes()
✓

calculerSomme()
✓

calculerMoyenne()
✓

trouverMaximum()
✓

trouverMinimum()
✓

compterValidees()
✓

calculerMoyenneValidees()
✓

determinerAppreciation()
✓
```

Puis testez leur combinaison.

### 1.20. Vérifier le résultat global

Pour :

```javascript id="w8m3r5"
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

les résultats sont :

```text id="q6v2x9"
Nombre de notes : 8
Somme : 91
Moyenne : 11.375
Maximum : 17
Minimum : 6
Notes validées : 5
Moyenne validée : 13.6
Appréciation : Validé
```

Le résultat final doit respecter toutes les règles du problème.

### 1.21. Tester un cas sans note validée

Utilisez :

```javascript id="v4m8q2"
let notes = [5, 7, 8, 6];
```

Il n'y a aucune note validée.

On obtient :

```text id="h9x3p6"
Nombre de notes : 4
Somme : 26
Moyenne : 6.5
Maximum : 8
Minimum : 5
Notes validées : 0
Moyenne validée : aucune note validée
Appréciation : Non validé
```

Ce test est important car il vérifie une situation particulière.

### 1.22. Tester un groupe entièrement validé

Utilisez :

```javascript id="p7c4m1"
let notes = [10, 12, 14, 16];
```

Toutes les notes sont validées.

On obtient :

```text id="a5n8q3"
Nombre de notes : 4
Somme : 52
Moyenne : 13
Maximum : 16
Minimum : 10
Notes validées : 4
Moyenne validée : 13
Appréciation : Validé
```

La moyenne générale et la moyenne validée sont identiques dans ce cas.

### 1.23. À retenir

Un traitement complet peut être construit progressivement :

```text id="b8q3m7"
Problème
↓
Décomposition
↓
Responsabilités
↓
Sous-traitements
↓
Tests individuels
↓
Dépendances
↓
Chaînage
↓
Test global
```

La difficulté ne consiste pas à écrire une seule grande fonction.

Elle consiste à **organiser plusieurs traitements simples** pour produire une solution complète.

## Partie 2 — Pratique

### 2.1. Décomposer le problème

Avant d'écrire le code, complétez :

```text id="j4v7p2"
Problème global :
________________________________________
```

Puis :

```text id="r8m2x6"
Sous-traitement 1 :
________________________________________

Sous-traitement 2 :
________________________________________

Sous-traitement 3 :
________________________________________

Sous-traitement 4 :
________________________________________

Sous-traitement 5 :
________________________________________

Sous-traitement 6 :
________________________________________

Sous-traitement 7 :
________________________________________

Sous-traitement 8 :
________________________________________
```

### 2.2. Définir les entrées et sorties

Complétez :

| Traitement                  | Entrée | Sortie |
| --------------------------- | ------ | ------ |
| `compterNotes()`            |        |        |
| `calculerSomme()`           |        |        |
| `calculerMoyenne()`         |        |        |
| `trouverMaximum()`          |        |        |
| `trouverMinimum()`          |        |        |
| `compterValidees()`         |        |        |
| `calculerMoyenneValidees()` |        |        |
| `determinerAppreciation()`  |        |        |

### 2.3. Construire les fonctions

Construisez chaque fonction séparément.

Commencez par :

```text id="f7n3q9"
compterNotes()
```

puis :

```text id="k5m8v2"
calculerSomme()
```

puis :

```text id="p2r6x4"
calculerMoyenne()
```

et continuez avec les autres traitements.

Après chaque fonction, réalisez au moins un test.

### 2.4. Construire le schéma de dépendance

Représentez votre solution :

```text id="q8v3m6"
notes
│
├──→ ____________________
├──→ ____________________
├──→ ____________________
├──→ ____________________
├──→ ____________________
│
└──→ ____________________
       ↓
     moyenne
       ↓
  ____________________
```

Ajoutez les autres traitements nécessaires.

### 2.5. Construire le traitement principal

Utilisez :

```javascript id="c6m9x1"
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Construisez les appels aux traitements.

Le traitement principal doit uniquement :

* fournir les données ;
* appeler les traitements ;
* stocker les résultats ;
* afficher les résultats.

Évitez de recopier les algorithmes à l'intérieur du traitement principal.

### 2.6. Tester le traitement principal

Vérifiez :

```text id="s5q8m2"
Nombre de notes
Somme
Moyenne
Maximum
Minimum
Notes validées
Moyenne validée
Appréciation
```

Comparez chaque résultat avec le résultat attendu.

### 2.7. Tester avec un deuxième tableau

Utilisez :

```javascript id="x7m4p9"
let notes = [10, 11, 12, 13, 14];
```

Résultat attendu :

```text id="d3q8v5"
Nombre de notes : 5
Somme : 60
Moyenne : 12
Maximum : 14
Minimum : 10
Notes validées : 5
Moyenne validée : 12
Appréciation : Validé
```

### 2.8. Tester avec un troisième tableau

Utilisez :

```javascript id="n2r6w8"
let notes = [5, 7, 9, 6];
```

Résultat attendu :

```text id="v4c8m1"
Nombre de notes : 4
Somme : 27
Moyenne : 6.75
Maximum : 9
Minimum : 5
Notes validées : 0
Moyenne validée : aucune note validée
Appréciation : Non validé
```

### 2.9. Tester avec un seul élément

Utilisez :

```javascript id="p8x3q6"
let notes = [12];
```

Vérifiez :

```text id="q5m1v7"
Nombre de notes : 1
Somme : 12
Moyenne : 12
Maximum : 12
Minimum : 12
Notes validées : 1
Moyenne validée : 12
Appréciation : Validé
```

### 2.10. Vérifier chaque responsabilité

Après les tests, vérifiez :

```text id="w6r2n8"
compterNotes()
→ compte uniquement les notes.

calculerSomme()
→ calcule uniquement la somme.

calculerMoyenne()
→ calcule uniquement la moyenne.

trouverMaximum()
→ cherche uniquement le maximum.

trouverMinimum()
→ cherche uniquement le minimum.

compterValidees()
→ compte uniquement les notes validées.

calculerMoyenneValidees()
→ calcule uniquement la moyenne des notes validées.

determinerAppreciation()
→ produit uniquement l'appréciation à partir de la moyenne.
```

### 2.11. Exercice de vérification des dépendances

Complétez :

```text id="x9m4c7"
calculerMoyenne()
        ↓
     moyenne
        ↓
________________________
```

Puis :

```text id="v2q8n5"
notes
        ↓
________________________
        ↓
notes validées
        ↓
________________________
```

Expliquez pourquoi chaque traitement doit recevoir les bonnes données.

### 2.12. Exercice de correction

On vous donne cette organisation incorrecte :

```javascript id="m5r8q2"
let appreciation = determinerAppreciation(notes);
let moyenne = calculerMoyenne(appreciation);
```

Identifiez :

```text id="n7x3p6"
Ce qui est incorrect :
________________________

Pourquoi :
________________________

Règle respectée :
________________________
```

La relation correcte est :

```text id="k2v9m4"
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
↓
appréciation
```

Corrigez le traitement.

### 2.13. Exercice final autonome

Construisez seul un programme complet pour :

```javascript id="q4m8x1"
let notes = [14, 9, 12, 16, 7, 11];
```

Le programme doit produire :

```text id="r7c3v9"
Nombre de notes
Somme
Moyenne
Maximum
Minimum
Notes validées
Moyenne validée
Appréciation
```

Vous devez suivre toute la démarche :

```text id="z5n2m8"
1. Décomposer.
2. Définir les responsabilités.
3. Définir les entrées et sorties.
4. Construire les fonctions.
5. Tester les fonctions.
6. Identifier les dépendances.
7. Organiser les appels.
8. Tester le traitement complet.
9. Vérifier les résultats.
```

Ne construisez pas une seule grande fonction.

Utilisez les sous-traitements.

### 2.14. Vérification finale

Pour :

```javascript id="u3p7q5"
let notes = [14, 9, 12, 16, 7, 11];
```

vous devez obtenir :

```text id="g8m2v6"
Nombre de notes : 6
Somme : 69
Moyenne : 11.5
Maximum : 16
Minimum : 7
Notes validées : 4
Moyenne validée : 13.25
Appréciation : Validé
```

Vérifiez chaque valeur avant de considérer la solution comme terminée.

**Travail à faire :**

Construire un traitement complet à partir d'un problème global en utilisant la décomposition, les sous-traitements, les dépendances et le chaînage.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* l'analyse du problème ;
* la décomposition ;
* la liste des sous-traitements ;
* les responsabilités ;
* les entrées et sorties ;
* le schéma des dépendances ;
* le code des fonctions ;
* les tests individuels ;
* le traitement principal ;
* les tests globaux ;
* la vérification finale.

**Résultat attendu :**

Pour :

```javascript id="m9x4c2"
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

le programme doit produire :

```text id="s4q7v1"
Nombre de notes : 8
Somme : 91
Moyenne : 11.375
Maximum : 17
Minimum : 6
Notes validées : 5
Moyenne validée : 13.6
Appréciation : Validé
```

Pour :

```javascript id="r5n8w3"
let notes = [5, 7, 9, 6];
```

il doit gérer le cas sans note validée :

```text id="c7m2x9"
Moyenne validée : aucune note validée
```

**Critère de réussite :**

La solution est réussie lorsque :

* le problème global est correctement décomposé ;
* chaque sous-traitement possède une responsabilité claire ;
* les entrées et sorties sont correctes ;
* les traitements sont testés séparément ;
* les dépendances sont correctement identifiées ;
* les résultats sont utilisés dans le bon ordre ;
* le traitement complet produit les résultats attendus ;
* le cas sans note validée est correctement traité ;
* les fonctions restent simples et réutilisables ;
* aucune architecture avancée n'est introduite.

## Bilan

Vous avez réalisé la synthèse de l'UA.121.17.

Vous savez maintenant construire une solution complète selon la démarche :

```text id="f8q3m6"
Comprendre
↓
Décomposer
↓
Définir les responsabilités
↓
Définir les entrées et sorties
↓
Construire les sous-traitements
↓
Tester individuellement
↓
Identifier les dépendances
↓
Chaîner
↓
Tester globalement
↓
Vérifier
```

Vous êtes passé de :

```text id="v2m7p9"
Je sais construire un traitement.
```

à :

```text id="c5x8r3"
Je sais organiser plusieurs traitements pour construire une solution complète.
```

Vous savez également distinguer :

```text id="n4q6w1"
Décomposition
→ quelles tâches faut-il réaliser ?
```

de :

```text id="s8m3v7"
Chaînage
→ comment les résultats circulent-ils entre les traitements ?
```

La compétence finale du socle N1 est donc :

> **Construire un traitement logique complet à partir d'un problème simple, en décomposant le problème, en réutilisant des traitements connus et en organisant leurs dépendances.**

## Glossaire

* **Traitement complet** : solution obtenue par la combinaison de plusieurs sous-traitements.
* **Sous-traitement** : traitement responsable d'une partie précise du problème.
* **Décomposition** : division du problème global en plusieurs sous-problèmes.
* **Dépendance** : relation dans laquelle un traitement utilise le résultat d'un autre.
* **Chaînage** : passage du résultat d'un traitement vers un autre traitement.
* **Traitement principal** : partie du programme qui organise les appels aux différents traitements.
* **Test individuel** : test réalisé sur une fonction avant son utilisation dans le traitement complet.
* **Test global** : test de l'ensemble des traitements combinés.
