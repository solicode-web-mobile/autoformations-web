---
layout: conception
title: "Relations et cardinalités — Blog"
tuto_id: "T.112.141"
permalink: /code/conception/T.112.141/
nav_exclude: true
---

## Relations identifiées

| Entité A     | Cardinalité A | Verbe      | Cardinalité B | Entité B   |
| ------------ | :-----------: | ---------- | :-----------: | ---------- |
| VILLE        | 1,N           | habite     | 1,1           | AUTEUR     |
| AUTEUR       | 1,N           | rédige     | 1,1           | ARTICLE    |
| CATEGORIE    | 1,N           | regroupe   | 1,1           | ARTICLE    |
| ARTICLE      | 0,N           | possède    | 0,N           | TAG        |

## Règles de gestion

- Une ville peut accueillir plusieurs auteurs. Un auteur habite dans une seule ville.
- Un auteur peut rédiger plusieurs articles. Un article est rédigé par un seul auteur.
- Une catégorie regroupe plusieurs articles. Un article appartient à une seule catégorie.
- Un article peut avoir plusieurs tags. Un tag peut être associé à plusieurs articles.
