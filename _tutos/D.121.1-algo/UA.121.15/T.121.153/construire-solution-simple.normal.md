---
title: "Construire une solution simple"
layout: tuto
slug: "construire-solution-simple"
permalink: /tutos/:slug/
tuto_id: "T.121.153"
type: "classique"
version: "normal"
ua: "UA.121.15"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **transformer l'analyse d'un problème en programme JavaScript**.

Vous allez apprendre à :

* partir des données et des règles ;
* choisir les notions déjà connues ;
* construire les étapes du traitement ;
* écrire le code JavaScript ;
* tester le résultat ;
* vérifier que le programme répond au problème.

La démarche est :

```text
Problème
↓
Analyse
↓
Choix des traitements
↓
Construction
↓
Test
↓
Vérification
```

L'objectif n'est pas d'apprendre une nouvelle commande JavaScript.

L'objectif est de **choisir et utiliser les traitements déjà appris**.

## 2. Prérequis

Vous devez savoir :

* utiliser des variables ;
* utiliser les opérateurs de comparaison ;
* utiliser les conditions `if` et `else` ;
* utiliser les boucles ;
* utiliser les tableaux ;
* utiliser des fonctions simples ;
* lire un problème algorithmique ;
* identifier les entrées, les sorties et les règles.

Vous devez également savoir réaliser l'analyse étudiée dans :

```text
T.121.151 — Comprendre un problème algorithmique
T.121.152 — Identifier les données et les règles
```

## Données de départ

Le problème de départ est :

> Un programme reçoit un nombre. Il doit indiquer si ce nombre est positif ou négatif.

Exemple :

```text
Nombre : 12

Résultat :
Positif
```

Deuxième exemple :

```text
Nombre : -5

Résultat :
Négatif
```

L'analyse du problème est :

```text
Entrée :
un nombre

Règle :
si le nombre est supérieur ou égal à 0,
le nombre est positif.
Sinon, il est négatif.

Sortie :
Positif ou Négatif
```

## Partie 1 — Théorie

### 1.1. Partir de l'analyse

Avant d'écrire le code, il faut partir de l'analyse du problème.

On dispose de :

```text
Entrée :
nombre
```

La règle est :

```text
si nombre >= 0
    positif
sinon
    négatif
```

La sortie est :

```text
Positif
ou
Négatif
```

L'analyse indique déjà la structure de la solution.

### 1.2. Choisir la notion nécessaire

Le problème demande de faire un choix entre deux résultats :

```text
Positif
ou
Négatif
```

Il faut donc utiliser une **condition**.

La structure adaptée est :

```text
Si une condition est vraie
    faire une action
Sinon
    faire une autre action
```

En JavaScript :

```javascript
if (condition) {
    // traitement
} else {
    // autre traitement
}
```

La condition du problème est :

```javascript
nombre >= 0
```

### 1.3. Transformer la règle en code

La règle :

```text
si le nombre est supérieur ou égal à 0
    afficher Positif
sinon
    afficher Négatif
```

devient :

```javascript
if (nombre >= 0) {
    console.log("Positif");
} else {
    console.log("Négatif");
}
```

Le code reste directement lié à la règle.

### 1.4. Ajouter la donnée

Le programme a besoin d'une variable pour stocker le nombre.

```javascript
let nombre = 12;
```

Le traitement complet devient :

```javascript
let nombre = 12;

if (nombre >= 0) {
    console.log("Positif");
} else {
    console.log("Négatif");
}
```

Chaque partie du programme correspond à une partie de l'analyse :

```text
nombre
↓
condition
↓
résultat
```

### 1.5. Tester plusieurs valeurs

Un programme doit être testé avec différentes données.

Test 1 :

```javascript
let nombre = 12;
```

Résultat :

```text
Positif
```

Test 2 :

```javascript
let nombre = -5;
```

Résultat :

```text
Négatif
```

Test 3 :

```javascript
let nombre = 0;
```

Résultat :

```text
Positif
```

Le troisième test est important.

Il permet de vérifier la règle :

```text
nombre >= 0
```

### 1.6. Comprendre le choix du traitement

L'apprenant ne doit pas choisir une notion au hasard.

Il doit partir du problème.

Exemple :

```text
Le programme doit choisir entre deux résultats.
↓
Il faut une condition.
```

