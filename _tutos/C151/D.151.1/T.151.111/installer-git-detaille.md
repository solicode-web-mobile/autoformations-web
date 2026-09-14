---
title: "Installer et configurer Git sur son ordinateur"
layout: tuto
slug: "installer-git"
permalink: /tutos/:slug/detaille
tuto_id: "T.151.111"
type: "classique"
version: "detaille"
ua: "UA.151.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Installer Git sur son ordinateur, configurer son identité globale et comprendre le fonctionnement des fichiers de configuration.

## 2. Prérequis

* Un ordinateur.
* Une connexion Internet.
* Un terminal ou Git Bash.

## Partie 1 — Théorie

### 1.1. Le fonctionnement de Git

Git est un programme informatique de gestion de versions.

Contrairement aux sauvegardes classiques, Git ne crée pas de multiples dossiers de copie.

Il garde un seul dossier pour le projet.

À l'intérieur de ce dossier, il gère un historique invisible appelé dépôt.

Cet historique conserve la trace de chaque changement.

### 1.2. Pourquoi configurer une identité ?

Dans le monde professionnel, plusieurs développeurs travaillent souvent sur le même projet.

Git a besoin de savoir qui fait quoi.

Pour cela, chaque sauvegarde (commit) est signée.

Cette signature contient obligatoirement un nom et une adresse email.

Si vous ne configurez pas cette identité, Git refusera de créer une sauvegarde.

### 1.3. La configuration globale

On configure ces informations avec les commandes suivantes :

```bash
git config --global user.name "Nom Prénom"
git config --global user.email "email@exemple.com"
```

Le mot `--global` est très important.

Il indique à Git d'appliquer cette identité à tous les projets de votre ordinateur.

Git enregistre alors ces informations dans un fichier caché nommé `.gitconfig`.

Ce fichier se trouve dans le dossier de votre utilisateur.

Sans `--global`, l'identité ne serait valable que pour un seul projet.

### 1.4. À retenir

* Git gère l'historique sans multiplier les dossiers.
* Une sauvegarde Git (commit) doit toujours être signée.
* La signature nécessite un nom et un email.
* L'option `--global` enregistre la configuration pour tout l'ordinateur.
* La configuration globale est stockée dans le fichier `.gitconfig`.

## Partie 2 — Pratique

### 2.1. Vérifier si Git est installé

#### Étape 1 — Ouvrir le terminal

Ouvrez votre terminal.

Sous Windows, vous pouvez utiliser l'application **Git Bash**.

#### Étape 2 — Exécuter la vérification

Exécutez la commande suivante :

```bash
git --version
```

Cette commande demande à Git de dire quelle version est installée.

**Résultat attendu :**

```text
git version 2.x.x
```

Si le terminal répond avec un numéro de version, Git est déjà présent et prêt à l'emploi.

### 2.2. Installer Git

#### Étape 3 — Télécharger le logiciel

Si Git n'est pas installé, il faut le télécharger :

1. Ouvrez le site officiel : [git-scm.com](https://git-scm.com/downloads)
2. Cliquez sur le téléchargement pour votre système d'exploitation.
3. Lancez le fichier téléchargé.
4. Cliquez toujours sur "Suivant" pour conserver les nombreuses options par défaut.
5. Cliquez sur "Terminer".

Fermez votre terminal et ouvrez-en un nouveau.

#### Étape 4 — Vérifier après l'installation

Exécutez à nouveau :

```bash
git --version
```

**Résultat attendu :**

```text
git version 2.x.x
```

### 2.3. Configurer son identité

#### Étape 5 — Enregistrer le nom

La commande suivante enregistre votre nom dans Git.

Remplacez `Prénom Nom` par votre vrai nom, en gardant les guillemets :

```bash
git config --global user.name "Prénom Nom"
```

Exemple :

```bash
git config --global user.name "Madani Ali"
```

#### Étape 6 — Enregistrer l'email

La commande suivante enregistre votre email de contact.

Remplacez l'adresse par votre adresse email professionnelle ou étudiante :

```bash
git config --global user.email "email@exemple.com"
```

Exemple :

```bash
git config --global user.email "madani.ali@example.com"
```

### 2.4. Vérifier la configuration

#### Étape 7 — Interroger Git

Pour vérifier que l'enregistrement a fonctionné, vous pouvez interroger Git.

Exécutez la commande pour demander le nom :

```bash
git config --global user.name
```

Le terminal affiche le nom que vous venez de taper.

Exécutez la commande pour demander l'email :

```bash
git config --global user.email
```

Le terminal affiche l'adresse email.

#### Étape 8 — Lister toute la configuration

Il est possible d'afficher tout le contenu du fichier `.gitconfig` d'un seul coup.

Exécutez :

```bash
git config --global --list
```

**Résultat attendu :**

Le terminal affiche toutes les lignes de votre configuration globale, par exemple :

```text
user.name=Madani Ali
user.email=madani.ali@example.com
```

### Résultat final

La configuration globale de Git est maintenant réalisée sur votre ordinateur.

La page de démonstration suivante présente le résultat final attendu :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-1-git.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel Git">
</iframe>

Le résultat montre les informations que Git utilisera désormais pour toutes vos futures sauvegardes.

## Bilan

**Vous avez réalisé :**

L'installation de Git sur votre machine et la configuration de votre identité globale.

**Vous savez maintenant :**

* vérifier la présence de Git sur une machine ;
* installer Git ;
* configurer une identité avec le mode global ;
* interroger Git pour vérifier des paramètres ;
* lister l'intégralité des paramètres globaux.

## Glossaire

* **Git** : outil de gestion de versions.
* **Commit** : enregistrement d'un état du projet dans l'historique Git.
* **Terminal** : programme textuel qui permet d'exécuter des commandes.
* **Configuration** : informations utilisées par Git pour définir son comportement.
* **`--global`** : paramètre demandant à Git d'appliquer une règle à tout l'ordinateur.
* **`.gitconfig`** : fichier système caché où sont enregistrés les paramètres globaux de Git.
