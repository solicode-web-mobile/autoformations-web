---
title: "Combiner plusieurs fonctions"
layout: tuto
slug: "combiner-plusieurs-fonctions"
permalink: /tutos/:slug/
tuto_id: "T.121.146"
type: "algorithme"
version: "normal"
ua: "UA.121.14"
nav_order: 6
data_js: ""
---

## 1. Objectif

Dans les tutoriels précédents, vous avez appris à :

* créer une fonction ;
* utiliser des paramètres ;
* retourner un résultat ;
* transformer un algorithme en fonction ;
* réutiliser une fonction.

Dans ce tutoriel, vous allez apprendre à **combiner plusieurs fonctions pour résoudre un même problème**.

Vous allez construire un traitement complet à partir de fonctions déjà connues :

```text id="qg7w1k"
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
compterValidees()
```

La progression est :

```text id="f4r9tc"
Fonctions séparées
       ↓
Identifier le rôle de chaque fonction
       ↓
Appeler les fonctions
       ↓
Utiliser les résultats
       ↓
Organiser le traitement
       ↓
Résultat complet
```

## 2. Prérequis

Vous devez savoir :

* créer une fonction ;
* utiliser des paramètres ;
* utiliser `return` ;
* parcourir un tableau ;
* calculer une somme ;
* calculer une moyenne ;
* rechercher une valeur ;
* trouver un maximum ;
* trouver un minimum ;
* compter des valeurs selon une condition.

Vous devez notamment connaître les fonctions construites dans le tutoriel précédent :

```javascript id="9p2kzf"
calculerSomme()
calculerMoyenne()
rechercher()
trouverMaximum()
trouverMinimum()
compterValidees()
```

## Données de départ

### JavaScript

Créez un fichier :

```text id="7d3mqp"
analyse-notes.js
```

Commencez avec :

```javascript id="5v8n2r"
let notes = [12, 15, 8, 17, 10, 14];

console.log(notes);
```

Exécutez :

```bash id="1g5k8v"
node analyse-notes.js
```

Résultat :

```text id="x3q7md"
[12, 15, 8, 17, 10, 14]
```

Nous allons utiliser ce tableau pour construire une analyse complète.

## Partie 1 — Théorie

### 1.1. Pourquoi combiner plusieurs fonctions ?

Une fonction réalise un traitement précis.

Par exemple :

```text id="j4n8ws"
calculerSomme()
```

calcule une somme.

Une autre :

```text id="h2q6mv"
trouverMaximum()
```

recherche la plus grande valeur.

Une autre :

```text id="c8p1zr"
compterValidees()
```

compte les notes validées.

Un problème réel peut demander plusieurs résultats.

Nous devons donc utiliser plusieurs fonctions.

### 1.2. Un problème peut être divisé en traitements

Considérons :

```text id="r5m9xc"
Analyser les notes d'un groupe.
```

Ce problème peut être découpé :

```text id="w7k2qp"
Analyser les notes
       ↓
Calculer la somme
       ↓
Calculer la moyenne
       ↓
Trouver le maximum
       ↓
Trouver le minimum
       ↓
Compter les notes validées
```

Chaque partie peut être réalisée par une fonction.

### 1.3. Une fonction = un traitement

Nous pouvons associer un besoin à une fonction :

| Besoin                      | Fonction            |
| --------------------------- | ------------------- |
| Calculer la somme           | `calculerSomme()`   |
| Calculer la moyenne         | `calculerMoyenne()` |
| Rechercher une note         | `rechercher()`      |
| Trouver la meilleure note   | `trouverMaximum()`  |
| Trouver la plus petite note | `trouverMinimum()`  |
| Compter les notes validées  | `compterValidees()` |

On obtient :

```text id="k1x7vr"
Problème global
      ↓
Petits traitements
      ↓
Fonctions
```

### 1.4. Appeler plusieurs fonctions

Considérons :

```javascript id="b9m4qk"
let somme = calculerSomme(notes);
let moyenne = calculerMoyenne(notes);
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
let nombreValidees = compterValidees(notes);
```

Chaque variable reçoit le résultat d'une fonction.

On obtient :

```text id="p3r8mz"
notes
 ├── calculerSomme() → somme
 ├── calculerMoyenne() → moyenne
 ├── trouverMaximum() → maximum
 ├── trouverMinimum() → minimum
 └── compterValidees() → nombreValidees
```

