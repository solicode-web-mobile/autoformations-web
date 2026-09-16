---
title: "Formaliser les fonctionnalités de l'Administrateur"
layout: tuto
slug: "formaliser-les-fonctionnalites-de-l-administrateur"
permalink: /tutos/:slug/
tuto_id: "T.111.132"
type: "classique"
version: "normal"
ua: "UA.111.13"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Vous allez transformer les actions brutes de l'Administrateur en **fonctionnalités** formalisées.

Vous allez réutiliser :

- la **règle de nommage** (Acteur + Action + Élément) ;
- la notion de **parcours fonctionnel** ;
- la production d'une **synthèse fonctionnelle** organisée par entité.

## 2. Prérequis

- Tutoriel T.111.131 terminé (les actions brutes de l'Administrateur sont listées).
- Tutoriel T.111.122 terminé (la règle de nommage est connue).

## Partie 1 — Théorie

### 1.1. Rappel de la règle de nommage

Pour écrire une fonctionnalité, on utilise la règle :

> **Acteur + Action + Élément**

Vous avez déjà appliqué cette règle pour le Visiteur. Vous allez maintenant l'appliquer pour l'Administrateur.

### 1.2. Organisation par entité

L'Administrateur gère plusieurs **entités** (types de données).

Pour organiser la synthèse, on regroupe les fonctionnalités **par entité** :

- **Articles** : toutes les fonctionnalités liées aux articles.
- **Catégories** : toutes les fonctionnalités liées aux catégories.

### 1.3. À retenir

- La même règle de nommage s'applique à tous les acteurs.
- Pour l'Administrateur, on organise les fonctionnalités **par entité**.
- Chaque entité suit le schéma CRUD.

## Partie 2 — Pratique

### 2.1. Appliquer la règle de nommage

#### Étape 1 — Reprendre les actions brutes

Reprenez la liste des actions brutes de l'Administrateur (tutoriel précédent).

#### Étape 2 — Formuler les fonctionnalités par entité

Appliquez la règle **Acteur + Action + Élément** :

**Articles :**

- L'Administrateur liste les articles.
- L'Administrateur ajoute un article.
- L'Administrateur modifie un article.
- L'Administrateur supprime un article.

**Catégories :**

- L'Administrateur liste les catégories.
- L'Administrateur ajoute une catégorie.
- L'Administrateur modifie une catégorie.
- L'Administrateur supprime une catégorie.

### 2.2. Décrire un parcours fonctionnel

#### Étape 1 — Choisir une fonctionnalité

Prenez la fonctionnalité : « L'Administrateur ajoute une catégorie. »

#### Étape 2 — Décrire le parcours

Suivez le modèle **Acteur → Écran de départ → Action → Résultat** :

> **Acteur :** Administrateur
> **Écran de départ :** Page de gestion des catégories
> **Action :** Clique sur le bouton « Ajouter une catégorie »
> **Résultat :** Affichage du formulaire de création de catégorie

### 2.3. Produire la synthèse fonctionnelle

#### Étape 1 — Regrouper les fonctionnalités par entité

Regroupez toutes les fonctionnalités de l'Administrateur dans un tableau organisé par entité :

| Acteur | Fonctionnalités |
|---|---|
| **Administrateur** | **Gestion des Articles :**<br>- Lister les articles<br>- Ajouter un article<br>- Modifier un article<br>- Supprimer un article<br><br>**Gestion des Catégories :**<br>- Lister les catégories<br>- Ajouter une catégorie<br>- Modifier une catégorie<br>- Supprimer une catégorie |

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/analyse/tuto-6-analyse.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez réalisé :** la formalisation complète des fonctionnalités de l'Administrateur avec la règle de nommage, un parcours fonctionnel et la synthèse finale organisée par entité.

**Vous savez maintenant :**

- réutiliser la règle **Acteur + Action + Élément** pour un nouvel acteur ;
- organiser les fonctionnalités par entité ;
- produire une synthèse fonctionnelle complète pour l'espace d'administration.

## Glossaire

- **Fonctionnalité** : action métier formulée selon la règle Acteur + Action + Élément.
- **Entité** : type de donnée géré dans l'application (ex : Article, Catégorie).
- **CRUD** : modèle de gestion de données (Créer, Lire, Modifier, Supprimer).
- **Synthèse fonctionnelle** : tableau regroupant toutes les fonctionnalités d'un acteur, organisé par entité.
- **Parcours fonctionnel** : description étape par étape d'une fonctionnalité.
