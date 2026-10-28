<?php
// categories.php : Affiche les articles d'une catégorie, ou toutes les catégories
require_once 'db.php';

$categoryId = isset($_GET['id']) ? (int)$_GET['id'] : null;

$categorieActuelle = null;
$articles = [];

if ($categoryId) {
    // 1. Récupérer les informations de la catégorie demandée
    $stmtCat = $pdo->prepare("SELECT * FROM categories WHERE id = :id");
    $stmtCat->execute(['id' => $categoryId]);
    $categorieActuelle = $stmtCat->fetch();
    
    if (!$categorieActuelle) {
        die("Erreur : Catégorie introuvable.");
    }
    
    // 2. Récupérer les articles de cette catégorie
    $sqlArticles = "
        SELECT a.*, c.libelle AS categorie_libelle, c.couleur AS categorie_couleur
        FROM articles a
        JOIN categories c ON a.categorie_id = c.id
        WHERE a.categorie_id = :id
        ORDER BY a.date_creation DESC
    ";
    $stmtArt = $pdo->prepare($sqlArticles);
    $stmtArt->execute(['id' => $categoryId]);
    $articles = $stmtArt->fetchAll();

} else {
    // Si pas d'ID, on récupère juste la liste de toutes les catégories pour les afficher
    $stmtCat = $pdo->query("SELECT * FROM categories ORDER BY libelle ASC");
    $toutesLesCategories = $stmtCat->fetchAll();
}

// Inclure la vue
require 'categories-template.php';
?>
