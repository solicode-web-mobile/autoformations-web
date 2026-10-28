<?php
// categorie-form.php : Ajouter ou modifier une catégorie
// Pas d'authentification en S8
require_once '../../db.php';

$erreur = "";
$id = isset($_GET['id']) ? (int)$_GET['id'] : null;

// Valeurs par défaut pour le formulaire (mode création)
$libelle = "";
$couleur = "";

// Si c'est une modification, on récupère les données existantes
if ($id && $_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->prepare("SELECT * FROM categories WHERE id = :id");
    $stmt->execute(['id' => $id]);
    $categorie = $stmt->fetch();
    
    if ($categorie) {
        $libelle = $categorie['libelle'];
        $couleur = $categorie['couleur'];
    } else {
        die("Erreur : Catégorie introuvable.");
    }
}

// Si le formulaire est soumis (POST)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $libelle = trim($_POST['nom_categorie'] ?? '');
    $couleur = trim($_POST['couleur_categorie'] ?? '');
    
    if (empty($libelle) || empty($couleur)) {
        $erreur = "Veuillez remplir tous les champs obligatoires.";
    } else {
        if ($id) {
            // Mode modification (UPDATE)
            $stmt = $pdo->prepare("UPDATE categories SET libelle = :libelle, couleur = :couleur WHERE id = :id");
            $stmt->execute([
                'libelle' => $libelle,
                'couleur' => $couleur,
                'id' => $id
            ]);
        } else {
            // Mode création (INSERT)
            $stmt = $pdo->prepare("INSERT INTO categories (libelle, couleur) VALUES (:libelle, :couleur)");
            $stmt->execute([
                'libelle' => $libelle,
                'couleur' => $couleur
            ]);
        }
        
        // Redirection vers la liste
        header("Location: liste.php");
        exit();
    }
}

// Inclure la vue
require 'form-template.php';
?>
