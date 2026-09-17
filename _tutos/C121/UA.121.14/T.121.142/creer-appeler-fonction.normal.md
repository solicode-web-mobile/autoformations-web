---
title: "Créer et appeler une fonction"
layout: tuto
slug: "creer-appeler-fonction"
permalink: /tutos/:slug/
tuto_id: "T.121.142"
type: "classique"
version: "normal"
ua: "UA.121.14"
nav_order: 2
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à **créer et appeler des fonctions JavaScript simples**.

Vous allez apprendre à :

* déclarer une fonction ;
* choisir un nom de fonction ;
* écrire les instructions de la fonction ;
* appeler une fonction ;
* appeler une fonction plusieurs fois ;
* créer plusieurs fonctions ;
* organiser un programme avec plusieurs fonctions.

À la fin du tutoriel, vous devez savoir construire ce type de traitement :

```text id="m0g2c1"
Créer une fonction
      ↓
Donner un nom
      ↓
Écrire le traitement
      ↓
Appeler la fonction
      ↓
Exécuter le traitement
```

Les **paramètres** et `return` ne sont pas encore étudiés dans ce tutoriel.

## 2. Prérequis

Vous devez savoir :

* créer un fichier JavaScript ;
* exécuter un fichier avec Node.js ;
* utiliser `console.log()` ;
* comprendre ce qu'est une fonction ;
* distinguer une déclaration et un appel ;
* utiliser des variables ;
* utiliser des conditions ;
* utiliser des boucles.

Exemple :

```javascript id="a7c4m2"
function afficherBonjour() {
  console.log("Bonjour");
}

afficherBonjour();
```

Résultat :

```text id="p2v7n1"
Bonjour
```

## Données de départ

### JavaScript

Créez un fichier :

```text id="f3m8q2"
fonctions.js
```

Commencez avec :

```javascript id="r5k1x9"
function afficherBonjour() {
  console.log("Bonjour");
}

afficherBonjour();
```

Exécutez :

```bash id="h6w3z8"
node fonctions.js
```

Résultat :

```text id="x2c9m4"
Bonjour
```

## Partie 1 — Théorie

### 1.1. La structure d'une fonction

Une fonction simple peut être écrite ainsi :

```javascript id="n8v4q5"
function nomFonction() {
  instructions;
}
```

Elle contient :

```text id="d2k7s1"
function
   ↓
nom de la fonction
   ↓
()
   ↓
{
   instructions
}
```

Exemple :

```javascript id="j4p9x6"
function afficherBonjour() {
  console.log("Bonjour");
}
```

### 1.2. Le mot-clé `function`

Le mot :

```text id="q8w2m5"
function
```

indique que nous sommes en train de déclarer une fonction.

Exemple :

```javascript id="v5c1n7"
function afficherMessage() {
  console.log("Bienvenue");
}
```

JavaScript comprend qu'`afficherMessage` est une fonction.

### 1.3. Le nom de la fonction

Le nom permet d'identifier le traitement.

Exemples :

```text id="f1q8z4"
afficherBonjour
afficherMessage
afficherTitre
verifierAge
afficherNombres
```

Le nom doit correspondre au rôle de la fonction.

Exemple :

```javascript id="m7c2p9"
function afficherTitre() {
  console.log("=== JavaScript ===");
}
```

Le nom `afficherTitre` indique clairement ce que fait la fonction.

### 1.4. Le bloc de la fonction

Les instructions de la fonction sont placées entre :

```text id="g3v6x2"
{
}
```

Exemple :

```javascript id="k9r4m1"
function afficherMessage() {
  console.log("Bonjour");
  console.log("Bienvenue");
}
```

Les deux instructions appartiennent à la fonction.

### 1.5. Déclarer une fonction

Déclarer une fonction signifie la créer.

Exemple :

```javascript id="t5p8q3"
function afficherBonjour() {
  console.log("Bonjour");
}
```

À ce moment-là, JavaScript connaît la fonction.

Mais le message n'est pas encore affiché.

La déclaration seule ne lance pas le traitement.

### 1.6. Appeler une fonction

Pour exécuter la fonction, il faut l'appeler :

```javascript id="u2x7n5"
afficherBonjour();
```

Programme complet :

```javascript id="s4m8q1"
function afficherBonjour() {
  console.log("Bonjour");
}

afficherBonjour();
```

Résultat :

```text id="w8c3p6"
Bonjour
```

### 1.7. Déclaration et appel

Il faut distinguer :

```javascript id="r6q1y8"
function afficherBonjour() {
  console.log("Bonjour");
}
```

de :

```javascript id="b3m7x2"
afficherBonjour();
```

La première partie **déclare** la fonction.

