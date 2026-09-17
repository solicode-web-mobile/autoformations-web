---
title: "Définir les entrées et sorties des traitements"
layout: tuto
slug: "definir-entrees-sorties-traitements"
permalink: /tutos/:slug/
tuto_id: "T.121.172"
type: "classique"
version: "normal"
ua: "UA.121.17"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans le tutoriel précédent, vous avez appris à décomposer un problème en plusieurs sous-problèmes.

Dans ce tutoriel, vous allez apprendre à **décrire chaque traitement de manière précise**.

Pour chaque traitement, vous allez identifier :

* les données qu'il reçoit ;
* le traitement qu'il réalise ;
* le résultat qu'il produit.

La représentation utilisée est :

```text
Entrées
↓
Traitement
↓
Sortie
```

À la fin du tutoriel, vous saurez décrire un traitement avant de construire son code.

Vous commencerez également à repérer les situations où :

```text
Sortie d'un traitement
↓
Entrée d'un autre traitement
```

## 2. Prérequis

Vous devez savoir :

* manipuler des variables ;
* manipuler des tableaux ;
* utiliser des conditions ;
* utiliser des boucles ;
* utiliser des fonctions ;
* résoudre des problèmes simples ;
* décomposer un problème en sous-problèmes ;
* identifier la responsabilité d'un traitement.

Vous devez avoir terminé :

**T.121.171 — Comprendre la décomposition d'un problème**

## Données de départ

Nous allons utiliser le problème suivant :

> Une application reçoit les notes d'un groupe. Elle doit calculer la moyenne, trouver la meilleure note et déterminer si la moyenne est validée.

Données :

```javascript
let notes = [12, 15, 8, 17, 10];
```

La décomposition étudiée dans le tutoriel précédent peut être :

```text
Analyser les résultats
├── calculer la moyenne
├── trouver la meilleure note
└── déterminer la validation
```

Nous allons maintenant préciser les données utilisées par chaque traitement et les résultats produits.

## Partie 1 — Théorie

### 1.1. Un traitement reçoit des données

Un traitement travaille sur une ou plusieurs données.

Exemple :

```text
calculer la moyenne
```

doit recevoir :

```text
une liste de notes
```

On peut donc écrire :

```text
Entrée :
liste de notes
```

La question à poser est :

> De quelles données ce traitement a-t-il besoin ?

### 1.2. Un traitement produit un résultat

Après avoir utilisé ses données, le traitement produit une sortie.

Exemple :

```text
calculer la moyenne
```

produit :

```text
une moyenne
```

On peut donc écrire :

```text
Entrée :
liste de notes

Traitement :
calculer la moyenne

Sortie :
moyenne
```

### 1.3. Le modèle Entrées → Traitement → Sortie

Chaque traitement peut être décrit avec une structure simple :

```text
Entrées
↓
Traitement
↓
Sortie
```

Exemple :

```text
Entrée :
[12, 15, 8, 17]

↓ calculer la moyenne ↓

Sortie :
13
```

Cette description permet de comprendre le rôle du traitement avant d'écrire le code.

### 1.4. Exemple avec une fonction

En JavaScript, cette description peut devenir une fonction :

```javascript
function calculerMoyenne(notes) {
    // traitement
    return moyenne;
}
```

On peut lire cette fonction ainsi :

```text
Entrée :
notes

Traitement :
calculer la moyenne

Sortie :
moyenne
```

Le paramètre `notes` représente l'entrée.

La valeur retournée par `return` représente la sortie.

### 1.5. Décrire `trouverMaximum()`

Le traitement :

```text
trouver la meilleure note
```

peut être décrit ainsi :

```text
Entrée :
liste de notes

Traitement :
chercher la plus grande note

Sortie :
maximum
```

On peut représenter :

```text
Liste de notes
↓
trouverMaximum()
↓
meilleure note
```

Le traitement reçoit donc une collection et produit une seule valeur.

### 1.6. Décrire `compterValidees()`

Le traitement :

```text
compter les notes validées
```

peut être décrit ainsi :

```text
Entrée :
liste de notes

Règle :
note >= 10

Traitement :
compter les notes qui respectent la règle

Sortie :
nombre de notes validées
```

La règle fait partie du traitement.

On peut représenter :

```text
Liste de notes + règle de validation
↓
compterValidees()
↓
nombre de notes validées
```

### 1.7. Une entrée peut contenir plusieurs données

Un traitement peut recevoir plusieurs données.

Exemple :

> Calculer le prix final d'une commande à partir du total et de la remise.

