# Plan détaillé des tutoriels : Architecture

Ce document présente le découpage de la formation en tutoriels pratiques, basés sur les Unités d'Apprentissage (UA) définies à l'Étape 1. Les extraits de code montrent le résultat technique attendu à la fin de chaque session.

## Tableau récapitulatif

| Identifiant | Titre | Objectif | Livrable |
| :--- | :--- | :--- | :--- |
| **T.125.11.1** | Séparer le HTML, CSS et JavaScript | Comprendre qu'un fichier doit avoir un seul rôle principal. | Fichiers `article.html`, `style.css`, `script.js` séparés. |
| **T.125.12.1** | Regrouper les ressources communes | Organiser les ressources partagées par plusieurs pages et structurer le CSS. | Pages statiques avec dossiers `css/` (structuré) et `images/`. |
| **T.125.13.1** | Séparer traitement et affichage en PHP | Séparer la préparation des données de leur présentation. | `index.php` (logique) et `index-template.php` (vue). |
| **T.125.14.1** | Isoler l'accès à la base de données | Créer une connexion MySQL distincte du traitement de la page. | Ajout de `db.php` au projet. |
| **T.125.15.1** | Réutiliser l'architecture dynamique | Appliquer la même structure à une nouvelle page dynamique. | Ajout de `categories.php` et `categories-template.php`. |
| **T.125.16.1** | Séparer l'espace Public et Admin | Organiser physiquement l'espace de gestion des données. | Dossier `admin/` avec ses propres fichiers. |

---

## Détail des tutoriels

### UA.125.11 - Structurer le code d’une page simple

#### T.125.11.1 - Séparer le HTML, CSS et JavaScript
*   **Objectif :** Extraire le style et le comportement d'une page HTML vers des fichiers dédiés pour clarifier le code.
*   **Description :** À partir d'une page contenant tout le code en un seul fichier, l'apprenant va créer un fichier CSS basique (`style.css`) et un fichier JS séparés, puis les lier au fichier HTML. Il n'y a qu'une seule page Web à ce stade.
*   **Notions abordées :** Fichier HTML, Fichier CSS, Fichier JS, Séparation des responsabilités, Liens entre ressources (`<link>`, `<script>`).
*   **Livrable attendu :** Une structure avec `article.html`, `style.css` et `script.js`.
*   **Extrait de code cible (HTML) :**
    ```html
    <!-- Séparation simple pour une seule page -->
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    ```

---

### UA.125.12 - Structurer un site Web statique

#### T.125.12.1 - Regrouper les ressources communes et structurer le CSS
*   **Objectif :** Organiser les fichiers CSS et les images dans des dossiers partagés et découper le CSS (qui devient volumineux) pour créer un mini-site de deux pages.
*   **Description :** L'apprenant va découper son unique fichier `style.css` en plusieurs fichiers logiques (`global.css`, `layout.css`, etc.) et les regrouper avec les images dans des dossiers `css/` et `images/` pour que la page d'accueil et la page d'article les partagent.
*   **Notions abordées :** Dossier de ressources partagées, Navigation inter-pages, Centralisation et Découpage des styles.
*   **Livrable attendu :** L'arborescence comprenant `index.html`, `article.html` et les dossiers `css/` (avec ses sous-fichiers) et `images/`.
*   **Extrait de code cible (HTML - Utilisation des ressources) :**
    ```html
    <!-- CSS Organisé pour N1 -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
    
    <!-- Image partagée -->
    <img src="images/logo.png" alt="Mon Blog">
    ```

---

### UA.125.13 - Structurer une page avec traitement serveur

