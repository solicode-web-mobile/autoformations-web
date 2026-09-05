---
title: "Prototype — Première réalisation du Blog"

layout: default

code: "P.101"

session: "S1"

type: "prototype"

objectif: >
  Réaliser une première version du périmètre travaillé pendant la session.

description: >
  Le prototype permet de mettre en pratique les apprentissages de la session.

livrables:
  - "Prototype fonctionnel"
  - "Présentation du prototype"
---


## Prototype

Réaliser le même travail sur le **Portfolio de l’apprenant**.

L’apprenant :

* définit le contexte du Portfolio ;
* identifie les acteurs ;
* décrit les principales actions des acteurs.

**Résultat attendu :** le contexte et les acteurs du Portfolio sont définis.



# Prototype — Calculer le prix d’une commande

## 1. Objectif

Adapter les notions de **variables, entrées, calculs et sorties** pour créer un petit programme de calcul de commande.

## 2. Contexte

Un magasin souhaite calculer rapidement le montant d’une commande.

## 3. Travail à faire

### Étape 1 — Préparer le programme

Créez un fichier :

```text
commande.js
```

### Étape 2 — Recevoir les données

Demandez à l’utilisateur :

* le nom du produit ;
* le prix ;
* la quantité ;
* le pourcentage de remise.

### Étape 3 — Réaliser les calculs

Calculez :

```text
Sous-total = prix × quantité
Montant remise = sous-total × remise / 100
Total = sous-total − montant remise
```

### Étape 4 — Afficher les résultats

Affichez :

```text
Produit
Prix
Quantité
Sous-total
Remise
Total
```

## 4. Fonctionnalités attendues

* Saisir les informations de la commande.
* Calculer le sous-total.
* Calculer le montant de la remise.
* Calculer le total.
* Afficher toutes les informations.

## 5. Résultat attendu

Le programme demande les informations de la commande et affiche correctement le résultat.

Exemple :

```text
Produit : Clavier
Prix : 200
Quantité : 3
Remise : 10 %

Sous-total : 600
Montant remise : 60
Total : 540
```

## 6. Livrable

Un fichier :

```text
commande.js
```

## 7. Critères de réussite

* Les entrées sont correctement récupérées.
* Les calculs sont corrects.
* Les résultats sont affichés clairement.
* Le programme fonctionne avec différentes valeurs.
