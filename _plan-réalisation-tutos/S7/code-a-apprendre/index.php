<?php
// index.php : Logique de la page d'accueil
require_once 'db.php';

// 1. Récupérer toutes les catégories pour le filtre
$stmtCategories = $pdo->query("SELECT * FROM categories ORDER BY libelle ASC");
$categories = $stmtCategories->fetchAll();

// 2. Récupérer les derniers articles avec le nom de leur catégorie
$sqlArticles = "
    SELECT a.*, c.libelle AS categorie_libelle, c.couleur AS categorie_couleur
    FROM articles a
    JOIN categories c ON a.categorie_id = c.id
    ORDER BY a.date_creation DESC
    LIMIT 6
";
$stmtArticles = $pdo->query($sqlArticles);
$articles = $stmtArticles->fetchAll();

// 3. Inclure la vue (affichage HTML)
require 'index-template.php';
?>
