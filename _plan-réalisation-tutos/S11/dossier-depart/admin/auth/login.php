<?php
// login.php : Traitement de la connexion
session_start();

// Si l'utilisateur est déjà connecté, on le redirige
if (isset($_SESSION['utilisateur_id'])) {
    header("Location: ../categories/liste.php");
    exit();
}

$erreur = "";

// Traitement du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once '../../db.php';
    
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    
    if (empty($email) || empty($password)) {
        $erreur = "Veuillez remplir tous les champs.";
    } else {
        // Recherche de l'utilisateur par email
        $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = :email");
        $stmt->execute(['email' => $email]);
        $utilisateur = $stmt->fetch();
        
        // Vérification du mot de passe (password_verify pour N1)
        if ($utilisateur && password_verify($password, $utilisateur['mot_de_passe'])) {
            // Connexion réussie, création de la session
            $_SESSION['utilisateur_id'] = $utilisateur['id'];
            $_SESSION['utilisateur_prenom'] = $utilisateur['prenom'];
            
            header("Location: ../categories/liste.php");
            exit();
        } else {
            $erreur = "Email ou mot de passe incorrect.";
        }
    }
}

// Affichage du formulaire
require 'login-template.php';
?>
