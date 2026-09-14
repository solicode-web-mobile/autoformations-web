---
title: "Mettre à jour son ordinateur avec git pull"
layout: tuto
slug: "mettre-a-jour-pull"
permalink: /tutos/:slug/
tuto_id: "T.151.132"
type: "classique"
version: "normal"
ua: "UA.151.13"
nav_order: 2

data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Récupérer les changements du dépôt distant avec `git pull` pour mettre à jour son projet local avant de commencer son travail.

## 2. Prérequis

Vous devez :

* avoir cloné un dépôt Git ;
* avoir un dépôt distant configuré ;
* avoir une connexion Internet ;
* travailler sur un projet qui peut avoir été modifié sur le dépôt distant.

## Partie 1 — Théorie

### 1.1. Pourquoi mettre son projet à jour ?

Un projet peut être modifié depuis un autre ordinateur.

Par exemple :

Hier, vous avez travaillé sur le projet depuis l'ordinateur de l'école.

Vous avez créé un commit puis envoyé ce commit vers GitHub avec :

```bash
git push
```

Aujourd'hui, vous utilisez un autre ordinateur.

Le dépôt local de cet ordinateur peut ne pas contenir les dernières modifications présentes sur GitHub.

Il faut donc mettre le dépôt local à jour avant de continuer.

### 1.2. Le rôle de `git pull`

La commande :

```bash
git pull
```

permet de récupérer les changements du dépôt distant et de les intégrer dans le dépôt local.

Le fonctionnement peut être résumé ainsi :

```text
Dépôt distant
     ↓
  git pull
     ↓
Dépôt local
```

`git push` et `git pull` travaillent dans des directions opposées, mais ils n'ont pas exactement le même fonctionnement :

* **`git push`** : envoie des commits locaux vers le dépôt distant.
* **`git pull`** : récupère les changements du dépôt distant et les intègre dans le dépôt local.

### 1.3. Quand utiliser `git pull` ?

Avant de commencer une nouvelle session de travail, vérifiez si le dépôt distant contient de nouvelles modifications.

Cela est particulièrement important lorsque :

* vous travaillez sur plusieurs ordinateurs ;
* plusieurs développeurs travaillent sur le même projet ;
* une autre personne a envoyé des changements sur le dépôt distant.

### 1.4. À retenir

* Le dépôt distant peut contenir des changements plus récents.
* `git pull` permet de récupérer ces changements.
* Les changements récupérés sont intégrés au dépôt local.
* Mettre son projet à jour avant de travailler permet de partir d'une version plus récente.

## Partie 2 — Pratique

### 2.1. Vérifier l'état du projet

#### Étape 1 — Ouvrir le terminal

Ouvrez le terminal dans le dossier du projet.

#### Étape 2 — Vérifier l'état local

Exécutez :

```bash
git status
```

Avant de récupérer des changements, vérifiez que votre travail local est dans un état correct.

### 2.2. Récupérer les changements

#### Étape 3 — Mettre à jour le projet

Exécutez :

```bash
git pull
```

Git contacte le dépôt distant configuré pour le projet.

Il récupère les nouveaux changements et les intègre dans votre dépôt local.

### 2.3. Observer le résultat

#### Étape 4 — Lire le résultat

Git affiche le résultat de l'opération dans le terminal.

Si aucune nouvelle modification n'est disponible, Git peut indiquer que le dépôt local est déjà à jour.

Si de nouvelles modifications sont disponibles, Git affiche les changements récupérés.

#### Étape 5 — Vérifier l'état final

Exécutez :

```bash
git status
```

Vérifiez que le dépôt est dans l'état attendu après la mise à jour.

### Résultat attendu

Le projet local a été mis à jour avec les changements disponibles sur le dépôt distant.

Le cycle est maintenant :

```text
Travail sur un autre ordinateur
          ↓
       git push
          ↓
    Dépôt distant
          ↓
       git pull
          ↓
     Dépôt local
          ↓
Reprendre le travail
```

La page de démonstration suivante présente le résultat attendu :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-7-git.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel Git pull">
</iframe>

## Bilan

**Vous avez réalisé :**

La mise à jour d'un projet local à partir des changements disponibles sur le dépôt distant.

**Vous savez maintenant :**

* vérifier l'état de votre dépôt ;
* récupérer les changements du dépôt distant avec `git pull` ;
* comprendre la différence entre `git push` et `git pull` ;
* mettre votre projet local à jour avant de reprendre votre travail.

## Glossaire

* **`git pull`** : commande qui récupère les changements du dépôt distant et les intègre au dépôt local.
* **`git push`** : commande qui envoie les commits locaux vers le dépôt distant.
* **Dépôt local** : dépôt Git enregistré sur l'ordinateur.
* **Dépôt distant** : dépôt Git hébergé sur un serveur distant.
* **Mise à jour** : opération qui permet d'intégrer dans le dépôt local les changements disponibles à distance.
