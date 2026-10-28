<?php
// article-form.php : Ajouter ou modifier un article
// Pas d'authentification en S9
require_once '../../db.php';

$erreur = "";
$id = isset($_GET['id']) ? (int)$_GET['id'] : null;

// Valeurs par défaut
$titre = "";
$contenu = "";
$categorie_id = "";
$auteur_id = "";
$image_existante = "";

// 1. Récupération des catégories et auteurs pour les listes déroulantes
$stmtCat = $pdo->query("SELECT id, libelle FROM categories ORDER BY libelle ASC");
$categories = $stmtCat->fetchAll();

$stmtAut = $pdo->query("SELECT id, nom, prenom FROM auteurs ORDER BY nom ASC");
$auteurs = $stmtAut->fetchAll();

// 2. Si c'est une modification, on récupère les données
if ($id && $_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->prepare("SELECT * FROM articles WHERE id = :id");
    $stmt->execute(['id' => $id]);
    $article = $stmt->fetch();
    
    if ($article) {
        $titre = $article['titre'];
        $contenu = $article['contenu'];
        $categorie_id = $article['categorie_id'];
        $auteur_id = $article['auteur_id'];
        $image_existante = $article['image'];
    } else {
        die("Erreur : Article introuvable.");
    }
}

// 3. Si le formulaire est soumis (POST)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $titre = trim($_POST['titre_article'] ?? '');
    $contenu = trim($_POST['contenu_article'] ?? '');
    $categorie_id = (int)($_POST['categorie_article'] ?? 0);
    $auteur_id = (int)($_POST['auteur_article'] ?? 0);
    $image_nom = $_POST['image_existante'] ?? 'article-example.png'; // Valeur par défaut
    
    // Gestion rudimentaire de l'upload d'image (N1)
    if (isset($_FILES['image_article']) && $_FILES['image_article']['error'] === UPLOAD_ERR_OK) {
        $tmpName = $_FILES['image_article']['tmp_name'];
        $nomFichier = basename($_FILES['image_article']['name']);
        // Déplacer l'image dans le dossier images public
        $dossierImages = '../../images/';
        if (move_uploaded_file($tmpName, $dossierImages . $nomFichier)) {
            $image_nom = $nomFichier;
        }
    }
    
    if (empty($titre) || empty($contenu) || empty($categorie_id) || empty($auteur_id)) {
        $erreur = "Veuillez remplir tous les champs obligatoires.";
    } else {
        if ($id) {
            // Mode modification (UPDATE)
            $stmt = $pdo->prepare("UPDATE articles SET titre = :titre, contenu = :contenu, categorie_id = :categorie_id, auteur_id = :auteur_id, image = :image WHERE id = :id");
            $stmt->execute([
                'titre' => $titre,
                'contenu' => $contenu,
                'categorie_id' => $categorie_id,
                'auteur_id' => $auteur_id,
                'image' => $image_nom,
                'id' => $id
            ]);
        } else {
            // Mode création (INSERT)
            $stmt = $pdo->prepare("INSERT INTO articles (titre, contenu, categorie_id, auteur_id, image, date_creation) VALUES (:titre, :contenu, :categorie_id, :auteur_id, :image, NOW())");
            $stmt->execute([
                'titre' => $titre,
                'contenu' => $contenu,
                'categorie_id' => $categorie_id,
                'auteur_id' => $auteur_id,
                'image' => $image_nom
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
