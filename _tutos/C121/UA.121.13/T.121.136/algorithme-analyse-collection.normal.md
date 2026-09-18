---
title: "Algorithme de synthèse : analyser une collection"
layout: tuto
slug: "algorithme-analyser-collection"
permalink: /tutos/:slug/
tuto_id: "T.121.136"
type: "algorithme"
version: "normal"
ua: "UA.121.13"
nav_order: 6
data_js: ""
---

## console.log(notes);

## 1. Objectif

Dans ce tutoriel, vous allez construire un **algorithme complet d'analyse d'une collection de notes**.

Vous allez combiner plusieurs traitements déjà étudiés :

* parcourir un tableau ;
* calculer une somme ;
* calculer une moyenne ;
* rechercher le maximum ;
* rechercher le minimum ;
* compter les valeurs qui respectent une règle ;
* calculer la somme des valeurs qui respectent une règle.

Le problème final est :

```text
Tableau de notes
       ↓
Parcourir les notes
       ↓
Analyser chaque note
       ↓
Construire plusieurs résultats
       ↓
Afficher l'analyse complète
```

## 2. Prérequis

Vous devez savoir :

* créer un tableau ;
* utiliser les index ;
* utiliser `length` ;
* parcourir un tableau avec `for` ;
* utiliser `if` ;
* utiliser un compteur ;
* utiliser un accumulateur ;
* calculer une moyenne ;
* rechercher un maximum ;
* rechercher un minimum.

Exemples déjà connus :

```javascript
for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
}
```

et :

```javascript
let maximum = notes[0];

for (let i = 1; i < notes.length; i++) {
    if (notes[i] > maximum) {
        maximum = notes[i];
    }
}
```

## Données de départ

### JavaScript

Créez un fichier :

```text
analyser-notes.js
```

Ajoutez :

```javascript
let notes = [12, 15, 8, 17, 10, 14];

console.log(notes);
```

Exécutez :

```bash
node analyser-notes.js
```

Résultat :

```text
[12, 15, 8, 17, 10, 14]
```

### Données de travail

Le tableau contient :

```text
12
15
8
17
10
14
```

On considère qu'une note est **validée** si :

```text
note >= 10
```

## Partie 1 — Théorie

### 1.1. Comprendre le problème

Le programme doit produire plusieurs informations :

```text
Somme
Moyenne
Maximum
Minimum
Nombre de notes validées
Somme des notes validées
Moyenne des notes validées
```

Nous devons donc parcourir le même tableau et construire plusieurs résultats.

On peut représenter le problème ainsi :

```text
                 Tableau de notes
                        ↓
                    Parcours
                        ↓
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
      Somme         Maximum          Minimum
        ↓               ↓               ↓
     Moyenne
        ↓
   Vérifier note >= 10
        ↓
   ┌────┴────┐
   ↓         ↓
Compter     Additionner
   ↓         ↓
Moyenne des notes validées
```

### 1.2. Pourquoi utiliser un seul tableau ?

Toutes les informations concernent les mêmes notes.

Nous n'avons donc pas besoin de plusieurs tableaux.

Nous avons :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Puis nous analysons chaque élément.

### 1.3. Préparer les résultats

Avant la boucle, nous devons créer les variables nécessaires.

Pour la somme :

```javascript
let somme = 0;
```

Pour le nombre de notes validées :

```javascript
let nombreValidees = 0;
```

Pour la somme des notes validées :

```javascript
let sommeValidees = 0;
```

Pour le maximum :

```javascript
let maximum = notes[0];
```

Pour le minimum :

```javascript
let minimum = notes[0];
```

La préparation devient :

```javascript
let somme = 0;
let nombreValidees = 0;
let sommeValidees = 0;

let maximum = notes[0];
let minimum = notes[0];
```

### 1.4. Pourquoi initialiser le maximum et le minimum avec la première note ?

Nous ne devons pas inventer une valeur initiale.

Le tableau nous donne déjà une première valeur :

```text
notes[0]
```

Nous pouvons donc dire :

```javascript
let maximum = notes[0];
let minimum = notes[0];
```

Pour notre tableau :

```text
notes[0] = 12
```

Nous commençons donc avec :

```text
maximum = 12
minimum = 12
```

