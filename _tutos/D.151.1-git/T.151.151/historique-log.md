---
title: "Lire l'historique du projet avec git log"
layout: tuto
slug: "historique-log"
permalink: /tutos/:slug/
tuto_id: "T.151.151"
type: "classique"
version: "normal"
ua: "UA.151.15"
nav_order: 1

data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Consulter l'historique d'un projet Git pour voir les commits réalisés au fil du temps.

À la fin du tutoriel, vous saurez lire les principales informations d'un commit et afficher un historique détaillé ou résumé.

## 2. Prérequis

Vous devez :

* avoir un projet géré avec Git ;
* avoir au moins un commit dans l'historique.

## Partie 1 — Théorie

### 1.1. L'historique Git

Chaque commit est enregistré dans l'historique du dépôt Git.

L'historique permet de voir les différentes étapes enregistrées dans le projet.

Un commit contient notamment :

* **Auteur** : personne qui a créé le commit.
* **Date** : date de création du commit.
* **Message** : description donnée au commit.
* **Identifiant** : identifiant du commit, appelé **hash**.

Le hash permet d'identifier précisément un commit.

### 1.2. La commande `git log`

La commande :

```bash
git log
```

affiche l'historique des commits.

Pour chaque commit, Git affiche notamment :

* le hash ;
* l'auteur ;
* la date ;
* le message.

Si l'historique est long, Git peut ouvrir un affichage permettant de parcourir les résultats.

Pour quitter cet affichage et revenir au terminal, appuyez sur :

```text
q
```

### 1.3. Afficher un historique résumé

La commande :

```bash
git log --oneline
```

affiche un résumé de l'historique.

Chaque commit est présenté sur une seule ligne avec :

* une partie du hash ;
* le message du commit.

Cette présentation est pratique pour lire rapidement plusieurs commits.

### 1.4. À retenir

* `git log` affiche l'historique des commits.
* L'historique permet de suivre les étapes enregistrées dans le projet.
* Le hash identifie un commit.
* `git log --oneline` affiche une version plus courte de l'historique.
* La touche `q` permet de quitter l'affichage de l'historique lorsqu'il utilise le pager.

## Partie 2 — Pratique

### 2.1. Afficher l'historique complet

#### Étape 1 — Exécuter `git log`

Ouvrez le terminal dans le dossier du projet.

Exécutez :

```bash
git log
```

Lisez les informations affichées.

Vous devez pouvoir identifier :

* l'auteur ;
* la date ;
* le message ;
* le hash du commit.

#### Étape 2 — Quitter l'affichage

Si Git affiche l'historique dans un écran de lecture, appuyez sur :

```text
q
```

Vous revenez alors au terminal.

### 2.2. Afficher un historique résumé

#### Étape 3 — Utiliser `git log --oneline`

Exécutez :

```bash
git log --oneline
```

Chaque commit apparaît sur une ligne.

**Résultat attendu :**

Un résultat peut ressembler à :

```text
a1b2c3d Ajouter le titre de la page
e4f5g6h Ajouter le fichier .gitignore
i7j8k9l Configurer le projet
```

Le hash affiché ici est une forme courte utilisée pour identifier le commit.

### Résultat attendu

Vous avez affiché l'historique du projet avec deux commandes :

```text
git log
```

pour consulter les informations détaillées, puis :

```text
git log --oneline
```

pour obtenir une vue résumée.

La page de démonstration suivante présente un exemple d'historique Git :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-10-git.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel git log">
</iframe>

## Bilan

**Vous avez réalisé :**

La consultation de l'historique des commits d'un projet Git.

**Vous savez maintenant :**

* afficher l'historique avec `git log` ;
* identifier les principales informations d'un commit ;
* afficher un historique résumé avec `git log --oneline` ;
* quitter l'affichage de l'historique avec la touche `q`.

## Glossaire

* **Historique** : ensemble des commits enregistrés dans un dépôt Git.
* **Commit** : enregistrement d'un état du projet dans l'historique Git.
* **Hash** : identifiant permettant d'identifier un commit.
* **`git log`** : commande qui affiche l'historique des commits.
* **`--oneline`** : option qui affiche chaque commit sur une seule ligne.
* **Pager** : affichage permettant de parcourir un résultat long dans le terminal.
