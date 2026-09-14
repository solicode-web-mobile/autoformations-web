---
title: "La routine locale du développeur (Terminal)"
layout: tuto
slug: "routine-locale"
permalink: /tutos/:slug/
tuto_id: "T.151.122"
type: "classique"
version: "normal"
ua: "UA.151.12"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Utiliser les commandes Git dans le terminal pour :

* vérifier l'état du projet ;
* préparer une modification ;
* créer un commit ;
* vérifier l'état du projet après le commit.

## 2. Prérequis

Vous devez :

* avoir compris les trois zones de Git dans le Tuto 4 ;
* avoir un dépôt Git ;
* avoir un fichier `index.html` dans le dépôt ;
* avoir effectué une modification dans `index.html`.

## Partie 1 — Théorie

### 1.1. Les commandes fondamentales

Les trois commandes principales de ce tutoriel sont :

```bash
git status
git add
git commit
```

Chaque commande a un rôle différent.

**`git status`**

Cette commande affiche l'état actuel du dépôt.

Elle permet notamment de voir les fichiers modifiés et les fichiers préparés.

**`git add`**

Cette commande ajoute une modification à la **zone de préparation**.

Exemple :

```bash
git add index.html
```

**`git commit`**

Cette commande enregistre les modifications préparées dans l'historique du dépôt.

Exemple :

```bash
git commit -m "Ajouter le titre de la page"
```

### 1.2. Le rôle de `git status`

`git status` permet de vérifier ce qui se passe dans le dépôt.

Après une modification, un fichier peut être **modifié mais non préparé**.

Après `git add`, la modification est **préparée pour le prochain commit**.

Après `git commit`, la modification est enregistrée dans l'historique.

Le terminal peut utiliser des couleurs pour distinguer les états selon la configuration.

Pour apprendre les étapes, il est plus important de comprendre **l'état du fichier** que sa couleur.

### 1.3. Le cycle de travail

Le cycle est :

```text
Modification
     ↓
git status
     ↓
git add
     ↓
git status
     ↓
git commit
     ↓
git status
```

### 1.4. À retenir

* `git status` permet de vérifier l'état du dépôt.
* `git add` prépare une modification.
* `git commit` enregistre la modification préparée dans l'historique.
* `git status` permet de vérifier le résultat après chaque étape.

## Partie 2 — Pratique

### 2.1. Vérifier l'état initial

#### Étape 1 — Modifier le fichier

Ouvrez le fichier `index.html`.

Faites une petite modification.

Par exemple, ajoutez un titre dans la page.

Enregistrez le fichier.

#### Étape 2 — Vérifier l'état du dépôt

Ouvrez le terminal dans le dossier du projet.

Exécutez :

```bash
git status
```

**Résultat attendu :**

Git indique que `index.html` a été modifié.

Le fichier n'est pas encore préparé pour le prochain commit.

### 2.2. Préparer la modification

#### Étape 3 — Ajouter le fichier

Exécutez :

```bash
git add index.html
```

La modification de `index.html` est maintenant placée dans la zone de préparation.

#### Étape 4 — Vérifier la préparation

Exécutez :

```bash
git status
```

**Résultat attendu :**

Git indique que `index.html` est préparé pour le prochain commit.

### 2.3. Créer le commit

#### Étape 5 — Enregistrer la modification

Exécutez :

```bash
git commit -m "Ajouter le titre de la page"
```

Git crée un nouveau commit avec le message indiqué.

Le commit est maintenant enregistré dans l'historique du dépôt.

### 2.4. Vérifier le dépôt

#### Étape 6 — Vérifier l'état final

Exécutez :

```bash
git status
```

**Résultat attendu :**

Le dépôt ne contient plus de modification non enregistrée dans cette opération.

Git peut afficher un message similaire à :

```text
nothing to commit, working tree clean
```

Cela signifie que le dossier de travail et la zone de préparation ne contiennent plus de modification en attente de commit.

### Résultat attendu

Vous avez réalisé le cycle local complet :

```text
Modifier
   ↓
git status
   ↓
git add
   ↓
git status
   ↓
git commit
   ↓
git status
```

La page de démonstration suivante présente le résultat attendu du cycle :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-5-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel Git">
</iframe>

## Bilan

**Vous avez réalisé :**

Le cycle local Git avec `git status`, `git add` et `git commit`.

**Vous savez maintenant :**

* vérifier l'état d'un dépôt ;
* préparer une modification ;
* créer un commit ;
* vérifier que le dépôt ne contient plus de modification en attente.

## Glossaire

* **`git status`** : commande qui affiche l'état du dépôt.
* **`git add`** : commande qui prépare une modification pour le prochain commit.
* **`git commit`** : commande qui enregistre les modifications préparées dans l'historique Git.
* **Zone de préparation** : zone dans laquelle sont sélectionnées les modifications du prochain commit.
* **Commit** : enregistrement d'un état du projet dans l'historique Git.
* **Dépôt** : espace Git contenant l'historique du projet.
