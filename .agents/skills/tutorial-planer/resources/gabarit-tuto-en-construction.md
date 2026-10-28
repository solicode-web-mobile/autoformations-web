# Gabarit — Fichier Stub de Tutoriel (`en_construction: true`)

Ce gabarit est utilisé par `tutorial-planer` pour initialiser physiquement chaque fichier de tutoriel planifié sous `_tutos/[Domaine]/[UA]/[Code-Tuto]/[slug].md`.

## Emplacement Cible

`_tutos/[Domaine]/[UA]/[Code-Tuto]/[slug].md`

Exemple :  
`_tutos/D.123.1-php/UA.123.15/T.123.151/declarer-fonction-instruction-return.md`

## Structure du Fichier

Le fichier est composé exclusivement de son Front Matter YAML avec `en_construction: true`. Le corps du document reste vierge jusqu'à la prise en charge par `tutorial-writer`.

```yaml
---
layout: tuto
title: "[Titre équilibré du tutoriel — un seul objectif technique concret]"
sous_titre: "[Sous-titre logique / pédagogique explicitant l'action]"
slug: "[slug-kebab-case-sans-accents]"
permalink: /tutos/[slug-kebab-case-sans-accents]/
tuto_id: "[T.XXX.YYY]"
version: "normal"
ua: "[UA.XXX.YY]"
nav_order: [numéro d'ordre dans l'UA : 1, 2, 3...]
simplified: true
en_construction: true
data_html: ""
data_css: ""
data_js: ""
data_php: ""
---
```

## Règles d'Implémentation

1. **Encodage Strict :** UTF-8 sans BOM.
2. **Corps vide :** Aucun texte en dessous de `---`. Le layout Jekyll `_layouts/tuto.html` affiche automatiquement l'avertissement de chantier (🚧).
3. **Indexation & Navigation :** Renseigner rigoureusement `ua` et `nav_order` pour assurer la navigation croisée et l'apparition dans la liste des tutoriels de l'UA.
4. **Prise en charge ultérieure :** Dès que `tutorial-writer` rédige le contenu complet et vérifié, il passera `en_construction: false` (ou supprimera le champ).
