---
title: "Construire une pyramide d'étoiles"
layout: tuto
slug: "construire-pyramide-etoiles"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.126"
type: "algorithme"
version: "detaille"
ua: "UA.121.12"
nav_order: 6
data_js: ""
---

## 1. Objectif

Félicitations, vous êtes arrivé au dernier tutoriel de cette unité ! Il est temps de rassembler toutes les pièces du puzzle. Dans ce tutoriel, vous allez construire votre tout premier **algorithme élémentaire** complet.

L'objectif est d'utiliser tout ce que vous avez appris (les variables, les conditions `if`, et surtout les boucles) pour résoudre un problème visuel : afficher une pyramide d'étoiles parfaitement symétrique dans votre terminal.

Voici à quoi ressemblera votre résultat final :
```text
    *
   ***
  *****
 *******
*********
```

## 2. Prérequis

Pour réussir la construction de cette pyramide, vous devez impérativement maîtriser :
* La création de variables et l'affichage avec `console.log()`.
* La création et l'utilisation d'une condition `if`.
* La création d'une boucle `for` avec son compteur.
* Un concept nouveau mais très logique : l'**imbrication de boucles** (le fait de placer une boucle à l'intérieur d'une autre boucle, comme des poupées russes).

## Données de départ

### JavaScript

Préparez votre fichier de travail. Créez un fichier nommé `pyramide.js` et insérez le code de base ci-dessous :

```javascript
let hauteur = 5;
console.log("Hauteur :", hauteur);
```

Ce sera la seule donnée dont votre programme aura besoin. Tout le reste sera généré dynamiquement par votre algorithme.

## Partie 1 — Théorie

### 1.1. Observer la pyramide

En algorithmique, on ne commence jamais à coder sans avoir analysé le problème visuellement. Regardez la pyramide. Comment est-elle construite ? 
Elle n'est pas affichée d'un seul coup. Le terminal affiche du texte ligne par ligne, de haut en bas. Votre programme devra donc construire la pyramide étape par étape, en générant la Ligne 1, puis la Ligne 2, etc.

### 1.2. Une ligne contient des espaces et des étoiles

Si on analyse la toute première ligne de notre pyramide de hauteur 5, on s'aperçoit que l'étoile n'est pas collée sur le bord gauche. Elle est poussée vers le centre par des espaces invisibles.
* La Ligne 1 contient exactement : 4 espaces, puis 1 étoile.
* La Ligne 2 contient exactement : 3 espaces, puis 3 étoiles.
* Et ainsi de suite... 
Pour construire une ligne, il faut donc d'abord générer le bon nombre d'espaces, puis le bon nombre d'étoiles.

### 1.3. Trouver la règle des espaces

Il faut trouver la logique mathématique qui relie le numéro de la ligne au nombre d'espaces nécessaires.
La règle est la suivante : `espaces = hauteur - ligne`.
Faisons le test : pour la ligne numéro 3, sur une pyramide de hauteur 5, le calcul fait `5 - 3 = 2`. Il faudra donc imprimer 2 espaces. La règle fonctionne !

### 1.4. Trouver la règle des étoiles

Cherchons maintenant la logique pour les étoiles. On remarque que le nombre d'étoiles augmente toujours de 2 à chaque étage (1, puis 3, puis 5...).
La règle mathématique est : `étoiles = 2 × ligne - 1`.
Faisons le test : pour la ligne numéro 3, le calcul fait `2 × 3 - 1 = 5`. Il faudra donc imprimer 5 étoiles. La règle est validée.

### 1.5. Construire une ligne

Le plan d'action pour construire une seule ligne est donc le suivant :
1. On ajoute les espaces requis (grâce à notre première règle).
2. On ajoute les étoiles requises (grâce à notre deuxième règle) juste à côté des espaces.
3. On affiche la ligne complète dans le terminal.

### 1.6. Répéter pour toutes les lignes

