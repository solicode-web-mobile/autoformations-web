---
title: "Créer et configurer un fichier .gitignore"
layout: tuto
slug: "creer-gitignore"
permalink: /tutos/:slug/
tuto_id: "T.151.141"
type: "classique"
version: "normal"
ua: "UA.151.14"
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

Certains fichiers ne doivent généralement pas être ajoutés au dépôt Git.

Par exemple :

* des fichiers créés automatiquement par le système ;
* des dépendances installées automatiquement ;
* des fichiers contenant une configuration locale ;
* certains fichiers temporaires.

Exemples :

```text
.DS_Store
Thumbs.db
node_modules/
.env
```

Ces fichiers peuvent être inutiles dans le dépôt ou contenir des informations qui ne doivent pas être partagées.

### 1.2. Le fichier `.gitignore`

`.gitignore` est un fichier spécial utilisé par Git.

Il contient des règles qui indiquent à Git quels fichiers ou dossiers ne doivent pas être pris en compte lorsqu'ils ne sont pas encore suivis par Git.

Le nom du fichier est :

```text
.gitignore
```

Le point au début fait partie du nom.

### 1.3. Exemple de règles

Une règle peut cibler un fichier :

```text
.env
```

Une autre peut cibler un dossier :

```text
node_modules/
```

On peut aussi ajouter des fichiers système :

```text
.DS_Store
Thumbs.db
```

### 1.4. Attention aux fichiers déjà suivis

`.gitignore` ne supprime pas un fichier déjà suivi par Git.

Par exemple, si `.env` a déjà été ajouté à un commit, ajouter `.env` dans `.gitignore` ne suffit pas pour arrêter son suivi.

Le fichier doit d'abord être retiré du suivi Git.

### 1.5. À retenir

* `.gitignore` contient des règles pour ignorer certains fichiers et dossiers.
* Le fichier doit s'appeler exactement `.gitignore`.
* Les règles sont enregistrées dans le projet.
* Un fichier déjà suivi par Git n'est pas automatiquement retiré du suivi par `.gitignore`.

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

Enregistrez le fichier.

Chaque ligne représente une règle.

### 2.3. Vérifier le fichier

#### Étape 3 — Vérifier avec Git

Ouvrez le terminal dans le dossier du projet.

Exécutez :

```bash
git status
```

Git doit détecter le fichier `.gitignore` comme nouveau fichier si celui-ci n'est pas encore suivi.

### 2.4. Ajouter `.gitignore` au dépôt

#### Étape 4 — Préparer le fichier

Exécutez :

```bash
git add .gitignore
```

Le fichier est maintenant dans la zone de préparation.

#### Étape 5 — Créer le commit

Exécutez :

```bash
git commit -m "Ajouter le fichier .gitignore"
```

Le fichier `.gitignore` est maintenant enregistré dans l'historique du dépôt.

### Résultat attendu

Le projet contient maintenant un fichier `.gitignore` avec les règles suivantes :

```text
.DS_Store
Thumbs.db
node_modules/
.env
```

La page de démonstration suivante présente le résultat attendu :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-8-git.html' | relative_url}}"
    height="300"
    title="Résultat du tutoriel .gitignore">
</iframe>

## Bilan

**Vous avez réalisé :**

La création et l'enregistrement d'un fichier `.gitignore` contenant plusieurs règles d'exclusion.

**Vous savez maintenant :**

* créer un fichier `.gitignore` ;
* ajouter des règles d'exclusion ;
* ignorer des fichiers et des dossiers avec Git ;
* ajouter `.gitignore` au dépôt ;
* créer un commit contenant la configuration `.gitignore`.

## Glossaire

* **`.gitignore`** : fichier qui contient des règles indiquant à Git quels fichiers ou dossiers ignorer.
* **Règle** : ligne du fichier `.gitignore` qui définit un fichier ou un dossier à ignorer.
* **Dépôt Git** : espace contenant l'historique du projet.
* **Suivi Git** : état d'un fichier déjà pris en compte par Git.
* **Commit** : enregistrement d'un état du projet dans l'historique Git.
