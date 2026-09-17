---
title: "Construire des boucles"
layout: tuto
slug: "construire-boucles"
permalink: /tutos/:slug/
tuto_id: "T.121.123"
type: "classique"
version: "normal"
ua: "UA.121.12"
nav_order: 3
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **répéter une action** dans un programme JavaScript.

Vous allez découvrir :

* le principe d'une boucle ;
* le compteur ;
* la condition de répétition ;
* la condition d'arrêt ;
* la boucle `for` ;
* la boucle `while`.

À la fin du tutoriel, vous devez être capable de construire un traitement simple comme :

```text
Répéter une action plusieurs fois
        ↓
Vérifier la condition
        ↓
Continuer ou arrêter
```

## 2. Prérequis

Vous devez savoir :

* créer et exécuter un fichier JavaScript avec Node.js ;
* utiliser une variable ;
* utiliser `console.log()` ;
* comprendre `true` et `false` ;
* comprendre les expressions booléennes ;
* utiliser les opérateurs de comparaison ;
* utiliser une condition avec `if`.

Exemple :

```javascript
let age = 20;

if (age >= 18) {
    console.log("Majeur");
}
```

Vous devez comprendre qu'une condition peut être vraie ou fausse.

## Données de départ

### JavaScript

Créez un fichier :

```text
boucles.js
```

Ajoutez :

```javascript
console.log("Début du programme");
```

Exécutez :

```bash
node boucles.js
```

Résultat :

```text
Début du programme
```

## Partie 1 — Théorie

### 1.1. Le principe d'une répétition

Un programme doit parfois réaliser plusieurs fois la même action.

Exemple :

```text
Afficher "Bonjour"
Afficher "Bonjour"
Afficher "Bonjour"
```

On peut décrire ce traitement plus simplement :

```text
Répéter 3 fois :
    afficher "Bonjour"
```

Une **boucle** permet justement de répéter une partie du programme.

Le principe général est :

```text
Début
  ↓
Action
  ↓
Vérifier
  ↓
Continuer ?
  ├── Oui → recommencer
  └── Non → arrêter
```

### 1.2. Pourquoi utiliser une boucle ?

Sans boucle, il faudrait écrire plusieurs fois la même instruction.

Exemple :

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Avec une boucle, le programme peut répéter une même action.

L'objectif est donc de remplacer une répétition écrite plusieurs fois par un traitement contrôlé.

### 1.3. Le compteur

Un **compteur** est une variable qui évolue pour compter les répétitions.

Exemple :

```javascript
let compteur = 1;
```

Puis :

```text
compteur = 1
compteur = 2
compteur = 3
compteur = 4
compteur = 5
```

Le compteur permet de savoir où se trouve le programme dans la répétition.

On peut représenter le principe :

```text
Initialiser le compteur
        ↓
Exécuter l'action
        ↓
Modifier le compteur
        ↓
Vérifier la condition
        ↓
Continuer ou arrêter
```

### 1.4. La condition d'arrêt

Une boucle doit savoir **quand elle doit s'arrêter**.

Exemple :

```text
Afficher les nombres jusqu'à 5
```

Le traitement doit donc avoir une règle comme :

```text
Continuer tant que le compteur est inférieur ou égal à 5.
```

Lorsque le compteur dépasse cette limite, la boucle s'arrête.

On peut représenter :

```text
compteur = 1
     ↓
1 <= 5 ? → oui
     ↓
action
     ↓
compteur = 2
     ↓
2 <= 5 ? → oui
     ↓
action
     ↓
...
     ↓
6 <= 5 ? → non
     ↓
arrêt
```

La condition d'arrêt empêche la boucle de continuer indéfiniment.

### 1.5. La boucle `for`

La boucle `for` est pratique lorsque la répétition utilise un compteur.

Structure :

```javascript
for (initialisation; condition; évolution) {
    action;
}
```

Exemple :

```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```

Résultat :

```text
1
2
3
4
5
```

La boucle possède trois parties :

```text
initialisation
      ↓
   condition
      ↓
   évolution
```

Dans :

```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```

on a :

```text
Initialisation : compteur = 1
Condition      : compteur <= 5
Évolution      : compteur++
Action         : afficher compteur
```

### 1.6. Comprendre `compteur++`

