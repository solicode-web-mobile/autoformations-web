---
title: "Repérer les actions du Visiteur"
layout: tuto
slug: "reperer-les-actions-du-visiteur"
permalink: /tutos/:slug/
tuto_id: "T.111.121"
type: "classique"
version: "normal"
ua: "UA.111.12"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Vous allez observer la maquette du Blog du point de vue du **Visiteur**.

Vous allez repérer toutes les **actions possibles** : liens, boutons et formulaires.

## 2. Prérequis

- Tutoriel T.111.112 terminé (les acteurs Visiteur et Administrateur sont identifiés).

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une action utilisateur ?

Une **action** est ce que l'utilisateur peut faire sur une page.

On repère une action en observant les **éléments interactifs** de la page.

**Exemple :** cliquer sur un lien, remplir un formulaire, appuyer sur un bouton.

### 1.2. Les éléments interactifs

Il existe 3 types principaux d'éléments interactifs :

- **Lien** : texte ou image cliquable qui mène vers une autre page.
- **Bouton** : élément qui déclenche une action (envoyer, valider, supprimer).
- **Formulaire** : zone de saisie qui permet d'entrer des informations (texte, email, mot de passe).

### 1.3. À retenir

- Une action est ce que l'utilisateur peut faire sur une page.
- On repère les actions en observant les liens, boutons et formulaires.
- Chaque page peut contenir plusieurs actions.

## Partie 2 — Pratique

### 2.1. Repérer les actions sur la page d'accueil et les catégories

#### Étape 1 — Observer les pages de listes

Ouvrez la page d'accueil du Blog et les pages de catégories.

Cherchez tous les éléments sur lesquels le Visiteur peut cliquer.

#### Étape 2 — Lister les actions

**Actions repérées :**

- Cliquer sur les liens du menu (Accueil, Catégories, À propos).
- Cliquer sur un badge de catégorie.
- Cliquer sur « Lire la suite » d'un article.

### 2.2. Repérer les actions sur le détail d'un article

#### Étape 1 — Observer la page de détail

Ouvrez la page qui affiche un article complet.

Observez ce que le Visiteur peut faire ici.

#### Étape 2 — Lister les actions

**Actions repérées :**

- Lire le titre, la date, l'auteur et le texte de l'article.
- Revenir à l'accueil via le logo.

### 2.3. Repérer les actions sur la page de connexion

#### Étape 1 — Observer la page de connexion

Ouvrez la page de connexion.

Observez le formulaire affiché.

#### Étape 2 — Lister les actions

**Actions repérées :**

- Saisir l'adresse email.
- Saisir le mot de passe.
- Cliquer sur le bouton « Se connecter ».

### 2.4. Formaliser le résultat

#### Étape 1 — Regrouper toutes les actions

Regroupez toutes les actions repérées dans un document organisé par page.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/analyse/tuto-3-analyse.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez réalisé :** la liste complète des actions brutes du Visiteur sur le Blog.

**Vous savez maintenant :**

- observer une maquette pour repérer les éléments interactifs ;
- distinguer les liens, les boutons et les formulaires ;
- lister les actions possibles pour un acteur donné.

## Glossaire

- **Action** : ce que l'utilisateur peut faire sur une page (cliquer, saisir, lire).
- **Lien** : élément cliquable qui mène vers une autre page.
- **Bouton** : élément qui déclenche une action.
- **Formulaire** : zone de saisie pour entrer des informations.
- **Action brute** : action observée telle quelle, avant d'être formalisée en fonctionnalité.
