---
title: "Bases du contrôle de l'exécution"
layout: tuto
slug: "bases-controle-execution"
permalink: /tutos/:slug/
tuto_id: "T.121.121"
type: "classique"
version: "normal"
ua: "UA.121.12"
nav_order: 1
data_js: |
    console.log("Début du programme");
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à comprendre **comment un programme contrôle son exécution**.

Vous allez découvrir :

* la comparaison ;
* la condition ;
* la valeur vraie ou fausse ;
* la répétition ;
* la condition d'arrêt.

À la fin du tutoriel, vous devez comprendre :

```text
Programme
   ↓
Vérifier une règle
   ↓
Prendre une décision
   ↓
Répéter une action si nécessaire
   ↓
Arrêter la répétition
```

## 2. Prérequis

Vous devez savoir :

* créer un fichier JavaScript ;
* exécuter un fichier avec Node.js ;
* utiliser `console.log()` ;
* utiliser une variable ;
* utiliser une valeur `number`, `string` ou `boolean`.

Exemple :

```javascript
let age = 20;

console.log(age);
```

## Données de départ

### JavaScript

Le programme de départ est :

```javascript
console.log("Début du programme");
```

Ce programme permet simplement de vérifier que le fichier JavaScript fonctionne avec Node.js.

## Partie 1 — Théorie

### 1.1. Le programme ne suit pas toujours le même chemin

Un programme peut avoir plusieurs comportements.

Il peut :

* exécuter une action ;
* vérifier une règle ;
* choisir une action ;
* répéter une action.

Exemple :

```text
Afficher le message

Vérifier l'âge

Si l'âge respecte la règle
    continuer

Sinon
    arrêter
```

Le programme doit donc pouvoir **contrôler son exécution**.

### 1.2. Comparer deux valeurs

Une comparaison permet de vérifier une relation entre deux valeurs.

Exemples :

```text
10 est supérieur à 5
10 est égal à 10
3 est inférieur à 8
```

En JavaScript :

```javascript
console.log(10 > 5);
console.log(10 === 10);
console.log(3 < 8);
```

Le résultat est :

```text
true
true
true
```

Une comparaison produit donc une information simple :

```text
vrai
```

ou :

```text
faux
```

### 1.3. Vrai et faux

Une condition permet de savoir si une règle est respectée.

Exemple :

```text
Règle :
l'âge doit être supérieur ou égal à 18
```

Pour :

```text
age = 20
```

la règle est respectée.

Résultat :

```text
vrai
```

Pour :

```text
age = 15
```

la règle n'est pas respectée.

Résultat :

```text
faux
```

En JavaScript :

```javascript
let age = 20;

console.log(age >= 18);
```

Résultat :

```text
true
```

### 1.4. Une condition contrôle une action

Une condition permet au programme de savoir **quelle action réaliser**.

Exemple :

```text
Si l'âge est supérieur ou égal à 18
    autoriser l'accès
```

Le programme suit alors une règle.

On peut représenter le fonctionnement ainsi :

```text
          Vérifier la règle
                 ↓
        ┌────────┴────────┐
        ↓                 ↓
      vrai              faux
        ↓                 ↓
     Action A          Action B
```

La condition ne correspond donc pas seulement à une comparaison.

Elle sert à **contrôler le déroulement du programme**.

### 1.5. Répéter une action

Un programme peut aussi devoir réaliser plusieurs fois la même action.

Exemple :

```text
Afficher "Bonjour"
Afficher "Bonjour"
Afficher "Bonjour"
```

L'action est répétée trois fois.

Dans un programme, on préfère généralement exprimer cette idée comme :

```text
Répéter l'action 3 fois
```

Le programme peut alors exécuter la même action plusieurs fois.

### 1.6. Pourquoi utiliser une répétition ?

La répétition est utile lorsqu'une même action doit être réalisée plusieurs fois.

Exemples :

```text
Afficher les nombres de 1 à 10
```

```text
Analyser plusieurs notes
```

```text
Vérifier plusieurs valeurs
```

```text
Afficher plusieurs éléments d'un tableau
```

Sans répétition, il faudrait écrire chaque action séparément.

### 1.7. La condition d'arrêt

Une répétition doit savoir **quand s'arrêter**.

Exemple :

```text
Répéter l'action
jusqu'à atteindre 10
```

On peut représenter le principe ainsi :

```text
Début
  ↓
Action
  ↓
Vérifier la condition
  ↓
Condition respectée ?
  ├── Non → recommencer
  └── Oui → arrêter
```

La condition d'arrêt est importante.

Sans condition d'arrêt adaptée, un traitement répétitif peut continuer trop longtemps.

### 1.8. Les trois idées importantes

Pour contrôler l'exécution, il faut retenir trois idées :

```text
Comparer
   ↓
Vérifier une condition
   ↓
Choisir ou répéter une action
```

Une condition permet de prendre une décision.

