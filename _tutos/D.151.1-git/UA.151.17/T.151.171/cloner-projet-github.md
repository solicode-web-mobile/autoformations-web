---
title: "Cloner et remettre en service un projet avec git clone"
layout: tuto
slug: "cloner-projet-github"
permalink: /tutos/:slug/
tuto_id: "T.151.171"
type: "classique"
version: "normal"
simplified: true
ua: "UA.151.17"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Télécharger une copie intégrale d'un projet hébergé sur GitHub avec la commande `git clone` dans un nouveau dossier, puis vérifier son bon fonctionnement.

## 2. Prérequis

Vous devez :

* avoir Git installé et disponible dans votre terminal ;
* connaître l'URL HTTPS de votre dépôt GitHub (ex : `https://github.com/votre-compte/mon-blog.git`) ;
* disposer d'une connexion Internet active.

## Partie 1 — Théorie

### 1.1. Pourquoi cloner un projet ?

Vous changez d'ordinateur ou devez récupérer votre travail sur une nouvelle machine.  
Vous n'avez pas besoin de copier vos fichiers avec une clé USB.

Git permet de **cloner** le dépôt distant :

* il télécharge tous les fichiers du projet ;
* il télécharge l'historique complet de tous les commits ;
* il configure automatiquement le lien avec GitHub sous le nom `origin`.

### 1.2. La commande `git clone`

La syntaxe dans le terminal est :

```bash
git clone <URL_DU_DEPOT>
```

Git crée automatiquement un sous-dossier portant le nom du projet et y place l'ensemble des fichiers et le dossier caché `.git`.

Schéma :

```text
GitHub (dépôt distant)
         ↓  git clone <url>
Nouvel ordinateur
         ↓
Dossier du projet créé avec historique complet
```

### 1.3. À retenir

* `git clone` s'utilise une seule fois par machine pour installer le projet.
* L'URL se copie directement sur la page d'accueil de votre dépôt GitHub (bouton vert **Code**).
* Le lien `origin` vers GitHub est configuré automatiquement lors du clonage.

## Partie 2 — Pratique

### Étape 1 — Récupérer l'URL sur GitHub

1. Ouvrez votre navigateur et allez sur votre dépôt de Blog sur GitHub.
2. Cliquez sur le bouton vert **Code**.
3. Dans l'onglet **HTTPS**, cliquez sur l'icône de copie pour copier l'URL :

```text
https://github.com/votre-compte/mon-blog.git
```

### Étape 2 — Ouvrir le terminal dans votre dossier de travail

1. Ouvrez un terminal dans le dossier parent où vous stockez vos projets (par exemple `C:\projets\`).
2. Lancez la commande de clonage en remplaçant l'URL par la vôtre :

```bash
git clone https://github.com/votre-compte/mon-blog.git
```

Git télécharge l'ensemble des objets :

```text
Cloning into 'mon-blog'...
remote: Enumerating objects: 45, done.
Receiving objects: 100% (45/45), done.
```

### Étape 3 — Entrer dans le dossier et ouvrir VS Code

Déplacez-vous dans le dossier créé :

```bash
cd mon-blog
```

Ouvrez le projet dans VS Code :

```bash
code .
```

### Étape 4 — Vérifier l'historique et la liaison distante

Dans le terminal de VS Code, vérifiez que tout l'historique est présent :

```bash
git log -n 3 --oneline
```

Vérifiez que la liaison vers GitHub est bien active :

```bash
git remote -v
```

Les adresses `origin` d'envoi et de réception sont configurées et prêtes à l'emploi.

### Étape 5 — Tester l'exécution locale

Lancez le serveur PHP local pour tester l'application :

```bash
php -S localhost:8000
```

Ouvrez `http://localhost:8000` dans votre navigateur : le projet fonctionne immédiatement dans votre nouvel environnement.

## Bilan

**Vous avez réalisé :**  
La récupération complète de votre projet depuis GitHub et sa remise en service locale.

**Vous savez maintenant :**
* copier l'URL HTTPS d'un dépôt distant ;
* exécuter `git clone` dans un terminal ;
* vérifier l'historique et le bon fonctionnement de l'application récupérée.

## Glossaire

* **`git clone`** : commande qui télécharge un dépôt distant et tout son historique dans un nouveau dossier local.
* **URL HTTPS** : adresse web sécurisée utilisée par Git pour identifier le dépôt distant.
* **Remise en service** : vérification et démarrage d'une application dans un nouvel environnement d'exécution.