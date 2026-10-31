---
title: "Réparer une erreur avant le commit avec git restore"
layout: tuto
slug: "reparer-restore"
permalink: /tutos/:slug/
tuto_id: "T.151.15.2"
type: "classique"
version: "normal"
simplified: true
ua: "UA.151.15"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Annuler les modifications non préparées d'un fichier pour revenir immédiatement à la version propre du dernier commit.

## 2. Prérequis

Vous devez :

* avoir un projet géré avec Git ;
* avoir un fichier déjà suivi dans Git ;
* connaître la commande `git status`.

## Partie 1 — Théorie

### 1.1. L'erreur dans le dossier de travail

Pendant le développement, vous testez une modification dans un fichier (ex : `index.php`).  
Le code ne fonctionne plus, ou vous voulez simplement annuler votre essai.

Tant que vous n'avez pas tapé `git commit`, le dernier commit enregistré est intact dans le dépôt.

### 1.2. Le rôle de `git restore`

La commande :

```bash
git restore <nom-du-fichier>
```

écrase les modifications locales de ce fichier pour le remettre à l'état exact du dernier commit.

Cycle d'annulation :

```text
Dernier commit propre (dépôt)
         ↓
Erreur de saisie (dossier de travail)
         ↓
git restore <fichier>
         ↓
Retour à l'état propre du commit
```

### 1.3. Vigilance

`git restore` supprime définitivement les modifications non préparées dans le fichier ciblé.  
Avant de l'exécuter, vérifiez toujours les lignes modifiées avec `git diff`.

### 1.4. À retenir

* `git restore <fichier>` annule les changements non validés d'un fichier.
* Le fichier retrouve l'état exact de la dernière sauvegarde.
* La commande `git diff` permet d'inspecter l'erreur avant de l'annuler.

## Partie 2 — Pratique

### Étape 1 — Faire une modification d'essai

1. Ouvrez `index.php` (ou un fichier existant dans votre Blog).
2. Ajoutez une ligne d'erreur ou du texte au hasard en haut du fichier.
3. Enregistrez le fichier (`Ctrl + S`).

### Étape 2 — Constater la modification

Ouvrez le terminal :

```bash
git status
```

Le fichier apparaît en rouge dans la section `Changes not staged for commit`.

### Étape 3 — Inspecter avec `git diff`

Affichez les différences précises :

```bash
git diff index.php
```

Les lignes ajoutées apparaissent avec un signe vert `+`. Vous observez l'erreur.

### Étape 4 — Annuler l'erreur avec `git restore`

Exécutez la commande de restauration :

```bash
git restore index.php
```

### Étape 5 — Vérifier le retour à l'état propre

Vérifiez le statut :

```bash
git status
```

**Résultat attendu :**  
Le message indique :

```text
nothing to commit, working tree clean
```

Ouvrez `index.php` dans VS Code : l'erreur a disparu, le code d'origine est restauré.

## Bilan

**Vous avez réalisé :**  
L'annulation d'une modification locale erronée sans impacter l'historique de votre projet.

**Vous savez maintenant :**
* afficher les modifications non validées avec `git diff` ;
* annuler des changements imprévus avec `git restore` ;
* sécuriser votre code avant d'effectuer un commit.

## Glossaire

* **`git restore`** : commande pour restaurer un fichier du dossier de travail depuis le dernier commit.
* **`git diff`** : commande affichant les différences ligne par ligne entre votre travail et le commit précédent.
* **Working tree clean** : état où tous les fichiers du dossier correspondent exactement au dernier commit.