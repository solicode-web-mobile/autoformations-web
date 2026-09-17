---
title: "Construire des boucles"
layout: tuto
slug: "construire-boucles"
permalink: /tutos/:slug/detaille
tuto_id: "T.121.123"
type: "classique"
version: "detaille"
ua: "UA.121.12"
nav_order: 3
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez découvrir un outil indispensable en programmation : la **boucle**. 
L'objectif est d'apprendre à **répéter une action** sans avoir à écrire plusieurs fois la même ligne de code.

Voici les compétences précises que nous allons développer pas à pas :
* Comprendre le principe d'une boucle et son utilité.
* Créer et faire évoluer un **compteur**.
* Définir une **condition de répétition** (quand faut-il continuer ?) et une **condition d'arrêt** (quand faut-il s'arrêter ?).
* Maîtriser les deux structures de boucles principales : `for` et `while`.

À la fin de ce tutoriel, vous serez capable de créer des programmes qui exécutent des tâches répétitives de manière automatique et parfaitement contrôlée.

## 2. Prérequis

Pour suivre ce tutoriel confortablement, voici ce que vous devez déjà maîtriser :
* Vous devez savoir créer un fichier JavaScript et l'exécuter dans votre terminal avec Node.js.
* Vous devez être à l'aise avec la création de variables et l'utilisation de `console.log()` pour afficher du texte ou des nombres.
* Vous devez avoir compris le principe des conditions `if` vues dans le tutoriel précédent, car une boucle s'appuie fortement sur la logique d'une condition.

## Données de départ

### JavaScript

Avant de démarrer, préparez votre fichier de travail. Créez un fichier nommé `boucles.js` et écrivez simplement cette ligne :

```javascript
console.log("Début du programme");
```

Exécutez ce fichier dans votre terminal avec la commande `node boucles.js` pour vous assurer que tout fonctionne correctement.

## Partie 1 — Théorie

### 1.1. Le principe d'une répétition

En informatique, on a souvent besoin de répéter exactement la même action plusieurs fois. Au lieu de copier-coller dix fois la même ligne de code, on demande à l'ordinateur de le faire pour nous.
Le principe d'une boucle est le suivant :
1. On **débute** la boucle.
2. L'ordinateur exécute l'**action**.
3. Il se pose une question : "Dois-je **continuer** ?" 
   - Si la réponse est *Oui*, il recommence l'action.
   - Si la réponse est *Non*, il arrête la boucle et passe à la suite du programme.

### 1.2. Pourquoi utiliser une boucle ?

Imaginons que vous deviez afficher les nombres de 1 à 1000. Sans boucle, vous devriez écrire 1000 lignes de `console.log()`. Avec une boucle, cela ne prend que 3 lignes de code. Les boucles permettent d'exécuter une instruction un très grand nombre de fois sans dupliquer le code, ce qui évite les erreurs et gagne un temps précieux.

### 1.3. Le compteur

Pour ne pas répéter une action indéfiniment, la boucle a souvent besoin de compter combien de fois elle a déjà tourné. On utilise pour cela une variable spéciale appelée un **compteur**. C'est une variable (souvent initialisée à 1 ou à 0) qui va évoluer (1, 2, 3...) à chaque nouveau tour de boucle.

### 1.4. La condition d'arrêt

C'est la règle vitale de toute boucle : elle doit savoir quand s'arrêter. La **condition d'arrêt** est la limite fixée au compteur (par exemple, "arrête-toi quand le compteur dépasse 5"). Sans cela, votre programme ne s'arrêterait jamais, c'est ce qu'on appelle une boucle infinie.

### 1.5. La boucle `for`

La boucle `for` ("Pour" en anglais) est la boucle la plus utilisée lorsqu'on sait exactement combien de fois on veut répéter une action. Elle est idéale pour utiliser un compteur.
Sa structure se divise en trois parties, séparées par des points-virgules, le tout entre parenthèses : `(initialisation; condition; évolution)`.

