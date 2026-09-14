---
title: "Ignorer des fichiers avec .gitignore"
layout: tuto
slug: "gitignore"
permalink: /tutos/:slug/compact
tuto_id: "T.151.141"
type: "classique"
version: "compact"
ua: "UA.151.14"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Créer un fichier `.gitignore`.

## 2. Prérequis

* Un projet géré avec Git.

## Partie 1 — Pratique

### 1.1. Créer le fichier

Créez un fichier nommé `.gitignore` à la racine de votre projet.

### 1.2. Ajouter les règles

Ajoutez le nom des fichiers à ignorer :

```text
.DS_Store
Thumbs.db
node_modules/
.env
```

### 1.3. Enregistrer

Ouvrez le terminal.

Exécutez :

```bash
git add .gitignore
git commit -m "Ajouter le fichier .gitignore"
```

### Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-8-git.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel .gitignore">
</iframe>

## Bilan

**Vous avez réalisé :** La création d'un fichier `.gitignore`.

**Vous savez maintenant :** exclure des fichiers.

## Glossaire

* **`.gitignore`** : fichier contenant les règles d'exclusion.
