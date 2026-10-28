<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Articles - Admin Mon Blog</title>
    <!-- On utilise le CSS de l'administration -->
    <link rel="stylesheet" href="../css/admin-style.css">
</head>
<body>

    <!-- 1. BARRE LATÉRALE (Sidebar) -->
    <aside class="barre-laterale">
        <div class="en-tete-logo">
            <div class="logo-icone">B.</div>
            <div>
                <h2 style="margin: 0; font-size: 16px;">Admin</h2>
                <span style="font-size: 12px; color: var(--couleur-texte-gris);">Mon Blog</span>
            </div>
        </div>

        <nav class="menu-navigation">
            <a href="../categories/liste.php" class="lien-menu">Catégories</a>
            <a href="liste.php" class="lien-menu actif">Articles</a>
        </nav>

        <div style="margin-top: auto; padding: 20px; border-top: 1px solid #374151;">
            <a href="../auth/logout.php" class="lien-menu" style="color: #f87171;">Déconnexion</a>
        </div>
    </aside>

    <!-- 2. ZONE PRINCIPALE -->
    <div class="zone-principale">
        
        <!-- En-tête du haut (Topbar) -->
        <header class="en-tete-haut">
            <div class="barre-recherche">
                <!-- Recherche non fonctionnelle pour le moment, prévue en S11 -->
                <input type="text" placeholder="Rechercher...">
            </div>
            
            <div class="profil-admin">
                <a href="../../index.php" class="bouton-retour">Voir le site</a>
                <span style="font-weight: bold; font-size: 14px;">
                    Bonjour, <?= htmlspecialchars($_SESSION['utilisateur_prenom'] ?? 'Admin') ?>
                </span>
            </div>
        </header>

        <!-- Contenu de la page -->
        <main class="contenu-page">
            
            <div class="entete-formulaire">
                <div>
                    <h1 class="titre-page">Gestion des Articles</h1>
                    <p class="texte-aide">Gérez le contenu de votre blog.</p>
                </div>
                <a href="form.php" class="bouton-enregistrer" style="text-decoration: none;">Nouvel Article</a>
            </div>

            <!-- Tableau des articles -->
            <table class="table-admin">
                <thead>
                    <tr>
                        <th>Titre de l'article</th>
                        <th>Catégorie</th>
                        <th>Date de création</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (count($articles) > 0): ?>
                        <?php foreach ($articles as $article): ?>
                            <tr>
                                <td>
                                    <strong><?= htmlspecialchars($article['titre']) ?></strong><br>
                                    <span style="font-size: 12px; color: var(--couleur-texte-gris);">
                                        Par <?= htmlspecialchars($article['prenom'] . ' ' . $article['nom']) ?>
                                    </span>
                                </td>
                                <td><?= htmlspecialchars($article['categorie_libelle']) ?></td>
                                <td><?= date('d M Y', strtotime($article['date_creation'])) ?></td>
                                <td>
                                    <div class="actions-table">
                                        <a href="article-form.php?id=<?= $article['id'] ?>" class="bouton-action">Éditer</a>
                                        <a href="articles.php?supprimer=<?= $article['id'] ?>" 
                                           class="bouton-action" 
                                           style="color: red; text-decoration: none;"
                                           onclick="return confirm('Voulez-vous vraiment supprimer cet article ?');">
                                           Supprimer
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="4" style="text-align:center;">Aucun article trouvé.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>

        </main>
    </div>

</body>
</html>
