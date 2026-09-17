---
title: "Construire une pyramide d'étoiles"
layout: tuto
slug: "construire-pyramide-etoiles"
permalink: /tutos/:slug/
tuto_id: "T.121.126"
type: "algorithme"
version: "normal"
ua: "UA.121.12"
nav_order: 6
data_js: ""
---

## 1. Objectif

Construire un **algorithme élémentaire** complet combinant variables, conditions et boucles imbriquées.

L'objectif est d'afficher une pyramide d'étoiles symétrique dans le terminal :
```text
    *
   ***
  *****
 *******
*********
```

## 2. Prérequis

Pour réussir cet exercice de synthèse, vous devez maîtriser :
* La création de variables et `console.log()`.
* La création de conditions `if`.
* L'utilisation de boucles `for`.
* L'**imbrication de boucles** (placer une boucle dans une autre).

## Données de départ

### JavaScript

Créez le fichier `pyramide.js` et préparez cette variable initiale :

```javascript
let hauteur = 5;
console.log("Hauteur :", hauteur);
```

## Partie 1 — Théorie

### 1.1. Observer la pyramide

La pyramide est générée ligne par ligne, de haut en bas, par le terminal. Le programme doit donc construire chaque niveau avant de passer au suivant.

### 1.2. Une ligne contient des espaces et des étoiles

Chaque ligne commence par des espaces (pour centrer) suivis d'étoiles :
* Ligne 1 : 4 espaces, 1 étoile.
* Ligne 2 : 3 espaces, 3 étoiles.
Il faut donc générer les espaces d'abord, puis les étoiles ensuite.

### 1.3. Trouver la règle des espaces

La règle mathématique pour les espaces est : `espaces = hauteur - ligne`.
Exemple : Pour la ligne 3 (sur une hauteur de 5), il faut 2 espaces (`5 - 3`).

### 1.4. Trouver la règle des étoiles

La règle mathématique pour les étoiles est : `étoiles = 2 × ligne - 1`.
Exemple : Pour la ligne 3, il faut 5 étoiles (`2 × 3 - 1`).

### 1.5. Construire une ligne

L'ordre d'action pour une ligne est le suivant :
1. Ajouter les espaces (règle 1).
2. Ajouter les étoiles (règle 2).
3. Afficher la ligne.

### 1.6. Répéter pour toutes les lignes

Une boucle principale va gérer les étages :
```javascript
for (let ligne = 1; ligne <= hauteur; ligne++)
```
À chaque tour, la variable `ligne` indiquera l'étage en cours.

### 1.7. Répéter les espaces

À l'intérieur de la boucle principale, une première boucle imbriquée tournera `hauteur - ligne` fois pour ajouter les espaces.

### 1.8. Répéter les étoiles

À la suite, une deuxième boucle imbriquée tournera `2 × ligne - 1` fois pour ajouter les étoiles.

### 1.9. Ajouter une condition

Il faut protéger le programme avec un test de sécurité `if (hauteur > 0)` au tout début. Si la hauteur demandée est 0 ou négative, le programme affichera une erreur.

### 1.10. L'algorithme complet

Voici la structure de votre programme :
* **Si** `hauteur > 0` :
    * **Boucle** sur les lignes (`ligne = 1` jusqu'à `hauteur`) :
        * **Boucle** pour générer les espaces.
        * **Boucle** pour générer les étoiles.
        * Afficher la ligne finie.
* **Sinon** :
    * Afficher un message d'erreur.

### 1.11. À retenir

L'imbrication de boucles permet de gérer deux dimensions : la boucle principale s'occupe de la hauteur (les lignes) tandis que les sous-boucles gèrent la largeur (les caractères de la ligne).

## Partie 2 — Pratique

### 2.1. Étape 1 — Afficher une étoile

Affichez simplement une étoile `*` avec un `console.log`.

### 2.2. Étape 2 — Afficher plusieurs étoiles

Créez une variable `let ligneTexte = "";`. Ajoutez-lui une étoile (`ligneTexte = ligneTexte + "*";`) à plusieurs reprises, puis affichez-la.

### 2.3. Étape 3 — Utiliser une boucle pour les étoiles

Remplacez l'ajout manuel par une boucle `for` qui tourne 5 fois pour remplir la variable `ligneTexte`.

### 2.4. Étape 4 — Construire un triangle

Entourez le code précédent par une boucle principale (pour les lignes). Modifiez la limite de la boucle d'étoiles pour qu'elle tourne `ligne` fois. Vous obtiendrez un triangle rectangle.

### 2.5. Étape 5 — Construire le nombre d'espaces

Ajoutez une boucle pour les espaces juste avant celle des étoiles. Cette boucle doit tourner `hauteur - ligne` fois et ajouter des caractères `" "`.

### 2.6. Étape 6 — Ajouter les étoiles

Modifiez la boucle des étoiles pour qu'elle respecte la règle mathématique : `(2 * ligne) - 1`.

### 2.7. Étape 7 — Construire une ligne complète

Assurez-vous de bien réinitialiser `let ligneTexte = "";` au début de chaque itération de la boucle principale. Affichez la ligne une fois les espaces et étoiles ajoutés.

### 2.8. Étape 8 — Construire la pyramide complète

Placez l'ensemble de cet algorithme à l'intérieur d'une condition `if (hauteur > 0)`.

### 2.9. Étape 9 — Tester différentes hauteurs

Testez votre code avec les hauteurs 1, 3, et 5. Testez également 0 pour vérifier que le programme est bien sécurisé et ne plante pas.

### 2.10. Étape 10 — Comprendre le traitement

Assurez-vous de comprendre le rôle de chaque boucle (principale, espaces, étoiles) et la logique des formules utilisées pour les limites.

### 2.11. Travail à faire

Rédigez le code complet de la pyramide et configurez-le pour `let hauteur = 7`. Le résultat doit être symétrique.

### Livrable

Préparez un document qui présente :
* Les règles mathématiques utilisées.
* Le code source final en JavaScript.
* Les résultats affichés pour les hauteurs de 3, 5, et 7.

### Critère de réussite

La pyramide est parfaitement alignée, et le programme gère correctement les hauteurs négatives ou nulles.

### Résultat attendu

Pour `hauteur = 5` :
```text
    *
   ***
  *****
 *******
*********
```

Pour `hauteur = 3` :
```text
  *
 ***
*****
```

## Bilan

**Vous avez appris :**
* À analyser un motif et en déduire des règles mathématiques.
* À imbriquer des boucles pour générer un affichage en deux dimensions.
* À structurer un algorithme complet en liant variables, conditions et boucles.

**Vous savez maintenant :**
* Écrire une solution algorithmique complète, une compétence indispensable pour la résolution de problèmes avancés.

## Glossaire

* **Algorithme** : Suite d'instructions logiques permettant de résoudre un problème.
* **Boucle imbriquée** : Une boucle qui est contenue et exécutée à l'intérieur d'une autre boucle.
* **Pyramide** : Exercice fondamental d'algorithmique permettant de pratiquer la logique conditionnelle et répétitive.
