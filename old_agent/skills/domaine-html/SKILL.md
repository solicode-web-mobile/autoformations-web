---
name: domaine-html
description: >-
  Expert en règles de rédaction pour les tutoriels du domaine HTML (html).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié à HTML.
---

# Règles de rédaction - Domaine HTML

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels appartenant au domaine HTML (comme les tutoriels liés au domaine D.122.1).

## 1. Apprentissage du HTML pur (Aucun CSS)
L'objectif du domaine HTML est de se concentrer exclusivement sur la structure et la sémantique.
* **Règle générale stricte** : Il ne faut **jamais** ajouter de code CSS dans les tutoriels du domaine HTML (la propriété `data_css` doit rester vide : `data_css: ""`). L'apprenant doit apprendre et voir le HTML pur, sans artifice visuel, pour bien en comprendre la nature.

## 2. Exécutabilité des Exemples (Éditeur Intégré)
Les exemples doivent pouvoir être testés en direct par les apprenants.
* **Configuration de l'éditeur** : Les exemples doivent être exécutables dans notre éditeur intégré. Vous devez obligatoirement ajouter le script permettant de configurer notre éditeur dans les tutoriels pour que le code HTML/CSS soit interprété et affiché en temps réel à l'apprenant.

**Exemple de script de configuration à ajouter systématiquement (généralement sous le front matter) :**

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

## Procédure de vérification du rédacteur
Avant de finaliser un tutoriel HTML, vérifiez que :
> "Est-ce que j'ai bien laissé le code CSS vide (pour se concentrer sur le HTML pur) ? Le script de configuration de l'éditeur est-il bien présent pour que l'apprenant puisse tester le code HTML ?"
