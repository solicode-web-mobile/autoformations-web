---
layout: conception
title: "Résultat - Découvrir réalités et identifiants"
nav_exclude: true
---

# Résultat attendu : Découvrir réalités, identifiants et dépendances

Voici le tableau complété suite à l'observation des répétitions dans le jeu de données des articles de blog :

| Donnée observée | Valeur répétée (exemple) | Réalité représentée | Identifiant proposé | Dépendance fonctionnelle |
| --------------- | ------------------------ | ------------------- | ------------------- | ------------------------ |
| `nom_auteur`    | Madani (x3)              | Auteur              | `id_auteur`         | `id_auteur -> nom_auteur` |
| `nom_ville`     | Tanger (x3), Rabat (x2)  | Ville               | `id_ville`          | `id_ville -> nom_ville` |
| `nom_categorie` | Développement (x4)       | Catégorie           | `id_categorie`      | `id_categorie -> nom_categorie` |

## Analyse du cheminement logique :
1. **Donnée :** On part d'une donnée brute du dictionnaire (`nom_ville`).
2. **Observation de Répétition :** On constate que "Tanger" se répète de nombreuses fois de manière identique.
3. **Déduction de Réalité :** Cette répétition nous indique que la ville existe par elle-même indépendamment de l'auteur. C'est une **entité** distincte (Ville).
4. **Création de l'ID :** Pour identifier cette nouvelle entité de manière unique, on lui crée un identifiant technique (`id_ville`).
5. **Dépendance :** Désormais, le nom de la ville dépend de ce nouvel identifiant. Si l'identifiant est le "2", le nom sera "Tanger" (`id_ville -> nom_ville`).

