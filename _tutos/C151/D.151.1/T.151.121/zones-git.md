---
title: "Les 3 zones de Git expliquées simplement"
layout: tuto
slug: "3-zones-git"
permalink: /tutos/:slug/
tuto_id: "T.151.121"
type: "classique"
version: "normal"
ua: "UA.151.12"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Comprendre le parcours d'un fichier dans Git :

**Dossier de travail → Zone de préparation → Dépôt Git**

À la fin du tutoriel, vous saurez expliquer le rôle de chacune des trois zones.

## 2. Prérequis

Vous devez :

* avoir compris la différence entre Git et GitHub dans le Tuto 2 ;
* connaître la notion de fichier et de projet.

Ce tutoriel est principalement théorique.

## Partie 1 — Théorie : Le parcours d'un fichier

### 1.1. Le dossier de travail

Le **dossier de travail** est le dossier de votre projet sur votre ordinateur.

C'est dans cette zone que vous :

* créez des fichiers ;
* modifiez votre code ;
* supprimez des fichiers ;
* testez votre travail.

Lorsque vous modifiez un fichier, Git détecte la modification.

La modification n'est pas encore préparée pour un commit.

### 1.2. La zone de préparation

La **zone de préparation** est aussi appelée **Staging Area**.

Elle permet de sélectionner les modifications que vous voulez inclure dans le prochain commit.

Vous pouvez donc choisir :

* une modification ;
* plusieurs modifications ;
* certains fichiers seulement.

Cette étape permet de préparer précisément le contenu du prochain commit.

### 1.3. Le dépôt Git

Le **dépôt Git** contient l'historique des commits du projet.

Après avoir préparé les modifications, vous créez un **commit**.

Le commit enregistre un état du projet dans l'historique Git.

Le commit contient notamment :

* les modifications sélectionnées ;
* la date ;
* l'auteur ;
* un message.

### 1.4. Le parcours d'un fichier

Une modification peut suivre ce parcours :

```text
Dossier de travail
       ↓
Je modifie le fichier
       ↓
Zone de préparation
       ↓
Je sélectionne la modification
       ↓
Dépôt Git
       ↓
Je crée un commit
```

Les trois zones ont donc des rôles différents :

* **Dossier de travail** : je modifie mon projet.
* **Zone de préparation** : je sélectionne les modifications du prochain commit.
* **Dépôt Git** : j'enregistre ces modifications dans l'historique.

### 1.5. Exemple simple

Vous avez un fichier :

```text
index.html
```

Vous modifiez le titre de la page.

Au départ :

**Dossier de travail**

Le fichier contient la modification.

Ensuite :

**Zone de préparation**

Vous ajoutez `index.html` à la zone de préparation.

Enfin :

**Dépôt Git**

Vous créez un commit, par exemple :

```text
Modification du titre de la page
```

La modification fait maintenant partie de l'historique Git.

### 1.6. À retenir

Le cycle de base est :

```text
Dossier de travail
        ↓
   Préparation
        ↓
      Commit
        ↓
Historique du dépôt
```

Un fichier ne passe donc pas directement du dossier de travail au commit.

La **zone de préparation** permet de choisir ce qui sera enregistré dans le prochain commit.

### Résultat attendu

Le schéma suivant résume les trois zones de Git et le parcours d'une modification :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-4-git.html' | relative_url}}"
    height="250"
    title="Les 3 zones de Git">
</iframe>

## Bilan

**Vous avez réalisé :**

La compréhension des trois principales zones utilisées lors de l'enregistrement d'une modification avec Git.

**Vous savez maintenant :**

* identifier le dossier de travail ;
* identifier la zone de préparation ;
* comprendre le rôle du dépôt Git ;
* comprendre le parcours d'une modification ;
* comprendre la relation entre préparation et commit.

## Glossaire

* **Dossier de travail** : dossier du projet dans lequel vous modifiez les fichiers.
* **Zone de préparation** : zone dans laquelle vous sélectionnez les modifications du prochain commit.
* **Dépôt Git** : espace contenant l'historique des commits du projet.
* **Staging Area** : autre nom de la zone de préparation.
* **Commit** : enregistrement d'un état du projet dans l'historique Git.
* **Historique** : ensemble des commits enregistrés dans le dépôt Git.
