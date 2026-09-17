---
title: "Exercices sur les conditions"
layout: tuto
slug: "exercices-conditions"
permalink: /tutos/:slug/
tuto_id: "T.121.124"
type: "classique"
version: "normal"
ua: "UA.121.12"
nav_order: 4
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez vous entraîner à utiliser les **conditions** pour résoudre de petits problèmes.

Vous allez réutiliser :

* les expressions booléennes ;
* `if` ;
* `else` ;
* `else if` ;
* `&&` ;
* `||` ;
* `!`.

Vous allez apprendre à passer progressivement de :

```text
Règle simple
    ↓
Condition simple
    ↓
Plusieurs cas
    ↓
Plusieurs règles
    ↓
Petit problème
```

Aucune boucle n'est nécessaire dans ce tutoriel.

## 2. Prérequis

Vous devez savoir :

* utiliser une variable ;
* utiliser `console.log()` ;
* comparer des valeurs ;
* construire une expression booléenne ;
* utiliser `if` ;
* utiliser `else` ;
* utiliser `else if` ;
* utiliser `&&` ;
* utiliser `||`.

Exemple :

```javascript
let age = 20;

if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}
```

## Données de départ

### JavaScript

Créez un fichier :

```text
exercices-conditions.js
```

Ajoutez :

```javascript
let age = 20;
let note = 14;
let inscrit = true;
```

Ces données seront modifiées pendant les exercices.

## Partie 1 — Théorie

### 1.1. Une condition répond à une règle

Dans un exercice, commencez par identifier la règle.

Exemple :

```text
Un apprenant est validé si sa note est supérieure ou égale à 10.
```

La règle devient :

```text
note >= 10
```

Puis le programme peut utiliser cette règle :

```javascript
if (note >= 10) {
    console.log("Validé");
} else {
    console.log("Non validé");
}
```

La démarche est donc :

```text
Problème
    ↓
Règle
    ↓
Expression booléenne
    ↓
Condition
    ↓
Résultat
```

### 1.2. Un problème peut avoir deux résultats

Exemple :

```text
Si l'âge est supérieur ou égal à 18 :
    majeur

Sinon :
    mineur
```

Le programme possède deux chemins :

```text
             age >= 18 ?
              /       \
           oui         non
            ↓           ↓
         Majeur       Mineur
```

### 1.3. Un problème peut avoir plusieurs résultats

Exemple :

```text
16 à 20    → Très bien
10 à 15    → Validé
0 à 9      → Non validé
```

On utilise plusieurs conditions :

```javascript
if (note >= 16) {
    console.log("Très bien");
} else if (note >= 10) {
    console.log("Validé");
} else {
    console.log("Non validé");
}
```

### 1.4. Un problème peut avoir plusieurs règles

Exemple :

```text
Une personne peut accéder au service si :
- elle a au moins 18 ans ;
- et son compte est actif.
```

Les deux règles doivent être vraies.

```javascript
if (age >= 18 && compteActif === true) {
    console.log("Accès autorisé");
}
```

### 1.5. Une règle peut avoir plusieurs possibilités

Exemple :

```text
Une personne peut entrer si :
- elle est membre ;
- ou elle possède une invitation.
```

On utilise `||` :

```javascript
if (membre === true || invitation === true) {
    console.log("Accès autorisé");
}
```

### 1.6. Méthode pour résoudre un exercice

Pour chaque exercice, utilisez cette méthode :

```text
1. Lire le problème.
       ↓
2. Identifier les données.
       ↓
3. Identifier la règle.
       ↓
4. Écrire l'expression booléenne.
       ↓
5. Choisir if / else / else if.
       ↓
6. Tester plusieurs valeurs.
```

Ne commencez pas directement par écrire le code.

## Partie 2 — Pratique

### 2.1. Exercice 1 — Majeur ou mineur

#### Contexte

On dispose d'un âge :

```javascript
let age = 20;
```

Une personne est majeure à partir de `18` ans.

#### Travail à faire

