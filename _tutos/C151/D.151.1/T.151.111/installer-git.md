---
title: "Installer et configurer Git sur son ordinateur"
layout: tuto
slug: "installer-git"
permalink: /tutos/:slug/
tuto_id: "T.151.111"
type: "classique"
version: "normal"
ua: "UA.151.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Installer le logiciel Git sur son poste de travail et s'identifier (nom et email) pour que ses futures sauvegardes soient correctement signées.

## 2. Prérequis

* Un ordinateur.
* Un terminal ouvert (ou l'invite de commandes).

## Partie 1 — Théorie

### 1.1. L'installation de Git

Git est un programme qui s'installe localement sur votre ordinateur. Une fois installé, il s'utilise principalement via des commandes écrites dans un terminal.

### 1.2. L'identification (Signature)

Git a besoin de savoir qui vous êtes. Chaque fois que vous ferez une sauvegarde de votre travail (un "commit"), Git associera cette sauvegarde à votre nom et à votre adresse email. 
La configuration `user.name` sert de **"signature" obligatoire** pour tous vos futurs travaux.

### 1.3. À retenir

- Git est un outil local.
- Configurer son nom et son email est indispensable pour valider ses sauvegardes.

## Partie 2 — Pratique

### 2.1. Installer Git (si non installé)

#### Étape 1 — Télécharger et installer

Si Git n'est pas encore installé sur votre ordinateur :
1. Allez sur le site officiel : [git-scm.com](https://git-scm.com/downloads)
2. Téléchargez la version correspondant à votre système (Windows, macOS ou Linux).
3. Lancez l'installation et cliquez sur "Suivant" pour garder toutes les options par défaut.

### 2.2. Vérifier l'installation de Git

#### Étape 2 — Vérifier Git

Ouvrez votre terminal (ou l'application "Git Bash" sur Windows) et tapez cette commande pour vérifier si Git est bien installé :

```bash
git --version
```

### 2.3. Configurer son identité

#### Étape 3 — Configurer son nom

Tapez la commande suivante en remplaçant "Prénom Nom" par votre vrai nom :

```bash
git config --global user.name "Prénom Nom"
```

#### Étape 4 — Configurer son email

Tapez la commande suivante en remplaçant "email@exemple.com" par votre adresse email :

```bash
git config --global user.email "email@exemple.com"
```

**Résultat attendu :**

Vous devez avoir exécuté les commandes de configuration dans votre terminal.

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-1-git.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel 1">
</iframe>

## Bilan

**Vous avez réalisé :** L'installation (ou la vérification) et la configuration de base de Git sur votre ordinateur.

**Vous savez maintenant :** Vérifier que Git fonctionne et configurer votre identité pour signer vos futurs travaux.
