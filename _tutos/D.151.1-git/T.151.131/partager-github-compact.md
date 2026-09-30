---
title: "Partager son travail sur Internet avec git push"
layout: tuto
slug: "partager-github"
permalink: /tutos/:slug/compact
tuto_id: "T.151.131"
type: "classique"
version: "compact"
ua: "UA.151.13"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Envoyer un commit local vers GitHub avec la commande `git push`.

## 2. Prérequis

* Avoir un projet Git cloné.
* Avoir créé un commit local.

## Partie 1 — Pratique

### 1.1. Vérifier le dépôt distant

Ouvrez le terminal.

Exécutez :

```bash
git remote -v
```

Git affiche l'adresse (URL) de votre projet sur GitHub sous le nom `origin`.

### 1.2. Envoyer le commit

Exécutez :

```bash
git push
```

Git envoie votre commit local vers GitHub.

### 1.3. Vérifier

Exécutez :

```bash
git status
```

Le dépôt local doit être propre.

### Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-6-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel Git push">
</iframe>

## Bilan

**Vous avez réalisé :** L'envoi d'un commit avec `git push`.

**Vous savez maintenant :** utiliser `git remote -v` et `git push`.

## Glossaire

* **`origin`** : nom du dépôt distant.
* **Push** : envoi des commits.