Puisque nous devons construire plusieurs lignes, nous avons besoin d'une boucle principale. Elle va gérer les étages de la pyramide.
```javascript
for (let ligne = 1; ligne <= hauteur; ligne++)
```
Cette boucle va s'exécuter 5 fois (si la hauteur est de 5), et à chaque tour, la variable `ligne` contiendra le numéro de l'étage actuel.

### 1.7. Répéter les espaces

À l'intérieur de notre boucle des lignes, nous devons générer les espaces. Si on doit ajouter 4 espaces, on ne va pas faire 4 copier-coller. On va utiliser une deuxième boucle, placée *à l'intérieur* de la première ! Cette sous-boucle tournera exactement `hauteur - ligne` fois.

### 1.8. Répéter les étoiles

De la même manière, juste après avoir généré les espaces, nous allons utiliser une troisième boucle pour générer les étoiles. Elle sera placée à la suite de la boucle des espaces, et elle tournera exactement `2 × ligne - 1` fois.

### 1.9. Ajouter une condition

Avant même de lancer toutes ces boucles, un bon programmeur vérifie toujours ses données d'entrée. Que se passe-t-il si un utilisateur demande une pyramide de hauteur 0, ou pire, de hauteur -5 ? Le programme va planter. 
Il faut donc entourer tout notre algorithme d'une grande condition de sécurité : `if (hauteur > 0)`.

### 1.10. L'algorithme complet

Voici le résumé en langage naturel (français) de l'architecture complète de votre futur programme :
* **Si** la hauteur est valide (strictement supérieure à 0) :
    * **Boucle** sur chaque ligne (de 1 jusqu'à la hauteur demandée) :
        * **Boucle** pour générer les espaces.
        * **Boucle** pour générer les étoiles.
        * Afficher la ligne terminée.
* **Sinon** (la hauteur est invalide) :
    * Afficher un message d'erreur.

### 1.11. À retenir

L'imbrication de boucles (mettre une boucle dans une boucle) est un concept puissant. Il permet de gérer des problèmes en deux dimensions (comme une image, une grille, ou ici, une pyramide). La boucle principale gère la hauteur (la verticalité), et les sous-boucles gèrent la largeur (l'horizontalité, en ajoutant les caractères un par un).

## Partie 2 — Pratique

### 2.1. Étape 1 — Afficher une étoile

Commencez très simplement. Dans votre fichier, écrivez une instruction pour afficher une simple étoile `*`. Exécutez le code.

### 2.2. Étape 2 — Afficher plusieurs étoiles

Créez une variable `let ligneTexte = "";`. 
Ajoutez-lui manuellement une étoile, puis une deuxième, en écrivant `ligneTexte = ligneTexte + "*";` plusieurs fois de suite. Affichez la variable. Vous venez de comprendre comment on accumule du texte sur une même ligne.

### 2.3. Étape 3 — Utiliser une boucle pour les étoiles

Remplacez vos ajouts manuels par une boucle `for` qui tourne 5 fois. À chaque tour, elle doit ajouter une `*` à votre variable `ligneTexte`. Affichez le résultat. Vous avez automatisé la création d'une ligne !

### 2.4. Étape 4 — Construire un triangle

Passons à la 2D ! Entourez votre code précédent avec une grande boucle principale qui va gérer les lignes (utilisez un compteur nommé `ligne`). 
Dans cette boucle principale, au lieu de toujours afficher 5 étoiles, modifiez la limite de votre sous-boucle d'étoiles pour qu'elle tourne `ligne` fois. 
Vous devriez obtenir un magnifique triangle rectangle (une étoile à la ligne 1, deux à la ligne 2, etc.).

### 2.5. Étape 5 — Construire le nombre d'espaces

Il est temps de centrer notre pyramide. Avant la sous-boucle qui génère les étoiles, ajoutez une nouvelle sous-boucle. Celle-ci doit ajouter le caractère espace `" "` à votre variable `ligneTexte`.
Rappelez-vous la règle théorique : cette boucle doit tourner `hauteur - ligne` fois.

### 2.6. Étape 6 — Ajouter les étoiles

