---
title: "Repérer les actions de l'Administrateur"
layout: tuto
slug: "reperer-les-actions-de-l-administrateur"
permalink: /tutos/:slug/
tuto_id: "T.111.131"
type: "classique"
version: "normal"
ua: "UA.111.13"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Vous allez observer la maquette du Blog du point de vue de l'**Administrateur**.

Vous allez repérer toutes les **actions possibles** dans l'espace d'administration.

## 2. Prérequis

- Tutoriel T.111.122 terminé (la méthodologie est acquise sur le Visiteur).

**Maquette du Blog :** <a href="https://solicode-web-mobile.github.io/maquette-blog/index.html" target="_blank">Ouvrir la maquette</a>

## Partie 1 — Théorie

### 1.1. Qu'est-ce que le CRUD ?

Dans un espace d'administration, les actions suivent souvent le même schéma :

| Lettre | Action | Exemple |
|---|---|---|
| **C** | Créer (Ajouter) | Ajouter un article |
| **R** | Lire (Lister) | Voir la liste des articles |
| **U** | Mettre à jour (Modifier) | Modifier un article |
| **D** | Supprimer | Supprimer un article |

On appelle cela le **CRUD**. C'est le modèle de base de toute gestion de données.

### 1.2. Qu'est-ce qu'une entité ?

Une **entité** est un type de donnée que l'on gère dans l'application.

**Exemple :** dans un Blog, les entités principales sont :

- **Article** : contenu publié sur le blog.
- **Catégorie** : classement thématique des articles.

### 1.3. À retenir

- L'espace d'administration permet de gérer les données.
- Les actions de gestion suivent le modèle **CRUD** (Créer, Lire, Modifier, Supprimer).
- Chaque type de donnée géré s'appelle une **entité**.

## Partie 2 — Pratique

### 2.1. Observer le Tableau de Bord

#### Étape 1 — Ouvrir le tableau de bord

Ouvrez la page principale de l'espace d'administration.

Observez le menu et les liens disponibles.

#### Étape 2 — Lister les actions

**Actions repérées :**

- Cliquer sur « Gestion des articles ».
- Cliquer sur « Gestion des catégories ».
- Cliquer sur « Se déconnecter ».

### 2.2. Observer la gestion des articles

#### Étape 1 — Observer la liste et le formulaire

Ouvrez la page qui liste les articles, puis le formulaire d'ajout.

Cherchez les boutons et les icônes d'action.

#### Étape 2 — Lister les actions

**Actions repérées :**

- Visualiser la liste des articles.
- Cliquer sur « Ajouter un article ».
- Cliquer sur l'icône « Modifier » d'une ligne.
- Cliquer sur l'icône « Supprimer » d'une ligne.
- Remplir le formulaire (Titre, Image, Catégorie, Contenu) et Enregistrer.

### 2.3. Observer la gestion des catégories

#### Étape 1 — Observer la liste et le formulaire

Ouvrez les pages de gestion des catégories.

Observez si le schéma est le même que pour les articles.

#### Étape 2 — Lister les actions

**Actions repérées :**

- Voir la liste des catégories.
- Ajouter une catégorie (remplir et enregistrer).
- Modifier une catégorie.
- Supprimer une catégorie.

> On retrouve le même schéma **CRUD** pour les deux entités.

### 2.4. Formaliser le résultat

#### Étape 1 — Regrouper toutes les actions

Regroupez toutes les actions repérées dans un document organisé par section.

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/analyse/tuto-5-analyse.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez réalisé :** la liste complète des actions brutes de l'Administrateur sur le Blog.

**Vous savez maintenant :**

- observer l'espace d'administration pour repérer les actions ;
- reconnaître le schéma CRUD (Créer, Lire, Modifier, Supprimer) ;
- identifier les entités gérées dans l'application.

## Glossaire

- **CRUD** : modèle de gestion de données (Créer, Lire, Modifier, Supprimer).
- **Entité** : type de donnée géré dans l'application (ex : Article, Catégorie).
- **Tableau de bord** : page principale de l'espace d'administration.
- **Formulaire** : zone de saisie pour ajouter ou modifier des données.
