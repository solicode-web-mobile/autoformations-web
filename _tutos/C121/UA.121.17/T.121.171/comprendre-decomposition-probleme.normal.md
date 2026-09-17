---

title: "Comprendre la décomposition d'un problème"
layout: tuto
slug: "comprendre-decomposition-probleme"
permalink: /tutos/:slug/
tuto_id: "T.121.171"
type: "classique"
version: "normal"
ua: "UA.121.17"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
-----------

## 1. Objectif

Dans les tutoriels précédents, vous avez appris à résoudre des problèmes en choisissant des traitements connus.

Dans ce tutoriel, vous allez apprendre une nouvelle méthode :

**décomposer un problème en plusieurs sous-problèmes plus simples.**

Vous allez apprendre à :

* reconnaître un problème global ;
* repérer plusieurs sous-problèmes ;
* donner un rôle clair à chaque sous-problème ;
* identifier les traitements nécessaires ;
* éviter de construire tout le problème dans un seul bloc.

La démarche devient :

```text
Problème global
↓
Sous-problème 1
↓
Sous-problème 2
↓
Sous-problème 3
```

L'objectif n'est pas encore de construire le programme complet.

Vous devez d'abord apprendre à **découper le problème**.

## 2. Prérequis

Vous devez savoir :

* utiliser des variables ;
* utiliser des conditions ;
* utiliser des boucles ;
* utiliser des tableaux ;
* utiliser des fonctions ;
* calculer une somme ;
* calculer une moyenne ;
* trouver un maximum ;
* trouver un minimum ;
* compter des valeurs ;
* résoudre un problème simple ;
* combiner plusieurs traitements.

Vous devez notamment savoir utiliser un répertoire de traitements déjà construits :

```text
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
```

## Données de départ

Nous allons utiliser un problème simple mais composé de plusieurs tâches.

### Problème

> Une application doit analyser les résultats d'un groupe d'apprenants. Elle doit calculer la moyenne, trouver la meilleure note et indiquer si le groupe est validé.

Les données sont :

```javascript
let notes = [12, 15, 8, 17, 10];
```

Le problème demande plusieurs résultats :

```text
Moyenne
Meilleure note
Validation
```

Pour le moment, nous ne construisons pas encore les fonctions.

Nous cherchons seulement à **comprendre comment découper le problème**.

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un problème global ?

Un problème global regroupe plusieurs actions nécessaires pour obtenir un résultat complet.

Exemple :

> Analyser les résultats d'un groupe et produire une appréciation.

Ce problème semble être une seule tâche.

Mais il contient en réalité plusieurs actions :

```text
Calculer la moyenne
+
Trouver la meilleure note
+
Déterminer l'appréciation
```

On peut donc dire :

```text
Problème global
↓
plusieurs sous-problèmes
```

### 1.2. Pourquoi décomposer un problème ?

Un problème peut devenir difficile lorsqu'on essaie de tout construire en même temps.

Par exemple :

```text
calculer la moyenne
+
chercher le maximum
+
compter les notes validées
+
déterminer une appréciation
+
afficher le résultat
```

dans un seul bloc peut rendre le traitement difficile à comprendre.

La décomposition permet de travailler sur des parties plus petites.

On obtient :

```text
Problème global
↓
Problèmes plus petits
↓
Traitements plus simples
```

### 1.3. Décomposer signifie découper

Décomposer un problème signifie **le diviser en plusieurs tâches plus petites**.

Exemple :

```text
Analyser les résultats
```

peut devenir :

```text
1. Calculer la moyenne
2. Trouver la meilleure note
3. Déterminer la validation
```

Chaque tâche répond à une question précise.

### 1.4. Un sous-problème doit avoir un rôle clair

Un bon sous-problème réalise une tâche précise.

Exemple :

```text
calculerMoyenne()
```

a un seul rôle :

```text
calculer la moyenne
```

De même :

```text
trouverMaximum()
```

a un seul rôle :

```text
trouver la plus grande valeur
```

Et :

```text
determinerValidation()
```

peut avoir le rôle :

```text
déterminer si la moyenne est validée
```

Chaque traitement doit donc répondre à une question simple.

