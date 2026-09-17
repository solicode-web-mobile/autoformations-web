---
title: "Exercices sur les boucles"
layout: tuto
slug: "exercices-boucles"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.125"
type: "classique"
version: "detaille"
ua: "UA.121.12"
nav_order: 5
data_js: ""
---

## 1. Objectif

Ce tutoriel est un atelier d'entraînement entièrement consacré aux **boucles**. L'objectif est de vous donner l'opportunité de résoudre des problèmes variés pour que la syntaxe et la logique des boucles deviennent un réflexe naturel.

Vous allez réutiliser et approfondir les notions suivantes de manière concrète :
* Les boucles `for` (avec un nombre de tours connu) et `while` (avec un nombre de tours inconnu).
* Le rôle indispensable du **compteur**.
* L'utilisation de l'**accumulateur** pour additionner ou multiplier des résultats au fur et à mesure.
* La **condition d'arrêt** qui protège votre programme de la boucle infinie.
* L'utilisation de **conditions** (`if`) à l'intérieur même d'une boucle pour filtrer des données.

## 2. Prérequis

Pour que cet entraînement soit efficace, vous devez être capable de :
* Utiliser des variables, `console.log()`, et des blocs `if`.
* Comprendre et savoir écrire sans erreur la structure de base d'une boucle `for` et d'une boucle `while`.
* Savoir ce que signifient les opérateurs comme `++` (ajouter 1) ou `--` (retirer 1).

## Données de départ

### JavaScript

Préparez votre espace de travail. Créez un nouveau fichier nommé `exercices-boucles.js` et insérez le code de base ci-dessous :

```javascript
let debut = 1;
let fin = 10;
console.log(debut);
console.log(fin);
```

Ces variables vous serviront de limites pour plusieurs exercices.

## Partie 1 — Théorie

### 1.1. Une boucle répète une action

Le principe fondamental d'une boucle est de déléguer le travail répétitif à l'ordinateur. Si vous avez besoin d'exécuter 100 fois le même calcul ou le même affichage, la boucle vous permet d'écrire l'instruction une seule fois et de dire à l'ordinateur de s'en charger 100 fois d'affilée.

### 1.2. Le compteur contrôle la répétition

Le compteur (souvent appelé `i` ou `compteur`) est la mémoire de la boucle. Il évolue à chaque nouveau tour (par exemple : `1`, puis `2`, puis `3`...).
Ce compteur n'est pas seulement utile pour savoir quand s'arrêter, il est aussi très utile *à l'intérieur* de la boucle ! Vous pouvez l'afficher, vous en servir pour faire un calcul, ou encore tester sa valeur dans une condition.

### 1.3. L'accumulateur

Un concept essentiel dans ce tutoriel est l'**accumulateur**. Imaginez-le comme un panier que vous tenez dans vos bras. À chaque tour de boucle, vous ajoutez quelque chose dans le panier.
Exemple : `somme = somme + nombre;`
Ici, on dit à l'ordinateur : "Prends ce qu'il y a déjà dans la variable `somme`, ajoute-lui la valeur de `nombre`, et range le nouveau total à nouveau dans la variable `somme`". Ainsi, la somme grandit progressivement.

### 1.4. Une boucle peut sélectionner certaines valeurs

On peut tout à fait combiner une boucle et un `if`. C'est une technique très puissante qu'on appelle le filtrage.
Par exemple, vous pouvez dire à l'ordinateur : "Parcours tous les nombres de 1 à 100. Mais à chaque nombre, vérifie d'abord `if (nombre % 2 === 0)`. Si c'est vrai, alors seulement tu l'affiches". La boucle parcourt 100 valeurs, mais n'agit que sur les 50 valeurs qui l'intéressent.

### 1.5. Méthode pour résoudre un exercice