### 1.5. Organiser les appels

Un programme peut appeler plusieurs fonctions dans un ordre logique.

Exemple :

```javascript id="f7q2kc"
let somme = calculerSomme(notes);
let moyenne = calculerMoyenne(notes);
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
let nombreValidees = compterValidees(notes);
```

Puis afficher les résultats :

```javascript id="t5m8vp"
console.log("Somme :", somme);
console.log("Moyenne :", moyenne);
console.log("Maximum :", maximum);
console.log("Minimum :", minimum);
console.log("Notes validées :", nombreValidees);
```

### 1.6. Une fonction peut utiliser une autre fonction

Dans le tutoriel précédent, `calculerMoyenne()` peut utiliser `calculerSomme()` :

```javascript id="z3n7qx"
function calculerMoyenne(nombres) {
    let somme = calculerSomme(nombres);

    return somme / nombres.length;
}
```

On obtient :

```text id="h6m2wc"
calculerSomme()
      ↓
      76
      ↓
calculerMoyenne()
      ↓
    12.67
```

C'est une forme simple de **composition**.

### 1.7. Comprendre le chaînage

Le résultat d'une fonction peut devenir une donnée pour une autre fonction.

Exemple simple :

```javascript id="v8q4mk"
function additionner(a, b) {
    return a + b;
}

function doubler(nombre) {
    return nombre * 2;
}

let resultat = doubler(additionner(10, 5));

console.log(resultat);
```

Le traitement est :

```text id="s2p9rx"
10 + 5
  ↓
15
  ↓
15 × 2
  ↓
30
```

Pour les tableaux, nous allons utiliser le même principe, mais avec plusieurs résultats.

### 1.8. Combiner des fonctions ne signifie pas refaire leur traitement

Si `calculerSomme()` existe déjà, il ne faut pas réécrire son algorithme à chaque utilisation.

On utilise :

```javascript id="g4m7qn"
let somme = calculerSomme(notes);
```

et non :

```javascript id="p6x2vr"
let somme = 0;

for (...) {
    ...
}
```

Le but des fonctions est justement de **réutiliser un traitement déjà construit**.

### 1.9. Une fonction peut rester simple

Chaque fonction doit garder un rôle clair.

Par exemple :

```text id="d8q3zm"
calculerSomme()
```

ne doit pas aussi :

* trouver le maximum ;
* compter les notes ;
* afficher les résultats.

Elle doit seulement calculer la somme.

Le programme principal peut ensuite combiner les résultats.

### 1.10. Construire le traitement complet

Nous pouvons organiser le programme comme ceci :

```text id="y5m1qv"
Tableau de notes
      ↓
 ┌────┼────┬────┬────┐
 ↓    ↓    ↓    ↓    ↓
Somme Moy. Max  Min Validées
 └────┴────┴────┴────┘
             ↓
      Affichage final
```

Chaque fonction travaille sur la même collection.

### 1.11. Exemple complet

Nous pouvons écrire :

```javascript id="k7r2mc"
function calculerSomme(nombres) {
    let somme = 0;

    for (let i = 0; i < nombres.length; i++) {
        somme = somme + nombres[i];
    }

    return somme;
}

function calculerMoyenne(nombres) {
    let somme = calculerSomme(nombres);

    return somme / nombres.length;
}

function trouverMaximum(nombres) {
    let maximum = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] > maximum) {
            maximum = nombres[i];
        }
    }

    return maximum;
}

function trouverMinimum(nombres) {
    let minimum = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] < minimum) {
            minimum = nombres[i];
        }
    }

    return minimum;
}

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

Puis :

```javascript id="c9v4qx"
let notes = [12, 15, 8, 17, 10, 14];

let somme = calculerSomme(notes);
let moyenne = calculerMoyenne(notes);
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
let nombreValidees = compterValidees(notes);

console.log("Somme :", somme);
console.log("Moyenne :", moyenne.toFixed(2));
console.log("Maximum :", maximum);
console.log("Minimum :", minimum);
console.log("Notes validées :", nombreValidees);
```

Résultat :

```text id="m7q2xn"
Somme : 76
Moyenne : 12.67
Maximum : 17
Minimum : 8
Notes validées : 5
```

### 1.12. Ajouter une recherche

Le problème peut demander :

> La note `15` existe-t-elle ?

Nous pouvons utiliser :

```javascript id="f3k8mv"
let existe = rechercher(notes, 15);