Le traitement peut recevoir :

```text
Entrée 1 :
total

Entrée 2 :
remise
```

Puis produire :

```text
Sortie :
prix final
```

On obtient :

```text
Total + remise
↓
calculerPrixFinal()
↓
prix final
```

### 1.8. Une sortie peut devenir une entrée

C'est une notion importante.

Exemple :

```text
notes
↓
calculerMoyenne()
↓
moyenne
```

Puis :

```text
moyenne
↓
determinerValidation()
↓
statut
```

La `moyenne` est :

* la sortie de `calculerMoyenne()` ;
* l'entrée de `determinerValidation()`.

On peut représenter :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerValidation()
↓
statut
```

C'est le début du **chaînage**.

Dans ce tutoriel, nous apprenons surtout à reconnaître cette relation.

Le chaînage complet sera construit dans les tutoriels suivants.

### 1.9. Une sortie peut être utilisée par plusieurs traitements

Une sortie n'est pas forcément utilisée par un seul traitement.

Exemple :

```text
notes
↓
calculerMoyenne()
↓
moyenne
```

La moyenne peut être utilisée par :

```text
determinerValidation()
```

et :

```text
determinerAppreciation()
```

On obtient :

```text
                 ┌──→ determinerValidation()
moyenne ─────────┤
                 └──→ determinerAppreciation()
```

Une même donnée peut donc alimenter plusieurs traitements.

### 1.10. Plusieurs traitements peuvent utiliser la même entrée

Il est également possible que plusieurs traitements utilisent directement les mêmes données.

Exemple :

```text
                 ┌──→ calculerMoyenne()
notes ───────────┤
                 ├──→ trouverMaximum()
                 │
                 └──→ trouverMinimum()
```

Les trois traitements utilisent :

```text
notes
```

Ils peuvent fonctionner indépendamment.

### 1.11. Traitement indépendant et traitement dépendant

Il est important de distinguer deux situations.

#### Traitement indépendant

Le traitement reçoit directement les données principales.

Exemple :

```text
notes
↓
trouverMaximum()
↓
maximum
```

Il ne dépend pas du résultat d'un autre traitement.

#### Traitement dépendant

Le traitement utilise le résultat d'un autre traitement.

Exemple :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerValidation()
↓
statut
```

`determinerValidation()` dépend du résultat de `calculerMoyenne()`.

### 1.12. Décrire plusieurs traitements

Pour un problème complet, on peut maintenant construire un tableau.

Exemple :

| Traitement          | Entrée         | Sortie        |
| ------------------- | -------------- | ------------- |
| `calculerMoyenne()` | liste de notes | moyenne       |
| `trouverMaximum()`  | liste de notes | maximum       |
| `trouverMinimum()`  | liste de notes | minimum       |
| `compterValidees()` | liste de notes | nombre validé |

Ce tableau permet de vérifier que chaque traitement a un rôle précis.

### 1.13. Décrire une dépendance

Prenons :

```text
calculerMoyenne(notes)
```

Sortie :

```text
moyenne
```

Puis :

```text
determinerValidation(moyenne)
```

On peut représenter :

```text
Entrée du traitement A :
notes

Traitement A :
calculerMoyenne()

Sortie du traitement A :
moyenne

↓

Entrée du traitement B :
moyenne

Traitement B :
determinerValidation()

Sortie du traitement B :
validation
```

Cette représentation sera très utile pour organiser l'ordre d'exécution.

### 1.14. Ne pas confondre entrée et résultat intermédiaire

Une donnée peut changer de rôle selon le traitement.

Exemple :

```text
notes
↓
calculerMoyenne()
↓
moyenne
```

Pour `calculerMoyenne()` :

```text
notes = entrée
moyenne = sortie
```

Pour `determinerValidation()` :

```text
moyenne = entrée
validation = sortie
```

Il est donc important de toujours regarder :

> Entrée de quel traitement ?

> Sortie de quel traitement ?

### 1.15. Décrire avant de coder

Avant de créer une fonction, écrivez d'abord :

```text
Nom du traitement :
________________

Entrée :
________________

Responsabilité :
________________

Sortie :
________________
```

Exemple :

```text
Nom du traitement :
calculerMoyenne

Entrée :
liste de notes

Responsabilité :
calculer la moyenne

Sortie :
moyenne
```

Cette étape permet de détecter les problèmes avant d'écrire le code.

### 1.16. À retenir

Un traitement doit pouvoir être décrit ainsi :

```text
Entrée(s)
↓
Responsabilité / traitement
↓
Sortie(s)
```