Comme pour les conditions, ne codez pas trop vite. Suivez ce plan d'action :
1. Lisez attentivement ce que l'on vous demande.
2. Identifiez ce qui doit être répété exactement.
3. Identifiez le compteur dont vous avez besoin, ainsi que la condition qui devra stopper la boucle.
4. Si vous devez calculer un total, prévoyez une variable "accumulateur" (souvent initialisée à 0) juste *avant* la boucle.
5. Codez, exécutez et testez.

## Partie 2 — Pratique

### 2.1. Exercice 1 — Afficher les nombres de 1 à 10

**Travail demandé** : Construisez une boucle `for` classique qui affiche dans le terminal tous les nombres allant de 1 à 10 inclus.
**Test obligatoire** : Une fois que cela fonctionne, modifiez uniquement votre condition d'arrêt pour que le programme affiche les nombres jusqu'à 20.

### 2.2. Exercice 2 — Afficher les nombres de 10 à 1

**Travail demandé** : Modifiez votre boucle pour faire un compte à rebours de 10 jusqu'à 1 (départ = 10, condition d'arrêt = supérieur ou égal à 1).
**Question de réflexion** : Quelle est l'instruction spécifique qui permet de diminuer la valeur du compteur au lieu de l'augmenter ?

### 2.3. Exercice 3 — Afficher un message plusieurs fois

**Travail demandé** : Ne vous servez plus du compteur pour l'afficher, mais uniquement pour compter les tours. Demandez à la boucle d'afficher exactement 5 fois le message "Bonjour Madani Ali". Modifiez ensuite la boucle pour qu'elle le fasse 10 fois.

### 2.4. Exercice 4 — Utiliser `while`

**Travail demandé** : Laissez la boucle `for` de côté pour un instant. Reprenez l'exercice 1 (afficher les nombres de 1 à 5), mais cette fois-ci, vous devez impérativement utiliser la structure `while`. N'oubliez pas d'augmenter le compteur manuellement à l'intérieur de la boucle !

### 2.5. Exercice 5 — Afficher les nombres pairs

