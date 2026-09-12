---
title: "Balise, élément et attribut HTML - Débutant"
layout: tuto
slug: "balise-element-attribut-html"
permalink: /tutos/:slug/
tuto_id: "T.122.112"
version: "normal"
ua: "UA.122.11"
nav_order: 2
---

## 1. Objectif

Comprendre la balise, l’élément et l’attribut HTML.

À la fin du tutoriel, vous savez ajouter des éléments HTML simples dans la structure de la page.

## 2. Prérequis

* Avoir créé le fichier `index.html`.
* Connaître la structure `<html>`, `<head>` et `<body>`.

# Partie 1 — Théorie

## 1.1. La balise HTML

Une balise permet de définir un élément HTML.

Une balise peut avoir une ouverture et une fermeture.

**Exemple :**

```html
<p>
    Bonjour
</p>
```

`<p>` est la balise ouvrante.

`</p>` est la balise fermante.

## 1.2. L’élément HTML

L’ensemble suivant forme un élément HTML :

```html
<p>
    Bonjour
</p>
```

L’élément contient :

* une balise ouvrante ;
* un contenu ;
* une balise fermante.

**Exemple :**

```html
<h1>
    Le métier de développeur
</h1>
```

Ici, l’élément `<h1>` contient le texte `Le métier de développeur`.

## 1.3. L’attribut et la valeur d’attribut

Un attribut ajoute une information à un élément HTML.

Il est écrit dans la balise ouvrante.

**Exemple :**

```html
<html lang="fr">
```

Ici :

* `lang` est l’attribut ;
* `"fr"` est sa valeur.

L’attribut `lang` indique la langue du document.

## 1.4. À retenir

* Une **balise** définit un élément HTML.
* Un **élément** peut contenir du texte ou d’autres éléments.
* Un **attribut** ajoute une information à un élément.
* Une **valeur d’attribut** indique la valeur de cet attribut.

# Partie 2 — Pratique

## 2.1. Ajouter un premier élément

### Étape 1 — Ouvrir `index.html`

Ouvrez le fichier `index.html` créé dans le tutoriel précédent.

Vous devez avoir :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
</head>
<body>
</body>
</html>
```

### Étape 2 — Ajouter un titre

Dans `<body>`, ajoutez :

```html
<h1>
    Le métier de développeur et ses principales missions
</h1>
```

Le titre est maintenant un élément HTML.

## 2.2. Ajouter des paragraphes

### Étape 3 — Ajouter le premier paragraphe

Sous le titre, ajoutez :

```html
<p>
    Le développeur crée des applications.
    Il transforme un besoin en solution informatique.
</p>
```

### Étape 4 — Ajouter un deuxième paragraphe

Ajoutez :

```html
<p>
    Son travail se fait en plusieurs étapes.
    Il doit bien comprendre le projet.
</p>
```

## 2.3. Vérifier les éléments

### Étape 5 — Ouvrir la page

Enregistrez `index.html`.

Ouvrez le fichier dans un navigateur.

**Résultat attendu :**

La page affiche :

* un titre ;
* deux paragraphes.

Le code obtenu est :

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

# 3. Bilan

**Vous avez réalisé :** les premiers éléments de contenu de la page du Blog personnel.

**Vous savez maintenant :** utiliser une balise, un élément, un attribut et une valeur d’attribut dans un document HTML.

# 4. Glossaire

* **Balise** : code qui indique le type d’un élément HTML.
* **Élément** : partie d’une page HTML construite avec une ou plusieurs balises.
* **Attribut** : information ajoutée dans une balise ouvrante.
* **Valeur d’attribut** : valeur donnée à un attribut.
