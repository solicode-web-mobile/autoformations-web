---
title: "Construire les sous-traitements"
layout: tuto
slug: "construire-sous-traitements"
permalink: /tutos/:slug/
tuto_id: "T.121.173"
type: "classique"
version: "normal"
ua: "UA.121.17"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans le tutoriel précédent, vous avez appris à décrire un traitement avec :

```text
Entrée
↓
Traitement
↓
Sortie
```

Dans ce tutoriel, vous allez maintenant **construire les sous-traitements séparément**.

Vous allez apprendre à :

* créer une fonction pour un sous-problème ;
* respecter la responsabilité de la fonction ;
* utiliser correctement ses entrées ;
* produire la sortie attendue ;
* tester chaque fonction séparément ;
* corriger une fonction sans modifier inutilement les autres.

La méthode est :

```text
Responsabilité
↓
Entrée
↓
Construction
↓
Test
↓
Vérification
```

L'objectif n'est pas encore de construire le traitement complet.

Chaque sous-traitement doit d'abord fonctionner seul.

## 2. Prérequis

Vous devez savoir :

* utiliser des variables ;
* utiliser des conditions ;
* utiliser des boucles ;
* utiliser des tableaux ;
* créer une fonction ;
* utiliser un paramètre ;
* retourner une valeur avec `return` ;
* calculer une somme ;
* calculer une moyenne ;
* trouver un maximum ;
* trouver un minimum ;
* compter selon une condition ;
* décomposer un problème ;
* définir les entrées et sorties d'un traitement.

Vous devez avoir terminé :

**T.121.171 — Comprendre la décomposition d'un problème**

**T.121.172 — Définir les entrées et sorties des traitements**

## Données de départ

Nous allons travailler sur le problème suivant :

> Une application analyse les notes d'un groupe. Elle doit calculer la moyenne, trouver la meilleure note, trouver la plus petite note, compter les notes validées et déterminer une appréciation.

Les données sont :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Le problème peut être décomposé en plusieurs traitements :

```text
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
determinerAppreciation()
```

Chaque traitement possède une responsabilité différente.

## Partie 1 — Théorie

### 1.1. Construire un sous-traitement

Construire un sous-traitement signifie transformer une responsabilité clairement définie en une fonction.

Exemple :

```text
Responsabilité :
calculer la moyenne
```

On peut créer :

```javascript
function calculerMoyenne(notes) {
    // traitement
}
```

La fonction reçoit :

```text
notes
```

et doit produire :

```text
moyenne
```

### 1.2. Respecter la responsabilité

Une fonction doit faire ce que son nom annonce.

Par exemple :

```javascript
function trouverMaximum(notes) {
    // rechercher la plus grande valeur
}
```

Cette fonction ne doit pas en même temps :

* calculer la moyenne ;
* afficher plusieurs résultats ;
* déterminer une appréciation.

Son rôle est :

```text
trouver le maximum
```

Cette séparation rend le programme plus facile à comprendre.

### 1.3. Construire `calculerSomme()`

La responsabilité est :

```text
Calculer la somme des valeurs.
```

Entrée :

```text
tableau de nombres
```

Sortie :

```text
somme
```

On peut construire :

```javascript
function calculerSomme(nombres) {
    let somme = 0;

    for (let i = 0; i < nombres.length; i++) {
        somme = somme + nombres[i];
    }

    return somme;
}
```

Test :

```javascript
let nombres = [12, 15, 8];

console.log(calculerSomme(nombres));
```

Résultat :

```text
35
```

La fonction réalise uniquement son traitement.

### 1.4. Construire `calculerMoyenne()`

La responsabilité est :

```text
Calculer la moyenne.
```

Pour calculer une moyenne, nous avons besoin :

```text
somme
+
nombre de valeurs
```

La fonction peut réutiliser `calculerSomme()` :

```javascript
function calculerMoyenne(nombres) {
    let somme = calculerSomme(nombres);

    return somme / nombres.length;
}
```

Test :

```javascript
let nombres = [12, 15, 8];

console.log(calculerMoyenne(nombres));
```

Résultat :

```text
11.666666666666666
```

Ici, un traitement utilise un autre traitement déjà construit.

Il s'agit d'une première forme de combinaison, mais nous ne construisons pas encore le traitement global.

### 1.5. Construire `trouverMaximum()`

Responsabilité :

```text
Trouver la plus grande valeur.
```

Entrée :

```text
tableau de nombres
```