L'instruction :

```javascript
compteur++;
```

augmente la valeur de `compteur` de `1`.

Par exemple :

```text
1 → 2 → 3 → 4 → 5
```

Elle permet au compteur de progresser.

Sans évolution du compteur, une boucle basée sur ce compteur pourrait ne jamais atteindre sa condition d'arrêt.

### 1.7. La boucle `while`

La boucle `while` permet également de répéter une action.

Structure :

```javascript
while (condition) {
    action;
}
```

Exemple :

```javascript
let compteur = 1;

while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```

Résultat :

```text
1
2
3
4
5
```

Ici, le compteur est écrit séparément.

Le programme fonctionne ainsi :

```text
Initialiser compteur
        ↓
Vérifier la condition
        ↓
Exécuter l'action
        ↓
Modifier compteur
        ↓
Vérifier à nouveau
```

### 1.8. `for` et `while`

Les deux permettent de répéter une action.

Avec `for` :

```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```

Avec `while` :

```javascript
let compteur = 1;

while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```

Les deux programmes produisent :

```text
1
2
3
4
5
```

La différence principale est surtout dans la manière d'écrire et d'organiser la répétition.

### 1.9. Une boucle peut contenir une condition

Une boucle peut être combinée avec `if`.

Exemple :

```javascript
for (let nombre = 1; nombre <= 5; nombre++) {
    if (nombre % 2 === 0) {
        console.log(nombre);
    }
}
```

Résultat :

```text
2
4
```

La boucle répète le traitement.

La condition sélectionne les valeurs à afficher.

On obtient :

```text
Boucle
   ↓
Valeur
   ↓
Condition
   ↓
Action
```

Cette combinaison sera davantage pratiquée dans les prochains exercices.

### 1.10. Attention à la boucle infinie

Une boucle doit pouvoir atteindre sa condition d'arrêt.

Exemple correct :

```javascript
let compteur = 1;

while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```

Le compteur évolue :

```text
1 → 2 → 3 → 4 → 5 → 6
```

La condition :

```text
compteur <= 5
```

devient alors fausse.

La boucle s'arrête.

Une boucle mal construite peut au contraire continuer sans fin.

### 1.11. À retenir

* Une **boucle** permet de répéter une action.
* Un **compteur** permet de suivre les répétitions.
* Une boucle doit avoir une **condition de répétition**.
* Une boucle doit pouvoir atteindre une **condition d'arrêt**.
* `for` regroupe l'initialisation, la condition et l'évolution du compteur.
* `while` répète tant que sa condition est vraie.
* Une boucle peut contenir une condition `if`.

## Partie 2 — Pratique

### 2.1. Afficher plusieurs nombres avec `for`

Remplacez le programme de départ par :

```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```

Exécutez :

```bash
node boucles.js
```

Résultat attendu :

```text
1
2
3
4
5
```

Identifiez dans le code :

* l'initialisation ;
* la condition ;
* l'évolution ;
* l'action.

### 2.2. Modifier le nombre de répétitions

Modifiez :

```javascript
for (let compteur = 1; compteur <= 10; compteur++) {
    console.log(compteur);
}
```

Résultat attendu :

```text
1
2
3
4
5
6
7
8
9
10
```

Puis modifiez la valeur finale pour afficher seulement :

```text
1
2
3
4
```

### 2.3. Compter à partir d'une autre valeur

Écrivez :

```javascript
for (let compteur = 5; compteur <= 10; compteur++) {
    console.log(compteur);
}
```

Résultat attendu :

```text
5
6
7
8
9
10
```

Observez que la valeur initiale du compteur peut changer.

### 2.4. Utiliser `while`

Remplacez le code par :

```javascript
let compteur = 1;

while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```

Résultat attendu :

```text
1
2
3
4
5
```

Identifiez :

* la valeur initiale ;
* la condition ;
* l'action ;
* l'évolution ;
* l'arrêt.

### 2.5. Modifier la condition d'arrêt

Modifiez :

```javascript
let compteur = 1;

while (compteur <= 3) {
    console.log(compteur);
    compteur++;
}
```

Résultat attendu :

```text
1
2
3
```

Changez ensuite la condition pour afficher les nombres jusqu'à `7`.

