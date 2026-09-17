---
title: "Modéliser une liaison complexe avec un identifiant composé"
layout: tuto
slug: "modeliser-liaison-identifiant-compose"
permalink: /tutos/:slug/compact
tuto_id: "T.112.134"
type: "classique"
version: "compact"
ua: "UA.112.13"
nav_order: 8
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à résoudre le problème des relations complexes en créant une **entité de liaison** dotée d'un **identifiant composé**.

Vous allez apprendre à :
* identifier une relation "Plusieurs-à-Plusieurs" ;
* comprendre la nécessité d'un identifiant composé ;
* créer une entité de liaison (ex: Ligne de commande) ;
* affecter correctement une donnée de liaison (ex: la quantité).

## 2. Prérequis

* Construire les entités à partir des données (T.112.133).

## Données de départ

Voici le dictionnaire de données d'un système de gestion de e-commerce :

| Donnée                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `id_client`            | Identifiant unique du client                     |
| `nom_client`           | Nom du client                                    |
| `id_commande`          | Numéro de la commande                            |
| `date_commande`        | Date à laquelle la commande a été passée         |
| `id_produit`           | Code unique du produit                           |
| `nom_produit`          | Nom du produit                                   |
| `quantite_commandee`   | Quantité d'un produit spécifique dans la commande|

---

## Partie 1 — Théorie

### 1.1. Le problème du "Plusieurs-à-Plusieurs"

Imaginons le scénario d'une commande :
- Une commande peut contenir **plusieurs** produits différents.
- Un produit peut se retrouver dans **plusieurs** commandes différentes.
C'est ce qu'on appelle une relation "Plusieurs-à-Plusieurs". Il est impossible de ranger la donnée `quantite_commandee` dans l'entité `Commande` (quelle quantité pour quel produit ?) ni dans l'entité `Produit` (quelle quantité pour quelle commande ?).

### 1.2. La solution : L'entité de liaison

Pour résoudre ce problème, on crée une entité intermédiaire appelée **entité de liaison**. Dans le commerce, cette entité s'appelle généralement **Ligne_Commande** (ou Détail_Commande). 
Elle sert de pont entre la Commande et le Produit.

### 1.3. L'identifiant composé

L'entité `Ligne_Commande` n'a pas d'identifiant naturel simple. Sa particularité est qu'elle est identifiée par le croisement des deux entités qu'elle relie : 
Pour retrouver une ligne de commande unique, il faut obligatoirement la combinaison de `id_commande` ET `id_produit`.
On écrit alors son identifiant sous forme composée : `id_commande, id_produit`.

### 1.4. Les données propres à la liaison

La donnée `quantite_commandee` dépend directement de ce fameux croisement : elle n'a de sens que si l'on précise la commande ET le produit.
La dépendance s'écrit donc avec l'identifiant composé à gauche :
`id_commande, id_produit -> quantite_commandee`

---

## Partie 2 — Pratique

### Exercice

À partir du dictionnaire de données fourni dans les "Données de départ", construisez les entités finales du système de e-commerce.

**Travail à faire :**
1. Repérez les identifiants simples évidents (`id_client`, `id_commande`, `id_produit`) et construisez leurs entités de base (Client, Commande, Produit) avec les données qui en dépendent.
2. Identifiez la clé étrangère nécessaire pour relier le Client à la Commande (un client passe plusieurs commandes).
3. Construisez l'entité de liaison `Ligne_Commande` en utilisant l'identifiant composé adéquat.
4. Placez la donnée `quantite_commandee` dans la bonne entité.

Présentez vos entités finales sous ce format :

```text
NOM_DE_L_ENTITÉ
---------------
identifiant
donnée_1
...
```

## Livrable

Créez un document **Markdown** contenant la liste de vos entités finalisées.
Nom conseillé : `entites-ecommerce.md`

## Résultat attendu

Vous devez obtenir **4 entités** distinctes : Client, Commande, Produit, et Ligne_Commande.

## Critères de réussite

* L'entité `Commande` contient bien la clé étrangère `id_client` (car la commande appartient à un client).
* L'entité `Ligne_Commande` possède obligatoirement l'identifiant composé `id_commande, id_produit`.
* La donnée `quantite_commandee` est placée EXCLUSIVEMENT dans l'entité `Ligne_Commande`.
* Il n'y a aucune donnée mal placée ou en doublon.

---

## Bilan

### Vous avez appris :
* À identifier une situation où deux entités sont liées par une relation Plusieurs-à-Plusieurs.
* À créer une entité de liaison pour résoudre ce problème.
* À utiliser un **identifiant composé** (combinaison de deux IDs) pour assurer l'unicité d'une ligne de liaison.
