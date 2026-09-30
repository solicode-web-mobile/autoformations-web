---
title: "La routine locale du développeur (Terminal)"
layout: tuto
slug: "routine-locale"
permalink: /tutos/:slug/detaille
tuto_id: "T.151.122"
type: "classique"
version: "detaille"
ua: "UA.151.12"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Maîtriser la création d'un commit avec les commandes du terminal, et comprendre le comportement de la zone de préparation.

## 2. Prérequis

Vous devez :

* avoir compris les trois zones de Git dans le Tuto 4 ;
* avoir un dépôt Git ;
* avoir effectué une modification dans un fichier.

## Partie 1 — Théorie

### 1.1. Les commandes fondamentales

Trois commandes vous permettent de traverser les zones de Git.

**`git status`**

C'est la commande la plus importante. 

Elle est sans danger, vous pouvez la taper 100 fois par jour.

Elle vous dit exactement ce qui se passe et, souvent, vous suggère la prochaine commande à taper.

**`git add`**

Cette commande prend le fichier du dossier de travail et copie son état exact dans la zone de préparation.

Attention : si vous tapez `git add index.html`, puis que vous modifiez à nouveau `index.html`, la deuxième modification n'est pas préparée ! 

Il faudra retaper `git add index.html` pour mettre à jour la préparation.

**`git commit -m`**

Le `-m` signifie "message". 

C'est un raccourci très pratique. 

Sans le `-m`, Git ouvrirait un éditeur de texte complexe dans votre terminal pour vous obliger à écrire votre message.

### 1.2. À retenir

* `git status` est votre boussole. Tapez-le avant et après chaque action.
* La zone de préparation fige l'état du fichier au moment du `git add`.
* `git commit -m` est le raccourci obligatoire pour gagner du temps.

## Partie 2 — Pratique

### 2.1. Vérifier l'état initial

#### Étape 1 — Modifier le fichier

Ouvrez le fichier `index.html`.

Faites une petite modification et enregistrez le fichier.

#### Étape 2 — Vérifier l'état du dépôt

Ouvrez le terminal dans le dossier du projet.

Exécutez :

```bash
git status
```

**Résultat attendu :**

Git indique le nom du fichier en rouge. Il précise : "Changes not staged for commit" (Modifications non préparées pour le commit).

### 2.2. Préparer la modification

#### Étape 3 — Ajouter le fichier

Exécutez :

```bash
git add index.html
```

(Note : vous pouvez taper `git add .` pour ajouter tous les fichiers d'un coup, mais c'est une habitude dangereuse pour un débutant).

#### Étape 4 — Vérifier la préparation

Exécutez :

```bash
git status
```

**Résultat attendu :**

Git indique le fichier en vert. Il précise : "Changes to be committed" (Modifications à sauvegarder).

### 2.3. Créer le commit

#### Étape 5 — Enregistrer la modification

Exécutez :

```bash
git commit -m "Ajouter le titre de la page"
```

Veillez à utiliser des guillemets pour encadrer votre phrase.

### 2.4. Vérifier le dépôt

#### Étape 6 — Vérifier l'état final

Exécutez :

```bash
git status
```

**Résultat attendu :**

Git affiche un message rassurant :

```text
nothing to commit, working tree clean
```

Cela signifie que l'atelier est rangé, tout est sécurisé.

### Résultat attendu

Vous avez réalisé le cycle local complet de manière consciente :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-5-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel Git">
</iframe>

## Bilan

**Vous avez réalisé :**

Le cycle local Git avec les trois commandes essentielles du terminal.

**Vous savez maintenant :**

* utiliser la boussole `git status` pour vous repérer ;
* préparer une modification, et comprendre que cet état est "figé" ;
* créer un commit rapidement avec l'option `-m`.

## Glossaire

* **`git status`** : commande d'observation sans aucun danger.
* **`git add`** : commande qui capture l'état actuel d'un fichier.
* **`-m`** : option de commit permettant d'écrire le message directement dans la commande.
