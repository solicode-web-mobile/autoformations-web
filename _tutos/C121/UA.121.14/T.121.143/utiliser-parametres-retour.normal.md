---
title: "Utiliser les paramètres et le retour"
layout: tuto
slug: "utiliser-parametres-retour"
permalink: /tutos/:slug/
tuto_id: "T.121.143"
type: "classique"
version: "normal"
ua: "UA.121.14"
nav_order: 3
data_js:  ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à créer des fonctions qui peuvent **recevoir des données** et **retourner un résultat**.

Vous allez apprendre à utiliser :

* un paramètre ;
* un argument ;
* plusieurs paramètres ;
* `return` ;
* une valeur retournée ;
* le résultat d'une fonction dans une variable ;
* le résultat d'une fonction dans un autre calcul.

À la fin du tutoriel, vous devez comprendre ce fonctionnement :

```text id="q2v7mc"
Donnée
   ↓
Paramètre
   ↓
Fonction
   ↓
Traitement
   ↓
return
   ↓
Résultat
```

## 2. Prérequis

Vous devez savoir :

* déclarer une fonction ;
* appeler une fonction ;
* utiliser une variable ;
* utiliser `console.log()` ;
* utiliser des conditions ;
* utiliser des boucles.

Exemple :

```javascript id="d8p3kt"
function afficherBonjour() {
  console.log("Bonjour");
}

afficherBonjour();
```

Vous devez comprendre qu'une fonction permet déjà de regrouper et de réutiliser un traitement.

## Données de départ

### JavaScript

Créez un fichier :

```text id="m4z8rx"
parametres-retour.js
```

Commencez avec :

```javascript id="v7q2nd"
function additionner(a, b) {
  return a + b;
}

let resultat = additionner(10, 5);

console.log(resultat);
```

Exécutez :

```bash id="k3w9mp"
node parametres-retour.js
```

Résultat :

```text id="x5c7rq"
15
```

## Partie 1 — Théorie

### 1.1. Le problème d'une fonction sans paramètre

Dans le tutoriel précédent, nous avons créé des fonctions comme :

```javascript id="r8k2qm"
function afficherBonjour() {
  console.log("Bonjour");
}
```

Cette fonction réalise toujours le même traitement avec les mêmes données.

Nous voulons maintenant pouvoir faire :

```text id="s3m7vx"
Bonjour Madani
Bonjour Ali
Bonjour Sara
```

sans créer trois fonctions différentes.

Nous avons besoin d'une fonction qui peut **recevoir une donnée**.

### 1.2. Le paramètre

Un **paramètre** est une variable placée dans la déclaration d'une fonction.

Exemple :

```javascript id="p4x8mc"
function afficherBonjour(prenom) {
  console.log("Bonjour " + prenom);
}
```

Ici :

```text id="zf2q7n"
prenom
```

est un paramètre.

La fonction peut donc utiliser la valeur reçue dans `prenom`.

### 1.3. L'argument

Lorsqu'on appelle la fonction, on fournit une valeur.

Exemple :

```javascript id="h6m1wr"
afficherBonjour("Madani");
```

La chaîne :

```text id="v9q3ks"
"Madani"
```

est l'**argument**.

Le fonctionnement est :

```text id="r1x5cz"
"Madani"
    ↓
paramètre prenom
    ↓
fonction
    ↓
"Bonjour Madani"
```

### 1.4. Paramètre et argument

Il faut distinguer les deux termes.

Dans :

```javascript id="n7q4bm"
function afficherBonjour(prenom) {
  console.log("Bonjour " + prenom);
}
```

`prenom` est un **paramètre**.

Dans :

```javascript id="w3m8px"
afficherBonjour("Madani");
```

`"Madani"` est un **argument**.

On peut retenir :

```text id="c9k2vx"
Paramètre
→ variable prévue par la fonction

Argument
→ valeur fournie lors de l'appel
```

### 1.5. Utiliser la même fonction avec plusieurs valeurs

Une seule fonction peut maintenant travailler avec plusieurs données.

```javascript id="q6r1mt"
function afficherBonjour(prenom) {
  console.log("Bonjour " + prenom);
}

afficherBonjour("Madani");
afficherBonjour("Ali");
afficherBonjour("Sara");
```

