<?php
// S6 : Connexion à la vraie base de données (PDO)
require_once 'db.php';

$sql = "
    SELECT a.*, c.libelle AS categorie_libelle, c.couleur AS categorie_couleur
    FROM articles a
    JOIN categories c ON a.categorie_id = c.id
    ORDER BY a.date_creation DESC
    LIMIT 6
";
$stmt = $pdo->query($sql);
$articles = $stmt->fetchAll();

$stmtCategories = $pdo->query("SELECT * FROM categories ORDER BY libelle ASC");
$categories = $stmtCategories->fetchAll();

require 'index-template.php';
?>