---
title: "Exercices sur les conditions"
layout: tuto
slug: "exercices-conditions"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.124"
type: "classique"
version: "detaille"
ua: "UA.121.12"
nav_order: 4
data_js: ""
---

## 1. Objectif

L'objectif de ce tutoriel est de vous entraîner massivement pour transformer la théorie en pratique. Vous allez résoudre de petits problèmes concrets en utilisant la logique des **conditions**.

C'est l'occasion de réutiliser et de maîtriser pleinement les notions suivantes :
* Les expressions booléennes et les comparaisons (`>`, `<`, `===`).
* Les blocs de décision `if`, `else`, et `else if`.
* Les opérateurs logiques de combinaison `&&` (ET), `||` (OU), et `!` (NON).

Ce tutoriel est pensé comme un atelier de résolution de problèmes progressif.

## 2. Prérequis

Avant de vous lancer dans ces exercices, vous devez être capable de :
* Utiliser des variables pour stocker des données.
* Utiliser `console.log()` pour vérifier vos résultats.
* Écrire des comparaisons simples et construire un bloc conditionnel.
* Attention : aucune notion de boucle n'est nécessaire ni attendue ici ! Concentrez-vous uniquement sur la prise de décision.

## Données de départ

### JavaScript

Préparez votre espace de travail. Créez un nouveau fichier nommé `exercices-conditions.js`.
À l'intérieur de ce fichier, commencez par déclarer ces trois variables qui vous serviront pour les premiers tests :

```javascript
let age = 20;
let note = 14;
let inscrit = true;
```

## Partie 1 — Théorie

### 1.1. Une condition répond à une règle

