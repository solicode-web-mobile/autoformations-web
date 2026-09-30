---
title: "Exercices de décomposition"
layout: tuto
slug: "exercices-decomposition"
permalink: /tutos/:slug/
tuto_id: "T.121.174"
type: "classique"
version: "normal"
ua: "UA.121.17"
nav_order: 4
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans les tutoriels précédents, vous avez appris à :

* identifier un problème global ;
* le découper en sous-problèmes ;
* donner une responsabilité claire à chaque sous-problème ;
* définir les entrées et les sorties ;
* construire et tester un sous-traitement.

Dans ce tutoriel, vous allez vous entraîner à **décomposer plusieurs problèmes algorithmiques**.

Pour chaque problème, vous devrez :

```text
Comprendre
↓
Identifier le problème global
↓
Repérer les sous-problèmes
↓
Définir les responsabilités
↓
Choisir les traitements connus
```

Vous ne devez pas encore construire le traitement global.

L'objectif est de savoir **préparer la conception avant le code**.

## 2. Prérequis

Vous devez savoir :

* manipuler des variables ;
* utiliser des conditions ;
* utiliser des boucles ;
* utiliser des tableaux ;
* créer et utiliser des fonctions ;
* calculer une somme ;
* calculer une moyenne ;
* trouver un maximum ;
* trouver un minimum ;
* compter selon une règle ;
* analyser un problème ;
* décomposer un problème ;
* définir les entrées et sorties d'un traitement.

Vous devez avoir terminé :

**T.121.171 — Comprendre la décomposition d'un problème**

**T.121.172 — Définir les entrées et sorties des traitements**

**T.121.173 — Construire les sous-traitements**

## Données de départ

Les exercices utilisent des problèmes simples avec plusieurs résultats.

Les traitements déjà connus peuvent être réutilisés :

```text id="kq7t0p"
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
```

Pour certains exercices, vous devrez identifier vous-même un traitement supplémentaire à construire.

## Partie 1 — Théorie

### 1.1. La méthode de décomposition

Pour chaque problème, ne commencez pas par le code.

Commencez par répondre :

```text id="x7g3q1"
Quel est le problème global ?
```

Puis :

```text id="m2v8p4"
Quelles sont les grandes tâches nécessaires ?
```

Enfin :

```text id="r5k1z9"
Quel traitement peut réaliser chaque tâche ?
```

La méthode est :

```text id="j8c4w2"
Problème global
↓
Sous-problèmes
↓
Responsabilités
↓
Traitements
```

### 1.2. Identifier les sous-problèmes

Un sous-problème correspond à une tâche précise.

Exemple :

> Calculer les résultats d'un apprenant.

On peut avoir plusieurs tâches :

```text id="p4n7s3"
calculer la moyenne
trouver la meilleure note
compter les notes validées
```

Chaque tâche devient un sous-problème.

### 1.3. Donner une responsabilité claire

Chaque sous-problème doit être formulé avec une action claire.

Préférez :

```text id="q1m6v8"
Calculer la moyenne
Trouver le maximum
Compter les valeurs validées
```

Évitez :

```text id="n9c2r5"
Gérer les notes
Traiter les résultats
Analyser les données
```

Ces formulations sont trop générales.

### 1.4. Choisir un traitement connu

Après avoir identifié une tâche, cherchez d'abord dans les traitements déjà appris.

Exemple :

```text id="u5h8k3"
Calculer la somme
↓
calculerSomme()
```

ou :

```text id="z6p2w4"
Trouver la plus grande valeur
↓
trouverMaximum()
```

L'objectif est de **réutiliser ce qui existe déjà**.

### 1.5. Ne pas décomposer inutilement

La décomposition doit rendre le problème plus clair.

Ne découpez pas une opération simple en petites fonctions sans raison.

Par exemple :

```text id="d3r7q1"
calculer une somme
```

est déjà une tâche suffisamment claire au niveau N1.

Il n'est pas nécessaire de créer :

```text id="y5m8p2"
lire une valeur
ajouter une valeur
stocker une somme
```

La bonne décomposition travaille sur des **traitements utiles**.

### 1.6. Décomposition et responsabilité

Pour chaque sous-problème, demandez :

> Que doit faire exactement ce traitement ?

Puis :

> Quel résultat doit-il produire ?

Exemple :

```text id="v4c9s6"
Sous-problème :
Trouver la meilleure note

Responsabilité :
trouver la plus grande note

Traitement :
trouverMaximum()

Résultat :
maximum
```

### 1.7. Décomposition sans chaînage

Dans ce tutoriel, vous devez surtout identifier les traitements.

