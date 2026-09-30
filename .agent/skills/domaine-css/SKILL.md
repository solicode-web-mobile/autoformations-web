---
name: domaine-css
description: >-
  Expert en règles de rédaction pour les tutoriels du domaine CSS.
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié à CSS.
---

# Règles de rédaction - Domaine CSS

Ce skill définit les règles spécifiques à appliquer lors de la rédaction, de la simplification ou de la modification de tutoriels appartenant au domaine CSS (comme les tutoriels liés au domaine D.122.2).

## 1. Affichage explicite des Données de départ
Dans les tutoriels CSS, **il est obligatoire d'afficher explicitement les blocs de code des "Données de départ"** (HTML et CSS) dans le corps du tutoriel, sous la section éponyme.
* Même s'il est mentionné que "(Les données de départ sont chargées automatiquement dans l’éditeur de code de l’interface)", vous **devez** inclure les blocs de code source Markdown pour que l'apprenant puisse les lire et s'y référer directement dans la page.

## 2. Exécutabilité des Exemples (Éditeur Intégré)
Les exemples doivent pouvoir être testés en direct par les apprenants.
Vous devez obligatoirement ajouter le script permettant de configurer notre éditeur dans les tutoriels (généralement sous le front matter) :

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
