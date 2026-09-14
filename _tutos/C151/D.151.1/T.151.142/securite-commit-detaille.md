---
title: "Les règles de sécurité avant de valider un commit"
layout: tuto
slug: "securite-commit"
permalink: /tutos/:slug/detaille
tuto_id: "T.151.142"
type: "classique"
version: "detaille"
ua: "UA.151.14"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Vérifier ses modifications en profondeur avant de créer un commit, pour éviter d'enregistrer des informations sensibles et comprendre la structure d'un "diff".

## 2. Prérequis

Vous devez :

* savoir utiliser `git status` ;
* avoir un projet géré avec Git ;
* avoir effectué une modification dans un fichier du projet.

## Partie 1 — Théorie

### 1.1. Le risque de la validation à l'aveugle

En développement, on fait souvent des tests rapides.

Par exemple, écrire un mot de passe temporaire en clair pour vérifier qu'une base de données fonctionne.

Le danger survient si vous tapez directement `git add` suivi d'un `git commit` sans réfléchir.

Une fois le commit créé, le mot de passe est gravé dans l'historique Git.

S'il est envoyé sur GitHub par la suite, n'importe quel visiteur du dépôt pourra voler ce mot de passe.

### 1.2. Le rôle d'investigation de `git diff`

Si `git status` vous indique *quels* fichiers ont changé, il ne vous dit pas *ce qui* a changé à l'intérieur.

La commande :

```bash
git diff
```

permet de regarder à l'intérieur des fichiers modifiés, **avant** de les placer dans la zone de préparation.

Git affiche ce qu'on appelle un delta (une différence).

### 1.3. Comment lire un "diff" ?

Le résultat de `git diff` s'affiche souvent en couleur dans le terminal.

* Une ligne commençant par un `-` (en rouge) est une ligne que vous avez supprimée de l'ancienne version.
* Une ligne commençant par un `+` (en vert) est une ligne que vous venez d'ajouter.

C'est votre détecteur de problèmes : si vous voyez un mot de passe écrit en vert, vous devez l'effacer avant de valider.

### 1.4. À retenir

* `git status` montre l'extérieur (les fichiers).
* `git diff` montre l'intérieur (le code).
* Vérifiez **toujours** le `git diff` avant de faire un `git add`.

## Partie 2 — Pratique

### 2.1. Vérifier les fichiers modifiés

#### Étape 1 — Utiliser `git status`

Ouvrez le terminal dans le dossier du projet.

Exécutez :

```bash
git status
```

Repérez les fichiers modifiés écrits en rouge.

### 2.2. Lire les modifications

#### Étape 2 — Utiliser `git diff`

Exécutez :

```bash
git diff
```

Lisez ligne par ligne les modifications affichées dans le terminal.

Faites particulièrement attention aux lignes précédées d'un `+`.

### 2.3. Réagir face à une fuite

#### Étape 3 — Corriger le fichier

Imaginez que la ligne suivante apparaisse en vert :

```text
+ DB_PASSWORD=mon-mot-de-passe
```

Ne créez pas de commit !

Retournez dans votre éditeur de code, effacez la ligne, et enregistrez le fichier.

#### Étape 4 — Relancer la vérification

Exécutez de nouveau :

```bash
git diff
```

Vérifiez que la ligne compromise a bien disparu.

### 2.4. La validation sécurisée

#### Étape 5 — L'ajout serein

Maintenant que vous avez visuellement garanti que le code est propre, vous pouvez l'ajouter :

```bash
git add nom-du-fichier
```

#### Étape 6 — Créer le commit

Créez ensuite le commit :

```bash
git commit -m "Décrire la modification sécurisée"
```

### Résultat attendu

Vous avez réalisé la routine de vérification visuelle (la revue de code personnelle) :

```text
git status
     ↓
git diff (Revue de code)
     ↓
Vérifier et Corriger
     ↓
git add
     ↓
git commit
```

La page de démonstration suivante présente un exemple de lecture de diff :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-9-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel git diff">
</iframe>

## Bilan

**Vous avez réalisé :**

Une routine stricte de vérification (Revue de code) avant la création d'un commit.

**Vous savez maintenant :**

* utiliser `git status` et `git diff` en combinaison ;
* lire les symboles `+` et `-` dans la console ;
* stopper un processus d'enregistrement pour effacer une information sensible.

## Glossaire

* **`git diff`** : commande qui affiche le delta (les modifications) non préparées.
* **Diff / Delta** : représentation textuelle des différences entre l'ancienne et la nouvelle version d'un code.
* **Revue de code (Code Review)** : lecture du code pour détecter d'éventuelles erreurs avant sa validation.
