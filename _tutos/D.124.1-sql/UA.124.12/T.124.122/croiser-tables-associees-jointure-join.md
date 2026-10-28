---
layout: tuto
title: "Croiser des tables associées avec la jointure JOIN"
sous_titre: "Lier deux tables relationnelles, utiliser des alias et composer la requête d'affichage du blog"
slug: "croiser-tables-associees-jointure-join"
permalink: /tutos/croiser-tables-associees-jointure-join/
tuto_id: "T.124.122"
version: "normal"
ua: "UA.124.12"
nav_order: 2
simplified: true
data_html: ""
data_css: ""
data_js: ""
data_php: ""
---

## 1. Contexte & Objectif

Dans le tutoriel précédent (T.124.121), vous avez appris à sélectionner, projeter et trier les articles de la table `articles`.  
Cependant, chaque article ne possède qu'un identifiant numérique brut pour sa catégorie (`categorie_id = 1`, `categorie_id = 2`).

Or, la page d'accueil de votre blog a besoin d'afficher le nom textuel de la catégorie (*Développement*, *UI / UX*) et sa couleur de badge (*bleu*, *rose*) sur chaque carte d'article.

Dans ce tutoriel, vous allez exploiter la puissance relationnelle de SQL en reliant deux tables distinctes grâce à la jointure interne **`JOIN ... ON`**. Vous apprendrez à utiliser des alias avec **`AS`** pour produire la requête SQL consolidée qui alimentera votre application Web.

* **Objectif technique :** Rédiger et exécuter dans MySQL Workbench la requête `SELECT ... JOIN` associant chaque article aux informations de sa catégorie avec les alias requis par le template du blog.
* **Prérequis :** Avoir terminé le tutoriel T.124.121 (maîtrise de `SELECT`, `ORDER BY` et `LIMIT`).

```mermaid
flowchart LR
    Art["articles (id, titre, categorie_id...)"] -->|Liaison JOIN ON| Cat["categories (id, libelle, couleur)"]
    Cat --> Res["Jeu de résultats consolidé (titre, categorie_libelle, categorie_couleur)"]
```

---

## 2. Théorie Pas-à-Pas

### 2.1. Le principe de la jointure interne avec JOIN

Dans une base de données relationnelle, les données sont découpées en plusieurs tables pour éviter les redondances.  
Pour rassembler sur une même ligne les colonnes d'un article et les colonnes de sa catégorie, on utilise la clause **`JOIN`** (ou `INNER JOIN`) suivie de la condition de liaison **`ON`** :

```sql
SELECT *
FROM articles
JOIN categories ON articles.categorie_id = categories.id;
```

* Le moteur MySQL parcourt chaque ligne de la table `articles`.
* Il cherche la ligne correspondante dans la table `categories` où `articles.categorie_id = categories.id`.
* Il assemble les colonnes des deux tables en une seule ligne de résultat.

### 2.2. Utiliser des alias de table et de colonne avec AS

Pour rendre les requêtes plus courtes et adapter les noms de colonnes à notre code d'affichage, nous utilisons le mot-clé **`AS`** :

1. **Alias de table :** Raccourcir le nom des tables (`articles a`, `categories c`).
2. **Alias de colonne :** Renommer les colonnes de la catégorie pour correspondre exactement aux clés attendues par le template du blog :

```sql
SELECT a.*, c.libelle AS categorie_libelle, c.couleur AS categorie_couleur
FROM articles a
JOIN categories c ON a.categorie_id = c.id;
```

* `c.libelle` devient `categorie_libelle` dans le tableau PHP retourné.
* `c.couleur` devient `categorie_couleur` pour styliser le badge CSS.

### 2.3. Assembler la requête finale complète

En combinant la jointure avec le tri chronologique et la limite appris au tutoriel précédent, nous obtenons la requête complète d'affichage du blog :

```sql
SELECT a.*, c.libelle AS categorie_libelle, c.couleur AS categorie_couleur
FROM articles a
JOIN categories c ON a.categorie_id = c.id
ORDER BY a.date_creation DESC
LIMIT 6;
```

---

## 3. Pratique & Réalisation Guidée

### Étape 1 — Tester la jointure simple dans Workbench

