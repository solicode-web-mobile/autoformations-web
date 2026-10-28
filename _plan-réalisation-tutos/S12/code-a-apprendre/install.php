<?php
// install.php : Script d'installation automatique de la base de données
// Niveau N1 : Exécute le fichier database.sql pour préparer l'environnement

$host = '127.0.0.1';
$username = 'root';
$password = 'admin'; // Correspond au mot de passe défini dans db.php

echo "<h1>Installation de l'application Blog N1</h1>";

try {
    // 1. Connexion au serveur MySQL (sans spécifier de base de données)
    $pdo = new PDO("mysql:host=$host;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "<p>✅ Connexion au serveur MySQL réussie.</p>";

    // 2. Lecture du fichier SQL
    $sqlFile = 'database.sql';
    if (!file_exists($sqlFile)) {
        die("<p style='color:red;'>❌ Le fichier $sqlFile est introuvable.</p>");
    }
    
    $sqlContent = file_get_contents($sqlFile);
    echo "<p>✅ Fichier SQL lu avec succès.</p>";

    // 3. Exécution des requêtes SQL
    $pdo->exec($sqlContent);
    echo "<p>✅ Base de données, tables et données de test créées avec succès !</p>";

    echo "<h3>L'installation est terminée.</h3>";
    echo "<p><a href='index.php'>Aller sur la page d'accueil du blog</a></p>";
    echo "<p><a href='admin/index.php'>Aller sur l'espace administration</a> (Email: admin@blog.local / Mot de passe: admin)</p>";
    
    echo "<p style='color:orange;'>⚠️ Par mesure de sécurité, veuillez supprimer ce fichier (install.php) après l'installation.</p>";

} catch (PDOException $e) {
    echo "<p style='color:red;'>❌ Erreur lors de l'installation : " . $e->getMessage() . "</p>";
}
?>
