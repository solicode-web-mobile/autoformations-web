---
title: "Mettre à jour son ordinateur avec git pull"
layout: tuto
slug: "mettre-a-jour-pull"
permalink: /tutos/:slug/detaille
tuto_id: "T.151.132"
type: "classique"
version: "detaille"
ua: "UA.151.13"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Récupérer les changements du dépôt distant avec `git pull` et comprendre comment Git fusionne ces nouveautés avec le travail local.

## 2. Prérequis

Vous devez :

* avoir cloné un dépôt Git ;
* travailler sur un projet qui a potentiellement été modifié ailleurs.

## Partie 1 — Théorie

### 1.1. Le besoin de se synchroniser

Lorsque vous travaillez en équipe, ou sur plusieurs ordinateurs, la version hébergée sur GitHub devient le point central.

Il est essentiel de récupérer la dernière version de ce point central avant de commencer à travailler.

Si vous modifiez un fichier alors que quelqu'un d'autre l'a déjà modifié sur GitHub, vous risquez de créer un "conflit".

### 1.2. Ce que fait vraiment `git pull`

La commande `git pull` est en fait une commande double.

En coulisses, elle exécute deux actions consécutives :

1. **`git fetch`** (Récupérer) : Git télécharge silencieusement toutes les nouveautés depuis le serveur `origin`.
2. **`git merge`** (Fusionner) : Git intègre mathématiquement ces nouveautés dans vos fichiers de travail actuels.

La plupart du temps, cette fusion est automatique et invisible.

### 1.3. La gestion des conflits (Notion)

Parfois, Git n'arrive pas à fusionner automatiquement (par exemple, si vous et un collègue avez modifié exactement la même ligne d'un fichier).

Git met alors le `pull` en pause et vous demande de choisir quelle version conserver. 

C'est ce qu'on appelle un conflit de fusion, une situation normale dans la vie d'un développeur (qui sera traitée dans une autre session).

### 1.4. À retenir

* `git pull` doit être la première commande que vous tapez le matin.
* Elle télécharge ET fusionne les nouveautés.

## Partie 2 — Pratique

### 2.1. Sécuriser son travail local

#### Étape 1 — Ouvrir le terminal

Ouvrez le terminal dans le dossier du projet.

#### Étape 2 — Vérifier l'état local

Exécutez :

```bash
git status
```

Il est fortement recommandé d'avoir un "working tree clean" (un atelier propre) avant de faire un `pull`.

S'il vous reste des fichiers modifiés, sauvegardez-les d'abord avec un commit.

### 2.2. La mise à jour

#### Étape 3 — Exécuter le Pull

Exécutez :

```bash
git pull
```

Git contacte GitHub.

Deux résultats sont possibles :
- Soit Git affiche "Already up to date." (Déjà à jour).
- Soit Git affiche une liste de fichiers avec des petits symboles `+` et `-` indiquant ce qui vient d'être inséré dans votre ordinateur.

### 2.3. Vérification

#### Étape 4 — Vérifier l'état final

Exécutez :

```bash
git status
```

Votre projet est désormais aligné sur le serveur distant. Vous pouvez commencer à coder.

### Résultat attendu

Le projet local a été mis à jour avec les changements disponibles sur le dépôt distant.

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-7-git.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel Git pull">
</iframe>

## Bilan

**Vous avez réalisé :**

La mise à jour sécurisée de votre ordinateur.

**Vous savez maintenant :**

* pourquoi il faut toujours vérifier `git status` avant de mettre à jour ;
* que `git pull` exécute en réalité deux actions (téléchargement et fusion) ;
* utiliser `git pull` comme routine quotidienne.

## Glossaire

* **`git pull`** : commande qui récupère les changements (fetch) et les fusionne (merge).
* **Fusion (Merge)** : intégration automatique de modifications distantes dans le code local.
* **Conflit** : situation où Git ne peut pas fusionner deux modifications qui ciblent le même endroit.
