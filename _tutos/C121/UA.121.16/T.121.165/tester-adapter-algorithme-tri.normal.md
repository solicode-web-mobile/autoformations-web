---
title: "Tester et adapter un algorithme de tri"
layout: tuto
slug: "tester-adapter-algorithme-tri"
permalink: /tutos/:slug/
tuto_id: "T.121.165"
type: "classique"
version: "normal"
ua: "UA.121.16"
nav_order: 5
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans le tutoriel précédent, vous avez construit le **tri par sélection** dans l'ordre croissant.

Dans ce tutoriel, vous allez apprendre à :

* tester l'algorithme avec plusieurs collections ;
* vérifier qu'il conserve toutes les valeurs ;
* tester des cas différents ;
* repérer un comportement incorrect ;
* adapter le tri à l'ordre décroissant ;
* comprendre qu'une petite modification de la règle de comparaison peut changer le résultat.

La démarche est :

```text id="k9x2r6"
Tester
↓
Observer
↓
Vérifier
↓
Corriger si nécessaire
↓
Adapter
↓
Tester à nouveau
```

## 2. Prérequis

Vous devez savoir :

* manipuler un tableau ;
* utiliser des index ;
* utiliser des boucles ;
* utiliser des conditions ;
* rechercher un minimum ;
* mémoriser une position ;
* échanger deux éléments ;
* construire le tri par sélection ;
* expliquer le rôle des deux boucles.

Vous devez avoir terminé :

**T.121.164 — Construire le tri par sélection**

## Données de départ

Utilisez le tri par sélection construit précédemment :

```javascript id="k1m6w2"
let nombres = [7, 3, 9, 2, 5];

for (let i = 0; i < nombres.length - 1; i++) {
    let positionMinimum = i;

    for (let j = i + 1; j < nombres.length; j++) {
        if (nombres[j] < nombres[positionMinimum]) {
            positionMinimum = j;
        }
    }

    let temporaire = nombres[i];
    nombres[i] = nombres[positionMinimum];
    nombres[positionMinimum] = temporaire;
}

console.log(nombres);
```

Le résultat attendu est :

```text id="u7r4x2"
[2, 3, 5, 7, 9]
```

## Partie 1 — Théorie

### 1.1. Pourquoi tester un algorithme ?

Un algorithme peut fonctionner avec un tableau et produire une erreur avec un autre.

Un seul test ne suffit donc pas.

Par exemple, tester seulement :

```text id="rh4t1k"
[7, 3, 9, 2, 5]
```

ne permet pas de savoir si l'algorithme fonctionne dans toutes les situations.

Il faut utiliser plusieurs collections.

### 1.2. Tester une collection déjà triée

Premier test :

```javascript id="f4k0t8"
let nombres = [1, 2, 3, 4, 5];
```

Le résultat attendu est :

```text id="o8y0y4"
[1, 2, 3, 4, 5]
```

Le tableau est déjà dans l'ordre demandé.

Ce test permet de vérifier que l'algorithme ne détruit pas une collection déjà correcte.

### 1.3. Tester une collection inversée

Deuxième test :

```javascript id="s5x8v1"
let nombres = [5, 4, 3, 2, 1];
```

Le résultat attendu est :

```text id="9b2q7n"
[1, 2, 3, 4, 5]
```

Ce test est important car toutes les valeurs sont dans l'ordre inverse.

### 1.4. Tester une collection désordonnée

Troisième test :

```javascript id="q5c8w6"
let nombres = [8, 3, 7, 1, 5];
```

Le résultat attendu est :

```text id="4m6y2h"
[1, 3, 5, 7, 8]
```

Ce test représente une situation courante.

### 1.5. Tester avec des valeurs répétées

Un tableau peut contenir plusieurs fois la même valeur.

Exemple :

```javascript id="x3w7p5"
let nombres = [5, 2, 5, 3, 2];
```

Le résultat attendu est :

```text id="h7v2p0"
[2, 2, 3, 5, 5]
```

Le tri ne doit pas supprimer les valeurs répétées.

Il doit seulement modifier leur ordre.

### 1.6. Tester une seule valeur

Test :

```javascript id="m8s2c4"
let nombres = [7];
```

Le résultat attendu est :

```text id="a6q0p3"
[7]
```

Il n'y a rien à déplacer.

Ce test permet de vérifier le comportement de l'algorithme avec une collection très petite.

