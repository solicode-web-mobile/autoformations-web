---

title: "Exercices sur l'ordre et le tri"
layout: tuto
slug: "exercices-ordre-tri"
permalink: /tutos/:slug/
tuto_id: "T.121.163"
type: "classique"
version: "normal"
ua: "UA.121.16"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
-----------

## 1. Objectif

Dans ce tutoriel, vous allez vous entraîner sur les opérations nécessaires au tri d'une collection.

Vous allez travailler sur :

* la comparaison de deux valeurs ;
* la recherche d'un minimum ;
* la recherche de la position d'un minimum ;
* l'échange de deux éléments ;
* la recherche dans une partie du tableau ;
* les premières étapes d'un tri.

Vous ne construirez pas encore le tri complet.

La progression est :

```text
Comparer
↓
Chercher
↓
Repérer une position
↓
Échanger
↓
Répéter une étape
```

## 2. Prérequis

Vous devez savoir :

* manipuler un tableau ;
* utiliser un index ;
* utiliser `length` ;
* parcourir un tableau ;
* comparer deux valeurs ;
* rechercher un minimum ;
* mémoriser une position ;
* échanger deux éléments ;
* utiliser une variable temporaire.

Vous devez avoir terminé :

**T.121.161 — Comprendre l'ordre et le tri**

**T.121.162 — Construire les opérations nécessaires au tri**

## Données de départ

Les exercices utilisent principalement des tableaux de nombres.

Exemple :

```javascript id="g82kpw"
let nombres = [7, 3, 9, 2, 5];
```

Rappel :

```text id="q6g5as"
index 0 → 7
index 1 → 3
index 2 → 9
index 3 → 2
index 4 → 5
```

Pour les exercices manuels, vous devez écrire chaque étape.

Pour les exercices de programmation, utilisez JavaScript avec Node.js.

## Partie 1 — Théorie

### 1.1. Comparer deux valeurs

Pour déterminer l'ordre de deux valeurs, il faut les comparer.

Exemple :

```text id="r8jpw4"
4 et 9
```

La relation est :

```text id="1p7n5d"
4 < 9
```

Dans un ordre croissant, `4` doit donc être placé avant `9`.

Dans un ordre décroissant, `9` doit être placé avant `4`.

### 1.2. Chercher le minimum

Pour chercher le minimum d'une collection, on compare progressivement les valeurs.

La logique est :

```text id="hkj3ye"
Prendre une première valeur
↓
Comparer avec la suivante
↓
Conserver la plus petite
↓
Continuer
```

Le résultat recherché est :

```text id="x4s8g0"
la plus petite valeur
```

### 1.3. Chercher la position du minimum

Pour préparer un échange, connaître uniquement la valeur ne suffit pas.

Il faut aussi connaître sa position :

```text id="f5n4q1"
minimum
+
position du minimum
```

Cette position permet ensuite de déplacer la valeur dans le tableau.

### 1.4. Échanger deux éléments

Un échange permet de placer une valeur à une autre position.

Le principe est :

```text id="72gtg0"
ancienne valeur A
↓
variable temporaire

valeur B
↓
position A

valeur temporaire
↓
position B
```

L'échange conserve les deux valeurs.

### 1.5. Partie placée et partie restante

Dans un tri par sélection, on travaille progressivement sur le tableau.

On peut représenter la collection ainsi :

```text id="n5y7pa"
[partie placée | partie restante]
```

Exemple :

```text id="d7p5uz"
[2, 3 | 9, 7, 5]
```

La partie :

```text id="1q9u3h"
[2, 3]
```

est déjà placée.

La recherche continue dans :

```text id="7m2z9r"
[9, 7, 5]
```

### 1.6. Première étape du futur tri

Pour une première étape de tri croissant :

```text id="l1wqzy"
1. Chercher le minimum du tableau.
2. Trouver sa position.
3. Le placer à la première position.
```

Pour l'instant, vous allez réaliser ces opérations manuellement ou sur de petits exercices.

Le tri complet sera construit dans le prochain tutoriel.

### 1.7. À retenir

Pour chaque exercice, réfléchissez dans cet ordre :

```text id="h3m5pb"
Quelle valeur chercher ?
↓
Où se trouve-t-elle ?
↓
Où doit-elle aller ?
↓
Quelles valeurs faut-il échanger ?
```

## Partie 2 — Pratique

### 2.1. Exercice 1 — Comparer deux valeurs

Pour chaque paire, indiquez :

* la valeur la plus petite ;
* la valeur la plus grande ;
* la valeur qui doit venir en premier dans l'ordre croissant.

| Valeur A | Valeur B | Plus petite | Plus grande | Première en ordre croissant |
| -------: | -------: | ----------: | ----------: | --------------------------: |
|        8 |        3 |             |             |                             |
|        6 |       12 |             |             |                             |
|       15 |        9 |             |             |                             |
|        4 |        4 |             |             |                             |
|       18 |       11 |             |             |                             |