La deuxième partie **appelle** la fonction.

On peut retenir :

```text id="v9k2c5"
Déclaration
   ↓
La fonction est créée
   ↓
Appel
   ↓
Le traitement est exécuté
```

### 1.8. Appeler une fonction plusieurs fois

Une fonction peut être appelée plusieurs fois.

Exemple :

```javascript id="p4x8n1"
function afficherBonjour() {
  console.log("Bonjour");
}

afficherBonjour();
afficherBonjour();
afficherBonjour();
```

Résultat :

```text id="g7m3q9"
Bonjour
Bonjour
Bonjour
```

Le traitement n'a été écrit qu'une seule fois.

### 1.9. Pourquoi réutiliser une fonction ?

Sans fonction :

```javascript id="y5c8m2"
console.log("Bonjour");
console.log("Bonjour");
console.log("Bonjour");
```

Avec une fonction :

```javascript id="e2n7v4"
function afficherBonjour() {
  console.log("Bonjour");
}

afficherBonjour();
afficherBonjour();
afficherBonjour();
```

La fonction permet donc de séparer :

```text id="m1q9x6"
définir le traitement
```

et :

```text id="z4v7c2"
utiliser le traitement
```

### 1.10. Une fonction peut contenir plusieurs instructions

Exemple :

```javascript id="a8m3q7"
function afficherInformations() {
  console.log("Nom : Madani Ali");
  console.log("Niveau : N1");
  console.log("Langage : JavaScript");
}
```

Appel :

```javascript id="k2x5p9"
afficherInformations();
```

Résultat :

```text id="j7c1m4"
Nom : Madani Ali
Niveau : N1
Langage : JavaScript
```

La fonction représente ici un traitement complet :

```text id="r8n2v5"
Afficher les informations
```

### 1.11. Créer plusieurs fonctions

Un programme peut contenir plusieurs fonctions.

Exemple :

```javascript id="q6x1m9"
function afficherTitre() {
  console.log("=== Programme JavaScript ===");
}

function afficherMessage() {
  console.log("Bienvenue Madani Ali");
}

function afficherFin() {
  console.log("=== Fin ===");
}
```

Puis :

```javascript id="v3p8c2"
afficherTitre();
afficherMessage();
afficherFin();
```

Résultat :

```text id="s5m7x1"
=== Programme JavaScript ===
Bienvenue Madani Ali
=== Fin ===
```

Chaque fonction a un rôle précis.

### 1.12. L'ordre des appels

L'ordre des appels détermine l'ordre d'exécution.

Exemple :

```javascript id="n4q7z2"
function afficherA() {
  console.log("A");
}

function afficherB() {
  console.log("B");
}

afficherA();
afficherB();
```

Résultat :

```text id="c1m8v5"
A
B
```

Si l'ordre change :

```javascript id="y6p3k9"
afficherB();
afficherA();
```

Résultat :

```text id="f2x7n4"
B
A
```

L'ordre d'appel est donc important.

### 1.13. Une fonction peut contenir une condition

Les fonctions peuvent utiliser les notions déjà apprises.

Exemple :

```javascript id="h8q2m6"
function verifierAge() {
  let age = 20;

  if (age >= 18) {
    console.log("Majeur");
  } else {
    console.log("Mineur");
  }
}

verifierAge();
```

La fonction regroupe ici un traitement conditionnel.

### 1.14. Une fonction peut contenir une boucle

Exemple :

```javascript id="c5n1r8"
function afficherNombres() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

afficherNombres();
```

Résultat :

```text id="w7m4q2"
1
2
3
4
5
```

La fonction permet de donner un nom au traitement :

```text id="p9c3x6"
afficherNombres
```

La boucle permet de répéter les instructions.

### 1.15. Une fonction peut être appelée dans une boucle

On peut aussi placer l'appel d'une fonction dans une boucle.

Exemple :

```javascript id="r2m8v5"
function afficherBonjour() {
  console.log("Bonjour");
}

for (let i = 1; i <= 3; i++) {
  afficherBonjour();
}
```

Résultat :

```text id="k6q1n9"
Bonjour
Bonjour
Bonjour
```

On obtient :

```text id="z3x7p4"
fonction → définit l'action
boucle   → contrôle la répétition
```

### 1.16. Une fonction doit avoir un rôle clair

Une fonction doit représenter un traitement identifiable.

Bon exemple :

```javascript id="w5m2q8"
function afficherTitre() {
  console.log("=== JavaScript ===");
}
```

Le rôle est clair :

```text id="a9v3x6"
afficherTitre
```

Un nom trop vague est moins utile :

```javascript id="u4p7n1"
function faireChose() {
  console.log("=== JavaScript ===");
}
```

