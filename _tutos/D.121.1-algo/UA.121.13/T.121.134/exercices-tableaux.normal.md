---
title: "Exercices sur les tableaux"
layout: tuto
slug: "exercices-tableaux"
permalink: /tutos/:slug/
tuto_id: "T.121.134"
type: "classique"
version: "normal"
ua: "UA.121.13"
nav_order: 4
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez vous entraîner à traiter des **tableaux** avec JavaScript.

Vous allez réutiliser :

* les tableaux ;
* les index ;
* `length` ;
* les boucles ;
* les conditions ;
* les compteurs ;
* les accumulateurs.

Vous allez résoudre des problèmes de plus en plus complets :

```text
Afficher
   ↓
Compter
   ↓
Additionner
   ↓
Calculer une moyenne
   ↓
Sélectionner
   ↓
Combiner plusieurs traitements
```

Aucun nouvel algorithme de recherche n'est introduit dans ce tutoriel.

## 2. Prérequis

Vous devez savoir :

* créer un tableau ;
* lire un élément avec son index ;
* modifier un élément ;
* utiliser `length` ;
* parcourir un tableau avec `for` ;
* utiliser `if` dans une boucle ;
* utiliser un compteur ;
* utiliser un accumulateur.

Exemple :

```javascript id="h5qg1m"
let nombres = [4, 7, 2, 9, 5];

let somme = 0;

for (let i = 0; i < nombres.length; i++) {
    somme = somme + nombres[i];
}

console.log(somme);
```

Résultat :

```text id="q9ikqk"
27
```

## Données de départ

### JavaScript

Créez un fichier :

```text id="3x6r5k"
exercices-tableaux.js
```

Commencez avec :

```javascript id="kgq5k7"
let nombres = [4, 7, 2, 9, 5, 8];

console.log(nombres);
```

Exécutez :

```bash id="xj7pk2"
node exercices-tableaux.js
```

Résultat :

```text id="0tc3w2"
[ 4, 7, 2, 9, 5, 8 ]
```

## Partie 1 — Théorie

### 1.1. Méthode pour résoudre un exercice sur un tableau

Avant de coder, identifiez :

```text id="l3v2or"
1. Le tableau
2. Le traitement demandé
3. La nécessité d'une boucle
4. La condition éventuelle
5. Le résultat à conserver
```

Exemple :

```text id="t5g3hi"
Problème :
Compter les nombres pairs.

Tableau :
[4, 7, 2, 9, 5, 8]

Traitement :
Parcourir le tableau.

Condition :
nombre pair.

Résultat :
un compteur.
```

### 1.2. Afficher les éléments

Pour afficher tous les éléments :

```javascript id="q4z6lt"
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

Le traitement utilise :

```text id="z3q3ww"
boucle
  +
index
  +
length
```

### 1.3. Compter des éléments

Pour compter des éléments qui respectent une règle :

```text id="f6z2st"
compteur = 0

pour chaque élément :
    si la règle est vraie :
        compteur++
```

Exemple :

```javascript id="l0f7h5"
let compteur = 0;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 === 0) {
        compteur++;
    }
}
```

### 1.4. Calculer avec un accumulateur

Pour calculer une somme :

```text id="n5q8rj"
somme = 0

pour chaque élément :
    ajouter l'élément à la somme
```

Exemple :

```javascript id="f64r3o"
let somme = 0;

for (let i = 0; i < nombres.length; i++) {
    somme = somme + nombres[i];
}
```

### 1.5. Sélectionner des éléments

Pour afficher seulement certaines valeurs :

```text id="x0bq6g"
pour chaque élément :
    si la règle est vraie :
        afficher l'élément
```

Exemple :

```javascript id="c7j5sg"
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 === 0) {
        console.log(nombres[i]);
    }
}
```

### 1.6. À retenir

Pour la plupart des exercices de cette étape :

```text id="5ws2h8"
Tableau
   ↓
Boucle
   ↓
Élément courant
   ↓
Condition éventuelle
   ↓
Compteur ou accumulateur
   ↓
