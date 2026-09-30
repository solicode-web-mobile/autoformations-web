---
title: "Construire une solution avec plusieurs traitements"
layout: tuto
slug: "construire-solution-plusieurs-traitements"
permalink: /tutos/:slug/
tuto_id: "T.121.155"
type: "classique"
version: "normal"
ua: "UA.121.15"
nav_order: 5
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans les tutoriels précédents, vous avez appris à résoudre des problèmes simples avec un traitement.

Dans ce tutoriel, vous allez apprendre à résoudre un problème qui demande **plusieurs traitements déjà connus**.

Vous allez apprendre à :

* identifier plusieurs résultats ;
* associer chaque résultat à un traitement connu ;
* réutiliser plusieurs fonctions ;
* construire plusieurs traitements à partir des mêmes données ;
* réunir les résultats dans un même programme ;
* tester chaque résultat.

La progression est :

```text
Problème
↓
Résultats attendus
↓
Traitements nécessaires
↓
Réutilisation des traitements connus
↓
Résultats
↓
Vérification
```

Vous ne devez pas encore apprendre une nouvelle méthode de décomposition complexe.

Vous allez simplement apprendre à **assembler des traitements que vous savez déjà réaliser**.

## 2. Prérequis

Vous devez savoir :

* utiliser des variables ;
* utiliser des conditions ;
* utiliser des boucles ;
* utiliser des tableaux ;
* créer et appeler une fonction ;
* utiliser un paramètre ;
* récupérer un résultat avec `return` ;
* calculer une somme ;
* calculer une moyenne ;
* rechercher une valeur ;
* trouver un maximum ;
* trouver un minimum ;
* compter des valeurs selon une règle.

Vous devez également savoir analyser un problème avant de coder.

## Données de départ

Nous allons travailler sur les résultats d'un groupe d'apprenants.

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Le programme doit produire :

```text
Somme
Moyenne
Maximum
Minimum
Nombre de notes validées
```

Une note est validée lorsqu'elle est supérieure ou égale à `10`.

Les traitements disponibles sont ceux déjà construits dans les tutoriels précédents :

```text
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
```

Ces traitements constituent notre **répertoire de traitements**.

## Partie 1 — Théorie

### 1.1. Un problème peut demander plusieurs résultats

Un problème ne demande pas toujours une seule information.

Exemple :

> Analyser les notes d'un groupe et afficher la somme, la moyenne, la meilleure note, la plus petite note et le nombre de notes validées.

Le problème contient donc plusieurs résultats :

```text
Somme
Moyenne
Maximum
Minimum
Notes validées
```

Il faut donc identifier plusieurs traitements.

### 1.2. Associer un résultat à un traitement

Chaque résultat demandé doit être associé à un traitement adapté.

On peut construire le tableau suivant :

| Résultat       | Traitement          |
| -------------- | ------------------- |
| Somme          | `calculerSomme()`   |
| Moyenne        | `calculerMoyenne()` |
| Maximum        | `trouverMaximum()`  |
| Minimum        | `trouverMinimum()`  |
| Notes validées | `compterValidees()` |

Le programme peut donc réutiliser plusieurs traitements existants.

### 1.3. Réutiliser un traitement déjà appris

Il n'est pas nécessaire de reconstruire un algorithme chaque fois qu'il est utilisé.

Par exemple, si `calculerSomme()` existe déjà, nous pouvons l'utiliser :

```javascript
let somme = calculerSomme(notes);
```

De la même manière :

```javascript
let moyenne = calculerMoyenne(notes);
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
let validees = compterValidees(notes);
```

Chaque fonction réalise son propre traitement.

### 1.4. Utiliser les mêmes données pour plusieurs traitements

Les mêmes données peuvent être utilisées par plusieurs traitements.

Dans notre exemple :

```text
notes
├── calculerSomme()
├── calculerMoyenne()
├── trouverMaximum()
├── trouverMinimum()
└── compterValidees()
```

Le tableau `notes` est donc l'entrée commune de plusieurs traitements.

Il n'est pas nécessaire de créer un nouveau tableau pour chaque calcul.

### 1.5. Construire les résultats

Chaque fonction retourne un résultat.

Par exemple :

```javascript
let somme = calculerSomme(notes);
```

La variable `somme` contient maintenant le résultat du traitement.

On fait la même chose pour les autres traitements :

```javascript
let moyenne = calculerMoyenne(notes);
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
let validees = compterValidees(notes);
```

On obtient alors plusieurs résultats :

```text
somme
moyenne
maximum
minimum
validees
```

### 1.6. Réunir les résultats

Les résultats peuvent ensuite être affichés ensemble :

```javascript
console.log("Somme :", somme);
console.log("Moyenne :", moyenne);
console.log("Maximum :", maximum);
console.log("Minimum :", minimum);
console.log("Notes validées :", validees);
```

Le programme utilise donc plusieurs traitements pour produire un résultat global.

### 1.7. Deux types de combinaison

Dans cette étape, nous pouvons rencontrer deux situations simples.