Puis nous comparerons les autres notes.

### 1.5. Calculer la somme

Pour chaque note :

```text
ajouter la note à la somme
```

Le principe est :

```text
somme = 0

note 12 → somme = 12
note 15 → somme = 27
note 8  → somme = 35
note 17 → somme = 52
note 10 → somme = 62
note 14 → somme = 76
```

La somme finale est donc :

```text
76
```

### 1.6. Rechercher le maximum

Nous commençons avec :

```text
maximum = 12
```

Puis :

```text
15 > 12
```

Donc :

```text
maximum = 15
```

Puis :

```text
8 > 15
```

Faux.

Le maximum reste :

```text
15
```

Puis :

```text
17 > 15
```

Vrai.

Le maximum devient :

```text
17
```

Les valeurs suivantes ne sont pas plus grandes.

Résultat :

```text
maximum = 17
```

### 1.7. Rechercher le minimum

Nous commençons avec :

```text
minimum = 12
```

Puis :

```text
15 < 12
```

Faux.

Ensuite :

```text
8 < 12
```

Vrai.

Donc :

```text
minimum = 8
```

Les autres valeurs sont supérieures à `8`.

Résultat :

```text
minimum = 8
```

### 1.8. Compter les notes validées

La règle est :

```text
note >= 10
```

Pour chaque note :

```text
12 → validée
15 → validée
8  → non validée
17 → validée
10 → validée
14 → validée
```

Le nombre de notes validées est :

```text
5
```

Le principe est :

```text
nombreValidees = 0

si la note est validée :
    nombreValidees++
```

### 1.9. Calculer la somme des notes validées

Nous additionnons seulement :

```text
12
15
17
10
14
```

Le calcul est :

```text
12 + 15 + 17 + 10 + 14 = 68
```

Donc :

```text
sommeValidees = 68
```

### 1.10. Calculer les moyennes

La moyenne générale est :

```text
somme / nombre de notes
```

Donc :

```text
76 / 6 = 12,666...
```

Nous pouvons afficher :

```text
12.67
```

La moyenne des notes validées est :

```text
68 / 5 = 13.6
```

### 1.11. Organiser le traitement

Nous pouvons maintenant tout réaliser dans une même boucle.

La structure générale est :

```text
Initialiser les résultats
        ↓
Parcourir le tableau
        ↓
Pour chaque note :
    ajouter à la somme
    comparer au maximum
    comparer au minimum
    vérifier si la note est validée
        ↓
Calculer les moyennes
        ↓
Afficher les résultats
```

### 1.12. Construire une première version simple

Nous pouvons commencer par écrire plusieurs traitements séparés.

Calcul de la somme :

```javascript
let somme = 0;

for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
}
```

Maximum :

```javascript
let maximum = notes[0];

for (let i = 1; i < notes.length; i++) {
    if (notes[i] > maximum) {
        maximum = notes[i];
    }
}
```

Minimum :

```javascript
let minimum = notes[0];

for (let i = 1; i < notes.length; i++) {
    if (notes[i] < minimum) {
        minimum = notes[i];
    }
}
```

Cette méthode est correcte.

Mais le tableau est parcouru plusieurs fois.

### 1.13. Combiner les traitements dans une boucle

Nous pouvons utiliser une seule boucle.

```javascript
let somme = 0;
let nombreValidees = 0;
let sommeValidees = 0;

let maximum = notes[0];
let minimum = notes[0];

for (let i = 0; i < notes.length; i++) {
    let note = notes[i];

    somme = somme + note;

    if (note > maximum) {
        maximum = note;
    }

    if (note < minimum) {
        minimum = note;
    }

    if (note >= 10) {
        nombreValidees++;
        sommeValidees = sommeValidees + note;
    }
}
```

Chaque note est utilisée pour plusieurs traitements.

### 1.14. Comprendre le rôle de `note`

Dans :

```javascript
let note = notes[i];
```

`note` représente la valeur courante.

Cela rend le code plus facile à lire.

Au lieu d'écrire plusieurs fois :

```javascript
notes[i]
```

nous pouvons écrire :

```javascript
note
```

Le traitement devient plus clair :

```text
note
 ├── somme
 ├── maximum
 ├── minimum
 └── validation
```

