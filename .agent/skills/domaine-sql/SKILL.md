---
name: domaine-sql
description: >-
  Expert en règles de rédaction pour les tutoriels du domaine SQL et Bases de Données Relationnelles (sql).
  Utilisez ce skill lorsque l'utilisateur demande de créer, réviser ou modifier un tutoriel lié au SQL, aux requêtes de sélection, filtrage, jointures ou modélisation de tables.
---

# Règles de rédaction - Domaine SQL

Ce skill définit les règles spécifiques à appliquer lors de la rédaction ou de la modification de tutoriels appartenant au domaine de l'interrogation et gestion de bases de données relationnelles en SQL (domaine D.124.1).

## 1. Conventions d'Écriture SQL (Règle d'or)

* **Mots-clés en MAJUSCULES** : Tous les mots-clés du langage SQL doivent impérativement être écrits en majuscules (`SELECT`, `FROM`, `WHERE`, `ORDER BY`, `LIMIT`, `INSERT INTO`, `VALUES`, `UPDATE`, `SET`, `DELETE`, `JOIN`, `ON`, `CREATE TABLE`).
* **Noms de tables et colonnes en minuscules** : Les identifiants de tables et de colonnes doivent être en minuscules, en anglais ou en français selon le cas d'étude, sans accents ni espaces (`articles`, `titre`, `date_creation`, `categorie_id`).
* **Fin de requête** : Chaque requête SQL doit se terminer par un point-virgule `;`.

## 2. Exécutabilité des Requêtes : Données de Départ Obligatoires

Une requête SQL ne peut être comprise ni vérifiée si elle s'exécute sur une table vide ou inexistante.
* **Jeu d'essai fourni** : Tout tutoriel SQL doit fournir au préalable le script de création de table (`CREATE TABLE`) et d'insertion d'un jeu de données minimal (`INSERT INTO ... VALUES (...)`).
* **Résultat tabulaire attendu** : Chaque requête de sélection (`SELECT`) doit être immédiatement suivie d'un bloc de texte affichant le résultat attendu sous forme de tableau ASCII ou de grille lisible.

**Exemple attendu :**
```sql
SELECT titre, prix FROM articles WHERE prix < 50 ORDER BY prix ASC;
```

```text
+-------------------+------+
| titre             | prix |
+-------------------+------+
| Carnet de notes   | 12   |
| Stylo plume       | 25   |
+-------------------+------+
2 rows in set (0.00 sec)
```

## 3. Démarche Pédagogique SQL N1

* **Progression logique des clauses** :
  1. `SELECT` colonnes `FROM` table (projection).
  2. `WHERE` conditions (sélection, opérateurs `=`, `<`, `>`, `LIKE`, `IN`, `AND`, `OR`).
  3. `ORDER BY` colonne (`ASC` / `DESC`) (tri).
  4. `LIMIT` nombre (pagination/restriction).
  5. `JOIN ... ON` (liaison entre tables parent-enfant).
* **Toujours expliquer le "sens de lecture"** : Expliquer dans quel ordre logique le moteur SQL traite la requête (d'abord `FROM`, puis `WHERE`, puis `SELECT`, puis `ORDER BY`).
* **Interdiction des requêtes monolithiques non expliquées** : Décomposer les requêtes avec jointures multiples étape par étape.

## 4. Livrables et Outils Attendus

* **Environnement** : phpMyAdmin, interface MySQL en ligne de commande, ou console SQL VS Code.
* **Livrables attendus** :
  - Fichier de script `.sql` contenant les commandes de création et d'interrogation.
  - Copie d'écran ou extrait textuel du résultat retourné par le SGBD validant que la requête a fonctionné.

## Procédure de vérification du rédacteur

Avant de finaliser un tutoriel SQL, vérifiez systématiquement :
> "Tous les mots-clés SQL sont-ils bien écrits en majuscules ?"
> "Le jeu de données de test (`CREATE TABLE` et `INSERT`) est-il fourni pour permettre à l'apprenant d'exécuter la requête ?"
> "Le résultat attendu sous forme de tableau est-il affiché sous chaque requête ?"
> "Les jointures précisent-elles bien la condition de liaison (`ON parent.id = enfant.parent_id`) ?"
