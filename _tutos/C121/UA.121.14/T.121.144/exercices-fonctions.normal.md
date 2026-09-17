---
title: "Exercices sur les fonctions"
layout: tuto
slug: "exercices-fonctions"
permalink: /tutos/:slug/
tuto_id: "T.121.144"
type: "classique"
version: "normal"
ua: "UA.121.14"
nav_order: 4
data_js:  ""
---

## 1. Objectif

Dans ce tutoriel, vous allez vous entraîner à **créer et utiliser des fonctions réutilisables**.

Vous allez réutiliser :

* les paramètres ;
* les arguments ;
* `return` ;
* les conditions ;
* les calculs ;
* les appels de fonctions.

La progression est :

```text id="m2v8qx"
Fonction simple
    ↓
Paramètres
    ↓
Retour d'une valeur
    ↓
Condition
    ↓
Calcul
    ↓
Plusieurs paramètres
    ↓
Combinaison de fonctions
```

L'objectif n'est pas encore de transformer les grands algorithmes des tableaux en fonctions. Ce travail sera réalisé dans le T.121.145.

## 2. Prérequis

Vous devez savoir :

* déclarer une fonction ;
* appeler une fonction ;
* utiliser un paramètre ;
* transmettre un argument ;
* utiliser plusieurs paramètres ;
* utiliser `return` ;
* stocker une valeur retournée ;
* utiliser le résultat d'une fonction dans un autre traitement.

Exemple :

```javascript id="f4q8mc"
function additionner(a, b) {
  return a + b;
}

let resultat = additionner(10, 5);

console.log(resultat);
```

Résultat :

```text id="j7m3qx"
15
```

## Données de départ

### JavaScript

Créez un fichier :

```text id="v5q2mk"
exercices-fonctions.js
```

Commencez avec :

```javascript id="k8m1xc"
function additionner(a, b) {
  return a + b;
}

let resultat = additionner(10, 5);

console.log(resultat);
```

Exécutez :

```bash id="p3x7mv"
node exercices-fonctions.js
```

Résultat :

```text id="r6q9kc"
15
```

## Partie 1 — Théorie

### 1.1. Une fonction reçoit des données

Une fonction peut recevoir des données grâce à ses paramètres.

Exemple :

```javascript id="w4m8qx"
function afficherNom(prenom) {
  console.log("Bonjour " + prenom);
}
```

Lors de l'appel :

```javascript id="c2q7mk"
afficherNom("Madani");
```

La valeur `"Madani"` est transmise au paramètre `prenom`.

### 1.2. Une fonction peut retourner une valeur

Exemple :

```javascript id="n5x3rc"
function additionner(a, b) {
  return a + b;
}
```

L'appel :

```javascript id="z8m2qv"
additionner(10, 5);
```

produit la valeur :

```text id="h4q7mc"
15
```

Cette valeur peut être stockée :

```javascript id="r1x6pk"
let somme = additionner(10, 5);
```

### 1.3. Une fonction peut retourner un booléen

Exemple :

```javascript id="j9m4xc"
function estPair(nombre) {
  return nombre % 2 === 0;
}
```

Résultats :

```javascript id="v6q2mk"
estPair(8);
```

donne :

```text id="s3x7qr"
true
```

et :

```javascript id="b5m8nc"
estPair(7);
```

donne :

```text id="k1q4mv"
false
```

### 1.4. Une fonction peut recevoir plusieurs paramètres

Exemple :

```javascript id="m7x2qc"
function calculerPrix(prix, quantite) {
  return prix * quantite;
}
```

Appel :

```javascript id="w3q8mk"
calculerPrix(20, 3);
```

Résultat :

```text id="p6v1xr"
60
```

### 1.5. Une fonction peut être utilisée dans une condition

Exemple :

```javascript id="f8m3qc"
function estMajeur(age) {
  return age >= 18;
}

if (estMajeur(20)) {
  console.log("Majeur");
}
```

La fonction retourne :

```text id="a7q2mk"
true
```

La condition peut donc utiliser directement le résultat.

### 1.6. Une fonction peut être utilisée par une autre fonction

Exemple :

```javascript id="c4m8qx"
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

```text id="r7x2mc"
additionner(10, 5)
        ↓
       15
        ↓
doubler(15)
        ↓
       30
```

### 1.7. Méthode pour résoudre un exercice

Pour chaque exercice :

```text id="m3q8vx"
1. Identifier ce que la fonction doit faire.
        ↓
2. Identifier les données nécessaires.
        ↓
3. Choisir les paramètres.
        ↓
4. Construire le traitement.
        ↓
5. Retourner le résultat.
        ↓