#### Traitements indépendants

Plusieurs traitements utilisent les mêmes données sans dépendre directement les uns des autres.

```text
notes
├── somme
├── maximum
├── minimum
└── notes validées
```

Chaque traitement peut être réalisé séparément.

#### Traitement dépendant d'un autre résultat

Un traitement peut utiliser le résultat d'un traitement précédent.

Par exemple :

```text
notes
↓
moyenne
↓
validation
```

Le deuxième traitement utilise alors la moyenne.

Cette situation prépare la notion de **chaînage**, qui sera étudiée plus tard dans `UA.121.17`.

Ici, nous nous limitons à identifier cette dépendance simple.

### 1.8. Ne pas chercher une nouvelle notion

Face à un nouveau problème, la première question n'est pas :

> Quelle nouvelle notion dois-je apprendre ?

La bonne question est :

> Quels traitements que je connais déjà peuvent résoudre ce problème ?

Exemple :

```text
Je dois calculer une moyenne.
→ calculerMoyenne()

Je dois trouver la plus grande valeur.
→ trouverMaximum()

Je dois compter les valeurs validées.
→ compterValidees()
```

Le répertoire de traitements devient donc une ressource pour résoudre de nouveaux problèmes.

### 1.9. À retenir

Un problème peut être résolu en utilisant plusieurs traitements déjà connus.

La méthode est :

```text
Problème
↓
Identifier les résultats
↓
Associer chaque résultat à un traitement
↓
Appeler les traitements
↓
Récupérer les résultats
↓
Afficher les résultats
```

Le programme n'est pas encore une architecture complexe.

Il s'agit simplement de **combiner plusieurs traitements existants dans une même solution**.

## Partie 2 — Pratique

### 2.1. Analyser le problème

Reprenons le problème :

> Une application doit analyser les résultats d'un groupe d'apprenants.

Les notes sont :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Le programme doit produire :

```text
Somme
Moyenne
Maximum
Minimum
Nombre de notes validées
```

Commencez par construire le tableau d'analyse.

| Élément    | Réponse                  |
| ---------- | ------------------------ |
| Entrée     | Liste de notes           |
| Résultat 1 | Somme                    |
| Résultat 2 | Moyenne                  |
| Résultat 3 | Maximum                  |
| Résultat 4 | Minimum                  |
| Résultat 5 | Nombre de notes validées |

### 2.2. Associer les traitements

À partir du répertoire déjà appris, associez chaque résultat au bon traitement.

| Résultat                 | Fonction            |
| ------------------------ | ------------------- |
| Somme                    | `calculerSomme()`   |
| Moyenne                  | `calculerMoyenne()` |
| Maximum                  | `trouverMaximum()`  |
| Minimum                  | `trouverMinimum()`  |
| Nombre de notes validées | `compterValidees()` |

Cette étape est importante.

Vous ne construisez pas encore les fonctions.

Vous choisissez les fonctions déjà disponibles.

### 2.3. Appeler les traitements

Commencez par la somme :

```javascript
let somme = calculerSomme(notes);
```

Ajoutez ensuite la moyenne :

```javascript
let moyenne = calculerMoyenne(notes);
```

Puis :

```javascript
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
let validees = compterValidees(notes);
```

Vous obtenez plusieurs résultats à partir du même tableau.

### 2.4. Afficher les résultats

Affichez maintenant les résultats :

```javascript
console.log("Somme :", somme);
console.log("Moyenne :", moyenne);
console.log("Maximum :", maximum);
console.log("Minimum :", minimum);
console.log("Notes validées :", validees);
```

Le programme complet peut maintenant être organisé ainsi :

```javascript
let notes = [12, 15, 8, 17, 10, 14];

let somme = calculerSomme(notes);
let moyenne = calculerMoyenne(notes);
let maximum = trouverMaximum(notes);
let minimum = trouverMinimum(notes);
let validees = compterValidees(notes);

console.log("Somme :", somme);
console.log("Moyenne :", moyenne);
console.log("Maximum :", maximum);
console.log("Minimum :", minimum);
console.log("Notes validées :", validees);
```

### 2.5. Vérifier les résultats

Calculez d'abord les résultats manuellement.

Pour :

```text
12, 15, 8, 17, 10, 14
```

la somme est :

```text
76
```

La moyenne est :

```text
12.666666666666666
```

Le maximum est :

```text
17
```

Le minimum est :

```text
8
```

Le nombre de notes validées est :

```text
5
```

Comparez ces valeurs avec les résultats produits par le programme.

### 2.6. Construire une deuxième solution

Nouveau problème :

> Une boutique possède une liste de prix. Le programme doit calculer le total, trouver le prix le plus élevé et trouver le prix le plus faible.

Données :

```javascript
let prix = [25, 40, 15, 30, 50];
```

Identifiez les résultats :

```text
Total
Prix maximum
Prix minimum
```

Associez ensuite chaque résultat à un traitement connu.

Vous pouvez utiliser :