Le nom `faireChose` ne donne pas suffisamment d'information.

### 1.17. Une fonction peut être courte

Une fonction simple n'a pas besoin de beaucoup d'instructions.

Exemple :

```javascript id="m8q2c5"
function afficherBonjour() {
  console.log("Bonjour");
}
```

C'est une vraie fonction utile.

Une fonction n'est pas obligatoirement longue.

### 1.18. Une fonction peut être réutilisée dans plusieurs endroits

Exemple :

```javascript id="x6n3r8"
function afficherTitre() {
  console.log("=== JavaScript ===");
}

afficherTitre();

console.log("Cours");

afficherTitre();
```

La même fonction est réutilisée à deux endroits.

Résultat :

```text id="q4m7z1"
=== JavaScript ===
Cours
=== JavaScript ===
```

### 1.19. Limites de ce tutoriel

À ce stade, les fonctions restent simples.

Nous n'utilisons pas encore :

```text id="c8p1y5"
paramètres
```

ni :

```text id="m3q7x2"
return
```

Le prochain apprentissage portera sur les **données transmises à une fonction** et sur les **résultats retournés par une fonction**.

### 1.20. À retenir

* `function` permet de déclarer une fonction.
* Le nom identifie le traitement.
* Les instructions sont placées entre `{` et `}`.
* Une déclaration ne lance pas la fonction.
* L'appel exécute le traitement.
* Une fonction peut être appelée plusieurs fois.
* Un programme peut contenir plusieurs fonctions.
* L'ordre des appels détermine l'ordre d'exécution.
* Une fonction peut contenir une condition ou une boucle.
* Une fonction doit avoir un rôle clair.

## Partie 2 — Pratique

### 2.1. Créer une fonction simple

Créez :

```javascript id="r5v8m2"
function afficherBonjour() {
  console.log("Bonjour");
}
```

Puis appelez-la :

```javascript id="x2q7n4"
afficherBonjour();
```

Résultat attendu :

```text id="p6m3c9"
Bonjour
```

### 2.2. Appeler une fonction plusieurs fois

Modifiez le programme :

```javascript id="k8n1v5"
function afficherBonjour() {
  console.log("Bonjour");
}

afficherBonjour();
afficherBonjour();
afficherBonjour();
```

Résultat :

```text id="z4m7q2"
Bonjour
Bonjour
Bonjour
```

### 2.3. Créer une fonction avec plusieurs instructions

Créez :

```javascript id="c9x2r6"
function afficherInformations() {
  console.log("Nom : Madani Ali");
  console.log("Niveau : N1");
  console.log("Langage : JavaScript");
}

afficherInformations();
```

Résultat attendu :

```text id="j5p8m3"
Nom : Madani Ali
Niveau : N1
Langage : JavaScript
```

### 2.4. Créer plusieurs fonctions

Créez :

```javascript id="v7q1n5"
function afficherTitre() {
  console.log("=== JavaScript ===");
}

function afficherMessage() {
  console.log("Bienvenue Madani Ali");
}

function afficherFin() {
  console.log("=== Fin ===");
}
```

Appelez-les dans cet ordre :

```javascript id="x3m8c2"
afficherTitre();
afficherMessage();
afficherFin();
```

Résultat attendu :

```text id="q6p4z9"
=== JavaScript ===
Bienvenue Madani Ali
=== Fin ===
```

### 2.5. Modifier l'ordre des appels

Changez l'ordre :

```javascript id="a5n7r1"
afficherFin();
afficherTitre();
afficherMessage();
```

Observez le nouveau résultat.

Expliquez pourquoi le résultat change.

### 2.6. Créer une fonction avec une condition

Créez :

```javascript id="f8m2q4"
function verifierNote() {
  let note = 14;

  if (note >= 10) {
    console.log("Validé");
  } else {
    console.log("Non validé");
  }
}

verifierNote();
```

Résultat attendu :

```text id="b3x9v5"
Validé
```

Modifiez ensuite :

```javascript id="w6q1m8"
let note = 8;
```

Résultat attendu :

```text id="n4p7c2"
Non validé
```

### 2.7. Créer une fonction avec une boucle

Créez :

```javascript id="y2m5r9"
function afficherNombres() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

afficherNombres();
```

Résultat :

```text id="c8q3x6"
1
2
3
4
5
```

### 2.8. Appeler une fonction dans une boucle

Créez :

```javascript id="p7n2v4"
function afficherMessage() {
  console.log("Bonjour Madani Ali");
}

for (let i = 1; i <= 3; i++) {
  afficherMessage();
}
```

Résultat :

```text id="m9c5q1"
Bonjour Madani Ali
Bonjour Madani Ali
Bonjour Madani Ali
```

