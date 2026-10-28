<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Blog - Catégories</title>
    <!-- CSS Organisé pour N1 -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
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
                <li><a href="categories.php" style="color:var(--couleur-primaire); font-weight:bold;">Catégories</a></li>
                <li><a href="apropos.php">À propos</a></li>
            </ul>
            <a href="admin/index.php" class="bouton-principal">
                Espace Admin
            </a>
        </nav>
    </header>

    <!-- =====================================================
         CONTENU DYNAMIQUE
    ====================================================== -->
    <?php if ($categorieActuelle): ?>
        <!-- Affichage d'une catégorie spécifique -->
        <header class="entete-page-simple">
            <span class="etiquette">Catégorie</span>
            <h1><?= htmlspecialchars($categorieActuelle['libelle']) ?></h1>
            <p>Retrouvez tous les articles de la catégorie <?= htmlspecialchars($categorieActuelle['libelle']) ?>.</p>
        </header>

        <main class="section-articles">
            <div class="conteneur-articles">
                
                <?php if (count($articles) > 0): ?>
                    <div class="grille-articles">
                        <?php foreach ($articles as $article): ?>
                            <div class="carte-article">
                                <a href="article.php?id=<?= $article['id'] ?>" class="carte-image">
                                    <img src="images/<?= htmlspecialchars($article['image'] ?: 'article-example.png') ?>" alt="Illustration">
                                </a>
                                <span class="etiquette-categorie <?= htmlspecialchars($article['categorie_couleur']) ?>">
                                    <?= htmlspecialchars($article['categorie_libelle']) ?>
                                </span>
                                <div class="carte-contenu">
                                    <h3><a href="article.php?id=<?= $article['id'] ?>"><?= htmlspecialchars($article['titre']) ?></a></h3>
                                    <p><?= htmlspecialchars(mb_substr($article['contenu'], 0, 100)) ?>...</p>
                                    <div class="carte-meta">
                                        <span><?= date('d M Y', strtotime($article['date_creation'])) ?></span>
                                        <span>5 min</span>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php else: ?>
                    <p style="text-align:center; padding: 40px;">Aucun article dans cette catégorie pour le moment.</p>
                <?php endif; ?>

            </div>
        </main>
        
    <?php else: ?>
        <!-- Affichage de la liste de toutes les catégories -->
        <header class="entete-page-simple">
            <span class="etiquette">Toutes les catégories</span>
            <h1>Explorez nos thématiques</h1>
        </header>

        <main class="section-articles" style="text-align: center; padding: 40px;">
            <div class="liste-filtres" style="justify-content: center;">
                <?php foreach ($toutesLesCategories as $cat): ?>
                    <a href="categories.php?id=<?= $cat['id'] ?>" class="pilule-filtre" style="font-size: 1.2rem; padding: 15px 30px;">
                        <?= htmlspecialchars($cat['libelle']) ?>
                    </a>
                <?php endforeach; ?>
            </div>
        </main>
    <?php endif; ?>

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
