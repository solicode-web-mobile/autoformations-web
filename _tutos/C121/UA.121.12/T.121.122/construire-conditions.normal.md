---
title: "Construire des conditions"
layout: tuto
slug: "construire-conditions"
permalink: /tutos/:slug/
tuto_id: "T.121.122"
type: "classique"
version: "normal"
ua: "UA.121.12"
nav_order: 2
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à utiliser une **condition** pour contrôler l'exécution d'un programme.

Vous allez apprendre à utiliser :

* `if` ;
* `else` ;
* `else if` ;
* une condition simple ;
* plusieurs conditions.

À la fin du tutoriel, vous devez être capable de construire un traitement de la forme :

```text
Si la condition est vraie
    faire une action

Sinon
    faire une autre action
```

## 2. Prérequis

Vous devez savoir :

* créer et exécuter un fichier JavaScript avec Node.js ;
* utiliser une variable ;
* utiliser `console.log()` ;
* comprendre `true` et `false` ;
* construire une expression booléenne ;
* utiliser les opérateurs de comparaison ;
* utiliser `&&`, `||` et `!`.

Exemple :

```javascript
let age = 20;

let estMajeur = age >= 18;

console.log(estMajeur);
```

Résultat :

```text
true
```

## Données de départ

### JavaScript

Créez un fichier :

```text
conditions.js
```

Ajoutez :

```javascript
let age = 20;

console.log(age >= 18);
```

Exécutez :

```bash
node conditions.js
```

Résultat :

```text
true
```

Cette expression booléenne sera utilisée pour construire une condition.

## Partie 1 — Théorie

### 1.1. Une condition permet de décider

Une expression booléenne permet de savoir si une règle est vraie ou fausse.

Exemple :

```javascript
let age = 20;

age >= 18
```

Le résultat est :

```text
true
```

Mais le programme doit maintenant pouvoir utiliser ce résultat pour décider quoi faire.

On veut par exemple :

```text
Si age >= 18
    afficher "Accès autorisé"
```

C'est le rôle de `if`.

### 1.2. La structure `if`

La forme générale est :

```javascript
if (condition) {
    action;
}
```

Exemple :

```javascript
let age = 20;

if (age >= 18) {
    console.log("Accès autorisé");
}
```

La condition est :

```text
age >= 18
```

Si elle est vraie, le programme exécute le code dans le bloc.

Le fonctionnement est :

```text
Condition
    ↓
true ?
    ↓
Oui
    ↓
Exécuter l'action
```

### 1.3. Que se passe-t-il si la condition est fausse ?

Considérons :

```javascript
let age = 15;

if (age >= 18) {
    console.log("Accès autorisé");
}
```

La condition :

```text
age >= 18
```

donne :

```text
false
```

Le programme n'exécute donc pas l'action.

```text
Condition
    ↓
false
    ↓
L'action n'est pas exécutée
```

### 1.4. Utiliser `else`

On peut prévoir une autre action lorsque la condition est fausse.

La structure est :

```javascript
if (condition) {
    actionA;
} else {
    actionB;
}
```

Exemple :

```javascript
let age = 15;

if (age >= 18) {
    console.log("Accès autorisé");
} else {
    console.log("Accès refusé");
}
```

La logique est :

```text
             age >= 18 ?
             /         \
          true         false
           ↓             ↓
Accès autorisé     Accès refusé
```

Une condition avec `else` permet donc de choisir entre deux chemins.

### 1.5. Utiliser `else if`

Il est parfois nécessaire de vérifier plusieurs règles.

Exemple :

```text
Si la note est supérieure ou égale à 16
    Très bien

Sinon si la note est supérieure ou égale à 10
    Validé

Sinon
    Non validé
```

En JavaScript :

```javascript
let note = 14;

if (note >= 16) {
    console.log("Très bien");
} else if (note >= 10) {
    console.log("Validé");
} else {
    console.log("Non validé");
}
```

Le programme vérifie les conditions dans l'ordre.

```text
note >= 16 ?
    ↓ non

note >= 10 ?
    ↓ oui

"Validé"
```

### 1.6. L'ordre des conditions est important

Considérons :

