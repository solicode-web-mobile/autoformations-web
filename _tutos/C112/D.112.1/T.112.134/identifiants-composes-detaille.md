---
title: "Modéliser une liaison complexe avec un identifiant composé"
layout: tuto
slug: "modeliser-liaison-identifiant-compose"
permalink: /tutos/:slug/detaille
tuto_id: "T.112.134"
type: "classique"
version: "detaille"
ua: "UA.112.13"
nav_order: 8
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel très important, vous allez apprendre à résoudre le problème épineux des relations complexes entre les entités. Pour y parvenir, vous découvrirez comment créer une **entité de liaison** spéciale, dotée de ce que l'on appelle un **identifiant composé**.

Vous allez apprendre pas à pas à :
* identifier une relation "Plusieurs-à-Plusieurs", qui pose souvent problème lors de la modélisation ;
* comprendre pourquoi et quand nous avons absolument besoin d'utiliser un identifiant composé ;
* créer concrètement une entité de liaison (en prenant l'exemple célèbre de la Ligne de commande) ;
* affecter correctement une donnée spécifique à la liaison (comme la quantité commandée), qui ne peut aller nulle part ailleurs.

## 2. Prérequis

* Construire les entités à partir des données (T.112.133).

## Données de départ

Voici le dictionnaire de données d'un système de gestion de e-commerce. Prenez le temps de bien lire et de comprendre la signification de chaque donnée avant de poursuivre :

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

Imaginons le scénario d'une commande dans notre boutique e-commerce. Vous avez tous déjà commandé en ligne :
- Une même commande (votre panier validé) peut contenir **plusieurs** produits différents (un t-shirt, un pantalon, des chaussures).
- Inversement, un même produit (le t-shirt) peut se retrouver acheté dans **plusieurs** commandes différentes, passées par différents clients.

C'est ce que l'on appelle en conception une relation "Plusieurs-à-Plusieurs". Cette situation crée un véritable casse-tête pour le placement de certaines données. Prenons l'exemple de la donnée `quantite_commandee` : il est absolument impossible de la ranger dans l'entité `Commande` (car la base de données se demanderait "vous parlez de la quantité de quel produit dans cette commande ?") et tout aussi impossible de la ranger dans l'entité `Produit` (car on se demanderait "vous parlez de la quantité achetée dans quelle commande ?").

### 1.2. La solution : L'entité de liaison

Pour résoudre ce problème de modélisation classique, on crée de toutes pièces une entité intermédiaire que l'on appelle une **entité de liaison**. Dans le monde du commerce et de la facturation, cette entité est universellement nommée **Ligne_Commande** (ou parfois Détail_Commande). 
Elle sert de pont obligatoire pour relier une Commande et un Produit. Chaque produit acheté dans une commande correspondra donc à une ligne sur la facture finale.

### 1.3. L'identifiant composé

Contrairement aux autres entités "normales" (comme Client ou Produit), l'entité de liaison `Ligne_Commande` n'a pas besoin d'un identifiant naturel simple (comme `id_ligne`). Sa particularité absolue est d'être identifiée uniquement par le croisement parfait des deux entités qu'elle relie : 
Pour retrouver une ligne de commande précise et unique dans notre base de données, il faut obligatoirement utiliser la combinaison de la commande précise ET du produit précis.
On écrit alors son identifiant sous forme "composée", en séparant les deux clés primaires par une simple virgule : `id_commande, id_produit`.

### 1.4. Les données propres à la liaison

Revenons à notre donnée problématique, la `quantite_commandee`. Elle dépend directement de ce fameux croisement : elle n'a de sens que si l'on précise la commande (pour savoir quelle transaction est concernée) ET le produit (pour savoir quel objet est concerné).
La dépendance fonctionnelle s'écrit donc très logiquement avec l'identifiant composé tout entier placé à gauche de la flèche :
`id_commande, id_produit -> quantite_commandee`

---

## Partie 2 — Pratique

### Exercice

À partir du dictionnaire de données fourni dans la section "Données de départ", appliquez les concepts que nous venons de voir pour construire les entités finales de notre système de e-commerce.

**Travail à faire :**
1. Repérez calmement les identifiants simples évidents (`id_client`, `id_commande`, `id_produit`) et construisez leurs entités de base respectives (Client, Commande, Produit) en y rangeant les données qui en dépendent directement.
2. Identifiez la clé étrangère nécessaire pour relier l'entité Client à l'entité Commande. Posez-vous la question : "Une commande appartient à un client, donc la commande doit connaître son... ?". Placez cette clé étrangère.
3. Construisez l'entité de liaison `Ligne_Commande` en utilisant l'identifiant composé adéquat que nous avons étudié dans la théorie.
4. Enfin, placez la fameuse donnée `quantite_commandee` dans la bonne entité (celle de liaison), là où elle prend tout son sens.

Présentez vos entités finales sous un format textuel très structuré :

```text
NOM_DE_L_ENTITÉ
---------------
identifiant
donnée_1
...
```

## Livrable

Créez un document **Markdown** contenant la liste complète et structurée de vos entités finalisées pour ce e-commerce.
Nom conseillé pour votre fichier : `entites-ecommerce.md`

## Résultat attendu

Si vous avez bien suivi le processus, vous devez obtenir exactement **4 entités** distinctes : Client, Commande, Produit, et la Ligne_Commande.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.134/entites-ecommerce.html' | relative_url }}"
    height="450"
    title="Résultat attendu — Modéliser une liaison complexe">
</iframe>

## Critères de réussite

Votre travail sera évalué selon les critères stricts suivants :
* L'entité `Commande` contient bien la clé étrangère `id_client` (indispensable, car la commande doit toujours savoir à quel client elle appartient).
* L'entité de liaison `Ligne_Commande` possède obligatoirement l'identifiant composé `id_commande, id_produit`.
* La donnée `quantite_commandee` est placée EXCLUSIVEMENT à l'intérieur de l'entité `Ligne_Commande`.
* Il n'y a aucune donnée mal placée ou en doublon dans l'ensemble de votre modèle conceptuel.

---

## Bilan

### Vous avez appris :
* À identifier clairement une situation complexe où deux entités sont liées par une relation Plusieurs-à-Plusieurs.
* À créer une entité de liaison artificielle pour contourner et résoudre ce blocage.
* À utiliser un **identifiant composé** (la combinaison parfaite de deux clés primaires) pour garantir l'unicité absolue d'une ligne de liaison dans une base de données.