### 1.7. Tester une collection vide

Test :

```javascript id="r4n8t6"
let nombres = [];
```

Il n'y a aucune valeur à trier.

Le programme doit conserver :

```text id="k2v5h7"
[]
```

Ce cas permet de vérifier le comportement lorsque la collection ne contient aucun élément.

### 1.8. Vérifier les invariants simples

Pendant un tri, certaines propriétés doivent rester vraies.

Avant et après le tri :

```text id="w7m3q8"
Le nombre de valeurs reste le même.
```

Les valeurs présentes restent les mêmes.

Exemple :

```text id="b2p6z4"
Avant :
[7, 3, 9, 2, 5]
```

Après :

```text id="c9r1v5"
[2, 3, 5, 7, 9]
```

Il y a toujours :

```text id="m4x8n2"
5 valeurs
```

Aucune valeur n'a été créée.

Aucune valeur n'a été supprimée.

### 1.9. Vérifier le résultat

Pour un tri croissant, le résultat doit respecter :

```text id="q8f3y6"
valeur précédente <= valeur suivante
```

Exemple :

```text id="w1k7c5"
[2, 3, 5, 7, 9]
```

On vérifie :

```text id="p6z2m8"
2 <= 3
3 <= 5
5 <= 7
7 <= 9
```

Le tableau est donc correctement trié.

### 1.10. Observer une erreur de comparaison

Le tri croissant utilise actuellement :

```javascript id="v4m9x1"
if (nombres[j] < nombres[positionMinimum])
```

Cette règle signifie :

> Chercher la plus petite valeur.

C'est cette règle qui permet de construire l'ordre croissant.

Pour comprendre l'adaptation, il faut identifier précisément ce rôle.

### 1.11. Adapter vers l'ordre décroissant

Pour obtenir un ordre décroissant, nous ne voulons plus chercher le minimum.

Nous voulons chercher le **maximum restant**.

La règle devient :

```javascript id="n6w3p8"
if (nombres[j] > nombres[positionMinimum])
```

La différence est importante :

```text id="z2c7k4"
< → chercher le plus petit

> → chercher le plus grand
```

Le reste du mécanisme reste identique :

```text id="u5q1r9"
Position courante
↓
Chercher une valeur
↓
Mémoriser sa position
↓
Échanger
↓
Passer à la position suivante
```

### 1.12. Construire le tri décroissant

À partir du même algorithme :

```javascript id="s8m2q6"
let nombres = [7, 3, 9, 2, 5];

for (let i = 0; i < nombres.length - 1; i++) {
    let positionMaximum = i;

    for (let j = i + 1; j < nombres.length; j++) {
        if (nombres[j] > nombres[positionMaximum]) {
            positionMaximum = j;
        }
    }

    let temporaire = nombres[i];
    nombres[i] = nombres[positionMaximum];
    nombres[positionMaximum] = temporaire;
}

console.log(nombres);
```

Résultat :

```text id="g4y9w2"
[9, 7, 5, 3, 2]
```

L'algorithme est presque identique.

La règle de recherche change :

```text id="e3r7v1"
minimum
```

devient :

```text id="p9m5c2"
maximum
```

### 1.13. Comprendre l'adaptation

Il ne faut pas reconstruire tout l'algorithme.

On conserve :

```text id="h2v8n6"
boucle externe
+
boucle interne
+
position
+
échange
```

On change uniquement la règle qui détermine l'élément à placer.

Pour le croissant :

```text id="c6q3m9"
chercher le minimum
```

Pour le décroissant :

```text id="k1x7r4"
chercher le maximum
```

### 1.14. À retenir

Tester un algorithme signifie utiliser plusieurs situations.

Pour un tri, testez notamment :

```text id="r8p3z6"
tableau déjà trié
tableau inversé
tableau désordonné
valeurs répétées
une valeur
aucune valeur
```

Pour adapter le tri :

```text id="n5y2v7"
Croissant
→ chercher le minimum

Décroissant
→ chercher le maximum
```

Le mécanisme général reste identique.

## Partie 2 — Pratique

### 2.1. Tester le tableau déjà trié

Utilisez le tri croissant avec :

```javascript id="t7m3x9"
let nombres = [1, 2, 3, 4, 5];
```

Vérifiez :

```text id="f4k8q2"
Résultat attendu :
[1, 2, 3, 4, 5]
```

