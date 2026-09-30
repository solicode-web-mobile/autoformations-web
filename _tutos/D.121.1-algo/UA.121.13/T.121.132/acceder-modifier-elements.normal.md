---
title: "Accéder et modifier les éléments d'un tableau"
layout: tuto
slug: "acceder-modifier-elements-tableau"
permalink: /tutos/:slug/
tuto_id: "T.121.132"
type: "classique"
version: "normal"
ua: "UA.121.13"
nav_order: 2
data_js: ""
---

Dans ce tutoriel, vous allez apprendre à **lire et modifier les éléments d'un tableau**.

Vous allez apprendre à :

* accéder à un élément avec son index ;
* utiliser `length` pour identifier une position ;
* modifier une valeur ;
* remplacer une valeur ;
* modifier le premier élément ;
* modifier le dernier élément ;
* vérifier le tableau après une modification.

À la fin du tutoriel, vous devez être capable de passer de :

```text id="1u6ydy"
Tableau initial
       ↓
Accéder à un élément
       ↓
Modifier l'élément
       ↓
Observer le nouveau tableau
```

Le parcours automatique du tableau avec une boucle sera étudié dans un tutoriel suivant.

## 2. Prérequis

Vous devez savoir :

* déclarer une variable ;
* utiliser `console.log()` ;
* créer un tableau ;
* comprendre les éléments d'un tableau ;
* comprendre les index ;
* utiliser `length`.

Exemple :

```javascript id="j9q21f"
let notes = [12, 15, 8, 17];

console.log(notes[0]);
```

Résultat :

```text id="v4g8mr"
12
```

## Données de départ

### JavaScript

Créez un fichier :

```text id="d5qj4m"
modifier-tableau.js
```

Ajoutez :

```javascript id="ktw4pm"
let notes = [12, 15, 8, 17];

console.log(notes);
```

Exécutez :

```bash id="q5v4pt"
node modifier-tableau.js
```

Résultat :

```text id="m6k0gz"
[ 12, 15, 8, 17 ]
```

## Partie 1 — Théorie

### 1.1. Accéder à un élément

Pour lire un élément, on utilise :

```text
tableau[index]
```

Exemple :

```javascript id="4zlm2d"
let notes = [12, 15, 8, 17];

console.log(notes[1]);
```

Résultat :

```text id="vjq5n9"
15
```

Le programme lit l'élément situé à l'index `1`.

On peut représenter le tableau ainsi :

```text id="m8b2f1"
Index :   0    1    2    3
          ↓    ↓    ↓    ↓
Notes  : [12, 15,  8, 17]
```

Donc :

```text id="9e6f5r"
notes[0] → 12
notes[1] → 15
notes[2] → 8
notes[3] → 17
```

### 1.2. Lire une valeur pour l'utiliser

L'accès à un élément ne sert pas seulement à l'afficher.

On peut utiliser la valeur dans un calcul.

Exemple :

```javascript id="u6qh0s"
let notes = [12, 15, 8, 17];

let premiereNote = notes[0];

console.log(premiereNote);
```

Résultat :

```text id="0p7u4m"
12
```

On peut aussi faire :

```javascript id="7zmd9x"
let somme = notes[0] + notes[1];

console.log(somme);
```

Résultat :

```text id="8fbj1a"
27
```

L'élément du tableau peut donc être utilisé comme une valeur normale.

### 1.3. Modifier un élément

Pour modifier un élément, on utilise son index à gauche de `=`.

Exemple :

```javascript id="2qy4pr"
let notes = [12, 15, 8, 17];

notes[2] = 10;

console.log(notes);
```

Résultat :

```text id="t8xtl3"
[ 12, 15, 10, 17 ]
```

Avant :

```text id="9fsd0k"
[12, 15, 8, 17]
```

Après :

```text id="lhb8qd"
[12, 15, 10, 17]
```

Seul l'élément à l'index `2` a changé.

### 1.4. Lire puis modifier

On peut d'abord lire une valeur, puis la modifier.

Exemple :

```javascript id="gv51i1"
let notes = [12, 15, 8, 17];

console.log(notes[2]);

notes[2] = 10;

console.log(notes[2]);
```

Résultat :

```text id="74x3ar"
8
10
```

La valeur était `8`.

Elle devient `10`.

### 1.5. Modifier le premier élément

Le premier élément est à l'index `0`.

Exemple :

```javascript id="ivkzj5"
let notes = [12, 15, 8, 17];

notes[0] = 14;

console.log(notes);
```

Résultat :

```text id="w2g0fu"
[ 14, 15, 8, 17 ]
```

La règle est :

```text id="egm9vc"
premier élément → index 0
```

### 1.6. Modifier le dernier élément

Le dernier index est :

```text id="mblq4z"
length - 1
```

Exemple :

```javascript id="h8brn6"
let notes = [12, 15, 8, 17];

notes[notes.length - 1] = 20;

console.log(notes);
```

