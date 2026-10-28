<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title><?= $id ? 'Modifier' : 'Ajouter' ?> une Catégorie - Admin Mon Blog</title>
    <!-- Lien vers notre fichier CSS natif -->
    <link rel="stylesheet" href="../css/admin-style.css">
</head>
<body>

    <!-- 1. Barre latérale gauche (Menu) -->
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

    <!-- 2. Zone principale (Droite) -->
    <div class="zone-principale">
        
        <!-- En-tête haut de la page -->
        <header class="en-tete-haut">
            <div class="barre-recherche">
                <input type="text" placeholder="Rechercher...">
            </div>
            <div class="profil-admin">
                <a href="../../index.php" class="bouton-retour">Voir le site</a>
                <span style="font-weight: bold; font-size: 14px;">
                    Bonjour, <?= htmlspecialchars($_SESSION['utilisateur_prenom'] ?? 'Admin') ?>
                </span>
            </div>
        </header>

        <!-- Contenu principal -->
        <main class="contenu-page">
            
            <div class="entete-formulaire">
                <h1 class="titre-page"><?= $id ? 'Modifier la catégorie' : 'Ajouter une Catégorie' ?></h1>
                <a href="liste.php" class="bouton-retour">Retour à la liste</a>
            </div>

            <!-- Affichage des erreurs éventuelles -->
            <?php if (!empty($erreur)): ?>
                <div style="background-color: #fee2e2; color: #b91c1c; padding: 10px; border-radius: 5px; margin-bottom: 20px; font-size: 14px;">
                    <?= htmlspecialchars($erreur) ?>
                </div>
            <?php endif; ?>

            <!-- Formulaire d'ajout/modification de catégorie -->
            <form action="form.php<?= $id ? '?id=' . $id : '' ?>" method="POST" class="carte-formulaire">
                
                <div class="corps-formulaire">
                    <!-- Champ Nom -->
                    <div class="groupe-champ">
                        <label for="nom_categorie">Nom de la catégorie <span class="etoile-obligatoire">*</span></label>
                        <input type="text" id="nom_categorie" name="nom_categorie" class="champ-texte" 
                               placeholder="Ex: Développement Web" 
                               value="<?= htmlspecialchars($libelle) ?>" required>
                        <p class="texte-aide">Ce nom sera affiché publiquement sur le blog.</p>
                    </div>

                    <!-- Champ Couleur -->
                    <div class="groupe-champ">
                        <label for="couleur_categorie">Couleur <span class="etoile-obligatoire">*</span></label>
                        <select id="couleur_categorie" name="couleur_categorie" class="champ-select" required>
                            <option value="" disabled <?= empty($couleur) ? 'selected' : '' ?>>Sélectionnez une couleur</option>
                            <option value="bleu" <?= $couleur === 'bleu' ? 'selected' : '' ?>>Bleu</option>
                            <option value="rose" <?= $couleur === 'rose' ? 'selected' : '' ?>>Rose</option>
                            <option value="emeraude" <?= $couleur === 'emeraude' ? 'selected' : '' ?>>Émeraude</option>
                            <option value="violet" <?= $couleur === 'violet' ? 'selected' : '' ?>>Violet</option>
                            <option value="orange" <?= $couleur === 'orange' ? 'selected' : '' ?>>Orange</option>
                            <option value="vert" <?= $couleur === 'vert' ? 'selected' : '' ?>>Vert</option>
                        </select>
                    </div>
                </div>

                <!-- Boutons d'action -->
                <div class="pied-formulaire">
                    <a href="liste.php" class="bouton-annuler" style="text-decoration:none;">Annuler</a>
                    <button type="submit" class="bouton-enregistrer">
                        <?= $id ? 'Mettre à jour' : 'Enregistrer' ?>
                    </button>
                </div>

            </form>
        </main>
    </div>

</body>
</html>
