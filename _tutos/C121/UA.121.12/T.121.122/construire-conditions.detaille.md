---
title: "Construire des conditions"
layout: tuto
slug: "construire-conditions"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.122"
type: "classique"
version: "detaille"
ua: "UA.121.12"
nav_order: 2
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez franchir un cap important : apprendre à utiliser une **condition** pour contrôler le déroulement de votre programme.

Une condition permet à l'ordinateur de faire des choix. C'est l'essence même de l'intelligence d'un programme. Voici les compétences que vous allez développer :
* Comprendre le mot-clé `if` et savoir l'utiliser pour exécuter une action sous condition.
* Gérer l'alternative avec `else`.
* Traiter plusieurs cas successifs avec `else if`.
* Combiner ces instructions pour créer des logiques de décision, qu'elles soient simples ou multiples.

À la fin de ce tutoriel, vous serez capable de construire des programmes qui réagissent différemment selon les données que vous leur fournissez.

## 2. Prérequis

Pour aborder ces notions en toute sérénité, assurez-vous de bien maîtriser les points suivants :
* Vous devez savoir créer un fichier JavaScript et l'exécuter dans votre terminal en utilisant Node.js.
* L'utilisation d'une variable, de la fonction `console.log()` et des valeurs booléennes (`true` et `false`) ne doit plus avoir de secret pour vous.
* Enfin, vous devez être capable de construire une expression booléenne simple, en utilisant des opérateurs comme `===`, `>`, `&&` (ET) ou encore `||` (OU).

## Données de départ

### JavaScript

Avant de plonger dans la théorie, préparez votre espace de travail. Créez un nouveau fichier nommé `conditions.js` et insérez-y le code de départ suivant :

```javascript
let age = 20;
console.log(age >= 18); // Le programme affichera true
```

Ce petit bout de code vous rappelle comment obtenir un résultat booléen. Nous allons nous en servir juste après !

## Partie 1 — Théorie

### 1.1. Une condition permet de décider

Imaginez que vous êtes le portier d'une salle de spectacle. Votre consigne est claire : "Si l'âge de la personne est supérieur ou égal à 18 ans, alors l'accès est autorisé".
En programmation, c'est exactement la même chose. Une condition permet à l'ordinateur d'agir en fonction d'une règle stricte. Il va évaluer la règle, et agir en conséquence.

### 1.2. La structure `if`

Pour traduire le mot "Si" en JavaScript, on utilise le mot-clé `if`. L'ordinateur n'exécutera le bloc de code qui suit que si la condition posée est évaluée à `true` (vraie).

Regardez cet exemple très simple :
```javascript
let age = 20;
if (age >= 18) {
    console.log("Accès autorisé");
}
```
L'ordinateur vérifie : `age >= 18`. Puisque c'est `true`, il entre dans le bloc délimité par les accolades `{ }` et exécute la fonction `console.log()`.

### 1.3. Que se passe-t-il si la condition est fausse ?

C'est une question tout à fait légitime ! Si la condition placée entre les parenthèses du `if` donne le résultat `false` (par exemple, si l'âge est de 15), alors l'ordinateur ignore complètement tout le bloc de code situé entre les accolades. Il passe directement à la suite du programme. Absolument rien ne s'affiche dans ce cas de figure.

### 1.4. Utiliser `else`

Souvent, on ne veut pas seulement agir quand c'est vrai, on veut aussi prévoir une action de secours (une alternative) quand c'est faux. Pour traduire "Sinon", on utilise le mot-clé `else`.

Voici comment l'intégrer à la suite du `if` :
```javascript
if (age >= 18) {
    console.log("Accès autorisé");
} else {
    console.log("Accès refusé");
}
```
Maintenant, le programme possède deux chemins clairs : si c'est vrai, il exécute le premier bloc ; sinon, il exécute le deuxième bloc.

### 1.5. Utiliser `else if`

Parfois, un problème possède plus de deux issues. Par exemple, pour l'attribution d'une mention en fonction d'une note, il y a beaucoup de cas possibles. Pour vérifier plusieurs règles à la suite de manière enchaînée, on utilise `else if` ("Sinon si").

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
Le programme vérifie la première condition. Si elle est fausse, il passe à la deuxième. Si elle est encore fausse, il tombe finalement dans le `else` par défaut.

