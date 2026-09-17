---
title: "Comprendre les expressions booléennes"
layout: tuto
slug: "comprendre-expressions-booleennes"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.121"
type: "classique"
version: "detaille"
ua: "UA.121.12"
nav_order: 1
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à manipuler une notion fondamentale en programmation : l'**expression booléenne**.

Voici les compétences précises que nous allons développer étape par étape :
* Reconnaître et comprendre ce qu'est une valeur booléenne.
* Utiliser les deux valeurs spécifiques de ce type, c'est-à-dire `true` (vrai) et `false` (faux).
* Comparer deux valeurs entre elles pour obtenir un résultat.
* Construire vous-même une expression booléenne logique.
* Utiliser une expression booléenne à l'intérieur d'une variable pour garder son résultat en mémoire.

Le résultat final attendu à la fin de ce tutoriel est simple : vous devez parfaitement comprendre qu'une expression booléenne produit toujours un résultat qui ne peut être que `true` ou `false`.

## 2. Prérequis

Avant de démarrer ce tutoriel, assurez-vous de bien maîtriser les notions suivantes :
* Vous devez savoir créer un fichier JavaScript et l'exécuter dans votre terminal avec Node.js.
* Vous devez être capable de déclarer une variable et d'utiliser la fonction `console.log()` pour afficher des informations à l'écran.
* Vous devez être à l'aise avec l'utilisation de valeurs numériques (les nombres) et textuelles (les chaînes de caractères).

Voici un exemple simple pour vous rafraîchir la mémoire :

```javascript
let age = 20;
console.log(age);
```

Ce petit programme déclare une variable nommée `age` avec la valeur `20`, puis l'affiche.

## Partie 1 — Théorie

### 1.1. Une valeur booléenne

Contrairement aux nombres (comme 10 ou 15) ou aux textes (comme "Bonjour"), une valeur booléenne est beaucoup plus stricte. Elle n'autorise que deux valeurs possibles, et rien d'autre :
* `true` (qui signifie "vrai" en anglais)
* `false` (qui signifie "faux" en anglais)

Voici comment on peut déclarer des variables qui contiennent ces valeurs :
```javascript
let disponible = true;
let termine = false;
```
Dans cet exemple, la variable `disponible` est considérée comme vraie, tandis que la variable `termine` est considérée comme fausse.

### 1.2. Une expression booléenne

Une expression booléenne est une instruction ou un calcul que l'ordinateur va évaluer. Le résultat de cette évaluation sera toujours, sans aucune exception, soit `true` soit `false`.

Observez ces deux exemples très concrets :
* Si on demande à l'ordinateur `10 > 5` (est-ce que 10 est supérieur à 5 ?), le résultat logique est `true`.
* Si on demande à l'ordinateur `10 < 5` (est-ce que 10 est inférieur à 5 ?), le résultat logique est `false`.

L'ordinateur ne fait que répondre par "vrai" ou "faux" à l'affirmation que vous lui proposez.

### 1.3. Comparer deux valeurs

Pour obtenir un résultat booléen, on compare souvent deux éléments entre eux. Voici les différentes manières de faire des comparaisons en JavaScript.

#### Égalité
Pour vérifier si deux valeurs sont strictement identiques, on utilise `===`.
Exemple : `10 === 10` donnera le résultat `true`.

#### Différence
Pour vérifier si deux valeurs sont différentes l'une de l'autre, on utilise `!==`.
Exemple : `10 !== 5` donnera le résultat `true`, car 10 est bien différent de 5.

#### Supérieur
Pour vérifier si la première valeur est plus grande que la deuxième, on utilise `>`.
Exemple : `10 > 5` donnera le résultat `true`.

#### Inférieur
Pour vérifier si la première valeur est plus petite que la deuxième, on utilise `<`.
Exemple : `3 < 8` donnera le résultat `true`.

#### Supérieur ou égal
Pour vérifier si la première valeur est plus grande, ou si elle est parfaitement égale à la deuxième, on utilise `>=`.
Exemple : `18 >= 18` donnera le résultat `true`, car 18 est bien égal à 18.

#### Inférieur ou égal
Pour vérifier si la première valeur est plus petite, ou si elle est parfaitement égale à la deuxième, on utilise `<=`.
Exemple : `15 <= 20` donnera le résultat `true`.

### 1.4. Les opérateurs de comparaison

Voici un tableau récapitulatif des symboles que nous venons d'étudier. Ces symboles s'appellent des "opérateurs de comparaison". Mémorisez-les bien, car vous allez les utiliser très souvent :