Dans chaque exercice de programmation, votre tout premier travail (avant même d'écrire une seule ligne de code) consiste à repérer la "règle métier". 
Par exemple, si on vous dit : "Pour réussir, la note doit être au moins de 10", la règle cachée est `note >= 10`. Une fois cette règle identifiée sur le papier, il vous suffit de la glisser à l'intérieur d'un bloc `if` en JavaScript.

### 1.2. Un problème peut avoir deux résultats

C'est la situation la plus courante. Une question qui n'accepte que deux réponses possibles engendre la création de deux chemins distincts dans votre code. On utilise alors la structure binaire `if` (chemin si c'est vrai) et `else` (chemin par défaut si c'est faux).

### 1.3. Un problème peut avoir plusieurs résultats

Lorsque le problème est plus nuancé, on doit traiter plusieurs cas successifs. C'est là qu'intervient la structure en cascade `if`, suivi de `else if` (autant de fois que nécessaire), pour finir éventuellement par un `else` qui gère tous les autres cas restants.

### 1.4. Un problème peut avoir plusieurs règles

Parfois, un résultat dépend de la validation stricte de plusieurs critères simultanés. Par exemple, pour obtenir le statut Premium, il faut être majeur **ET** être un utilisateur actif. Dans ce cas précis, on utilise l'opérateur `&&` pour fusionner les deux règles dans la même parenthèse.

### 1.5. Une règle peut avoir plusieurs possibilités

D'autres fois, la règle est plus souple. L'accès peut être autorisé si la personne possède un billet **OU** si elle fait partie du staff. Il suffit qu'une seule des deux conditions soit vraie. On utilise alors l'opérateur `||` pour offrir cette flexibilité.

### 1.6. Méthode pour résoudre un exercice

Ne vous précipitez jamais sur votre clavier ! Suivez toujours cette méthode pas-à-pas pour chaque exercice :
1. Lisez attentivement l'énoncé du problème.
2. Identifiez quelles sont les variables (les données) dont vous disposez.
3. Repérez les règles (les limites, les cas).
4. Traduisez ces règles en expressions booléennes (avec `>`, `<`, `===`).
5. Choisissez la bonne structure (`if`, ou `if/else`, ou `if/else if`).
6. Testez votre code avec plusieurs valeurs différentes pour vérifier s'il est robuste.

## Partie 2 — Pratique

### 2.1. Exercice 1 — Majeur ou mineur

**Donnée de départ** : `let age = 20;`
**La règle** : La majorité civile est fixée à partir de 18 ans (inclus).
**Travail demandé** : Écrivez un programme qui vérifie l'âge et affiche "Majeur" dans la console si la règle est respectée. Sinon, il doit afficher "Mineur".
**Vos tests obligatoires** : Modifiez manuellement la variable `age` avec les valeurs `15`, `18`, et `25`, puis exécutez le code à chaque fois pour vérifier.

### 2.2. Exercice 2 — Nombre positif ou négatif

**Donnée de départ** : `let nombre = 7;`
**Travail demandé** : Si le nombre est strictement supérieur à 0, affichez "Positif". Dans tous les autres cas, affichez "Négatif ou nul".
**Vos tests obligatoires** : Testez avec les nombres `7`, `-3`, et n'oubliez pas de tester le cas charnière `0`.

### 2.3. Exercice 3 — Pair ou impair

**Donnée de départ** : `let nombre = 8;`
**La règle** : En mathématiques, un nombre est pair si le reste de sa division par 2 est égal à 0. En JavaScript, cela s'écrit `nombre % 2 === 0`.
**Travail demandé** : Utilisez cette expression pour afficher "Pair" si elle est vraie, sinon affichez "Impair".
**Vos tests obligatoires** : Testez avec les valeurs `8`, `11`, `20`, et `7`.

### 2.4. Exercice 4 — Résultat d'un apprenant

**Donnée de départ** : `let note = 12;`
**Les règles** : 
* Si la note est `>= 16`, le résultat est "Très bien".
* Si la note est `>= 10`, le résultat est "Validé".
* Sinon, c'est-à-dire si la note est `< 10`, le résultat est "Non validé".
**Travail demandé** : Traduisez cette cascade de règles en utilisant `if`, `else if` et `else`.
**Vos tests obligatoires** : Testez avec `8`, `10`, `14`, `16`, `20`.
**Question de réflexion** : Pourquoi est-il fondamental, dans votre code, de tester `>= 16` *avant* de tester `>= 10` ? Que se passerait-il si vous inversiez cet ordre ?

### 2.5. Exercice 5 — Maximum de deux valeurs

**Données de départ** : `let a = 12; let b = 8;`
**Travail demandé** : Construisez un programme qui compare ces deux variables et affiche toujours la plus grande des deux.
**Vos tests obligatoires** : Testez avec les couples `(12, 8)`, puis `(5, 13)`, et enfin `(10, 10)`.
**Question de réflexion** : Comment votre code gère-t-il l'égalité ? Faut-il prévoir un cas spécifique ou l'un des chemins existants s'en occupe-t-il correctement ?

### 2.6. Exercice 6 — Accès à un service

**Données de départ** : `let age = 22; let compteActif = true;`
**Les règles** : L'accès est strictement réservé aux personnes ayant au moins 18 ans **ET** dont le compte est actif.
**Travail demandé** : Construisez une seule condition (avec `&&`) qui affiche "Accès autorisé" ou "Accès refusé".
**Vos tests obligatoires** : Testez absolument toutes les combinaisons possibles (vrai/vrai, vrai/faux, faux/vrai, faux/faux) en changeant les variables de départ.

### 2.7. Exercice 7 — Autorisation avec deux possibilités

**Données de départ** : `let membre = false; let invitation = true;`
**Les règles** : L'entrée est permise si la personne est membre VIP **OU** si elle possède une simple invitation.
**Travail demandé** : Construisez le programme en utilisant l'opérateur `||`.
**Vos tests obligatoires** : Testez là encore toutes les combinaisons pour observer à quel point cet opérateur est permissif.

### 2.8. Exercice 8 — Classification d'une température

**Donnée de départ** : `let temperature = 28;`
**Les règles climatiques** : 
* En dessous de 10° (`< 10`), on considère qu'il fait "Froid".
* En dessous de 25° (`< 25`), on considère qu'il fait "Doux".
* À partir de 25° (`>= 25`), on considère qu'il fait "Chaud".
**Travail demandé** : Construisez le programme adéquat. Faites très attention à l'ordre de vos conditions !
**Vos tests obligatoires** : Testez avec les températures `5`, `15`, `24`, `25`, `30`.

### 2.9. Exercice 9 — Formule de décision

**Données de départ** : `let note = 14; let presence = 90;`
**Les règles** : Pour valider son année, l'apprenant doit avoir une note `>= 10` **ET** un taux de présence `>= 80`.
**Travail demandé** : Affichez "Validé" ou "Non validé" selon la situation.
**Vos tests obligatoires** : Testez les quatre situations suivantes (14/90, 14/70, 8/90, 8/70).

### 2.10. Exercice 10 — Petit problème de synthèse

**Donnée de départ** : `let montant = 120;`
**Les règles commerciales** :
* Si le montant de la commande atteint ou dépasse `200` : on offre une réduction de 10 % ainsi que la livraison gratuite.
* Si le montant est compris entre `100` et `199` : on offre seulement la livraison gratuite.
* Si le montant est strictement inférieur à `100` : il n'y a aucune offre, la livraison est payante.
**Travail demandé** : Il s'agit d'un excellent exercice de synthèse. Choisissez le bon ordre pour placer vos conditions (`else if`) afin que la logique soit parfaite.
**Vos tests obligatoires** : Testez avec les montants `80`, `120`, `200`, `250`.

### 2.11. Travail à faire

Pour valider cette session pratique, vous devez choisir **deux exercices** parmi les exercices allant du numéro 5 au numéro 10.
Pour chacun de ces deux exercices sélectionnés, vous allez devoir présenter un travail complet : préciser les variables de départ, identifier les règles métier, fournir le code JavaScript fonctionnel, et lister les résultats de vos tests.

### Livrable

Vous rédigerez un document (au format de votre choix) contenant pour chaque exercice : les données initiales, les règles établies en français, votre code JavaScript propre, les différents tests que vous avez effectués et les résultats obtenus dans la console.

### Critère de réussite

Votre travail sera validé si les conditions sont techniquement correctes, si l'ordre des `if / else if` respecte la logique descendante, et si vous n'avez fait appel à aucune notion superflue (comme les boucles par exemple).

### Résultat attendu

L'objectif pédagogique est que vous sachiez analyser un problème exprimé en langage naturel (français), extraire ses règles, et le modéliser en un traitement conditionnel informatique impeccable grâce à `if/else`, `&&` et `||`.

## Bilan

**Vous avez appris :**
* À modéliser un problème concret de la vie réelle sous forme de conditions informatiques.
* À utiliser et combiner plusieurs règles au sein d'une même décision logique.

**Vous savez maintenant :**
* Traduire une logique verbale en expressions booléennes et bâtir l'architecture conditionnelle qui saura y répondre correctement, peu importe la valeur des données qui entrent dans le programme.

## Glossaire

* **Condition** / **Cas** : Une règle métier spécifique qui agit comme un aiguillage. Elle permet d'orienter le flux d'exécution du programme vers un chemin plutôt qu'un autre.
* **Test** : C'est l'action cruciale de valider son programme en l'exécutant plusieurs fois avec des valeurs spécifiques (souvent des valeurs extrêmes ou "charnières") pour s'assurer qu'aucun bug n'a été introduit.
