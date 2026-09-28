---
title: "Structure d’un document HTML"
layout: tuto
slug: "structure-document-html"
permalink: /tutos/:slug/
tuto_id: "T.122.111"
type: "classique"
version: "normal"
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

Créer la structure de base obligatoire d’un document HTML, puis y ajouter un titre et un paragraphe.

## 2. Prérequis

* Avoir installé Visual Studio Code.
* Savoir créer un fichier avec l'extension `.html`.

## Partie 1 — Théorie

### 1.1. La structure minimale

Tout document HTML commence par une structure de base obligatoire. C'est le "squelette" de votre page.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- Les informations techniques cachées -->
</head>
<body>
    <!-- Le contenu visible par l'utilisateur -->
</body>
</html>
```

### 1.2. Rôle de chaque élément

- `<!DOCTYPE html>` indique au navigateur que nous utilisons la dernière version du langage (HTML5).
- `<html>` est l’élément racine qui englobe toute la page. `lang="fr"` précise que le site est en français.
- `<head>` contient les informations techniques (comme le `<title>` qui s'affiche dans l'onglet du navigateur).
- `<body>` contient tout le contenu visible sur l'écran (le texte, les images, etc.).

### 1.3. L'affichage d'un paragraphe

À l'intérieur de la balise `<body>`, nous utilisons la balise `<p>` pour créer un paragraphe de texte.

```html
<body>
    <p>Bonjour le monde !</p>
</body>
```

### 1.4. À retenir

* `<!DOCTYPE html>` se met tout en haut de la page.
* Une page est toujours divisée en deux parties : `<head>` (invisible) et `<body>` (visible), toutes deux contenues dans `<html>`.

## Partie 2 — Pratique

### 2.1. Créer le fichier

Dans VS Code, créez un fichier nommé :

```text
tuto-1-html.html
```

### 2.2. Ajouter la structure de base

Copiez ou tapez la structure de base suivante dans votre fichier :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Mon premier article</title>
</head>
<body>
</body>
</html>
```

*Note : Ici, la balise `<title>` donne le nom "Mon premier article" à l'onglet de votre navigateur.*

### 2.3. Ajouter le contenu visible

Dans la balise `<body>`, ajoutez un paragraphe avec le texte de votre choix. 

Par exemple :

```html
<body>
    <p>Le développeur crée des applications.</p>
</body>
```

### 2.4. Tester la page

Enregistrez le fichier (`Ctrl + S`).
Ouvrez le fichier `tuto-1-html.html` dans votre navigateur web (double-clic sur le fichier depuis votre explorateur Windows).

**Résultat attendu :**

L'onglet du navigateur indique "Mon premier article", et la page affiche la phrase.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-1/tuto-1-html.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel 1 : HTML">
</iframe>

## 3. Bilan

**Vous avez réalisé :** une première page HTML complète avec sa structure de base et un paragraphe.

**Vous savez maintenant :** séparer la partie technique (`<head>`) de la partie visible (`<body>`), et utiliser la balise `<p>` pour afficher du texte.

## 4. Glossaire

* **Balise** : un mot-clé entouré de chevrons (`<` et `>`) utilisé pour structurer une page web.
* **`<head>`** : en-tête du document, contenant les métadonnées.
* **`<body>`** : corps du document, contenant les éléments affichés à l'écran.
* **`<p>`** : balise paragraphe.
