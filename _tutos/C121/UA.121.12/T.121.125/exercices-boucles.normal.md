---

title: "Exercices sur les boucles"
layout: tuto
slug: "exercices-boucles"
permalink: /tutos/:slug/
tuto_id: "T.121.125"
type: "classique"
version: "normal"
ua: "UA.121.12"
nav_order: 5
data_js: |
let debut = 1;
let fin = 10;
-------------

## 1. Objectif

Dans ce tutoriel, vous allez vous entraîner à utiliser les **boucles** pour résoudre de petits problèmes.

Vous allez réutiliser :

* `for` ;
* `while` ;
* le compteur ;
* la condition d'arrêt ;
* l'accumulateur ;
* les conditions dans une boucle.

Vous allez progresser de cette manière :

```text
Répéter
   ↓
Compter
   ↓
Calculer
   ↓
Sélectionner
   ↓
Combiner boucle et condition
```

Aucune boucle imbriquée n'est nécessaire dans ce tutoriel.

## 2. Prérequis

Vous devez savoir :

* déclarer une variable ;
* utiliser `console.log()` ;
* utiliser `if` ;
* comprendre une expression booléenne ;
* construire une boucle `for` ;
* construire une boucle `while` ;
* utiliser un compteur ;
* comprendre une condition d'arrêt.

Exemple :

```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```

Résultat :

```text
1
2
3
4
5
```

## Données de départ

### JavaScript

Créez un fichier :

```text
exercices-boucles.js
```

Commencez avec :

```javascript
let debut = 1;
let fin = 10;

console.log(debut);
console.log(fin);
```

Ces variables seront utilisées dans plusieurs exercices.

## Partie 1 — Théorie

### 1.1. Une boucle répète une action

Une boucle permet d'exécuter plusieurs fois un même traitement.

Exemple :

```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log("Bonjour");
}
```

Le message est affiché cinq fois.

Le nombre de répétitions dépend du compteur.

### 1.2. Le compteur contrôle la répétition

Exemple :

```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```

Le compteur prend successivement les valeurs :

```text
1
2
3
4
5
```

On peut donc utiliser le compteur pour :

* afficher une valeur ;
* compter ;
* calculer ;
* contrôler une condition.

### 1.3. L'accumulateur

Un **accumulateur** est une variable qui conserve progressivement un résultat.

Exemple :

```javascript
let somme = 0;

somme = somme + 1;
somme = somme + 2;
somme = somme + 3;
```

À la fin :

```text
somme = 6
```

Avec une boucle :

```javascript
let somme = 0;

for (let nombre = 1; nombre <= 3; nombre++) {
    somme = somme + nombre;
}

console.log(somme);
```

Résultat :

```text
6
```

Le principe est :

```text
Résultat initial
      ↓
Ajouter une valeur
      ↓
Nouveau résultat
      ↓
Ajouter une autre valeur
      ↓
Nouveau résultat
```

### 1.4. Une boucle peut sélectionner certaines valeurs

Une boucle peut parcourir plusieurs valeurs et utiliser une condition.

Exemple :

```javascript
for (let nombre = 1; nombre <= 10; nombre++) {
    if (nombre % 2 === 0) {
        console.log(nombre);
    }
}
```

Résultat :

```text
2
4
6
8
10
```

La boucle parcourt toutes les valeurs.

La condition sélectionne seulement les valeurs paires.

### 1.5. Méthode pour résoudre un exercice

Pour chaque exercice :

```text
1. Lire le problème.
       ↓
2. Identifier la répétition.
       ↓
3. Identifier le compteur.
       ↓
4. Définir la condition d'arrêt.
       ↓
5. Identifier le traitement à répéter.
       ↓
6. Tester plusieurs valeurs.
```

Pour un calcul :

```text
Donnée
  ↓
Initialiser le résultat
  ↓
Répéter
  ↓
Mettre à jour le résultat
  ↓
Afficher
```

## Partie 2 — Pratique

### 2.1. Exercice 1 — Afficher les nombres de 1 à 10

#### Contexte

Vous devez afficher tous les nombres de `1` à `10`.

#### Travail à faire

Construisez une boucle qui produit :

