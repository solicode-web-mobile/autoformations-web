---
title: "Balise, élément et attribut HTML"
layout: tuto
slug: "balise-element-attribut-html"
permalink: /tutos/:slug/compact
tuto_id: "T.122.112"
type: "classique"
version: "compact"
ua: "UA.122.11"
nav_order: 2
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
    </head>
    <body>
        <p>Le développeur crée des applications.</p>
    </body>
    </html>
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

Comprendre le vocabulaire fondamental d'une page HTML (balise, élément, attribut).

## 2. Prérequis

* Connaître la structure de base `<html>`, `<head>`, `<body>`.

## Partie 1 — Théorie

Voici comment lire une ligne de code HTML :

```html
<html lang="fr">
```

* **La balise** : Le code entre chevrons (`<html>`). Il existe des balises ouvrantes (`<p>`) et fermantes (`</p>`).
* **L'élément** : Le bloc complet (balise ouvrante + contenu + balise fermante).
* **L'attribut** : La propriété ajoutée (`lang`) suivie de sa **valeur** (`"fr"`).

## Partie 2 — Pratique

### 2.1. Créer le fichier

Créez le fichier `tuto-2-html.html` et insérez le code de base :

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

### 2.2. Identifier le vocabulaire

Directement dans votre éditeur, identifiez mentalement :
1. L'attribut de la balise `html`.
2. L'élément complet `<p>`.

### 2.3. Tester la page

Enregistrez et ouvrez dans votre navigateur.

**Résultat attendu :**
La page s'affiche et votre code est correctement interprété.

<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-2/tuto-2-html.html' | relative_url}}"
    height="100"
    title="Résultat du tutoriel 2">
</iframe>

## 3. Bilan

**Vous savez maintenant :** utiliser les termes exacts pour lire et écrire du code HTML.
