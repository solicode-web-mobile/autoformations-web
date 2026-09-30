---
title: "Construire les opérations nécessaires au tri"
layout: tuto
slug: "construire-operations-tri"
permalink: /tutos/:slug/
tuto_id: "T.121.162"
type: "classique"
version: "normal"
ua: "UA.121.16"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
----

## 1. Objectif

Dans le tutoriel précédent, vous avez appris à :

* reconnaître un ordre ;
* comparer des valeurs ;
* trouver un minimum ;
* repérer une position ;
* classer manuellement une collection.

Dans ce tutoriel, vous allez transformer ces actions en **traitements utilisables par un programme**.

Vous allez apprendre à :

* rechercher un minimum dans un tableau ;
* mémoriser sa position ;
* rechercher un minimum à partir d'une position donnée ;
* échanger deux éléments ;
* distinguer la partie déjà placée et la partie restante.

La progression est :

```text
Chercher
↓
Mémoriser
↓
Échanger
↓
Passer à la position suivante
```

Ces opérations prépareront la construction du **tri par sélection** dans le tutoriel suivant.

## 2. Prérequis

Vous devez savoir :

* manipuler un tableau ;
* utiliser un index ;
* utiliser `length` ;
* parcourir un tableau avec une boucle ;
* utiliser une condition ;
* comparer deux valeurs ;
* trouver un minimum ;
* trouver un maximum ;
* échanger deux variables avec une variable temporaire ;
* créer et utiliser une fonction simple.

Vous devez également avoir terminé :

**T.121.161 — Comprendre l'ordre et le tri**

## Données de départ

Nous allons utiliser le tableau suivant :

```javascript
let nombres = [7, 3, 9, 2, 5];
```

Les index sont :

```text
Index 0 → 7
Index 1 → 3
Index 2 → 9
Index 3 → 2
Index 4 → 5
```

L'objectif est de construire progressivement les opérations qui permettront ensuite de trier ce tableau.

## Partie 1 — Théorie

### 1.1. Rechercher le minimum

Dans :

```text
[7, 3, 9, 2, 5]
```

la plus petite valeur est :

```text
2
```

Pour qu'un programme puisse la trouver, il doit comparer les valeurs.

On peut commencer avec :

```text
minimum = première valeur
```

Puis comparer cette valeur avec les autres.

Pour notre tableau :

```text
minimum = 7
```

Puis :

```text
3 < 7
```

donc :

```text
minimum = 3
```

Ensuite :

```text
9 < 3
```

Faux.

Puis :

```text
2 < 3
```

Vrai.

On obtient :

```text
minimum = 2
```

Enfin :

```text
5 < 2
```

Faux.

Le minimum final est donc :

```text
2
```

### 1.2. Construire la recherche du minimum

On peut traduire cette logique en JavaScript :

```javascript
let nombres = [7, 3, 9, 2, 5];

let minimum = nombres[0];

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] < minimum) {
        minimum = nombres[i];
    }
}

console.log("Minimum :", minimum);
```

Résultat :

```text
Minimum : 2
```

Le traitement est :

```text
Prendre une première valeur
↓
Comparer avec les suivantes
↓
Conserver la plus petite
↓
Obtenir le minimum
```

### 1.3. Pourquoi mémoriser la position ?

Pour trier une collection, connaître seulement la valeur minimale ne suffit pas.

Nous devons aussi savoir **où elle se trouve**.

Dans :

```text
[7, 3, 9, 2, 5]
```

la valeur `2` se trouve à l'index :

```text
3
```

Cette information permet ensuite de déplacer cette valeur.

Nous avons donc besoin de deux informations :

```text
minimum
positionMinimum
```

### 1.4. Rechercher le minimum et sa position

Au lieu de mémoriser seulement la valeur, nous pouvons mémoriser son index.

On commence par :

```javascript
let positionMinimum = 0;
```

Cela signifie :

```text
le minimum actuel est à la position 0
```

Puis on compare les autres valeurs :