Résultat
```

## Partie 2 — Pratique

### 2.1. Exercice 1 — Afficher tous les éléments

#### Contexte

On dispose du tableau :

```javascript id="y5x2i8"
let nombres = [4, 7, 2, 9, 5, 8];
```

#### Travail à faire

Affichez tous les éléments avec une boucle.

Résultat attendu :

```text id="2x1a0h"
4
7
2
9
5
8
```

#### Critère de réussite

Chaque élément doit être affiché une seule fois.

---

### 2.2. Exercice 2 — Afficher les index et les valeurs

Avec :

```javascript id="dq1f9a"
let nombres = [4, 7, 2, 9, 5, 8];
```

affichez :

```text id="i7y1xc"
Index : 0 | Valeur : 4
Index : 1 | Valeur : 7
Index : 2 | Valeur : 2
Index : 3 | Valeur : 9
Index : 4 | Valeur : 5
Index : 5 | Valeur : 8
```

L'objectif est de vérifier votre compréhension de `i` et de `nombres[i]`.

---

### 2.3. Exercice 3 — Compter les éléments

Considérez :

```javascript id="fq5m7e"
let nombres = [4, 7, 2, 9, 5, 8];
```

Comptez les éléments avec une boucle.

Résultat attendu :

```text id="l17kvk"
6
```

Utilisez un compteur.

N'utilisez pas directement :

```javascript id="67k1rc"
nombres.length
```

pour obtenir le résultat. L'objectif est de pratiquer le parcours.

---

### 2.4. Exercice 4 — Calculer la somme

Considérez :

```javascript id="q7xqf1"
let nombres = [4, 7, 2, 9, 5, 8];
```

Calculez la somme de tous les éléments.

Résultat attendu :

```text id="n8d2v5"
35
```

Utilisez un accumulateur.

Le principe est :

```text id="c0u7h5"
somme = 0
   ↓
ajouter 4
   ↓
ajouter 7
   ↓
ajouter 2
   ↓
...
```

---

### 2.5. Exercice 5 — Calculer la moyenne

Considérez :

```javascript id="4grm7n"
let notes = [12, 15, 8, 17];
```

Calculez la moyenne.

Résultat attendu :

```text id="v0u7mw"
13
```

Votre programme doit :

1. parcourir le tableau ;
2. calculer la somme ;
3. diviser par le nombre d'éléments.

---

### 2.6. Exercice 6 — Afficher les valeurs paires

Considérez :

```javascript id="ig5nms"
let nombres = [4, 7, 2, 9, 5, 8];
```

Affichez uniquement les valeurs paires.

Résultat attendu :

```text id="c4s4eh"
4
2
8
```

Utilisez :

* une boucle ;
* une condition.

---

### 2.7. Exercice 7 — Afficher les valeurs impaires

Avec le même tableau :

```javascript id="5ih7fu"
let nombres = [4, 7, 2, 9, 5, 8];
```

affichez uniquement les valeurs impaires.

Résultat attendu :

```text id="8h3d6c"
7
9
5
```

Vous devez modifier uniquement la règle de sélection.

---

### 2.8. Exercice 8 — Compter les valeurs paires

Considérez :

```javascript id="l4d5nn"
let nombres = [4, 7, 2, 9, 5, 8];
```

Comptez les valeurs paires.

Résultat attendu :

```text id="0h9y2t"
3
```

Le traitement doit être :

```text id="trh6mo"
Parcourir
   ↓
Tester si pair
   ↓