Et lorsqu'il existe une dépendance :

```text
Sortie du traitement A
↓
Entrée du traitement B
```

La question centrale devient :

> **Quelles données ce traitement reçoit-il et quel résultat produit-il ?**

## Partie 2 — Pratique

### 2.1. Décrire `calculerMoyenne()`

À partir de :

```text
[12, 15, 8, 17]
```

complétez :

```text
Nom :
____________________

Entrée :
____________________

Responsabilité :
____________________

Sortie :
____________________
```

### 2.2. Décrire `trouverMaximum()`

Pour le même tableau, complétez :

```text
Nom :
____________________

Entrée :
____________________

Responsabilité :
____________________

Sortie :
____________________
```

### 2.3. Décrire `compterValidees()`

La règle est :

```text
note >= 10
```

Complétez :

```text
Nom :
____________________

Entrée :
____________________

Règle :
____________________

Responsabilité :
____________________

Sortie :
____________________
```

### 2.4. Construire un tableau des traitements

Pour le problème :

> Analyser les notes d'un groupe.

Utilisez les traitements :

```text
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
```

Complétez :

| Traitement          | Entrée | Sortie |
| ------------------- | ------ | ------ |
| `calculerMoyenne()` |        |        |
| `trouverMaximum()`  |        |        |
| `trouverMinimum()`  |        |        |
| `compterValidees()` |        |        |

### 2.5. Identifier les entrées communes

Observez :

```text
                 ┌──→ calculerMoyenne()
notes ───────────┼──→ trouverMaximum()
                 ├──→ trouverMinimum()
                 └──→ compterValidees()
```

Répondez :

> Quelle donnée est utilisée par les quatre traitements ?

Puis :

> Ces quatre traitements ont-ils besoin du résultat d'un autre traitement ?

Expliquez.

### 2.6. Identifier une dépendance

Considérez :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
determinerValidation()
↓
statut
```

Complétez :

```text
Entrée de calculerMoyenne :
____________________

Sortie de calculerMoyenne :
____________________

Entrée de determinerValidation :
____________________

Sortie de determinerValidation :
____________________
```

### 2.7. Construire une chaîne simple

Complétez le schéma :

```text
notes
↓
____________________
↓
moyenne
↓
____________________
↓
statut
```

Les deux traitements sont :

```text
calculerMoyenne()
determinerValidation()
```

### 2.8. Identifier plusieurs sorties

Un traitement peut produire plusieurs informations lorsque le problème le demande.

Considérez :

> Analyser une collection et produire le minimum et le maximum.

Demandez-vous :

```text
Entrée :
?

Sorties :
?
```

Puis représentez :

```text
collection
↓
traitement
↓
________________
________________
```

L'objectif est de réfléchir au résultat produit avant d'écrire le code.

### 2.9. Décrire un traitement avec plusieurs entrées

Problème :

> Calculer le prix final à partir d'un total et d'un taux de remise.

Complétez :

```text
Nom du traitement :
____________________

Entrée 1 :
____________________

Entrée 2 :
____________________

Responsabilité :
____________________

Sortie :
____________________
```

Puis représentez :

```text
Total + remise
↓
____________________
↓
Prix final
```

### 2.10. Définir les entrées et sorties d'un problème

Lisez :

> Une boutique reçoit une liste de prix. Le programme doit calculer le total, puis appliquer une remise et produire le prix final.

Données :

```javascript
let prix = [20, 30, 15, 35];
```

Décomposez les traitements :

```text
Calculer le total
↓
Appliquer la remise
↓
Produire le prix final
```

Puis complétez :

| Traitement             | Entrée | Sortie |
| ---------------------- | ------ | ------ |
| Calculer le total      |        |        |
| Calculer la remise     |        |        |
| Calculer le prix final |        |        |

### 2.11. Identifier les dépendances

À partir du problème précédent, complétez :

```text
prix
↓
____________________
↓
total
↓
____________________
↓
remise
↓
____________________
↓
prix final
```

Vous devez déterminer quelles sorties deviennent des entrées.

### 2.12. Décrire les traitements sans coder

Pour le problème suivant :

> Une formation contient plusieurs notes. Le programme doit calculer la moyenne, trouver la meilleure note et produire une appréciation à partir de la moyenne.

Données :

```javascript
let notes = [14, 11, 8, 16];
```

Produisez uniquement la description des traitements :

```text
Traitement 1
Entrée :
Responsabilité :
Sortie :

Traitement 2
Entrée :
Responsabilité :
Sortie :