Résultat :

```text id="b5x9kc"
Bonjour Madani
Bonjour Ali
Bonjour Sara
```

La fonction est la même.

Seule la donnée change.

### 1.6. Utiliser deux paramètres

Une fonction peut recevoir plusieurs paramètres.

Exemple :

```javascript id="t2m7qv"
function afficherSomme(a, b) {
  console.log(a + b);
}
```

Appel :

```javascript id="y8c4mp"
afficherSomme(10, 5);
```

Résultat :

```text id="d1x6rz"
15
```

Ici :

```text id="2v9qmc"
a = 10
b = 5
```

### 1.7. L'ordre des arguments est important

Considérons :

```javascript id="j5m8rx"
function afficherDifference(a, b) {
  console.log(a - b);
}
```

Avec :

```javascript id="q3w7kc"
afficherDifference(10, 5);
```

on obtient :

```text id="v9f2mp"
5
```

Mais avec :

```javascript id="a4x6rz"
afficherDifference(5, 10);
```

on obtient :

```text id="m7c1qw"
-5
```

L'ordre des arguments correspond à l'ordre des paramètres :

```text id="e8r3kn"
premier argument → premier paramètre
deuxième argument → deuxième paramètre
```

### 1.8. Une fonction peut effectuer un calcul

Exemple :

```javascript id="n2v7mx"
function multiplier(a, b) {
  console.log(a * b);
}

multiplier(4, 5);
```

Résultat :

```text id="p8c3rq"
20
```

La fonction reçoit les données et effectue le traitement.

```text id="h5m1zx"
a + b
a - b
a * b
```

Le calcul dépend des valeurs fournies.

### 1.9. Le problème avec `console.log()`

Considérons :

```javascript id="w3q8mv"
function additionner(a, b) {
  console.log(a + b);
}
```

Cette fonction affiche le résultat.

Mais nous voulons parfois **récupérer le résultat pour l'utiliser ailleurs**.

Par exemple :

```text id="r7m2cx"
addition
   ↓
multiplier le résultat par 2
```

Pour cela, `console.log()` ne suffit pas.

Nous avons besoin de `return`.

### 1.10. Utiliser `return`

`return` permet à une fonction de **retourner une valeur**.

Exemple :

```javascript id="v6p9kr"
function additionner(a, b) {
  return a + b;
}
```

La fonction ne l'affiche pas directement.

Elle produit une valeur :

```text id="m4x2qn"
10 + 5
   ↓
15
```

### 1.11. Récupérer le résultat

Nous pouvons stocker le résultat :

```javascript id="c8q5mz"
function additionner(a, b) {
  return a + b;
}

let resultat = additionner(10, 5);

console.log(resultat);
```

Résultat :

```text id="n3r7px"
15
```

Le fonctionnement est :

```text id="v5m8qc"
10, 5
  ↓
additionner()
  ↓
return 15
  ↓
resultat = 15
```

### 1.12. `console.log()` et `return` sont différents

C'est une distinction importante.

Avec :

```javascript id="x2c7mv"
function additionner(a, b) {
  console.log(a + b);
}
```

la fonction **affiche** le résultat.

Avec :

```javascript id="q8m3rx"
function additionner(a, b) {
  return a + b;
}
```

la fonction **retourne** le résultat.

On peut retenir :

```text id="w6p1zk"
console.log()
→ afficher

return
→ retourner une valeur
```

### 1.13. Réutiliser une valeur retournée

Exemple :

```javascript id="j4x9mc"
function additionner(a, b) {
  return a + b;
}

let somme = additionner(10, 5);

let resultat = somme * 2;

console.log(resultat);
```

Calcul :

```text id="h8v2qn"
10 + 5 = 15
15 × 2 = 30
```

Résultat :

```text id="k3m7rx"
30
```

La valeur retournée peut donc être utilisée dans un autre traitement.

### 1.14. Utiliser directement le résultat

Il est aussi possible d'utiliser l'appel directement dans une expression.

Exemple :

```javascript id="p5q8mv"
function additionner(a, b) {
  return a + b;
}

console.log(additionner(10, 5));
```