Modifiez maintenant la limite de votre sous-boucle d'étoiles. Elle ne doit plus tourner `ligne` fois, mais utiliser la vraie règle mathématique de la pyramide : `(2 * ligne) - 1`.

### 2.7. Étape 7 — Construire une ligne complète

Assurez-vous que l'initialisation de votre variable `let ligneTexte = "";` se trouve bien **à l'intérieur** de la grande boucle principale, juste au début. Pourquoi ? Parce qu'à chaque nouvel étage de la pyramide, il faut repartir d'une ligne vide et propre, sinon le texte du précédent étage s'accumulerait !
Affichez la variable `ligneTexte` à la toute fin de la grande boucle.

### 2.8. Étape 8 — Construire la pyramide complète

Votre algorithme de construction est terminé. Il ne vous reste plus qu'à l'entourer de la condition de sécurité `if (hauteur > 0)` pour protéger votre programme. N'oubliez pas d'ajouter le `else` pour gérer le message d'erreur.

### 2.9. Étape 9 — Tester différentes hauteurs

C'est l'heure de vérité. Changez la variable initiale `hauteur` à `1`. Le programme doit afficher une seule étoile bien centrée. Testez avec `3`, puis avec `5`. Enfin, testez avec `0` pour vérifier que votre message d'erreur s'affiche correctement et que le programme ne plante pas.

### 2.10. Étape 10 — Comprendre le traitement

Faites une pause et répondez mentalement à ces questions pour valider votre compréhension :
* Pourquoi avons-nous eu besoin de deux sous-boucles (une pour les espaces, une pour les étoiles) ?
* D'où sortent les calculs mathématiques utilisés dans les limites de ces boucles ?
* Pourquoi était-il crucial de tester si la hauteur était supérieure à 0 ?

### 2.11. Travail à faire

Rédigez le programme complet et finalisé de la pyramide. Configurez la variable de départ sur `let hauteur = 7`.
Exécutez votre code. Vous devez obtenir une imposante pyramide parfaitement équilibrée. Testez à nouveau avec une hauteur négative pour valider votre sécurité.

### Livrable

Vous rédigerez un document final contenant :
* Un rappel très court du problème et des deux règles mathématiques utilisées.
* Le code JavaScript complet de votre algorithme.
* Des captures d'écran (ou des copier-coller) du résultat affiché dans le terminal pour les hauteurs de 3, 5, et 7.

### Critère de réussite

Votre algorithme sera considéré comme réussi et robuste si :
* La pyramide est visuellement parfaite (aucun décalage sur la gauche ou la droite).
* Le programme ne produit aucune boucle infinie, peu importe le nombre saisi.
* La gestion des erreurs (hauteur de 0 ou moins) est opérationnelle.

### Résultat attendu

Pour une configuration avec `hauteur = 5`, votre terminal doit afficher :
```text
    *
   ***
  *****
 *******
*********
```

Pour une configuration avec `hauteur = 3`, votre terminal doit afficher :
```text
  *
 ***
*****
```

## Bilan

**Vous avez appris :**
* À analyser un problème visuel complexe et à le décomposer en règles mathématiques simples.
* À imbriquer des boucles les unes dans les autres pour gérer des problèmes en plusieurs dimensions (lignes et colonnes).
* À combiner l'ensemble des notions de l'unité (variables, conditions, et boucles) pour créer un programme complet.

**Vous savez maintenant :**
* Construire une véritable solution algorithmique de A à Z. C'est une excellente fondation pour aborder des problèmes de programmation bien plus avancés à l'avenir !

## Glossaire

* **Algorithme** : Une suite d'étapes très précises, organisées de manière logique, permettant à l'ordinateur de résoudre un problème donné.
* **Boucle imbriquée** : Une boucle placée à l'intérieur du bloc d'instructions d'une autre boucle.
* **Pyramide** : Dans le contexte de l'algorithmique, c'est un exercice classique de manipulation de caractères visant à tester la capacité du programmeur à gérer des suites logiques et des imbrications de boucles.