```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```
Ce code se lit ainsi : "Pour un compteur commençant à 1 ; tant que le compteur est inférieur ou égal à 5 ; ajoute 1 au compteur à chaque tour".

### 1.6. Comprendre `compteur++`

L'instruction `compteur++` est une écriture raccourcie très courante en JavaScript. Elle signifie simplement "prends la valeur actuelle du compteur et ajoute-lui 1". 
À chaque tour de boucle, le compteur va donc faire : 1 → 2 → 3 → 4 → 5. C'est ce qui permet d'avancer progressivement vers la condition d'arrêt.

### 1.7. La boucle `while`

La boucle `while` ("Tant que" en anglais) est différente. Elle répète une action *tant qu'une* condition précise reste vraie. Elle est très utile quand on ne sait pas à l'avance combien de fois on va devoir répéter l'action.

```javascript
let compteur = 1;
while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```
Ici, on doit créer le compteur avant la boucle. Ensuite on dit : "Tant que le compteur est inférieur ou égal à 5, affiche le compteur, puis augmente-le de 1".

### 1.8. `for` et `while`

Comme vous l'avez peut-être remarqué dans les deux exemples précédents, ces deux boucles produisent exactement le même résultat ! 
* La boucle `for` regroupe tout (création du compteur, condition, évolution) sur une seule ligne. Elle est très compacte et parfaite pour compter.
* La boucle `while` est plus libre, mais elle demande de ne surtout pas oublier d'écrire l'évolution du compteur à l'intérieur du bloc, sinon c'est la boucle infinie assurée.

### 1.9. Une boucle peut contenir une condition

La puissance de la programmation vient du mélange des outils. Vous pouvez tout à fait placer un `if` à l'intérieur d'une boucle `for` !

```javascript
for (let nombre = 1; nombre <= 5; nombre++) {
    if (nombre % 2 === 0) {
        console.log(nombre); // Affiche 2, puis 4
    }
}
```
Ici, la boucle parcourt tous les nombres de 1 à 5, mais le `if` fait office de filtre pour n'afficher que les nombres pairs.

### 1.10. Attention à la boucle infinie

C'est l'erreur classique du débutant : créer une boucle dont la condition ne deviendra jamais fausse. Si vous oubliez d'écrire `compteur++`, le compteur restera éternellement à 1, il sera toujours inférieur à 5, et l'ordinateur affichera des `1` à l'infini jusqu'à faire planter le programme. Soyez toujours sûr que la condition d'arrêt puisse être atteinte.

### 1.11. À retenir

Voici le résumé des points essentiels :
* **Boucle** : Outil permettant une répétition contrôlée.
* **Compteur** : Variable qui suit l'avancement des itérations.
* La boucle **`for`** s'écrit avec trois informations : `(initialisation; condition; étape)`.
* La boucle **`while`** s'écrit uniquement avec une `(condition)`.

## Partie 2 — Pratique

### 2.1. Afficher plusieurs nombres avec `for`

Prenez votre fichier `boucles.js` et recopiez ce premier code.
```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```
Exécutez-le. Observez l'affichage progressif des nombres de 1 à 5.

### 2.2. Modifier le nombre de répétitions

Dans votre code, changez la limite `<= 5` par `<= 10`.
Exécutez le programme. Vous devriez maintenant voir les nombres s'afficher jusqu'à 10. Changez ensuite la limite pour que le programme s'arrête exactement à `4`.

### 2.3. Compter à partir d'une autre valeur

Le compteur n'est pas obligé de commencer à 1. Changez l'initialisation de votre boucle comme ceci :
```javascript
for (let compteur = 5; compteur <= 10; compteur++) {
    console.log(compteur);
}
```
Exécutez. Le programme commence directement à 5.

### 2.4. Utiliser `while`

Effacez votre boucle `for` et testons la même chose avec un `while`.
```javascript
let compteur = 1;
while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```
Exécutez pour vérifier que le comportement est bien identique à votre tout premier exercice.

### 2.5. Modifier la condition d'arrêt

Toujours sur la boucle `while`, changez la condition `<= 5` par `<= 3`. Exécutez et observez. Puis modifiez encore votre code pour aller jusqu'à `7`.

