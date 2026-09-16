---
title: "Formaliser les fonctionnalités du Visiteur"
layout: tuto
slug: "formaliser-les-fonctionnalites-du-visiteur"
permalink: /tutos/:slug/
tuto_id: "T.111.122"
type: "classique"
version: "normal"
ua: "UA.111.12"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Vous allez transformer les actions brutes du Visiteur en **fonctionnalités** formalisées.

Vous allez apprendre :

- la **règle de nommage** (Acteur + Action + Élément) ;
- la notion de **parcours fonctionnel** ;
- la production d'une **synthèse fonctionnelle**.

## 2. Prérequis

- Tutoriel T.111.121 terminé (les actions brutes du Visiteur sont listées).

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une fonctionnalité ?

Une **fonctionnalité** est une action métier formulée de manière standard.

Elle décrit **qui** fait **quoi** sur **quel élément**.

**Exemple :** « Le Visiteur consulte le détail d'un article. »

### 1.2. La règle de nommage

Pour écrire une fonctionnalité, on utilise la règle :

> **Acteur + Action + Élément**

| Partie | Exemple |
|---|---|
| **Acteur** | Le Visiteur |
| **Action** | consulte |
| **Élément** | le détail d'un article |

Cette règle permet de transformer « cliquer sur Lire la suite » en une formulation professionnelle.

### 1.3. Qu'est-ce qu'un parcours fonctionnel ?

Un **parcours fonctionnel** décrit les étapes d'une fonctionnalité :

> **Acteur → Écran de départ → Action → Résultat**

**Exemple :**

> Visiteur → Page d'accueil → Clique sur « Lire la suite » → Affichage de la page de détail de l'article.

### 1.4. À retenir

- Une fonctionnalité suit la règle : **Acteur + Action + Élément**.
- Un parcours fonctionnel décrit le chemin complet d'une action.
- La synthèse regroupe toutes les fonctionnalités d'un acteur.

## Partie 2 — Pratique

### 2.1. Appliquer la règle de nommage

#### Étape 1 — Reprendre les actions brutes

Reprenez la liste des actions brutes du Visiteur (tutoriel précédent).

#### Étape 2 — Formuler les fonctionnalités

Appliquez la règle **Acteur + Action + Élément** à chaque action :

- Le Visiteur consulte la liste des articles.
- Le Visiteur consulte les articles d'une catégorie.
- Le Visiteur consulte le détail d'un article.
- Le Visiteur s'authentifie (se connecte).

### 2.2. Décrire un parcours fonctionnel

#### Étape 1 — Choisir une fonctionnalité

Prenez la fonctionnalité : « Le Visiteur consulte le détail d'un article. »

#### Étape 2 — Décrire le parcours

Suivez le modèle **Acteur → Écran de départ → Action → Résultat** :

> **Acteur :** Visiteur
> **Écran de départ :** Page d'accueil
> **Action :** Clique sur le bouton « Lire la suite »
> **Résultat :** Affichage de la Page de détail de l'article

### 2.3. Produire la synthèse fonctionnelle

#### Étape 1 — Regrouper les fonctionnalités

Regroupez toutes les fonctionnalités du Visiteur dans un tableau :

| Acteur | Fonctionnalités |
|---|---|
| **Visiteur** | - Consulter la liste des articles<br>- Consulter les articles d'une catégorie<br>- Consulter le détail d'un article<br>- S'authentifier (se connecter) |

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/analyse/tuto-4-analyse.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez réalisé :** la formalisation complète des fonctionnalités du Visiteur avec la règle de nommage, un parcours fonctionnel et la synthèse finale.

**Vous savez maintenant :**

- transformer une action brute en fonctionnalité avec la règle **Acteur + Action + Élément** ;
- décrire un parcours fonctionnel ;
- produire une synthèse fonctionnelle pour un acteur.

## Glossaire

- **Fonctionnalité** : action métier formulée selon la règle Acteur + Action + Élément.
- **Règle de nommage** : méthode standard pour écrire une fonctionnalité (Acteur + Action + Élément).
- **Parcours fonctionnel** : description étape par étape d'une fonctionnalité (Acteur → Écran → Action → Résultat).
- **Synthèse fonctionnelle** : tableau regroupant toutes les fonctionnalités d'un acteur.
