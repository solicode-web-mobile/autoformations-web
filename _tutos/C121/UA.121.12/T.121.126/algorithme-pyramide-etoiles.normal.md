---
title: "Construire une pyramide d'étoiles"
layout: tuto
slug: "construire-pyramide-etoiles"
permalink: /tutos/:slug/
tuto_id: "T.121.126"
type: "algorithme"
version: "normal"
ua: "UA.121.12"
nav_order: 6
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez construire un premier **algorithme élémentaire** avec des boucles et des conditions.

Vous allez construire progressivement une pyramide d'étoiles :

```text
    *
   ***
  *****
 *******
*********
```

Pour réaliser cette pyramide, vous allez apprendre à organiser un traitement en plusieurs étapes :

```text
Définir la hauteur
        ↓
Construire chaque ligne
        ↓
Gérer les espaces
        ↓
Gérer les étoiles
        ↓
Afficher la ligne
```

À la fin du tutoriel, vous devez être capable de construire la pyramide avec JavaScript et Node.js.

## 2. Prérequis

Vous devez savoir :

* déclarer une variable ;
* utiliser `console.log()` ;
* utiliser une condition `if` ;
* utiliser une boucle `for` ;
* utiliser un compteur ;
* utiliser une condition d'arrêt ;
* utiliser un accumulateur ;
* construire une expression booléenne simple.

Vous devez également comprendre qu'une boucle peut être placée dans une autre boucle.

Exemple :

```javascript
for (let ligne = 1; ligne <= 3; ligne++) {
    for (let colonne = 1; colonne <= 3; colonne++) {
        console.log("*");
    }
}
```

Vous n'avez pas besoin de connaître d'autres structures JavaScript pour réaliser cet exercice.

## Données de départ

### JavaScript

Créez un fichier :

```text
pyramide.js
```

Commencez avec :

```javascript
let hauteur = 5;

console.log("Hauteur :", hauteur);
```

Exécutez :

```bash
node pyramide.js
```

Résultat :

```text
Hauteur : 5
```

La variable `hauteur` indique le nombre de lignes de la pyramide.

## Partie 1 — Théorie

### 1.1. Observer la pyramide

Nous voulons obtenir :

```text
    *
   ***
  *****
 *******
*********
```

La pyramide contient cinq lignes.

On peut numéroter les lignes :

```text
Ligne 1 →     *
Ligne 2 →    ***
Ligne 3 →   *****
Ligne 4 →  *******
Ligne 5 → *********
```

Le programme doit donc construire les lignes une par une.

### 1.2. Une ligne contient des espaces et des étoiles

La première ligne est :

```text
    *
```

Elle contient :

```text
4 espaces
1 étoile
```

La deuxième ligne est :

```text
   ***
```

Elle contient :

```text
3 espaces
3 étoiles
```

La troisième ligne est :

```text
  *****
```

Elle contient :

```text
2 espaces
5 étoiles
```

On observe :

| Ligne | Espaces | Étoiles |
| ----: | ------: | ------: |
|     1 |       4 |       1 |
|     2 |       3 |       3 |
|     3 |       2 |       5 |
|     4 |       1 |       7 |
|     5 |       0 |       9 |

### 1.3. Trouver la règle des espaces

Pour une pyramide de hauteur `5` :

```text
Ligne 1 → 4 espaces
Ligne 2 → 3 espaces
Ligne 3 → 2 espaces
Ligne 4 → 1 espace
Ligne 5 → 0 espace
```

Le nombre d'espaces diminue lorsque le numéro de ligne augmente.

La règle est :

```text
espaces = hauteur - ligne
```

Exemple pour la ligne `3` :

```text
5 - 3 = 2
```

Il faut donc deux espaces.

### 1.4. Trouver la règle des étoiles

Pour les étoiles :

```text
Ligne 1 → 1
Ligne 2 → 3
Ligne 3 → 5
Ligne 4 → 7
Ligne 5 → 9
```

Le nombre d'étoiles augmente de `2` à chaque ligne.

La règle est :

```text
étoiles = 2 × ligne - 1
```

Exemple pour la ligne `3` :

```text
2 × 3 - 1 = 5
```

Il faut donc cinq étoiles.

### 1.5. Construire une ligne

Pour construire une ligne, le programme doit :

```text
1. Ajouter les espaces.
2. Ajouter les étoiles.
3. Afficher la ligne.
```

On peut représenter le traitement ainsi :

```text
Numéro de ligne
      ↓
Calculer les espaces
      ↓
Ajouter les espaces
      ↓
Calculer les étoiles
      ↓
Ajouter les étoiles
      ↓
Afficher la ligne
```

### 1.6. Répéter pour toutes les lignes

La pyramide contient plusieurs lignes.

Il faut donc utiliser une première boucle :

```javascript
for (let ligne = 1; ligne <= hauteur; ligne++) {
    // construire une ligne
}
```

