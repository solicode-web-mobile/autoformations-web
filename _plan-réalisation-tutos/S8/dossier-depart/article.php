<?php
// article.php : Logique de la page d'un article
require_once 'db.php';

// Vérifier si un ID d'article est fourni
if (!isset($_GET['id']) || empty($_GET['id'])) {
    die("Erreur : Aucun article spécifié.");
}

$articleId = (int)$_GET['id'];

// Récupérer l'article avec sa catégorie et son auteur
$sql = "
    SELECT 
        a.titre, a.contenu, a.image, a.date_creation,
        c.libelle AS categorie_libelle, c.couleur AS categorie_couleur,
        aut.nom AS auteur_nom, aut.prenom AS auteur_prenom, aut.image_profil AS auteur_image
    FROM articles a
    JOIN categories c ON a.categorie_id = c.id
    JOIN auteurs aut ON a.auteur_id = aut.id
    WHERE a.id = :id
";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $articleId]);
$article = $stmt->fetch();

// Si l'article n'existe pas
if (!$article) {
    die("Erreur : Article introuvable.");
}

// Inclure la vue (affichage HTML)
require 'article-template.php';
?>
