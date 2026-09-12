---
title: "Balise, élément et attribut HTML - Débutant"
layout: tuto
slug: "balise-element-attribut-html"
permalink: /tutos/:slug/
tuto_id: "T.122.112"
type: "developpement-progressif"
version: "normal"
ua: "UA.122.11"
nav_order: 2
---



## 1. Objectif

Identifier une balise, un élément, un attribut et une valeur d’attribut dans un document HTML.

À la fin du tutoriel, vous saurez utiliser ces notions pour compléter une page HTML simple.

## 2. Prérequis

* Connaître la structure `<html>`, `<head>` et `<body>`.
* Savoir ouvrir une page HTML dans un navigateur.

## Partie 1 — Théorie

### 1.1. La balise HTML

Une balise indique le type d’un élément HTML.

Certaines balises utilisent une ouverture et une fermeture.

Exemple :

```html
<p>
    Bonjour.
</p>
```
 


`<p>` est la balise ouvrante.

`</p>` est la balise fermante.

### 1.2. L’élément HTML

Un élément HTML est une partie complète du document.

Exemple :

```html
<p>
    Bonjour.
</p>
```

Ici, l’élément contient :

* une balise ouvrante ;
* un contenu ;
* une balise fermante.

### 1.3. L’attribut HTML

Un attribut ajoute une information à un élément.

L’attribut est écrit dans la balise ouvrante.

Exemple :

```html
<html lang="fr">
```

Ici :

* `lang` est l’attribut ;
* `"fr"` est la valeur de l’attribut.

L’attribut `lang` indique la langue du document.

### 1.4. La valeur d’attribut

Une valeur d’attribut indique l’information donnée à un attribut.

Exemple :

```html
<html lang="fr">
```

`lang` est l’attribut.

`fr` est sa valeur.

### 1.5. Observer la structure

Dans cet exemple :

```html
<html lang="fr">
    <body>
        <p>Bonjour.</p>
    </body>
</html>
```

On trouve :

* `<html lang="fr">` : balise ouvrante avec un attribut ;
* `</html>` : balise fermante ;
* `<body>` et `</body>` : balises du même élément ;
* `<p>Bonjour.</p>` : un élément HTML.

### 1.6. À retenir

* Une **balise** indique le type d’un élément.
* Un **élément** est une partie complète du document.
* Un **attribut** ajoute une information à un élément.
* Une **valeur d’attribut** donne la valeur de l’attribut.
* L’attribut est écrit dans la balise ouvrante.

## Partie 2 — Pratique

### 2.1. Créer le fichier de travail

Dans cette partie, vous allez créer un fichier pour tester les notions du tutoriel.

#### Étape 1 — Créer le fichier

Créez le fichier :

```text
tuto-2-html.html
```

### 2.2. Reproduire la structure

#### Étape 2 — Ajouter la structure

Dans `tuto-2-html.html`, ajoutez :

```html
<!DOCTYPE html>

<html lang="fr">

<head>
</head>

<body>
    <p>Le développeur crée des applications.</p>
</body>

</html>
```

### 2.3. Observer les balises et les éléments

#### Étape 3 — Identifier les balises

Dans le code, repérez :

```html
<html>
</html>

<head>
</head>

<body>
</body>

<p>
</p>
```

Chaque paire forme un élément.

### 2.4. Observer l’attribut

#### Étape 4 — Identifier l’attribut

Observez :

```html
<html lang="fr">
```

Identifiez :

```text
lang → attribut
fr   → valeur
```

Ne modifiez pas encore cette ligne.

### 2.5. Tester le fichier

#### Étape 5 — Ouvrir la page

Enregistrez `tuto-2-html.html`.

Ouvrez le fichier dans le navigateur.

**Résultat attendu :**

La page affiche :

```text
Le développeur crée des applications.
```


## 4. Bilan

**Vous avez réalisé :** une nouvelle version de la page et identifié les balises, les éléments, les attributs et les valeurs d’attribut.

**Vous savez maintenant :** distinguer une balise, un élément, un attribut et une valeur d’attribut dans un document HTML.

## 5. Glossaire

* **Balise** : code qui indique le type d’un élément HTML.
* **Élément** : partie complète d’un document HTML.
* **Attribut** : information ajoutée dans une balise ouvrante.
* **Valeur d’attribut** : valeur donnée à un attribut.