Puis répondez :

> Le tri a-t-il modifié l'ordre du tableau ?

Expliquez pourquoi.

### 2.2. Tester le tableau inversé

Utilisez :

```javascript id="b8n4r6"
let nombres = [5, 4, 3, 2, 1];
```

Résultat attendu :

```text id="v2c7m5"
[1, 2, 3, 4, 5]
```

Observez les étapes principales du tri.

### 2.3. Tester un tableau désordonné

Utilisez :

```javascript id="p5x9s3"
let nombres = [8, 3, 7, 1, 5];
```

Résultat attendu :

```text id="k6q2w8"
[1, 3, 5, 7, 8]
```

Vérifiez manuellement le résultat.

### 2.4. Tester des valeurs répétées

Utilisez :

```javascript id="d4y7m1"
let nombres = [5, 2, 5, 3, 2];
```

Résultat attendu :

```text id="n8c3v6"
[2, 2, 3, 5, 5]
```

Vérifiez :

```text id="s2r9p4"
Nombre de valeurs avant :
5

Nombre de valeurs après :
5
```

### 2.5. Tester une seule valeur

Utilisez :

```javascript id="j6m2q8"
let nombres = [10];
```

Résultat attendu :

```text id="x4v7c1"
[10]
```

### 2.6. Tester une collection vide

Utilisez :

```javascript id="q3n8w5"
let nombres = [];
```

Résultat attendu :

```text id="r7m1z4"
[]
```

Observez que le programme ne tente pas d'utiliser un élément inexistant.

### 2.7. Construire une série de tests

Créez plusieurs jeux de données :

```javascript id="f6t2y9"
let test1 = [1, 2, 3, 4, 5];
let test2 = [5, 4, 3, 2, 1];
let test3 = [8, 3, 7, 1, 5];
let test4 = [5, 2, 5, 3, 2];
let test5 = [10];
let test6 = [];
```

Testez votre algorithme avec chaque tableau.

Complétez :

| Test | Données           | Résultat attendu | Résultat obtenu | Correct ? |
| ---- | ----------------- | ---------------- | --------------- | --------- |
| 1    | `[1, 2, 3, 4, 5]` |                  |                 |           |
| 2    | `[5, 4, 3, 2, 1]` |                  |                 |           |
| 3    | `[8, 3, 7, 1, 5]` |                  |                 |           |
| 4    | `[5, 2, 5, 3, 2]` |                  |                 |           |
| 5    | `[10]`            |                  |                 |           |
| 6    | `[]`              |                  |                 |           |

### 2.8. Adapter le tri vers l'ordre décroissant

Prenez le tri croissant construit précédemment.

Identifiez la condition :

```javascript id="k8q1s5"
if (nombres[j] < nombres[positionMinimum])
```

Expliquez ce qu'elle recherche.

Puis adaptez le programme pour chercher la plus grande valeur.

Utilisez :

```javascript id="p4n7x2"
positionMaximum
```

et une condition adaptée.

### 2.9. Tester le tri décroissant

Testez avec :

```javascript id="m9c5v1"
let nombres = [7, 3, 9, 2, 5];
```

Résultat attendu :

```text id="s6w2r8"
[9, 7, 5, 3, 2]
```

Puis testez avec :

```javascript id="t3y8q6"
let nombres = [1, 2, 3, 4, 5];
```

Résultat attendu :

```text id="z4m7c2"
[5, 4, 3, 2, 1]
```

### 2.10. Comparer les deux versions

Complétez :

| Élément                         | Ordre croissant | Ordre décroissant |
| ------------------------------- | --------------- | ----------------- |
| Élément recherché               |                 |                   |
| Nom de la position              |                 |                   |
| Comparaison                     |                 |                   |
| Résultat pour `[7, 3, 9, 2, 5]` |                 |                   |

Observez ce qui reste identique.

### 2.11. Exercice de correction

On vous donne ce programme :

```javascript id="u8f4m2"
let nombres = [7, 3, 9, 2, 5];

for (let i = 0; i < nombres.length - 1; i++) {
    let positionMaximum = i;

    for (let j = i + 1; j < nombres.length; j++) {
        if (nombres[j] < nombres[positionMaximum]) {
            positionMaximum = j;
        }
    }

    let temporaire = nombres[i];
    nombres[i] = nombres[positionMaximum];
    nombres[positionMaximum] = temporaire;
}

console.log(nombres);
```

