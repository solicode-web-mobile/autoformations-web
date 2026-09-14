---
title: "Ignorer des fichiers avec .gitignore"
layout: tuto
slug: "gitignore"
permalink: /tutos/:slug/detaille
tuto_id: "T.151.141"
type: "classique"
version: "detaille"
ua: "UA.151.14"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Créer un fichier `.gitignore` pour demander à Git d'ignorer certains fichiers de manière proactive, et comprendre pourquoi c'est essentiel pour la sécurité et la propreté du projet.

## 2. Prérequis

Vous devez :

* avoir un projet géré avec Git ;
* avoir VS Code installé et ouvert ;
* connaître la structure de base d'un projet.

## Partie 1 — Théorie

### 1.1. Pourquoi ignorer des fichiers ?

Un projet de développement génère beaucoup de fichiers invisibles ou temporaires.

Si vous laissez faire, Git va vouloir tout sauvegarder.

Par exemple :
* **Le système d'exploitation** crée des fichiers miniatures invisibles (`Thumbs.db` sur Windows, `.DS_Store` sur Mac).
* **Les mots de passe** de bases de données sont souvent stockés dans des fichiers nommés `.env`. Les sauvegarder serait catastrophique pour la sécurité.
* **Les dépendances** (comme le dossier `node_modules` en JavaScript) sont extrêmement lourdes et peuvent être téléchargées de nouveau par n'importe qui. On ne les sauvegarde donc jamais.

### 1.2. Le bouclier `.gitignore`

Pour éviter de polluer l'historique ou de fuiter des mots de passe, on crée un fichier texte spécial.

Ce fichier s'appelle obligatoirement `.gitignore`. Le point au début est indispensable, il indique que c'est un fichier système caché.

Dès que vous y écrivez le nom d'un fichier ou d'un dossier, Git fera comme s'il n'existait pas.

### 1.3. La limite du bouclier

Attention, il y a une règle d'or avec le `.gitignore`.

Il ne fonctionne que sur les fichiers que Git ne connaît pas encore.

Si vous avez déjà fait un `git commit` contenant le fichier `.env`, puis que vous l'ajoutez au `.gitignore`, Git continuera de le suivre.

Il faut toujours configurer son `.gitignore` **avant** de commencer à coder.

### 1.4. À retenir

* `.gitignore` est un fichier texte contenant des règles d'exclusion.
* Il protège la sécurité (`.env`) et l'espace de stockage (`node_modules`).
* Il doit être configuré au tout début du projet.

## Partie 2 — Pratique

### 2.1. Créer le fichier `.gitignore`

#### Étape 1 — Créer le fichier

Dans l'explorateur de fichiers de VS Code, ouvrez la racine de votre projet.

Créez un nouveau fichier.

Nommez-le exactement :

```text
.gitignore
```

### 2.2. Ajouter les règles

#### Étape 2 — Ajouter les fichiers à ignorer

Ouvrez `.gitignore`.

Ajoutez :

```text
.DS_Store
Thumbs.db
node_modules/
.env
```

Le slash `/` après `node_modules` indique qu'il s'agit d'un dossier complet, et non d'un simple fichier.

Enregistrez le fichier avec `Ctrl + S`.

### 2.3. Vérifier et sauvegarder le bouclier

#### Étape 3 — Vérifier avec Git

Ouvrez le terminal dans le dossier du projet.

Exécutez :

```bash
git status
```

Le fichier `.gitignore` est un fichier de code comme les autres. Git le détecte.

#### Étape 4 — Ajouter et valider

Il faut sauvegarder ce fichier dans le dépôt pour que tout le monde bénéficie des mêmes règles de protection.

Exécutez :

```bash
git add .gitignore
git commit -m "Ajouter le fichier .gitignore"
```

Le fichier `.gitignore` est maintenant actif et enregistré dans l'historique du dépôt.

### Résultat attendu

Le projet contient maintenant un fichier `.gitignore` avec vos règles :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-8-git.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel .gitignore">
</iframe>

## Bilan

**Vous avez réalisé :**

La création et la validation d'un fichier d'exclusion pour protéger votre projet.

**Vous savez maintenant :**

* l'utilité vitale du fichier `.gitignore` pour la sécurité ;
* la différence de syntaxe entre un fichier et un dossier dans les règles ;
* que le `.gitignore` doit lui-même être sauvegardé dans un commit.

## Glossaire

* **`.gitignore`** : fichier caché listant ce que Git ne doit jamais surveiller.
* **`.env`** : fichier contenant les variables d'environnement (souvent des mots de passe).
* **`node_modules`** : dossier contenant le code des autres développeurs, inutile à sauvegarder.