Compter
```

---

### 2.9. Exercice 9 — Compter les valeurs impaires

Avec :

```javascript id="9mll7c"
let nombres = [4, 7, 2, 9, 5, 8];
```

comptez les nombres impairs.

Résultat attendu :

```text id="l1q3bp"
3
```

---

### 2.10. Exercice 10 — Calculer la somme des valeurs paires

Considérez :

```javascript id="32pmi8"
let nombres = [4, 7, 2, 9, 5, 8];
```

Calculez uniquement :

```text id="6dj3k3"
4 + 2 + 8
```

Résultat attendu :

```text id="r4pcyi"
14
```

Votre traitement doit combiner :

```text id="8b3m66"
boucle
+
condition
+
accumulateur
```

---

### 2.11. Exercice 11 — Calculer la somme des valeurs impaires

Avec :

```javascript id="d07v2c"
let nombres = [4, 7, 2, 9, 5, 8];
```

calculez :

```text id="tn8lkk"
7 + 9 + 5
```

Résultat attendu :

```text id="7z8w72"
21
```

---

### 2.12. Exercice 12 — Compter les notes validées

Considérez :

```javascript id="2l0tq9"
let notes = [12, 8, 15, 9, 17, 6, 10];
```

Une note est validée si :

```text id="psr0as"
note >= 10
```

Comptez les notes validées.

Résultat attendu :

```text id="c49w24"
4
```

---

### 2.13. Exercice 13 — Afficher les notes validées

Avec :

```javascript id="q85l6a"
let notes = [12, 8, 15, 9, 17, 6, 10];
```

affichez seulement les notes validées.

Résultat attendu :

```text id="7q8j6n"
12
15
17
10
```

---

### 2.14. Exercice 14 — Calculer la somme des notes validées

Avec :

```javascript id="l9p6n5"
let notes = [12, 8, 15, 9, 17, 6, 10];
```

calculez la somme des notes supérieures ou égales à `10`.

Les valeurs concernées sont :

```text id="vv3v5e"
12
15
17
10
```

Résultat attendu :

```text id="1l2jse"
54
```

---

### 2.15. Exercice 15 — Calculer la moyenne des notes validées

Avec le même tableau :

```javascript id="tp2q1f"
let notes = [12, 8, 15, 9, 17, 6, 10];
```

calculez uniquement la moyenne des notes validées.

Résultat attendu :

```text id="x1yq1p"
13.5
```

Pour résoudre le problème, vous avez besoin de :

```text id="5p54ye"
une boucle
+
une condition
+
une somme
+
un compteur
```

---

### 2.16. Exercice 16 — Compter les valeurs supérieures à une limite

Considérez :

```javascript id="2mdr4k"
let nombres = [8, 15, 7, 20, 12, 5];
```

Comptez les valeurs supérieures à `10`.

Les valeurs concernées sont :

```text id="pf1r36"
15
20
12
```

Résultat attendu :

```text id="5z5frj"
3
```

---

### 2.17. Exercice 17 — Calculer la somme supérieure à une limite

Avec :

```javascript id="q4q29x"
let nombres = [8, 15, 7, 20, 12, 5];
```

calculez la somme des valeurs supérieures à `10`.

Résultat attendu :

```text id="3g0rhv"
47
```

---

### 2.18. Exercice 18 — Calculer une moyenne avec une condition

Considérez :

```javascript id="dr9t8h"
let notes = [8, 12, 15, 7, 18, 10];
```

Calculez la moyenne uniquement des notes supérieures ou égales à `10`.

Les notes utilisées sont :

```text id="k4u1xw"
12
15
18
10
```

La moyenne attendue est :

```text id="6xk19v"
13.75
```

---

### 2.19. Exercice 19 — Analyser une liste de prix

Considérez :

```javascript id="lo1xpj"
let prix = [50, 120, 80, 200, 75, 150];
```

Construisez un programme qui :

1. affiche tous les prix ;
2. compte les prix supérieurs ou égaux à `100` ;
3. calcule la somme de ces prix.

Résultats attendus :

```text id="2wk6o8"
Nombre de prix >= 100 : 3
Somme des prix >= 100 : 470
```

---

### 2.20. Exercice 20 — Analyser une liste de personnes

Considérez :

```javascript id="qsxwzd"
let ages = [16, 21, 17, 25, 19, 14, 30];
```

Une personne est adulte si :

```text id="j5pr2x"
age >= 18
```

Construisez un programme qui :

1. compte les adultes ;
2. compte les mineurs ;
3. calcule la somme des âges des adultes.

Résultats attendus :

```text id="2r3f1i"
Adultes : 4
Mineurs : 3
Somme des âges des adultes : 95
```

---

### 2.21. Exercice de synthèse — Analyser une collection

Considérez :

```javascript id="7fhn0x"
let nombres = [5, 12, 8, 19, 3, 14, 7, 20];
```

Construisez un programme qui :

1. affiche tous les nombres ;
2. compte les nombres pairs ;
3. compte les nombres impairs ;
4. calcule la somme totale ;
5. calcule la somme des nombres pairs ;
6. calcule la moyenne de tous les nombres.

Les résultats attendus sont :

```text id="cd6m7m"
Nombres pairs : 4
Nombres impairs : 4
Somme totale : 88
Somme des pairs : 54
Moyenne : 11
```

Essayez de réaliser les traitements dans **une seule boucle** lorsque cela reste simple et compréhensible.

---

### 2.22. Exercice de synthèse — Analyser des notes

Considérez :

```javascript id="y3uk1k"
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Construisez un programme qui calcule :

