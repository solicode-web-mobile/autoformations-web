---
title: "Comprendre les fonctions"
layout: tuto
slug: "comprendre-fonctions"
permalink: /tutos/:slug/
tuto_id: "T.121.141"
type: "classique"
version: "normal"
ua: "UA.121.14"
nav_order: 1
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez découvrir les **fonctions JavaScript**.

Vous allez apprendre à :

* comprendre le rôle d'une fonction ;
* reconnaître un traitement ;
* regrouper plusieurs instructions dans une fonction ;
* donner un nom à une fonction ;
* appeler une fonction ;
* exécuter plusieurs fois le même traitement.

À la fin du tutoriel, vous devez comprendre cette idée :

```text id="r7x3qp"
Traitement
    ↓
Fonction
    ↓
Appel
    ↓
Exécution
```

Dans ce tutoriel, les fonctions sont simples.

Les **paramètres** et la valeur de retour avec `return` seront étudiés plus tard.

## 2. Prérequis

Vous devez savoir :

* créer un fichier JavaScript ;
* exécuter un fichier avec Node.js ;
* déclarer une variable ;
* utiliser `console.log()` ;
* utiliser une condition ;
* utiliser une boucle ;
* construire un petit traitement.

Vous devez notamment comprendre qu'un programme peut être organisé en plusieurs instructions.

Exemple :

```javascript id="w2m8kn"
let age = 20;

if (age >= 18) {
    console.log("Majeur");
}
```

## Données de départ

### JavaScript

Créez un fichier :

```text id="y6q5cr"
fonctions.js
```

Ajoutez :

```javascript id="d7r1lx"
console.log("Bonjour Madani Ali");
```

Exécutez :

```bash id="j2g4qv"
node fonctions.js
```

Résultat :

```text id="6q05dw"
Bonjour Madani Ali
```

Ce traitement est simple.

Nous allons maintenant apprendre à lui donner un nom pour pouvoir le réutiliser.

## Partie 1 — Théorie

### 1.1. Un programme contient des traitements

Un programme réalise des actions.

Exemple :

```javascript id="8p3m1n"
console.log("Bonjour Madani Ali");
```

Le traitement est :

```text id="h2z8jb"
Afficher un message
```

On peut avoir un autre traitement :

```javascript id="m6b5xq"
console.log("Bienvenue");
```

Puis un autre :

```javascript id="k9r4tp"
console.log("Au revoir");
```

Chaque groupe d'instructions réalise une tâche.

### 1.2. Qu'est-ce qu'une fonction ?

Une **fonction** est un bloc d'instructions regroupées sous un nom.

Elle permet de donner un nom à un traitement.

On peut représenter une fonction ainsi :

```text id="r8v2kf"
Nom de la fonction
       ↓
  Instructions
       ↓
    Traitement
```

Par exemple :

```javascript id="9j7d2s"
function afficherBonjour() {
    console.log("Bonjour");
}
```

Ici :

```text id="q4z6tm"
afficherBonjour
```

est le nom de la fonction.

La fonction contient :

```text id="v5u3sp"
console.log("Bonjour");
```

### 1.3. Déclarer une fonction

Pour créer une fonction, on utilise le mot :

```text id="x3n8ka"
function
```

Structure :

```javascript id="b4c7mj"
function nomFonction() {
    instructions;
}
```

Exemple :

```javascript id="9h2s6v"
function afficherBonjour() {
    console.log("Bonjour");
}
```

Cette écriture **déclare** la fonction.

Elle décrit le traitement.

### 1.4. Une déclaration ne lance pas le traitement

Observez :

```javascript id="n5m2qx"
function afficherBonjour() {
    console.log("Bonjour");
}
```

Si vous exécutez seulement ce programme, aucun message n'est affiché.

Pourquoi ?

Parce que le programme a seulement créé la fonction.

Le traitement n'a pas encore été exécuté.

On distingue donc :

```text id="b1m5vw"
Créer la fonction
       ↓
Appeler la fonction
       ↓
Exécuter le traitement
```

### 1.5. Appeler une fonction

Pour exécuter une fonction, on écrit son nom suivi de parenthèses :

```javascript id="r1q9cz"
afficherBonjour();
```

Exemple complet :

```javascript id="m3f7yt"
function afficherBonjour() {
    console.log("Bonjour");
}

afficherBonjour();
```

Résultat :

```text id="8t2cxb"
Bonjour
```

La ligne :

```javascript id="4w9v1p"
afficherBonjour();
```

est un **appel de fonction**.

### 1.6. Déclaration et appel

Il faut bien distinguer les deux.

Déclaration :

```javascript id="8y2k3c"
function afficherBonjour() {
    console.log("Bonjour");
}
```

