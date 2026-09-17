---
layout: conception
title: "Résultat - Modéliser une liaison complexe"
nav_exclude: true
---

# Résultat attendu : Modéliser une liaison complexe

Voici les 4 entités finalisées du système de e-commerce. Remarquez la présence de l'entité de liaison `LIGNE_COMMANDE` avec son identifiant composé, ainsi que l'emplacement de la quantité.

```text
CLIENT
------
id_client
nom_client

COMMANDE
--------
id_commande
date_commande
id_client

PRODUIT
-------
id_produit
nom_produit

LIGNE_COMMANDE
--------------
id_commande, id_produit
quantite_commandee
```

## Explications :
* L'entité **Commande** possède la clé étrangère `id_client` car chaque commande est rattachée à un seul client.
* L'entité **Ligne_Commande** permet de relier les commandes et les produits. Son identifiant est composé des identifiants des deux autres entités (`id_commande, id_produit`).
* La donnée `quantite_commandee` est placée logiquement dans **Ligne_Commande** car elle dépend à la fois de la commande et du produit.