Vous pouvez avoir :

```text id="p7n2x5"
calculerMoyenne()
trouverMaximum()
compterValidees()
```

sans encore construire :

```text id="h3m6q8"
moyenne
↓
déterminer une appréciation
```

L'ordre et les dépendances seront étudiés plus loin.

### 1.8. À retenir

Pour décomposer un problème :

```text id="c8r2v7"
1. Lire le problème.
2. Identifier l'objectif global.
3. Chercher les grandes tâches.
4. Donner une responsabilité à chaque tâche.
5. Associer les traitements connus.
6. Vérifier que chaque sous-problème est utile.
```

## Partie 2 — Pratique

### 2.1. Exercice 1 — Résultats d'un apprenant

#### Problème

Un programme reçoit les notes d'un apprenant.

Il doit :

* calculer la moyenne ;
* trouver la meilleure note ;
* trouver la plus petite note ;
* déterminer si l'apprenant est validé.

Données :

```javascript id="e8m3q7"
let notes = [14, 9, 12, 16, 7];
```

#### Travail à faire

Identifiez le problème global :

```text id="z5n1c8"
________________________________________
```

Identifiez les sous-problèmes :

```text id="j4p7x2"
Sous-problème 1 :
________________________________________

Sous-problème 2 :
________________________________________

Sous-problème 3 :
________________________________________

Sous-problème 4 :
________________________________________
```

Associez ensuite chaque sous-problème à un traitement connu lorsque cela est possible.

| Sous-problème | Responsabilité | Traitement |
| ------------- | -------------- | ---------- |
|               |                |            |
|               |                |            |
|               |                |            |
|               |                |            |

### 2.2. Exercice 2 — Analyse d'une collection

#### Problème

Un programme reçoit une liste de nombres.

Il doit :

* calculer la somme ;
* calculer la moyenne ;
* trouver la plus grande valeur ;
* trouver la plus petite valeur ;
* compter les valeurs supérieures ou égales à `10`.

Données :

```javascript id="n4w8s1"
let nombres = [12, 5, 18, 7, 20, 10];
```

#### Travail à faire

Complétez :

```text id="q6r2m9"
Problème global :
________________________________________
```

Puis :

```text id="a3v7k5"
Sous-problème 1 :
________________________________________

Sous-problème 2 :
________________________________________

Sous-problème 3 :
________________________________________

Sous-problème 4 :
________________________________________

Sous-problème 5 :
________________________________________
```

Complétez ensuite :

| Sous-problème | Responsabilité | Traitement connu ? |
| ------------- | -------------- | ------------------ |
|               |                |                    |
|               |                |                    |
|               |                |                    |
|               |                |                    |
|               |                |                    |

### 2.3. Exercice 3 — Identifier une bonne décomposition

#### Problème

Une boutique possède une liste de prix.

Le programme doit calculer le total de la commande.

Données :

```javascript id="y8p1d6"
let prix = [20, 30, 15, 35];
```

Comparez les deux propositions.

#### Proposition A

```text id="b5k7r2"
calculerCommande()
```

#### Proposition B

```text id="c2m8q4"
calculerTotal()
```

Répondez :

> Quelle proposition correspond mieux au problème ?

Expliquez votre réponse en utilisant la notion de **responsabilité**.

### 2.4. Exercice 4 — Prix d'une commande

#### Problème

Une boutique reçoit une liste de prix.

Le programme doit :

* calculer le total ;
* calculer une remise ;
* calculer le prix final.

Données :

```javascript id="r7v3n5"
let prix = [20, 30, 15, 35];
```

#### Travail à faire

Identifiez le problème global.

Puis décomposez-le :

```text id="k1x6s9"
Problème global
├── ______________________________
├── ______________________________
└── ______________________________
```

Pour chaque sous-problème, complétez :

| Sous-problème | Responsabilité | Traitement |
| ------------- | -------------- | ---------- |
|               |                |            |
|               |                |            |
|               |                |            |

Ne construisez pas encore les fonctions.

### 2.5. Exercice 5 — Résultat d'une formation

#### Problème

Une application reçoit les notes d'un groupe.

Elle doit :

* calculer la moyenne ;
* compter les notes validées ;
* produire une appréciation générale.

Données :

```javascript id="f2q9k4"
let notes = [12, 15, 8, 17, 10];
```

Décomposez le problème.

Complétez :

```text id="d6m3p7"
Problème global :
________________________________________

Sous-problème 1 :
________________________________________

Sous-problème 2 :
________________________________________

Sous-problème 3 :
________________________________________
```

Puis indiquez la responsabilité de chaque sous-problème.