Résultat :

```text id="h9pnrt"
[ 12, 15, 8, 20 ]
```

Cette méthode fonctionne même si le nombre d'éléments change.

### 1.7. Modifier plusieurs éléments

On peut modifier plusieurs positions.

Exemple :

```javascript id="53j9pi"
let notes = [12, 15, 8, 17];

notes[0] = 14;
notes[2] = 10;
notes[3] = 18;

console.log(notes);
```

Résultat :

```text id="5a1l3c"
[ 14, 15, 10, 18 ]
```

Chaque modification utilise un index précis.

### 1.8. La position doit exister

Considérons :

```javascript id="bnm4r5"
let notes = [12, 15, 8, 17];
```

Les index existants sont :

```text id="1t4qyg"
0
1
2
3
```

Un accès comme :

```javascript id="nr2ay4"
console.log(notes[4]);
```

ne donne pas un élément existant.

Le résultat est :

```text id="me7z6n"
undefined
```

Il faut donc connaître les positions disponibles.

### 1.9. `length` permet de connaître la taille du tableau

Exemple :

```javascript id="lw4u95"
let notes = [12, 15, 8, 17];

console.log(notes.length);
```

Résultat :

```text id="n34dy3"
4
```

Le tableau possède quatre éléments.

Le dernier index est donc :

```text id="sy5p9j"
4 - 1 = 3
```

### 1.10. Modifier le dernier élément avec `length`

On peut donc écrire :

```javascript id="5f6l9g"
let notes = [12, 15, 8, 17];

let dernierIndex = notes.length - 1;

notes[dernierIndex] = 20;

console.log(notes);
```

Résultat :

```text id="y5z9ey"
[ 12, 15, 8, 20 ]
```

Cette écriture permet de rendre le traitement plus clair :

```text id="h6x4l4"
length
  ↓
dernier index
  ↓
dernier élément
```

### 1.11. Modifier une valeur à partir d'une règle

Une modification peut dépendre d'une règle.

Exemple :

```javascript id="lq4z7s"
let note = 8;

if (note < 10) {
    note = 10;
}

console.log(note);
```

Résultat :

```text id="ji3s26"
10
```

Cette idée pourra ensuite être appliquée aux éléments d'un tableau pendant son parcours.

Pour le moment, nous modifions seulement une position connue.

### 1.12. Lire et modifier sont deux opérations différentes

Pour lire :

```javascript id="st1i80"
console.log(notes[2]);
```

Pour modifier :

```javascript id="dqkx5y"
notes[2] = 10;
```

La différence est importante :

```text id="g7u3ro"
notes[2]
```

permet d'obtenir une valeur.

Alors que :

```text id="y4a9sk"
notes[2] = 10
```

remplace cette valeur.

### 1.13. À retenir

* `tableau[index]` permet d'accéder à un élément.
* Le premier élément est à l'index `0`.
* Pour modifier un élément, on utilise `tableau[index] = nouvelleValeur`.
* `length` donne le nombre d'éléments.
* Le dernier index est `length - 1`.
* On peut utiliser un élément dans un calcul.
* On peut modifier plusieurs éléments.
* Un index qui n'existe pas donne `undefined` lors de la lecture.

## Partie 2 — Pratique

### 2.1. Lire plusieurs éléments

Créez :

```javascript id="yzwxpu"
let nombres = [10, 20, 30, 40];
```

Affichez :

```text id="8q2spb"
10
30
40
```

Vous devez utiliser les index appropriés.

### 2.2. Modifier un élément

À partir de :

```javascript id="e9s01a"
let nombres = [10, 20, 30, 40];
```

modifiez la valeur `30` pour obtenir `35`.

Résultat attendu :

```text id="0df0p6"
[10, 20, 35, 40]
```

### 2.3. Modifier le premier élément

À partir de :

```javascript id="08q4k0"
let nombres = [10, 20, 30, 40];
```

remplacez `10` par `15`.

Résultat :

```text id="8pyt1o"
[15, 20, 30, 40]
```

### 2.4. Modifier le dernier élément

À partir de :

```javascript id="w6g9p7"
let nombres = [10, 20, 30, 40];
```

remplacez `40` par `50`.

Utilisez :

```text id="68m6ep"
length - 1
```

Résultat :

```text id="b61kdo"
[10, 20, 30, 50]
```

### 2.5. Lire puis modifier une note

Considérez :

```javascript id="7b3hps"
let notes = [12, 15, 8, 17];
```

Affichez d'abord la note à l'index `2`.

Puis remplacez cette note par `10`.

Affichez ensuite le tableau complet.

Résultat attendu :

```text id="lw4a1a"
8
[12, 15, 10, 17]
```

### 2.6. Modifier plusieurs notes

Considérez :

```javascript id="n3f0f5"
let notes = [10, 12, 8, 14];
```

Modifiez :

