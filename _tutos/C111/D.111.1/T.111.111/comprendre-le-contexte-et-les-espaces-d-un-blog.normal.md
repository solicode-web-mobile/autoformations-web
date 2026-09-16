---
title: "Comprendre le contexte et les espaces d'un Blog"
layout: tuto
slug: "comprendre-le-contexte-et-les-espaces-d-un-blog"
permalink: /tutos/:slug/
tuto_id: "T.111.111"
type: "classique"
version: "normal"
ua: "UA.111.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Vous allez observer la maquette d'un Blog.

Vous allez apprendre à reconnaître :

- le **contexte général** de l'application ;
- les **3 espaces** qui composent le Blog : Public, Connexion et Administration.

## 2. Prérequis

Aucun prérequis technique.

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'une application web ?

Une **application web** est un logiciel accessible depuis un navigateur (Chrome, Firefox, Edge…).

L'utilisateur ouvre une adresse (URL) et peut consulter ou modifier des informations.

**Exemple :** un Blog, un site e-commerce, un réseau social.

### 1.2. Qu'est-ce que le contexte d'une application ?

Le **contexte** d'une application répond à la question :

> À quoi sert cette application ?

C'est la **finalité** de l'application.

**Exemple :** un Blog sert à publier et consulter des articles classés par catégories.

### 1.3. Qu'est-ce qu'un espace fonctionnel ?

Un **espace fonctionnel** est une zone de l'application qui a un rôle précis.

Chaque espace regroupe des pages qui servent le même objectif.

**Exemple :** l'espace public regroupe les pages de consultation. L'espace administration regroupe les pages de gestion.

### 1.4. À retenir

- Une application web a une **finalité** (son objectif principal).
- Une application web est composée de **plusieurs espaces**.
- Chaque espace a un **rôle différent**.

## Partie 2 — Pratique

### 2.1. Identifier le contexte général du Blog

#### Étape 1 — Observer le site

Ouvrez la maquette du Blog.

Regardez :

- le nom du site ;
- le type de contenu affiché (articles, catégories) ;
- l'apparence générale.

#### Étape 2 — Déterminer la finalité

Répondez à cette question :

> Quel est l'objectif principal de cette application web ?

**Réponse :** il s'agit d'un **Blog**. Son objectif est de publier des articles classés par catégories.

### 2.2. Repérer les espaces du Blog

#### Étape 1 — Observer l'Espace Public

Parcourez les pages accessibles depuis l'accueil :

- Page d'accueil
- Page de détail d'un article
- Page de liste des articles par catégorie
- Page « À propos »

Vous remarquez un menu de navigation commun. Vous pouvez lire et consulter les articles.

Il n'y a **aucun bouton** pour modifier ou ajouter du contenu.

> C'est l'**Espace Public** : consultation libre, sans identification.

#### Étape 2 — Observer l'Espace de Connexion

Observez la page qui contient un formulaire avec :

- un champ **Email** ;
- un champ **Mot de passe** ;
- un bouton **Se connecter**.

Cette page sert de **barrière de sécurité**. Elle empêche n'importe qui d'accéder aux fonctionnalités de gestion.

> C'est l'**Espace de Connexion** : accès sécurisé par authentification.

#### Étape 3 — Observer l'Espace Administration

Regardez les pages qui contiennent :

- des tableaux de données (liste des articles, liste des catégories) ;
- des formulaires d'ajout et de modification.

Le menu est **différent** de l'espace public. Ces pages permettent d'ajouter, modifier et supprimer des données.

> C'est l'**Espace Administration** : gestion réservée et sécurisée.

### 2.3. Formaliser le résultat

#### Étape 1 — Compléter le schéma des espaces

À partir de vos observations, complétez le schéma suivant :

| Espace | Rôle | Pages |
|---|---|---|
| **Espace Public** | Consultation libre | Accueil, Détail article, Catégories, À propos |
| **Espace de Connexion** | Barrière d'accès | Page de connexion (formulaire) |
| **Espace Administration** | Gestion sécurisée | Tableau de bord, Gestion articles, Gestion catégories |

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/analyse/tuto-1-analyse.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez réalisé :** l'identification du contexte d'un Blog et le repérage de ses 3 espaces fonctionnels.

**Vous savez maintenant :**

- reconnaître la finalité d'une application web ;
- distinguer l'Espace Public, l'Espace de Connexion et l'Espace Administration ;
- décrire le rôle de chaque espace.

## Glossaire

- **Application web** : logiciel accessible depuis un navigateur internet.
- **Blog** : application web qui permet de publier et consulter des articles classés par catégories.
- **Contexte** : ce à quoi sert l'application (sa finalité).
- **Finalité** : l'objectif principal d'une application.
- **Espace fonctionnel** : zone de l'application qui regroupe des pages ayant le même rôle.
- **Espace Public** : partie du site accessible à tous, sans identification.
- **Espace de Connexion** : page de sécurité qui demande un identifiant et un mot de passe.
- **Espace Administration** : partie réservée à la gestion du contenu (ajouter, modifier, supprimer).
- **Maquette** : représentation visuelle d'une application, utilisée pour observer et analyser.