```javascript
let nombres = [7, 3, 9, 2, 5];

let positionMinimum = 0;

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] < nombres[positionMinimum]) {
        positionMinimum = i;
    }
}

console.log("Position du minimum :", positionMinimum);
console.log("Minimum :", nombres[positionMinimum]);
```

Résultat :

```text
Position du minimum : 3
Minimum : 2
```

Le programme ne mémorise donc pas directement :

```text
2
```

Il mémorise :

```text
3
```

Puis utilise :

```javascript
nombres[positionMinimum]
```

pour obtenir la valeur.

### 1.5. Pourquoi mémoriser l'index ?

L'index permet de retrouver l'élément dans le tableau.

Exemple :

```text
positionMinimum = 3
```

donne :

```text
nombres[3] = 2
```

Mais cette information permet aussi plus tard de réaliser un échange :

```text
nombres[0]
avec
nombres[3]
```

C'est donc l'index qui permet d'agir sur la position de l'élément.

### 1.6. Rechercher à partir d'une position

Pour construire un tri, on ne cherchera pas toujours dans tout le tableau.

Exemple :

```text
[2, 3, 9, 7, 5]
```

La partie :

```text
[2, 3]
```

est déjà correctement placée.

Il reste :

```text
[9, 7, 5]
```

La recherche doit donc commencer à l'index `2`.

On peut représenter cela ainsi :

```text
[2, 3 | 9, 7, 5]
       ↑
       début de la partie restante
```

Il faut donc pouvoir dire au programme :

> Commence la recherche à cette position.

### 1.7. Utiliser une position de départ

On peut construire un traitement qui reçoit une position de départ.

Exemple :

```javascript
let nombres = [2, 3, 9, 7, 5];

let debut = 2;
let positionMinimum = debut;

for (let i = debut + 1; i < nombres.length; i++) {
    if (nombres[i] < nombres[positionMinimum]) {
        positionMinimum = i;
    }
}

console.log("Position du minimum :", positionMinimum);
console.log("Minimum :", nombres[positionMinimum]);
```

Résultat :

```text
Position du minimum : 4
Minimum : 5
```

Le programme a recherché le minimum uniquement dans :

```text
[9, 7, 5]
```

Il n'a pas modifié :

```text
[2, 3]
```

### 1.8. Partie placée et partie restante

Cette idée est importante pour le tri.

Exemple :

```text
[2, 3 | 9, 7, 5]
```

On peut lire :

```text
Partie déjà placée :
[2, 3]

Partie restante :
[9, 7, 5]
```

Puis :

```text
[2, 3, 5 | 7, 9]
```

La partie placée devient :

```text
[2, 3, 5]
```

et la partie restante :

```text
[7, 9]
```

Le tri avance donc progressivement vers la droite.

### 1.9. Échanger deux valeurs

Pour déplacer le minimum, il faut pouvoir échanger deux valeurs.

Ce traitement a déjà été appris précédemment.

Exemple :

```javascript
let a = 10;
let b = 20;

let temporaire = a;
a = b;
b = temporaire;
```

Après l'échange :

```text
a = 20
b = 10
```

Le même principe fonctionne avec un tableau.

### 1.10. Échanger deux éléments d'un tableau

Partons de :

```javascript
let nombres = [7, 3, 9, 2, 5];
```

Nous voulons échanger :

```text
7
```

et :

```text
2
```

Leurs positions sont :

```text
index 0
index 3
```

On utilise :

```javascript
let temporaire = nombres[0];

nombres[0] = nombres[3];
nombres[3] = temporaire;
```

Le tableau devient :

```text
[2, 3, 9, 7, 5]
```

### 1.11. Pourquoi utiliser une variable temporaire ?

Sans variable temporaire :

```javascript
nombres[0] = nombres[3];
nombres[3] = nombres[0];
```

la valeur originale de `nombres[0]` est perdue.

La variable temporaire permet de la conserver :

```text
ancienne valeur
↓
variable temporaire
↓
nouvelle position
```

### 1.12. Combiner recherche et échange

Nous disposons maintenant de deux opérations :

```text
1. rechercher la position du minimum
2. échanger deux éléments
```

Prenons :

```text
[7, 3, 9, 2, 5]
```

Le minimum est :

```text
2
```

