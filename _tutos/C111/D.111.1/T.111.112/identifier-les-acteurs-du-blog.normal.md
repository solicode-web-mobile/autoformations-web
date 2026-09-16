---
title: "Identifier les acteurs du Blog"
layout: tuto
slug: "identifier-les-acteurs-du-blog"
permalink: /tutos/:slug/
tuto_id: "T.111.112"
type: "classique"
version: "normal"
ua: "UA.111.11"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Vous allez observer les espaces du Blog pour identifier **qui** utilise l'application.

Vous allez apprendre à reconnaître les **acteurs** et leur **rôle**.

## 2. Prérequis

- Tutoriel T.111.111 terminé (les 3 espaces du Blog sont identifiés).

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un acteur ?

Un **acteur** est une personne qui utilise l'application.

Chaque acteur a un **rôle** différent. Il n'a pas accès aux mêmes pages.

**Exemple :** un client qui consulte un site web et un gestionnaire qui modifie le contenu sont deux acteurs différents.

### 1.2. Comment identifier un acteur ?

Pour trouver un acteur, posez-vous ces questions :

- **Qui** peut accéder à cet espace ?
- **Que** peut faire cette personne ?
- **Faut-il s'identifier** pour accéder à ces pages ?

### 1.3. À retenir

- Un acteur est une personne qui utilise l'application.
- Chaque acteur a un rôle précis.
- Un acteur est lié à un ou plusieurs espaces.

## Partie 2 — Pratique

### 2.1. Identifier l'acteur de l'Espace Public

#### Étape 1 — Observer l'Espace Public

Ouvrez les pages de l'Espace Public :

- Page d'accueil
- Page de détail d'un article
- Page de catégories
- Page « À propos »

Répondez à cette question :

> Qui peut consulter ces pages ? Faut-il être inscrit ?

#### Étape 2 — Nommer l'acteur

**Réponse :** n'importe qui peut lire ces pages librement, sans s'identifier.

On appelle cet acteur le **Visiteur**.

> Le **Visiteur** consulte librement les contenus du Blog sans être identifié.

### 2.2. Identifier l'acteur de l'Espace Administration

#### Étape 1 — Observer l'Espace de Connexion et l'Administration

Observez la page de connexion, puis les pages d'administration :

- Tableau de bord
- Gestion des articles
- Gestion des catégories

Répondez à cette question :

> Qui peut franchir la barrière de connexion et accéder à ces pages ?

#### Étape 2 — Nommer l'acteur

**Réponse :** seule une personne autorisée, qui possède les bonnes informations de connexion, peut gérer le site.

On appelle cet acteur l'**Administrateur**.

> L'**Administrateur** s'identifie pour gérer et administrer les contenus du Blog.

### 2.3. Formaliser le résultat

#### Étape 1 — Compléter le tableau Acteurs / Espaces

À partir de vos observations, complétez le tableau suivant :

| Acteur | Pages / Espace concerné | Rôle |
|---|---|---|
| **Visiteur** | Pages de l'Espace Public (Accueil, Catégories, Détail d'un article, À propos) | Consulter librement les contenus du blog sans être identifié. |
| **Administrateur** | Page de Connexion et pages de l'Espace Administration (Tableau de bord, Gestion des articles et catégories) | S'identifier pour gérer et administrer les contenus du blog. |

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/analyse/tuto-2-analyse.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez réalisé :** l'identification des deux acteurs du Blog et la description de leur rôle.

**Vous savez maintenant :**

- reconnaître un acteur à partir des espaces qu'il utilise ;
- nommer un acteur et décrire son rôle ;
- relier chaque acteur aux pages qui le concernent.

## Glossaire

- **Acteur** : personne qui utilise l'application.
- **Visiteur** : acteur qui consulte le contenu public sans s'identifier.
- **Administrateur** : acteur qui gère le contenu du site après identification.
- **Rôle** : ce que fait un acteur dans l'application.
- **Identification** : action de prouver son identité (email + mot de passe).