### 2.6. Compter dans l'autre sens

On peut aussi utiliser une boucle pour faire un compte à rebours !
Pour cela, on initialise à 5, on s'arrête à 1, et au lieu d'utiliser `++` (qui ajoute 1), on utilise `--` (qui retire 1). Testez ce code :
```javascript
for (let compteur = 5; compteur >= 1; compteur--) {
    console.log(compteur);
}
```

### 2.7. Répéter un message

L'utilisation du compteur ne sert pas qu'à afficher des nombres. Il sert surtout à compter des tours !
Construisez une boucle (au choix : `for` ou `while`) pour afficher exactement 5 fois le texte `"Bonjour Madani Ali"`. Le texte ne doit pas contenir de numéro, la boucle sert uniquement de métronome.

### 2.8. Utiliser une condition dans une boucle

Reprenons l'exemple de la théorie. Écrivez un programme qui fait une boucle de 1 à 10. À l'intérieur de cette boucle, ajoutez une condition `if` afin de n'afficher que les nombres qui sont pairs.

### 2.9. Comprendre l'arrêt d'une boucle

Analysez le `while` que vous aviez écrit plus tôt. Prenez une feuille de papier et notez la valeur de départ, la condition, et l'évolution. Écrivez mentalement (ou sur le papier) chaque tour de la boucle pour comprendre très précisément à quel moment exact la condition devient `false` et stoppe la machine.

### 2.10. Exercice guidé — Afficher une série

C'est à vous. Écrivez un programme complet qui affiche tous les nombres de `1` à `20`. Choisissez la boucle avec laquelle vous vous sentez le plus à l'aise. Prenez le temps de bien vérifier votre affichage dans le terminal.

### 2.11. Exercice guidé — Compter les nombres pairs

Modifiez l'exercice précédent. Le programme doit toujours parcourir les nombres de 1 à 20, mais il doit utiliser un filtre (un `if`) pour n'afficher **uniquement** les nombres pairs de cette série.
*Résultat attendu dans le terminal : 2, 4, 6, 8, 10, 12, 14, 16, 18, 20.*

### 2.12. Travail à faire

Pour valider l'acquisition de ces notions, réalisez cet exercice de synthèse :
1. Créez une boucle qui parcourt les nombres de 1 à 10.
2. Ajoutez une condition à l'intérieur pour que l'ordinateur n'affiche **que les nombres pairs**.

### Livrable

Rédigez un document simple (au format Markdown ou sur un Google Doc). Ce document doit impérativement contenir :
* Le code JavaScript complet de votre solution.
* Le résultat exact qui a été affiché par votre terminal.
* Une petite phrase explicative, avec vos propres mots, qui justifie pourquoi votre boucle ne continue pas indéfiniment (quelle est sa condition d'arrêt ?).

### Critère de réussite

Votre travail sera validé si :
* Vous avez utilisé correctement une structure de boucle (`for` ou `while`).
* Vous y avez intégré correctement une condition `if`.
* L'arrêt de la boucle est garanti par la bonne évolution de votre compteur.

### Résultat attendu

Voici très précisément ce que votre programme final doit afficher :
```text
2
4
6
8
10
```

## Bilan

**Vous avez appris :**
* À construire les deux boucles majeures de la programmation : `for` et `while`.
* À mettre en place un compteur et une condition d'arrêt pour éviter les boucles infinies.
* À combiner une boucle et une condition pour créer des comportements intelligents.

**Vous savez maintenant :**
* Répéter des traitements de manière automatique, tout en les stoppant correctement au bon moment. Une étape fondamentale de l'algorithmique !

## Glossaire

* **Boucle** : Une structure permettant la répétition d'un bloc de code.
* **Compteur** : La variable spécifique dont le seul rôle est de suivre, de compter, et de contrôler le nombre de répétitions.
* **Itération** : C'est le nom technique que l'on donne à une exécution, un "tour" de boucle. Si une boucle tourne 5 fois, on dit qu'il y a 5 itérations.