Sa position est :

```text
3
```

La position à traiter est :

```text
0
```

Nous pouvons donc échanger :

```text
index 0
avec
index 3
```

Le résultat devient :

```text
[2, 3, 9, 7, 5]
```

La première valeur est maintenant correctement placée.

### 1.13. Passer à la position suivante

Après avoir placé `2`, nous ne devons plus chercher un nouveau minimum dans tout le tableau.

Nous avons :

```text
[2 | 3, 9, 7, 5]
```

La première position est terminée.

La recherche suivante commence à :

```text
index 1
```

Puis :

```text
[2, 3 | 9, 7, 5]
```

La recherche suivante commence à :

```text
index 2
```

Le principe devient :

```text
Position actuelle
↓
Chercher le minimum dans la partie restante
↓
Mémoriser sa position
↓
Échanger
↓
Passer à la position suivante
```

Nous avons maintenant les opérations nécessaires pour construire le tri.

### 1.14. À retenir

Les trois opérations importantes sont :

```text
Chercher
↓
Mémoriser la position
↓
Échanger
```

Pour le tri, il faut aussi savoir :

```text
où commence la partie restante
```

Le tri pourra donc travailler progressivement :

```text
[partie placée | partie restante]
```

## Partie 2 — Pratique

### 2.1. Rechercher le minimum

Utilisez :

```javascript
let nombres = [12, 7, 19, 4, 15];
```

Construisez un programme qui affiche :

```text
Minimum : 4
```

Commencez avec :

```text
minimum = première valeur
```

Puis parcourez les autres valeurs.

**Travail :**

Écrivez le code permettant de rechercher le minimum.

### 2.2. Rechercher la position du minimum

Avec :

```javascript
let nombres = [12, 7, 19, 4, 15];
```

construisez un programme qui affiche :

```text
Position du minimum : 3
```

Puis affichez également :

```text
Minimum : 4
```

Utilisez une variable :

```javascript
positionMinimum
```

### 2.3. Rechercher dans une partie du tableau

Utilisez :

```javascript
let nombres = [2, 5, 9, 7, 3, 8];
```

Considérez :

```text
[2, 5 | 9, 7, 3, 8]
```

La partie restante commence à l'index `2`.

Recherchez uniquement le minimum dans :

```text
[9, 7, 3, 8]
```

Le résultat attendu est :

```text
Minimum : 3
Position : 4
```

Ne recherchez pas dans :

```text
[2, 5]
```

### 2.4. Faire un échange

Utilisez :

```javascript
let nombres = [7, 3, 9, 2, 5];
```

Échangez :

```text
7
```

et :

```text
2
```

Le résultat attendu est :

```text
[2, 3, 9, 7, 5]
```

Utilisez une variable temporaire.

### 2.5. Échanger deux positions données

Construisez un programme qui échange les valeurs situées aux positions suivantes :

```text
position 0
position 3
```

Avec :

```javascript
let nombres = [7, 3, 9, 2, 5];
```

Le résultat doit être :

```text
[2, 3, 9, 7, 5]
```

### 2.6. Combiner recherche et échange

Prenez :

```javascript
let nombres = [7, 3, 9, 2, 5];
```

Réalisez les étapes suivantes :

```text
1. Chercher le minimum.
2. Trouver sa position.
3. Échanger le minimum avec la position 0.
```

Vous devez obtenir :

```text
[2, 3, 9, 7, 5]
```

Ne réalisez qu'une seule étape du tri.

L'objectif n'est pas encore de construire la boucle complète du tri.

### 2.7. Deuxième étape

Partez de :

```text
[2, 3, 9, 7, 5]
```

Considérez :

```text
[2, 3 | 9, 7, 5]
```

La partie restante commence à l'index `2`.

Trouvez le minimum de cette partie.

Vous devez trouver :

```text
Minimum : 5
Position : 4
```

Échangez ensuite `5` avec l'élément situé à l'index `2`.

Résultat attendu :

```text
[2, 3, 5, 7, 9]
```

### 2.8. Observer la progression

Représentez les étapes :

```text
[7, 3, 9, 2, 5]
```

