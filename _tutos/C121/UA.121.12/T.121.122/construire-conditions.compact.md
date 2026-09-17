---
title: "Construire des conditions"
layout: tuto
slug: "construire-conditions"
permalink: /tutos/:slug/compact
tuto_id: "T.121.122"
type: "classique"
version: "compact"
ua: "UA.121.12"
nav_order: 2
data_js: ""
---

## 1. Objectif

Apprendre à utiliser une **condition** pour contrôler le programme.

Compétences visées :
* `if`, `else`, `else if`.
* Condition simple et multiple.

## 2. Prérequis

Savoir :
* Créer/exécuter un fichier JS avec Node.js.
* Utiliser une variable, `console.log()`, `true`, `false`.
* Construire une expression booléenne (`===`, `>`, `&&`, `||`).

## Données de départ

### JavaScript

Créez `conditions.js` :

```javascript
let age = 20;
console.log(age >= 18); // true
```

## Partie 1 — Théorie

### 1.1. Une condition permet de décider

Agir en fonction d'une règle (ex: Si âge >= 18 → "Accès autorisé").

### 1.2. La structure `if`

Exécute l'action uniquement si la condition est `true`.

```javascript
let age = 20;
if (age >= 18) {
    console.log("Accès autorisé");
}
```

### 1.3. Que se passe-t-il si la condition est fausse ?

Rien ne se passe (le bloc est ignoré).

### 1.4. Utiliser `else`

Prévoir une action alternative (si la condition est `false`).

```javascript
if (age >= 18) {
    console.log("Accès autorisé");
} else {
    console.log("Accès refusé");
}
```

### 1.5. Utiliser `else if`

Vérifier plusieurs règles à la suite.

```javascript
let note = 14;
if (note >= 16) {
    console.log("Très bien");
} else if (note >= 10) {
    console.log("Validé");
} else {
    console.log("Non validé");
}
```

### 1.6. L'ordre des conditions est important

Testez toujours du plus précis au plus général. Le premier test `true` est exécuté, les autres sont ignorés.

### 1.7. Utiliser une condition avec `&&`

Les deux règles doivent être `true`.

```javascript
if (age >= 18 && inscrit === true) {
    console.log("Accès autorisé");
}
```

### 1.8. Utiliser une condition avec `||`

Au moins une des règles doit être `true`.

```javascript
if (membre === true || invitation === true) {
    console.log("Accès autorisé");
}
```

### 1.9. Une condition contrôle une action

Donnée → Expression booléenne → Condition → Action.

### 1.10. À retenir

* `if` (si), `else if` (sinon si), `else` (sinon).
* Ordre d'écriture essentiel.
* Les expressions peuvent utiliser `&&`, `||`.

## Partie 2 — Pratique

### 2.1. Construire une condition simple

Remplacez par :
```javascript
let age = 20;
if (age >= 18) {
    console.log("Vous êtes majeur");
}
```
Exécutez. Changez `age` à `15` et testez à nouveau (aucun message).

### 2.2. Ajouter `else`

Ajoutez :
```javascript
} else {
    console.log("Vous êtes mineur");
}
```
Testez avec `age = 15` et `age = 22`.

### 2.3. Utiliser `else if`

Code de départ :
```javascript
let note = 14;
```
Construisez :
* `>= 16` → "Très bien"
* `>= 10` → "Validé"
* Moins de 10 → "Non validé"

Testez avec 14, 17, puis 8.

### 2.4. Vérifier un nombre

Donnée : `let nombre = 7;`
Afficher "Positif" si > 0, sinon "Négatif ou nul". Utilisez `if` / `else`.

### 2.5. Trouver le maximum de deux valeurs

Données : `let a = 12; let b = 8;`
Afficher la plus grande valeur (ici 12). Testez avec d'autres valeurs.

### 2.6. Utiliser `&&`

Données : `let age = 22; let inscrit = true;`
Afficher "Accès autorisé" si `age >= 18` **ET** `inscrit === true`. Testez divers cas.

### 2.7. Utiliser `||`

Données : `let membre = false; let invitation = true;`
Autoriser l'accès si membre **OU** invité. Testez diverses combinaisons.

### 2.8. Exercice — Classer une note

Affichez : "Très bien" (16-20), "Validé" (10-15), "Non validé" (<10).
Testez avec : 8, 10, 15, 16, 20.

### 2.9. Exercice — Déterminer le maximum

Trouvez le maximum parmi :
```javascript
let a = 18; let b = 12; let c = 15;
```

### 2.10. Exercice — Autoriser ou refuser un accès

Accès si âge >= 18 **ET** compte actif. Testez différentes valeurs.

### 2.11. Travail à faire

1. Définissez une note.
2. Affichez "Très bien", "Validé", ou "Non validé".
3. Testez plusieurs notes.

### Livrable

Document (Markdown ou Google Doc) avec : code final, 3 exemples de test et leurs résultats.

### Critère de réussite

Utilisation correcte de `if/else if/else`, sans boucle, affichage correct.

### Résultat attendu

* `note = 17` → `Très bien`
* `note = 12` → `Validé`
* `note = 7` → `Non validé`

## Bilan

**Vous avez appris :**
* `if`, `else`, `else if`.
* Construire plusieurs chemins d'exécution.

**Vous savez maintenant :**
* Prendre une décision dans un programme avec des conditions.

## Glossaire

* **Condition** : Règle de décision (`if/else if/else`).
* **Bloc** : Instructions entre `{` et `}`.