6. Tester avec plusieurs valeurs.
```

### 1.8. À retenir

* Un paramètre représente une donnée reçue par la fonction.
* Un argument est la valeur donnée lors de l'appel.
* `return` permet de retourner le résultat.
* Une fonction peut retourner un nombre, un texte ou un booléen.
* Une fonction peut être utilisée dans une condition.
* Une fonction peut être utilisée dans une autre fonction.

## Partie 2 — Pratique

### 2.1. Exercice 1 — Additionner deux nombres

Créez :

```text id="q4m7xc"
additionner(a, b)
```

La fonction doit retourner la somme de `a` et `b`.

Tests :

```text id="z5q1mk"
additionner(10, 5) → 15
additionner(20, 7) → 27
additionner(8, 12) → 20
```

### 2.2. Exercice 2 — Soustraire deux nombres

Créez :

```text id="x8m3qv"
soustraire(a, b)
```

La fonction doit retourner :

```text id="k2q7mc"
a - b
```

Tests :

```text id="p6m1xr"
soustraire(10, 5) → 5
soustraire(5, 10) → -5
soustraire(20, 7) → 13
```

### 2.3. Exercice 3 — Multiplier deux nombres

Créez :

```text id="r4m8qx"
multiplier(a, b)
```

Tests :

```text id="v7q2mk"
multiplier(4, 5) → 20
multiplier(7, 3) → 21
multiplier(10, 8) → 80
```

### 2.4. Exercice 4 — Diviser deux nombres

Créez :

```text id="m5x9qc"
diviser(a, b)
```

La fonction retourne :

```text id="f2q7mk"
a / b
```

Testez avec :

```text id="c8m3xr"
diviser(10, 2) → 5
diviser(15, 3) → 5
```

Ajoutez également un test avec `b = 0` et observez le résultat.

### 2.5. Exercice 5 — Vérifier la majorité

Créez :

```text id="q1m6vc"
estMajeur(age)
```

La fonction retourne `true` si :

```text id="x7q2mk"
age >= 18
```

Sinon, elle retourne `false`.

Tests :

```text id="p4m8xr"
estMajeur(20) → true
estMajeur(18) → true
estMajeur(15) → false
```

### 2.6. Exercice 6 — Vérifier si un nombre est pair

Créez :

```text id="k5x3qm"
estPair(nombre)
```

Tests :

```text id="w8m1vc"
estPair(8) → true
estPair(7) → false
estPair(20) → true
estPair(13) → false
```

### 2.7. Exercice 7 — Vérifier une note

Créez :

```text id="r3q7mk"
estValidee(note)
```

La fonction retourne `true` si la note est supérieure ou égale à `10`.

Tests :

```text id="m8x2qc"
estValidee(15) → true
estValidee(10) → true
estValidee(8) → false
```

### 2.8. Exercice 8 — Trouver le maximum de deux nombres

Créez :

```text id="q6m4xr"
trouverMaximum(a, b)
```

La fonction doit retourner la plus grande valeur.

Tests :

```text id="v2q8mk"
trouverMaximum(12, 18) → 18
trouverMaximum(20, 7) → 20
trouverMaximum(10, 10) → 10
```

### 2.9. Exercice 9 — Trouver le minimum de deux nombres

Créez :

```text id="x5m1qc"
trouverMinimum(a, b)
```

Tests :

```text id="k7q3mv"
trouverMinimum(12, 18) → 12
trouverMinimum(20, 7) → 7
trouverMinimum(10, 10) → 10
```

### 2.10. Exercice 10 — Calculer un prix total

Créez :

```text id="p4m9qx"
calculerPrixTotal(prix, quantite)
```

La fonction retourne :

```text id="w2q6mk"
prix × quantite
```

Tests :

```text id="r8x3vc"
calculerPrixTotal(20, 3) → 60
calculerPrixTotal(15, 4) → 60
calculerPrixTotal(25, 2) → 50
```

### 2.11. Exercice 11 — Calculer une moyenne

Créez :

```text id="m6q2xr"
calculerMoyenne(note1, note2, note3)
```

La fonction retourne la moyenne des trois notes.

Tests :

```text id="x7m4qc"
calculerMoyenne(12, 15, 9) → 12
calculerMoyenne(10, 14, 18) → 14
```

### 2.12. Exercice 12 — Déterminer un niveau

Créez :

```text id="q3m8vx"
determinerNiveau(note)
```

Règles :

```text id="k5x1mc"
note >= 16 → "Très bien"
note >= 10 → "Validé"
sinon       → "Non validé"
```

Tests :

```text id="r8q2mk"
determinerNiveau(17) → "Très bien"
determinerNiveau(12) → "Validé"
determinerNiveau(7) → "Non validé"
```

### 2.13. Exercice 13 — Calculer une remise

Une boutique applique :

```text id="m7x4qc"
montant >= 200 → remise de 10 %
sinon          → aucune remise
```

Créez :

```text id="v2q8mk"
calculerRemise(montant)
```

Exemples :

```text id="p5m1xr"
calculerRemise(300) → 30
calculerRemise(150) → 0
```

### 2.14. Exercice 14 — Calculer le prix après remise

Créez :

```text id="x3m7qc"
calculerPrixApresRemise(montant)
```

Utilisez la règle précédente :

```text id="q8m2vk"
montant >= 200 → -10 %
sinon          → prix inchangé
```

Tests :

```text id="r4m9xc"
calculerPrixApresRemise(300) → 270
calculerPrixApresRemise(150) → 150
```

### 2.15. Exercice 15 — Combiner deux fonctions

Créez :

```javascript id="m6q1vx"
function additionner(a, b) {
  return a + b;
}