### 1.15. Calculer les résultats après la boucle

La boucle construit les résultats intermédiaires.

Après la boucle :

```javascript
let moyenne = somme / notes.length;
let moyenneValidees = sommeValidees / nombreValidees;
```

Nous obtenons :

```text
somme = 76
moyenne = 12.67
maximum = 17
minimum = 8
nombreValidees = 5
sommeValidees = 68
moyenneValidees = 13.6
```

### 1.16. Attention aux données variables

Le programme doit fonctionner avec un autre tableau.

Par exemple :

```javascript
let notes = [10, 11, 15, 18];
```

Il ne faut donc pas écrire directement :

```text
6 notes
```

dans le programme.

Il faut utiliser :

```javascript
notes.length
```

La règle est :

> Le traitement doit dépendre des données du tableau, pas d'un nombre écrit manuellement.

### 1.17. À retenir

* Un même parcours peut construire plusieurs résultats.
* La somme utilise un accumulateur.
* Le maximum et le minimum utilisent une valeur provisoire.
* Le comptage utilise un compteur.
* Une condition permet de sélectionner certaines valeurs.
* Les moyennes peuvent être calculées après le parcours.
* `length` permet d'adapter le traitement au nombre réel d'éléments.
* Plusieurs traitements peuvent être regroupés dans une seule boucle.

## Partie 2 — Pratique

### 2.1. Étape 1 — Parcourir les notes

Commencez avec :

```javascript
let notes = [12, 15, 8, 17, 10, 14];

for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
}
```

Résultat :

```text
12
15
8
17
10
14
```

### 2.2. Étape 2 — Calculer la somme

Ajoutez un accumulateur :

```javascript
let somme = 0;

for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
}

console.log(somme);
```

Résultat :

```text
76
```

### 2.3. Étape 3 — Trouver le maximum

Ajoutez :

```javascript
let maximum = notes[0];

for (let i = 1; i < notes.length; i++) {
    if (notes[i] > maximum) {
        maximum = notes[i];
    }
}

console.log(maximum);
```

Résultat :

```text
17
```

### 2.4. Étape 4 — Trouver le minimum

Ajoutez :

```javascript
let minimum = notes[0];

for (let i = 1; i < notes.length; i++) {
    if (notes[i] < minimum) {
        minimum = notes[i];
    }
}

console.log(minimum);
```

Résultat :

```text
8
```

### 2.5. Étape 5 — Compter les notes validées

Ajoutez :

```javascript
let nombreValidees = 0;

for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        nombreValidees++;
    }
}

console.log(nombreValidees);
```

Résultat :

```text
5
```

### 2.6. Étape 6 — Calculer la somme des notes validées

Ajoutez :

```javascript
let sommeValidees = 0;

for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        sommeValidees = sommeValidees + notes[i];
    }
}

console.log(sommeValidees);
```

Résultat :

```text
68
```

### 2.7. Étape 7 — Combiner les traitements

Construisez maintenant une seule boucle :

```javascript
let notes = [12, 15, 8, 17, 10, 14];

let somme = 0;
let nombreValidees = 0;
let sommeValidees = 0;

let maximum = notes[0];
let minimum = notes[0];

for (let i = 0; i < notes.length; i++) {
    let note = notes[i];

    somme = somme + note;

    if (note > maximum) {
        maximum = note;
    }

    if (note < minimum) {
        minimum = note;
    }

    if (note >= 10) {
        nombreValidees++;
        sommeValidees = sommeValidees + note;
    }
}
```

### 2.8. Étape 8 — Calculer les moyennes

Ajoutez après la boucle :

```javascript
let moyenne = somme / notes.length;
let moyenneValidees = sommeValidees / nombreValidees;
```

Vous avez maintenant tous les résultats.

### 2.9. Étape 9 — Afficher l'analyse

Ajoutez :

```javascript
console.log("Nombre de notes :", notes.length);
console.log("Somme :", somme);
console.log("Moyenne :", moyenne.toFixed(2));
console.log("Maximum :", maximum);
console.log("Minimum :", minimum);
console.log("Notes validées :", nombreValidees);
console.log("Somme des notes validées :", sommeValidees);
console.log("Moyenne des notes validées :", moyenneValidees.toFixed(2));
```

