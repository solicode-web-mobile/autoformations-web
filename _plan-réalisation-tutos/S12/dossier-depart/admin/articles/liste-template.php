<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Articles - Admin Mon Blog</title>
    <link rel="stylesheet" href="../css/admin-style.css">
</head>
<body>

    <!-- 1. BARRE LATÉRALE -->
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
        
        <!-- En-tête avec formulaire de recherche -->
        <header class="en-tete-haut">
            <form action="liste.php" method="GET" class="barre-recherche" style="display: flex; gap: 10px; width: 100%; max-width: 400px;">
                <input type="text" id="champ-recherche" name="q" placeholder="Filtrer ou rechercher un article..." value="<?= htmlspecialchars($recherche ?? '') ?>" style="flex: 1; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;">
                <?php if (!empty($recherche)): ?>
                    <a href="liste.php" class="bouton-retour" style="display: flex; align-items: center;">Réinitialiser</a>
                <?php endif; ?>
            </form>
            
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
                    <p class="texte-aide">Recherchez, filtrez et gérez vos publications.</p>
                </div>
                <a href="form.php" class="bouton-enregistrer" style="text-decoration: none;">Nouvel Article</a>
            </div>

            <!-- Tableau des articles -->
            <table class="table-admin" id="table-articles">
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
                            <tr class="ligne-article">
                                <td class="colonne-titre">
                                    <strong><?= htmlspecialchars($article['titre']) ?></strong><br>
                                    <span style="font-size: 12px; color: var(--couleur-texte-gris);">
                                        Par <?= htmlspecialchars($article['prenom'] . ' ' . $article['nom']) ?>
                                    </span>
                                </td>
                                <td><?= htmlspecialchars($article['categorie_libelle']) ?></td>
                                <td><?= date('d M Y', strtotime($article['date_creation'])) ?></td>
                                <td>
                                    <div class="actions-table">
                                        <a href="form.php?id=<?= $article['id'] ?>" class="bouton-action">Éditer</a>
                                        <a href="liste.php?supprimer=<?= $article['id'] ?>" 
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
                        <tr id="ligne-aucun-resultat">
                            <td colspan="4" style="text-align:center;">Aucun article ne correspond à votre recherche.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>

        </main>
    </div>

    <!-- Script JavaScript pour le filtrage DOM interactif (UA.122.35 & UA.122.36) -->
    <script src="../../js/admin-recherche.js"></script>
</body>
</html>
