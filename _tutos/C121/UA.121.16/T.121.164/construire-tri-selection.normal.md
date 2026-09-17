---
title: "Construire le tri par sélection"
layout: tuto
slug: "construire-tri-selection"
permalink: /tutos/:slug/
tuto_id: "T.121.164"
type: "algorithme"
version: "normal"
ua: "UA.121.16"
nav_order: 4
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans les tutoriels précédents, vous avez appris à :

* comparer deux valeurs ;
* chercher un minimum ;
* mémoriser sa position ;
* échanger deux éléments ;
* travailler sur une partie d'un tableau.

Dans ce tutoriel, vous allez réunir ces opérations pour construire un **tri par sélection**.

Vous allez apprendre à :

* choisir la position à traiter ;
* rechercher le minimum dans la partie restante ;
* mémoriser sa position ;
* échanger les deux éléments ;
* répéter le traitement ;
* obtenir une collection triée.

La progression est :

```text
Position courante
↓
Chercher le minimum restant
↓
Mémoriser sa position
↓
Échanger
↓
Passer à la position suivante
↓
Répéter
```

À la fin du tutoriel, vous saurez expliquer et coder le principe du tri par sélection.

## 2. Prérequis

Vous devez savoir :

* manipuler un tableau ;
* utiliser un index ;
* utiliser `length` ;
* utiliser une boucle `for` ;
* utiliser une condition ;
* comparer deux valeurs ;
* rechercher un minimum ;
* mémoriser une position ;
* utiliser une variable temporaire ;
* échanger deux éléments.

Vous devez avoir terminé :

**T.121.161 — Comprendre l'ordre et le tri**

**T.121.162 — Construire les opérations nécessaires au tri**

**T.121.163 — Exercices sur l'ordre et le tri**

## Données de départ

Nous allons utiliser :

```javascript
let nombres = [7, 3, 9, 2, 5];
```

Le résultat attendu dans l'ordre croissant est :

```text
[2, 3, 5, 7, 9]
```

Le programme doit modifier l'ordre du tableau.

Aucune valeur ne doit être supprimée.

## Partie 1 — Théorie

### 1.1. Le principe du tri par sélection

Le tri par sélection consiste à traiter successivement les positions du tableau.

Pour chaque position :

```text
1. Chercher le plus petit élément restant.
2. Mémoriser sa position.
3. Échanger avec la position courante.
```

Exemple :

```text
[7, 3, 9, 2, 5]
```

Pour la première position :

```text
position courante = 0
```

Le plus petit élément est :

```text
2
```

Il se trouve à la position :

```text
3
```

On échange alors :

```text
position 0 ↔ position 3
```

On obtient :

```text
[2, 3, 9, 7, 5]
```

La première position est maintenant correcte.

### 1.2. La position courante

Le tri avance de gauche à droite.

On peut représenter le tableau ainsi :

```text
[partie déjà placée | partie restante]
```

Au début :

```text
[ | 7, 3, 9, 2, 5]
```

Après la première étape :

```text
[2 | 3, 9, 7, 5]
```

Après la deuxième étape :

```text
[2, 3 | 9, 7, 5]
```

Puis :

```text
[2, 3, 5 | 7, 9]
```

La variable `i` représente la position courante.

### 1.3. Rechercher le minimum restant

Pour la position courante `i`, le minimum doit être recherché à partir de cette position.

Exemple :

```text
[2, 3 | 9, 7, 5]
```

La position courante est :

```text
i = 2
```

La recherche commence donc à :

```text
index 2
```

La partie restante est :

```text
[9, 7, 5]
```

Le minimum est :

```text
5
```

Sa position est :

```text
4
```

### 1.4. Mémoriser la position du minimum

Au début de chaque étape :

```text
positionMinimum = position courante
```

Pourquoi ?

Parce que la première valeur de la partie restante est notre premier candidat.

Exemple :

```text
i = 2
```

donne :

```text
positionMinimum = 2
```

Puis nous comparons les valeurs suivantes.

Si une valeur plus petite est trouvée :

```text
nombres[j] < nombres[positionMinimum]
```

nous mémorisons sa position :

```text
positionMinimum = j
```

### 1.5. Construire la recherche avec deux boucles

Le tri par sélection utilise deux boucles.

La première indique :