**Travail demandé** : Avec une boucle (au choix), parcourez tous les nombres de 1 à 20. À l'intérieur de la boucle, utilisez un `if` pour que le programme n'affiche **que** les nombres pairs. (Rappel : utilisez l'opérateur modulo `% 2 === 0`).

### 2.6. Exercice 6 — Afficher les nombres impairs

**Travail demandé** : Reprenez l'exercice précédent, mais modifiez légèrement la condition de votre `if` pour que le programme affiche cette fois-ci uniquement les nombres impairs.

### 2.7. Exercice 7 — Calculer une somme

**Travail demandé** : Calculez le résultat mathématique de `1 + 2 + 3 + 4 + 5`. Pour cela, vous devez déclarer un accumulateur `let somme = 0;` *avant* la boucle. Ensuite, faites une boucle de 1 à 5, et ajoutez chaque valeur à la somme. Affichez la somme tout à la fin, une fois la boucle terminée. 
Le résultat attendu dans la console est `15`.

### 2.8. Exercice 8 — Calculer la somme de 1 à 10

**Travail demandé** : Faites la même chose, mais cette fois pour calculer la somme de 1 à 10. Le résultat attendu est `55`.
**Question de réflexion** : Pourquoi est-il indispensable que la variable `somme` (l'accumulateur) soit déclarée et initialisée à `0` **avant** que la boucle ne commence, et non pas à l'intérieur de la boucle ?

### 2.9. Exercice 9 — Calculer la somme des nombres pairs

**Travail demandé** : Parcourez les nombres de 1 à 20. Si le nombre est pair, ajoutez-le à votre accumulateur. Si le nombre est impair, ignorez-le. Affichez le résultat final, qui doit être exactement `110`.

### 2.10. Exercice 10 — Compter les nombres pairs

**Travail demandé** : L'objectif ici n'est pas de faire une addition (une somme), mais un comptage. Parcourez de 1 à 20. À chaque fois que vous trouvez un nombre pair, vous ne l'additionnez pas : vous ajoutez simplement `1` à un nouveau compteur (par exemple `let totalPairs = 0`). Le résultat attendu est `10`.

### 2.11. Exercice 11 — Compter les nombres supérieurs à une valeur

**Travail demandé** : Parcourez les nombres de 1 à 20. Comptez (comme dans l'exercice précédent) combien d'entre eux sont strictement supérieurs à `12`. Affichez le résultat final, qui doit être `8`.

### 2.12. Exercice 12 — Calculer un produit

**Travail demandé** : Vous devez calculer la multiplication successive : `1 × 2 × 3 × 4 × 5`. Utilisez la même technique de l'accumulateur.
**Attention au piège** : La valeur de départ d'un accumulateur pour une addition est `0` (car `0 + x = x`). Mais pour une multiplication, si vous partez de `0`, le résultat restera éternellement `0` ! À quelle valeur devez-vous initialiser votre accumulateur ?
Le résultat final attendu est `120`.

### 2.13. Exercice 13 — Afficher une table de multiplication

**Donnée de départ** : `let nombre = 5;`
**Travail demandé** : En utilisant une seule boucle qui va de 1 à 10, affichez joliment la table de multiplication correspondante.
Exemple d'affichage attendu : 
`5 x 1 = 5`
... jusqu'à ...
`5 x 10 = 50`.

### 2.14. Exercice 14 — Analyser une série de valeurs

**Donnée de départ** : `let maximum = 20;`
**Travail demandé** : C'est le grand exercice de synthèse. Vous devez parcourir tous les nombres de 1 jusqu'à la variable `maximum`. À l'intérieur de cette boucle unique, vous devez à la fois : 
- Compter le nombre de chiffres pairs que vous rencontrez.
- Calculer la somme totale de ces mêmes chiffres pairs.
**Résultat attendu final** : Votre programme doit afficher deux lignes à la fin : "Nombre : 10" et "Somme : 110".

### 2.15. Travail à faire

Pour valider officiellement ce tutoriel, vous devez choisir **trois exercices** parmi ceux allant du numéro 7 au numéro 14.
Pour chaque exercice que vous avez sélectionné, vous devez clairement définir quel est le compteur, quelle est la condition d'arrêt, et s'il y a un accumulateur.
Construisez le programme complet et testez-le pour vous assurer du résultat. 
*(Contrainte supplémentaire : Vous devez utiliser la boucle `while` pour au moins un des trois exercices).*

### Livrable

Vous rédigerez un document contenant, pour chacun des trois exercices choisis :
* Le nom du problème.
* Le code JavaScript complet et propre.
* Le détail du test effectué et le résultat que la console a retourné.

### Critère de réussite

Votre travail sera un succès si :
* Les boucles s'exécutent sans créer de boucles infinies.
* Les conditions d'arrêt sont correctement posées.
* Les variables "accumulateur" ou "compteur externe" sont déclarées au bon endroit (hors de la boucle) et produisent les résultats exacts attendus par la consigne.

### Résultat attendu

L'objectif ultime est que vous sachiez manipuler avec une grande aisance les compteurs pour rythmer la boucle, les accumulateurs pour stocker de la donnée, et les `if` pour trier et sélectionner l'information à la volée.

## Bilan

**Vous avez appris :**
* À répéter efficacement un traitement en utilisant `for` ou `while`.
* À vous servir intelligemment des compteurs et des accumulateurs.
* À effectuer des tâches variées dans une boucle : compter des occurrences, sommer des valeurs, faire des produits, ou filtrer des informations.

**Vous savez maintenant :**
* Reconnaître un problème qui nécessite une approche répétitive et le résoudre sans dupliquer votre code. C'est une compétence clé de l'algorithmique.

## Glossaire

* **Accumulateur** : Une variable spéciale, initialisée avant la boucle, qui sert à conserver et à faire grandir progressivement un résultat (souvent par addition ou multiplication).
* **Sélection** : Le fait de choisir quelles valeurs nous intéressent parmi un grand ensemble, en utilisant une condition `if` à l'intérieur d'une boucle.