Construisez un programme qui affiche :

```text
Majeur
```

ou :

```text
Mineur
```

selon la valeur de `age`.

Testez avec au moins :

```text
15
18
25
```

#### Livrable

Créez un document Markdown ou un Google Doc contenant :

* le code ;
* les trois tests ;
* les résultats obtenus.

#### Critère de réussite

Le programme donne le bon résultat pour les trois valeurs testées.

---

### 2.2. Exercice 2 — Nombre positif ou négatif

#### Contexte

On dispose d'une variable :

```javascript
let nombre = 7;
```

#### Travail à faire

Construisez un programme qui indique si le nombre est :

```text
Positif
```

ou :

```text
Négatif ou nul
```

Testez avec :

```text
7
-3
0
```

Identifiez d'abord la règle sous forme d'expression booléenne.

---

### 2.3. Exercice 3 — Pair ou impair

#### Contexte

On dispose d'un nombre :

```javascript
let nombre = 8;
```

Un nombre pair est divisible par `2`.

Pour vérifier cela, vous pouvez utiliser l'opérateur `%`.

Exemple :

```javascript
8 % 2
```

Le résultat est :

```text
0
```

#### Travail à faire

Construisez un programme qui affiche :

```text
Pair
```

ou :

```text
Impair
```

Testez avec :

```text
8
11
20
7
```

#### Critère de réussite

Le programme donne le bon résultat pour chaque valeur.

---

### 2.4. Exercice 4 — Résultat d'un apprenant

#### Contexte

On dispose d'une note :

```javascript
let note = 12;
```

Les règles sont :

```text
note >= 16 → Très bien
note >= 10 → Validé
note < 10  → Non validé
```

#### Travail à faire

Construisez le programme avec `if`, `else if` et `else`.

Testez avec :

```text
8
10
14
16
20
```

#### Question

Pourquoi la condition :

```text
note >= 16
```

doit-elle être testée avant :

```text
note >= 10
```

Expliquez votre réponse avec vos propres mots.

---

### 2.5. Exercice 5 — Maximum de deux valeurs

#### Contexte

On dispose de deux valeurs :

```javascript
let a = 12;
let b = 8;
```

#### Travail à faire

Construisez un programme qui affiche la plus grande valeur.

Testez avec :

```text
a = 12
b = 8
```

Puis :

```text
a = 5
b = 13
```

Puis :

```text
a = 10
b = 10
```

#### Question

Que doit faire votre programme lorsque les deux valeurs sont égales ?

Définissez cette règle avant d'écrire le code.

---

### 2.6. Exercice 6 — Accès à un service

#### Contexte

Une personne peut accéder à un service si :

```text
âge >= 18
ET
compte actif
```

Données :

```javascript
let age = 22;
let compteActif = true;
```

#### Travail à faire

Construisez le programme.

Il doit afficher :

```text
Accès autorisé
```

ou :

```text
Accès refusé
```

Testez les situations suivantes :

```text
âge = 22
compteActif = true
```

```text
âge = 22
compteActif = false
```

```text
âge = 16
compteActif = true
```

```text
âge = 16
compteActif = false
```

#### Critère de réussite

L'accès est autorisé uniquement lorsque les deux règles sont vraies.

---

### 2.7. Exercice 7 — Autorisation avec deux possibilités

#### Contexte

Une personne peut entrer dans une salle si :

```text
elle est membre
OU
elle possède une invitation
```

Données :

```javascript
let membre = false;
let invitation = true;
```

#### Travail à faire

Construisez le programme avec `||`.

Testez :

```text
membre = true
invitation = false
```

```text
membre = false
invitation = true
```

```text
membre = true
invitation = true
```

```text
membre = false
invitation = false
```

Analysez les quatre résultats.

---

### 2.8. Exercice 8 — Classification d'une température

#### Contexte

On dispose d'une température :

```javascript
let temperature = 28;
```

Utilisez les règles :

```text
temperature < 10       → Froid
temperature < 25       → Doux
temperature >= 25      → Chaud
```

