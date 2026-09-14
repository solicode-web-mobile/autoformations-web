---
title: "Installer et configurer Git sur son ordinateur"
layout: tuto
slug: "installer-git"
permalink: /tutos/:slug/compact
tuto_id: "T.151.111"
type: "classique"
version: "compact"
ua: "UA.151.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Installer Git et configurer son identité.

## 2. Prérequis

* Un terminal.
* Une connexion Internet.

## Partie 1 — Théorie

### 1.1. Git

Git enregistre l'historique d'un projet.

### 1.2. L'identité Git

Git utilise un nom et un email pour identifier l'auteur.

## Partie 2 — Pratique

### 2.1. Vérifier l'installation

#### Étape 1 — Vérifier Git

```bash
git --version
```

(Si Git n'est pas installé, téléchargez-le sur git-scm.com).

### 2.2. Configurer son identité

#### Étape 2 — Nom

```bash
git config --global user.name "Prénom Nom"
```

#### Étape 3 — Email

```bash
git config --global user.email "email@exemple.com"
```

### 2.3. Vérifier la configuration

#### Étape 4 — Vérification

```bash
git config --global user.name
git config --global user.email
```

### Résultat final

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-1-git.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel Git">
</iframe>

## Bilan

**Vous avez réalisé :**

L'installation de Git et la configuration de votre identité.

**Vous savez maintenant :**

* installer Git ;
* configurer votre identité.

## Glossaire

* **Git** : outil de gestion de versions.
* **Commit** : enregistrement d'un état du projet.
