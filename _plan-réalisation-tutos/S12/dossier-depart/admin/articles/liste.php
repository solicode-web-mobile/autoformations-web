<?php
// liste.php : Liste des articles avec recherche et filtrage (S11)
require_once '../auth/check.php';
require_once '../../db.php';

// Suppression d'un article
if (isset($_GET['supprimer'])) {
    $idASupprimer = (int)$_GET['supprimer'];
    $stmtDel = $pdo->prepare("DELETE FROM articles WHERE id = :id");
    $stmtDel->execute(['id' => $idASupprimer]);
    
    header("Location: liste.php");
    exit();
}

// Recherche par mot-clé (UA.124.17 & UA.124.23)
$recherche = trim($_GET['q'] ?? '');

if (!empty($recherche)) {
    // Requête préparée avec filtre LIKE sur le titre
    $sql = "
        SELECT a.id, a.titre, a.date_creation, c.libelle AS categorie_libelle, aut.nom, aut.prenom 
        FROM articles a
        JOIN categories c ON a.categorie_id = c.id
        JOIN auteurs aut ON a.auteur_id = aut.id
        WHERE a.titre LIKE :recherche
        ORDER BY a.date_creation DESC
    ";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['recherche' => '%' . $recherche . '%']);
    $articles = $stmt->fetchAll();
} else {
    // Liste complète standard
    $sql = "
        SELECT a.id, a.titre, a.date_creation, c.libelle AS categorie_libelle, aut.nom, aut.prenom 
        FROM articles a
        JOIN categories c ON a.categorie_id = c.id
        JOIN auteurs aut ON a.auteur_id = aut.id
        ORDER BY a.date_creation DESC
    ";
    $stmt = $pdo->query($sql);
    $articles = $stmt->fetchAll();
}

// Inclure la vue
require 'liste-template.php';
?>