```javascript
let note = 17;

if (note >= 10) {
    console.log("Validé");
} else if (note >= 16) {
    console.log("Très bien");
}
```

Le programme affiche :

```text
Validé
```

La première condition est déjà vraie.

La deuxième condition n'est donc pas utilisée.

Pour obtenir le comportement attendu, il faut placer la règle la plus précise avant la règle plus générale :

```javascript
let note = 17;

if (note >= 16) {
    console.log("Très bien");
} else if (note >= 10) {
    console.log("Validé");
} else {
    console.log("Non validé");
}
```

Résultat :

```text
Très bien
```

### 1.7. Utiliser une condition avec `&&`

Les expressions booléennes du tutoriel précédent peuvent être utilisées directement dans `if`.

Exemple :

```javascript
let age = 20;
let inscrit = true;

if (age >= 18 && inscrit === true) {
    console.log("Accès autorisé");
}
```

Les deux règles doivent être vraies :

```text
age >= 18
ET
inscrit === true
```

### 1.8. Utiliser une condition avec `||`

Avec `||`, une des deux expressions peut être vraie.

Exemple :

```javascript
let membre = false;
let invitation = true;

if (membre === true || invitation === true) {
    console.log("Accès autorisé");
}
```

La personne peut entrer si :

```text
elle est membre
OU
elle possède une invitation
```

### 1.9. Une condition contrôle une action

Le principe général est :

```text
Donnée
   ↓
Expression booléenne
   ↓
Condition
   ↓
Action
```

Exemple :

```javascript
let nombre = 8;

if (nombre > 0) {
    console.log("Le nombre est positif");
}
```

Ici :

```text
nombre
  ↓
nombre > 0
  ↓
true
  ↓
afficher le message
```

### 1.10. À retenir

* `if` permet d'exécuter une action si une condition est vraie.
* `else` permet de prévoir une action lorsque la condition est fausse.
* `else if` permet de tester une autre condition.
* Les conditions utilisent des expressions booléennes.
* L'ordre des conditions est important.
* Une condition peut utiliser `&&`, `||` ou `!`.
* Une condition permet de contrôler le chemin suivi par le programme.

## Partie 2 — Pratique

### 2.1. Construire une condition simple

Remplacez le code de départ par :

```javascript
let age = 20;

if (age >= 18) {
    console.log("Vous êtes majeur");
}
```

Exécutez :

```bash
node conditions.js
```

Résultat attendu :

```text
Vous êtes majeur
```

Changez ensuite :

```javascript
let age = 15;
```

Exécutez à nouveau.

Aucun message ne doit être affiché.

Observez la différence entre :

```text
age = 20
```

et :

```text
age = 15
```

### 2.2. Ajouter `else`

Modifiez le programme :

```javascript
let age = 15;

if (age >= 18) {
    console.log("Vous êtes majeur");
} else {
    console.log("Vous êtes mineur");
}
```

Exécutez le programme.

Résultat attendu :

```text
Vous êtes mineur
```

Changez ensuite :

```javascript
let age = 22;
```

Résultat attendu :

```text
Vous êtes majeur
```

### 2.3. Utiliser `else if`

Créez un programme qui analyse une note.

Utilisez les règles suivantes :

```text
16 ou plus → Très bien
10 à 15 → Validé
moins de 10 → Non validé
```

Commencez avec :

```javascript
let note = 14;
```

Construisez la condition.

Résultat attendu :

```text
Validé
```

Testez ensuite avec :

```text
17
```

Puis :

```text
8
```

Vérifiez que le programme produit le bon résultat dans les trois cas.

### 2.4. Vérifier un nombre

Créez le programme suivant :

```javascript
let nombre = 7;
```

Le programme doit afficher :

```text
Positif
```

si le nombre est supérieur à zéro.

Sinon, il doit afficher :

```text
Négatif ou nul
```

Utilisez `if` et `else`.

### 2.5. Trouver le maximum de deux valeurs

Créez :

```javascript
let a = 12;
let b = 8;
```

Le programme doit afficher la plus grande valeur.

Pour ces données :

```text
12
```

doit être affiché.

Testez ensuite avec :

```javascript
let a = 5;
let b = 13;
```

Le résultat doit être :

