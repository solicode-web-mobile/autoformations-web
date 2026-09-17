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

Apprendre à utiliser une **condition** pour contrôler le déroulement de votre programme.

Une condition permet à l'ordinateur de faire des choix en fonction des données. Vous allez développer les compétences suivantes :
* Utiliser `if` pour exécuter une action sous condition.
* Gérer une alternative avec `else`.
* Traiter plusieurs cas avec `else if`.
* Combiner ces instructions pour des logiques simples ou multiples.

À la fin de ce tutoriel, vous saurez construire des programmes qui réagissent de manière différente selon les données d'entrée.

## 2. Prérequis

Avant de continuer, assurez-vous de maîtriser :
* L'exécution d'un fichier JavaScript avec Node.js.
* L'utilisation de variables et de `console.log()`.
* La création d'expressions booléennes (`===`, `>`, `&&`, `||`).

## Données de départ

### JavaScript

Créez un fichier `conditions.js` et ajoutez ce code de départ :

```javascript
let age = 20;
console.log(age >= 18); // Le programme affichera true
```

## Partie 1 — Théorie

### 1.1. Une condition permet de décider

Une condition permet à l'ordinateur d'agir selon une règle établie. Par exemple : "Si l'âge est supérieur ou égal à 18, alors l'accès est autorisé". Le programme évaluera cette règle et agira en conséquence.

### 1.2. La structure `if`

Le mot-clé `if` ("Si") permet d'exécuter un bloc de code uniquement si la condition est évaluée à `true`.

```javascript
let age = 20;
if (age >= 18) {
    console.log("Accès autorisé");
}
```
L'ordinateur vérifie `age >= 18`. Comme c'est vrai, il exécute le contenu du bloc.

### 1.3. Que se passe-t-il si la condition est fausse ?

Si la condition est fausse (par exemple, si l'âge est de 15), l'ordinateur ignore complètement le bloc de code et passe à la suite du programme. Rien ne s'affichera.

### 1.4. Utiliser `else`

Pour prévoir une action alternative lorsque la condition est fausse, on utilise `else` ("Sinon").

```javascript
if (age >= 18) {
    console.log("Accès autorisé");
} else {
    console.log("Accès refusé");
}
```
Le programme a maintenant deux chemins : il exécute le premier bloc si c'est vrai, et le second si c'est faux.

### 1.5. Utiliser `else if`

Pour traiter plusieurs cas à la suite, on utilise `else if` ("Sinon si").

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
L'ordinateur vérifie les conditions l'une après l'autre. S'il n'en valide aucune, il exécute le `else` final.

### 1.6. L'ordre des conditions est important

L'ordinateur exécute uniquement le **premier** test qui retourne `true` et ignore tous les suivants. Il faut donc toujours écrire vos conditions de la plus spécifique à la plus générale.

### 1.7. Utiliser une condition avec `&&`

Pour que deux règles soient validées en même temps, utilisez l'opérateur `&&` (ET).

```javascript
if (age >= 18 && inscrit === true) {
    console.log("Accès autorisé");
}
```

### 1.8. Utiliser une condition avec `||`

S'il suffit qu'une seule de deux règles soit vraie, utilisez l'opérateur `||` (OU).

```javascript
if (membre === true || invitation === true) {
    console.log("Accès autorisé");
}
```

### 1.9. Une condition contrôle une action

Le principe général est : Donnée → Expression booléenne → Condition (`if`) → Action déclenchée.

### 1.10. À retenir

* Les instructions de décision : `if`, `else if`, `else`.
* L'ordre des conditions est primordial.
* Vous pouvez utiliser `&&` et `||` dans les conditions.

## Partie 2 — Pratique

### 2.1. Construire une condition simple

Remplacez le contenu de `conditions.js` par :
```javascript
let age = 20;
if (age >= 18) {
    console.log("Vous êtes majeur");
}
```
Testez-le. Ensuite, changez l'âge à `15` et testez à nouveau (il ne devrait rien se passer).

### 2.2. Ajouter `else`

Ajoutez le cas alternatif :
```javascript
let age = 15;
if (age >= 18) {
    console.log("Vous êtes majeur");
} else {
    console.log("Vous êtes mineur");
}
```
Testez avec `15` puis `22` pour observer les deux chemins.

### 2.3. Utiliser `else if`

Partez de la variable `let note = 14;`.
Construisez un bloc pour afficher :
* "Très bien" (si >= 16)
* "Validé" (si >= 10)
* "Non validé" (dans tous les autres cas).
Testez avec les notes 14, 17 et 8.

### 2.4. Vérifier un nombre

Donnée : `let nombre = 7;`
Écrivez un programme affichant "Positif" si le nombre est supérieur à 0, et "Négatif ou nul" dans le cas contraire. Testez avec `7`, `-3`, et `0`.

### 2.5. Trouver le maximum de deux valeurs

Données : `let a = 12; let b = 8;`
Écrivez un programme qui affiche la valeur la plus grande des deux. Testez avec différents cas (ex: 5 et 13, ou 10 et 10).

### 2.6. Utiliser `&&`

Données : `let age = 22; let inscrit = true;`
Écrivez une condition pour afficher "Accès autorisé" seulement si l'utilisateur a 18 ans ou plus **ET** s'il est inscrit. Passez `inscrit` à `false` pour vérifier.

### 2.7. Utiliser `||`

Données : `let membre = false; let invitation = true;`
Autorisez l'accès si la personne est membre **OU** invitée. Testez diverses combinaisons.

### 2.8. Exercice — Classer une note

Écrivez un programme classant une note : "Très bien" (16-20), "Validé" (10-15), "Non validé" (<10). Testez les valeurs 8, 10, 15, 16, et 20.

### 2.9. Exercice — Déterminer le maximum

Trouvez et affichez le maximum de ces trois variables :
```javascript
let a = 18; let b = 12; let c = 15;
```

### 2.10. Exercice — Autoriser ou refuser un accès

Votre programme doit accorder l'accès si la personne est majeure **ET** que son compte est actif. Testez plusieurs combinaisons.

### 2.11. Travail à faire

1. Définissez une variable avec une note scolaire.
2. Créez un bloc conditionnel pour afficher "Très bien", "Validé", ou "Non validé".
3. Testez plusieurs cas pour vérifier votre logique.

### Livrable

Préparez un document (Markdown ou Google Doc) contenant votre code final ainsi que 3 tests exécutés avec leurs résultats respectifs.

### Critère de réussite

Utilisation appropriée de `if`, `else if` et `else` sans utiliser de boucles. Le programme doit afficher la bonne mention selon la note testée.

### Résultat attendu

* Pour `note = 17` → `Très bien`
* Pour `note = 12` → `Validé`
* Pour `note = 7` → `Non validé`

## Bilan

**Vous avez appris :**
* À utiliser `if`, `else`, et `else if` pour créer des alternatives.
* À gérer l'ordre de traitement des règles métiers.

**Vous savez maintenant :**
* Intégrer de la logique de décision dans votre code pour que votre programme réagisse différemment selon les données en entrée.

## Glossaire

* **Condition** : Règle permettant de décider quel chemin emprunter (`if/else if/else`).
* **Bloc** : Instructions regroupées entre `{` et `}` qui s'exécutent si la condition liée est vraie.
