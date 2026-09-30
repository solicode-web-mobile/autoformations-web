---
title: "Réparer une erreur avant le commit avec git restore"
layout: tuto
slug: "reparer-restore"
permalink: /tutos/:slug/detaille
tuto_id: "T.151.152"
type: "classique"
version: "detaille"
ua: "UA.151.15"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Utiliser `git restore` pour annuler des modifications dangereuses dans le dossier de travail, et comprendre le mécanisme de destruction irréversible qui en découle.

## 2. Prérequis

Vous devez :

* avoir un projet géré avec Git ;
* avoir un fichier déjà suivi par Git ;
* avoir modifié ce fichier, sans l'avoir préparé (`git add`).

## Partie 1 — Théorie

### 1.1. L'utilité de la machine à remonter le temps

Pendant le développement, on écrit souvent du code pour faire des tests, qui finalement "casse" tout le fonctionnement du projet.

Parfois, l'éditeur de texte est fermé, et le raccourci classique de retour en arrière (Ctrl+Z) ne fonctionne plus.

Plutôt que d'essayer de corriger manuellement et empirer les choses, vous pouvez ordonner à Git de récupérer la version saine du dernier commit.

### 1.2. Le comportement de `git restore`

La commande :

```bash
git restore nom-du-fichier
```

agit directement sur votre **dossier de travail** (votre brouillon actuel).

Git va chercher la copie parfaite du fichier dans le dernier commit, et il écrase physiquement votre brouillon avec cette copie.

Le fichier redevient exactement comme il était lors de la dernière sauvegarde.

### 1.3. La mise en garde absolue

C'est l'une des rares commandes de Git qui est **totalement irréversible**.

Le code que vous étiez en train d'écrire, et qui n'avait jamais fait l'objet d'un commit, est complètement supprimé du disque dur.

Même Git ne pourra pas vous le redonner.

Il faut toujours utiliser cette commande avec une extrême prudence, et idéalement après avoir fait un `git diff` pour s'assurer qu'on ne détruit rien de précieux.

### 1.4. À retenir

* `git restore` annule des modifications locales.
* Le fichier est restauré à l'image du dernier commit.
* Les modifications supprimées sont perdues à jamais.
* `git diff` est le bouclier à utiliser avant le restore.

## Partie 2 — Pratique

### 2.1. Créer le problème volontairement

#### Étape 1 — Modifier un fichier

Ouvrez un fichier déjà suivi par Git.

Écrivez n'importe quoi dedans, comme si vous aviez fait une grosse erreur de manipulation.

Enregistrez le fichier.

#### Étape 2 — Constater les dégâts

Dans le terminal, exécutez :

```bash
git status
```

Le fichier apparaît en rouge. 

### 2.2. La vérification avant destruction

#### Étape 3 — Afficher ce qui va être perdu

Exécutez :

```bash
git diff
```

Observez le résultat rouge et vert. Êtes-vous sûr de vouloir jeter à la poubelle ce code ?

### 2.3. L'effacement

#### Étape 4 — Annuler l'erreur

Pour valider la suppression de l'erreur, exécutez (en remplaçant le nom du fichier) :

```bash
git restore nom_fichier.php
```

Git ne demande pas de confirmation. La destruction est immédiate.

### 2.4. Le retour au calme

#### Étape 5 — Vérifier le nettoyage

Exécutez :

```bash
git status
```

Le fichier ne s'affiche plus en rouge.

Ouvrez le fichier dans votre éditeur : l'erreur a disparu, la version saine est revenue.

### Résultat attendu

Le fichier a retrouvé l'état de la dernière sauvegarde sécurisée :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-11-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel git restore">
</iframe>

## Bilan

**Vous avez réalisé :**

La restauration forcée d'un fichier en écrasant les modifications locales.

**Vous savez maintenant :**

* utiliser la machine à remonter le temps locale de Git ;
* comprendre la différence entre un système protégé et une commande irréversible ;
* vérifier avec `git diff` avant de déclencher `git restore`.

## Glossaire

* **`git restore`** : commande utilisée pour annuler les changements non préparés d'un fichier.
* **Irréversible** : action (comme le `restore`) qui détruit des données que Git n'avait pas encore sauvegardées.
* **Dossier de travail** : la zone "brouillon" de votre ordinateur, que le restore vient écraser.