### 1.5. Éviter un traitement qui fait tout

Un traitement comme :

```text
analyserTout()
```

qui :

* calcule la moyenne ;
* cherche le maximum ;
* compte les notes ;
* détermine l'appréciation ;
* affiche le résultat ;

réunit trop de responsabilités.

Pour apprendre à construire une solution claire, il est préférable de séparer les tâches :

```text
calculerMoyenne()
trouverMaximum()
compterValidees()
determinerAppreciation()
```

La décomposition permet donc de **séparer les responsabilités**.

### 1.6. Responsabilité d'un traitement

La **responsabilité** indique ce qu'un traitement doit faire.

Exemple :

| Traitement                 | Responsabilité                |
| -------------------------- | ----------------------------- |
| `calculerMoyenne()`        | calculer la moyenne           |
| `trouverMaximum()`         | trouver la plus grande valeur |
| `trouverMinimum()`         | trouver la plus petite valeur |
| `compterValidees()`        | compter les notes validées    |
| `determinerAppreciation()` | produire une appréciation     |

Un traitement doit avoir une responsabilité facile à expliquer.

### 1.7. Exemple de décomposition

Prenons :

> Une application doit analyser les notes d'un groupe et produire une appréciation.

On peut commencer par :

```text
Problème global
↓
Analyser les notes
```

Puis :

```text
Analyser les notes
├── Calculer la moyenne
├── Trouver la meilleure note
└── Déterminer l'appréciation
```

On a maintenant trois sous-problèmes.

### 1.8. Décomposer progressivement

La décomposition peut se faire en plusieurs niveaux.

Exemple :

```text
Analyser les résultats
↓
Calculer la moyenne
↓
Additionner les notes
+
Compter les notes
```

Cependant, à ce niveau N1, il ne faut pas décomposer trop loin.

L'objectif est de trouver des **unités de traitement utiles et compréhensibles**, pas de découper chaque ligne de code.

### 1.9. Quand faut-il décomposer ?

On peut envisager une décomposition lorsqu'un problème :

* demande plusieurs résultats ;
* contient plusieurs actions ;
* utilise plusieurs traitements différents ;
* devient difficile à comprendre dans un seul bloc ;
* contient des tâches que l'on peut identifier séparément.

Exemple :

```text
Calculer une somme
```

ne nécessite pas une décomposition complexe.

Mais :

```text
Analyser une liste de notes
+
déterminer une appréciation
+
produire un résultat final
```

peut être décomposé.

### 1.10. Décomposition et réutilisation

La décomposition permet aussi de réutiliser les traitements existants.

Exemple :

```text
Problème global
↓
Calculer la moyenne
↓
réutiliser calculerMoyenne()
```

Puis :

```text
Trouver la meilleure note
↓
réutiliser trouverMaximum()
```

La décomposition ne signifie donc pas forcément créer de nouveaux algorithmes.

Elle permet souvent de **réutiliser des traitements déjà construits**.

### 1.11. Décomposition sans chaînage

Dans ce tutoriel, nous nous limitons à identifier les sous-problèmes.

Par exemple :

```text
notes
├── calculerMoyenne()
├── trouverMaximum()
└── compterValidees()
```

Nous ne cherchons pas encore à déterminer précisément :

```text
quel résultat entre dans quel traitement
```

Cette notion sera étudiée dans **T.121.172**.

Pour le moment :

> **Je découpe le problème et j'identifie les responsabilités.**

### 1.12. Décomposition et chaînage

Il faut distinguer les deux notions.

La décomposition répond à :

> Quelles sont les tâches à réaliser ?

Le chaînage répond à :

> Dans quel ordre les traitements doivent-ils utiliser les résultats des autres ?

Exemple :

```text
Décomposition :

calculerMoyenne()
determinerAppreciation()
```

Puis, plus tard :

```text
Chaînage :

notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerAppreciation()
```

Dans ce tutoriel, nous travaillons principalement sur la **décomposition**.

### 1.13. À retenir

Décomposer un problème signifie :

```text
Problème global
↓
plusieurs sous-problèmes
↓
chaque sous-problème possède un rôle clair
```

La règle principale est :

> **Un traitement doit avoir une responsabilité simple et compréhensible.**