Cette boucle signifie :

```text
ligne = 1
ligne = 2
ligne = 3
...
ligne = hauteur
```

### 1.7. Répéter les espaces

Pour ajouter les espaces, il faut répéter l'action :

```text
ajouter un espace
```

le nombre de fois nécessaire.

On utilise donc une deuxième boucle.

Pour la ligne courante :

```text
nombre d'espaces = hauteur - ligne
```

### 1.8. Répéter les étoiles

Il faut ensuite ajouter plusieurs étoiles.

Le nombre d'étoiles est :

```text
2 × ligne - 1
```

On utilise donc une troisième boucle pour construire les étoiles.

L'organisation devient :

```text
Boucle des lignes
    ↓
    Boucle des espaces
    ↓
    Boucle des étoiles
    ↓
    Afficher la ligne
```

### 1.9. Ajouter une condition

Avant de construire la pyramide, on peut vérifier que la hauteur est correcte.

Une hauteur doit être supérieure à `0`.

```javascript
if (hauteur > 0) {
    // construire la pyramide
}
```

Le programme suit alors cette logique :

```text
hauteur > 0 ?
    ↓
 ┌──┴──┐
oui   non
 ↓      ↓
pyramide  message d'erreur
```

Cette condition permet au programme de vérifier la donnée avant de commencer le traitement.

### 1.10. L'algorithme complet

Le traitement peut maintenant être décrit simplement :

```text
Définir la hauteur

Si la hauteur est valide :

    Pour chaque ligne :

        Créer une ligne vide

        Ajouter les espaces

        Ajouter les étoiles

        Afficher la ligne

Sinon :

    Afficher un message
```

On obtient :

```text
hauteur
   ↓
condition
   ↓
boucle des lignes
   ↓
boucle des espaces
   ↓
boucle des étoiles
   ↓
ligne complète
```

### 1.11. À retenir

* Une pyramide est composée de plusieurs lignes.
* Chaque ligne contient des espaces et des étoiles.
* Le nombre d'espaces diminue.
* Le nombre d'étoiles augmente.
* Une boucle permet de construire chaque ligne.
* Des boucles internes permettent de construire les espaces et les étoiles.
* Une condition peut vérifier que la hauteur est valide.
* Plusieurs boucles peuvent être organisées pour construire un traitement plus complexe.

## Partie 2 — Pratique

### 2.1. Étape 1 — Afficher une étoile

Commencez par :

```javascript
console.log("*");
```

Résultat :

```text
*
```

Vous savez maintenant afficher une première ligne.

### 2.2. Étape 2 — Afficher plusieurs étoiles

Construisez une ligne contenant cinq étoiles :

```text
*****
```

Vous pouvez utiliser une variable :

```javascript
let ligne = "";

ligne = ligne + "*";
ligne = ligne + "*";
ligne = ligne + "*";
ligne = ligne + "*";
ligne = ligne + "*";

console.log(ligne);
```

Résultat :

```text
*****
```

Cette méthode montre le principe qui sera automatisé avec une boucle.

### 2.3. Étape 3 — Utiliser une boucle pour les étoiles

Remplacez le code précédent par :

```javascript
let ligne = "";

for (let etoile = 1; etoile <= 5; etoile++) {
    ligne = ligne + "*";
}

console.log(ligne);
```

Résultat :

```text
*****
```

La boucle ajoute une étoile à chaque répétition.

### 2.4. Étape 4 — Construire un triangle

Construisez maintenant :

```text
*
**
***
****
*****
```

Utilisez une boucle pour les lignes.

Pour chaque ligne, le nombre d'étoiles doit correspondre au numéro de la ligne.

Exemple :

```text
Ligne 1 → 1 étoile
Ligne 2 → 2 étoiles
Ligne 3 → 3 étoiles
Ligne 4 → 4 étoiles
Ligne 5 → 5 étoiles
```

Vous devez donc organiser :

```text
Boucle des lignes
    ↓
Boucle des étoiles
```

### 2.5. Étape 5 — Construire le nombre d'espaces

Revenez à la pyramide.

Pour une hauteur de `5` :

```text
Ligne 1 → 4 espaces
Ligne 2 → 3 espaces
Ligne 3 → 2 espaces
Ligne 4 → 1 espace
Ligne 5 → 0 espace
```

Construisez une boucle qui ajoute :

```text
hauteur - ligne
```

espaces.

Ne construisez pas encore les étoiles.

### 2.6. Étape 6 — Ajouter les étoiles

Pour chaque ligne, ajoutez ensuite :

```text
2 × ligne - 1
```

étoiles.

Pour une hauteur de `5` :

```text
Ligne 1 → 1
Ligne 2 → 3
Ligne 3 → 5
Ligne 4 → 7
Ligne 5 → 9
```

Vous devez maintenant obtenir :

```text
    *
   ***
  *****
 *******
*********
```

### 2.7. Étape 7 — Construire une ligne complète

