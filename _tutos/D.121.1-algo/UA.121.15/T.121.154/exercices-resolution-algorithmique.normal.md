---
title: "Exercices de résolution algorithmique"
layout: tuto
slug: "exercices-resolution-algorithmique"
permalink: /tutos/:slug/
tuto_id: "T.121.154"
type: "classique"
version: "normal"
ua: "UA.121.15"
nav_order: 4
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez vous entraîner à **résoudre des problèmes algorithmiques simples**.

Vous allez réutiliser les notions déjà apprises :

* variables ;
* conditions ;
* boucles ;
* tableaux ;
* fonctions ;
* traitements élémentaires.

Pour chaque problème, vous allez suivre la même méthode :

```text
Lire
↓
Identifier
↓
Choisir
↓
Construire
↓
Tester
↓
Vérifier
```

L'objectif est de commencer à choisir seul les traitements nécessaires.

## 2. Prérequis

Vous devez savoir :

* utiliser des variables ;
* utiliser des conditions ;
* utiliser des boucles ;
* utiliser des tableaux ;
* utiliser des fonctions ;
* calculer une somme et une moyenne ;
* rechercher une valeur ;
* trouver un maximum ou un minimum ;
* compter des valeurs selon une règle ;
* analyser un problème avant de coder.

Vous devez connaître la méthode étudiée dans les tutoriels précédents :

```text
Problème
↓
Données
↓
Résultat attendu
↓
Règles
↓
Traitements
↓
Code
↓
Test
↓
Vérification
```

## Données de départ

Les problèmes de ce tutoriel utilisent des valeurs simples.

Vous pouvez créer un fichier :

```text
resolution-problemes.js
```

Vous exécuterez le programme avec Node.js.

Les problèmes sont indépendants.

Vous devez chercher la solution à partir des traitements déjà appris.

## Partie 1 — Théorie

### 1.1. La méthode de résolution

Pour chaque problème, commencez par comprendre ce qui est demandé.

Ne commencez pas directement par le code.

Utilisez cette méthode :

```text
1. Lire le problème.
2. Identifier les données.
3. Identifier le résultat attendu.
4. Identifier les règles.
5. Choisir les traitements connus.
6. Construire le programme.
7. Tester le programme.
8. Vérifier le résultat.
```

### 1.2. Identifier les données

Commencez par chercher les informations utilisées par le programme.

Exemple :

> Un programme reçoit deux nombres et doit afficher le plus grand.

Les données sont :

```text
deux nombres
```

### 1.3. Identifier le résultat

Demandez :

> Qu'est-ce que le programme doit produire ?

Dans l'exemple précédent :

```text
le plus grand nombre
```

### 1.4. Identifier la règle

Demandez :

> Quelle règle permet d'obtenir le résultat ?

Exemple :

```text
comparer les deux nombres
```

### 1.5. Choisir les traitements connus

Vous devez utiliser les notions déjà apprises.

Exemple :

```text
Choisir entre deux résultats
→ condition

Parcourir plusieurs valeurs
→ boucle

Traiter plusieurs valeurs
→ tableau

Calculer progressivement une somme
→ accumulateur

Réutiliser un traitement
→ fonction

Chercher une valeur dans un tableau
→ recherche
```

Ne cherchez pas une nouvelle notion lorsque les notions déjà apprises permettent de résoudre le problème.

### 1.6. Tester une solution

Un premier résultat correct ne suffit pas.

Testez avec plusieurs situations.

Par exemple, pour un problème de maximum :

```text
10 et 15
15 et 10
10 et 10
```

Ces tests permettent de vérifier différentes situations.

### 1.7. Vérifier le résultat

Comparez toujours :

```text
Résultat obtenu
```

avec :

```text
Résultat attendu
```

Posez-vous la question :

> Le programme respecte-t-il exactement la règle du problème ?

### 1.8. À retenir

Pour résoudre un problème :

```text
Comprendre
↓
Identifier
↓
Choisir
↓
Construire
↓
Tester
↓
Vérifier
```

La difficulté n'est pas seulement d'écrire du code.

Il faut surtout **choisir le traitement adapté au problème**.

## Partie 2 — Pratique

### 2.1. Exercice 1 — Positif ou négatif