Sortie :

```text
maximum
```

Exemple :

```javascript
function trouverMaximum(nombres) {
    let maximum = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] > maximum) {
            maximum = nombres[i];
        }
    }

    return maximum;
}
```

Test :

```javascript
let nombres = [12, 15, 8, 17, 10];

console.log(trouverMaximum(nombres));
```

Résultat :

```text
17
```

### 1.6. Construire `trouverMinimum()`

Responsabilité :

```text
Trouver la plus petite valeur.
```

La structure est proche de celle du maximum.

```javascript
function trouverMinimum(nombres) {
    let minimum = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] < minimum) {
            minimum = nombres[i];
        }
    }

    return minimum;
}
```

Test :

```javascript
let nombres = [12, 15, 8, 17, 10];

console.log(trouverMinimum(nombres));
```

Résultat :

```text
8
```

### 1.7. Construire `compterValidees()`

La responsabilité est :

```text
Compter les notes supérieures ou égales à 10.
```

Entrée :

```text
tableau de notes
```

Règle :

```text
note >= 10
```

Sortie :

```text
nombre de notes validées
```

On peut construire :

```javascript
function compterValidees(notes) {
    let compteur = 0;

    for (let i = 0; i < notes.length; i++) {
        if (notes[i] >= 10) {
            compteur++;
        }
    }

    return compteur;
}
```

Test :

```javascript
let notes = [12, 15, 8, 17, 10];

console.log(compterValidees(notes));
```

Résultat :

```text
4
```

### 1.8. Construire `determinerAppreciation()`

Cette fonction ne reçoit pas la liste complète des notes.

Elle reçoit directement la moyenne.

Responsabilité :

```text
Déterminer une appréciation à partir de la moyenne.
```

Règles :

```text
moyenne >= 16 → Très bien
moyenne >= 10 → Validé
sinon → Non validé
```

On peut écrire :

```javascript
function determinerAppreciation(moyenne) {
    if (moyenne >= 16) {
        return "Très bien";
    }

    if (moyenne >= 10) {
        return "Validé";
    }

    return "Non validé";
}
```

Test :

```javascript
console.log(determinerAppreciation(14));
```

Résultat :

```text
Validé
```

Autres tests :

```javascript
console.log(determinerAppreciation(17));
console.log(determinerAppreciation(8));
```

Résultats :

```text
Très bien
Non validé
```

### 1.9. Tester chaque fonction séparément

Chaque sous-traitement doit être testé avant d'être utilisé dans une solution plus grande.

Exemple :

```text
calculerSomme()
→ test

calculerMoyenne()
→ test

trouverMaximum()
→ test

trouverMinimum()
→ test

compterValidees()
→ test

determinerAppreciation()
→ test
```

Cette méthode permet de savoir quelle fonction est responsable d'une erreur.

### 1.10. Pourquoi tester séparément ?

Supposons que le programme complet affiche une mauvaise moyenne.

Sans séparation, plusieurs traitements peuvent être concernés.

Avec des fonctions testées séparément :

```text
calculerSomme()
✓

calculerMoyenne()
✓

trouverMaximum()
✓
```

on peut limiter la recherche du problème.

Le principe est :

```text
Tester une petite partie
↓
Vérifier
↓
Passer à la suivante
```

### 1.11. Ne pas mettre toutes les fonctions dans une seule fonction

Évitez une fonction comme :

```javascript
function analyserNotes(notes) {
    // calculer somme
    // calculer moyenne
    // trouver maximum
    // trouver minimum
    // compter les validées
    // déterminer appréciation
}
```

Cette fonction contient trop de responsabilités.

Au N1, il est préférable de construire des fonctions simples :

```text
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
determinerAppreciation()
```

Chaque fonction peut être comprise et testée séparément.

### 1.12. Une fonction peut réutiliser une autre fonction

Une fonction peut avoir besoin du résultat d'une autre.

Exemple :

```text
calculerMoyenne()
```

peut utiliser :

```text
calculerSomme()
```

On obtient :

```text
notes
↓
calculerSomme()
↓
somme
↓
calculerMoyenne()
↓
moyenne
```

Cette relation sera davantage organisée dans le tutoriel sur le chaînage.

Pour le moment, l'objectif est de savoir construire chaque fonction correctement.

### 1.13. Construire à partir d'une fiche

Avant d'écrire une fonction, remplissez :

```text
Nom :
____________________

Responsabilité :
____________________

Entrée :
____________________

Sortie :
____________________
```

