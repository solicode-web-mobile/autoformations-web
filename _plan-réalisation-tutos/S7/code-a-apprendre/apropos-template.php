<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Blog - À propos de moi</title>
    <!-- CSS Organisé pour N1 -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
</head>
<body>
    
    <!-- =====================================================
         MENU (EN-TÊTE)
    ====================================================== -->
    <header class="en-tete-site">
        <nav class="barre-navigation">
            <a href="index.php" class="logo">
                <span class="logo-sombre">Mon</span><span class="logo-couleur">Blog.</span>
            </a>
            <ul class="liens-navigation">
                <li><a href="index.php">Accueil</a></li>
                <li><a href="categories.php">Catégories</a></li>
                <li><a href="apropos.php" style="color:var(--couleur-primaire); font-weight:bold;">À propos</a></li>
            </ul>
            <a href="admin/index.php" class="bouton-principal">
                Espace Admin
            </a>
        </nav>
    </header>

    <!-- =====================================================
         EN-TÊTE DE LA PAGE À PROPOS
    ====================================================== -->
    <header class="entete-page-simple">
        <h1>À propos de moi</h1>
        <p>Mon parcours, ma passion pour le web, et pourquoi j'ai créé ce blog.</p>
    </header>

    <!-- =====================================================
         CORPS DE LA PAGE
    ====================================================== -->
    <main class="conteneur-principal-article">
        <article class="corps-article">
            
            <!-- Photo de profil -->
            <img src="images/author.jpg" alt="Photo de l'auteur" class="photo-profil">

            <h2 style="text-align: center;">Qui suis-je ?</h2>
            <p>
                Bonjour ! Je suis <strong>Ali Madani</strong>, passionné par le développement web depuis que j'ai découvert qu'on pouvait donner vie à des idées avec quelques lignes de code. 
                Ce blog est mon espace personnel pour partager mes découvertes, mes réussites, et surtout les leçons tirées de mes erreurs.
            </p>

            <h2>Mon Parcours</h2>
            <p>
                J'ai commencé en autodidacte avant de consolider mes acquis à travers la formation. Aujourd'hui, je me spécialise dans la création d'interfaces utilisateurs esthétiques (UI) et intuitives (UX).
            </p>

            <h2>Mes Compétences</h2>
            <ul>
                <li><strong>Design System :</strong> Figma, Maquettage, Composants</li>
                <li><strong>Frontend :</strong> HTML5 Sémantique, CSS3 pur</li>
                <li><strong>Backend :</strong> PHP, MySQL, Architecture Serveur</li>
                <li><strong>Outils :</strong> Git, GitHub, VS Code</li>
            </ul>

            <hr style="margin: 40px 0; border: none; border-top: 1px solid var(--couleur-bordure);">
            
            <p style="text-align: center; color: var(--couleur-secondaire); font-style: italic;">
                N'hésitez pas à me contacter via mes réseaux sociaux ou à explorer les articles de ce blog !
            </p>
        </article>
    </main>

    <!-- =====================================================
         PIED DE PAGE (FOOTER)
    ====================================================== -->
    <footer class="pied-de-page">
        <div class="conteneur-pied-de-page">
            <div class="colonne-pied-de-page">
                <h2>Mon Blog</h2>
                <p>Partager des connaissances, des tutoriels et des découvertes sur le développement web.</p>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="index.php">Accueil</a></li>
                    <li><a href="categories.php">Catégories</a></li>
                    <li><a href="apropos.php">À propos</a></li>
                </ul>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Contact</h2>
                <p>Retrouvez les nouveaux articles chaque semaine.</p>
            </div>
        </div>
        <div class="bas-pied-de-page">
            <p>&copy; 2026 Mon Blog Personnel.</p>
        </div>
    </footer>

</body>
</html>
