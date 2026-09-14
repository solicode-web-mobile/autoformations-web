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
---

## 1. Objectif

Comprendre la différence entre **Git**, utilisé sur l'ordinateur, et **GitHub**, utilisé sur Internet.

À la fin du tutoriel, vous saurez expliquer où se trouve votre travail avec Git et avec GitHub.

## 2. Prérequis

Aucun prérequis technique.

Vous devez seulement connaître :

* un ordinateur ;
* les notions de fichier et de projet.

## Partie 1 — Théorie : Git et GitHub

### 1.1. Git sur l'ordinateur

**Git** est un outil installé sur votre ordinateur.

Il permet de suivre les changements d'un projet et d'enregistrer différents états du projet dans un historique.

Ces informations sont enregistrées dans le dépôt Git local.

Vous pouvez utiliser Git même sans connexion Internet.

### 1.2. GitHub sur Internet

**GitHub** est une plateforme en ligne.

Elle permet d'héberger des dépôts Git sur Internet.

Vous pouvez utiliser GitHub pour :

* conserver une copie du dépôt sur Internet ;
* partager un projet ;
* travailler avec d'autres développeurs ;
* permettre à un formateur ou à une équipe d'accéder au projet.

GitHub n'est donc pas Git.

Git est l'outil utilisé sur votre ordinateur.

GitHub est le service en ligne qui peut héberger votre dépôt Git.

### 1.3. Local et distant

#### Le dépôt local

Le dépôt local se trouve sur votre ordinateur.

Vous pouvez y :

* modifier les fichiers ;
* enregistrer des commits ;
* consulter l'historique.

#### Le dépôt distant

Le dépôt distant peut être hébergé sur GitHub.

Il se trouve sur Internet.

Vous pouvez envoyer les commits de votre dépôt local vers le dépôt distant.

Vous pouvez aussi récupérer les changements présents sur le dépôt distant.

### 1.4. Git et GitHub travaillent ensemble

Le fonctionnement peut être représenté simplement :

```text
Votre ordinateur
       │
       │ Git
       ▼
Dépôt local
       │
       │ Synchronisation
       ▼
GitHub
       │
       ▼
Dépôt distant
```

Git permet de gérer l'historique local.

GitHub permet notamment d'héberger et de partager le dépôt à distance.

### 1.5. À retenir

* **Git** est un outil installé sur votre ordinateur.
* **Git** gère l'historique de votre projet.
* **GitHub** est une plateforme en ligne.
* **GitHub** peut héberger un dépôt Git distant.
* Le dépôt local et le dépôt distant peuvent être synchronisés.

**Résultat attendu :**

Le schéma suivant présente la relation entre Git, le dépôt local, GitHub et le dépôt distant.

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-2-git.html' | relative_url}}"
    height="200"
    title="Git et GitHub">
</iframe>

## Bilan

**Vous avez réalisé :**

La compréhension de la différence entre Git sur l'ordinateur et GitHub sur Internet.

**Vous savez maintenant :**

* distinguer Git et GitHub ;
* distinguer un dépôt local et un dépôt distant ;
* comprendre que Git travaille localement ;
* comprendre que GitHub peut héberger le dépôt distant ;
* comprendre pourquoi Git et GitHub peuvent être utilisés ensemble.

## Glossaire

* **Git** : outil de gestion de versions utilisé notamment sur l'ordinateur.
* **GitHub** : plateforme en ligne qui permet notamment d'héberger des dépôts Git.
* **Dépôt local** : dépôt Git enregistré sur l'ordinateur.
* **Dépôt distant** : dépôt Git hébergé sur un serveur distant.
* **Commit** : enregistrement d'un état du projet dans l'historique Git.
* **Synchronisation** : opération permettant d'échanger des changements entre un dépôt local et un dépôt distant.