Résultat :

```text id="d7x2rc"
15
```

On peut également écrire :

```javascript id="m9c4zk"
let double = additionner(10, 5) * 2;

console.log(double);
```

Résultat :

```text id="v6q1xp"
30
```

### 1.15. Une fonction peut retourner un booléen

Une fonction ne retourne pas seulement des nombres.

Exemple :

```javascript id="w2m8qk"
function estMajeur(age) {
  return age >= 18;
}
```

Appels :

```javascript id="f7x3mc"
console.log(estMajeur(20));
console.log(estMajeur(15));
```

Résultat :

```text id="g4p9rz"
true
false
```

La fonction réalise :

```text id="x6m2qn"
âge
 ↓
comparaison
 ↓
true / false
```

### 1.16. Une fonction peut utiliser une condition avant de retourner

Exemple :

```javascript id="q1v7mk"
function verifierNote(note) {
  if (note >= 10) {
    return true;
  }

  return false;
}
```

Appels :

```javascript id="r8m3xc"
console.log(verifierNote(15));
console.log(verifierNote(8));
```

Résultat :

```text id="j5q2nv"
true
false
```

### 1.17. Retourner directement une expression

Le traitement précédent peut être simplifié :

```javascript id="c4x8mp"
function verifierNote(note) {
  return note >= 10;
}
```

La fonction retourne directement le résultat de l'expression booléenne.

### 1.18. Une fonction peut utiliser plusieurs paramètres et retourner un résultat

Exemple :

```javascript id="z7m2qr"
function calculerMoyenne(note1, note2, note3) {
  return (note1 + note2 + note3) / 3;
}
```

Appel :

```javascript id="n5x8mc"
let moyenne = calculerMoyenne(12, 15, 9);

console.log(moyenne);
```

Résultat :

```text id="q2r6vm"
12
```

La fonction réalise :

```text id="w3m9pk"
notes
  ↓
calcul
  ↓
return
  ↓
moyenne
```

### 1.19. Une fonction peut utiliser une autre fonction

Une fonction peut utiliser le résultat d'une autre fonction.

Exemple :

```javascript id="t8q3mx"
function additionner(a, b) {
  return a + b;
}

function doubler(nombre) {
  return nombre * 2;
}

let resultat = doubler(additionner(10, 5));

console.log(resultat);
```

Le traitement est :

```text id="f5m2zc"
additionner(10, 5)
        ↓
       15
        ↓
doubler(15)
        ↓
       30
```

Ce principe prépare la réutilisation et la combinaison des fonctions dans les prochains tutoriels.

### 1.20. À retenir

* Un **paramètre** est une donnée prévue par la fonction.
* Un **argument** est une valeur fournie lors de l'appel.
* Une fonction peut avoir plusieurs paramètres.
* L'ordre des arguments correspond à l'ordre des paramètres.
* `return` permet de retourner une valeur.
* `console.log()` affiche une valeur ; `return` retourne une valeur.
* Une valeur retournée peut être stockée dans une variable.
* Une valeur retournée peut être utilisée dans un autre calcul.
* Une fonction peut retourner un nombre, un texte ou un booléen.
* Une fonction peut utiliser le résultat d'une autre fonction.

## Partie 2 — Pratique

### 2.1. Utiliser un paramètre

Créez :

```javascript id="y6m2qp"
function afficherBonjour(prenom) {
  console.log("Bonjour " + prenom);
}

afficherBonjour("Madani");
```

Résultat attendu :

```text id="n8x4rc"
Bonjour Madani
```

### 2.2. Utiliser plusieurs arguments

Ajoutez :

```javascript id="c3q7mv"
afficherBonjour("Ali");
afficherBonjour("Sara");
```

Résultat :

```text id="k5m1zx"
Bonjour Madani
Bonjour Ali
Bonjour Sara
```

### 2.3. Créer une fonction avec deux paramètres

Créez :

```javascript id="r9x2mc"
function afficherSomme(a, b) {
  console.log(a + b);
}
```

Testez :

```javascript id="w4m8qk"
afficherSomme(10, 5);
afficherSomme(20, 7);
```

Résultats :

```text id="f2c6pn"
15
27
```