## Partie 2 — Pratique

### 2.1. Identifier les sous-problèmes

Lisez le problème :

> Une application reçoit les notes d'un groupe. Elle doit calculer la moyenne, trouver la meilleure note et compter les notes validées.

Données :

```javascript
let notes = [12, 15, 8, 17, 10];
```

Ne codez pas.

Cherchez uniquement les sous-problèmes.

Complétez :

```text
Problème global :
____________________________

Sous-problème 1 :
____________________________

Sous-problème 2 :
____________________________

Sous-problème 3 :
____________________________
```

### 2.2. Donner une responsabilité à chaque sous-problème

Complétez le tableau :

| Sous-problème | Responsabilité |
| ------------- | -------------- |
|               |                |
|               |                |
|               |                |

Chaque responsabilité doit commencer par un verbe d'action.

Exemple :

```text
calculer
trouver
compter
déterminer
```

### 2.3. Réutiliser les traitements connus

Vous disposez déjà de :

```text
calculerMoyenne()
trouverMaximum()
compterValidees()
```

Associez chaque sous-problème au traitement correspondant.

| Sous-problème              | Traitement connu |
| -------------------------- | ---------------- |
| Calculer la moyenne        |                  |
| Trouver la meilleure note  |                  |
| Compter les notes validées |                  |

L'objectif est de voir qu'un problème global peut être construit avec plusieurs traitements déjà appris.

### 2.4. Décomposer un deuxième problème

Lisez :

> Un programme analyse une liste de nombres. Il doit calculer la somme, la moyenne, trouver la plus grande valeur et trouver la plus petite valeur.

Données :

```javascript
let nombres = [12, 5, 18, 7, 20, 10];
```

Identifiez :

```text
Problème global :
____________________________

Sous-problème 1 :
____________________________

Sous-problème 2 :
____________________________

Sous-problème 3 :
____________________________

Sous-problème 4 :
____________________________
```

### 2.5. Construire le schéma

Représentez votre décomposition :

```text
Problème global
↓
Sous-problème 1
Sous-problème 2
Sous-problème 3
Sous-problème 4
```

Puis remplacez les sous-problèmes par les traitements correspondants.

Par exemple :

```text
Analyser la collection
├── __________
├── __________
├── __________
└── __________
```

### 2.6. Décomposer un problème de commande

Lisez :

> Une boutique reçoit les prix de plusieurs produits et leurs quantités. Le programme doit calculer le total, calculer une remise et déterminer le prix final.

Identifiez le problème global :

```text
____________________________
```

Puis les sous-problèmes :

```text
____________________________

____________________________

____________________________
```

Représentez votre décomposition :

```text
Commande
├── __________________
├── __________________
└── __________________
```

### 2.7. Décomposer un problème de formation

Lisez :

> Un programme reçoit les notes d'un apprenant. Il doit calculer sa moyenne, vérifier s'il est validé et produire une appréciation.

Données :

```javascript
let notes = [14, 11, 8, 16];
```

Identifiez :

```text
Problème global :
____________________________

Sous-problème 1 :
____________________________

Sous-problème 2 :
____________________________

Sous-problème 3 :
____________________________
```

Puis indiquez la responsabilité de chaque sous-problème.

### 2.8. Identifier ce qui ne doit pas être décomposé

Observez :

```text
Calculer la moyenne
```

Ce problème est déjà simple.

Demandez-vous :

> Est-il utile de créer plusieurs sous-problèmes pour cette tâche au niveau N1 ?

La réponse attendue est :

```text
Non.
```

Pourquoi ?

Parce que le traitement est déjà simple et possède une responsabilité claire.

La décomposition doit donc rester **utile**.

### 2.9. Comparer deux conceptions

#### Conception A

```text
analyserNotes()
```

Cette seule fonction :

```text
calcule la moyenne
+
trouve le maximum
+
trouve le minimum
+
compte les notes validées
+
détermine l'appréciation
```

#### Conception B

```text
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
determinerAppreciation()
```

Répondez :

> Quelle conception permet de mieux identifier les responsabilités ?

Expliquez votre réponse en vous basant sur la décomposition.

### 2.10. Exercice individuel

