---
title: "Les règles de sécurité avant de valider un commit"
layout: tuto
slug: "securite-commit"
permalink: /tutos/:slug/compact
tuto_id: "T.151.142"
type: "classique"
version: "compact"
ua: "UA.151.14"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Vérifier ses modifications avant de valider.

## 2. Prérequis

* Un projet géré avec Git.
* Une modification locale non préparée.

## Partie 1 — Pratique

### 1.1. Vérifier les fichiers modifiés

Exécutez :

```bash
git status
```

### 1.2. Lire les modifications

Exécutez :

```bash
git diff
```

Lisez les lignes avec un `+` pour voir ce que vous avez ajouté.

Si vous avez écrit un mot de passe, supprimez-le de votre code.

### 1.3. Valider

Une fois vérifié, exécutez :

```bash
git add nom-du-fichier
git commit -m "Décrire la modification"
```

### Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-9-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel git diff">
</iframe>

## Bilan

**Vous avez réalisé :** Une vérification de sécurité.

**Vous savez maintenant :** utiliser `git diff`.

## Glossaire

* **`git diff`** : affiche les modifications non préparées.