Appel :

```javascript id="n6v4s8"
afficherBonjour();
```

On peut représenter :

```text id="u5x3qm"
Déclaration
    ↓
La fonction existe
    ↓
Appel
    ↓
Le traitement s'exécute
```

### 1.7. Une fonction possède un nom

Le nom permet d'identifier le traitement.

Exemple :

```javascript id="m4n8sj"
function afficherBienvenue() {
    console.log("Bienvenue");
}
```

Le nom :

```text id="7f3xqk"
afficherBienvenue
```

indique l'action réalisée.

Un nom de fonction doit être simple et lié à son rôle.

Exemples :

```text id="w2c7la"
afficherBonjour
afficherMessage
calculerSomme
verifierAge
```

Pour ce tutoriel, nous utilisons surtout des fonctions dont le nom commence par une action.

### 1.8. Une fonction peut contenir plusieurs instructions

Une fonction ne contient pas obligatoirement une seule instruction.

Exemple :

```javascript id="6f1p8r"
function afficherInformations() {
    console.log("Nom : Madani Ali");
    console.log("Niveau : Débutant");
    console.log("Module : JavaScript");
}
```

L'appel :

```javascript id="0t7k4n"
afficherInformations();
```

produit :

```text id="6h8q9m"
Nom : Madani Ali
Niveau : Débutant
Module : JavaScript
```

La fonction regroupe donc plusieurs instructions liées au même traitement.

### 1.9. Une fonction permet de réutiliser un traitement

Sans fonction :

```javascript id="q4n8jc"
console.log("Bonjour Madani Ali");
console.log("Bonjour Madani Ali");
console.log("Bonjour Madani Ali");
```

Avec une fonction :

```javascript id="2k6r9v"
function afficherBonjour() {
    console.log("Bonjour Madani Ali");
}

afficherBonjour();
afficherBonjour();
afficherBonjour();
```

La même action est définie une seule fois.

Puis elle est appelée plusieurs fois.

On obtient :

```text id="p3w7dz"
Définir une fois
      ↓
Réutiliser plusieurs fois
```

### 1.10. Une fonction peut être appelée plusieurs fois

Exemple :

```javascript id="s4m8x1"
function afficherBonjour() {
    console.log("Bonjour");
}

afficherBonjour();
afficherBonjour();
afficherBonjour();
```

Résultat :

```text id="k6r2nb"
Bonjour
Bonjour
Bonjour
```

Le traitement est identique à chaque appel.

### 1.11. Une fonction peut être placée avant plusieurs appels

Exemple :

```javascript id="c7m5w2"
function afficherMessage() {
    console.log("Bienvenue dans le programme");
}

afficherMessage();
afficherMessage();
```

Le programme :

1. crée la fonction ;
2. appelle la fonction ;
3. exécute son traitement ;
4. appelle à nouveau la fonction ;
5. exécute à nouveau son traitement.

### 1.12. Fonction et boucle

Les fonctions et les boucles ont des rôles différents.

Une fonction permet de **nommer et réutiliser un traitement**.

Une boucle permet de **répéter un traitement**.

Exemple :

```javascript id="y2r7cf"
function afficherBonjour() {
    console.log("Bonjour");
}

for (let i = 1; i <= 3; i++) {
    afficherBonjour();
}
```

La fonction définit l'action :

```text id="b4j8qm"
afficherBonjour
```

La boucle contrôle le nombre de répétitions :

```text id="v6k2zd"
3 fois
```

On obtient :

```text id="y9m3sa"
Fonction → quel traitement ?
Boucle   → combien de fois ?
```

### 1.13. Une fonction peut contenir une boucle

L'inverse est également possible.

Exemple :

```javascript id="j8c5vf"
function afficherNombres() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
```

Puis :

```javascript id="r4q7mp"
afficherNombres();
```

Résultat :

```text id="9f3knd"
1
2
3
4
5
```

La fonction regroupe ici un traitement contenant une boucle.

### 1.14. Une fonction peut contenir une condition

Exemple :

```javascript id="v6x8nk"
function verifierAge() {
    let age = 20;

    if (age >= 18) {
        console.log("Majeur");
    } else {
        console.log("Mineur");
    }
}
```

Puis :

```javascript id="h2m5qk"
verifierAge();
```

La fonction regroupe donc plusieurs notions déjà connues.

### 1.15. Une fonction isole un traitement

Avant les fonctions, nous pouvons avoir un programme long :

```text id="s9c5hf"
Instructions
Instructions
Instructions
Instructions
Instructions
Instructions
```

Avec plusieurs fonctions :

```text id="z4m8vt"
fonction A
fonction B
fonction C
```