Puis :

```text
[2, 3, 9, 7, 5]
```

Puis :

```text
[2, 3, 5, 7, 9]
```

Pour chaque étape, indiquez :

| Étape | Début de la partie restante | Minimum | Position du minimum |
| ----- | --------------------------: | ------: | ------------------: |
| 1     |                             |         |                     |
| 2     |                             |         |                     |

Cette activité permet de vérifier que vous comprenez le déplacement de la zone de recherche.

### 2.9. Exercice individuel

Utilisez :

```javascript
let nombres = [8, 3, 6, 1, 5];
```

Réalisez uniquement la **première étape** du futur tri par sélection :

1. rechercher le minimum ;
2. mémoriser sa position ;
3. échanger avec la position `0`.

Vous devez obtenir :

```text
[1, 3, 6, 8, 5]
```

Puis réalisez la **deuxième étape** :

```text
partie restante :
[3, 6, 8, 5]
```

Recherchez le minimum.

Vous devez obtenir :

```text
[1, 3, 6, 8, 5]
```

La valeur `3` est déjà à la bonne position.

### 2.10. Exercice de synthèse

Utilisez :

```javascript
let nombres = [10, 4, 8, 2, 6];
```

Complétez le tableau :

| Étape | Début de recherche | Minimum | Position du minimum | Tableau après échange |
| ----- | -----------------: | ------: | ------------------: | --------------------- |
| 1     |                    |         |                     |                       |
| 2     |                    |         |                     |                       |
| 3     |                    |         |                     |                       |
| 4     |                    |         |                     |                       |

Ne cherchez pas encore à créer le tri complet avec une boucle externe.

Votre objectif est de comprendre et de construire les **opérations préparatoires**.

**Travail à faire :**

Construire les opérations permettant de rechercher un minimum, mémoriser sa position et échanger deux éléments.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le code de recherche du minimum ;
* le code de recherche de la position du minimum ;
* le code d'échange ;
* les résultats des tests ;
* les étapes de recherche et d'échange réalisées manuellement.

**Résultat attendu :**

Vous devez être capable d'obtenir :

```text
Collection :
[7, 3, 9, 2, 5]

Minimum :
2

Position du minimum :
3

Après échange avec la position 0 :
[2, 3, 9, 7, 5]
```

Puis :

```text
Partie restante :
[9, 7, 5]

Minimum :
5

Position :
4

Après échange :
[2, 3, 5, 7, 9]
```

**Critère de réussite :**

Vous avez réussi lorsque vous êtes capable de :

* rechercher un minimum avec une boucle ;
* mémoriser sa position ;
* rechercher dans une partie du tableau ;
* échanger deux éléments avec une variable temporaire ;
* expliquer la différence entre la partie placée et la partie restante ;
* réaliser manuellement une ou plusieurs étapes du futur tri.

## Bilan

**Vous avez construit les opérations nécessaires au tri :**

```text
Rechercher le minimum
↓
Mémoriser sa position
↓
Échanger
```

Vous avez également appris à limiter la recherche à une partie du tableau :

```text
[partie placée | partie restante]
```

Le traitement peut maintenant avancer progressivement :

```text
[7, 3, 9, 2, 5]
        ↓
[2, 3, 9, 7, 5]
        ↓
[2, 3, 5, 7, 9]
```

Vous disposez maintenant des briques nécessaires pour construire l'algorithme complet.

Dans le prochain tutoriel, vous allez vous entraîner sur ces opérations avant de construire le **tri par sélection**.

## Glossaire

* **Position** : index d'un élément dans un tableau.
* **Position minimum** : index de la plus petite valeur recherchée.
* **Partie placée** : partie du tableau dont les éléments sont déjà placés à leur position correcte.
* **Partie restante** : partie du tableau qui doit encore être traitée.
* **Échange** : opération qui inverse les positions de deux valeurs.
* **Variable temporaire** : variable utilisée pour conserver une valeur pendant un échange.
* **Recherche** : parcours d'une collection pour trouver une valeur qui respecte une règle.
* **Minimum** : plus petite valeur d'une collection ou d'une partie de collection.
