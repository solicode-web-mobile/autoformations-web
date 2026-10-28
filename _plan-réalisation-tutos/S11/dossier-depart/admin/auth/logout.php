<?php
// logout.php : Déconnexion de l'administrateur
session_start();
session_unset();
session_destroy();

header("Location: login.php");
exit();
?>