### 1.6. L'ordre des conditions est important

C'est un point crucial : l'ordre dans lequel vous écrivez vos conditions change tout ! L'ordinateur exécute toujours le **tout premier** test qui donne `true`, et il ignore systématiquement tous les autres, même s'ils auraient pu être vrais également.
Règle d'or : testez toujours du cas le plus spécifique et exigeant (ex: `note >= 16`) vers le cas le plus général (ex: `note >= 10`).

### 1.7. Utiliser une condition avec `&&`

Si l'autorisation dépend de deux règles qui doivent impérativement être validées en même temps, utilisez l'opérateur `&&` (ET) à l'intérieur des parenthèses de votre condition.

```javascript
if (age >= 18 && inscrit === true) {
    console.log("Accès autorisé");
}
```
Ici, si la personne a 20 ans mais n'est pas inscrite, la deuxième partie de la condition fera échouer l'ensemble. L'accès ne sera pas autorisé.

### 1.8. Utiliser une condition avec `||`

Si l'autorisation est plus souple et qu'il suffit qu'une seule des deux règles soit validée pour passer, utilisez l'opérateur `||` (OU).

```javascript
if (membre === true || invitation === true) {
    console.log("Accès autorisé");
}
```
Même si la personne n'est pas membre du club, si elle possède l'invitation, l'expression globale donnera `true` et la porte s'ouvrira.

### 1.9. Une condition contrôle une action

Pour résumer le cheminement de pensée que vous devez adopter :
Vous avez une **donnée** de départ (ex: une variable) → Vous construisez une **expression booléenne** logique avec cette donnée → Vous la placez dans une **condition** (`if`) → Elle va alors déclencher ou empêcher une **action** (ex: un affichage).

### 1.10. À retenir

Voici les concepts majeurs :
* Le trio magique de la prise de décision : `if` (si), `else if` (sinon si), `else` (sinon).
* L'ordre de lecture : le programme lit de haut en bas et s'arrête dès qu'il trouve le premier cas `true`.
* La flexibilité : les parenthèses de la condition acceptent toutes les expressions complexes utilisant les opérateurs `&&` et `||` que vous avez appris précédemment.

## Partie 2 — Pratique

### 2.1. Construire une condition simple

Reprenez votre fichier `conditions.js`. Remplacez tout votre code par ceci :
```javascript
let age = 20;
if (age >= 18) {
    console.log("Vous êtes majeur");
}
```
Exécutez-le dans le terminal. Le message doit s'afficher. Maintenant, changez la première ligne pour affecter la valeur `15` à la variable `age`. Relancez le programme. Vous devriez constater qu'il ne se passe plus rien : l'ordinateur est passé sous silence !

### 2.2. Ajouter `else`

Pour éviter que l'ordinateur ne reste muet, ajoutons une alternative. Complétez votre code de cette manière :
```javascript
let age = 15;
if (age >= 18) {
    console.log("Vous êtes majeur");
} else {
    console.log("Vous êtes mineur");
}
```
Testez maintenant votre programme avec un `age = 15`, puis refaites le test avec un `age = 22`. Observez le cheminement qu'emprunte l'ordinateur.

### 2.3. Utiliser `else if`