Le nom de la variable indique :

```text id="g2p6x8"
positionMaximum
```

mais la comparaison cherche :

```text id="r5c1w7"
la plus petite valeur
```

Identifiez l'incohérence.

Corrigez le programme pour obtenir un tri décroissant.

### 2.12. Tester l'adaptation

Après correction, utilisez :

```javascript id="j7v3n9"
let nombres = [12, 4, 9, 2, 15, 7];
```

Le résultat attendu est :

```text id="c8x5m1"
[15, 12, 9, 7, 4, 2]
```

Puis utilisez :

```javascript id="r6q2w4"
let nombres = [5, 5, 2, 8, 3];
```

Résultat attendu :

```text id="n3v8k6"
[8, 5, 5, 3, 2]
```

### 2.13. Exercice final

Construisez deux versions du tri par sélection :

```text id="k4m9p2"
Version 1 :
ordre croissant

Version 2 :
ordre décroissant
```

Utilisez :

```javascript id="w7s3c5"
let nombres = [20, 5, 12, 3, 18, 9];
```

La version croissante doit produire :

```text id="a6f2v8"
[3, 5, 9, 12, 18, 20]
```

La version décroissante doit produire :

```text id="q9m4x1"
[20, 18, 12, 9, 5, 3]
```

Testez également :

```javascript id="e5r8n2"
let nombres = [4, 4, 2, 7, 2];
```

Résultats :

```text id="p7c3m6"
Croissant :
[2, 2, 4, 4, 7]

Décroissant :
[7, 4, 4, 2, 2]
```

Vous devez expliquer quelle règle change entre les deux versions.

**Travail à faire :**

Tester le tri par sélection sur plusieurs types de collections et l'adapter de l'ordre croissant à l'ordre décroissant.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* le programme du tri croissant ;
* les résultats des différents tests ;
* le programme adapté au tri décroissant ;
* les tests du tri décroissant ;
* le tableau de comparaison entre les deux versions ;
* la correction du programme contenant l'erreur.

**Résultat attendu :**

Le tri croissant doit fonctionner avec :

```text
[1, 2, 3, 4, 5]
[5, 4, 3, 2, 1]
[8, 3, 7, 1, 5]
[5, 2, 5, 3, 2]
[10]
[]
```

Le tri décroissant doit fonctionner avec les mêmes types de collections.

**Critère de réussite :**

La solution est réussie lorsque :

* le tri croissant fonctionne sur plusieurs collections ;
* les valeurs répétées sont conservées ;
* les collections très petites sont correctement traitées ;
* la collection vide est correctement traitée ;
* le tri décroissant fonctionne ;
* la seule modification conceptuelle nécessaire est comprise ;
* aucune méthode `Array.sort()` n'est utilisée.

## Bilan

**Vous avez appris à tester un algorithme avec différents cas :**

```text id="r4y8k2"
Déjà trié
↓
Inversé
↓
Désordonné
↓
Valeurs répétées
↓
Petite collection
↓
Collection vide
```

Vous avez également appris à adapter le tri par sélection.

Pour l'ordre croissant :

```text id="j6n2v5"
chercher le minimum
```

Pour l'ordre décroissant :

```text id="p8c4x7"
chercher le maximum
```

Le mécanisme général reste le même :

```text id="u1m7q3"
Position courante
↓
Chercher une valeur
↓
Mémoriser sa position
↓
Échanger
↓
Passer à la position suivante
```

Vous savez maintenant **construire, tester et adapter** un algorithme classique de tri.

Le prochain tutoriel sera le tutoriel de synthèse : vous devrez utiliser ces acquis pour **trier une collection complète et vérifier votre solution**.

## Glossaire

* **Test** : exécution d'un programme avec des données choisies.
* **Cas de test** : situation particulière utilisée pour vérifier un programme.
* **Valeur répétée** : valeur présente plusieurs fois dans une collection.
* **Adapter** : modifier une solution pour répondre à une nouvelle règle.
* **Ordre croissant** : du plus petit au plus grand.
* **Ordre décroissant** : du plus grand au plus petit.
* **Comparaison** : règle utilisée pour déterminer quelle valeur doit être choisie.
* **Tri par sélection** : algorithme qui sélectionne progressivement le minimum ou le maximum restant.