* le nombre total de notes ;
* la somme des notes ;
* la moyenne générale ;
* le nombre de notes validées ;
* la somme des notes validées ;
* la moyenne des notes validées.

Les résultats attendus sont :

```text id="e22jiv"
Nombre de notes : 8
Somme : 91
Moyenne générale : 11.375
Notes validées : 5
Somme des notes validées : 68
Moyenne des notes validées : 13.6
```

### 2.23. Travail à faire

Choisissez **trois exercices** parmi les exercices 14 à 22.

Pour chaque exercice :

1. identifiez le tableau ;
2. identifiez le traitement ;
3. identifiez la condition éventuelle ;
4. identifiez le compteur ou l'accumulateur ;
5. écrivez le programme ;
6. testez le résultat avec au moins une autre donnée.

Pour un des trois exercices, réalisez le traitement avec **une seule boucle**.

### Livrable

Créez un document Markdown ou un Google Doc contenant, pour chaque exercice :

```text id="x6jtyk"
Exercice

1. Données
2. Règle
3. Code JavaScript
4. Test
5. Résultat
```

### Critère de réussite

Le travail est réussi si :

* le tableau est correctement parcouru ;
* `i` et `length` sont correctement utilisés ;
* les conditions sont correctes ;
* les compteurs sont correctement initialisés ;
* les accumulateurs sont correctement initialisés ;
* les résultats sont corrects ;
* le programme fonctionne avec plusieurs données.

### Résultat attendu

À la fin de ce tutoriel, vous devez savoir construire un traitement comme :

```text id="2ytjtl"
Tableau
   ↓
Parcourir
   ↓
Pour chaque élément
   ↓
Vérifier une règle
   ↓
Compter / additionner
   ↓
Calculer un résultat
```

Vous devez être capable de traiter un tableau sans traiter chaque élément manuellement.

## Bilan

**Vous avez appris :**

* à parcourir différents tableaux ;
* à compter des éléments ;
* à calculer des sommes ;
* à calculer des moyennes ;
* à sélectionner des valeurs selon une règle ;
* à combiner boucle, condition, compteur et accumulateur ;
* à résoudre plusieurs problèmes sur une collection.

**Vous savez maintenant :**

```text id="kq0h2r"
Tableau
   ↓
Parcours
   ↓
Traitement de chaque élément
   ↓
Résultat
```

Vous disposez maintenant des bases nécessaires pour construire des **algorithmes élémentaires sur les tableaux**.

Dans le prochain tutoriel, vous apprendrez à construire des traitements classiques comme la **recherche d'une valeur, la recherche du maximum et la recherche du minimum**.

## Glossaire

* **Parcours** : traitement des éléments d'un tableau un par un.
* **Compteur** : variable qui compte les éléments respectant une règle.
* **Accumulateur** : variable qui conserve progressivement un résultat.
* **Condition** : règle permettant de sélectionner certains éléments.
* **Moyenne** : somme des valeurs divisée par leur nombre.
* **Sélection** : choix des éléments qui respectent une condition.
* **Collection** : ensemble de plusieurs valeurs regroupées dans une structure, comme un tableau.