### 2.9. Exercice — Fonction d'affichage

Créez une fonction appelée :

```text id="q4x8n2"
afficherTitre
```

Elle doit afficher :

```text id="v5m1c7"
=== Mon programme ===
```

Appelez-la deux fois.

### 2.10. Exercice — Trois fonctions

Créez :

```text id="z7p3r6"
afficherDebut()
afficherContenu()
afficherFin()
```

Résultat attendu :

```text id="h2m8q5"
Début du programme
Contenu du programme
Fin du programme
```

Chaque message doit être produit par sa propre fonction.

### 2.11. Exercice — Fonction de comptage

Créez une fonction :

```text id="k3n6v9"
afficherNombres
```

Elle doit afficher les nombres :

```text id="f8q2m5"
1
2
3
4
5
6
7
8
9
10
```

Appelez ensuite la fonction.

### 2.12. Exercice — Fonction de vérification

Créez une fonction appelée :

```text id="r6m1x8"
verifierNombre
```

Dans la fonction, utilisez :

```javascript id="c4p9n2"
let nombre = 12;
```

Le programme doit afficher :

```text id="w7q3m5"
Positif
```

si le nombre est supérieur ou égal à `0`.

Sinon :

```text id="n2v8c6"
Négatif
```

### 2.13. Exercice — Organiser un petit programme

Créez quatre fonctions :

```text id="p5r9x2"
afficherTitre()
afficherNom()
afficherLangage()
afficherFin()
```

Le programme doit afficher :

```text id="m8q4c1"
====================
Mon programme
====================
Nom : Madani Ali
Langage : JavaScript
====================
Fin
====================
```

Appelez les fonctions dans l'ordre.

### 2.14. Travail à faire

Construisez un petit programme organisé avec les fonctions :

```text id="z3n7v5"
afficherTitre()
afficherInformations()
afficherNombres()
afficherFin()
```

La fonction `afficherInformations()` doit afficher :

```text id="x6m2q8"
Nom : Madani Ali
Niveau : N1
Langage : JavaScript
```

La fonction `afficherNombres()` doit afficher les nombres de `1` à `5`.

Le programme final doit produire :

```text id="k4p8r1"
====================
Mon programme
====================
Nom : Madani Ali
Niveau : N1
Langage : JavaScript
1
2
3
4
5
====================
Fin du programme
====================
```

### Livrable

Créez un document Markdown ou un Google Doc contenant :

* le code JavaScript ;
* la liste des fonctions ;
* le rôle de chaque fonction ;
* le résultat obtenu dans la console.

### Critère de réussite

Le programme :

* contient les quatre fonctions demandées ;
* donne un rôle clair à chaque fonction ;
* appelle les fonctions dans le bon ordre ;
* utilise correctement une boucle dans `afficherNombres()` ;
* produit le résultat attendu ;
* ne nécessite pas encore de paramètres ;
* n'utilise pas `return`.

### Résultat attendu

Le programme doit produire :

```text id="t2q7m4"
====================
Mon programme
====================
Nom : Madani Ali
Niveau : N1
Langage : JavaScript
1
2
3
4
5
====================
Fin du programme
====================
```

## Bilan

**Vous avez appris :**

* à déclarer une fonction ;
* à choisir un nom adapté ;
* à écrire le bloc d'instructions ;
* à appeler une fonction ;
* à appeler une fonction plusieurs fois ;
* à créer plusieurs fonctions ;
* à organiser les appels ;
* à utiliser une fonction avec une condition ;
* à utiliser une fonction avec une boucle.

**Vous savez maintenant :**

```text id="v8m2q5"
Déclarer
   ↓
Nommer
   ↓
Écrire le traitement
   ↓
Appeler
   ↓
Réutiliser
```

Vous avez maintenant les bases nécessaires pour rendre les fonctions **plus générales et réutilisables avec des données différentes**.

Le prochain tutoriel introduira les **paramètres, les arguments et `return`**.

## Glossaire

* **Fonction** : bloc d'instructions regroupées sous un nom.
* **Déclaration** : création d'une fonction avec `function`.
* **Appel** : instruction qui exécute une fonction.
* **Instruction** : action réalisée par le programme.
* **Bloc** : ensemble d'instructions placées entre `{` et `}`.
* **Réutilisation** : utilisation plusieurs fois du même traitement.
* **Paramètre** : donnée qu'une fonction peut recevoir ; cette notion sera étudiée ensuite.
* **Argument** : valeur donnée à un paramètre lors de l'appel ; cette notion sera étudiée ensuite.
* **`return`** : instruction qui permet à une fonction de retourner une valeur ; cette notion sera étudiée ensuite.
