---
title: "Modéliser une liaison complexe avec un identifiant composé"
layout: tuto
slug: "modeliser-liaison-identifiant-compose"
permalink: /tutos/:slug/normal
tuto_id: "T.112.134"
type: "classique"
version: "normal"
ua: "UA.112.13"
nav_order: 8
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à résoudre le problème des relations complexes entre entités en créant une **entité de liaison** dotée d'un **identifiant composé**.

Vous allez apprendre à :
* identifier une relation "Plusieurs-à-Plusieurs" (qui pose problème) ;
* comprendre la nécessité d'utiliser un identifiant composé ;
* créer une entité de liaison (comme une Ligne de commande) ;
* affecter correctement une donnée spécifique à la liaison (comme la quantité).

## 2. Prérequis

* Construire les entités à partir des données (T.112.133).

## Données de départ

Voici le dictionnaire de données d'un petit système de gestion de e-commerce. Lisez-le attentivement :

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

Imaginons le scénario d'une commande classique dans notre e-commerce :
- Une seule commande peut contenir **plusieurs** produits différents.
- Inversement, un même produit peut se retrouver dans **plusieurs** commandes différentes.

C'est ce qu'on appelle une relation "Plusieurs-à-Plusieurs". Cette situation crée un problème majeur pour le placement de certaines données. Par exemple, la `quantite_commandee` : il est impossible de la ranger dans l'entité `Commande` (car on se demanderait "quelle quantité pour quel produit ?") ni dans l'entité `Produit` (car on se demanderait "quelle quantité pour quelle commande ?").

### 1.2. La solution : L'entité de liaison

Pour résoudre ce problème de modélisation, on crée artificiellement une entité intermédiaire appelée **entité de liaison**. Dans le monde du commerce, cette entité est généralement nommée **Ligne_Commande** (ou parfois Détail_Commande). 
Elle sert de pont obligatoire pour relier une Commande et un Produit.

### 1.3. L'identifiant composé

Contrairement aux autres entités, l'entité `Ligne_Commande` n'a pas besoin d'un identifiant naturel simple (comme `id_ligne`). Sa particularité absolue est d'être identifiée par le croisement des deux entités qu'elle relie : 
Pour retrouver une ligne de commande précise et unique, il faut obligatoirement utiliser la combinaison de la commande ET du produit.
On écrit alors son identifiant sous forme "composée", en séparant les deux clés par une virgule : `id_commande, id_produit`.

### 1.4. Les données propres à la liaison

Revenons à notre donnée `quantite_commandee`. Elle dépend directement de ce fameux croisement : elle n'a de sens que si l'on précise la commande (pour savoir qui a commandé) ET le produit (pour savoir quoi).
La dépendance s'écrit donc formellement avec l'identifiant composé placé à gauche de la flèche :
`id_commande, id_produit -> quantite_commandee`

---

## Partie 2 — Pratique

### Exercice

À partir du dictionnaire de données fourni dans la section "Données de départ", construisez les entités finales de notre système de e-commerce.

**Travail à faire :**
1. Repérez les identifiants simples évidents (`id_client`, `id_commande`, `id_produit`) et construisez leurs entités de base (Client, Commande, Produit) avec les données qui en dépendent.
2. Identifiez la clé étrangère nécessaire pour relier le Client à la Commande (un client passe plusieurs commandes, donc la commande connaît son client).
3. Construisez l'entité de liaison `Ligne_Commande` en utilisant l'identifiant composé adéquat que nous avons vu.
4. Placez la donnée `quantite_commandee` dans la bonne entité (celle de liaison).

Présentez vos entités finales sous ce format :

```text
NOM_DE_L_ENTITÉ
---------------
identifiant
donnée_1
...
```

## Livrable

Créez un document **Markdown** contenant la liste claire de vos entités finalisées.
Nom conseillé : `entites-ecommerce.md`

## Résultat attendu

Vous devez obtenir **4 entités** distinctes : Client, Commande, Produit, et Ligne_Commande.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.134/entites-ecommerce.html' | relative_url }}"
    height="450"
    title="Résultat attendu — Modéliser une liaison complexe">
</iframe>

## Critères de réussite

* L'entité `Commande` contient bien la clé étrangère `id_client` (car la commande appartient à un client).
* L'entité `Ligne_Commande` possède obligatoirement l'identifiant composé `id_commande, id_produit`.
* La donnée `quantite_commandee` est placée EXCLUSIVEMENT dans l'entité `Ligne_Commande`.
* Il n'y a aucune donnée mal placée ou en doublon dans l'ensemble de votre modèle.

---

## Bilan

### Vous avez appris :
* À identifier clairement une situation où deux entités sont liées par une relation Plusieurs-à-Plusieurs.
* À créer une entité de liaison artificielle pour résoudre ce blocage.
* À utiliser un **identifiant composé** (la combinaison de deux IDs) pour assurer l'unicité absolue d'une ligne de liaison.
