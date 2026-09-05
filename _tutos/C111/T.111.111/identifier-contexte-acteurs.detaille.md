---
title: "Identifier le contexte et les acteurs"
layout: tuto
slug: "identifier-contexte-acteurs"
permalink: /tutos/:slug/detaille
tuto_id: "T.111.111"
version: "detaille"
ua: "UA.111.11"
---


Comprendre une application à partir de ses maquettes et identifier sa finalité, son périmètre et ses acteurs.

**Prérequis** : Les maquettes du **Blog personnel** sont nécessaires.

# Partie 1 — Théorie

## 1.1. Application

Une **application** est un système créé pour répondre à un besoin.

Elle permet à des utilisateurs de réaliser certaines actions.

**Exemple :**

Un **Blog personnel** est une application qui permet de gérer et de consulter des articles.

On peut donc commencer l’analyse par cette question :

> **À quoi sert cette application ?**

La réponse permet de comprendre la fonction générale du système.

## 1.2. Finalité

La **finalité** explique pourquoi l’application existe.

Elle décrit le but général du système.

**Exemple :**

La finalité du Blog personnel peut être :

> publier et consulter des articles.

La finalité reste générale.

Elle ne décrit pas encore toutes les actions possibles.

## 1.3. Acteur

Un **acteur** est une personne ou un système qui utilise l’application.

Un acteur intervient dans le système pour réaliser une ou plusieurs actions.

**Exemple :**

Dans le Blog personnel, les acteurs sont :

- **Administrateur**
- **Visiteur**

L'Administrateur et le Visiteur n'ont pas le même rôle.

## 1.4. Rôle

Le **rôle** indique ce qu’un acteur peut faire dans l’application.

Deux acteurs peuvent utiliser la même application, mais avoir des actions différentes.

**Exemple :**

```text
Administrateur
→ gérer les articles

Visiteur
→ consulter les articles
````

L'Administrateur peut par exemple créer, modifier ou supprimer un article.

Le Visiteur peut consulter les articles disponibles.

Les actions exactes doivent être identifiées à partir des maquettes fournies.

## 1.5. Périmètre

Le **périmètre** indique ce qui est pris en compte dans l’application étudiée.

Il permet de distinguer :

* ce qui fait partie du système ;
* ce qui ne fait pas partie du système.

**Exemple :**

Pour le Blog personnel, le périmètre peut comprendre :

```text
Gérer les articles
Consulter les articles
```

Une fonctionnalité qui n'apparaît pas dans les maquettes ne doit pas être ajoutée sans raison.

Par exemple, si aucune commande n'est présente dans le support, la gestion des commandes ne fait pas partie du périmètre étudié.

## 1.6. Lire une maquette pour comprendre le système

Une maquette donne des informations sur l'application.

On peut observer :

* les pages ;
* les boutons ;
* les formulaires ;
* les menus ;
* les informations affichées ;
* les espaces réservés aux actions.

Ces éléments permettent de déduire le contexte, les acteurs et les fonctionnalités visibles.

L'analyse doit partir de ce qui est réellement présent dans le support.

## 1.7. À retenir

* **Application** → système qui répond à un besoin.
* **Finalité** → raison pour laquelle l’application existe.
* **Acteur** → personne ou système qui utilise l’application.
* **Rôle** → actions qu’un acteur peut réaliser.
* **Périmètre** → éléments et fonctionnalités pris en compte.
* **Maquette** → support visuel qui aide à comprendre l’application.

La relation principale est :

```text
Application
    ↓
Finalité
    ↓
Acteurs
    ↓
Rôles
    ↓
