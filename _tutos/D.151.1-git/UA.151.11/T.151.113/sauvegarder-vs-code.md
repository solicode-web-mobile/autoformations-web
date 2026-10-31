---
title: "Sauvegarder son code en un clic avec VS Code"
layout: tuto
slug: "sauvegarder-vs-code"
permalink: /tutos/sauvegarder-vs-code/
tuto_id: "T.151.113"
type: "classique"
version: "normal"
ua: "UA.151.11"
domain: "D.151.1"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Contexte & Objectif

- **Objectif :** Utiliser l'interface graphique de Visual Studio Code pour cloner son premier dépôt GitHub, préparer les modifications, créer son premier commit et synchroniser son travail en ligne.
- **Prérequis :** Git installé et configuré (T.151.111), un compte sur [GitHub.com](https://github.com) et Visual Studio Code.

---

## 2. Théorie Pas-à-Pas

### 2.1. Le panneau Contrôle de code source dans VS Code

Visual Studio Code intègre un onglet dédié à Git (icône avec trois petits cercles reliés). Il permet d'effectuer les opérations de sauvegarde sans taper de ligne de commande :

```mermaid
flowchart LR
    A["Créer le dépôt vide sur GitHub"] --> B["Cloner dans VS Code"]
    B --> C["Modifier le code (Ctrl + S)"]
    C --> D["Bouton + (Préparer)"]
    D --> E["Bouton Valider (Commit)"]
    E --> F["Bouton Synchroniser (Push)"]
```

### 2.2. Les trois actions visuelles clés

1. **Préparer (le bouton `+`) :** Indique quels fichiers modifiés doivent être inclus dans la sauvegarde.
2. **Valider (le bouton Commit) :** Enregistre la photo officielle des fichiers sur votre ordinateur avec un message explicatif.
3. **Synchroniser (le bouton Synchroniser ou Nuage) :** Envoie vos commits vers GitHub pour que votre code soit visible sur Internet.

---

## 3. Pratique & Réalisation Guidée

Vous allez créer votre premier dépôt pour le Blog, le cloner dans VS Code et réaliser votre première sauvegarde complète.

### 3.1. Créer le dépôt sur GitHub

1. Connectez-vous sur votre compte [GitHub.com](https://github.com).
2. Cliquez sur le bouton vert **New** (ou l'icône `+` en haut à droite > *New repository*).
3. Nommez votre dépôt : `mon-blog-personnel`.
4. Laissez le dépôt en **Public** et ne cochez aucune case supplémentaire (*Add a README file*, *.gitignore*).
5. Cliquez sur **Create repository**.
6. Copiez l'URL HTTPS fournie (ex: `https://github.com/votre-compte/mon-blog-personnel.git`).

### 3.2. Cloner le projet dans VS Code

1. Ouvrez Visual Studio Code.
2. Ouvrez l'onglet **Contrôle de code source** dans la barre latérale gauche (`Ctrl + Maj + G`).
3. Cliquez sur le bouton bleu **Cloner le dépôt** (ou *Clone Repository*).
4. Collez l'URL de votre dépôt GitHub dans le champ qui s'affiche en haut et appuyez sur `Entrée`.
5. Choisissez un dossier sur votre ordinateur pour enregistrer le projet.
6. Une notification apparaît en bas à droite : cliquez sur **Ouvrir**.

### 3.3. Créer un premier fichier et préparer la modification

1. Dans l'explorateur de VS Code, créez un fichier `index.html`.
2. Ajoutez une structure HTML simple :
   ```html
   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>Mon Blog Personnel</title>
   </head>
   <body>
       <h1>Bienvenue sur mon Blog</h1>
   </body>
   </html>
   ```
3. Enregistrez le fichier avec `Ctrl + S`.
4. Retournez dans l'onglet **Contrôle de code source** : `index.html` apparaît avec la lettre **U** (Untracked / Non suivi).
5. Survolez le fichier et cliquez sur le symbole **`+`** (*Prendre en compte les modifications*). Le fichier passe dans la section **Modifications indexées**.

### 3.4. Valider et envoyer sur GitHub

1. Dans le champ de texte situé en haut du panneau, saisissez votre message de sauvegarde :
   ```text
   feat: création de la page d'accueil du blog
   ```
2. Cliquez sur le bouton bleu **Valider** (ou *Commit*).
3. Cliquez ensuite sur le bouton bleu **Publier la branche** ou **Synchroniser les modifications**.
4. Rendez-vous sur votre page GitHub dans le navigateur et rafraîchissez : votre fichier `index.html` est en ligne avec votre message !

---

## 4. Critères de Réussite

- Le dépôt `mon-blog-personnel` est cloné localement dans un dossier propre.
- Le fichier `index.html` a été préparé avec le bouton `+`.
- Le commit est validé avec un message descriptif explicite.
- Le code source est synchronisé et visible sur GitHub sans message d'erreur d'authentification.

---

## 5. Glossaire

- **Cloner :** Télécharger la copie intégrale d'un dépôt GitHub sur son ordinateur.
- **Contrôle de code source :** Panneau de VS Code intégrant les commandes graphiques de Git.
- **Indexation (`+`) :** Sélection des fichiers qui feront partie du prochain commit.
- **Synchronisation :** Échange des commits entre le dépôt local et le dépôt distant sur GitHub.