#### Problème

Un programme reçoit un nombre.

Il doit afficher :

```text
Positif
```

si le nombre est supérieur ou égal à `0`.

Sinon, il doit afficher :

```text
Négatif
```

#### Travail demandé

Commencez par compléter :

| Élément               | Votre réponse |
| --------------------- | ------------- |
| Donnée                |               |
| Entrée                |               |
| Résultat attendu      |               |
| Règle                 |               |
| Traitement nécessaire |               |

Choisissez ensuite les notions nécessaires.

Construisez le programme.

#### Tests

Testez avec :

```text
12
```

```text
-5
```

```text
0
```

#### Vérification

Vérifiez que chaque résultat respecte la règle.

### 2.2. Exercice 2 — Maximum de deux valeurs

#### Problème

Un programme reçoit deux nombres.

Il doit afficher le plus grand.

#### Exemple de données

```javascript
let a = 12;
let b = 18;
```

Le résultat attendu est :

```text
18
```

#### Travail demandé

Avant de coder, identifiez :

| Élément               | Votre réponse |
| --------------------- | ------------- |
| Données               |               |
| Entrées               |               |
| Sortie                |               |
| Règle                 |               |
| Traitement nécessaire |               |

Construisez ensuite le programme.

#### Tests

Testez avec :

```text
12 et 18
```

```text
25 et 10
```

```text
15 et 15
```

Vérifiez les trois situations.

### 2.3. Exercice 3 — Moyenne et validation

#### Problème

Un programme possède une liste de notes.

Il doit :

* calculer la moyenne ;
* afficher `Validé` lorsque la moyenne est supérieure ou égale à `10` ;
* afficher `Non validé` dans le cas contraire.

#### Données

```javascript
let notes = [12, 15, 8, 17];
```

#### Travail demandé

Analysez le problème avant de coder.

Complétez :

| Élément                 | Votre réponse |
| ----------------------- | ------------- |
| Entrée                  |               |
| Résultat 1              |               |
| Résultat 2              |               |
| Règle 1                 |               |
| Règle 2                 |               |
| Traitements nécessaires |               |

Construisez ensuite la solution.

#### Tests

Testez avec :

```javascript
let notes = [12, 15, 8, 17];
```

Puis :

```javascript
let notes = [8, 9, 7, 6];
```

Puis :

```javascript
let notes = [10, 10, 10];
```

Vérifiez particulièrement le cas de la moyenne égale à `10`.

### 2.4. Exercice 4 — Analyser une collection

#### Problème

Un programme possède une liste de nombres.

Il doit afficher :

* la somme ;
* la moyenne.

#### Données

```javascript
let nombres = [10, 20, 5, 15];
```

#### Travail demandé

Identifiez :

| Élément             | Votre réponse |
| ------------------- | ------------- |
| Entrée              |               |
| Sortie 1            |               |
| Sortie 2            |               |
| Traitement 1        |               |
| Traitement 2        |               |
| Notions nécessaires |               |

Construisez ensuite le programme.

#### Test

Utilisez également :

```javascript
let nombres = [4, 6, 10];
```

Comparez le résultat obtenu avec votre calcul manuel.

### 2.5. Exercice 5 — Rechercher une valeur

#### Problème

Un programme possède une liste de nombres et une valeur recherchée.

Il doit indiquer si la valeur existe dans le tableau.

#### Données

```javascript
let nombres = [12, 8, 15, 20, 7];
let valeur = 15;
```

Le résultat attendu est :

```text
true
```

#### Travail demandé

Analysez le problème.

Complétez :

| Élément               | Votre réponse |
| --------------------- | ------------- |
| Données               |               |
| Entrées               |               |
| Sortie                |               |
| Règle                 |               |
| Traitement nécessaire |               |

Construisez ensuite le programme.

#### Tests

Testez avec :

```text
15
```

```text
10
```

```text
12
```

Vous devez vérifier à la fois le cas où la valeur existe et le cas où elle n'existe pas.

### 2.6. Exercice 6 — Analyser une liste de notes

#### Problème

Un programme doit analyser les notes d'un groupe.

Il doit produire :

* la meilleure note ;
* la plus petite note ;
* la moyenne ;
* le nombre de notes validées.