| Opérateur | Signification détaillée |
| --------- | ----------------------- |
| `===`     | est strictement égal à  |
| `!==`     | est différent de        |
| `>`       | est supérieur à         |
| `<`       | est inférieur à         |
| `>=`      | est supérieur ou égal à |
| `<=`      | est inférieur ou égal à |

### 1.5. Une expression peut utiliser une variable

Il n'est pas obligatoire de comparer uniquement des nombres fixes. Vous pouvez tout à fait comparer le contenu d'une variable avec un nombre ou avec une autre variable.

Regardons ce petit programme :
```javascript
let age = 20;
console.log(age >= 18); // Le résultat sera true
```
Ici, l'ordinateur remplace mentalement la variable `age` par sa valeur (`20`). Il se demande donc si `20 >= 18`. Comme c'est vrai, il affiche `true`.

### 1.6. Une expression booléenne peut être stockée

Il est très pratique de pouvoir conserver le résultat d'une comparaison pour pouvoir s'en resservir plus tard dans le programme. Pour cela, on va stocker le résultat de l'expression directement dans une variable.

Regardez attentivement cet exemple :
```javascript
let age = 20;
let estMajeur = age >= 18;
console.log(estMajeur); // Le résultat sera true
```
Ici, l'ordinateur évalue d'abord `age >= 18` (ce qui donne `true`), puis il place cette valeur `true` dans la variable que nous avons appelée `estMajeur`.

### 1.7. Combiner deux expressions booléennes

Parfois, la situation est un peu plus complexe et il faut vérifier plusieurs choses en même temps. JavaScript propose des opérateurs logiques pour combiner plusieurs conditions.

#### ET — `&&`
L'opérateur `&&` signifie "ET". Pour que le résultat final soit `true`, il faut absolument que l'expression de gauche **ET** l'expression de droite soient vraies en même temps.

#### OU — `||`
L'opérateur `||` signifie "OU". Pour que le résultat final soit `true`, il suffit qu'au moins l'une des deux expressions soit vraie. (Si les deux sont vraies, cela donne `true` également).

#### NON — `!`
L'opérateur `!` signifie "NON". Son rôle est très simple : il inverse la valeur. Si quelque chose est `true`, il le transforme en `false`, et vice versa.

### 1.8. Comprendre une expression composée

Regardons comment fonctionne une expression un peu plus longue en associant ce que nous venons d'apprendre :

```javascript
let age = 20;
let autorisation = true;
let acces = age >= 18 && autorisation === true; // Le résultat sera true
```
L'ordinateur procède étape par étape. D'abord, il vérifie si `age >= 18` (c'est `true`). Ensuite, il vérifie si `autorisation === true` (c'est `true`). Enfin, il combine les deux résultats avec le "ET" (`true && true`). Puisque les deux côtés sont vrais, le résultat final rangé dans la variable `acces` est `true`.

### 1.9. À retenir

Voici les concepts clés qu'il faut retenir de cette partie théorique :
* Un booléen est une valeur très spéciale qui ne peut être que `true` ou `false`.
* Les opérateurs de comparaison (`===`, `!==`, `>`, `<`, `>=`, `<=`) permettent de créer une relation entre des valeurs.
* Il est possible de combiner plusieurs comparaisons ensemble en utilisant les opérateurs logiques : `&&` (pour ET), `||` (pour OU), et `!` (pour NON).
* Le résultat d'une comparaison logique peut toujours être conservé en mémoire à l'intérieur d'une variable pour faciliter la lecture du code.

## Partie 2 — Pratique

### 2.1. Vérifier une comparaison

Commencez par ouvrir votre éditeur de code et créez un nouveau fichier nommé `booleen.js`. Écrivez ce code à l'intérieur pour vérifier que l'ordinateur sait faire une comparaison simple :
```javascript
console.log(10 > 5); // Ce code affichera true
```
Maintenant, modifiez votre code pour écrire `console.log(10 < 5);` et observez que l'ordinateur vous répond désormais `false`.

### 2.2. Tester plusieurs comparaisons

Pour bien vous habituer aux symboles, copiez ce bloc de code dans votre fichier, exécutez-le, et prenez le temps d'expliquer à voix haute pourquoi chaque ligne donne ce résultat spécifique.
```javascript
console.log(10 === 10);
console.log(10 !== 5);
console.log(10 > 5);
console.log(3 < 8);
console.log(18 >= 18);
console.log(15 <= 20);
```

### 2.3. Utiliser une variable

La puissance des comparaisons prend tout son sens avec des variables dont la valeur peut changer. Essayez ce code en fixant l'âge à 20 :
```javascript
let age = 20;
console.log(age >= 18);
```
À présent, changez la toute première ligne pour définir `let age = 15;`. Exécutez de nouveau votre programme et expliquez pourquoi le résultat de la comparaison s'est modifié.

