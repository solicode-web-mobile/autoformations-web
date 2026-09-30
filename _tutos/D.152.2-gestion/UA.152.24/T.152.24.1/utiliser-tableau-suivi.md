---
title: "Utiliser un tableau de suivi"
layout: tuto
slug: "utiliser-tableau-suivi"
permalink: /tutos/utiliser-tableau-suivi/
tuto_id: "T.152.24.1"
type: "classique"
version: "normal"
ua: "UA.152.24"
nav_order: 1

data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Page d'accueil du blog</title>
  </head>
  <body>
      <h1>Mon blog</h1>
      <p>Bienvenue sur mon blog.</p>
  </body>
  </html>

data_css: ""

data_js: ""
---

## 1. Objectif

Vous allez apprendre à utiliser un tableau de suivi pour rendre visible l'état de votre travail.

Vous allez apprendre à :

- classer vos actions ;
- indiquer leur état ;
- mettre à jour le tableau ;
- montrer l'avancement réel de votre travail.

## 2. Prérequis

Vous devez savoir :

- identifier une tâche ;
- créer un planning simple ;
- découper une tâche en actions ;
- organiser les actions dans un ordre logique.

## Données de départ

### Contexte

Vous avez découpé le travail de votre projet en petites actions.

Certaines actions ne sont pas encore commencées.

D'autres sont en cours.

D'autres sont terminées.

Pour suivre le travail, vous allez utiliser trois états :

- **À faire** ;
- **En cours** ;
- **Terminé**.

Les actions utilisées dans ce tutoriel concernent la S6 :

- créer la base de données ;
- construire les requêtes ;
- afficher les articles.

Le code HTML fourni dans `data_html` sert de base de travail lorsque cela est nécessaire.

## Partie 1 — Théorie

### 1.1. L'état d'une tâche

L'**état** indique la situation actuelle d'une action.

Une action peut être :

- **À faire** : le travail n'a pas commencé ;
- **En cours** : le travail a commencé ;
- **Terminé** : le travail est terminé.

L'état doit correspondre à la situation réelle.

### 1.2. Le tableau de suivi

Un **tableau de suivi** permet de voir rapidement l'état des actions.

Il peut contenir trois colonnes :

| À faire | En cours | Terminé |
|---|---|---|
| Créer la base de données | | |
| Construire les requêtes | | |
| Afficher les articles | | |

Chaque action doit être placée dans la colonne correspondant à son état.

### 1.3. Mettre à jour le tableau

Le tableau doit être mis à jour lorsque l'état d'une action change.

Exemple :

Au début :

| À faire | En cours | Terminé |
|---|---|---|
| Afficher les articles | Construire les requêtes | Créer la base de données |

Après la fin des requêtes :

| À faire | En cours | Terminé |
|---|---|---|
| Afficher les articles | | Créer la base de données |
| | | Construire les requêtes |

Le tableau montre ainsi l'état actuel du travail.

### 1.4. La visibilité

Un tableau de suivi rend le travail **visible**.

Il permet de voir :

- ce qui reste à faire ;
- ce qui est en cours ;
- ce qui est terminé.

Il ne remplace pas le travail. Il permet de le suivre.

### 1.5. À retenir

- Une action possède un état.
- Les trois états utilisés ici sont **À faire**, **En cours** et **Terminé**.
- Le tableau doit représenter l'état réel du travail.
- Le tableau doit être mis à jour lorsque l'état change.

## Partie 2 — Pratique

### 2.1. Préparer les actions

Reprenez les tâches de la S6 :

- créer la base de données ;
- construire les requêtes ;
- afficher les articles.

Ajoutez des actions plus précises pour chaque tâche.

Exemple :

> Créer la base de données.

Peut être découpé en plusieurs actions.

Complétez votre liste :

| N° | Action |
|---:|---|
| 1 | |
| 2 | |
| 3 | |
| 4 | |
| 5 | |
| 6 | |

### 2.2. Classer les actions

Imaginez l'état suivant :

- les premières actions sont terminées ;
- une action est en cours ;
- les dernières actions restent à faire.

Placez vos actions dans le tableau :

| À faire | En cours | Terminé |
|---|---|---|
| | | |
| | | |
| | | |
| | | |
| | | |

### 2.3. Mettre à jour le tableau

Une action en cours vient maintenant de se terminer.

Déplacez cette action dans la colonne **Terminé**.

Une autre action commence.

Déplacez-la dans la colonne **En cours**.

Mettez à jour votre tableau.

### 2.4. Vérifier le suivi

Observez votre tableau.

Répondez aux questions suivantes :

1. Quelles actions restent à faire ?
2. Quelle action est en cours ?
3. Quelles actions sont terminées ?
4. Le tableau correspond-il à l'état réel du travail ?

Corrigez le tableau si nécessaire.

### 2.5. Construire le tableau de suivi

Créez votre tableau de suivi pour les tâches de la S6.

Utilisez les trois colonnes :

| À faire | En cours | Terminé |
|---|---|---|
| | | |
| | | |
| | | |
| | | |
| | | |

Placez chaque action dans la bonne colonne.

**Travail à faire :**

Créez un tableau de suivi pour les tâches de la S6.

Placez chaque action dans l'état correspondant et mettez le tableau à jour lorsque l'état change.

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant votre tableau de suivi.

**Critère de réussite :**

Chaque action est placée dans la bonne colonne et le tableau représente l'état réel du travail.

## Bilan

**Vous avez réalisé :** un tableau de suivi des actions de la S6.

**Vous savez maintenant :** rendre visible l'état de votre travail et mettre à jour vos actions lorsqu'elles passent de **À faire** à **En cours**, puis à **Terminé**.

## Glossaire

- **État** : situation actuelle d'une action.
- **À faire** : action qui n'a pas encore commencé.
- **En cours** : action actuellement réalisée.
- **Terminé** : action réalisée et terminée.
- **Tableau de suivi** : tableau qui permet de voir l'état des actions.
- **Mise à jour** : modification du tableau pour représenter l'état actuel du travail.