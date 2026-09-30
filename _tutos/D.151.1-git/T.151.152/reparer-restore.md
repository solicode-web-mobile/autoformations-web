---
title: "Réparer une erreur avant le commit avec git restore"
layout: tuto
slug: "reparer-restore"
permalink: /tutos/:slug/
tuto_id: "T.151.152"
type: "classique"
version: "normal"
ua: "UA.151.15"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Annuler les modifications non préparées d'un fichier pour revenir à la version enregistrée dans le dernier commit.

## 2. Prérequis

Vous devez :

* avoir un projet géré avec Git ;
* avoir un fichier déjà suivi par Git ;
* avoir modifié ce fichier après le dernier commit ;
* connaître la commande `git status`.

## Partie 1 — Théorie

### 1.1. Une modification non souhaitée

Vous avez modifié un fichier dans votre projet.

Après cette modification, vous constatez qu'elle n'est plus nécessaire ou qu'elle contient une erreur.

Le fichier a encore des modifications dans le **dossier de travail**.

Git peut vous permettre d'annuler ces modifications et de revenir à l'état enregistré dans le dernier commit.

### 1.2. Le rôle de `git restore`

La commande :

```bash
git restore nom-du-fichier
```

permet d'annuler les modifications non préparées d'un fichier dans le dossier de travail.

Le fichier revient alors à l'état enregistré dans le dernier commit.

Le fonctionnement peut être résumé ainsi :

```text
Dernier commit
      ↓
Modification locale
      ↓
git restore
      ↓
État du dernier commit
```

### 1.3. Attention

`git restore` peut supprimer les modifications locales non préparées du fichier.

Avant d'utiliser cette commande, vérifiez bien que vous ne voulez pas conserver ces modifications.

Vous pouvez utiliser :

```bash
git status
```

pour identifier les fichiers modifiés.

Vous pouvez aussi utiliser :

```bash
git diff
```

pour vérifier précisément les modifications avant de les annuler.

### 1.4. À retenir

* `git restore` annule des modifications non préparées.
* Le fichier revient à l'état enregistré dans le dernier commit.
* Vérifiez toujours les modifications avant d'utiliser cette commande.
* Une modification locale supprimée de cette manière peut ne plus être récupérable facilement.

## Partie 2 — Pratique

### 2.1. Vérifier la modification

#### Étape 1 — Modifier un fichier

Ouvrez un fichier suivi par Git.

Faites une modification.

Enregistrez le fichier.

#### Étape 2 — Vérifier l'état

Dans le terminal, exécutez :

```bash
git status
```

Le fichier modifié doit apparaître comme fichier modifié.

### 2.2. Vérifier le contenu à annuler

#### Étape 3 — Afficher les modifications

Exécutez :

```bash
git diff
```

Lisez les modifications affichées.

Vérifiez que vous souhaitez bien les supprimer.

### 2.3. Restaurer le fichier

#### Étape 4 — Annuler les modifications

Remplacez `mon_fichier.php` par le nom du fichier concerné :

```bash
git restore mon_fichier.php
```

Git annule les modifications non préparées de ce fichier.

### 2.4. Vérifier le résultat

#### Étape 5 — Vérifier l'état du dépôt

Exécutez :

```bash
git status
```

Le fichier restauré ne doit plus apparaître comme modifié.

Vous pouvez également vérifier son contenu.

Il correspond maintenant à l'état enregistré dans le dernier commit.

### Résultat attendu

Le fichier a retrouvé l'état du dernier commit.

Le cycle est :

```text
Modifier le fichier
       ↓
git status
       ↓
git diff
       ↓
git restore
       ↓
git status
```

La page de démonstration suivante présente le résultat attendu :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-11-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel git restore">
</iframe>

## Bilan

**Vous avez réalisé :**

L'annulation d'une modification locale non préparée avec `git restore`.

**Vous savez maintenant :**

* identifier un fichier modifié ;
* vérifier ses modifications avec `git diff` ;
* annuler ses modifications non préparées ;
* revenir à l'état du dernier commit avec `git restore`.

## Glossaire

* **`git restore`** : commande qui permet notamment d'annuler des modifications non préparées du dossier de travail.
* **Dossier de travail** : espace dans lequel les fichiers du projet sont modifiés.
* **Modification locale** : changement effectué dans le fichier sur l'ordinateur.
* **Commit** : enregistrement d'un état du projet dans l'historique Git.
* **`git diff`** : commande qui affiche les modifications non préparées.