Puis :

```text id="a7q2ps"
Appel A
Appel B
Appel C
```

Le programme devient plus facile à organiser.

### 1.16. Une fonction doit avoir un rôle clair

Une bonne fonction réalise un traitement identifiable.

Exemple :

```javascript id="m1z8xc"
function afficherBonjour() {
    console.log("Bonjour");
}
```

Le rôle est clair :

```text id="e9w4qt"
afficherBonjour
```

Il est préférable d'éviter une fonction qui fait trop de choses différentes.

Exemple moins clair :

```javascript id="x7p3km"
function faireProgramme() {
    console.log("Bonjour");
    console.log("Calcul");
    console.log("Fin");
}
```

Dans les prochains tutoriels, nous apprendrons à construire des fonctions avec des entrées et des résultats.

### 1.17. Ce tutoriel ne traite pas encore les paramètres

Pour le moment, nous utilisons :

```javascript id="c8m2wn"
function afficherBonjour() {
    console.log("Bonjour");
}
```

Nous n'utilisons pas encore :

```javascript id="d3f6qr"
function afficherBonjour(prenom) {
    ...
}
```

Les paramètres seront étudiés dans un prochain tutoriel.

### 1.18. Ce tutoriel ne traite pas encore `return`

Pour le moment, la fonction affiche directement son traitement :

```javascript id="p7x4ls"
function afficherBonjour() {
    console.log("Bonjour");
}
```

Nous n'utilisons pas encore :

```javascript id="j5c8rv"
return ...
```

Le retour d'une valeur sera étudié avec les paramètres.

### 1.19. À retenir

* Une **fonction** regroupe des instructions sous un nom.
* `function` permet de déclarer une fonction.
* La déclaration crée la fonction, mais ne lance pas son traitement.
* Un **appel** exécute la fonction.
* Une fonction peut être appelée plusieurs fois.
* Une fonction peut contenir plusieurs instructions.
* Une fonction peut contenir une condition ou une boucle.
* La fonction permet de réutiliser un traitement.
* Les paramètres et `return` seront étudiés ensuite.

## Partie 2 — Pratique

### 2.1. Créer une première fonction

Créez :

```javascript id="z4j8mc"
function afficherBonjour() {
    console.log("Bonjour");
}
```

Ajoutez ensuite :

```javascript id="q3v7fn"
afficherBonjour();
```

Exécutez le programme.

Résultat attendu :

```text id="x8k4rp"
Bonjour
```

### 2.2. Appeler la fonction plusieurs fois

Modifiez le programme :

```javascript id="m5p9xd"
function afficherBonjour() {
    console.log("Bonjour");
}

afficherBonjour();
afficherBonjour();
afficherBonjour();
```

Résultat attendu :

```text id="s7j2lw"
Bonjour
Bonjour
Bonjour
```

Observez que le traitement n'a été écrit qu'une seule fois.

### 2.3. Créer une fonction pour afficher un message

Créez :

```javascript id="y9k3fp"
function afficherBienvenue() {
    console.log("Bienvenue dans le programme");
}
```

Appelez ensuite la fonction deux fois.

Résultat attendu :

```text id="r2c7vm"
Bienvenue dans le programme
Bienvenue dans le programme
```

### 2.4. Créer une fonction avec plusieurs instructions

Créez :

```javascript id="n5q8bx"
function afficherInformations() {
    console.log("Nom : Madani Ali");
    console.log("Niveau : Débutant");
    console.log("Langage : JavaScript");
}
```

Appelez :

```javascript id="u6m3jt"
afficherInformations();
```

Résultat attendu :

```text id="p9v4ck"
Nom : Madani Ali
Niveau : Débutant
Langage : JavaScript
```

### 2.5. Créer une fonction qui contient une condition

Créez :

```javascript id="g2s7xm"
function verifierAge() {
    let age = 20;

    if (age >= 18) {
        console.log("Majeur");
    } else {
        console.log("Mineur");
    }
}
```

Appelez :

```javascript id="r8f4vq"
verifierAge();
```

Résultat attendu :

```text id="k7m2cs"
Majeur
```

### 2.6. Créer une fonction qui contient une boucle

Créez :

```javascript id="d6x9pt"
function afficherNombres() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
```

Appelez :

```javascript id="w4n7bh"
afficherNombres();
```

Résultat attendu :

```text id="7p3qkm"
1
2
3
4
5
```

### 2.7. Utiliser une fonction dans une boucle

Créez :

```javascript id="c5z8ry"
function afficherBonjour() {
    console.log("Bonjour Madani Ali");
}
```

Puis :

```javascript id="h4m7st"
for (let i = 1; i <= 3; i++) {
    afficherBonjour();
}
```

