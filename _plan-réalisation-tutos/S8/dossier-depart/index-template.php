<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Blog Personnel - Accueil</title>
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
                <li><a href="categories.php">Catégories</a></li>
                <li><a href="apropos.php">À propos</a></li>
            </ul>
            <a href="admin/index.php" class="bouton-principal">
                Espace Admin
            </a>
        </nav>
    </header>

    <!-- =====================================================
         BANNIÈRE (HERO)
    ====================================================== -->
    <section class="banniere-accueil">
        <h1>
            Mon Blog Personnel :<br>
            <span>Développer &amp; Partager</span>
        </h1>
        <p>
            Découvrez mes derniers articles sur le développement web,
            l'architecture logicielle et les bonnes pratiques
            d'intégration UI/UX.
        </p>
        <div class="actions-banniere">
            <a href="#articles" class="bouton-principal">Lire les articles</a>
            <a href="apropos.php" class="bouton-secondaire">À propos de moi</a>
        </div>
    </section>

    <!-- =====================================================
         ARTICLES
    ====================================================== -->
    <section id="articles" class="section-articles">
        <div class="conteneur-articles">

            <!-- CATÉGORIES -->
            <section class="filtre-categories">
                <h2>Explorer par thème</h2>
                <div class="liste-filtres">
                    <a href="index.php" class="pilule-filtre actif">Tous les articles</a>
                    <?php foreach ($categories as $cat): ?>
                        <a href="categorie.php?id=<?= $cat['id'] ?>" class="pilule-filtre">
                            <?= htmlspecialchars($cat['libelle']) ?>
                        </a>
                    <?php endforeach; ?>
                </div>
            </section>

            <!-- EN-TÊTE DES ARTICLES -->
            <div class="entete-liste-articles">
                <div>
                    <h2>Dernières publications</h2>
                    <p>Les articles les plus récents de la communauté.</p>
                </div>
                <a href="categories.php" class="lien-voir-tout">Explorer tout</a>
            </div>

            <!-- CARTES D'ARTICLES -->
            <div class="grille-articles">
                <?php foreach ($articles as $article): ?>
                    <div class="carte-article">
                        <a href="article.php?id=<?= $article['id'] ?>" class="carte-image">
                            <img src="images/<?= htmlspecialchars($article['image'] ?: 'article-example.png') ?>" alt="Illustration de l'article">
                        </a>
                        <span class="etiquette-categorie <?= htmlspecialchars($article['categorie_couleur']) ?>">
                            <?= htmlspecialchars($article['categorie_libelle']) ?>
                        </span>
                        <div class="carte-contenu">
                            <h3><a href="article.php?id=<?= $article['id'] ?>"><?= htmlspecialchars($article['titre']) ?></a></h3>
                            <p>
                                <!-- Affichage d'un résumé court -->
                                <?= htmlspecialchars(mb_substr($article['contenu'], 0, 100)) ?>...
                            </p>
                            <div class="carte-meta">
                                <span><?= date('d M Y', strtotime($article['date_creation'])) ?></span>
                                <span>5 min</span>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

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