#### T.125.13.1 - Séparer traitement et affichage en PHP
*   **Objectif :** Découper une page dynamique en deux fichiers : un pour préparer les données, un pour les afficher.
*   **Description :** L'apprenant transformera l'accueil statique en PHP. Il créera un tableau de données dans `index.php` et l'affichera via une inclusion (`require`) dans `index-template.php`.
*   **Notions abordées :** Préparation (PHP) vs Affichage (HTML/PHP), Données simulées, Inclusion de fichiers (`include`/`require`).
*   **Livrable attendu :** Séparation en `index.php` et `index-template.php`.
*   **Extrait de code cible (index.php) :**
    ```php
    <?php
    // Logique de la page d'accueil (sans BDD pour le moment)
    $articles = [ /* données simulées */ ];
    
    // 3. Inclure la vue (affichage HTML)
    require 'index-template.php';
    ?>
    ```

---

### UA.125.14 - Structurer une page avec accès aux données

#### T.125.14.1 - Isoler l'accès à la base de données
*   **Objectif :** Créer un fichier de connexion à la base de données pour ne pas mélanger l'accès PDO et la logique de la page.
*   **Description :** L'apprenant va extraire le code de connexion PDO vers un fichier `db.php` qui sera inclus dans la page d'accueil pour récupérer de vrais articles.
*   **Notions abordées :** Connexion MySQL (PDO), Fichier de configuration/connexion dédié, Séparation Connexion / Traitement / Affichage.
*   **Livrable attendu :** Projet contenant `db.php`, `index.php` et `index-template.php`.
*   **Extrait de code cible (db.php / index.php) :**
    ```php
    // db.php
    $pdo = new PDO("mysql:host=127.0.0.1;dbname=blog_n1;charset=utf8mb4", "root", "admin");
    
    // index.php
    require_once 'db.php';
    $stmtArticles = $pdo->query("SELECT * FROM articles");
    $articles = $stmtArticles->fetchAll();
    
    require 'index-template.php';
    ```

---

### UA.125.15 - Structurer un site Web dynamique

#### T.125.15.1 - Réutiliser l'architecture dynamique
*   **Objectif :** Appliquer l'architecture apprise à une nouvelle page du site pour en faire un modèle standard.
*   **Description :** L'apprenant va créer la page des catégories en reproduisant la structure de l'accueil : un fichier de traitement (`categories.php`) et un fichier d'affichage (`categories-template.php`), tout en utilisant `db.php`.
*   **Notions abordées :** Réutilisation d'une connexion partagée, Uniformisation de la structure, Logique multi-pages PHP.
*   **Livrable attendu :** Arborescence contenant désormais les pages pour les catégories.
*   **Extrait de code cible (categories.php) :**
    ```php
    <?php
    require_once 'db.php';
    
    $stmtCategories = $pdo->query("SELECT * FROM categories ORDER BY libelle ASC");
    $categories = $stmtCategories->fetchAll();
    
    require 'categories-template.php';
    ?>
    ```

---

### UA.125.16 - Structurer la partie Public et Admin

#### T.125.16.1 - Séparer l'espace Public et Admin
*   **Objectif :** Créer un sous-dossier sécurisé pour les pages dédiées à la gestion (CRUD) du site.
*   **Description :** L'apprenant va organiser les fichiers liés à l'administration des catégories dans un dossier `admin/` afin de séparer la consultation publique de la gestion. Il devra naviguer dans les répertoires pour inclure la connexion (`../../db.php`).
*   **Notions abordées :** Espace public (front-office) vs Espace d'administration (back-office), Regroupement des opérations de gestion (CRUD) dans un sous-dossier, Chemins relatifs (`../`).
*   **Livrable attendu :** L'architecture finale du projet avec le dossier `admin/` séparé du reste.
*   **Extrait de code cible (admin/categories/liste.php) :**
    ```php
    <?php
    // liste.php : Liste des catégories pour l'administration
    require_once '../../db.php';
    
    $sql = "SELECT * FROM categories ORDER BY libelle ASC";
    $stmt = $pdo->query($sql);
    $categories = $stmt->fetchAll();
    
    // Inclure la vue
    require 'liste-template.php';
    ?>
    ```