### 2.4. Stocker le résultat

Plutôt que d'afficher directement le résultat, nous allons l'enregistrer dans une variable dédiée. Cela rend le code beaucoup plus facile à lire.
```javascript
let age = 20;
let estMajeur = age >= 18;
console.log(estMajeur);
```
Faites le test en remplaçant la valeur de la variable `age` par `15` et vérifiez que `estMajeur` prend bien la valeur `false`.

### 2.5. Utiliser `&&`

Testons l'opérateur "ET". Les deux conditions doivent absolument être validées.
```javascript
let age = 20;
let autorisation = true;
let acces = age >= 18 && autorisation === true;
console.log(acces);
```
Maintenant, pour bien comprendre que la moindre condition fausse annule le tout, passez la variable `autorisation` à la valeur `false` et testez votre programme. Vous remarquerez que l'accès passe à `false`.

### 2.6. Utiliser `||`

Testons l'opérateur "OU". Une seule condition valide suffit pour que le tout soit vrai.
```javascript
let membre = false;
let invitation = true;
let entree = membre === true || invitation === true;
console.log(entree);
```
Bien que la personne ne soit pas membre (`false`), elle possède une invitation (`true`). L'entrée est donc autorisée. Changez l'invitation à `false` et constatez que l'entrée est refusée, car aucune des deux conditions n'est remplie.

### 2.7. Utiliser `!`

Testons l'opérateur d'inversion. Son rôle est de donner exactement l'inverse de la valeur qu'on lui donne. Testez d'abord avec `true`, puis avec `false`.
```javascript
let disponible = true;
console.log(!disponible);
```

### 2.8. Exercice — Prévoir le résultat

Lisez attentivement ce tableau. Sans l'aide de l'ordinateur, devinez le résultat de chaque ligne. Une fois que vous êtes sûr de vous, écrivez un `console.log()` pour chaque ligne afin de vérifier vos hypothèses.

| Expression      | Résultat attendu |       |   |
| --------------- | ---------------- | ----- | - |
| `5 > 2`         |                  |       |   |
| `5 < 2`         |                  |       |   |
| `10 === 10`     |                  |       |   |
| `10 !== 10`     |                  |       |   |
| `8 >= 8`        |                  |       |   |
| `3 <= 2`        |                  |       |   |
| `true && true`  |                  |       |   |
| `true && false` |                  |       |   |
| `false          |                  | true` |   |
| `!false`        |                  |       |   |

### 2.9. Exercice — Analyser des variables

Voici trois données de départ qui définissent le contexte de l'exercice :
```javascript
let age = 22;
let inscrit = true;
let paiement = false;
```
En vous basant sur ces trois variables, vous devez écrire en JavaScript l'expression booléenne qui permet de répondre à chacune de ces cinq questions :
1. Est-ce que l'âge est supérieur ou égal à 18 ans ?
2. Est-ce que la personne est inscrite ?
3. Est-ce que le paiement a bien été effectué ?
4. Est-ce que l'âge est supérieur ou égal à 18 ans **ET** la personne est-elle inscrite simultanément ?
5. Est-ce que la personne est inscrite **OU** le paiement est-il effectué ?

### Résultat attendu

À la fin de cet apprentissage, vous devez être parfaitement autonome pour évaluer et produire des expressions booléennes de ce type. Vous avez compris qu'un test comme celui-ci aboutira toujours à une conclusion claire (`true` ou `false`).
```javascript
let age = 20;
let estMajeur = age >= 18;
console.log(estMajeur); // Le programme affiche true
```

## Bilan

**Vous avez appris :**
* À différencier les valeurs et les expressions booléennes.
* À manipuler de manière concrète les opérateurs de comparaison et les opérateurs logiques.

**Vous savez maintenant :**
* Construire une expression booléenne par vous-même et vérifier son comportement. Cette compétence est absolument essentielle, car c'est elle qui vous permettra de créer des conditions dans les tutoriels suivants !

## Glossaire

* **Booléen** : Une donnée informatique très basique qui n'accepte que l'une de ces deux valeurs exclusives : `true` (vrai) ou `false` (faux).
* **Comparaison** : Une relation établie entre deux valeurs différentes (par exemple en utilisant `>`, `<`, ou `===`) pour savoir comment elles se situent l'une par rapport à l'autre.
* **Opérateurs logiques** : Des outils (`&&` pour exprimer l'obligation du ET, `||` pour exprimer la flexibilité du OU, et `!` pour exprimer l'opposition du NON) qui permettent de combiner plusieurs règles.
