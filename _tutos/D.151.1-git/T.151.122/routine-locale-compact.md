---
title: "La routine locale du développeur (Terminal)"
layout: tuto
slug: "routine-locale"
permalink: /tutos/:slug/compact
tuto_id: "T.151.122"
type: "classique"
version: "compact"
ua: "UA.151.12"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Créer un commit local avec le terminal.

## 2. Prérequis

* Un dépôt Git et un fichier modifié.

## Partie 1 — Pratique

### 1.1. Vérifier l'état

Ouvrez le terminal.

Exécutez :

```bash
git status
```

### 1.2. Préparer

Ajoutez le fichier :

```bash
git add index.html
```

Vérifiez :

```bash
git status
```

### 1.3. Créer le commit

Validez :

```bash
git commit -m "Ajouter le titre de la page"
```

Vérifiez que le dépôt est propre :

```bash
git status
```

### Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-5-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel Git">
</iframe>

## Bilan

**Vous avez réalisé :** Le cycle local complet.

**Vous savez maintenant :** utiliser `status`, `add` et `commit`.

## Glossaire

* **`git status`** : affiche l'état.
* **`git add`** : prépare.
* **`git commit`** : sauvegarde.