Effacez le code précédent. Définissons un nouveau problème basé sur les notes scolaires.
Le code de départ est :
```javascript
let note = 14;
```
Construisez un bloc de condition complet qui respecte ces trois étapes :
* Si la note est `>= 16`, affichez "Très bien".
* Sinon si la note est `>= 10`, affichez "Validé".
* Et sinon (pour tout le reste, c'est-à-dire moins de 10), affichez "Non validé".

Vérifiez que votre structure est solide en la testant avec la note de 14, puis 17, puis enfin 8.

### 2.4. Vérifier un nombre

Voici la donnée : `let nombre = 7;`
À vous de jouer : écrivez un programme utilisant `if` et `else` pour afficher "Positif" si le nombre est strictement supérieur à 0, et afficher "Négatif ou nul" dans le cas contraire. Testez votre code.

### 2.5. Trouver le maximum de deux valeurs

Voici vos données de départ : `let a = 12; let b = 8;`
Créez une structure conditionnelle qui est capable d'identifier et d'afficher la plus grande des deux valeurs (ici, elle doit afficher 12). Modifiez ensuite les variables pour tester avec d'autres valeurs aléatoires.

### 2.6. Utiliser `&&`

Vos données de départ sont les suivantes : `let age = 22; let inscrit = true;`
Écrivez une condition unique qui permet d'afficher "Accès autorisé" uniquement si l'utilisateur est majeur (`age >= 18`) **ET** s'il est inscrit (`inscrit === true`). Amusez-vous à passer `inscrit` à `false` pour vérifier que l'accès se bloque bien.

### 2.7. Utiliser `||`

Vos données : `let membre = false; let invitation = true;`
Écrivez un programme qui autorise l'accès si la personne est membre **OU** si elle possède une invitation. Testez les différentes combinaisons pour bien comprendre la souplesse de l'opérateur OU.

### 2.8. Exercice — Classer une note

C'est l'heure de l'exercice complet ! 
Écrivez un programme qui analyse une variable contenant une note. Il doit afficher : 
* "Très bien" (pour une note de 16 à 20).
* "Validé" (pour une note de 10 à 15).
* "Non validé" (pour une note inférieure à 10).

Pour valider votre exercice, vous devez impérativement tester ces cinq cas : 8, 10, 15, 16, et 20.

### 2.9. Exercice — Déterminer le maximum

Trouvez le maximum parmi trois variables :
```javascript
let a = 18; let b = 12; let c = 15;
```
*Astuce : Vous allez devoir combiner `if`, `else if`, et peut-être même l'opérateur `&&`.*

### 2.10. Exercice — Autoriser ou refuser un accès

Votre programme doit donner l'accès si la personne a 18 ans ou plus, **ET** que son compte est déclaré comme actif. N'hésitez pas à tester l'ensemble des combinaisons possibles (majeur mais inactif, mineur mais actif, etc.).

### 2.11. Travail à faire

Pour valider l'acquisition de vos compétences, vous devez réaliser ce mini-projet :
1. Définissez une variable qui contient une note scolaire.
2. Créez la structure conditionnelle complète pour afficher "Très bien", "Validé", ou "Non validé" selon la note.
3. Testez minutieusement plusieurs notes pour prouver le bon fonctionnement de l'ensemble.

### Livrable

Rédigez un document simple (au format Markdown ou sur un Google Doc). Ce document doit contenir le code final de votre travail à faire, et illustrer avec 3 exemples de test concrets et les résultats que le terminal a affichés.

### Critère de réussite

Votre travail sera considéré comme réussi si :
* Vous avez fait un usage correct et complet de l'enchaînement `if / else if / else`.
* Votre solution n'utilise volontairement aucune boucle.
* L'affichage correspond parfaitement à la réalité de la note testée.

### Résultat attendu

Voici le comportement qu'on attend de votre programme :
* Si je configure `note = 17` → le terminal affiche `Très bien`.
* Si je configure `note = 12` → le terminal affiche `Validé`.
* Si je configure `note = 7` → le terminal affiche `Non validé`.

## Bilan

**Vous avez appris :**
* À utiliser avec aisance les instructions conditionnelles `if`, `else`, et `else if`.
* À construire un arbre de décisions avec plusieurs chemins d'exécution possibles selon les situations.

**Vous savez maintenant :**
* Prendre une décision logique et contrôlée au sein d'un programme informatique. Vous n'écrivez plus de simples suites d'instructions linéaires, mais un programme qui sait s'adapter !

## Glossaire

* **Condition** : C'est la règle de décision en programmation. Elle s'exprime grâce à la trinité `if / else if / else`.
* **Bloc** : C'est un ensemble d'instructions qui sont regroupées entre deux accolades : `{` et `}`. Le bloc appartenant à un `if` n'est exécuté que si la condition est vraie.
