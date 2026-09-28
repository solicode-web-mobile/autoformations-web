---
title: "Structure d’un document HTML"
layout: tuto
slug: "structure-document-html"
permalink: /tutos/:slug/compact
tuto_id: "T.122.111"
type: "classique"
version: "compact"
ua: "UA.122.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>

## 1. Objectif

Créer la structure de base d’un document HTML et y ajouter un titre et un paragraphe.

## 2. Prérequis

* Avoir installé VS Code.

## Partie 1 — Théorie

Tout document HTML commence par une structure obligatoire : `<html>` qui contient `<head>` (les paramètres invisibles) et `<body>` (le contenu visible).
Dans le `<body>`, la balise `<p>` permet de créer un paragraphe.

## Partie 2 — Pratique

### 2.1. Créer le fichier

Dans VS Code, créez un fichier `tuto-1-html.html`.

### 2.2. Ajouter le code

Copiez ce code complet :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Mon premier article</title>
</head>
<body>
    <p>Le développeur crée des applications.</p>
</body>
</html>
```

### 2.3. Tester la page

Enregistrez et ouvrez le fichier dans votre navigateur.

**Résultat attendu :** L'onglet affiche "Mon premier article" et la page contient la phrase.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-1/tuto-1-html.html' | relative_url}}"
    height="150"
    title="Résultat du tutoriel 1">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une page web minimale.
**Vous savez maintenant :** utiliser la structure standard (`html`, `head`, `body`) et la balise `<p>`.
