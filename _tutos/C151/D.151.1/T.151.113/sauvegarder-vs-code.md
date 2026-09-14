---
title: "Sauvegarder son code en un clic avec VS Code"
layout: tuto
slug: "sauvegarder-vs-code"
permalink: /tutos/:slug/
tuto_id: "T.151.113"
type: "classique"
version: "normal"
ua: "UA.151.11"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Utiliser l'interface Git de VS Code pour :

* cloner un dépôt GitHub ;
* préparer une modification ;
* créer un commit ;
* envoyer les changements vers GitHub.

## 2. Prérequis

Vous devez :

* avoir installé Git ;
* avoir configuré votre nom et votre adresse email dans Git ;
* disposer d'un dépôt GitHub ;
* avoir installé VS Code ;
* avoir VS Code ouvert.

## Partie 1 — Théorie

### 1.1. Git dans VS Code

VS Code intègre une interface pour utiliser Git.

Cette interface se trouve dans le panneau **Contrôle de code source**.

Elle permet d'effectuer plusieurs opérations Git sans saisir directement les commandes dans le terminal.

### 1.2. Le cycle de travail

Avec VS Code, le cycle de base est :

```text
Dépôt GitHub
     ↓
   Cloner
     ↓
Ordinateur
     ↓
Modifier les fichiers
     ↓
Préparer les modifications
     ↓
   Commit
     ↓
Dépôt local
     ↓
   Push
     ↓
Dépôt GitHub
```

Chaque opération a un rôle différent :

* **Cloner** : récupérer un dépôt distant sur l'ordinateur.
* **Préparer** : sélectionner les modifications à inclure dans le commit.
* **Commit** : enregistrer un état du projet dans l'historique local.
* **Push** : envoyer les commits locaux vers le dépôt distant.

### 1.3. À retenir

* VS Code fournit une interface graphique pour Git.
* Un **commit** enregistre une modification dans l'historique local.
* Un **push** envoie les commits vers le dépôt distant.
* Le commit et le push sont deux opérations différentes.

## Partie 2 — Pratique

### 2.1. Cloner un dépôt

#### Étape 1 — Ouvrir le contrôle de code source

Dans VS Code, cliquez sur l'icône **Contrôle de code source** dans la barre latérale.

#### Étape 2 — Cloner le dépôt

Cliquez sur **Cloner le dépôt**.

VS Code vous demande l'URL du dépôt GitHub.

Collez l'URL du dépôt.

Choisissez ensuite le dossier dans lequel le projet doit être enregistré.

#### Étape 3 — Ouvrir le projet

Après le clonage, VS Code propose d'ouvrir le projet.

Cliquez sur **Ouvrir**.

Le dépôt Git est maintenant disponible sur votre ordinateur.

### 2.2. Préparer une modification

#### Étape 4 — Modifier un fichier

Ouvrez un fichier du projet.

Faites une petite modification.

Par exemple, ajoutez un texte dans un fichier HTML.

Enregistrez le fichier.

#### Étape 5 — Ouvrir le contrôle de code source

Retournez dans **Contrôle de code source**.

VS Code affiche les fichiers qui ont été modifiés.

#### Étape 6 — Préparer la modification

Cliquez sur le bouton **+** à côté du fichier modifié.

La modification est maintenant préparée pour le commit.

### 2.3. Créer un commit

#### Étape 7 — Écrire le message du commit

Dans la zone de message, écrivez un message court qui décrit la modification.

Exemple :

```text
Ajout du titre de la page
```

#### Étape 8 — Valider la modification

Cliquez sur **Valider (Commit)**.

Le commit est maintenant enregistré dans l'historique local du dépôt.

### 2.4. Envoyer le commit vers GitHub

#### Étape 9 — Synchroniser

Utilisez **Synchroniser les modifications** ou l'action permettant d'envoyer les commits vers le dépôt distant.

VS Code envoie alors les commits locaux vers GitHub.

Le dépôt GitHub contient maintenant la nouvelle version du projet.

### Résultat attendu

Le cycle complet est réalisé :

```text
Cloner
   ↓
Modifier
   ↓
Préparer
   ↓
Commit
   ↓
Push
   ↓
GitHub
```

La page de démonstration suivante présente le résultat attendu dans VS Code :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-3-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel Git avec VS Code">
</iframe>

## Bilan

**Vous avez réalisé :**

Le cycle de travail Git avec VS Code : clonage d'un dépôt, modification d'un fichier, création d'un commit et envoi vers GitHub.

**Vous savez maintenant :**

* cloner un dépôt GitHub ;
* afficher les modifications dans VS Code ;
* préparer une modification ;
* créer un commit ;
* envoyer les commits vers GitHub.

## Glossaire

* **VS Code** : éditeur de code qui intègre une interface pour utiliser Git.
* **Cloner** : récupérer un dépôt distant sur son ordinateur.
* **Commit** : enregistrer un état du projet dans l'historique Git.
* **Push** : envoyer les commits locaux vers un dépôt distant.
* **Dépôt local** : dépôt Git enregistré sur l'ordinateur.
* **Dépôt distant** : dépôt Git hébergé sur un serveur, par exemple GitHub.