console.log("15 existe :", existe);
```

Résultat :

```text id="p5r2qc"
15 existe : true
```

Nous avons donc ajouté un nouveau traitement sans modifier les fonctions existantes.

### 1.13. Une même fonction peut être appelée plusieurs fois

Exemple :

```javascript id="x8m4qv"
console.log(rechercher(notes, 15));
console.log(rechercher(notes, 20));
console.log(rechercher(notes, 8));
```

Résultats :

```text id="w3q7nc"
true
false
true
```

La même fonction est réutilisée avec différentes valeurs.

### 1.14. Construire un programme principal simple

À ce stade, nous pouvons séparer mentalement :

```text id="k6p1zr"
Fonctions
   ↓
Contiennent les traitements
```

et :

```text id="r2m8qx"
Programme principal
   ↓
Choisit les fonctions à appeler
   ↓
Utilise les résultats
```

On peut représenter :

```text id="v4c9mj"
               Programme principal
                       ↓
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
calculerSomme()   trouverMaximum()   rechercher()
        ↓              ↓              ↓
     résultat       résultat        résultat
                       ↓
                 affichage
```

### 1.15. Pourquoi cette organisation est utile ?

Avec cette organisation :

* chaque traitement possède un rôle clair ;
* les fonctions peuvent être testées séparément ;
* les fonctions peuvent être réutilisées ;
* le programme principal reste plus simple ;
* plusieurs traitements peuvent être combinés.

### 1.16. À retenir

* Un problème peut être divisé en plusieurs traitements.
* Chaque traitement peut être représenté par une fonction.
* Le programme principal peut appeler plusieurs fonctions.
* Le résultat d'une fonction peut être stocké dans une variable.
* Une fonction peut utiliser le résultat d'une autre fonction.
* Il ne faut pas recopier un traitement déjà disponible dans une fonction.
* Chaque fonction doit garder un rôle clair.
* Plusieurs fonctions peuvent être combinées pour construire une solution complète.

## Partie 2 — Pratique

### 2.1. Étape 1 — Préparer les fonctions

Dans votre fichier, créez :

```javascript id="n8q3vp"
function calculerSomme(nombres) {
    let somme = 0;

    for (let i = 0; i < nombres.length; i++) {
        somme = somme + nombres[i];
    }

    return somme;
}
```

Puis :

```javascript id="w2m7qx"
function trouverMaximum(nombres) {
    let maximum = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] > maximum) {
            maximum = nombres[i];
        }
    }

    return maximum;
}
```

Puis :

```javascript id="c5r9mk"
function trouverMinimum(nombres) {
    let minimum = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] < minimum) {
            minimum = nombres[i];
        }
    }

    return minimum;
}
```

### 2.2. Étape 2 — Ajouter la moyenne

Ajoutez :

```javascript id="p4x8qn"
function calculerMoyenne(nombres) {
    let somme = calculerSomme(nombres);

    return somme / nombres.length;
}
```

Observez que la fonction réutilise :

```text id="5m2qrv"
calculerSomme()
```

### 2.3. Étape 3 — Ajouter le comptage

Créez :

```javascript id="z7c3mk"
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

### 2.4. Étape 4 — Appeler les fonctions

Utilisez :

```javascript id="r6m1qx"
let notes = [12, 15, 8, 17, 10, 14];

let somme = calculerSomme(notes);
let moyenne = calculerMoyenne(notes);
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
let nombreValidees = compterValidees(notes);
```

### 2.5. Étape 5 — Afficher les résultats

Ajoutez :

```javascript id="v4q8mc"
console.log("Somme :", somme);
console.log("Moyenne :", moyenne.toFixed(2));
console.log("Maximum :", maximum);
console.log("Minimum :", minimum);
console.log("Notes validées :", nombreValidees);
```

Résultat attendu :

```text id="m3x7qp"
Somme : 76
Moyenne : 12.67
Maximum : 17
Minimum : 8
Notes validées : 5
```

### 2.6. Étape 6 — Ajouter une recherche

Ajoutez :