Une répétition permet de refaire une action.

Une condition d'arrêt permet de terminer une répétition.

### 1.9. À retenir

* Une **comparaison** vérifie une relation entre des valeurs.
* Une comparaison produit `true` ou `false`.
* Une **condition** permet de contrôler une action.
* Une **répétition** permet d'exécuter plusieurs fois une action.
* Une **condition d'arrêt** indique quand la répétition doit s'arrêter.

## Partie 2 — Pratique

### 2.1. Tester une comparaison

Créez un fichier :

```text
controle.js
```

Ajoutez :

```javascript
console.log(10 > 5);
```

Exécutez le fichier :

```bash
node controle.js
```

Observez le résultat :

```text
true
```

La condition :

```text
10 > 5
```

est vraie.

### 2.2. Tester une condition fausse

Modifiez le code :

```javascript
console.log(10 < 5);
```

Exécutez le programme.

Résultat :

```text
false
```

La relation :

```text
10 < 5
```

est fausse.

### 2.3. Utiliser une variable

Remplacez le code par :

```javascript
let age = 20;

console.log(age >= 18);
```

Exécutez le programme.

Résultat :

```text
true
```

Modifiez ensuite :

```javascript
let age = 15;

console.log(age >= 18);
```

Résultat :

```text
false
```

Vous avez utilisé :

```text
variable
   ↓
comparaison
   ↓
true / false
```

### 2.4. Observer une répétition

Observez maintenant cette suite :

```text
Afficher "Bonjour"
Afficher "Bonjour"
Afficher "Bonjour"
```

La même action est réalisée trois fois.

On peut décrire cette situation autrement :

```text
Répéter 3 fois :
    afficher "Bonjour"
```

L'objectif ici est de comprendre **l'idée de répétition**.

La syntaxe JavaScript permettant de construire une boucle sera étudiée dans le tutoriel suivant.

### 2.5. Observer une condition d'arrêt

Considérez :

```text
Afficher un nombre
Passer au nombre suivant
Continuer jusqu'à 5
```

La répétition possède une règle d'arrêt :

```text
arrêter lorsque le nombre atteint 5
```

Le programme doit donc toujours connaître :

* l'action à répéter ;
* la règle de répétition ;
* la condition d'arrêt.

### 2.6. Exercice de vérification

Complétez le tableau suivant.

| Situation   | Résultat attendu |
| ----------- | ---------------- |
| `10 > 5`    |                  |
| `4 > 8`     |                  |
| `10 === 10` |                  |
| `5 < 2`     |                  |
| `20 >= 18`  |                  |
| `15 >= 18`  |                  |

Puis répondez aux questions :

1. Quelle est la différence entre une comparaison vraie et une comparaison fausse ?
2. Pourquoi utilise-t-on une condition ?
3. Pourquoi utilise-t-on une répétition ?
4. Pourquoi une répétition doit-elle avoir une condition d'arrêt ?

### 2.7. Réinvestissement

Écrivez, avec des mots simples, le traitement suivant :

```text
Un programme possède une variable age.

Il vérifie si age est supérieur ou égal à 18.

Si la règle est vraie, le programme peut continuer.

Sinon, le programme doit arrêter cette partie du traitement.
```

Puis décrivez cette répétition :

```text
Afficher les nombres de 1 à 5.
```

Votre description doit préciser :

* l'action répétée ;
* le nombre de répétitions ;
* la condition d'arrêt.

### Résultat attendu

À la fin du tutoriel, vous devez être capable d'expliquer ce fonctionnement :

```text
Une valeur
    ↓
Comparaison
    ↓
true / false
    ↓
Condition
    ↓
Décision ou répétition
    ↓
Condition d'arrêt
```

Vous devez également comprendre que les structures JavaScript qui permettent d'écrire concrètement ces traitements seront étudiées dans le tutoriel suivant.

## Bilan

**Vous avez appris :**

* à comparer des valeurs ;
* à comprendre `true` et `false` ;
* à comprendre le rôle d'une condition ;
* à comprendre le principe d'une répétition ;
* à identifier une condition d'arrêt.

**Vous savez maintenant :**

* expliquer comment un programme peut contrôler son exécution ;
* reconnaître une comparaison ;
* identifier une condition ;
* identifier une répétition ;
* expliquer pourquoi une répétition doit s'arrêter.

## Glossaire

* **Comparaison** : vérification d'une relation entre deux valeurs.
* **Condition** : règle utilisée pour contrôler l'exécution d'un programme.
* **Vrai (`true`)** : résultat indiquant qu'une condition est respectée.
* **Faux (`false`)** : résultat indiquant qu'une condition n'est pas respectée.
* **Répétition** : exécution plusieurs fois d'une même action.
* **Condition d'arrêt** : règle qui indique quand une répétition doit s'arrêter.
* **Contrôle de l'exécution** : mécanismes qui permettent de décider quelles actions le programme doit exécuter.
