# Domaine HTML & Sémantique (`domaine-html`)

> **Ressource Didactique — Spartel N1**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Balises sémantiques, accessibilité, structure de documents, formulaires.

---

## 1. Règle HTML Pur Sans CSS
- La propriété `data_css` doit rester strictement vide (`data_css: ""`).
- L'apprenant doit impérativement observer le rendu visuel brut fourni par le navigateur pour comprendre le rôle sémantique de chaque balise (`<h1>`, `<p>`, `<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`).

---

## 2. Script Éditeur Obligatoire
Dès qu'un tutoriel HTML initialise un champ `data_html`, insérer systématiquement le script d'initialisation sous le Front Matter :

```html
<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>
```

---

## 3. Progression Didactique N1
Structure minimale d'une page (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`) → Titres et paragraphes → Liens et images → Listes → Balises sémantiques structurelles → Formulaires et champs de saisie.