Pour chaque ligne :

```text
ligne vide
    ↓
ajouter les espaces
    ↓
ajouter les étoiles
    ↓
afficher
```

Utilisez une variable :

```javascript
let ligneTexte = "";
```

Puis ajoutez progressivement les caractères.

### 2.8. Étape 8 — Construire la pyramide complète

À partir de :

```javascript
let hauteur = 5;
```

construisez la pyramide complète.

Votre programme doit suivre cette organisation :

```javascript
let hauteur = 5;

if (hauteur > 0) {

    for (let ligne = 1; ligne <= hauteur; ligne++) {

        // construire la ligne

    }

} else {

    console.log("La hauteur doit être supérieure à 0");

}
```

Vous devez compléter la partie qui construit la ligne.

### 2.9. Étape 9 — Tester différentes hauteurs

Testez :

```javascript
let hauteur = 1;
```

Résultat :

```text
*
```

Testez ensuite :

```javascript
let hauteur = 3;
```

Résultat :

```text
  *
 ***
*****
```

Puis :

```javascript
let hauteur = 5;
```

Résultat :

```text
    *
   ***
  *****
 *******
*********
```

Enfin, testez :

```javascript
let hauteur = 0;
```

Le programme doit afficher un message indiquant que la hauteur est incorrecte.

### 2.10. Étape 10 — Comprendre le traitement

Analysez votre programme.

Vous devez pouvoir identifier :

```text
Condition
   ↓
Boucle des lignes
   ↓
Boucle des espaces
   ↓
Boucle des étoiles
```

Répondez aux questions :

1. Pourquoi utilise-t-on une boucle pour les lignes ?
2. Pourquoi faut-il une autre boucle pour les espaces ?
3. Pourquoi faut-il une autre boucle pour les étoiles ?
4. Comment calcule-t-on le nombre d'espaces ?
5. Comment calcule-t-on le nombre d'étoiles ?
6. Pourquoi vérifie-t-on `hauteur > 0` ?

### 2.11. Travail à faire

Construisez un programme complet qui demande une hauteur définie dans une variable :

```javascript
let hauteur = 7;
```

Le programme doit afficher une pyramide de cette hauteur.

Pour :

```javascript
let hauteur = 7;
```

le résultat attendu est :

```text
      *
     ***
    *****
   *******
  *********
 ***********
*************
```

Le programme doit également gérer une hauteur inférieure ou égale à `0`.

### Livrable

Créez un document Markdown ou un Google Doc contenant :

* le problème ;
* les règles utilisées ;
* le code JavaScript final ;
* le résultat pour une hauteur de `3` ;
* le résultat pour une hauteur de `5` ;
* le résultat pour une hauteur de `7`.

### Critère de réussite

Le programme :

* utilise une condition pour vérifier la hauteur ;
* utilise une boucle pour les lignes ;
* utilise des boucles pour construire les espaces et les étoiles ;
* produit une pyramide correctement centrée ;
* fonctionne avec plusieurs hauteurs ;
* fonctionne avec Node.js ;
* ne contient pas de boucle infinie.

### Résultat attendu

Pour :

```javascript
let hauteur = 5;
```

le programme doit produire exactement :

```text
    *
   ***
  *****
 *******
*********
```

Pour :

```javascript
let hauteur = 3;
```

il doit produire :

```text
  *
 ***
*****
```

Pour :

```javascript
let hauteur = 0;
```

il doit produire un message indiquant que la hauteur n'est pas valide.

## Bilan

**Vous avez appris :**

* à analyser un problème simple ;
* à identifier les règles d'un traitement ;
* à utiliser plusieurs boucles ;
* à utiliser des boucles imbriquées ;
* à utiliser une condition avant le traitement ;
* à construire progressivement une pyramide ;
* à vérifier un résultat avec plusieurs valeurs.

**Vous savez maintenant :**

```text
Un problème
    ↓
Des règles
    ↓
Des variables
    ↓
Des conditions
    ↓
Des boucles
    ↓
Un algorithme
    ↓
Un résultat
```

Vous avez construit un premier algorithme qui combine plusieurs notions déjà étudiées.

Vous êtes maintenant prêt à passer à une nouvelle UA, où les notions apprises pourront être utilisées pour construire des **algorithmes élémentaires sur les tableaux et les fonctions**.

## Glossaire

* **Algorithme** : suite organisée d'étapes pour résoudre un problème.
* **Ligne** : une ligne de texte produite par le programme.
* **Pyramide** : figure composée de lignes d'étoiles dont la largeur augmente.
* **Boucle imbriquée** : boucle placée à l'intérieur d'une autre boucle.
* **Compteur** : variable qui évolue pour contrôler une répétition.
* **Condition** : règle qui permet de décider si une action doit être exécutée.
* **Hauteur** : nombre de lignes de la pyramide.
* **Itération** : une exécution d'une boucle.
