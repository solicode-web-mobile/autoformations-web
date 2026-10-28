<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Catégories - Admin Mon Blog</title>
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
            <a href="liste.php" class="lien-menu actif">Catégories</a>
            <a href="../articles/liste.php" class="lien-menu">Articles</a>
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
                    <h1 class="titre-page">Gestion des Catégories</h1>
                    <p class="texte-aide">Organisez le contenu de votre blog.</p>
                </div>
                <a href="form.php" class="bouton-enregistrer" style="text-decoration: none;">Nouvelle Catégorie</a>
            </div>

            <!-- Tableau des catégories -->
            <table class="table-admin">
                <thead>
                    <tr>
                        <th>Nom de la catégorie</th>
                        <th>Couleur</th>
                        <th>Nombre d'articles</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (count($categories) > 0): ?>
                        <?php foreach ($categories as $cat): ?>
                            <tr>
                                <td><strong><?= htmlspecialchars($cat['libelle']) ?></strong></td>
                                <td><?= htmlspecialchars(ucfirst($cat['couleur'])) ?></td>
                                <td><?= $cat['nb_articles'] ?> article(s)</td>
                                <td>
                                    <div class="actions-table">
                                        <a href="categorie-form.php?id=<?= $cat['id'] ?>" class="bouton-action">Éditer</a>
                                        <a href="categories.php?supprimer=<?= $cat['id'] ?>" 
                                           class="bouton-action" 
                                           style="color: red; text-decoration: none;"
                                           onclick="return confirm('Voulez-vous vraiment supprimer cette catégorie ? (Les articles liés seront également supprimés)');">
                                           Supprimer
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="4" style="text-align:center;">Aucune catégorie trouvée.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>

        </main>
    </div>

</body>
</html>