> Quelle position faut-il remplir ?

```javascript
for (let i = 0; i < nombres.length - 1; i++) {
}
```

La deuxième recherche le minimum dans la partie restante :

```javascript
for (let j = i + 1; j < nombres.length; j++) {
}
```

La relation entre les deux boucles est :

```text
boucle externe
↓
position courante

boucle interne
↓
recherche du minimum restant
```

### 1.6. Construire la recherche du minimum

À l'intérieur de la boucle externe, on commence par :

```javascript
let positionMinimum = i;
```

Puis :

```javascript
for (let j = i + 1; j < nombres.length; j++) {
    if (nombres[j] < nombres[positionMinimum]) {
        positionMinimum = j;
    }
}
```

À la fin de la boucle interne, `positionMinimum` contient la position du plus petit élément restant.

### 1.7. Échanger avec la position courante

Une fois la position du minimum trouvée, il faut placer ce minimum à la position `i`.

On utilise une variable temporaire :

```javascript
let temporaire = nombres[i];

nombres[i] = nombres[positionMinimum];

nombres[positionMinimum] = temporaire;
```

Exemple :

```text
Avant :

[7, 3, 9, 2, 5]

i = 0
positionMinimum = 3
```

Après l'échange :

```text
[2, 3, 9, 7, 5]
```

### 1.8. Répéter le traitement

Une fois l'échange terminé, la boucle externe passe automatiquement à la position suivante.

On obtient :

```text
i = 0
↓
placer le minimum

i = 1
↓
placer le minimum restant

i = 2
↓
placer le minimum restant

i = 3
↓
placer le minimum restant
```

Le processus continue jusqu'à ce que toutes les positions nécessaires soient traitées.

### 1.9. Première construction complète

On peut maintenant réunir les différentes parties :

```javascript
let nombres = [7, 3, 9, 2, 5];

for (let i = 0; i < nombres.length - 1; i++) {
    let positionMinimum = i;

    for (let j = i + 1; j < nombres.length; j++) {
        if (nombres[j] < nombres[positionMinimum]) {
            positionMinimum = j;
        }
    }

    let temporaire = nombres[i];
    nombres[i] = nombres[positionMinimum];
    nombres[positionMinimum] = temporaire;
}

console.log(nombres);
```

Résultat :

```text
[2, 3, 5, 7, 9]
```

### 1.10. Comprendre chaque partie du code

La première boucle :

```javascript
for (let i = 0; i < nombres.length - 1; i++) {
```

indique :

> Quelle position doit être remplie ?

La variable :

```javascript
let positionMinimum = i;
```

indique :

> Quelle position contient actuellement le minimum connu ?

La deuxième boucle :

```javascript
for (let j = i + 1; j < nombres.length; j++) {
```

indique :

> Quelles valeurs restantes dois-je comparer ?

La condition :

```javascript
if (nombres[j] < nombres[positionMinimum]) {
```

indique :

> Ai-je trouvé une valeur plus petite ?

Puis :

```javascript
positionMinimum = j;
```

mémorise la nouvelle position du minimum.

Enfin :

```javascript
let temporaire = nombres[i];
nombres[i] = nombres[positionMinimum];
nombres[positionMinimum] = temporaire;
```

place le minimum à la position courante.

### 1.11. Pourquoi `i < nombres.length - 1` ?

Lorsque toutes les positions sauf la dernière sont correctement placées, la dernière valeur est automatiquement à la bonne place.

Exemple :

```text
[2, 3, 5, 7 | 9]
```

Il n'est donc pas nécessaire de réaliser une nouvelle recherche pour la dernière position.

### 1.12. Tracer l'algorithme

Pour :

```text
[7, 3, 9, 2, 5]
```

on peut observer :

```text
Étape 1
[7, 3, 9, 2, 5]
minimum = 2
↓
[2, 3, 9, 7, 5]
```

Puis :

```text
Étape 2
[2, 3, 9, 7, 5]
minimum restant = 3
↓
[2, 3, 9, 7, 5]
```

Puis :

```text
Étape 3
[2, 3, 9, 7, 5]
minimum restant = 5
↓
[2, 3, 5, 7, 9]
```

Puis :

```text
Étape 4
[2, 3, 5, 7, 9]
minimum restant = 7
↓
[2, 3, 5, 7, 9]
```

