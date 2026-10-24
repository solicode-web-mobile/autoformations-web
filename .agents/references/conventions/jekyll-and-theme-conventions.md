# Architecture Jekyll & Synchronisation Core Theme

> **Document de référence local — Connaissances Passives Techniques**  
> **Composant :** Recyclage technique de `dev-jekyll` et `sync-theme`

---

## 1. Organisation des Assets

```text
assets/
├── css/
│   ├── base.css           # Styles partagés, composants communs (_includes)
│   ├── mission.css        # Styles spécifiques au layout mission
│   ├── competence.css     # Styles spécifiques au layout competence
│   ├── domaine.css        # Styles spécifiques au layout domaine
│   ├── ua.css             # Styles spécifiques au layout ua
│   ├── session.css        # Styles spécifiques au layout session
│   ├── tuto.css           # Styles spécifiques au layout tuto
│   ├── prototype.css      # Styles spécifiques au layout prototype
│   ├── lab.css            # Styles spécifiques au layout lab
│   └── projet.css         # Styles spécifiques au layout projet
└── js/
    ├── formation.js
    ├── afficher-editor.js
    └── code-to-iframe.js
```

---

## 2. Règles Strictes de Style & CSS

- **Interdiction du CSS Inline :** Aucune balise `<style>` ni attribut `style="..."` dans les layouts ou includes. Tout le CSS réside dans `assets/css/`.
- **Composants partagés dans `base.css` :** Tout composant inclus dans plusieurs layouts (ex: cartes, listes de tutoriels) doit avoir ses règles CSS dans `base.css`.
- **Chargement dynamique par Layout :**
  ```liquid
  <link rel="stylesheet" href="{{ '/assets/css/base.css' | relative_url }}">
  {% assign css_layouts = 'mission,competence,domaine,ua,session,tuto,prototype,lab,projet' | split: ',' %}
  {% if css_layouts contains page.layout %}
  <link rel="stylesheet" href="{{ '/assets/css/' | append: page.layout | append: '.css' | relative_url }}">
  {% endif %}
  ```

---

## 3. Précautions Liquid & JavaScript (`jsonify`)

- Le filtre Liquid `| jsonify` ajoute automatiquement les guillemets nécessaires autour des chaînes de caractères.
- **Interdiction :** Ne jamais entourer `{{ variable | jsonify }}` de guillemets manuels (`"{{ variable | jsonify }}"` génère une erreur de syntaxe `""valeur""`).
- **Gestion des valeurs vides :** Ne pas utiliser `default: ""` avant `jsonify` (qui produirait `"\"\""`). Laisser `| jsonify` pour obtenir un `null` JavaScript natif.
- **Données multilignes :** Utiliser systématiquement `jsonify` pour transmettre du HTML, CSS ou JS multiligne depuis le frontmatter vers JavaScript sans casser les retours à la ligne.

---

## 4. Synchronisation avec le Core Theme Partagé (`theme-sync.json`)

Le projet partage son socle technique avec d'autres plateformes d'autoformation via le dépôt central `autoformations-core-theme`.

- **Configuration :** Fichier `theme-sync.json` définissant `sync_directories` (ex: `_includes`, `assets/css`) et `sync_files`.
- **Scripts de synchronisation :**
  - `push_theme.ps1` : Propage les améliorations locales vers le dépôt parent `../autoformations-core-theme`.
  - `pull_theme.ps1` : Récupère les mises à jour depuis le dépôt parent.
- **Règle de sécurité IA :**  
  L'agent IA ne doit **JAMAIS exécuter automatiquement** `push_theme.ps1` ou `pull_theme.ps1`. L'exécution doit rester une décision explicite et manuelle du développeur.
- **Portée :** N'ajouter au `theme-sync.json` que des éléments génériques réutilisables. Les éléments propres au cursus web local restent exclus du socle partagé.
