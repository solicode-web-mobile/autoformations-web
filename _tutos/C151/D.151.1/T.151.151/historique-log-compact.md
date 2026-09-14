---
title: "Lire l'historique du projet avec git log"
layout: tuto
slug: "historique-log"
permalink: /tutos/:slug/compact
tuto_id: "T.151.151"
type: "classique"
version: "compact"
ua: "UA.151.15"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Consulter l'historique des commits.

## 2. Prérequis

* Un projet Git avec au moins un commit.

## Partie 1 — Pratique

### 1.1. Historique complet

Exécutez :

```bash
git log
```

Appuyez sur `q` pour quitter l'affichage si la liste est longue.

### 1.2. Historique résumé

Exécutez :

```bash
git log --oneline
```

Chaque commit s'affiche sur une seule ligne.

### Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-10-git.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel git log">
</iframe>

## Bilan

**Vous avez réalisé :** La consultation de l'historique.

**Vous savez maintenant :** utiliser `git log` et `--oneline`.

## Glossaire

* **`git log`** : affiche l'historique.
