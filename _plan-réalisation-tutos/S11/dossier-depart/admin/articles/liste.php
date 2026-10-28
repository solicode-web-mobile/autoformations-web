<?php
// articles.php : Liste des articles pour l'administration
// Pas d'authentification en S9
require_once '../../db.php';

// Si une demande de suppression est envoyée
if (isset($_GET['supprimer'])) {
    $idASupprimer = (int)$_GET['supprimer'];
    $stmtDel = $pdo->prepare("DELETE FROM articles WHERE id = :id");
    $stmtDel->execute(['id' => $idASupprimer]);
    
    // Redirection
    header("Location: liste.php");
    exit();
}

// Récupération de tous les articles avec leurs catégories et auteurs
$sql = "
    SELECT a.id, a.titre, a.date_creation, c.libelle AS categorie_libelle, aut.nom, aut.prenom 
    FROM articles a
    JOIN categories c ON a.categorie_id = c.id
    JOIN auteurs aut ON a.auteur_id = aut.id
    ORDER BY a.date_creation DESC
";
$stmt = $pdo->query($sql);
$articles = $stmt->fetchAll();

// Inclure la vue
require 'liste-template.php';
?>