Résultat attendu :

```text
Nombre de notes : 6
Somme : 76
Moyenne : 12.67
Maximum : 17
Minimum : 8
Notes validées : 5
Somme des notes validées : 68
Moyenne des notes validées : 13.60
```

### 2.10. Étape 10 — Vérifier avec un autre tableau

Remplacez :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

par :

```javascript
let notes = [5, 10, 13, 17, 8];
```

Recalculez les résultats avec le programme.

Vérifiez chaque valeur :

```text
Somme : 53
Moyenne : 10.60
Maximum : 17
Minimum : 5
Notes validées : 3
Somme des notes validées : 40
Moyenne des notes validées : 13.33
```

### 2.11. Étape 11 — Vérifier un tableau entièrement validé

Testez :

```javascript
let notes = [10, 12, 14, 16, 18];
```

Le programme doit produire :

```text
Somme : 70
Moyenne : 14.00
Maximum : 18
Minimum : 10
Notes validées : 5
Somme des notes validées : 70
Moyenne des notes validées : 14.00
```

### 2.12. Travail à faire

Construisez un programme complet d'analyse avec :

```javascript
let notes = [11, 7, 15, 18, 9, 13, 10, 16];
```

Le programme doit produire :

* le nombre de notes ;
* la somme ;
* la moyenne ;
* le maximum ;
* le minimum ;
* le nombre de notes validées ;
* la somme des notes validées ;
* la moyenne des notes validées.

Vous devez utiliser **une seule boucle principale** pour analyser le tableau.

### Livrable

Créez un document Markdown ou un Google Doc contenant :

```text
1. Le problème
2. Les données
3. Les règles de traitement
4. L'algorithme en étapes
5. Le code JavaScript
6. Les résultats
7. Deux tests avec d'autres tableaux
```

### Critère de réussite

Le programme est réussi si :

* le tableau est parcouru correctement ;
* une seule boucle principale analyse les notes ;
* la somme est correcte ;
* la moyenne est correcte ;
* le maximum est correct ;
* le minimum est correct ;
* le nombre de notes validées est correct ;
* la somme des notes validées est correcte ;
* la moyenne des notes validées est correcte ;
* le programme fonctionne avec un autre tableau.

### Résultat attendu

Pour :

```javascript
let notes = [11, 7, 15, 18, 9, 13, 10, 16];
```

le programme doit obtenir :

```text
Nombre de notes : 8
Somme : 99
Moyenne : 12.38
Maximum : 18
Minimum : 7
Notes validées : 6
Somme des notes validées : 83
Moyenne des notes validées : 13.83
```

## Bilan

**Vous avez appris :**

* à analyser une collection complète ;
* à construire plusieurs résultats pendant un même parcours ;
* à combiner somme, moyenne, maximum et minimum ;
* à compter les valeurs qui respectent une condition ;
* à calculer une somme conditionnelle ;
* à organiser un traitement complet.

**Vous savez maintenant :**

```text
Problème
   ↓
Données
   ↓
Règles
   ↓
Variables de résultat
   ↓
Parcours
   ↓
Conditions
   ↓
Résultats intermédiaires
   ↓
Résultat final
```

Vous venez de passer d'un **algorithme élémentaire isolé** à un **traitement qui combine plusieurs algorithmes élémentaires**.

Cette étape prépare la suite du domaine :

```text
Algorithmes élémentaires
        ↓
Fonctions réutilisables
        ↓
Résolution de problèmes
        ↓
Décomposition
        ↓
Chaînage
```

## Glossaire

* **Analyse** : traitement qui permet d'extraire plusieurs informations à partir de données.
* **Collection** : ensemble de valeurs regroupées dans une structure comme un tableau.
* **Résultat intermédiaire** : valeur construite pendant le traitement.
* **Accumulateur** : variable qui conserve progressivement une somme ou un autre résultat.
* **Compteur** : variable qui compte les éléments respectant une règle.
* **Maximum** : plus grande valeur de la collection.
* **Minimum** : plus petite valeur de la collection.
* **Moyenne** : somme des valeurs divisée par leur nombre.
* **Traitement conditionnel** : traitement réalisé seulement lorsque une condition est vraie.
