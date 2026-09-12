---
title: "Structure d’un document HTML - Débutant"
layout: tuto
slug: "structure-document-html"
permalink: /tutos/:slug/
tuto_id: "T.122.111"
version: "normal"
ua: "UA.122.11"
nav_order: 1
---
---

title: "Structure d’un document HTML - Débutant"
layout: tuto
slug: "structure-document-html"
permalink: /tutos/:slug/
tuto_id: "T.122.111"
version: "normal"
ua: "UA.122.11"
nav_order: 1
------------

## 1. Objectif

Créer la structure de base d’une page HTML.

À la fin de ce tutoriel, vous avez créé le fichier HTML qui servira à construire progressivement la page détaille d’un article.

## 2. Prérequis

* Savoir ouvrir un dossier de projet.
* Savoir créer un fichier.
* Avoir un éditeur de code.
* Avoir un navigateur Web.

# Partie 1 — Théorie

## 1.1. Structure d’un document HTML

Un document HTML possède une structure de base.

Il contient :

* `<!DOCTYPE html>` : indique que le document utilise HTML.
* `<html>` : contient tout le document.
* `<head>` : contient les informations du document.
* `<body>` : contient le contenu visible de la page.

**Exemple :**

```html
<!DOCTYPE html>

<html lang="fr">

<head>
</head>

<body>
</body>

</html>
```

## 1.2. Attribut `lang`

L’attribut `lang` indique la langue du document.

Pour une page en français :

```html
<html lang="fr">
```

`fr` indique que le document est en français.

## 1.3. À retenir

* `<!DOCTYPE html>` indique le type du document.
* `<html>` contient le document HTML.
* `<head>` contient les informations du document.
* `<body>` contient le contenu visible.
* `lang="fr"` indique que la page est en français.

# Partie 2 — Pratique

## 2.1. Créer le fichier HTML

### Étape 1 — Ouvrir le projet

Ouvrez le dossier du projet.

### Étape 2 — Créer le fichier

Créez un fichier nommé :

```text
index.html
```

## 2.2. Ajouter la structure HTML

### Étape 3 — Écrire la structure du document

Dans `index.html`, ajoutez :

```html
<!DOCTYPE html>

<html lang="fr">

<head>
</head>

<body>
</body>

</html>
```

### Étape 4 — Enregistrer le fichier

Enregistrez `index.html`.

## 2.3. Vérifier la structure

### Étape 5 — Ouvrir la page

Ouvrez `index.html` dans un navigateur.

La page est blanche.

C’est normal.

La structure HTML est présente, mais aucun contenu n’a encore été ajouté.

**Résultat attendu :**

Le fichier `index.html` contient :

```html
<!DOCTYPE html>

<html lang="fr">

    <head>

    </head>

    <body>

    </body>

</html>
```

# Partie 3 — Travail final et progression des 6 tutoriels

## 3.1. Travail final

Pendant les 6 tutoriels de cette UA, vous allez construire une **page détaille d’un article**.

Le livrable final est :

```text
index.html
```

Ce fichier doit contenir le code HTML complet de la page finale.

Le résultat final attendu est présenté ci-dessous :

<iframe
    src="[URL_DE_LA_PAGE_FINALE]"
    width="100%"
    height="700"
    title="Résultat final de la page détaille d’un article"
    style="border:1px solid #ddd; border-radius:8px;">
</iframe>

**Observez le résultat final.**

Vous allez construire cette page progressivement.

Vous ne devez pas copier le code final.

Vous devez utiliser les notions HTML étudiées dans chaque tutoriel.

## 3.2. Construction progressive

La page finale est construite en plusieurs étapes.

### T.122.111 — Structure d’un document HTML

Dans ce tutoriel, vous créez la structure de base :

```text
Document HTML
├── html
│   ├── head
│   └── body
```

Cette structure prépare le fichier pour les tutoriels suivants.

### T.122.112 — Balise, élément et attribut HTML

Vous ajoutez les premiers éléments HTML.

Vous apprenez à utiliser :

* une balise ouvrante ;
* une balise fermante ;
* un élément ;
* un attribut ;
* une valeur d’attribut.

Vous utilisez ces notions pour commencer à construire le contenu de la page.

### T.122.113 — Informations et textes HTML

Vous ajoutez les informations du document et le contenu textuel.

Vous utilisez notamment :

* `<meta charset>`;
* `<title>`;
* `<h1>` à `<h6>`;
* `<p>`;
* `<br>`;
* `<hr>`.

La page commence à prendre la forme d’un véritable article.

### T.122.114 — Conteneurs et listes HTML

Vous organisez le contenu de la page avec :

* `<div>`;
* `<span>`;
* `class`;
* `<ul>`;
* `<li>`.

Vous construisez les différentes zones de la page et les listes de contenu.

### T.122.115 — Liens et chemins relatifs HTML

Vous ajoutez les liens nécessaires à la page.

Vous utilisez :

* `<a>`;
* `href`;
* les chemins relatifs.

Vous apprenez aussi à indiquer l’emplacement d’un fichier dans le projet.

### T.122.116 — Images et figures HTML

Vous ajoutez les images et leurs informations.

Vous utilisez :

* `<img>`;
* `src`;
* `alt`;
* `width`;
* `height`;
* `<figure>`;
* `<figcaption>`.

Vous terminez ainsi la construction de la page HTML.

## 3.3. Méthode de travail

À chaque tutoriel :

1. Observez le résultat attendu.
2. Utilisez les notions déjà étudiées.
3. Ajoutez les nouvelles notions du tutoriel.
4. Testez la page dans le navigateur.
5. Comparez votre résultat avec le résultat attendu.

À la fin des 6 tutoriels, votre page doit correspondre au résultat final présenté dans l’iframe.

## 3.4. Livrable final

**Travail à faire :**

Construire progressivement la page détaille de l’article pendant les 6 tutoriels.

**Livrable :**

```text
index.html
```

**Résultat attendu :**

Une page HTML complète correspondant exactement au résultat final présenté dans l’iframe.

**Critère de réussite :**

Le rendu final de votre page correspond au résultat attendu et le code HTML utilise les notions étudiées dans les 6 tutoriels.

# Partie 4 — Bilan

**Vous avez réalisé :** la structure de base du fichier HTML de la page détaille d’un article.

**Vous savez maintenant :** créer un document HTML avec `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` et l’attribut `lang`.

Vous savez également comment la page finale sera construite progressivement pendant les 6 tutoriels.

# Partie 5 — Glossaire

* **HTML** : langage utilisé pour structurer une page Web.
* **Document HTML** : fichier qui contient la structure d’une page Web.
* **Élément** : partie d’un document HTML définie par une balise.
* **Attribut** : information ajoutée à un élément HTML.
* **Navigateur** : logiciel utilisé pour afficher une page Web.
* **Chemin relatif** : chemin qui indique l’emplacement d’un fichier à partir du fichier courant.