function doubler(nombre) {
  return nombre * 2;
}
```

Construisez un traitement qui calcule :

```text id="x7m3qc"
(10 + 5) × 2
```

Résultat attendu :

```text id="p2q8mk"
30
```

### 2.16. Exercice 16 — Vérifier une moyenne

Créez :

```text id="r5m2xc"
calculerMoyenne(note1, note2, note3)
```

et :

```text id="q8x4mk"
estValidee(note)
```

Calculez d'abord la moyenne :

```text id="v3m7qc"
12
15
9
```

Puis utilisez la moyenne pour vérifier si elle est validée.

Résultat attendu :

```text id="k6q1xr"
Moyenne : 12
Validée : true
```

### 2.17. Exercice 17 — Utiliser trois fonctions

Créez :

```text id="m2x8qc"
calculerMoyenne()
estValidee()
determinerNiveau()
```

Avec :

```text id="q5m1vk"
12
15
9
```

Le traitement doit être :

```text id="x7m3qr"
notes
  ↓
calculerMoyenne()
  ↓
12
  ↓
estValidee()
  ↓
true
  ↓
determinerNiveau()
  ↓
"Validé"
```

### 2.18. Exercice 18 — Fonction de calcul de salaire

Considérez :

```text id="r4m8xc"
salaire = 8000
prime = 1500
```

Créez :

```text id="m7q2vk"
calculerSalaireTotal(salaire, prime)
```

Résultat :

```text id="p5x1qc"
9500
```

### 2.19. Exercice 19 — Fonction de frais de livraison

Règle :

```text id="x3m7qr"
montant >= 500 → livraison gratuite
sinon           → livraison 40
```

Créez :

```text id="q8m4xc"
calculerLivraison(montant)
```

Tests :

```text id="v1q6mk"
calculerLivraison(600) → 0
calculerLivraison(300) → 40
```

### 2.20. Exercice 20 — Fonction de classement

Une fonction reçoit :

```text id="m5x2qc"
note
```

Elle doit retourner :

```text id="q7m8vk"
"Excellent" → note >= 18
"Très bien" → note >= 16
"Validé"    → note >= 10
"Non validé" → sinon
```

Testez :

```text id="r3q1mc"
18
16
12
8
```

Observez les résultats.

## 2.21. Travail à faire

Choisissez **quatre exercices** parmi les exercices 8 à 20.

Votre sélection doit contenir :

* une fonction avec plusieurs paramètres ;
* une fonction qui retourne un booléen ;
* une fonction avec plusieurs conditions ;
* un exercice qui combine au moins deux fonctions.

Pour chaque exercice :

1. identifiez les données ;
2. définissez les paramètres ;
3. construisez la fonction ;
4. utilisez `return` ;
5. appelez la fonction ;
6. testez avec plusieurs valeurs.

### Livrable

Créez un document Markdown ou un Google Doc contenant, pour chaque exercice :

```text id="k4m8qc"
Exercice

1. Problème
2. Paramètres
3. Règles
4. Fonction
5. Appels de test
6. Résultats
```

### Critère de réussite

Le travail est réussi si :

* les paramètres sont adaptés au problème ;
* les arguments sont correctement transmis ;
* `return` est correctement utilisé ;
* les fonctions produisent les bons résultats ;
* les fonctions peuvent être appelées plusieurs fois avec des valeurs différentes ;
* les fonctions combinées utilisent correctement les résultats retournés.

### Résultat attendu

À la fin de ce tutoriel, vous devez être capable de construire des fonctions comme :

```text id="x7q2mv"
additionner()
soustraire()
multiplier()
estMajeur()
estPair()
estValidee()
trouverMaximum()
trouverMinimum()
calculerMoyenne()
determinerNiveau()
```

Vous devez comprendre que chaque fonction représente un **traitement isolé et réutilisable**.

## Bilan

**Vous avez appris :**

* à créer des fonctions avec des paramètres ;
* à transmettre plusieurs arguments ;
* à retourner des résultats ;
* à retourner des booléens ;
* à utiliser des conditions dans une fonction ;
* à réutiliser une même fonction avec différentes données ;
* à combiner plusieurs fonctions.

**Vous savez maintenant :**

```text id="m5x8qc"
Problème simple
      ↓
Fonction
      ↓
Paramètres
      ↓
Traitement
      ↓
return
      ↓
Résultat
      ↓
Réutilisation
```

Le prochain tutoriel va utiliser les **algorithmes déjà construits sur les tableaux** pour les transformer en fonctions réutilisables : somme, moyenne, recherche, maximum, minimum et comptage.

## Glossaire

* **Paramètre** : variable utilisée par une fonction pour recevoir une donnée.
* **Argument** : valeur fournie lors de l'appel d'une fonction.
* **`return`** : instruction qui retourne une valeur.
* **Valeur retournée** : résultat produit par une fonction.
* **Fonction réutilisable** : fonction qui peut être appelée plusieurs fois avec des données différentes.
* **Booléen** : valeur `true` ou `false`.
* **Composition** : utilisation du résultat d'une fonction dans un autre traitement ou une autre fonction.
