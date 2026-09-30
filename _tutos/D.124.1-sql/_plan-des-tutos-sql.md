# Plan des Tutoriels : Exploiter les données (SQL)

**Niveau :** N1 (Débutant)
**Objectif global :** Modéliser et interroger une base de données relationnelle simple pour gérer les données du Blog.

## Unité 1 : Création et requêtes simples (Session S6)
*Livrable : Base de données `blog_n1` et sélection.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.11.1** | Création de la Base de Données | Utiliser `CREATE DATABASE` et `CREATE TABLE`. | Tables `articles`, `categories`, `utilisateurs`. |
| **T.124.12.1** | Lire les données (`SELECT`) | Interroger une table pour récupérer toutes ses colonnes. | Requête de sélection des articles. |

## Unité 2 : Filtrage (Session S7)
*Livrable : Vues filtrées.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.13.1** | Filtrer avec `WHERE` | Sélectionner des données selon un critère précis. | Requête affichant les articles d'une seule catégorie. |

## Unité 3 : Tri (Session S8)
*Livrable : Données ordonnées.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.14.1** | Trier avec `ORDER BY` | Ordonner alphabétiquement ou chronologiquement. | Liste des catégories triées de A à Z. |

## Unité 4 : Limites et Jointures (Session S9)
*Livrable : Gestion des données complexes.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.15.1** | Limiter les résultats (`LIMIT`) | Ne récupérer qu'un nombre défini d'enregistrements. | Affichage des 6 derniers articles seulement. |
| **T.124.17.1** | Les Jointures (`JOIN`) | Associer des données provenant de deux tables. | Afficher le nom de la catégorie dans la liste des articles. |

## Unité 5 : Opérateurs logiques et correction (Session S10)
*Livrable : Authentification par critères croisés.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.16.1** | Opérateurs Logiques (`AND / OR`) | Combiner plusieurs critères de recherche. | Vérification de l'email et du mot de passe. |
| **T.124.25.1** | Corriger une anomalie | Observer un mauvais retour de données et le corriger. | Correction d'un utilisateur non trouvé. |

## Unité 6 : Moteur de recherche et correction (Session S11)
*Livrable : Barre de recherche.*

| Identifiant | Titre du tutoriel | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.124.18.1** | Moteur de recherche (`LIKE`) | Chercher une chaîne de caractères partielle. | Requête pour la barre de recherche du Blog. |
| **T.124.17.2** | Corriger une requête simple | Identifier une erreur dans une colonne et la corriger. | Correction de la requête de recherche. |