Puis faites le même travail pour l'ordre décroissant.

### 2.2. Exercice 2 — Trouver le minimum

#### Contexte

Un tableau contient plusieurs nombres :

```text id="w0cy6v"
[12, 7, 19, 4, 15]
```

#### Travail à faire

Trouvez :

```text id="y7a7kz"
Minimum :
__________

Position du minimum :
__________
```

Expliquez les comparaisons utilisées.

Complétez le parcours :

```text id="yu9g7t"
Valeur de départ :
__________

Comparaison 1 :
__________

Comparaison 2 :
__________

Comparaison 3 :
__________

Comparaison 4 :
__________
```

### 2.3. Exercice 3 — Trouver la position du minimum

#### Contexte

Utilisez :

```text id="4qg5h1"
[8, 5, 12, 3, 9]
```

Complétez :

| Valeur | Position |
| -----: | -------: |
|      8 |          |
|      5 |          |
|     12 |          |
|      3 |          |
|      9 |          |

Puis répondez :

```text id="b8j5k4"
Minimum :
__________

Position du minimum :
__________
```

### 2.4. Exercice 4 — Rechercher dans une partie du tableau

#### Contexte

On dispose de :

```text id="o1s2z4"
[2, 5, 8, 7, 3, 9]
```

La partie suivante est déjà placée :

```text id="mfz0lm"
[2, 5]
```

La recherche doit commencer après cette partie.

Représentez le tableau :

```text id="x3t9a6"
[________ | __________________]
```

Indiquez :

```text id="ss0xm9"
Position de début de recherche :
__________

Valeur minimum de la partie restante :
__________

Position du minimum :
__________
```

### 2.5. Exercice 5 — Faire un échange

#### Contexte

On dispose de :

```text id="r4s8kg"
[5, 7, 9, 2, 4]
```

On souhaite échanger les valeurs situées aux positions `1` et `3`.

Avant l'échange :

```text id="u3gy3r"
Position 1 :
__________

Position 3 :
__________
```

Construisez l'échange avec une variable temporaire.

Utilisez ce squelette :

```javascript id="m5x7q4"
let nombres = [5, 7, 9, 2, 4];

let temporaire = __________________;

__________________ = __________________;

__________________ = __________________;
```

Après l'échange, notez le tableau :

```text id="11n4lp"
____________________________
```

### 2.6. Exercice 6 — Première étape du tri

#### Contexte

On dispose de :

```text id="l6g2zd"
[7, 3, 9, 2, 5]
```

L'objectif est de réaliser **une seule étape** du tri croissant.

#### Travail à faire

1. Cherchez le minimum.
2. Trouvez sa position.
3. Échangez-le avec la position `0`.

Complétez :

```text id="9q4fzk"
Minimum :
__________

Position :
__________

Position à traiter :
__________

Position échangée :
__________

Tableau final :
____________________________
```

### 2.7. Exercice 7 — Deuxième étape du tri

Partez du tableau obtenu à l'exercice précédent.

Identifiez la partie déjà placée :

```text id="w8u4ts"
[________ | __________________]
```

Indiquez :

```text id="v1r6cd"
Début de la recherche :
__________
```

Cherchez le minimum uniquement dans la partie restante.

Complétez :

```text id="t8j3v7"
Minimum :
__________

Position :
__________
```

Réalisez ensuite l'échange avec la position courante.

Notez le nouveau tableau :

```text id="q8e2wn"
____________________________
```

### 2.8. Exercice 8 — Suivre plusieurs étapes

#### Contexte

Utilisez :

```text id="a4r5sl"
[8, 3, 6, 1, 5]
```

Vous devez réaliser les étapes du futur tri **sans construire encore la boucle complète**.

Complétez :

| Étape | Début de recherche | Minimum | Position | Tableau après échange |
| ----- | -----------------: | ------: | -------: | --------------------- |
| 1     |                    |         |          |                       |
| 2     |                    |         |          |                       |
| 3     |                    |         |          |                       |
| 4     |                    |         |          |                       |

À chaque étape :

```text id="6v51tk"
Chercher
↓
Mémoriser
↓
Échanger
```

### 2.9. Exercice 9 — Identifier la partie restante

Pour chaque tableau, indiquez la partie déjà placée et la partie restante.

#### Situation A

```text id="u6a4j8"
[2 | 7, 5, 9, 3]
```

#### Situation B

```text id="5y4wqk"
[2, 3, 5 | 9, 7]
```

#### Situation C

```text id="ps3k06"
[1, 2, 3, 4 | 8]
```

Complétez :

| Situation | Partie placée | Partie restante |
| --------- | ------------- | --------------- |
| A         |               |                 |
| B         |               |                 |
| C         |               |                 |

### 2.10. Exercice 10 — Préparer une étape de tri

