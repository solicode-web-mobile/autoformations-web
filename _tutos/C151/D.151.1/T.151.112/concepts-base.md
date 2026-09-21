---
title: "Comprendre les concepts de base : Git et GitHub"
layout: tuto
slug: "concepts-base-git-github"
permalink: /tutos/:slug/
tuto_id: "T.151.112"
type: "classique"
version: "normal"
ua: "UA.151.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Objectif

Comprendre la différence entre **Git** (sur votre ordinateur) et **GitHub** (sur Internet), et comment ils fonctionnent ensemble.

## 2. Prérequis

Aucun prérequis technique. Il suffit de connaître les notions de fichier et de projet.

## Partie 1 — Théorie

### 1.1. Git vs GitHub — deux outils distincts

| | **Git** | **GitHub** |
|---|---|---|
| **Où ?** | Sur votre ordinateur | Sur Internet |
| **Quoi ?** | Outil de gestion de versions | Plateforme d'hébergement |
| **Connexion Internet ?** | ❌ Non requise | ✅ Requise |
| **Rôle principal** | Enregistrer l'historique du projet | Héberger et partager le dépôt |

> **Git n'est pas GitHub.** Git est l'outil. GitHub est un service qui utilise Git.

### 1.2. Dépôt local et dépôt distant

Git crée un **dépôt local** sur votre ordinateur. GitHub peut héberger une copie de ce dépôt en ligne : c'est le **dépôt distant**. Les deux peuvent être synchronisés.

```mermaid
flowchart LR
    A["💻 Votre ordinateur\n(Working Directory)"] -->|git commit| B["📦 Dépôt local\n(Git)"]
    B -->|git push| C["☁️ Dépôt distant\n(GitHub)"]
    C -->|git pull| B
    C --> D["👥 Collaborateurs\nFormateur / Équipe"]
```

## Partie 2 — Pratique

### Exercice de compréhension

Associez chaque action à l'outil utilisé (Git ou GitHub) :

| Action | Git ou GitHub ? |
|--------|----------------|
| Enregistrer un commit sur votre ordinateur | |
| Consulter un dépôt d'un collègue sur Internet | |
| Créer l'historique d'un projet sans connexion | |
| Envoyer votre code pour le partager en ligne | |

### Résultat attendu

<iframe
    class="auto-wrapper"
    src="{{'/code/git/T.151.112.html' | relative_url}}"
    height="310"
    title="Git et GitHub — schéma de relation">
</iframe>

### Critère de réussite

Vous pouvez expliquer avec vos mots la différence entre Git et GitHub, et entre un dépôt local et un dépôt distant.

## Bilan

**Vous savez maintenant :**
* Distinguer **Git** (outil local) et **GitHub** (plateforme en ligne).
* Distinguer un **dépôt local** et un **dépôt distant**.
* Comprendre comment Git et GitHub se complètent : on travaille localement avec Git, puis on synchronise vers GitHub.

## Glossaire

* **Git** : Outil de gestion de versions, installé sur l'ordinateur.
* **GitHub** : Plateforme en ligne hébergeant des dépôts Git.
* **Dépôt local** : Copie du projet gérée par Git sur votre ordinateur.
* **Dépôt distant** : Copie du projet hébergée sur un serveur (ex: GitHub).
* **`git push`** : Envoyer les commits locaux vers le dépôt distant.
* **`git pull`** : Récupérer les changements du dépôt distant vers le dépôt local.