Exemple :

```text
Nom :
trouverMaximum()

Responsabilité :
trouver la plus grande valeur

Entrée :
tableau de nombres

Sortie :
maximum
```

Cette fiche sert de guide pour écrire le code.

### 1.14. À retenir

Pour construire un sous-traitement :

```text
1. Définir sa responsabilité.
2. Identifier son entrée.
3. Identifier sa sortie.
4. Construire la fonction.
5. Tester la fonction.
6. Vérifier le résultat.
```

Une fonction doit rester :

```text
simple
claire
testable
responsable d'une tâche
```

## Partie 2 — Pratique

### 2.1. Construire `calculerSomme()`

Utilisez :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Construisez une fonction :

```javascript
function calculerSomme(notes) {
    // votre code
}
```

Testez-la avec :

```javascript
console.log(calculerSomme(notes));
```

Résultat attendu :

```text
76
```

### 2.2. Construire `calculerMoyenne()`

Construisez :

```javascript
function calculerMoyenne(notes) {
    // votre code
}
```

Vous pouvez réutiliser :

```text
calculerSomme()
```

Testez avec :

```javascript
console.log(calculerMoyenne(notes));
```

Résultat attendu :

```text
12.666666666666666
```

### 2.3. Construire `trouverMaximum()`

Construisez :

```javascript
function trouverMaximum(notes) {
    // votre code
}
```

Testez :

```javascript
console.log(trouverMaximum(notes));
```

Résultat attendu :

```text
17
```

### 2.4. Construire `trouverMinimum()`

Construisez :

```javascript
function trouverMinimum(notes) {
    // votre code
}
```

Testez :

```javascript
console.log(trouverMinimum(notes));
```

Résultat attendu :

```text
8
```

### 2.5. Construire `compterValidees()`

Construisez :

```javascript
function compterValidees(notes) {
    // votre code
}
```

Utilisez la règle :

```text
note >= 10
```

Testez :

```javascript
console.log(compterValidees(notes));
```

Résultat attendu :

```text
5
```

### 2.6. Construire `determinerAppreciation()`

Construisez :

```javascript
function determinerAppreciation(moyenne) {
    // votre code
}
```

Utilisez les règles :

```text
moyenne >= 16 → Très bien
moyenne >= 10 → Validé
sinon → Non validé
```

Testez :

```javascript
console.log(determinerAppreciation(17));
console.log(determinerAppreciation(12));
console.log(determinerAppreciation(8));
```

Résultat attendu :

```text
Très bien
Validé
Non validé
```

### 2.7. Vérifier les fonctions avec plusieurs données

Utilisez maintenant :

```javascript
let test1 = [12, 15, 8, 17, 10, 14];
let test2 = [10, 10, 10];
let test3 = [5, 7, 9];
```

Testez chaque fonction avec ces trois tableaux lorsque cela est pertinent.

Complétez :

| Fonction            | Test 1 | Test 2 | Test 3 |
| ------------------- | -----: | -----: | -----: |
| `calculerSomme()`   |        |        |        |
| `calculerMoyenne()` |        |        |        |
| `trouverMaximum()`  |        |        |        |
| `trouverMinimum()`  |        |        |        |
| `compterValidees()` |        |        |        |

Pour `determinerAppreciation()`, utilisez directement des moyennes :

```text
17
12
8
```

### 2.8. Identifier une erreur de responsabilité

Observez cette fonction :

```javascript
function trouverMaximum(notes) {
    let maximum = notes[0];

    for (let i = 1; i < notes.length; i++) {
        if (notes[i] > maximum) {
            maximum = notes[i];
        }
    }

    console.log("Maximum :", maximum);

    let minimum = notes[0];

    for (let i = 1; i < notes.length; i++) {
        if (notes[i] < minimum) {
            minimum = notes[i];
        }
    }

    console.log("Minimum :", minimum);
}
```

Identifiez le problème.

La fonction annonce :

```text
trouver le maximum
```

mais elle réalise aussi :

```text
trouver le minimum
```

Elle possède donc plusieurs responsabilités.

Corrigez cette conception en créant deux fonctions distinctes.

### 2.9. Construire les traitements d'une commande

Nouveau problème :

> Une boutique possède quatre produits. Le programme doit calculer le total, appliquer une remise de 10 % et produire le prix final.

Prix :

```javascript
let prix = [20, 30, 15, 35];
```

Construisez les sous-traitements :

