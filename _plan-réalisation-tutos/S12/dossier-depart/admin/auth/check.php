<?php
// auth.php : Vérifie que l'utilisateur est connecté pour accéder à l'administration
session_start();

if (!isset($_SESSION['utilisateur_id'])) {
    header("Location: ../auth/login.php");
    exit();
}
?>