```text
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

Utilisez `for`.

#### Test

Modifiez ensuite la limite pour afficher les nombres de `1` à `20`.

#### Critère de réussite

Tous les nombres sont affichés dans le bon ordre.

---

### 2.2. Exercice 2 — Afficher les nombres de 10 à 1

#### Contexte

Vous devez effectuer un compte à rebours.

#### Travail à faire

Affichez :

```text
10
9
8
7
6
5
4
3
2
1
```

Le compteur doit diminuer.

#### Question

Quelle instruction permet de diminuer le compteur de `1` ?

---

### 2.3. Exercice 3 — Afficher un message plusieurs fois

#### Contexte

Madani Ali doit afficher un message cinq fois.

Le message est :

```text
Bonjour Madani Ali
```

#### Travail à faire

Construisez une boucle qui affiche le message exactement cinq fois.

Puis modifiez le programme pour l'afficher dix fois.

#### Critère de réussite

Le nombre d'affichages correspond au nombre demandé.

---

### 2.4. Exercice 4 — Utiliser `while`

#### Contexte

Vous devez afficher les nombres de `1` à `5`.

#### Travail à faire

Utilisez `while`.

Résultat attendu :

```text
1
2
3
4
5
```

Le traitement doit contenir :

* une valeur initiale ;
* une condition ;
* une évolution du compteur.

#### Question

Pourquoi la valeur du compteur doit-elle évoluer dans la boucle ?

---

### 2.5. Exercice 5 — Afficher les nombres pairs

#### Contexte

Vous devez parcourir les nombres de `1` à `20`.

Vous devez afficher uniquement les nombres pairs.

#### Travail à faire

Utilisez :

* une boucle ;
* une condition.

Résultat attendu :

```text
2
4
6
8
10
12
14
16
18
20
```

#### Critère de réussite

Aucun nombre impair ne doit être affiché.

---

### 2.6. Exercice 6 — Afficher les nombres impairs

Reprenez l'exercice précédent.

Affichez seulement les nombres impairs de `1` à `20`.

Résultat attendu :

```text
1
3
5
7
9
11
13
15
17
19
```

Modifiez uniquement la règle de sélection.

---

### 2.7. Exercice 7 — Calculer une somme

#### Contexte

Vous devez calculer :

```text
1 + 2 + 3 + 4 + 5
```

#### Travail à faire

Utilisez un accumulateur.

Le résultat attendu est :

```text
15
```

Commencez avec :

```javascript
let somme = 0;
```

Puis utilisez une boucle.

### 2.8. Exercice 8 — Calculer la somme de 1 à 10

#### Travail à faire

Calculez :

```text
1 + 2 + 3 + ... + 10
```

Résultat attendu :

```text
55
```

Votre programme doit utiliser :

* une boucle ;
* un accumulateur.

#### Question

Pourquoi l'accumulateur doit-il commencer à `0` dans cet exercice ?

---

### 2.9. Exercice 9 — Calculer la somme des nombres pairs

#### Contexte

Vous devez parcourir les nombres de `1` à `20`.

Vous devez additionner uniquement les nombres pairs.

```text
2 + 4 + 6 + ... + 20
```

#### Résultat attendu

```text
110
```

#### Travail à faire

Utilisez :

```text
Boucle
   ↓
Condition
   ↓
Si le nombre est pair
   ↓
Ajouter au total
```

---

### 2.10. Exercice 10 — Compter les nombres pairs

#### Contexte

Vous devez compter combien de nombres pairs existent entre `1` et `20`.

#### Travail à faire

Ne calculez pas leur somme.

Comptez uniquement le nombre de valeurs paires.

Résultat attendu :

```text
10
```

Utilisez un compteur différent du compteur de la boucle.

Exemple de logique :

```text
compteur de boucle
       ↓
tester la valeur
       ↓
si elle est paire
       ↓
