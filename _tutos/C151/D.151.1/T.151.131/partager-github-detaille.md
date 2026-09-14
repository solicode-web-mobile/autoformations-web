---
title: "Partager son travail sur Internet avec git push"
layout: tuto
slug: "partager-github"
permalink: /tutos/:slug/detaille
tuto_id: "T.151.131"
type: "classique"
version: "detaille"
ua: "UA.151.13"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Envoyer ses sauvegardes locales vers Internet et comprendre comment Git mémorise l'adresse du serveur.

## 2. Prérequis

Vous devez :

* avoir un projet Git cloné depuis GitHub ;
* avoir effectué au moins un commit local ;
* avoir une connexion Internet.

## Partie 1 — Théorie

### 1.1. Le concept de dépôt distant (Remote)

Lorsque vous clonez un dépôt, Git télécharge les fichiers, mais il fait aussi autre chose.

Il enregistre l'adresse Internet exacte de l'endroit où il a récupéré ces fichiers.

Il crée un signet, un peu comme un favori dans un navigateur web.

Git appelle ces favoris des "remotes" (dépôts distants).

### 1.2. Le mystère d'`origin`

Par convention mondiale, Git donne le nom `origin` (l'origine) à ce favori principal.

Ainsi, au lieu de taper une longue URL complexe à chaque fois que vous voulez vous connecter à GitHub, vous utilisez simplement le mot `origin`.

La commande `git remote -v` (le `-v` signifiant "verbose", ou "bavard") permet d'afficher l'URL qui se cache derrière le mot `origin`.

Il y aura souvent deux lignes : une pour recevoir (fetch) et une pour envoyer (push).

### 1.3. L'action de pousser (Push)

Vos commits vivent dans le secret de votre disque dur.

La commande `git push` demande à Git : "Prends tous les commits qui sont chez moi mais pas encore sur le serveur, et pousse-les vers `origin`."

L'opération nécessite parfois que vous vous identifiiez sur GitHub pour prouver que vous avez le droit d'écrire sur ce serveur.

### 1.4. À retenir

* Un commit local n'existe pas sur Internet tant qu'il n'est pas poussé.
* `origin` n'est qu'un raccourci textuel pour une URL.
* `git remote -v` est la commande d'inspection pour vérifier vos connexions.

## Partie 2 — Pratique

### 2.1. Inspecter la connexion

#### Étape 1 — Vérifier `origin`

Ouvrez le terminal dans le dossier du projet.

Exécutez :

```bash
git remote -v
```

**Résultat attendu :**

```text
origin  https://github.com/utilisateur/projet.git (fetch)
origin  https://github.com/utilisateur/projet.git (push)
```

### 2.2. Préparer l'envoi

#### Étape 2 — Vérifier l'état du dépôt

Exécutez :

```bash
git status
```

Votre dépôt doit indiquer que vous avez de l'avance ("Your branch is ahead of 'origin/main' by 1 commit").

### 2.3. L'envoi

#### Étape 3 — Exécuter `git push`

Exécutez :

```bash
git push
```

Git transfère les données. 

Vous verrez des statistiques de compression et de transfert s'afficher à l'écran.

### 2.4. La vérification finale

#### Étape 4 — Vérifier le statut

Exécutez à nouveau :

```bash
git status
```

Le message changera. Il vous dira que votre dossier de travail est propre et au même niveau que le serveur distant.

### Résultat attendu

Le commit local a été copié sur le dépôt distant.

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-6-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel Git push">
</iframe>

## Bilan

**Vous avez réalisé :**

L'inspection de votre connexion Internet (remote) et l'envoi de vos commits.

**Vous savez maintenant :**

* expliquer ce qu'est `origin` ;
* utiliser `git remote -v` pour vérifier l'adresse du serveur ;
* envoyer vos commits avec `git push` ;
* analyser les retours de `git status` liés au réseau.

## Glossaire

* **Remote** : dépôt situé sur un réseau ou sur Internet.
* **origin** : nom standard donné au dépôt distant principal.
* **Verbose (-v)** : option permettant d'afficher plus de détails.
