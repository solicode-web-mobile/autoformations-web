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


## 1. Objectif

Construire la structure de base d’un document HTML.

À la fin du tutoriel, vous avez un fichier HTML prêt à recevoir le contenu de la page.

## 2. Prérequis

* Savoir ouvrir un dossier de projet.
* Savoir créer un fichier.
* Avoir un éditeur de code.

# Partie 1 — Théorie

## 1.1. Structure d’un document HTML

Un document HTML a une structure de base.

Il contient trois grandes parties :

* `<!DOCTYPE html>` : indique que le document utilise HTML.
* `<html>` : contient tout le document HTML.
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

`lang` indique la langue du document.

Pour une page en français :

```html
<html lang="fr">
```

`fr` indique le français.

## 1.3. À retenir

* `<!DOCTYPE html>` indique le type du document.
* `<html>` contient le document.
* `<head>` contient les informations du document.
* `<body>` contient le contenu visible.
* `lang="fr"` indique que la page est en français.

# Partie 2 — Pratique

## 2.1. Créer le fichier HTML

### Étape 1 — Ouvrir le projet

Ouvrez le dossier du projet du Blog personnel.

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

Le document contient déjà la structure de base. Le contenu sera ajouté dans les tutoriels suivants.

**Résultat attendu :**

Le fichier `index.html` contient :

```text
<!DOCTYPE html>
<html lang="fr">
    <head>
    </head>
    <body>
    </body>
</html>
```

# 3. Bilan

**Vous avez réalisé :** la structure de base du fichier HTML de la page du Blog personnel.

**Vous savez maintenant :** créer un document HTML avec `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` et l’attribut `lang`.

# 4. Glossaire

* **HTML** : langage utilisé pour structurer une page Web.
* **Document HTML** : fichier qui contient la structure d’une page Web.
* **Élément** : partie d’un document HTML définie par une balise.
* **Attribut** : information ajoutée à un élément HTML.
* **Navigateur** : logiciel utilisé pour afficher une page Web.