augmenter le compteur de résultats
```

### 2.11. Exercice 11 — Compter les nombres supérieurs à une valeur

#### Contexte

Vous devez parcourir les nombres de `1` à `20`.

Comptez combien de nombres sont supérieurs à `12`.

#### Travail à faire

Construisez le traitement.

Résultat attendu :

```text
8
```

Les valeurs concernées sont :

```text
13
14
15
16
17
18
19
20
```

### 2.12. Exercice 12 — Calculer un produit

#### Contexte

Vous devez calculer :

```text
1 × 2 × 3 × 4 × 5
```

#### Travail à faire

Utilisez une boucle et un accumulateur.

Attention : pour un produit, la valeur initiale n'est pas la même que pour une somme.

Résultat attendu :

```text
120
```

### 2.13. Exercice 13 — Afficher une table de multiplication

#### Contexte

On dispose de :

```javascript
let nombre = 5;
```

Vous devez afficher la table de multiplication de `5` de `1` à `10`.

Résultat attendu :

```text
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```

Utilisez une seule boucle.

### 2.14. Exercice 14 — Analyser une série de valeurs

#### Contexte

On dispose d'une valeur maximale :

```javascript
let maximum = 20;
```

Vous devez parcourir les nombres de `1` à `20`.

Le programme doit :

* compter les nombres pairs ;
* calculer leur somme.

#### Résultat attendu

```text
Nombre de nombres pairs : 10
Somme des nombres pairs : 110
```

Cet exercice combine :

```text
boucle
   +
condition
   +
compteur
   +
accumulateur
```

Il prépare le passage vers les problèmes algorithmiques.

### 2.15. Travail à faire

Choisissez **trois exercices** parmi les exercices 7 à 14.

Pour chaque exercice :

1. identifiez la répétition ;
2. choisissez `for` ou `while` ;
3. définissez la condition d'arrêt ;
4. identifiez le compteur ou l'accumulateur nécessaire ;
5. construisez le programme ;
6. testez le résultat.

Pour au moins un exercice, utilisez `while`.

### Livrable

Créez un document Markdown ou un Google Doc contenant :

```text
Exercice 1
- Problème
- Code
- Test
- Résultat

Exercice 2
- Problème
- Code
- Test
- Résultat

Exercice 3
- Problème
- Code
- Test
- Résultat
```

### Critère de réussite

Pour chaque exercice :

* la boucle fonctionne correctement ;
* la condition d'arrêt est correcte ;
* le compteur est correctement utilisé ;
* l'accumulateur est correctement initialisé lorsqu'il est nécessaire ;
* le résultat obtenu correspond à la consigne ;
* le programme fonctionne avec Node.js.

### Résultat attendu

À la fin du tutoriel, vous devez savoir construire des traitements comme :

```text
Afficher une série
```

```text
Compter des valeurs
```

```text
Calculer une somme
```

```text
Calculer un produit
```

```text
Sélectionner certaines valeurs
```

Vous devez être capable de combiner :

```text
Boucle
  +
Condition
  +
Compteur
  +
Accumulateur
```

dans un problème simple.

## Bilan

**Vous avez appris :**

* à répéter un traitement avec `for` ;
* à répéter un traitement avec `while` ;
* à utiliser un compteur ;
* à utiliser un accumulateur ;
* à compter des valeurs ;
* à calculer une somme ;
* à calculer un produit ;
* à sélectionner des valeurs avec une condition dans une boucle.

**Vous savez maintenant :**

* reconnaître un problème répétitif ;
* choisir une boucle adaptée ;
* contrôler une répétition ;
* construire un traitement qui accumule un résultat ;
* combiner une boucle et une condition.

Le prochain tutoriel, **T.121.126**, utilisera les notions de conditions et de boucles dans un premier **algorithme élémentaire de synthèse : la construction d'une pyramide d'étoiles**.

## Glossaire

* **Boucle** : structure qui permet de répéter un traitement.
* **Compteur** : variable utilisée pour compter ou contrôler les répétitions.
* **Accumulateur** : variable qui conserve progressivement un résultat.
* **Itération** : une exécution d'une boucle.
* **Condition d'arrêt** : règle qui indique quand la boucle doit s'arrêter.
* **Sélection** : choix de certaines valeurs selon une condition.
* **Somme** : résultat obtenu en additionnant plusieurs valeurs.
* **Produit** : résultat obtenu en multipliant plusieurs valeurs.
