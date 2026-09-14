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

Comprendre de manière simple et visuelle la différence entre votre outil de travail local (Git) et le serveur distant sur Internet (GitHub).

## 2. Prérequis

* Aucun prérequis technique, ce tutoriel est 100 % théorique.

## Partie 1 — Théorie : Git vs GitHub

### 1.1. L'appareil photo et l'album en ligne

Pour bien comprendre la séparation entre Git et GitHub, utilisons une comparaison très simple :

* **Git**, c'est **l'appareil photo**. Il est installé sur votre ordinateur. Vous l'utilisez pour prendre des clichés (des sauvegardes) de votre code à des moments précis. Tout reste privé et stocké sur votre ordinateur.
* **GitHub**, c'est **l'album photo en ligne**. C'est un site web (un serveur distant) où vous publiez les clichés que vous avez pris avec votre appareil photo (Git). Cela permet de les mettre en sécurité sur Internet et de les partager avec votre formateur ou d'autres développeurs.

### 1.2. Travailler en local vs Travailler en distant

**Le travail en Local (Git) :**
Lorsque vous travaillez sur votre ordinateur, même sans connexion Internet, vous pouvez utiliser Git pour sauvegarder vos avancées. Ces sauvegardes constituent votre historique local.

**Le travail en Distant (GitHub) :**
Lorsque vous avez terminé une étape importante, vous envoyez votre historique local vers GitHub. C'est ce qu'on appelle la synchronisation avec le dépôt distant.

### 1.3. À retenir

- **Git** = L'outil local (sur votre ordinateur) pour créer des sauvegardes de votre code.
- **GitHub** = Le site web (sur Internet) pour héberger et partager ces sauvegardes.

**Résultat attendu :**

Ce schéma résume la différence fondamentale entre les deux outils :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-2-git.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel 2">
</iframe>

## Bilan

**Vous avez réalisé :** L'assimilation du modèle mental qui sépare l'outil Git de la plateforme GitHub.

**Vous savez maintenant :** Que vos sauvegardes Git restent sur votre ordinateur jusqu'à ce que vous décidiez volontairement de les publier sur Internet via GitHub.