Traitement 3
Entrée :
Responsabilité :
Sortie :
```

Ne construisez pas encore le code complet.

### 2.13. Exercice individuel

Décrivez les traitements du problème suivant :

> Une application analyse les résultats d'un groupe. Elle doit calculer le nombre de notes, la somme, la moyenne, le maximum, le minimum et le nombre de notes validées.

Données :

```javascript
let notes = [12, 8, 15, 9, 17, 6, 14, 10];
```

Pour chaque traitement, indiquez :

```text
Nom
Entrée
Responsabilité
Sortie
```

Vous devez obtenir une fiche pour chaque traitement.

### 2.14. Exercice sur les dépendances

Considérez le problème :

> Une application calcule la moyenne d'un groupe, puis produit une appréciation à partir de cette moyenne.

Décrivez :

```text
Traitement A :
____________________

Entrée :
____________________

Sortie :
____________________

Traitement B :
____________________

Entrée :
____________________

Sortie :
____________________
```

Puis représentez la relation :

```text
____________________
↓
____________________
↓
____________________
↓
____________________
```

### 2.15. Exercice de synthèse

Prenez le problème suivant :

> Madani Ali souhaite analyser les résultats d'un groupe. Le programme reçoit une liste de notes. Il doit calculer la moyenne, trouver la meilleure note, compter les notes validées et produire une appréciation générale. L'appréciation dépend de la moyenne.

Données :

```javascript
let notes = [13, 8, 16, 11, 7, 15];
```

Vous devez :

1. identifier chaque traitement ;
2. préciser ses entrées ;
3. préciser sa responsabilité ;
4. préciser sa sortie ;
5. identifier les traitements indépendants ;
6. identifier les traitements dépendants ;
7. représenter les relations entre les traitements.

Votre schéma final doit distinguer les deux situations :

```text
Même entrée
↓
plusieurs traitements
```

et :

```text
Sortie d'un traitement
↓
entrée d'un autre traitement
```

Ne construisez pas encore le programme complet.

**Travail à faire :**

Décrire précisément les entrées et sorties des traitements identifiés dans plusieurs problèmes algorithmiques.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* la liste des traitements ;
* leurs entrées ;
* leur responsabilité ;
* leurs sorties ;
* les tableaux de description ;
* les schémas de dépendance ;
* la distinction entre traitements indépendants et dépendants.

**Résultat attendu :**

Pour un problème de ce type :

```text
Analyser les résultats
```

vous devez être capable de produire une description comparable à :

```text
notes
↓
calculerMoyenne()
↓
moyenne
```

et :

```text
moyenne
↓
determinerAppreciation()
↓
appréciation
```

tout en identifiant les traitements qui utilisent directement :

```text
notes
```

**Critère de réussite :**

Vous avez réussi lorsque vous êtes capable de :

* identifier les entrées d'un traitement ;
* identifier sa sortie ;
* formuler clairement sa responsabilité ;
* distinguer une entrée d'un résultat intermédiaire ;
* reconnaître lorsqu'une sortie devient l'entrée d'un autre traitement ;
* représenter plusieurs traitements utilisant la même donnée ;
* décrire les traitements sans avoir besoin de construire le programme complet.

## Bilan

Vous savez maintenant décrire un traitement avec :

```text
Entrée(s)
↓
Traitement
↓
Sortie(s)
```

Vous savez également reconnaître deux situations importantes.

### Plusieurs traitements utilisent la même entrée

```text
                 ┌──→ traitement A
entrée commune ──┼──→ traitement B
                 └──→ traitement C
```

### Un traitement dépend du résultat d'un autre

```text
Entrée
↓
Traitement A
↓
Résultat A
↓
Traitement B
↓
Résultat B
```

La prochaine étape consiste à **construire chaque sous-traitement séparément**, puis à le tester avant de les réunir.

C'est l'objectif de **T.121.173 — Construire les sous-traitements**.

## Glossaire

* **Entrée** : donnée reçue par un traitement.
* **Sortie** : résultat produit par un traitement.
* **Responsabilité** : action précise réalisée par un traitement.
* **Résultat intermédiaire** : résultat produit par un traitement et utilisé par un autre.
* **Dépendance** : relation entre deux traitements lorsque l'un utilise le résultat de l'autre.
* **Chaînage** : organisation de traitements dans laquelle une sortie devient l'entrée d'un autre traitement.
* **Traitement indépendant** : traitement qui peut utiliser directement ses données sans attendre le résultat d'un autre traitement.