### 1.13. À retenir

Le tri par sélection suit toujours la même logique :

```text
Pour chaque position :

    chercher le minimum restant

    mémoriser sa position

    échanger avec la position courante
```

En JavaScript :

```text
boucle externe
    ↓
position courante

boucle interne
    ↓
minimum restant

échange
    ↓
position correcte
```

## Partie 2 — Pratique

### 2.1. Reproduire la première étape

Utilisez :

```javascript
let nombres = [7, 3, 9, 2, 5];
```

Travaillez uniquement sur `i = 0`.

Déterminez :

```text
Position courante :
__________

Minimum :
__________

Position du minimum :
__________
```

Puis réalisez l'échange.

Résultat attendu :

```text
[2, 3, 9, 7, 5]
```

### 2.2. Reproduire la deuxième étape

Partez de :

```text
[2, 3, 9, 7, 5]
```

Utilisez :

```text
i = 1
```

Indiquez :

```text
Position courante :
__________

Partie restante :
________________

Minimum :
__________

Position du minimum :
__________
```

Effectuez l'échange.

Observez que le tableau ne change pas si le minimum est déjà à la position courante.

### 2.3. Reproduire la troisième étape

Partez de :

```text
[2, 3, 9, 7, 5]
```

Utilisez :

```text
i = 2
```

Cherchez le minimum dans :

```text
[9, 7, 5]
```

Complétez :

```text
Minimum :
__________

Position :
__________
```

Effectuez l'échange.

Résultat attendu :

```text
[2, 3, 5, 7, 9]
```

### 2.4. Construire la boucle externe

Commencez avec :

```javascript
let nombres = [7, 3, 9, 2, 5];

for (let i = 0; i < nombres.length - 1; i++) {

}
```

Complétez cette boucle pour traiter chaque position.

La variable `i` doit représenter la position courante.

### 2.5. Ajouter la recherche du minimum

À l'intérieur de la boucle externe, ajoutez :

```javascript
let positionMinimum = i;
```

Puis ajoutez la boucle de recherche.

Complétez :

```javascript
for (let j = ________; j < nombres.length; j++) {
    if (nombres[j] < nombres[________________]) {
        ______________________________;
    }
}
```

L'objectif est de trouver la position du plus petit élément restant.

### 2.6. Ajouter l'échange

Après la recherche, ajoutez :

```javascript
let temporaire = nombres[i];

nombres[i] = nombres[positionMinimum];

nombres[positionMinimum] = temporaire;
```

Exécutez le programme.

Résultat attendu :

```text
[2, 3, 5, 7, 9]
```

### 2.7. Observer le programme étape par étape

Ajoutez temporairement un affichage :

```javascript
console.log("Position :", i);
console.log("Minimum :", nombres[positionMinimum]);
```

Observez les valeurs produites.

Vous devez voir que :

```text
i
```

avance progressivement :

```text
0
1
2
3
```

et que chaque étape place un élément à sa position.

### 2.8. Tester avec un tableau déjà trié

Utilisez :

```javascript
let nombres = [1, 2, 3, 4, 5];
```

Le résultat attendu est :

```text
[1, 2, 3, 4, 5]
```

Vérifiez que le programme fonctionne sans modifier incorrectement le tableau.

### 2.9. Tester avec un tableau inversé

Utilisez :

```javascript
let nombres = [5, 4, 3, 2, 1];
```

Le résultat attendu est :

```text
[1, 2, 3, 4, 5]
```

Observez les étapes du tri.

### 2.10. Tester avec des valeurs répétées

Utilisez :

```javascript
let nombres = [5, 2, 5, 3, 2];
```

Le résultat attendu est :

```text
[2, 2, 3, 5, 5]
```

Vérifiez que le programme conserve toutes les valeurs.

### 2.11. Exercice guidé — construire le tri

Utilisez :

```javascript
let nombres = [8, 3, 6, 1, 5];
```

Construisez le tri par sélection en suivant exactement ces étapes :

#### Étape 1

Écrire la boucle externe.

```text
Question :
Quelle position suis-je en train de remplir ?
```

#### Étape 2

Initialiser la position du minimum.

```text
Question :
Quelle est la première position candidate ?
```

#### Étape 3

Parcourir la partie restante.

```text
Question :
À partir de quelle position dois-je commencer ?
```

