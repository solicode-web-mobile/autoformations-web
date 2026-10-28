# Plan de Réalisation — Concevoir les Données (Session S1 & Vue Globale)

**Domaine de compétence :** Conception les données (`D.112.1`)  
**Session de première mobilisation :** S1 — Comprendre le projet et premiers traitements logiques  
**Niveau :** N1 (Débutant)  

> **Règle d'Unicité Pédagogique :**  
> Ce document est rédigé une seule fois dans la session S1 (première session mobilisant la modélisation). Il formalise la progression inductive complète de conception des données pour **les 12 sessions de la formation**. Dans les sessions suivantes (S2, S3, S4, S5/S6), l'apprenant réalisera le tutoriel prévu à son programme à partir de ce document unique de référence.

---

## 1. Démarche Pédagogique Inductive de la Conception

La conception de données à la Spartel Dev Academy est **inductive** :
1. **Observer les maquettes :** Repérer visuellement quelles informations sont affichées (titres, dates, auteurs, images).
2. **Qualifier dans un dictionnaire :** Définir le type, la taille et le sens de chaque donnée.
3. **Regrouper en entités :** Identifier les identifiants uniques et isoler les concepts (`ARTICLE`, `AUTEUR`, `CATEGORIE`).
4. **Relier par des associations (MCD) :** Déterminer les règles de gestion et les cardinalités (1-N, N-N).
5. **Transformer en tables relationnelles (MLD) :** Créer les clés primaires et propager les clés étrangères pour préparer la base MySQL.

---

## 2. Déroulé des Tutoriels de Conception (Sessions S1 à S12)

| Identifiant | Session | Titre du tutoriel | Objectif d'apprentissage | Livrable attendu |
| :--- | :---: | :--- | :--- | :--- |
| **T.112.11.1** | **S1** | Comprendre le rôle des données dans une application | Identifier pourquoi une application Web a besoin de données structurées et persistantes. | Liste initiale des données observées sur le Blog personnel. |
| **T.112.12.1** | **S2** | Construire le dictionnaire de données | Relever toutes les données de la page détail et préciser leur format, taille et contraintes. | Dictionnaire de données structuré et normalisé. |
| **T.112.13.1** | **S3** | Déterminer les dépendances fonctionnelles et entités | Regrouper les propriétés logiquement dépendantes d'un même identifiant en entités. | Liste des entités isolées avec leurs propriétés et identifiants. |
| **T.112.14.1** | **S4** | Déterminer les relations et les cardinalités | Déduire les liens logiques entre entités (qui écrit quoi, qui classe quoi) et les cardinalités. | Tableau des associations et règles de gestion validées. |
| **T.112.14.2** | **S4** | Construire le Schéma MCD complet | Assembler entités et associations dans un schéma conceptuel unifié du Blog. | Document graphique du MCD (`mcd-blog`). |
| **T.112.15.1** | **S5/S6** | Transformer le MCD en Modèle Logique de Données (MLD) | Appliquer les règles de passage relationnelles pour générer les tables, clés primaires et étrangères. | Schéma relationnel MLD et script SQL initial (`database.sql`). |

---

## 3. Fiches Détaillées des Tutoriels par Unité d'Apprentissage

### UA.112.11 — Comprendre le rôle des données dans une application (Session S1)
* **T.112.11.1 — Découvrir l'importance des données dans une application Web**
  - **Objectif :** Distinguer le contenant (l'interface HTML) du contenu (les données métier affichées).
  - **Description :** L'apprenant observe les maquettes du Blog personnel et identifie les données indispensables : le titre de l'article, son contenu textuel, la date de publication, le nom de l'auteur, et la catégorie thématique.
  - **Notions :** Donnée persistante vs donnée d'affichage, information métier, rôle d'une base de données.
  - **Livrable :** Liste brute des données nécessaires au fonctionnement de l'application.

---

### UA.112.12 — Construire le dictionnaire de données (Session S2)
* **T.112.12.1 — Construire le dictionnaire de données de la page détail**
  - **Objectif :** Décrire précisément chaque champ d'information repéré sur l'écran.
  - **Description :** L'apprenant consigne dans un tableau chaque donnée avec son nom technique, son libellé en français, son type informatique (Texte court, Texte long, Date, Entier), sa longueur maximale et ses contraintes (obligatoire ou facultatif).
  - **Notions :** Attribut, type de donnée, longueur, contrainte d'intégrité de domaine.
  - **Livrable :** Tableau complet du dictionnaire de données.

---

### UA.112.13 — Déterminer les dépendances fonctionnelles et entités (Session S3)
* **T.112.13.1 — Isoler les entités à partir des dépendances fonctionnelles**
  - **Objectif :** Éviter les données mélangées en séparant les concepts métier autonomes.
  - **Description :** L'apprenant constate que l'auteur a ses propres données (nom, email, bio) indépendantes de l'article. Il sépare ainsi 3 entités distinctes : `ARTICLE`, `AUTEUR` et `CATEGORIE`, chacune dotée d'un identifiant souligné.
  - **Notions :** Dépendance fonctionnelle élémentaire, concept d'entité, attribut identifiant (clé conceptuelle).
  - **Livrable :** Fiche des entités normalisées.

---

### UA.112.14 — Déterminer les entités et construire le MCD (Session S4)
* **T.112.14.1 — Déterminer les relations et les cardinalités**
  - **Objectif :** Exprimer formellement les règles de gestion du Blog.
  - **Description :** L'apprenant applique les règles : Un article est obligatoirement rédigé par 1 et 1 seul auteur (1,1) ; un auteur peut rédiger 0 ou plusieurs articles (0,n). De même pour la catégorie (1,1 et 0,n).
  - **Notions :** Association binaire, cardinalités minimale et maximale.
  - **Livrable :** Tableau des associations.

* **T.112.14.2 — Construire le Schéma Conceptuel de Données (MCD)**
  - **Objectif :** Unifier entités et associations dans une représentation visuelle claire.
  - **Description :** Réalisation du schéma graphique du MCD reliant `ARTICLE`, `AUTEUR` et `CATEGORIE`.
  - **Livrable :** Schéma conceptuel du Blog (`mcd-blog`).

---

### UA.112.15 — Construire le MLD (Session S5 / S6)
* **T.112.15.1 — Passer du MCD au MLD relationnel pour MySQL**
  - **Objectif :** Traduire le schéma conceptuel en tables relationnelles exploitables par un SGBD MySQL.
  - **Description :** L'apprenant applique la règle de cardinalité (1,1 ➔ 0,n) : la clé primaire de l'entité côté 0,n migre comme clé étrangère dans la table côté 1,1 (`auteur_id` et `categorie_id` dans la table `articles`).
  - **Notions :** Table, colonne, clé primaire (`PRIMARY KEY`), clé étrangère (`FOREIGN KEY`).
  - **Livrable :** Schéma textuel du MLD et fichier SQL de création `database.sql`.
