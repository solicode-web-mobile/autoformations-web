---
title: "Créer et configurer un fichier .gitignore"
layout: tuto
slug: "creer-gitignore"
permalink: /tutos/:slug/
tuto_id: "T.151.151"
type: "classique"
version: "normal"
simplified: true
ua: "UA.151.15"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Créer un fichier `.gitignore` pour demander à Git de ne pas prendre en compte certains fichiers et dossiers inutiles dans le projet.

## 2. Prérequis

Vous devez :

* avoir un projet géré avec Git ;
* avoir VS Code installé et ouvert ;
* connaître la structure de base d'un projet.

## Partie 1 — Théorie

### 1.1. Pourquoi utiliser `.gitignore` ?

Certains fichiers ne doivent pas être ajoutés au dépôt Git :

* des fichiers système (`.DS_Store`, `Thumbs.db`) ;
* des dossiers de dépendances (`node_modules/`, `vendor/`) ;
* des fichiers avec des données secrètes ou locales (`.env`, `config.local.php`) ;
* des fichiers temporaires ou des journaux d'erreurs.

Ces fichiers sont inutiles dans l'historique ou contiennent des informations sensibles.

### 1.2. Le fichier `.gitignore`

`.gitignore` est un fichier texte simple placé à la racine du projet.

Il contient la liste des dossiers et fichiers que Git doit ignorer :

```text
.gitignore
```

Le point `.` au début fait partie intégrante du nom.

### 1.3. Règles courantes

Une règle peut cibler un fichier précis :

```text
.env
```

Une règle peut cibler un dossier entier avec un slash final `/` :

```text
node_modules/
vendor/
```

On peut aussi cibler une extension avec une étoile `*` :

```text
*.log
```

### 1.4. Attention aux fichiers déjà suivis

`.gitignore` ignore uniquement les **nouveaux** fichiers non suivis.  
Si un fichier a déjà été validé dans un commit précédent, l'ajouter dans `.gitignore` ne suffit pas à le retirer de l'historique.

### 1.5. À retenir

* Le fichier doit s'appeler exactement `.gitignore` (avec le point initial).
* Chaque ligne correspond à un fichier ou un dossier à ignorer.
* Le fichier `.gitignore` doit lui-même être versionné avec Git.

## Partie 2 — Pratique

### Étape 1 — Créer le fichier à la racine

1. Ouvrez VS Code dans le dossier racine de votre projet Blog.
2. Créez un nouveau fichier nommé :

```text
.gitignore
```

### Étape 2 — Écrire les règles

Ouvrez `.gitignore` et écrivez les lignes suivantes :

```text
.DS_Store
Thumbs.db
node_modules/
vendor/
.env
*.log
```

Enregistrez le fichier (`Ctrl + S`).

### Étape 3 — Vérifier avec Git

Ouvrez le terminal à la racine du projet :

```bash
git status
```

Git affiche `.gitignore` dans les fichiers non suivis. Aucun fichier temporaire listé dans `.gitignore` ne doit apparaître.

### Étape 4 — Préparer et valider le fichier

Ajoutez `.gitignore` à l'index :

```bash
git add .gitignore
```

Validez le commit :

```bash
git commit -m "chore: configurer le fichier .gitignore"
```

## Bilan

**Vous avez réalisé :**  
La création et l'enregistrement du fichier `.gitignore` pour protéger votre dépôt contre les fichiers indésirables.

**Vous savez maintenant :**
* pourquoi certains fichiers ne doivent pas être partagés sur Git ;
* comment créer et renseigner `.gitignore` ;
* comment valider la configuration dans l'historique Git.

## Glossaire

* **`.gitignore`** : fichier texte qui liste les éléments exclus du suivi Git.
* **Fichier non suivi (untracked)** : nouveau fichier présent dans le dossier mais ignoré par Git.
* **Commit atomique** : sauvegarde ciblée sur une seule tâche ou configuration.