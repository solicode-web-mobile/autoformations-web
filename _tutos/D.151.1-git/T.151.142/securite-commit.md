---
title: "Les règles de sécurité avant de valider un commit"
layout: tuto
slug: "securite-commit"
permalink: /tutos/:slug/
tuto_id: "T.151.142"
type: "classique"
version: "normal"
ua: "UA.151.14"
nav_order: 2

data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Vérifier les modifications avant de créer un commit pour éviter d'enregistrer des informations sensibles ou des modifications non prévues.

## 2. Prérequis

Vous devez :

* savoir utiliser `git status` ;
* avoir un projet géré avec Git ;
* avoir effectué une modification dans un fichier du projet.

## Partie 1 — Théorie

### 1.1. Pourquoi vérifier avant un commit ?

Avant de créer un commit, il est important de vérifier les modifications réalisées.

Une modification peut contenir par erreur :

* un mot de passe ;
* une clé d'accès ;
* une information confidentielle ;
* une modification que vous ne vouliez pas enregistrer.

Une fois le commit créé, la modification est enregistrée dans l'historique Git.

Si le commit est ensuite envoyé vers GitHub, les informations peuvent être accessibles aux personnes qui peuvent consulter le dépôt.

Il faut donc vérifier les modifications **avant** de créer le commit.

### 1.2. Le rôle de `git status`

La commande :

```bash
git status
```

permet de voir l'état du dépôt.

Elle permet notamment d'identifier les fichiers modifiés.

Exemple :

```bash
git status
```

Vous pouvez ainsi savoir quels fichiers nécessitent une vérification.

### 1.3. Le rôle de `git diff`

La commande :

```bash
git diff
```

permet d'afficher les modifications réalisées dans les fichiers qui ne sont pas encore préparés.

Elle permet de voir précisément les lignes ajoutées, supprimées ou modifiées.

Exemple :

```bash
git diff
```

Le résultat peut utiliser des couleurs pour faciliter la lecture.

Une ligne commençant par `+` correspond généralement à une ligne ajoutée.

Une ligne commençant par `-` correspond généralement à une ligne supprimée.

### 1.4. Le réflexe de sécurité

Avant de créer un commit, utilisez :

```text
git status
     ↓
git diff
     ↓
Vérifier les modifications
     ↓
git add
     ↓
git commit
```

La vérification doit être faite avant `git add` lorsque vous contrôlez les modifications non préparées avec `git diff`.

### 1.5. À retenir

* Vérifiez toujours les fichiers modifiés avant un commit.
* `git status` indique quels fichiers ont changé.
* `git diff` montre les modifications.
* Ne créez pas de commit contenant une information sensible.
* `.gitignore` ne remplace pas la vérification du contenu du projet.

## Partie 2 — Pratique

### 2.1. Vérifier les fichiers modifiés

#### Étape 1 — Utiliser `git status`

Ouvrez le terminal dans le dossier du projet.

Exécutez :

```bash
git status
```

Repérez les fichiers modifiés.

### 2.2. Lire les modifications

#### Étape 2 — Utiliser `git diff`

Exécutez :

```bash
git diff
```

Lisez les modifications affichées dans le terminal.

Vérifiez notamment :

* les informations ajoutées ;
* les informations supprimées ;
* les modifications inattendues ;
* les informations sensibles.

### 2.3. Identifier une information sensible

#### Étape 3 — Vérifier le contenu

Imaginez qu'un fichier contient par erreur :

```text
DB_PASSWORD=mon-mot-de-passe
```

Si cette ligne apparaît dans `git diff`, ne créez pas le commit.

Retournez dans le fichier.

Supprimez l'information sensible ou remplacez-la par une solution adaptée au projet.

Enregistrez le fichier.

### 2.4. Vérifier à nouveau

#### Étape 4 — Relancer `git diff`

Exécutez :

```bash
git diff
```

Vérifiez que l'information sensible n'apparaît plus.

Vous pouvez également vérifier l'état du dépôt :

```bash
git status
```

### 2.5. Préparer et valider la modification

#### Étape 5 — Ajouter la modification

Lorsque la vérification est terminée, ajoutez le fichier :

```bash
git add nom-du-fichier
```

#### Étape 6 — Créer le commit

Créez ensuite le commit :

```bash
git commit -m "Décrire la modification"
```

### Résultat attendu

Vous avez réalisé la routine de vérification avant le commit :

```text
git status
     ↓
git diff
     ↓
Vérifier
     ↓
git add
     ↓
git commit
```

La page de démonstration suivante présente un exemple de vérification avec `git diff` :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-9-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel git diff">
</iframe>

## Bilan

**Vous avez réalisé :**

Une routine de vérification des modifications avant la création d'un commit.

**Vous savez maintenant :**

* utiliser `git status` pour identifier les fichiers modifiés ;
* utiliser `git diff` pour lire les modifications ;
* repérer une information sensible avant un commit ;
* corriger une modification avant de l'ajouter ;
* créer un commit après vérification.

## Glossaire

* **`git status`** : commande qui affiche l'état du dépôt.
* **`git diff`** : commande qui affiche les modifications non préparées.
* **Modification** : changement effectué dans un fichier du projet.
* **Information sensible** : donnée qui ne doit pas être exposée ou partagée.
* **Commit** : enregistrement d'un état du projet dans l'historique Git.
