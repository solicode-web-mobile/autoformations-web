<?php
// categories.php : Liste des catégories pour l'administration
// Pas d'authentification en S8
require_once '../../db.php';

// Si une demande de suppression est envoyée
if (isset($_GET['supprimer'])) {
    $idASupprimer = (int)$_GET['supprimer'];
    // On supprime la catégorie (les articles liés seront supprimés grâce au ON DELETE CASCADE dans la BDD)
    $stmtDel = $pdo->prepare("DELETE FROM categories WHERE id = :id");
    $stmtDel->execute(['id' => $idASupprimer]);
    
    // Redirection pour éviter de resoumettre en rafraîchissant la page
    header("Location: liste.php");
    exit();
}

// Récupération de toutes les catégories avec le nombre d'articles
$sql = "
    SELECT c.*, COUNT(a.id) AS nb_articles 
    FROM categories c
    LEFT JOIN articles a ON c.id = a.categorie_id
    GROUP BY c.id
    ORDER BY c.libelle ASC
";
$stmt = $pdo->query($sql);
$categories = $stmt->fetchAll();

// Inclure la vue
require 'liste-template.php';
?>
