---
title: "Mettre à jour son ordinateur avec git pull"
layout: tuto
slug: "mettre-a-jour-pull"
permalink: /tutos/:slug/compact
tuto_id: "T.151.132"
type: "classique"
version: "compact"
ua: "UA.151.13"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Récupérer les changements du dépôt distant avec `git pull`.

## 2. Prérequis

* Un projet lié à GitHub.
* Une connexion Internet.

## Partie 1 — Pratique

### 1.1. Mettre à jour le projet

Ouvrez le terminal.

Exécutez :

```bash
git pull
```

Git télécharge et intègre les nouveautés de GitHub dans votre ordinateur.

### 1.2. Vérifier l'état final

Exécutez :

```bash
git status
```

Le dépôt doit être à jour.

### Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-7-git.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel Git pull">
</iframe>

## Bilan

**Vous avez réalisé :** La mise à jour d'un projet local.

**Vous savez maintenant :** utiliser `git pull`.

## Glossaire

* **`git pull`** : télécharge les changements distants.