```javascript id="q8m2vr"
function rechercher(nombres, valeur) {
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === valeur) {
            return true;
        }
    }

    return false;
}
```

Puis :

```javascript id="x5c9mk"
let existe = rechercher(notes, 15);

console.log("15 existe :", existe);
```

Résultat :

```text id="w7q3pn"
15 existe : true
```

### 2.7. Étape 7 — Utiliser plusieurs recherches

Testez :

```javascript id="k2m8qx"
console.log("15 existe :", rechercher(notes, 15));
console.log("20 existe :", rechercher(notes, 20));
console.log("8 existe :", rechercher(notes, 8));
```

Résultat attendu :

```text id="r4v1mc"
15 existe : true
20 existe : false
8 existe : true
```

### 2.8. Étape 8 — Modifier les données

Remplacez le tableau :

```javascript id="p7x2qm"
let notes = [10, 11, 14, 16, 18];
```

Le programme doit maintenant produire :

```text id="c3m8vr"
Somme : 69
Moyenne : 13.80
Maximum : 18
Minimum : 10
Notes validées : 5
```

La structure des fonctions ne doit pas changer.

### 2.9. Étape 9 — Combiner des fonctions

Construisez le traitement suivant :

```text id="n6q4mx"
notes
  ↓
calculerMoyenne()
  ↓
moyenne
  ↓
estValidee()
  ↓
true / false
```

Créez :

```javascript id="z5m1qx"
function estValidee(note) {
    return note >= 10;
}
```

Puis :

```javascript id="v8q3mc"
let moyenne = calculerMoyenne(notes);
let validee = estValidee(moyenne);

console.log("Moyenne :", moyenne.toFixed(2));
console.log("Moyenne validée :", validee);
```

### 2.10. Étape 10 — Construire une analyse complète

Avec :

```javascript id="w4m9qx"
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

utilisez les fonctions pour obtenir :

```text id="p2x7mv"
Somme : 91
Moyenne : 11.38
Maximum : 17
Minimum : 6
Notes validées : 5
```

Puis vérifiez :

```text id="c6m3qr"
Moyenne validée : true
```

### 2.11. Exercice 1 — Analyse d'une liste de nombres

Considérez :

```javascript id="r8q2mx"
let nombres = [5, 12, 8, 19, 3, 14];
```

Utilisez les fonctions appropriées pour obtenir :

* la somme ;
* la moyenne ;
* le maximum ;
* le minimum.

Résultats attendus :

```text id="h4m7vc"
Somme : 61
Moyenne : 10.17
Maximum : 19
Minimum : 3
```

### 2.12. Exercice 2 — Recherche dans une collection

Considérez :

```javascript id="x3q8mn"
let nombres = [5, 12, 8, 19, 3, 14];
```

Utilisez `rechercher()` pour tester :

```text id="v7m2qc"
19
7
3
```

Résultat :

```text id="c9q5xr"
19 → true
7 → false
3 → true
```

### 2.13. Exercice 3 — Analyse de notes

Considérez :

```javascript id="p4m8qv"
let notes = [13, 9, 17, 12, 8, 15];
```

Utilisez les fonctions déjà créées pour afficher :

* somme ;
* moyenne ;
* maximum ;
* minimum ;
* nombre de notes validées.

Résultats attendus :

```text id="g2x7mc"
Somme : 74
Moyenne : 12.33
Maximum : 17
Minimum : 8
Notes validées : 4
```

### 2.14. Exercice 4 — Combiner moyenne et validation

Avec :

```javascript id="w6m3qk"
let notes = [13, 9, 17, 12, 8, 15];
```

calculez la moyenne puis utilisez `estValidee()`.

La moyenne est :

```text id="b5q8mc"
12.33
```

Le résultat de :

```text id="k2m7vx"
estValidee(12.33)
```

doit être :

```text id="z4q1pn"
true
```

### 2.15. Exercice 5 — Construire un programme principal

Organisez votre programme selon :

```text id="r8m3qc"
1. Définir les fonctions
2. Définir les données
3. Appeler les fonctions
4. Stocker les résultats
5. Afficher les résultats
```

Utilisez :

```javascript id="x5q9mk"
let notes = [11, 7, 15, 18, 9, 13, 10, 16];
```

Le programme doit afficher :

```text id="m3v8qr"
Somme : 99
Moyenne : 12.38
Maximum : 18
Minimum : 7
Notes validées : 6
```

### 2.16. Exercice 6 — Utiliser le résultat d'une fonction

Construisez :

```text id="q7m2xc"
moyenne
   ↓