Périmètre
```

# Partie 2 — Pratique

## 2.1. Observer les maquettes

### Étape 1 — Observer l’application

Observez attentivement les maquettes du **Blog personnel**.

Ne cherchez pas encore à créer une solution technique.

Votre objectif est seulement de comprendre ce que montre le support.

Repérez notamment :

* les différentes pages ;
* les zones principales ;
* les informations affichées ;
* les boutons ;
* les actions visibles ;
* les espaces réservés aux utilisateurs.

Notez les éléments importants.

### Étape 2 — Identifier la finalité

À partir des maquettes, répondez à la question :

> **Pourquoi le Blog personnel existe-t-il ?**

Écrivez une phrase simple.

**Exemple :**

```text
Le Blog personnel permet de publier et de consulter des articles.
```

Votre phrase doit expliquer le but général de l’application.

### Étape 3 — Identifier le périmètre

Observez maintenant les fonctionnalités visibles dans les maquettes.

Notez uniquement les fonctionnalités qui appartiennent au périmètre étudié.

**Exemple :**

```text
Gérer les articles
Consulter les articles
```

Ne rajoutez pas une fonctionnalité qui n'est pas indiquée dans le support.

## 2.2. Identifier les acteurs

### Étape 4 — Identifier les acteurs

À partir des maquettes, identifiez les acteurs qui utilisent le Blog personnel.

Pour cette activité, les deux acteurs attendus sont :

```text
Administrateur
Visiteur
```

Associez chaque acteur aux pages ou espaces qu'il peut utiliser.

### Étape 5 — Identifier les rôles

Pour chaque acteur, indiquez les actions qu'il peut réaliser.

Utilisez les informations visibles dans les maquettes.

**Exemple :**

```text
Administrateur → gérer les articles

Visiteur → consulter les articles
```

Pour l'Administrateur, les actions peuvent être précisées selon les maquettes :

```text
Administrateur
→ créer un article
→ modifier un article
→ supprimer un article
```

Pour le Visiteur :

```text
Visiteur
→ voir les articles
→ lire un article
```

Ces exemples doivent être confirmés par le support fourni.

## 2.3. Réaliser l’analyse

### Étape 6 — Créer le livrable

Réalisez votre analyse à partir des informations observées.

Utilisez la structure :

```text
Application
    ↓
Finalité
    ↓
Acteurs
    ↓
Rôles
```

Puis ajoutez le **périmètre fonctionnel**.

Vous pouvez organiser votre résultat comme ceci :

```text
Application
Blog personnel

Finalité
Publier et consulter des articles.

Acteurs

Administrateur
→ gérer les articles

Visiteur
→ consulter les articles

Périmètre

→ gérer les articles
→ consulter les articles
```

Le contenu doit être basé sur les maquettes.

### Étape 7 — Vérifier l’analyse

Avant de terminer, vérifiez :

```text
✓ L'application est identifiée.
✓ La finalité est claire.
✓ Les acteurs sont identifiés.
✓ Le rôle de chaque acteur est indiqué.
✓ Le périmètre est défini.
✓ Les informations viennent des maquettes.
```

Ne rajoutez pas de fonctionnalité non présente dans le support.

**Résultat attendu :**

Une analyse claire permettant de comprendre l’application, sa finalité, son périmètre et les rôles de l’Administrateur et du Visiteur.

# 3. Bilan

**Vous avez réalisé :** une analyse du contexte et des acteurs du **Blog personnel** à partir de ses maquettes.

**Vous savez maintenant :**

* identifier une application ;
* expliquer sa finalité ;
* identifier son périmètre ;
* identifier les acteurs ;
* identifier le rôle des acteurs ;
* utiliser une maquette pour comprendre un besoin existant.

Vous savez maintenant passer :

```text
D'un support fonctionnel fourni
        ↓
à une représentation claire
du système à réaliser.
```

# 4. Glossaire

* **Application** : système créé pour répondre à un besoin.
* **Finalité** : raison pour laquelle l’application existe.
* **Acteur** : personne ou système qui utilise l’application.
* **Rôle** : actions qu’un acteur peut réaliser.
* **Périmètre** : éléments et fonctionnalités pris en compte dans l’application.
* **Maquette** : représentation visuelle d’une interface.
* **Fonctionnalité** : service ou action proposée par l’application.
* **Support fonctionnel** : document ou représentation qui décrit le besoin à réaliser.