Autre exemple :

```text
Le programme doit traiter plusieurs valeurs.
↓
Il peut être nécessaire d'utiliser un tableau et une boucle.
```

Autre exemple :

```text
Le programme doit réutiliser un traitement.
↓
Une fonction peut être utilisée.
```

Le choix d'une notion dépend donc du problème à résoudre.

### 1.7. Construire une solution à partir d'une analyse

La méthode devient :

```text
1. Lire le problème.
2. Identifier les données.
3. Identifier le résultat.
4. Identifier les règles.
5. Choisir les notions nécessaires.
6. Écrire le traitement.
7. Tester.
8. Vérifier.
```

Il ne faut pas commencer directement par chercher du code.

### 1.8. À retenir

Pour construire une solution simple :

```text
Analyse
↓
Notions connues
↓
Traitement
↓
Code
↓
Test
```

Le code est la traduction de l'algorithme.

## Partie 2 — Pratique

### 2.1. Construire la solution du problème

Reprenons le problème :

> Un programme reçoit un nombre. Il doit indiquer si le nombre est positif ou négatif.

#### Étape 1 — Identifier l'entrée

L'entrée est :

```text
un nombre
```

On crée une variable :

```javascript
let nombre = 12;
```

#### Étape 2 — Identifier la règle

La règle est :

```text
Si nombre >= 0
    Positif
Sinon
    Négatif
```

#### Étape 3 — Choisir le traitement

Le problème demande un choix.

On utilise donc :

```javascript
if
else
```

#### Étape 4 — Écrire le code

```javascript
let nombre = 12;

if (nombre >= 0) {
    console.log("Positif");
} else {
    console.log("Négatif");
}
```

#### Étape 5 — Tester

Exécutez le programme avec :

```javascript
let nombre = 12;
```

Résultat :

```text
Positif
```

Remplacez ensuite la valeur par :

```javascript
let nombre = -7;
```

Résultat :

```text
Négatif
```

Testez également :

```javascript
let nombre = 0;
```

Résultat :

```text
Positif
```

#### Étape 6 — Vérifier

Vérifiez que les trois résultats respectent la règle :

```text
nombre >= 0 → Positif
nombre < 0  → Négatif
```

La solution est correcte lorsque le programme respecte cette règle pour les valeurs testées.

### 2.2. Construire une deuxième solution

Lisez le problème :

> Un programme reçoit deux nombres. Il doit afficher le plus grand.

Exemple :

```text
Premier nombre : 12
Deuxième nombre : 18

Résultat :
18
```

#### Étape 1 — Identifier les données

Les données sont :

```text
premier nombre
deuxième nombre
```

#### Étape 2 — Identifier la règle

La règle est :

```text
Si le premier nombre est supérieur au deuxième
    afficher le premier
Sinon
    afficher le deuxième
```

#### Étape 3 — Choisir le traitement

Le problème demande une comparaison.

On utilise une condition :

```javascript
if
else
```

#### Étape 4 — Créer les variables

```javascript
let premier = 12;
let deuxieme = 18;
```

#### Étape 5 — Construire le traitement

```javascript
if (premier > deuxieme) {
    console.log(premier);
} else {
    console.log(deuxieme);
}
```

#### Étape 6 — Tester

Testez :

```javascript
let premier = 12;
let deuxieme = 18;
```

Résultat :

```text
18
```

Testez ensuite :

```javascript
let premier = 25;
let deuxieme = 10;
```

Résultat :

```text
25
```

Testez enfin :

```javascript
let premier = 15;
let deuxieme = 15;
```

Observez le résultat.

### 2.3. Construire une solution avec un tableau

Le problème change :

> Un programme possède une liste de notes. Il doit calculer la moyenne.

Données :

```javascript
let notes = [12, 15, 8, 17];
```

L'analyse donne :

```text
Entrée :
tableau de notes

Résultat :
moyenne

Traitement :
additionner les notes
puis calculer la moyenne
```

Pour réaliser ce traitement, il faut :

```text
tableau
↓
boucle
↓
accumulateur
↓
moyenne
```

On peut construire le traitement :

```javascript
let notes = [12, 15, 8, 17];
let somme = 0;

for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
}

let moyenne = somme / notes.length;

console.log("Moyenne :", moyenne);
```