1. Ouvrez **MySQL Workbench** et connectez-vous à votre instance locale.
2. Ouvrez un nouvel onglet d'éditeur SQL sur la base `blog_n1`.
3. Saisissez la requête de jointure simple :

```sql
USE blog_n1;

SELECT articles.titre, categories.libelle, categories.couleur
FROM articles
JOIN categories ON articles.categorie_id = categories.id;
```

4. Exécutez la requête (`Ctrl + Entrée`).  
   Observez que chaque article est maintenant associé au nom et à la couleur de sa catégorie.

### Étape 2 — Appliquer les alias et la projection complète

Modifiez votre requête pour extraire l'ensemble des colonnes de l'article (`a.*`) tout en renommant les données de catégorie grâce aux alias :

```sql
SELECT a.*, c.libelle AS categorie_libelle, c.couleur AS categorie_couleur
FROM articles a
JOIN categories c ON a.categorie_id = c.id;
```

### Étape 3 — Intégrer le tri chronologique et la limite

Ajoutez le tri par date de création décroissante et la limite à 6 publications :

```sql
SELECT a.*, c.libelle AS categorie_libelle, c.couleur AS categorie_couleur
FROM articles a
JOIN categories c ON a.categorie_id = c.id
ORDER BY a.date_creation DESC
LIMIT 6;
```

### Étape 4 — Vérifier et analyser les résultats

Exécutez la requête dans Workbench.

**Résultat attendu dans la grille de résultats :**

| id | titre | contenu | image | date_creation | categorie_id | auteur_id | categorie_libelle | categorie_couleur |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: | :--- | :--- |
| 2 | Design UI/UX : Les bases pour commencer | L’expérience utilisateur... | article-example.png | 2026-02-15 14:30:00 | 2 | 1 | UI / UX | rose |
| 1 | Le métier de développeur et ses principales missions | Le développeur crée... | article-example.png | 2026-02-14 10:00:00 | 1 | 1 | Développement | bleu |

* L'article n°2 (publié le 15 février) apparaît en premier grâce au tri `DESC`.
* Les colonnes virtuelles `categorie_libelle` et `categorie_couleur` sont prêtes à être injectées dans notre code PHP.

---

## 4. Livrable & Critères de Réussite

### 4.1. Emplacement dans votre dépôt d'autoformation

Dans votre dépôt GitHub annuel d'autoformations, créez l'arborescence suivante :

```text
sql/construire-requete-select-simple/croiser-tables-associees-jointure-join/
```

### 4.2. Contenu attendu du livrable

Déposez dans ce dossier un fichier **`requetes.sql`** contenant votre requête de sélection relationnelle testée et commentée :

```sql
-- Requête SQL : Extraction des articles avec jointure sur les catégories
-- Projet : Blog Personnel N1

USE blog_n1;

SELECT 
    a.*, 
    c.libelle AS categorie_libelle, 
    c.couleur AS categorie_couleur
FROM articles a
JOIN categories c ON a.categorie_id = c.id
ORDER BY a.date_creation DESC
LIMIT 6;
```

### 4.3. Critères de réussite

* [ ] Les mots-clés SQL sont tous rédigés en **MAJUSCULES**.
* [ ] La clause `JOIN categories c ON a.categorie_id = c.id` relie correctement la clé étrangère à la clé primaire.
* [ ] Les deux alias `categorie_libelle` et `categorie_couleur` sont présents dans la liste de sélection.
* [ ] La clause `ORDER BY a.date_creation DESC` place l'article le plus récent en premier.
* [ ] Le fichier `requetes.sql` est enregistré dans le dossier du dépôt annuel sans capture d'écran.

---

## 5. Glossaire

* **`JOIN` (ou `INNER JOIN`)** : Clause SQL combinant les lignes de deux tables différentes sur la base d'une égalité entre colonnes associées.
* **`ON`** : Mot-clé définissant la condition d'égalité pour la jointure (`a.categorie_id = c.id`).
* **Alias (`AS`)** : Mot-clé SQL attribuant un nom temporaire à une table ou à une colonne dans le jeu de résultats.
* **Clé étrangère** : Colonne d'une table contenant l'identifiant d'une ligne d'une autre table, servant de pivot pour la jointure.
* **Jointure interne** : Type de jointure ne conservant que les lignes pour lesquelles la condition de liaison est satisfaite dans les deux tables.
