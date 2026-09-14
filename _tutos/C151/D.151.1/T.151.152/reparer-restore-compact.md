---
title: "Réparer une erreur avant le commit avec git restore"
layout: tuto
slug: "reparer-restore"
permalink: /tutos/:slug/compact
tuto_id: "T.151.152"
type: "classique"
version: "compact"
ua: "UA.151.15"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Annuler les modifications non préparées d'un fichier.

## 2. Prérequis

* Un fichier modifié après le dernier commit.

## Partie 1 — Pratique

### 1.1. Vérifier l'état

Exécutez :

```bash
git status
```

### 1.2. Restaurer le fichier

Si un fichier est modifié en rouge, annulez la modification avec :

```bash
git restore nom-du-fichier
```

### 1.3. Vérifier le résultat

Exécutez :

```bash
git status
```

Le fichier ne doit plus apparaître comme modifié.

### Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-11-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel git restore">
</iframe>

## Bilan

**Vous avez réalisé :** L'annulation d'une modification.

**Vous savez maintenant :** utiliser `git restore`.

## Glossaire

* **`git restore`** : annule les modifications non préparées.