Décomposez le problème suivant :

> Une application doit analyser une liste de notes. Elle doit calculer le nombre de notes, la somme, la moyenne, la meilleure note, la plus petite note et le nombre de notes validées.

Utilisez :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Vous devez produire :

```text
Problème global
↓
Sous-problèmes
↓
Responsabilité de chaque sous-problème
```

Ensuite, associez chaque sous-problème à un traitement connu lorsque cela est possible.

### 2.11. Exercice de décomposition plus complexe

Lisez :

> Une application reçoit les notes d'un groupe. Elle doit calculer la moyenne du groupe, trouver la meilleure note, compter les notes validées et produire une appréciation générale.

Décomposez le problème.

Vous devez identifier au minimum :

```text
____________________________

____________________________

____________________________

____________________________
```

Puis construisez un schéma :

```text
Analyse du groupe
├── __________________
├── __________________
├── __________________
└── __________________
```

Ne cherchez pas encore à définir l'ordre d'exécution.

Ne cherchez pas encore à construire les fonctions.

L'objectif est uniquement de **décomposer correctement le problème**.

### 2.12. Exercice de synthèse

Prenez le problème :

> Madani Ali souhaite analyser les résultats d'une liste de notes. Le programme doit produire une moyenne, une meilleure note, une plus petite note, un nombre de notes validées et une appréciation générale.

Données :

```javascript
let notes = [13, 8, 16, 11, 7, 15];
```

Construisez une décomposition complète.

Vous devez produire :

```text
1. Problème global

2. Sous-problème 1
   Responsabilité :

3. Sous-problème 2
   Responsabilité :

4. Sous-problème 3
   Responsabilité :

5. Sous-problème 4
   Responsabilité :

6. Sous-problème 5
   Responsabilité :
```

Puis associez les traitements connus :

```text
calcule...
trouve...
compte...
détermine...
```

**Travail à faire :**

Décomposer plusieurs problèmes algorithmiques simples en sous-problèmes ayant chacun une responsabilité claire.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* les problèmes globaux ;
* les sous-problèmes ;
* la responsabilité de chaque sous-problème ;
* les traitements connus pouvant être réutilisés ;
* les schémas de décomposition.

**Résultat attendu :**

Pour un problème comme :

```text
Analyser les résultats d'un groupe
```

vous devez être capable de produire une structure similaire à :

```text
Analyser les résultats
├── calculer la moyenne
├── trouver la meilleure note
├── compter les notes validées
└── déterminer l'appréciation
```

Chaque élément doit avoir un rôle clair.

**Critère de réussite :**

Vous avez réussi lorsque vous êtes capable de :

* identifier le problème global ;
* repérer plusieurs sous-problèmes ;
* donner une responsabilité claire à chaque sous-problème ;
* réutiliser un traitement déjà connu lorsque cela est pertinent ;
* éviter de créer une décomposition inutile ;
* distinguer décomposition et chaînage.

## Bilan

**Vous avez appris à décomposer un problème.**

Vous savez maintenant passer de :

```text
Problème global
```

à :

```text
Problème global
↓
Sous-problèmes
↓
Responsabilités
```

Vous avez également compris qu'un sous-problème peut souvent être réalisé avec un traitement déjà appris :

```text
Sous-problème
↓
Traitement connu
```

La prochaine étape consiste à préciser chaque traitement.

Pour chaque sous-traitement, il faudra déterminer :

```text
Quelles données reçoit-il ?
↓
Quel traitement réalise-t-il ?
↓
Quel résultat produit-il ?
```

Cette étape sera étudiée dans **T.121.172 — Définir les entrées et sorties des traitements**.

## Glossaire

* **Décomposition** : division d'un problème global en plusieurs sous-problèmes.
* **Problème global** : problème complet que le programme doit résoudre.
* **Sous-problème** : partie d'un problème global qui peut être traitée séparément.
* **Responsabilité** : rôle précis attribué à un traitement.
* **Traitement** : action réalisée sur des données.
* **Réutilisation** : utilisation d'un traitement déjà construit dans un nouveau problème.
* **Décomposition utile** : découpage qui rend le problème plus clair sans créer des traitements inutiles.
