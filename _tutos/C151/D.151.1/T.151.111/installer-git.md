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

Installer Git sur son ordinateur et configurer son nom et son adresse email pour identifier ses commits.

## 2. Prérequis

* Un ordinateur.
* Une connexion Internet.
* Un terminal ou Git Bash.

## Partie 1 — Théorie

### 1.1. Git

Git est un outil de gestion de versions.

Il permet d'enregistrer les changements d'un projet dans un historique.

Git est installé localement sur l'ordinateur et s'utilise notamment avec un terminal.

### 1.2. L'identité Git

Git utilise un nom et une adresse email pour identifier l'auteur d'un commit.

On configure ces informations avec les commandes suivantes :

```bash
git config --global user.name "Nom Prénom"
git config --global user.email "email@exemple.com"
```

Ces informations sont enregistrées dans la configuration de Git.

### 1.3. À retenir

* Git est installé sur l'ordinateur.
* Git peut être utilisé avec un terminal.
* Le nom et l'adresse email permettent d'identifier l'auteur d'un commit.

## Partie 2 — Pratique

### 2.1. Vérifier si Git est installé

#### Étape 1 — Ouvrir le terminal

Ouvrez votre terminal.

Sous Windows, vous pouvez utiliser **Git Bash**.

#### Étape 2 — Vérifier Git

Exécutez la commande :

```bash
git --version
```

**Résultat attendu :**

```text
git version 2.x.x
```

Si une version de Git s'affiche, Git est installé.

### 2.2. Installer Git

#### Étape 3 — Télécharger Git

Si Git n'est pas installé :

1. Ouvrez le site officiel : [git-scm.com](https://git-scm.com/downloads)
2. Téléchargez la version adaptée à votre système.
3. Lancez l'installation.
4. Conservez les options proposées par défaut.
5. Terminez l'installation.

Après l'installation, ouvrez un nouveau terminal.

#### Étape 4 — Vérifier l'installation

Exécutez :

```bash
git --version
```

**Résultat attendu :**

```text
git version 2.x.x
```

### 2.3. Configurer son nom

#### Étape 5 — Configurer le nom

Remplacez `Prénom Nom` par votre nom :

```bash
git config --global user.name "Prénom Nom"
```

Exemple :

```bash
git config --global user.name "Madani Ali"
```

### 2.4. Configurer son email

#### Étape 6 — Configurer l'email

Remplacez l'adresse par votre adresse email :

```bash
git config --global user.email "email@exemple.com"
```

Exemple :

```bash
git config --global user.email "madani.ali@example.com"
```

### 2.5. Vérifier la configuration

#### Étape 7 — Vérifier le nom

Exécutez :

```bash
git config --global user.name
```

Le terminal affiche votre nom.

#### Étape 8 — Vérifier l'email

Exécutez :

```bash
git config --global user.email
```

Le terminal affiche votre adresse email.

**Résultat attendu :**

Votre nom et votre adresse email sont correctement affichés.

### Résultat final

La configuration de Git est maintenant réalisée.

La page de démonstration suivante présente le résultat final attendu :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-1-git.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel Git">
</iframe>

Le résultat doit montrer que :

* Git est installé ;
* le nom Git est configuré ;
* l'adresse email Git est configurée.

## Bilan

**Vous avez réalisé :**

L'installation ou la vérification de Git et la configuration de votre nom et de votre adresse email.

**Vous savez maintenant :**

* vérifier si Git est installé ;
* installer Git si nécessaire ;
* configurer votre identité Git ;
* vérifier la configuration de Git.

## Glossaire

* **Git** : outil de gestion de versions.
* **Commit** : enregistrement d'un état du projet dans l'historique Git.
* **Terminal** : programme qui permet d'exécuter des commandes.
* **Configuration** : informations utilisées par Git pour définir son fonctionnement.
