---
title: "Informations et textes HTML"
layout: tuto
slug: "informations-textes-html"
permalink: /tutos/:slug/
tuto_id: "T.122.113"
version: "normal"
ua: "UA.122.11"
nav_order: 3
---


## 1. Objectif

Ajouter les informations et les principaux textes d’une page HTML.

À la fin du tutoriel, la page contient son titre, ses informations de document et une structure de contenu plus complète.

## 2. Prérequis

* Avoir créé le fichier `index.html`.
* Connaître `<html>`, `<head>` et `<body>`.
* Savoir utiliser une balise, un élément et un attribut.

# Partie 1 — Théorie

## 1.1. `<meta charset>`

`<meta charset>` indique le codage des caractères utilisé par la page.

Pour une page en français, on utilise souvent :

```html
<meta charset="UTF-8">
```

`UTF-8` permet d'afficher correctement les caractères comme `é`, `è` et `à`.

## 1.2. `<title>`

`<title>` donne le titre de la page.

Ce titre apparaît dans l’onglet du navigateur.

**Exemple :**

```html
<title>
    Métier de développeur - Les principales missions
</title>
```

## 1.3. Les titres `<h1>` à `<h6>`

Les éléments `<h1>` à `<h6>` permettent d’organiser les titres.

`<h1>` est le titre principal.

`<h2>` indique un titre de niveau inférieur.

`<h3>` indique un niveau encore inférieur.

**Exemple :**

```html
<h1>
    Le métier de développeur et ses principales missions
</h1>

<h2>
    Le rôle du développeur
</h2>

<h3>
    Réaliser l'application
</h3>
```

## 1.4. Le paragraphe `<p>`

`<p>` permet d’écrire un paragraphe.

**Exemple :**

```html
<p>
    Le développeur crée des applications.
    Il transforme un besoin en solution informatique.
</p>
```

## 1.5. Le saut de ligne `<br>`

`<br>` crée un retour à la ligne dans un contenu.

**Exemple :**

```html
<p>
    Le développeur crée des applications.<br>
    Il travaille avec plusieurs technologies.
</p>
```

## 1.6. La ligne horizontale `<hr>`

`<hr>` crée une séparation entre deux parties du contenu.

**Exemple :**

```html
<p>
    Première partie.
</p>

<hr>

<p>
    Deuxième partie.
</p>
```

## 1.7. À retenir

* `<meta charset="UTF-8">` indique le codage des caractères.
* `<title>` définit le titre de la page.
* `<h1>` à `<h6>` organisent les titres.
* `<p>` crée un paragraphe.
* `<br>` crée un retour à la ligne.
* `<hr>` crée une séparation.

# Partie 2 — Pratique

## 2.1. Ajouter les informations du document

### Étape 1 — Ouvrir `index.html`

Ouvrez le fichier `index.html`.

Vous avez déjà :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
</head>
<body>
    <h1>
        Le métier de développeur et ses principales missions
    </h1>

    <p>
        Le développeur crée des applications.
        Il transforme un besoin en solution informatique.
    </p>

    <p>
        Son travail se fait en plusieurs étapes.
        Il doit bien comprendre le projet.
    </p>
</body>
</html>
```

### Étape 2 — Ajouter `<meta charset>`

Dans `<head>`, ajoutez :

```html
<meta charset="UTF-8">
```

### Étape 3 — Ajouter `<title>`

Dans `<head>`, sous `<meta charset>`, ajoutez :

```html
<title>
    Métier de développeur - Les principales missions
</title>
```

Le début du fichier devient :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>
        Métier de développeur - Les principales missions
    </title>
</head>
<body>
```

## 2.2. Ajouter les titres de contenu

### Étape 4 — Ajouter un titre `<h2>`

Après le premier paragraphe, ajoutez :

```html
<h2>
    Le rôle du développeur
</h2>
```

### Étape 5 — Ajouter un autre paragraphe

Sous le titre, ajoutez :

```html
<p>
    La première mission est d'analyser le besoin.
    Le développeur cherche les fonctionnalités nécessaires.
    Il étudie les informations à utiliser.
</p>
```

### Étape 6 — Ajouter un titre `<h3>`

Sous ce paragraphe, ajoutez :

```html
<h3>
    Réaliser l'application
</h3>
```

## 2.3. Ajouter la suite du contenu

### Étape 7 — Ajouter un paragraphe avec un saut de ligne

Ajoutez :

```html
<p>
    Le développeur écrit le code de l'application.<br>
    Il organise son travail et crée les fonctionnalités demandées.
</p>
```

### Étape 8 — Ajouter une séparation

Après le paragraphe, ajoutez :

```html
<hr>
```

## 2.4. Vérifier la page

### Étape 9 — Ouvrir la page dans le navigateur

Enregistrez `index.html`.

Ouvrez la page dans un navigateur.

**Résultat attendu :**

La page contient :

* le titre de l’onglet ;
* le titre principal ;
* un titre de section ;
* un sous-titre ;
* plusieurs paragraphes ;
* un saut de ligne ;
* une séparation.

La structure obtenue est notamment :

```html
<head>
    <meta charset="UTF-8">
    <title>
        Métier de développeur - Les principales missions
    </title>
</head>

<body>
    <h1>
        Le métier de développeur et ses principales missions
    </h1>

    <p>
        Le développeur crée des applications.
        Il transforme un besoin en solution informatique.
    </p>

    <p>
        Son travail se fait en plusieurs étapes.
        Il doit bien comprendre le projet.
    </p>

    <h2>
        Le rôle du développeur
    </h2>

    <p>
        La première mission est d'analyser le besoin.
        Le développeur cherche les fonctionnalités nécessaires.
        Il étudie les informations à utiliser.
    </p>

    <h3>
        Réaliser l'application
    </h3>

    <p>
        Le développeur écrit le code de l'application.<br>
        Il organise son travail et crée les fonctionnalités demandées.
    </p>

    <hr>
</body>
```

**Résultat attendu :**

La page HTML contient maintenant une structure de texte proche de la page finale du Blog personnel.

# 3. Bilan

**Vous avez réalisé :** le titre du document et une partie de la structure textuelle de la page.

**Vous savez maintenant :** utiliser `<meta charset>`, `<title>`, les titres `<h1>` à `<h6>`, `<p>`, `<br>` et `<hr>`.

# 4. Glossaire

* **Titre** : texte qui présente une partie d’une page.
* **Paragraphe** : bloc de texte créé avec `<p>`.
* **Codage des caractères** : règle utilisée pour afficher correctement les caractères.
* **Hiérarchie** : organisation des titres par niveaux.