### 2.6. Compter dans l'autre sens

Construisez une boucle qui affiche :

```text
5
4
3
2
1
```

Utilisez un compteur qui diminue.

Vous pouvez partir de :

```javascript
for (let compteur = 5; compteur >= 1; compteur--) {
    console.log(compteur);
}
```

Observez le rôle de :

```javascript
compteur--
```

### 2.7. Répéter un message

Construisez une boucle qui affiche cinq fois :

```text
Bonjour Madani Ali
```

Le programme doit produire :

```text
Bonjour Madani Ali
Bonjour Madani Ali
Bonjour Madani Ali
Bonjour Madani Ali
Bonjour Madani Ali
```

Utilisez un compteur.

### 2.8. Utiliser une condition dans une boucle

Construisez un programme qui parcourt les nombres de `1` à `10`.

Pour chaque nombre, vérifiez s'il est pair.

Le résultat attendu est :

```text
2
4
6
8
10
```

Utilisez :

* une boucle `for` ;
* une condition `if`.

Ne cherchez pas encore à optimiser le programme.

L'objectif est de comprendre :

```text
répéter
    vérifier
    afficher si la règle est vraie
```

### 2.9. Comprendre l'arrêt d'une boucle

Observez :

```javascript
let compteur = 1;

while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```

Répondez aux questions :

1. Quelle est la première valeur de `compteur` ?
2. Quelle est la condition ?
3. Quelle instruction modifie `compteur` ?
4. Quelle est la dernière valeur affichée ?
5. Pourquoi la boucle s'arrête-t-elle ?

### 2.10. Exercice guidé — Afficher une série

Construisez un programme qui affiche les nombres de `1` à `20`.

Le programme doit utiliser une boucle.

Résultat attendu :

```text
1
2
3
...
20
```

Choisissez `for` ou `while`.

### 2.11. Exercice guidé — Compter les nombres pairs

Construisez un programme qui parcourt les nombres de `1` à `20`.

Affichez uniquement les nombres pairs.

Résultat attendu :

```text
2
4
6
8
10
12
14
16
18
20
```

Votre programme doit utiliser :

* une boucle ;
* une condition.

### 2.12. Travail à faire

Créez un programme JavaScript qui :

1. utilise une boucle ;
2. parcourt les nombres de `1` à `10` ;
3. vérifie chaque nombre ;
4. affiche uniquement les nombres pairs.

Testez le programme avec Node.js.

### Livrable

Créez un document Markdown ou un Google Doc contenant :

* le code final ;
* le résultat obtenu ;
* une courte explication de la condition d'arrêt de la boucle.

### Critère de réussite

Le programme :

* utilise correctement une boucle ;
* parcourt les valeurs de `1` à `10` ;
* utilise une condition pour sélectionner les nombres pairs ;
* s'arrête correctement ;
* produit le résultat attendu.

### Résultat attendu

Le programme affiche :

```text
2
4
6
8
10
```

## Bilan

**Vous avez appris :**

* à répéter une action ;
* à utiliser un compteur ;
* à construire une boucle `for` ;
* à construire une boucle `while` ;
* à définir une condition de répétition ;
* à définir une condition d'arrêt ;
* à utiliser une condition `if` dans une boucle.

**Vous savez maintenant :**

* construire une répétition simple ;
* contrôler son nombre d'exécutions ;
* faire évoluer un compteur ;
* vérifier qu'une boucle peut s'arrêter ;
* combiner une boucle simple avec une condition.

Dans le prochain tutoriel, vous allez vous entraîner spécifiquement sur les **conditions** avec plusieurs problèmes courts. Les exercices plus nombreux sur les boucles seront réalisés ensuite dans le T.121.125.

## Glossaire

* **Boucle** : structure qui permet de répéter un traitement.
* **Répétition** : exécution plusieurs fois d'une même action.
* **Compteur** : variable utilisée pour compter ou contrôler les répétitions.
* **Condition de répétition** : règle qui indique si la boucle continue.
* **Condition d'arrêt** : situation dans laquelle la boucle doit s'arrêter.
* **`for`** : boucle adaptée notamment aux répétitions avec un compteur.
* **`while`** : boucle qui continue tant qu'une condition est vraie.
* **Itération** : une exécution d'une boucle.