```text id="y86ap4"
index 0 → 11
index 2 → 10
index 3 → 15
```

Résultat attendu :

```text id="j8h4cy"
[11, 12, 10, 15]
```

### 2.7. Utiliser une valeur dans un calcul

Considérez :

```javascript id="y6zk0h"
let nombres = [10, 20, 30, 40];
```

Calculez :

```text id="xy6wix"
premier élément + dernier élément
```

Le résultat attendu est :

```text id="8de2fg"
50
```

### 2.8. Exercice — Corriger une note

Considérez :

```javascript id="1df3ku"
let notes = [12, 7, 15, 9];
```

La note à l'index `1` est incorrecte.

Elle doit devenir `10`.

Après modification, le tableau doit être :

```text id="xq8u4d"
[12, 10, 15, 9]
```

### 2.9. Exercice — Corriger la dernière valeur

Considérez :

```javascript id="k8h2t5"
let temperatures = [18, 20, 23, 19];
```

La dernière température doit être remplacée par `21`.

Utilisez `length` pour trouver le dernier index.

Résultat attendu :

```text id="pa4b8s"
[18, 20, 23, 21]
```

### 2.10. Exercice — Remplacer plusieurs valeurs

Considérez :

```javascript id="0r4u8n"
let prix = [50, 80, 120, 150];
```

Modifiez :

```text id="qo6sh8"
50 → 55
120 → 125
150 → 160
```

Résultat attendu :

```text id="5l9zco"
[55, 80, 125, 160]
```

### 2.11. Exercice — Observer avant et après

Considérez :

```javascript id="z2blf6"
let notes = [11, 14, 9, 16];
```

Le programme doit afficher :

```text id="n3u8zj"
Avant : [11, 14, 9, 16]
```

Puis modifier la troisième note en `10`.

Enfin :

```text id="jbr0ta"
Après : [11, 14, 10, 16]
```

### 2.12. Exercice — Utiliser `length`

Considérez :

```javascript id="w4mx3f"
let nombres = [5, 8, 12, 20, 25];
```

Le programme doit :

1. afficher le nombre d'éléments ;
2. afficher le dernier élément ;
3. remplacer le dernier élément par `30` ;
4. afficher le tableau final.

Résultat attendu :

```text id="nnc7yr"
Nombre d'éléments : 5
Dernier élément : 25
Tableau final : [5, 8, 12, 20, 30]
```

### 2.13. Travail à faire

Créez le programme suivant :

```javascript id="z7krt5"
let notes = [12, 8, 15, 9, 17];
```

Le tableau contient cinq notes.

Vous devez :

1. afficher la première note ;
2. afficher la dernière note ;
3. remplacer la deuxième note par `10` ;
4. remplacer la quatrième note par `11` ;
5. afficher le tableau final ;
6. afficher le nombre total de notes.

Le résultat final doit être :

```text id="gs34hn"
[12, 10, 15, 11, 17]
```

### Livrable

Créez un document Markdown ou un Google Doc contenant :

* le tableau de départ ;
* les opérations réalisées ;
* le code JavaScript ;
* le tableau final ;
* les résultats affichés.

### Critère de réussite

Le travail est réussi si :

* les index sont correctement utilisés ;
* les valeurs sont correctement lues ;
* les valeurs demandées sont correctement modifiées ;
* `length` est correctement utilisé ;
* le tableau final correspond à la consigne ;
* aucune boucle n'est utilisée.

### Résultat attendu

Pour :

```javascript id="8mx7xd"
let notes = [12, 8, 15, 9, 17];
```

le programme doit produire :

```text id="4wo5cg"
Première note : 12
Dernière note : 17
Tableau final : [12, 10, 15, 11, 17]
Nombre de notes : 5
```

## Bilan

**Vous avez appris :**

* à accéder à un élément avec son index ;
* à utiliser un élément dans un calcul ;
* à modifier un élément ;
* à modifier plusieurs éléments ;
* à utiliser `length` pour trouver le dernier index ;
* à lire un tableau avant et après une modification.

**Vous savez maintenant :**

```text id="5m2vqy"
Tableau
   ↓
Index
   ↓
Lire
   ↓
Modifier
   ↓
Vérifier
```

Dans le prochain tutoriel, vous allez utiliser les **boucles** pour parcourir automatiquement tous les éléments d'un tableau.

## Glossaire

* **Accès** : opération qui permet de lire un élément d'un tableau.
* **Modification** : remplacement d'une valeur par une autre.
* **Index** : position d'un élément dans un tableau.
* **Affectation** : opération qui donne une nouvelle valeur à une variable ou à un élément.
* **`length`** : propriété qui indique le nombre d'éléments du tableau.
* **Premier élément** : élément situé à l'index `0`.
* **Dernier élément** : élément situé à l'index `length - 1`.
* **`undefined`** : valeur obtenue lorsqu'on lit une position qui ne contient pas d'élément.