### 2.4. Observer l'ordre des paramètres

Créez :

```javascript id="m7q3vx"
function afficherDifference(a, b) {
  console.log(a - b);
}

afficherDifference(10, 5);
afficherDifference(5, 10);
```

Résultat attendu :

```text id="h8x1mc"
5
-5
```

Expliquez pourquoi les deux résultats sont différents.

### 2.5. Retourner une somme

Transformez :

```javascript id="j4r8qk"
function additionner(a, b) {
  console.log(a + b);
}
```

en :

```javascript id="v6m2xp"
function additionner(a, b) {
  return a + b;
}
```

Puis :

```javascript id="s3q9mc"
let resultat = additionner(10, 5);

console.log(resultat);
```

Résultat attendu :

```text id="k7x1pz"
15
```

### 2.6. Réutiliser le résultat retourné

Créez :

```javascript id="n8m4qc"
function additionner(a, b) {
  return a + b;
}

let somme = additionner(10, 5);
let resultat = somme * 2;

console.log(resultat);
```

Résultat attendu :

```text id="r5x7mk"
30
```

### 2.7. Retourner un booléen

Créez :

```javascript id="p2q8vx"
function estMajeur(age) {
  return age >= 18;
}
```

Testez :

```javascript id="m6x3rc"
console.log(estMajeur(20));
console.log(estMajeur(15));
```

Résultat attendu :

```text id="z9q1mv"
true
false
```

### 2.8. Retourner le maximum de deux valeurs

Créez :

```javascript id="q4m8xc"
function trouverMaximum(a, b) {
  if (a > b) {
    return a;
  }

  return b;
}
```

Testez :

```javascript id="f7x2mk"
console.log(trouverMaximum(12, 18));
console.log(trouverMaximum(20, 7));
```

Résultat attendu :

```text id="c5q9vr"
18
20
```

### 2.9. Retourner une moyenne

Créez :

```javascript id="w3m6qx"
function calculerMoyenne(note1, note2, note3) {
  return (note1 + note2 + note3) / 3;
}
```

Testez :

```javascript id="k8x1mc"
console.log(calculerMoyenne(12, 15, 9));
console.log(calculerMoyenne(10, 14, 18));
```

Résultats attendus :

```text id="m5q7zr"
12
14
```

### 2.10. Exercice — Fonction de multiplication

Créez une fonction :

```text id="r2m9xc"
multiplier(a, b)
```

Elle doit retourner le résultat de `a * b`.

Testez :

```text id="x5q1mk"
multiplier(4, 5) → 20
multiplier(7, 3) → 21
```

### 2.11. Exercice — Fonction de parité

Créez :

```text id="v8m3qx"
estPair(nombre)
```

La fonction doit retourner :

```text id="c4x7mk"
true
```

si le nombre est pair et :

```text id="n2q9vr"
false
```

sinon.

Testez :

```text id="f6m1xc"
estPair(8)
estPair(7)
estPair(20)
```

### 2.12. Exercice — Fonction de validation

Créez :

```text id="p3m8qk"
estValidee(note)
```

La fonction doit retourner `true` si :

```text id="w7x2mc"
note >= 10
```

et `false` sinon.

Testez :

```text id="q5m9vr"
estValidee(15)
estValidee(8)
estValidee(10)
```

### 2.13. Exercice — Fonction de prix

Créez :

```text id="k4x8mq"
calculerPrixTotal(prix, quantite)
```

La fonction doit retourner :

```text id="z2m6vc"
prix × quantite
```

Exemples :

```text id="r7q1xp"
calculerPrixTotal(20, 3) → 60
calculerPrixTotal(15, 4) → 60
```

### 2.14. Exercice — Fonction avec plusieurs conditions

Créez :

```text id="v5m2qc"
determinerNiveau(note)
```

La fonction doit retourner :

```text id="9r8xkm"
"Très bien"
```

pour `note >= 16`.

```text id="c3q7mv"
"Validé"
```

pour `note >= 10`.

```text id="p6m1xz"
"Non validé"
```

sinon.

Exemples :

```text id="w4q9mc"
determinerNiveau(17) → "Très bien"
determinerNiveau(12) → "Validé"
determinerNiveau(7) → "Non validé"
```

