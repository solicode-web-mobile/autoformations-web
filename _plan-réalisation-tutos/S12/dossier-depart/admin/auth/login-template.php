<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Connexion - Admin Mon Blog</title>
    <!-- On utilise le CSS de l'administration -->
    <link rel="stylesheet" href="../css/admin-style.css">
</head>
<body class="page-login">

    <main class="carte-login">
        
        <div class="logo-icone" style="margin: 0 auto 20px;">B.</div>
        <h1>Bienvenue</h1>
        <p>Connectez-vous à votre espace administrateur</p>

        <?php if (!empty($erreur)): ?>
            <div style="background-color: #fee2e2; color: #b91c1c; padding: 10px; border-radius: 5px; margin-bottom: 20px; font-size: 14px; text-align: center;">
                <?= htmlspecialchars($erreur) ?>
            </div>
        <?php endif; ?>

        <form action="login.php" method="POST" style="display: flex; flex-direction: column; gap: 20px; text-align: left;">
            
            <div class="groupe-champ">
                <label for="email">Adresse email</label>
                <!-- On conserve la valeur saisie en cas d'erreur -->
                <input type="email" id="email" name="email" class="champ-texte" placeholder="admin@blog.local" value="<?= htmlspecialchars($_POST['email'] ?? 'admin@blog.local') ?>" required>
            </div>

            <div class="groupe-champ">
                <div style="display: flex; justify-content: space-between;">
                    <label for="password">Mot de passe</label>
                    <a href="#" style="font-size: 12px; color: var(--couleur-primaire); text-decoration: none;">Oublié ?</a>
                </div>
                <input type="password" id="password" name="password" class="champ-texte" placeholder="••••••••" value="admin" required>
            </div>

            <button type="submit" class="bouton-login">
                Se connecter
            </button>

        </form>

    </main>

    <footer style="margin-top: 40px; text-align: center; font-size: 14px;">
        <a href="../../index.php" style="color: var(--couleur-texte-gris); text-decoration: none;">Retour au site public</a>
    </footer>

</body>
</html>