```text
calculerTotal()
calculerRemise()
calculerPrixFinal()
```

Pour chacun, définissez d'abord :

```text
Nom
Responsabilité
Entrée
Sortie
```

Puis construisez chaque fonction séparément.

### 2.10. Tester les traitements de la commande

Pour :

```javascript
let prix = [20, 30, 15, 35];
```

le total attendu est :

```text
100
```

La remise de `10 %` est :

```text
10
```

Le prix final est :

```text
90
```

Testez les traitements séparément.

Ne construisez pas encore le programme global.

### 2.11. Construire les traitements d'une analyse

Revenons aux notes :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

Construisez séparément :

```text
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
determinerAppreciation()
```

Pour chaque fonction, vérifiez :

```text
Entrée correcte
↓
Traitement correct
↓
Sortie correcte
```

### 2.12. Exercice individuel

Construisez les sous-traitements nécessaires au problème suivant :

> Une application reçoit les notes d'un groupe. Elle doit calculer la moyenne, trouver la meilleure note, trouver la plus petite note et compter les notes validées.

Utilisez :

```javascript
let notes = [14, 9, 12, 16, 7, 11];
```

Vous devez construire séparément :

```text
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
```

Pour chaque fonction :

1. définissez son rôle ;
2. définissez son entrée ;
3. construisez le traitement ;
4. retournez la sortie ;
5. testez la fonction.

Ne créez pas encore une fonction globale qui réalise tout le problème.

### 2.13. Exercice de synthèse

Madani Ali doit analyser les résultats d'un groupe.

Données :

```javascript
let notes = [13, 8, 16, 11, 7, 15];
```

Le programme devra plus tard produire :

```text
Somme
Moyenne
Maximum
Minimum
Notes validées
Appréciation
```

Dans ce tutoriel, construisez uniquement les sous-traitements.

Pour chaque traitement, produisez une fiche :

```text
Nom :
____________________

Responsabilité :
____________________

Entrée :
____________________

Sortie :
____________________
```

Puis construisez et testez les fonctions.

Ne les réunissez pas encore dans un traitement global.

**Travail à faire :**

Construire et tester séparément les sous-traitements nécessaires à plusieurs problèmes algorithmiques.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* les fiches de chaque sous-traitement ;
* le code des fonctions ;
* les tests réalisés ;
* les résultats obtenus ;
* les corrections effectuées lorsqu'une fonction ne respecte pas sa responsabilité.

**Résultat attendu :**

Pour le tableau :

```javascript
let notes = [12, 15, 8, 17, 10, 14];
```

les sous-traitements doivent notamment pouvoir produire :

```text
Somme : 76
Moyenne : 12.666666666666666
Maximum : 17
Minimum : 8
Notes validées : 5
```

et :

```text
determinerAppreciation(12.666666666666666)
```

doit produire :

```text
Validé
```

**Critère de réussite :**

Vous avez réussi lorsque :

* chaque fonction possède une responsabilité claire ;
* chaque fonction reçoit les bonnes données ;
* chaque fonction retourne le résultat attendu ;
* les fonctions sont testées séparément ;
* une fonction ne réalise pas inutilement la responsabilité d'une autre ;
* les fonctions peuvent être réutilisées dans le problème complet.

## Bilan

Vous savez maintenant transformer un sous-problème en traitement réel :

```text
Responsabilité
↓
Entrée
↓
Fonction
↓
Sortie
↓
Test
```

Vous avez construit séparément des traitements comme :

```text
calculerSomme()
calculerMoyenne()
trouverMaximum()
trouverMinimum()
compterValidees()
determinerAppreciation()
```

Vous avez également compris qu'une bonne décomposition exige des fonctions :

```text
simples
claires
testables
réutilisables
```

Jusqu'ici, les traitements ont surtout été construits et testés **séparément**.

La prochaine étape consistera à s'entraîner à **décomposer plusieurs problèmes et à déterminer les traitements nécessaires** avant de les réunir.

## Glossaire

* **Sous-traitement** : traitement réalisé pour une partie précise d'un problème global.
* **Responsabilité** : tâche précise qu'une fonction doit réaliser.
* **Fonction** : bloc de code réutilisable qui réalise un traitement.
* **Paramètre** : donnée reçue par une fonction.
* **Retour** : résultat produit par une fonction avec `return`.
* **Test individuel** : test d'une fonction sans dépendre du traitement global.
* **Réutilisable** : qui peut être utilisé dans plusieurs situations.