#### Contexte

Le tableau est :

```text id="h7w3zx"
[1, 4, 8, 6, 3]
```

La partie :

```text id="b7v1qz"
[1, 4]
```

est déjà placée.

Vous devez préparer l'étape suivante.

Complétez :

```text id="7n3o4r"
Début de recherche :
__________

Partie à parcourir :
________________

Minimum :
__________

Position du minimum :
__________

Position courante :
__________

Valeurs à échanger :
__________
```

### 2.11. Exercice 11 — Construire une petite fonction de recherche

Vous allez maintenant utiliser JavaScript pour automatiser uniquement la recherche du minimum.

Complétez la fonction :

```javascript id="v1m8d6"
function trouverPositionMinimum(nombres, debut) {
    let positionMinimum = __________;

    for (let i = __________; i < __________; i++) {
        if (nombres[i] < nombres[__________________]) {
            positionMinimum = __________;
        }
    }

    return __________________;
}
```

Testez avec :

```javascript id="k2r5ac"
let nombres = [2, 5, 9, 7, 3];

let position = trouverPositionMinimum(nombres, 2);

console.log(position);
```

Votre fonction doit rechercher le minimum uniquement à partir de l'index fourni.

### 2.12. Exercice 12 — Tester la fonction

Utilisez plusieurs tableaux.

#### Test A

```javascript id="v7p4s2"
let nombres = [7, 3, 9, 2, 5];
```

Appelez la fonction avec :

```text id="3s6d1x"
debut = 0
```

#### Test B

```javascript id="e5c3z8"
let nombres = [2, 3, 9, 7, 5];
```

Appelez la fonction avec :

```text id="z9x4p1"
debut = 2
```

#### Test C

```javascript id="w6k2mc"
let nombres = [1, 4, 6, 8, 3];
```

Appelez la fonction avec :

```text id="a5z7n1"
debut = 2
```

Pour chaque test, vérifiez que la fonction ne recherche pas avant la position `debut`.

### 2.13. Exercice de synthèse

Utilisez :

```javascript id="m8r3q5"
let nombres = [10, 4, 8, 2, 6];
```

Votre travail doit rester limité aux opérations préparatoires.

Vous devez :

1. rechercher le minimum du tableau ;
2. trouver sa position ;
3. préparer l'échange avec la position `0` ;
4. effectuer l'échange ;
5. rechercher le minimum de la partie restante ;
6. préparer l'échange suivant ;
7. continuer manuellement jusqu'à obtenir l'ordre croissant.

Ne créez pas encore la boucle complète du tri par sélection.

**Travail à faire :**

S'entraîner à réaliser les opérations nécessaires au tri avant leur automatisation complète.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant :

* les réponses aux exercices ;
* les étapes de recherche ;
* les positions des minimums ;
* les tableaux avant et après les échanges ;
* le code de la fonction `trouverPositionMinimum()` ;
* les tests réalisés.

**Résultat attendu :**

Vous devez savoir représenter une étape de tri sous cette forme :

```text id="d4q1hz"
Position courante
↓
Partie restante
↓
Minimum
↓
Position du minimum
↓
Échange
↓
Nouvelle collection
```

Pour une collection telle que :

```text id="q1d8g5"
[7, 3, 9, 2, 5]
```

vous devez être capable de déterminer les informations nécessaires à la première étape puis de poursuivre avec la partie restante.

**Critère de réussite :**

Vous avez réussi lorsque vous êtes capable de :

* comparer des valeurs ;
* trouver un minimum ;
* trouver sa position ;
* limiter une recherche à une partie du tableau ;
* échanger deux éléments ;
* suivre plusieurs étapes manuelles ;
* utiliser une fonction pour rechercher une position de minimum ;
* expliquer chaque étape réalisée.

## Bilan

**Vous avez entraîné les opérations nécessaires au tri :**

```text id="c4x6m9"
Comparer
↓
Chercher le minimum
↓
Trouver sa position
↓
Échanger
↓
Passer à la partie restante
```

Vous savez maintenant réaliser ces opérations séparément et les enchaîner sur de petites collections.

Vous êtes prêt à automatiser cette répétition dans le prochain tutoriel :

```text id="18v3fy"
Position courante
↓
Chercher le minimum
↓
Échanger
↓
Position suivante
```

Le prochain tutoriel construira alors le **tri par sélection complet**.

## Glossaire

* **Comparaison** : opération permettant de déterminer la relation entre deux valeurs.
* **Minimum** : plus petite valeur d'une collection ou d'une partie de collection.
* **Position** : index d'un élément dans un tableau.
* **Échange** : opération qui inverse les positions de deux éléments.
* **Partie placée** : partie du tableau déjà positionnée correctement.
* **Partie restante** : partie du tableau qui doit encore être traitée.
* **Position courante** : position à laquelle le prochain élément doit être placé.