#### Étape 4

Comparer les valeurs.

```text
Question :
Que faire lorsqu'une valeur plus petite est trouvée ?
```

#### Étape 5

Échanger.

```text
Question :
Quelles sont les deux positions à échanger ?
```

#### Étape 6

Afficher le résultat.

Le résultat final doit être :

```text
[1, 3, 5, 6, 8]
```

### 2.12. Exercice individuel

Construisez sans recopier le programme précédent un tri par sélection pour :

```javascript
let nombres = [12, 7, 19, 4, 15, 8, 2, 11];
```

Vous devez respecter cette structure :

```text
Pour chaque position :

    trouver le minimum restant

    mémoriser sa position

    échanger

Afficher le tableau
```

Le résultat attendu est :

```text
[2, 4, 7, 8, 11, 12, 15, 19]
```

### 2.13. Vérifier l'algorithme

Testez ensuite avec :

```javascript
let nombres = [20, 5, 12, 3, 18, 9];
```

Résultat attendu :

```text
[3, 5, 9, 12, 18, 20]
```

Puis :

```javascript
let nombres = [4, 4, 2, 7, 2];
```

Résultat attendu :

```text
[2, 2, 4, 4, 7]
```

### 2.14. Exercice de compréhension du code

Expliquez avec vos propres mots le rôle de chaque élément :

```javascript
for (let i = 0; i < nombres.length - 1; i++)
```

```javascript
let positionMinimum = i;
```

```javascript
for (let j = i + 1; j < nombres.length; j++)
```

```javascript
if (nombres[j] < nombres[positionMinimum])
```

```javascript
positionMinimum = j;
```

```javascript
let temporaire = nombres[i];
```

Vous devez être capable d'expliquer le programme sans simplement réciter le code.

**Travail à faire :**

Construire et tester un algorithme de tri par sélection en JavaScript.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* l'explication du principe du tri par sélection ;
* les étapes manuelles sur un exemple ;
* le code JavaScript ;
* les tests réalisés ;
* les résultats obtenus ;
* une courte explication du rôle de la boucle externe et de la boucle interne.

**Résultat attendu :**

Pour :

```javascript
let nombres = [12, 7, 19, 4, 15, 8, 2, 11];
```

le programme doit afficher :

```text
[2, 4, 7, 8, 11, 12, 15, 19]
```

Pour :

```javascript
let nombres = [20, 5, 12, 3, 18, 9];
```

le programme doit afficher :

```text
[3, 5, 9, 12, 18, 20]
```

Pour :

```javascript
let nombres = [4, 4, 2, 7, 2];
```

le programme doit afficher :

```text
[2, 2, 4, 4, 7]
```

**Critère de réussite :**

La solution est réussie lorsque :

* le tri fonctionne sur plusieurs tableaux ;
* chaque étape recherche le minimum dans la partie restante ;
* la position du minimum est correctement mémorisée ;
* l'échange est correctement réalisé ;
* les valeurs répétées sont conservées ;
* aucune méthode `Array.sort()` n'est utilisée ;
* l'apprenant peut expliquer le rôle des deux boucles.

## Bilan

**Vous avez construit :**

```text
Le tri par sélection
```

à partir des opérations étudiées précédemment :

```text
Comparer
↓
Chercher le minimum
↓
Mémoriser la position
↓
Échanger
↓
Répéter
```

Vous savez maintenant construire l'algorithme :

```text
Pour chaque position
    chercher le minimum restant
    placer ce minimum à la position courante
```

Vous savez également expliquer le rôle de :

```text
i
```

et :

```text
j
```

dans les deux boucles.

Le prochain tutoriel portera sur le **test et l'adaptation de l'algorithme**, notamment avec différents types de tableaux et l'ordre décroissant.

## Glossaire

* **Tri par sélection** : algorithme qui cherche le minimum restant et le place à la position courante.
* **Position courante** : position que l'algorithme est en train de remplir.
* **Partie restante** : partie du tableau qui n'est pas encore placée.
* **Boucle externe** : boucle qui avance d'une position à l'autre.
* **Boucle interne** : boucle qui recherche le minimum dans la partie restante.
* **PositionMinimum** : index du plus petit élément trouvé.
* **Échange** : opération qui inverse les positions de deux éléments.
