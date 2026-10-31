---
title: "Comprendre les concepts de base : Git et GitHub"
layout: tuto
slug: "concepts-base-git-github"
permalink: /tutos/concepts-base-git-github/
tuto_id: "T.151.112"
type: "classique"
version: "normal"
ua: "UA.151.11"
domain: "D.151.1"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Contexte & Objectif

- **Objectif :** Comprendre la différence fondamentale entre Git (l'outil local sur votre ordinateur) et GitHub (la plateforme de partage sur Internet), et appréhender le lien entre dépôt local et dépôt distant.
- **Prérequis :** Avoir installé et configuré Git (tutoriel T.151.111).

---

## 2. Théorie Pas-à-Pas

### 2.1. Git vs GitHub — deux outils distincts

Beaucoup de débutants confondent Git et GitHub. Voici leur distinction concrète :

| Critère | Git | GitHub |
|---|---|---|
| **Où s'exécute-t-il ?** | Sur votre ordinateur | Sur Internet (dans le cloud) |
| **Qu'est-ce que c'est ?** | Un logiciel de gestion de versions | Un site web d'hébergement de projets |
| **Connexion requise ?** | Non requise (fonctionne 100% hors-ligne) | Requise pour synchroniser et partager |
| **Rôle principal** | Enregistrer l'historique de votre code | Sauvegarder en ligne et collaborer |

> **À retenir :** Git est le moteur qui crée les sauvegardes. GitHub est le parking en ligne sécurisé où vous déposez une copie de votre projet.

### 2.2. Dépôt local et dépôt distant

Un **dépôt** (ou *repository*) est un dossier suivi par Git qui contient tous vos fichiers et l'historique complet de leurs versions :

- **Le dépôt local :** Il réside sur votre disque dur. Vous y travaillez librement même sans connexion Internet.
- **Le dépôt distant (`origin`) :** Il est hébergé sur les serveurs de GitHub. Il permet de retrouver son code depuis n'importe où et de le montrer à son formateur ou à son équipe.

```mermaid
flowchart LR
    A["💻 Votre ordinateur\n(Dossier de travail)"] -->|Valider localement| B["📦 Dépôt local\n(Git)"]
    B -->|Synchroniser (Push)| C["☁️ Dépôt distant\n(GitHub)"]
    C -->|Récupérer (Pull)| B
```

---

## 3. Pratique & Réalisation Guidée

Pour valider votre compréhension, complétez mentalement ou sur votre bloc-notes ce tableau d'association :

| Situation rencontrée | Outil concerné | Explication |
|---|---|---|
| Je code dans le train sans aucune connexion Internet | **Git** | Git fonctionne localement sur votre disque dur |
| Mon formateur consulte mon code depuis son ordinateur | **GitHub** | GitHub rend le code accessible en ligne |
| Je veux retrouver l'état de mon fichier hier à 14h | **Git** | L'historique local enregistre chaque commit |
| Mon disque dur tombe en panne, je veux récupérer mon projet | **GitHub** | La copie distante sécurise votre travail |

---

## 4. Critères de Réussite

- Vous savez formuler clairement la différence entre le logiciel Git et le service web GitHub.
- Vous distinguez sans hésitation le rôle du dépôt local (sur PC) et du dépôt distant (dans le cloud).
- Vous comprenez pourquoi on valide d'abord son travail en local avant de l'envoyer en ligne.

---

## 5. Glossaire

- **Git :** Outil de gestion de versions fonctionnant en local sur l'ordinateur.
- **GitHub :** Plateforme web qui héberge des dépôts Git distants sur Internet.
- **Dépôt local :** Dossier de projet contenant l'historique des sauvegardes sur votre machine.
- **Dépôt distant :** Version en ligne de votre dépôt stockée sur un serveur distant (nommé par défaut `origin`).
