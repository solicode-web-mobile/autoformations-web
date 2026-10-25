---
title: "Partager son travail sur Internet avec git push"
layout: tuto
slug: "partager-github"
permalink: /tutos/:slug/
tuto_id: "T.151.16.1"
type: "classique"
version: "normal"
simplified: true
ua: "UA.151.16"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Comprendre la relation entre le dépôt local et le dépôt distant, puis envoyer vos commits locaux vers GitHub avec la commande `git push`.

## 2. Prérequis

Vous devez :

* avoir un projet Git configuré avec un dépôt distant (`origin`) ;
* avoir validé au moins un commit local ;
* avoir une connexion Internet active ;
* être authentifié à votre compte GitHub.

## Partie 1 — Théorie

### 1.1. Le dépôt distant `origin`

Votre ordinateur contient un **dépôt local**.  
GitHub héberge votre **dépôt distant**.

Le nom standard donné au dépôt distant principal dans Git est :

```text
origin
```

Pour afficher l'adresse configurée pour `origin`, utilisez la commande :

```bash
git remote -v
```

### 1.2. Le rôle de `git push`

Quand vous créez un commit (`git commit`), la sauvegarde existe **uniquement sur votre ordinateur**.  
Si votre ordinateur tombe en panne, le travail non envoyé est perdu.

La commande :

```bash
git push
```

envoie (pousse) tous les nouveaux commits locaux vers le dépôt distant sur GitHub.

Le flux complet du travail :

```text
Fichier modifié
      ↓
git add (index)
      ↓
git commit (dépôt local)
      ↓
git push (dépôt GitHub en ligne)
```

### 1.3. À retenir

* `origin` désigne l'adresse de votre dépôt GitHub.
* `git commit` enregistre en local ; `git push` publie en ligne.
* Le terminal peut vous demander de valider votre connexion GitHub lors du premier envoi.

## Partie 2 — Pratique

### Étape 1 — Vérifier l'adresse du dépôt distant

Ouvrez le terminal à la racine de votre projet Blog :

```bash
git remote -v
```

**Résultat attendu :**  
Deux lignes s'affichent avec l'URL de votre dépôt GitHub :

```text
origin  https://github.com/votre-compte/mon-blog.git (fetch)
origin  https://github.com/votre-compte/mon-blog.git (push)
```

### Étape 2 — Vérifier les commits locaux en attente

Exécutez :

```bash
git status
```

Si vous avez validé des commits non encore envoyés, Git affiche :

```text
Your branch is ahead of 'origin/main' by 1 commit.
```

Cela indique qu'un commit local attend d'être envoyé.

### Étape 3 — Envoyer les commits avec `git push`

Tapez :

```bash
git push
```

Git transfère les données vers GitHub. Le terminal confirme l'envoi :

```text
Writing objects: 100% ...
To https://github.com/votre-compte/mon-blog.git
   a1b2c3d..e4f5g6h  main -> main
```

### Étape 4 — Vérifier sur GitHub

1. Ouvrez votre navigateur Web.
2. Allez sur votre dépôt GitHub.
3. Actualisez la page : votre dernier commit et vos fichiers mis à jour sont visibles en ligne.

## Bilan

**Vous avez réalisé :**  
La synchronisation et la sauvegarde de vos commits locaux sur votre dépôt en ligne GitHub.

**Vous savez maintenant :**
* afficher les dépôts distants avec `git remote -v` ;
* publier vos commits sur Internet avec `git push` ;
* vérifier la présence de vos fichiers sur GitHub.

## Glossaire

* **Dépôt local** : historique Git enregistré sur votre propre ordinateur.
* **Dépôt distant** : copie de sauvegarde du projet hébergée sur un serveur (GitHub).
* **`origin`** : nom donné par défaut au dépôt distant principal.
* **`git push`** : commande qui transfère les commits locaux vers le dépôt distant.