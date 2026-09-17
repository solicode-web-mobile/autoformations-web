---
title: "Construire des boucles"
layout: tuto
slug: "construire-boucles"
permalink: /tutos/:slug/compact
tuto_id: "T.121.123"
type: "classique"
version: "compact"
ua: "UA.121.12"
nav_order: 3
data_js: ""
---

## 1. Objectif

Apprendre à **répéter une action**.

Compétences visées :
* Principe d'une boucle
* Compteur
* Condition de répétition et d'arrêt
* Boucles `for` et `while`

## 2. Prérequis

Savoir :
* Créer/exécuter un fichier JS avec Node.js.
* Utiliser variables, `console.log()`.
* Utiliser des conditions `if`.

## Données de départ

### JavaScript

Créez `boucles.js` :
```javascript
console.log("Début du programme");
```
Exécutez-le (`node boucles.js`).

## Partie 1 — Théorie

### 1.1. Le principe d'une répétition

Répéter une partie de code au lieu de l'écrire plusieurs fois.
Principe : Début → Action → Continuer ? (Oui: recommencer, Non: arrêter)

### 1.2. Pourquoi utiliser une boucle ?

Pour exécuter une même instruction un grand nombre de fois sans dupliquer le code.

### 1.3. Le compteur

Variable qui évolue pour compter les répétitions (ex: 1, 2, 3...).

### 1.4. La condition d'arrêt

Limite pour stopper la boucle (ex: arrêter quand compteur > 5).

### 1.5. La boucle `for`

Idéale avec un compteur.
Structure (initialisation; condition; évolution) :
```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```

### 1.6. Comprendre `compteur++`

Ajoute `1` au compteur (ex: 1 → 2 → 3...). Permet d'avancer vers l'arrêt.

### 1.7. La boucle `while`

Répète tant qu'une condition est vraie.
```javascript
let compteur = 1;
while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```

### 1.8. `for` et `while`

Les deux produisent le même résultat, `for` est plus compact pour compter, `while` plus libre.

### 1.9. Une boucle peut contenir une condition

```javascript
for (let nombre = 1; nombre <= 5; nombre++) {
    if (nombre % 2 === 0) {
        console.log(nombre); // Affiche 2, 4
    }
}
```

### 1.10. Attention à la boucle infinie

Assurez-vous que la condition d'arrêt puisse être atteinte (ex: ne pas oublier `compteur++`).

### 1.11. À retenir

* **Boucle** : répétition contrôlée.
* **Compteur** : suit les itérations.
* `for` : (init; condition; étape).
* `while` (condition).

## Partie 2 — Pratique

### 2.1. Afficher plusieurs nombres avec `for`

Testez :
```javascript
for (let compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```

### 2.2. Modifier le nombre de répétitions

Changez `<= 5` par `<= 10`.
Exécutez. Changez pour n'afficher que jusqu'à `4`.

### 2.3. Compter à partir d'une autre valeur

Changez l'initialisation :
```javascript
for (let compteur = 5; compteur <= 10; compteur++) {
    console.log(compteur);
}
```
Exécutez.

### 2.4. Utiliser `while`

Testez :
```javascript
let compteur = 1;
while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```

### 2.5. Modifier la condition d'arrêt

Changez `<= 5` par `<= 3`. Exécutez.
Puis changez pour aller jusqu'à `7`.

### 2.6. Compter dans l'autre sens

Affichez de `5` à `1` :
```javascript
for (let compteur = 5; compteur >= 1; compteur--) {
    console.log(compteur);
}
```

### 2.7. Répéter un message

Construisez une boucle (for ou while) pour afficher 5 fois `"Bonjour Madani Ali"`.

### 2.8. Utiliser une condition dans une boucle

Affichez les nombres pairs entre `1` et `10` en combinant `for` et `if`.

### 2.9. Comprendre l'arrêt d'une boucle

Analysez le `while` précédent (valeur de départ, condition, évolution) et comprenez pourquoi il s'arrête.

### 2.10. Exercice guidé — Afficher une série

Affichez les nombres de `1` à `20` avec la boucle de votre choix.

### 2.11. Exercice guidé — Compter les nombres pairs

Affichez uniquement les nombres pairs de `1` à `20`.
*Résultat attendu : 2, 4, 6... 20.*

### 2.12. Travail à faire

1. Boucle de 1 à 10.
2. Condition pour n'afficher que les pairs.

### Livrable

Document avec :
* Le code.
* Le résultat.
* Explication de la condition d'arrêt.

### Critère de réussite

Utilisation correcte de boucle + condition, arrêt garanti.

### Résultat attendu

Le programme affiche :
```text
2
4
6
8
10
```

## Bilan

**Vous avez appris :**
* `for` et `while`.
* Compteur, condition d'arrêt.
* Combiner boucle et condition.

**Vous savez maintenant :**
* Répéter des traitements et les stopper correctement.

## Glossaire

* **Boucle** : structure de répétition.
* **Compteur** : contrôle la répétition.
* **Itération** : une exécution de la boucle.