Résultat attendu :

```text id="2v9xkc"
Bonjour Madani Ali
Bonjour Madani Ali
Bonjour Madani Ali
```

Identifiez les rôles :

```text id="0f4kwp"
fonction → action à réaliser
boucle   → nombre de répétitions
```

### 2.8. Exercice — Créer une fonction d'affichage

Créez une fonction nommée :

```text id="ep2i9m"
afficherTitre
```

Elle doit afficher :

```text id="m7q3xw"
=== JavaScript ===
```

Appelez-la trois fois.

### 2.9. Exercice — Créer deux fonctions

Créez :

```text id="v6k8zn"
afficherDebut()
afficherFin()
```

La première affiche :

```text id="e5p1rq"
Début du programme
```

La deuxième :

```text id="n4w7cs"
Fin du programme
```

Appelez-les dans cet ordre :

```text id="7j2mvp"
Début du programme
Fin du programme
```

### 2.10. Exercice — Organiser un programme

Construisez trois fonctions :

```text id="u8f3ml"
afficherTitre()
afficherMessage()
afficherFin()
```

Elles doivent produire :

```text id="6c4wzy"
=== Mon programme ===
Bienvenue Madani Ali
=== Fin ===
```

Appelez les fonctions dans le bon ordre.

### 2.11. Exercice — Fonction avec une boucle

Créez une fonction :

```text id="h8z2qk"
afficherNombres
```

Elle doit afficher les nombres de `1` à `10`.

Appelez ensuite cette fonction.

### 2.12. Exercice — Fonction et condition

Créez une fonction :

```text id="v3c6yx"
verifierNote
```

Elle doit utiliser une variable :

```javascript id="k7n2qf"
let note = 14;
```

Puis afficher :

```text id="r6z8mw"
Validé
```

si la note est supérieure ou égale à `10`.

Sinon :

```text id="c5p3jt"
Non validé
```

Pour le moment, la fonction travaille avec une valeur définie directement dans son code.

### 2.13. Travail à faire

Construisez un petit programme organisé avec trois fonctions :

```text id="u4q9xs"
afficherTitre()
afficherInformations()
afficherFin()
```

Le programme doit produire :

```text id="8v5m2j"
====================
Mon premier programme
====================
Nom : Madani Ali
Langage : JavaScript
Niveau : N1
====================
Fin du programme
====================
```

Chaque partie doit être produite par une fonction différente.

Appelez ensuite les fonctions dans le bon ordre.

### Livrable

Créez un document Markdown ou un Google Doc contenant :

* le code JavaScript ;
* le nom des trois fonctions ;
* le rôle de chaque fonction ;
* le résultat obtenu dans la console.

### Critère de réussite

Le programme :

* contient trois fonctions ;
* donne un rôle clair à chaque fonction ;
* appelle correctement les trois fonctions ;
* produit le résultat attendu ;
* ne répète pas inutilement les mêmes instructions ;
* n'utilise pas encore de paramètres ou de `return`.

### Résultat attendu

Le programme doit produire :

```text id="m9c4qp"
====================
Mon premier programme
====================
Nom : Madani Ali
Langage : JavaScript
Niveau : N1
====================
Fin du programme
====================
```

## Bilan

**Vous avez appris :**

* ce qu'est une fonction ;
* comment déclarer une fonction ;
* comment donner un nom à une fonction ;
* comment appeler une fonction ;
* comment réutiliser une fonction ;
* comment mettre plusieurs instructions dans une fonction ;
* comment utiliser une condition dans une fonction ;
* comment utiliser une boucle dans une fonction.

**Vous savez maintenant :**

```text id="n4x8sm"
Traitement
    ↓
Fonction
    ↓
Nom
    ↓
Appel
    ↓
Exécution
```

Une fonction permet donc d'**isoler un traitement et de le réutiliser**.

Dans le prochain tutoriel, vous apprendrez à créer des fonctions capables de recevoir des **paramètres** et de retourner un **résultat**.

## Glossaire

* **Fonction** : bloc d'instructions regroupées sous un nom.
* **Déclaration** : création d'une fonction avec `function`.
* **Appel** : instruction qui demande l'exécution d'une fonction.
* **Traitement** : ensemble d'actions réalisées par le programme.
* **Réutilisation** : fait d'utiliser plusieurs fois le même traitement.
* **Bloc** : ensemble d'instructions placées entre `{` et `}`.
* **Paramètre** : donnée reçue par une fonction ; cette notion sera étudiée dans un prochain tutoriel.
* **`return`** : instruction permettant de retourner une valeur ; cette notion sera étudiée dans un prochain tutoriel.
