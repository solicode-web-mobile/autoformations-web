<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($article['titre']) ?> - Détail</title>
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
                <li><a href="apropos.php">À propos</a></li>
            </ul>
            <a href="admin/index.php" class="bouton-principal">
                Espace Admin
            </a>
        </nav>
    </header>

    <!-- =====================================================
         CONTENU DE L'ARTICLE
    ====================================================== -->
    <article>
        <header class="entete-article-detail">
            <span class="etiquette-categorie <?= htmlspecialchars($article['categorie_couleur']) ?>">
                <?= htmlspecialchars($article['categorie_libelle']) ?>
            </span>
            <h1><?= htmlspecialchars($article['titre']) ?></h1>
            
            <div class="auteur-article">
                <img src="images/<?= htmlspecialchars($article['auteur_image'] ?: 'author.jpg') ?>" alt="Portrait de l'auteur">
                <div>
                    <strong><?= htmlspecialchars($article['auteur_prenom'] . ' ' . $article['auteur_nom']) ?></strong>
                    <span>Auteur du blog</span>
                </div>
            </div>
            
            <div style="margin-top:20px; color:#6b7280; font-size:14px;">
                <time datetime="<?= htmlspecialchars($article['date_creation']) ?>">
                    <?= date('d M Y', strtotime($article['date_creation'])) ?>
                </time> 
                • <span>Lecture estimée : 5 min</span>
            </div>
        </header>

        <figure class="couverture-article">
            <img src="images/<?= htmlspecialchars($article['image'] ?: 'article-cover.png') ?>" alt="Illustration principale de l'article">
        </figure>

        <main class="conteneur-principal-article">
            <section class="corps-article">
                <!-- On utilise nl2br pour afficher les retours à la ligne du texte de la base de données -->
                <?= nl2br(htmlspecialchars($article['contenu'])) ?>
            </section>
        </main>
    </article>

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