### 2.6. Exercice 6 — Analyser un problème avec plusieurs résultats

#### Problème

Une application analyse une collection de nombres.

Elle doit :

* compter les valeurs ;
* calculer la somme ;
* calculer la moyenne ;
* trouver le maximum ;
* trouver le minimum ;
* compter les valeurs paires.

Données :

```javascript id="s9w2m5"
let nombres = [12, 5, 18, 7, 20, 10];
```

#### Travail à faire

Construisez la décomposition complète :

```text id="h4n8q1"
Problème global
↓
Sous-problèmes
↓
Responsabilités
↓
Traitements
```

Puis complétez :

| Résultat demandé         | Sous-problème | Traitement |
| ------------------------ | ------------- | ---------- |
| Nombre de valeurs        |               |            |
| Somme                    |               |            |
| Moyenne                  |               |            |
| Maximum                  |               |            |
| Minimum                  |               |            |
| Nombre de valeurs paires |               |            |

Pour le dernier traitement, vous devrez identifier la condition nécessaire.

### 2.7. Exercice 7 — Identifier une mauvaise décomposition

Observez :

```text id="p3c7v9"
Analyser les notes
├── lire la première note
├── lire la deuxième note
├── lire la troisième note
├── comparer avec 10
├── additionner
├── afficher
```

Répondez :

> Cette décomposition est-elle adaptée au niveau N1 ?

Identifiez le problème.

Puis proposez une décomposition plus utile.

Votre proposition doit travailler sur des **responsabilités de traitement**, et non sur chaque instruction du programme.

### 2.8. Exercice 8 — Décomposition avec recherche et tri

#### Problème

Une application reçoit une collection de nombres.

Elle doit :

* trouver le minimum ;
* trouver le maximum ;
* trier la collection ;
* afficher les résultats.

Données :

```javascript id="w6k2r8"
let nombres = [7, 3, 9, 2, 5];
```

Décomposez le problème.

Complétez :

```text id="m8q4c1"
Problème global
├── ______________________________
├── ______________________________
├── ______________________________
└── ______________________________
```

Associez les traitements connus lorsque cela est possible.

### 2.9. Exercice 9 — Décomposition d'un problème de commande

#### Problème

Une commande contient plusieurs produits.

Pour chaque commande, le programme doit :

* calculer le total ;
* appliquer une remise ;
* calculer le prix final ;
* déterminer si la commande bénéficie de la remise.

Décomposez le problème.

Vous devez identifier au minimum :

```text id="g2v8n4"
Sous-problème 1 :
________________________________________

Sous-problème 2 :
________________________________________

Sous-problème 3 :
________________________________________

Sous-problème 4 :
________________________________________
```

Puis indiquez la responsabilité de chaque sous-problème.

### 2.10. Exercice 10 — Problème proche de la synthèse

#### Problème

Madani Ali souhaite analyser les résultats d'un groupe.

Le programme reçoit :

```javascript id="c9x5m2"
let notes = [13, 8, 16, 11, 7, 15];
```

Il doit produire :

```text id="s7p3v8"
Nombre de notes
Somme
Moyenne
Maximum
Minimum
Nombre de notes validées
Appréciation
```

Une note est validée lorsque :

```text id="y1k6q4"
note >= 10
```

L'appréciation dépend de la moyenne.

#### Travail à faire

Décomposez le problème sans coder.

Complétez :

```text id="e5r9t2"
Problème global :
________________________________________
```

Puis :

```text id="u3m8c7"
Sous-problème 1 :
________________________________________

Sous-problème 2 :
________________________________________

Sous-problème 3 :
________________________________________

Sous-problème 4 :
________________________________________

Sous-problème 5 :
________________________________________

Sous-problème 6 :
________________________________________

Sous-problème 7 :
________________________________________
```

Pour chaque élément, indiquez :

```text id="a6q2w9"
Responsabilité :
________________________________________

Traitement connu :
________________________________________
```

Ne cherchez pas encore à déterminer l'ordre d'exécution.

### 2.11. Exercice 11 — Comparer deux décompositions

Pour le problème précédent, comparez :

#### Décomposition A

```text id="j8p4x5"
analyserNotes()
```

#### Décomposition B

```text id="v2m6q9"
compterNotes()
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
determinerAppreciation()
```

Répondez :

* quelle décomposition permet de mieux identifier les responsabilités ;
* laquelle facilite les tests ;
* laquelle permet de mieux réutiliser les traitements.

Justifiez votre réponse.

### 2.12. Exercice 12 — Produire un schéma de décomposition

Prenez le problème suivant :

> Une application doit analyser les notes d'un groupe et produire un rapport simple.