#### Travail à faire

Construisez le programme.

Testez avec :

```text
5
15
24
25
30
```

Avant de coder, écrivez les règles dans l'ordre.

---

### 2.9. Exercice 9 — Formule de décision

#### Contexte

Un apprenant reçoit :

```javascript
let note = 14;
let presence = 90;
```

Il est validé si :

```text
note >= 10
ET
presence >= 80
```

#### Travail à faire

Construisez le programme qui affiche :

```text
Validé
```

ou :

```text
Non validé
```

Testez les quatre situations :

| Note | Présence |
| ---: | -------: |
|   14 |       90 |
|   14 |       70 |
|    8 |       90 |
|    8 |       70 |

Analysez le résultat de chaque cas.

---

### 2.10. Exercice 10 — Petit problème de synthèse

#### Contexte

Une boutique applique une règle simple :

```text
montant >= 100 → Livraison gratuite
montant < 100  → Livraison payante
```

On dispose de :

```javascript
let montant = 120;
```

#### Travail à faire

Construisez le programme.

Puis ajoutez une deuxième règle :

```text
montant >= 200 → Réduction de 10 %
```

Le programme doit maintenant distinguer :

```text
200 ou plus → Réduction de 10 % + livraison gratuite
100 à 199   → Livraison gratuite
moins de 100 → Livraison payante
```

Testez avec :

```text
80
120
200
250
```

L'objectif est de choisir correctement les conditions et leur ordre.

### 2.11. Travail à faire

Choisissez **deux exercices** parmi les exercices 5 à 10.

Pour chacun :

1. identifiez les données ;
2. écrivez les règles en français ;
3. transformez les règles en expressions booléennes ;
4. construisez le programme ;
5. testez avec plusieurs valeurs ;
6. vérifiez les résultats.

Ne copiez pas directement une solution trouvée dans un autre exercice.

### Livrable

Créez un document Markdown ou un Google Doc contenant :

```text
Exercice choisi

1. Données
2. Règles
3. Code JavaScript
4. Tests
5. Résultats
```

### Critère de réussite

Pour chaque exercice choisi :

* les règles sont correctement identifiées ;
* les conditions sont correctes ;
* le code fonctionne avec plusieurs valeurs ;
* les résultats sont cohérents avec les règles ;
* aucune boucle n'est utilisée.

### Résultat attendu

À la fin de ce tutoriel, vous devez être capable de transformer une règle simple en traitement conditionnel.

Exemple :

```text
Problème
   ↓
Règles
   ↓
Expressions booléennes
   ↓
if / else / else if
   ↓
Résultat
```

Vous devez aussi savoir combiner plusieurs règles avec :

```text
&&
```

et :

```text
||
```

## Bilan

**Vous avez appris :**

* à appliquer une condition à différents problèmes ;
* à utiliser `if`, `else` et `else if` ;
* à combiner plusieurs règles ;
* à utiliser `&&` et `||` ;
* à tester un traitement avec plusieurs valeurs ;
* à choisir l'ordre des conditions.

**Vous savez maintenant :**

* partir d'un problème simple ;
* identifier ses règles ;
* transformer les règles en expressions booléennes ;
* construire un traitement conditionnel ;
* vérifier le résultat avec plusieurs cas.

Le prochain tutoriel est consacré aux **exercices sur les boucles**. Vous y apprendrez à appliquer `for` et `while` à plusieurs problèmes répétitifs.

## Glossaire

* **Condition** : règle qui permet de choisir une action.
* **Cas** : situation particulière traitée par le programme.
* **`if`** : exécute une action lorsque la condition est vraie.
* **`else`** : traite le cas où la condition précédente est fausse.
* **`else if`** : permet de tester un autre cas.
* **`&&`** : signifie **ET** ; toutes les conditions doivent être vraies.
* **`||`** : signifie **OU** ; au moins une condition doit être vraie.
* **Test** : exécution du programme avec une valeur donnée pour vérifier son comportement.