Une note est validée lorsqu'elle est supérieure ou égale à `10`.

#### Données

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

#### Travail demandé

Ne commencez pas par écrire le code.

Construisez d'abord votre analyse.

| Élément                     | Votre réponse |
| --------------------------- | ------------- |
| Entrée                      |               |
| Résultat 1                  |               |
| Résultat 2                  |               |
| Résultat 3                  |               |
| Résultat 4                  |               |
| Règle de validation         |               |
| Traitement pour le maximum  |               |
| Traitement pour le minimum  |               |
| Traitement pour la moyenne  |               |
| Traitement pour le comptage |               |

Construisez ensuite votre programme en réutilisant uniquement les traitements déjà appris.

#### Tests

Testez avec le tableau :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Puis avec :

```javascript
let notes = [10, 10, 10];
```

Puis avec :

```javascript
let notes = [5, 7, 9];
```

Vérifiez chaque résultat.

### 2.7. Exercice de comparaison des solutions

Prenez deux exercices précédents.

Pour chacun, indiquez les notions utilisées.

Complétez :

| Problème                 | Notions utilisées |
| ------------------------ | ----------------- |
| Positif / négatif        |                   |
| Maximum de deux valeurs  |                   |
| Moyenne et validation    |                   |
| Analyse d'une collection |                   |
| Recherche                |                   |
| Analyse des notes        |                   |

Observez que plusieurs problèmes utilisent les mêmes notions.

L'objectif est de comprendre que **les mêmes traitements peuvent être réutilisés dans différents problèmes**.

### 2.8. Exercice final

Résolvez seul le problème suivant :

> Un formateur possède les notes de cinq apprenants. Le programme doit calculer la moyenne, trouver la meilleure note, trouver la plus petite note et compter le nombre d'apprenants validés. Une note est validée lorsqu'elle est supérieure ou égale à `10`.

Utilisez :

```javascript
let notes = [14, 9, 12, 16, 7];
```

Vous devez réaliser les étapes suivantes :

```text
1. Comprendre le problème.
2. Identifier les données.
3. Identifier les résultats.
4. Identifier les règles.
5. Choisir les traitements.
6. Construire le programme.
7. Tester.
8. Vérifier.
```

Ne cherchez pas une nouvelle méthode.

Réutilisez les traitements déjà étudiés.

**Travail à faire :**

Résoudre le problème complet en utilisant uniquement les notions déjà apprises.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* l'analyse du problème ;
* les données ;
* les résultats attendus ;
* les règles ;
* les traitements choisis ;
* le code JavaScript ;
* les tests réalisés ;
* la vérification des résultats.

**Résultat attendu :**

Pour :

```javascript
let notes = [14, 9, 12, 16, 7];
```

le programme doit produire :

```text
Nombre de notes : 5
Somme : 58
Moyenne : 11.6
Maximum : 16
Minimum : 7
Notes validées : 3
```

**Critère de réussite :**

La solution est réussie lorsque :

* le problème est correctement analysé ;
* les traitements nécessaires sont correctement choisis ;
* le programme fonctionne ;
* les résultats sont corrects ;
* plusieurs jeux de données ont été testés ;
* aucune nouvelle notion importante n'est introduite.

## Bilan

**Vous avez réalisé :**

plusieurs problèmes algorithmiques en réutilisant les notions déjà apprises.

**Vous savez maintenant :**

* analyser un problème ;
* identifier les informations utiles ;
* choisir un traitement connu ;
* construire une solution ;
* tester plusieurs situations ;
* vérifier un résultat.

La démarche devient :

```text
Problème
↓
Analyse
↓
Choix des traitements
↓
Construction
↓
Tests
↓
Vérification
```

Vous commencez ainsi à résoudre un problème **de manière autonome**, sans chercher une nouvelle notion pour chaque situation.

## Glossaire

* **Problème algorithmique** : problème qui peut être résolu par une suite d'opérations.
* **Traitement** : opération réalisée sur les données.
* **Test** : exécution du programme avec des données choisies.
* **Vérification** : contrôle du résultat obtenu.
* **Collection** : ensemble de plusieurs valeurs, par exemple un tableau.
* **Réutilisation** : utilisation d'un traitement déjà appris dans un nouveau problème.