```text
13
```

### 2.6. Utiliser `&&`

Créez :

```javascript
let age = 22;
let inscrit = true;
```

Le programme doit afficher :

```text
Accès autorisé
```

seulement si :

```text
age >= 18
```

et :

```text
inscrit === true
```

Utilisez une seule condition avec `&&`.

Testez ensuite les trois situations :

```text
age = 22
inscrit = true
```

```text
age = 22
inscrit = false
```

```text
age = 16
inscrit = true
```

Observez les résultats.

### 2.7. Utiliser `||`

Créez :

```javascript
let membre = false;
let invitation = true;
```

Le programme doit autoriser l'accès si la personne est :

```text
membre
OU
invitée
```

Utilisez `||`.

Testez ensuite :

```text
membre = false
invitation = false
```

Le programme ne doit pas autoriser l'accès.

### 2.8. Exercice — Classer une note

Écrivez un programme qui reçoit une note :

```javascript
let note = 12;
```

Le programme doit afficher :

```text
Très bien
```

pour une note de `16` à `20`.

```text
Validé
```

pour une note de `10` à `15`.

```text
Non validé
```

pour une note inférieure à `10`.

Testez au minimum :

```text
8
10
15
16
20
```

### 2.9. Exercice — Déterminer le maximum

Écrivez un programme avec :

```javascript
let a = 18;
let b = 12;
let c = 15;
```

Le programme doit afficher la plus grande valeur.

Testez ensuite avec d'autres valeurs.

Le programme doit fonctionner sans modifier la structure du traitement.

### 2.10. Exercice — Autoriser ou refuser un accès

Un utilisateur peut accéder à une application si :

```text
âge >= 18
ET
compte actif
```

Utilisez :

```javascript
let age = 25;
let compteActif = true;
```

Construisez le traitement.

Le programme doit afficher :

```text
Accès autorisé
```

ou :

```text
Accès refusé
```

Testez différentes combinaisons de valeurs.

### 2.11. Travail à faire

Créez un fichier :

```text
conditions.js
```

Construisez un petit programme qui :

1. possède une note ;
2. détermine si la note est valide ;
3. distingue trois niveaux :

   * `Très bien` ;
   * `Validé` ;
   * `Non validé` ;
4. affiche le résultat dans la console.

Testez le programme avec plusieurs notes.

### Livrable

Créez un document Markdown ou un Google Doc contenant :

* le code final ;
* trois exemples de test ;
* le résultat obtenu pour chaque test.

### Critère de réussite

Le programme :

* utilise correctement `if`, `else if` et `else` ;
* produit un seul résultat adapté à la note ;
* fonctionne avec plusieurs valeurs ;
* ne contient pas de boucle.

### Résultat attendu

Pour une note de :

```javascript
let note = 17;
```

le programme doit afficher :

```text
Très bien
```

Pour :

```javascript
let note = 12;
```

il doit afficher :

```text
Validé
```

Pour :

```javascript
let note = 7;
```

il doit afficher :

```text
Non validé
```

## Bilan

**Vous avez appris :**

* à construire une condition avec `if` ;
* à utiliser `else` ;
* à utiliser `else if` ;
* à construire plusieurs chemins d'exécution ;
* à utiliser des expressions booléennes dans une condition ;
* à utiliser `&&` et `||` dans une condition.

**Vous savez maintenant :**

* prendre une décision dans un programme ;
* choisir une action selon une règle ;
* traiter plusieurs cas ;
* tester une condition avec différentes valeurs.

Dans le prochain tutoriel, vous allez apprendre à **répéter un traitement avec les boucles `for` et `while`**.

## Glossaire

* **Condition** : règle utilisée pour décider quelle action exécuter.
* **`if`** : exécute un bloc lorsque la condition est vraie.
* **`else`** : exécute un autre bloc lorsque la condition précédente est fausse.
* **`else if`** : permet de tester une autre condition.
* **Bloc** : ensemble d'instructions placé entre `{` et `}`.
* **Chemin d'exécution** : suite d'actions suivie par le programme.
* **Condition simple** : condition qui vérifie une seule règle.
* **Conditions multiples** : plusieurs règles vérifiées successivement ou combinées.