```text
calculerSomme()
trouverMaximum()
trouverMinimum()
```

Construisez le programme.

### 2.7. Tester la solution

Testez avec :

```javascript
let prix = [25, 40, 15, 30, 50];
```

Puis :

```javascript
let prix = [10, 10, 10];
```

Puis :

```javascript
let prix = [5];
```

Vérifiez que les trois résultats sont corrects.

### 2.8. Construire une solution avec un résultat dépendant

Nouveau problème :

> Un programme possède une liste de notes. Il doit calculer la moyenne puis indiquer si la moyenne est validée. Une moyenne supérieure ou égale à 10 est validée.

Données :

```javascript
let notes = [12, 15, 8, 17];
```

Les traitements sont :

```text
calculer la moyenne
↓
tester la moyenne
```

Le deuxième traitement dépend du premier.

On peut représenter le traitement ainsi :

```text
notes
↓
calculerMoyenne()
↓
moyenne
↓
condition
↓
Validé / Non validé
```

Commencez par calculer la moyenne :

```javascript
let moyenne = calculerMoyenne(notes);
```

Puis utilisez une condition :

```javascript
if (moyenne >= 10) {
    console.log("Validé");
} else {
    console.log("Non validé");
}
```

Ici, la condition utilise le résultat de `calculerMoyenne()`.

### 2.9. Exercice individuel

Résolvez le problème suivant :

> Une formatrice souhaite analyser les résultats d'un groupe. Le programme reçoit une liste de notes et doit afficher la somme, la moyenne, la meilleure note, la plus petite note et le nombre de notes validées. Une note est validée lorsqu'elle est supérieure ou égale à 10.

Utilisez :

```javascript
let notes = [14, 9, 12, 16, 7, 11];
```

Commencez par analyser le problème.

Complétez :

| Résultat demandé | Traitement choisi |
| ---------------- | ----------------- |
| Somme            |                   |
| Moyenne          |                   |
| Meilleure note   |                   |
| Plus petite note |                   |
| Notes validées   |                   |

Construisez ensuite le programme.

Ne recréez pas les algorithmes déjà disponibles.

Réutilisez les traitements connus.

### 2.10. Exercice de réutilisation

Utilisez ensuite un deuxième tableau :

```javascript
let notes = [8, 10, 13, 7, 15];
```

Exécutez le même programme.

Vous ne devez pas modifier les traitements.

Seules les données changent.

Observez que les mêmes traitements peuvent être réutilisés avec plusieurs jeux de données.

**Travail à faire :**

Construire un programme capable d'analyser plusieurs listes de notes en réutilisant plusieurs traitements déjà connus.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* l'analyse du problème ;
* le tableau résultat → traitement ;
* le code JavaScript ;
* les tests réalisés ;
* la vérification des résultats.

**Résultat attendu :**

Pour :

```javascript
let notes = [14, 9, 12, 16, 7, 11];
```

le programme doit produire :

```text
Somme : 69
Moyenne : 11.5
Maximum : 16
Minimum : 7
Notes validées : 4
```

Pour :

```javascript
let notes = [8, 10, 13, 7, 15];
```

le programme doit produire :

```text
Somme : 53
Moyenne : 10.6
Maximum : 15
Minimum : 7
Notes validées : 3
```

**Critère de réussite :**

La solution est réussie lorsque :

* chaque résultat demandé est associé au bon traitement ;
* plusieurs traitements sont utilisés dans le même programme ;
* les traitements déjà appris sont réutilisés ;
* le programme fonctionne avec plusieurs tableaux ;
* les résultats sont corrects ;
* aucune nouvelle notion importante n'est introduite.

## Bilan

**Vous avez appris à :**

* identifier plusieurs résultats dans un même problème ;
* associer chaque résultat à un traitement connu ;
* réutiliser plusieurs fonctions ;
* utiliser les mêmes données pour plusieurs traitements ;
* réunir plusieurs résultats dans un programme ;
* identifier une dépendance simple entre deux traitements.

**Vous savez maintenant construire :**

```text
Un problème
↓
plusieurs résultats
↓
plusieurs traitements connus
↓
plusieurs résultats
↓
une solution complète
```

Vous disposez maintenant d'un premier réflexe important :

> **Un problème complexe n'exige pas toujours de nouvelles notions. Il peut être résolu en combinant des traitements déjà maîtrisés.**

Cette compétence prépare l'étape suivante : apprendre à **décomposer explicitement un problème en sous-traitements et à organiser leurs dépendances** dans `UA.121.17`.

## Glossaire

* **Traitement** : action réalisée sur une donnée.
* **Réutilisation** : utilisation d'un traitement déjà construit.
* **Combinaison** : utilisation de plusieurs traitements dans une même solution.
* **Résultat intermédiaire** : résultat utilisé pour produire un autre résultat.
* **Dépendance** : relation dans laquelle un traitement a besoin du résultat d'un autre traitement.
* **Répertoire de traitements** : ensemble des traitements déjà appris et réutilisables.
