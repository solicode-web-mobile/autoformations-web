---
title: "Partager son travail sur Internet avec git push"
layout: tuto
slug: "partager-github"
permalink: /tutos/:slug/
tuto_id: "T.151.131"
type: "classique"
version: "normal"
ua: "UA.151.13"
nav_order: 1

data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Comprendre la relation entre le dépôt local et le dépôt distant, puis envoyer un commit local vers GitHub avec la commande `git push`.

## 2. Prérequis

Vous devez :

* avoir un projet Git cloné depuis GitHub ;
* avoir un dépôt distant configuré ;
* avoir effectué au moins un commit local ;
* avoir une connexion Internet.

## Partie 1 — Théorie

### 1.1. Le dépôt distant `origin`

Lorsque vous clonez un dépôt depuis GitHub, Git enregistre l'adresse du dépôt distant.

Cette adresse est généralement associée au nom :

```text
origin
```

`origin` est donc un nom donné au dépôt distant.

Pour afficher les dépôts distants configurés, vous pouvez utiliser :

```bash
git remote -v
```

Vous pouvez alors voir l'adresse du dépôt GitHub associé au projet local.

### 1.2. Le rôle de `git push`

Un **commit** est enregistré dans le dépôt local.

Il n'est pas automatiquement envoyé vers GitHub.

La commande `git push` permet d'envoyer les commits locaux vers le dépôt distant.

Le cycle est donc :

```text
Modifier
   ↓
git add
   ↓
git commit
   ↓
Dépôt local
   ↓
git push
   ↓
Dépôt distant
   ↓
GitHub
```

### 1.3. À retenir

* Le dépôt local contient les commits créés sur l'ordinateur.
* Le dépôt distant peut être hébergé sur GitHub.
* `origin` désigne généralement le dépôt distant configuré lors du clonage.
* `git push` envoie les commits locaux vers le dépôt distant.
* Un commit local n'est pas automatiquement envoyé vers GitHub.

## Partie 2 — Pratique

### 2.1. Vérifier le dépôt distant

#### Étape 1 — Ouvrir le terminal

Ouvrez le terminal dans le dossier du projet.

#### Étape 2 — Vérifier `origin`

Exécutez :

```bash
git remote -v
```

**Résultat attendu :**

Git affiche l'adresse du dépôt distant.

Vous devez normalement voir une ligne similaire à :

```text
origin  https://github.com/utilisateur/projet.git (fetch)
origin  https://github.com/utilisateur/projet.git (push)
```

Cela signifie que le projet local connaît le dépôt GitHub associé.

### 2.2. Vérifier le commit local

#### Étape 3 — Vérifier l'état du dépôt

Exécutez :

```bash
git status
```

Le dépôt doit être propre après le commit réalisé dans le tutoriel précédent.

Vous devez obtenir un résultat similaire à :

```text
nothing to commit, working tree clean
```

### 2.3. Envoyer le commit vers GitHub

#### Étape 4 — Exécuter `git push`

Exécutez :

```bash
git push
```

Git envoie les commits locaux vers le dépôt distant.

Selon la configuration du dépôt, Git peut vous demander de vous authentifier auprès de GitHub.

### 2.4. Vérifier l'envoi

#### Étape 5 — Vérifier le résultat

Après l'exécution de `git push`, vérifiez à nouveau l'état du dépôt :

```bash
git status
```

Le dépôt local doit rester propre.

Vous pouvez également ouvrir le dépôt GitHub dans votre navigateur pour vérifier que la modification est présente.

### Résultat attendu

Le commit local a été envoyé vers le dépôt distant.

Le cycle complet est maintenant :

```text
Modification
     ↓
git add
     ↓
git commit
     ↓
Dépôt local
     ↓
git push
     ↓
Dépôt distant
     ↓
GitHub
```

La page de démonstration suivante présente le résultat attendu :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-6-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel Git push">
</iframe>

## Bilan

**Vous avez réalisé :**

L'envoi d'un commit local vers un dépôt distant avec `git push`.

**Vous savez maintenant :**

* identifier le dépôt distant `origin` ;
* vérifier l'adresse du dépôt distant ;
* comprendre la différence entre commit local et dépôt distant ;
* envoyer vos commits vers GitHub avec `git push` ;
* vérifier que le dépôt local est propre après l'envoi.

## Glossaire

* **Dépôt local** : dépôt Git enregistré sur l'ordinateur.
* **Dépôt distant** : dépôt Git situé sur un serveur distant.
* **origin** : nom généralement utilisé pour désigner le dépôt distant principal.
* **Push** : opération qui envoie les commits locaux vers le dépôt distant.
* **GitHub** : plateforme en ligne qui peut héberger un dépôt Git.
* **Commit** : enregistrement d'un état du projet dans l'historique Git.