Résultat :

```text
Moyenne : 13
```

Ici, le problème permet de choisir plusieurs notions déjà apprises :

```text
Tableau
+
Boucle
+
Accumulateur
+
Calcul
```

### 2.4. Choisir entre plusieurs traitements connus

Pour chaque problème, demandez-vous :

```text
Est-ce que je traite une seule valeur ?
→ variable

Est-ce que je dois faire un choix ?
→ condition

Est-ce que je dois répéter un traitement ?
→ boucle

Est-ce que je dois traiter plusieurs valeurs ?
→ tableau + boucle

Est-ce que je dois réutiliser un traitement ?
→ fonction

Est-ce qu'un algorithme élémentaire déjà appris répond au besoin ?
→ réutiliser cet algorithme
```

Cette méthode permet d'éviter de chercher une nouvelle solution à chaque problème.

### 2.5. Exercice guidé

Lisez le problème :

> Un programme reçoit une note. Il doit afficher `Validé` lorsque la note est supérieure ou égale à 10. Sinon, il doit afficher `Non validé`.

Commencez par analyser :

```text
Entrée :
?

Résultat :
?

Règle :
?
```

Choisissez ensuite la notion nécessaire :

```text
Variable
Condition
Boucle
Tableau
Fonction
```

Construisez le programme.

Testez avec :

```text
15
```

puis :

```text
8
```

et enfin :

```text
10
```

Vérifiez que le résultat est correct dans les trois cas.

### 2.6. Exercice individuel

Résolvez le problème suivant :

> Un programme reçoit trois notes. Il doit calculer la moyenne et afficher `Validé` si la moyenne est supérieure ou égale à 10. Sinon, il affiche `Non validé`.

Utilisez :

```javascript
let notes = [12, 8, 15];
```

Vous devez :

1. identifier les entrées ;
2. identifier le résultat attendu ;
3. écrire les règles ;
4. choisir les traitements nécessaires ;
5. construire le programme ;
6. tester le programme ;
7. vérifier le résultat.

Testez également avec :

```javascript
let notes = [8, 9, 7];
```

Puis avec :

```javascript
let notes = [10, 10, 10];
```

Comparez les résultats.

**Travail à faire :**

Construire le programme à partir de l'analyse du problème.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* l'analyse du problème ;
* les règles ;
* le choix des traitements ;
* le code JavaScript ;
* les résultats des tests.

**Résultat attendu :**

Pour :

```javascript
let notes = [12, 8, 15];
```

le programme doit afficher :

```text
Moyenne : 11.666666666666666
Validé
```

Pour :

```javascript
let notes = [8, 9, 7];
```

le programme doit afficher :

```text
Moyenne : 8
Non validé
```

Pour :

```javascript
let notes = [10, 10, 10];
```

le programme doit afficher :

```text
Moyenne : 10
Validé
```

**Critère de réussite :**

La solution est réussie lorsque :

* les données sont correctement utilisées ;
* la moyenne est correctement calculée ;
* la règle de validation est correctement appliquée ;
* le programme fonctionne avec les trois jeux de données ;
* aucune notion non étudiée n'est nécessaire.

## Bilan

**Vous avez appris à :**

* partir de l'analyse d'un problème ;
* choisir les notions nécessaires ;
* transformer une règle en traitement ;
* construire une solution simple ;
* tester plusieurs valeurs ;
* vérifier le résultat.

**Vous savez maintenant passer de :**

```text
Problème
↓
Analyse
↓
Choix des traitements
↓
Code
↓
Test
↓
Vérification
```

Vous commencez ainsi à résoudre un problème **sans apprendre une nouvelle notion pour chaque exercice**.

Le prochain tutoriel sera consacré à l'entraînement sur plusieurs problèmes afin de développer ce choix de traitements de manière plus autonome.

## Glossaire

* **Solution** : programme construit pour résoudre un problème.
* **Condition** : test permettant de choisir entre plusieurs traitements.
* **Traitement** : action réalisée sur les données.
* **Test** : exécution du programme avec une donnée connue.
* **Vérification** : comparaison du résultat obtenu avec le résultat attendu.
* **Accumulateur** : variable utilisée pour construire progressivement une valeur, par exemple une somme.
