---
title: "Comprendre les concepts de base : Git et GitHub"
layout: tuto
slug: "concepts-base-git-github"
permalink: /tutos/:slug/detaille
tuto_id: "T.151.112"
type: "classique"
version: "detaille"
ua: "UA.151.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Comprendre la différence entre **Git**, l'outil logiciel, et **GitHub**, le service en ligne.

À la fin du tutoriel, vous saurez expliquer où se trouve votre travail et pourquoi ces deux outils sont distincts.

## 2. Prérequis

Aucun prérequis technique.

## Partie 1 — Théorie : Git et GitHub

### 1.1. Git, le moteur local

**Git** est un logiciel gratuit et open-source.

Il s'installe directement sur votre ordinateur.

Son but est de surveiller vos fichiers et d'enregistrer leurs changements.

Il crée un historique complet et sécurisé de votre projet.

Tout se passe en privé, sur le disque dur de votre ordinateur.

Il n'a pas besoin de connexion Internet pour fonctionner.

### 1.2. GitHub, le service d'hébergement

**GitHub** est une plateforme web gérée par une entreprise commerciale.

C'est un site Internet conçu pour héberger des projets Git.

Il existe d'autres sites similaires, comme GitLab ou Bitbucket.

Vous utilisez GitHub pour :

* sauvegarder une copie de votre projet sur Internet ;
* rendre votre code visible publiquement ;
* travailler à plusieurs sur le même code ;
* montrer votre travail à des recruteurs ou à des formateurs.

### 1.3. Différence fondamentale

Ne confondez pas le moteur et le garage.

Git est le moteur qui fait fonctionner votre historique.

GitHub est le garage virtuel où vous garez votre projet pour le montrer au monde.

### 1.4. La synchronisation (Push et Pull)

Puisque Git et GitHub sont séparés, il faut les synchroniser.

Le **dépôt local** (sur votre ordinateur) et le **dépôt distant** (sur GitHub) échangent des données.

* L'envoi de votre ordinateur vers Internet s'appelle un **Push**.
* La réception d'Internet vers votre ordinateur s'appelle un **Pull**.

### 1.5. Le fonctionnement global

Le cycle de vie de votre code ressemble à ceci :

```text
Votre ordinateur
       │
       │ Travail privé (Git)
       ▼
Dépôt local
       │
       │ Envoi sur Internet (Push)
       ▼
GitHub
       │
       ▼
Dépôt distant public ou privé
```

### 1.6. À retenir

* **Git** est un outil installé sur votre ordinateur.
* **GitHub** est un site web.
* Git fonctionne sans Internet, GitHub a besoin d'Internet.
* Vous pouvez utiliser Git sans jamais utiliser GitHub.
* Vous synchronisez votre travail local vers GitHub avec des commandes spécifiques.

### Résultat attendu

Le schéma suivant présente la relation entre Git, le dépôt local, GitHub et le dépôt distant.

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-2-git.html' | relative_url}}"
    height="200"
    title="Git et GitHub">
</iframe>

## Bilan

**Vous avez réalisé :**

La compréhension détaillée de la séparation entre l'outil de gestion local et la plateforme d'hébergement en ligne.

**Vous savez maintenant :**

* distinguer Git et GitHub ;
* comprendre que d'autres alternatives à GitHub existent ;
* expliquer les concepts de dépôt local et distant ;
* comprendre le principe de synchronisation (Push/Pull).

## Glossaire

* **Git** : logiciel open-source de gestion de versions.
* **GitHub** : service web commercial d'hébergement de dépôts Git.
* **Dépôt local** : dépôt Git enregistré sur le disque dur de l'ordinateur.
* **Dépôt distant** : dépôt Git hébergé sur un serveur distant (Internet).
* **Push** : action d'envoyer des données locales vers un serveur distant.
* **Pull** : action de récupérer des données depuis un serveur distant vers l'ordinateur.