Données :

```javascript id="d7k2m5"
let notes = [14, 9, 12, 16, 7, 11];
```

Vous devez produire uniquement un schéma :

```text id="n4v8c1"
Problème global
│
├── __________________________
│
├── __________________________
│
├── __________________________
│
└── __________________________
```

Puis donnez la responsabilité de chaque élément.

### 2.13. Exercice de synthèse

Décomposez complètement le problème suivant :

> Un programme reçoit une liste de notes. Il doit analyser les résultats du groupe, produire plusieurs indicateurs et déterminer une appréciation générale.

Données :

```javascript id="x5q7m3"
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Vous devez produire :

#### 1. Problème global

```text id="p9c4r6"
________________________________________
```

#### 2. Sous-problèmes

```text id="t2m8v5"
________________________________________
________________________________________
________________________________________
________________________________________
________________________________________
```

#### 3. Responsabilités

Pour chaque sous-problème :

```text id="z6q1w8"
Sous-problème :
____________________

Responsabilité :
____________________
```

#### 4. Traitements connus

Associez, lorsque cela est possible :

```text id="s3n7k2"
____________________ → ____________________

____________________ → ____________________

____________________ → ____________________

____________________ → ____________________
```

### 2.14. Vérification de votre décomposition

Avant de terminer, vérifiez votre travail.

Posez-vous les questions suivantes :

```text id="v8m4q1"
Chaque sous-problème a-t-il un rôle clair ?

Chaque sous-problème est-il utile ?

Ai-je réutilisé des traitements déjà connus ?

Ai-je évité de découper le problème ligne par ligne ?

Ai-je évité de créer une fonction qui fait plusieurs tâches différentes ?

Ai-je séparé les responsabilités ?
```

Vous ne devez pas encore répondre à :

```text id="c2x7p9"
Quel traitement s'exécute en premier ?
```

Cette question sera approfondie dans le travail sur les dépendances et le chaînage.

**Travail à faire :**

Décomposer plusieurs problèmes algorithmiques en sous-problèmes utiles et clairement définis.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* les problèmes analysés ;
* les problèmes globaux ;
* les sous-problèmes ;
* les responsabilités ;
* les traitements réutilisables ;
* les schémas de décomposition ;
* les comparaisons entre bonnes et mauvaises décompositions.

**Résultat attendu :**

Pour chaque problème, votre document doit permettre de passer de :

```text id="q1r6v8"
Problème global
```

à :

```text id="m7c3x5"
Sous-problème 1
Sous-problème 2
Sous-problème 3
...
```

Chaque sous-problème doit avoir :

```text id="j9p2w4"
une responsabilité claire
```

et, lorsque cela est possible :

```text id="s6n8k1"
un traitement connu à réutiliser
```

**Critère de réussite :**

Vous avez réussi lorsque vous êtes capable de :

* identifier correctement le problème global ;
* repérer les sous-problèmes utiles ;
* donner une responsabilité claire à chaque sous-problème ;
* associer les traitements déjà connus ;
* éviter une décomposition trop fine ;
* éviter une fonction qui regroupe trop de responsabilités ;
* distinguer la décomposition de l'ordre d'exécution ;
* préparer une solution avant de commencer le code.

## Bilan

Vous avez maintenant pratiqué la **décomposition** sur plusieurs problèmes.

Votre démarche devient :

```text id="c7v2m9"
Problème global
↓
Sous-problèmes
↓
Responsabilités
↓
Traitements réutilisables
```

Vous savez reconnaître une bonne décomposition :

```text id="n5q8x3"
une tâche claire
↓
une responsabilité claire
↓
un traitement compréhensible
```

Vous avez également compris qu'il ne faut pas découper un problème de manière artificielle.

La prochaine étape consiste à aller plus loin :

```text id="r3m7k1"
Quel traitement reçoit quelles données ?
↓
Quel résultat produit-il ?
↓
Quel traitement utilise ce résultat ?
↓
Dans quel ordre travailler ?
```

C'est l'objectif de **T.121.175 — Construire et chaîner plusieurs traitements**.

## Glossaire

* **Décomposition** : division d'un problème global en plusieurs sous-problèmes utiles.
* **Sous-problème** : partie d'un problème qui peut être traitée séparément.
* **Responsabilité** : tâche précise attribuée à un sous-traitement.
* **Traitement** : action réalisée sur une ou plusieurs données.
* **Réutilisation** : utilisation d'un traitement déjà construit.
* **Décomposition fine** : découpage en éléments trop petits et peu utiles.
* **Décomposition utile** : découpage qui rend le problème plus clair et plus facile à construire.