estValidee()
   ↓
resultat
```

Puis affichez :

```text id="v4q8mk"
Moyenne : 12.38
Moyenne validée : true
```

### 2.17. Exercice de synthèse

Considérez :

```javascript id="n6m3qx"
let notes = [12, 15, 8, 17, 10, 14];
```

Construisez un programme qui utilise au minimum :

```text id="w8q2mc"
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
rechercher()
compterValidees()
estValidee()
```

Le programme doit :

1. calculer la somme ;
2. calculer la moyenne ;
3. trouver le maximum ;
4. trouver le minimum ;
5. compter les notes validées ;
6. vérifier si la moyenne est validée ;
7. rechercher la note `15`.

Résultats attendus :

```text id="x5m7qr"
Somme : 76
Moyenne : 12.67
Maximum : 17
Minimum : 8
Notes validées : 5
Moyenne validée : true
15 existe : true
```

### 2.18. Travail à faire

Construisez votre propre **programme d'analyse d'une collection**.

Utilisez :

```javascript id="c3q8mv"
let notes = [14, 8, 17, 11, 9, 16, 12];
```

Le programme doit utiliser plusieurs fonctions déjà créées.

Il doit afficher :

```text id="k4m9qx"
Somme
Moyenne
Maximum
Minimum
Notes validées
Moyenne validée
Recherche d'une note
```

Vous devez pouvoir modifier uniquement le tableau pour analyser une autre collection.

### Livrable

Créez un document Markdown ou un Google Doc contenant :

```text id="p7x2mc"
1. Problème
2. Fonctions utilisées
3. Rôle de chaque fonction
4. Données de départ
5. Code JavaScript
6. Résultats
7. Deux tests avec d'autres tableaux
```

### Critère de réussite

Le travail est réussi si :

* plusieurs fonctions sont correctement utilisées ;
* chaque fonction conserve un rôle clair ;
* les résultats retournés sont correctement stockés ;
* une fonction peut utiliser le résultat d'une autre ;
* le programme principal organise correctement les appels ;
* le programme fonctionne avec plusieurs tableaux ;
* aucun traitement déjà disponible dans une fonction n'est recopié inutilement.

### Résultat attendu

Pour :

```javascript id="m8q4vx"
let notes = [14, 8, 17, 11, 9, 16, 12];
```

le programme doit obtenir :

```text id="w3q7mc"
Somme : 87
Moyenne : 12.43
Maximum : 17
Minimum : 8
Notes validées : 5
Moyenne validée : true
```

Pour une recherche de :

```text id="v6m2qx"
17
```

le résultat doit être :

```text id="c4q8mr"
17 existe : true
```

## Bilan

**Vous avez appris :**

* à utiliser plusieurs fonctions dans un même programme ;
* à organiser les appels de fonctions ;
* à stocker plusieurs résultats ;
* à utiliser le résultat d'une fonction dans une autre ;
* à combiner plusieurs traitements élémentaires ;
* à construire un traitement complet à partir de fonctions existantes.

**Vous savez maintenant :**

```text id="n7q3mc"
Problème global
      ↓
Décomposition
      ↓
Fonctions spécialisées
      ↓
Appels
      ↓
Résultats intermédiaires
      ↓
Combinaison
      ↓
Résultat final
```

Vous avez terminé la progression principale de l'UA.121.14.

Dans l'UA suivante, l'objectif ne sera plus seulement de réutiliser des fonctions déjà connues, mais de **résoudre un problème algorithmique en choisissant vous-même les traitements nécessaires**.

## Glossaire

* **Composition** : utilisation de plusieurs fonctions dans un même traitement.
* **Programme principal** : partie du programme qui organise les appels aux fonctions.
* **Résultat intermédiaire** : résultat produit par une fonction et utilisé ensuite.
* **Traitement** : action réalisée sur les données.
* **Fonction spécialisée** : fonction qui réalise une tâche précise.
* **Réutilisation** : utilisation d'une même fonction avec différentes données.
* **Chaînage** : utilisation du résultat d'un traitement comme donnée pour un autre traitement.