### 2.15. Exercice — Utiliser le résultat d'une fonction

Créez :

```javascript id="f8m3qv"
function additionner(a, b) {
  return a + b;
}
```

Utilisez le résultat de la fonction pour calculer son double.

Pour :

```text id="z5x1mc"
10 et 5
```

le résultat final doit être :

```text id="q7m9vr"
30
```

### 2.16. Exercice — Combiner deux fonctions

Créez :

```javascript id="n4m8qx"
function additionner(a, b) {
  return a + b;
}

function doubler(nombre) {
  return nombre * 2;
}
```

Puis utilisez les deux fonctions pour obtenir :

```text id="c6x2mk"
30
```

à partir de `10` et `5`.

Représentez le traitement :

```text id="p8m3qv"
10 + 5
  ↓
15
  ↓
× 2
  ↓
30
```

### 2.17. Exercice — Fonction de moyenne et validation

Créez :

```text id="j5q9xc"
calculerMoyenne(note1, note2, note3)
```

Puis utilisez la moyenne obtenue pour vérifier si l'apprenant est validé.

Exemple :

```text id="v2m7qx"
12
14
10
```

La fonction doit produire :

```text id="y8c3mk"
12
```

Puis le programme doit utiliser cette valeur pour déterminer :

```text id="r6m1qp"
Validé
```

### 2.18. Travail à faire

Construisez un petit programme avec les fonctions :

```text id="z4q8mc"
calculerMoyenne()
estValidee()
determinerNiveau()
```

Le programme utilise les notes :

```javascript id="p7m2vx"
let note1 = 12;
let note2 = 15;
let note3 = 9;
```

Le programme doit :

1. calculer la moyenne ;
2. vérifier si la moyenne est validée ;
3. déterminer le niveau.

Pour ces données :

```text id="k3x9mq"
Moyenne : 12
Validée : true
Niveau : Validé
```

### Livrable

Créez un document Markdown ou un Google Doc contenant :

* les fonctions créées ;
* les paramètres de chaque fonction ;
* le rôle de chaque fonction ;
* le code JavaScript ;
* les tests ;
* les résultats.

### Critère de réussite

Le travail est réussi si :

* les paramètres sont correctement utilisés ;
* les arguments sont correctement transmis ;
* `return` est utilisé pour retourner les résultats ;
* les résultats retournés peuvent être stockés ;
* une fonction peut utiliser le résultat d'une autre ;
* les fonctions produisent les résultats attendus.

### Résultat attendu

Pour :

```javascript id="w6m2qc"
let note1 = 12;
let note2 = 15;
let note3 = 9;
```

le programme doit produire :

```text id="a8q4xv"
Moyenne : 12
Validée : true
Niveau : Validé
```

## Bilan

**Vous avez appris :**

* à utiliser un paramètre ;
* à transmettre un argument ;
* à utiliser plusieurs paramètres ;
* à retourner une valeur avec `return` ;
* à stocker une valeur retournée ;
* à utiliser une valeur retournée dans un calcul ;
* à retourner un booléen ;
* à utiliser le résultat d'une fonction dans une autre fonction.

**Vous savez maintenant :**

```text id="m7q3cx"
Données
   ↓
Paramètres
   ↓
Fonction
   ↓
Traitement
   ↓
return
   ↓
Résultat
   ↓
Réutilisation
```

Vous pouvez maintenant créer des fonctions **générales et réutilisables**, au lieu de fonctions limitées à une seule valeur.

Le prochain tutoriel sera consacré aux **exercices sur les fonctions**. Vous réutiliserez ces notions sur plusieurs petits problèmes.

## Glossaire

* **Paramètre** : variable définie dans la déclaration d'une fonction pour recevoir une donnée.
* **Argument** : valeur fournie lors de l'appel d'une fonction.
* **`return`** : instruction qui retourne une valeur depuis une fonction.
* **Valeur retournée** : résultat produit par une fonction.
* **Appel** : utilisation d'une fonction avec ses arguments.
* **Réutilisation** : utilisation d'une même fonction avec différentes données.
* **Booléen** : valeur qui peut être `true` ou `false`.
