<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title><?= $id ? 'Modifier' : 'Ajouter' ?> un Article - Admin Mon Blog</title>
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
            <a href="../categories/liste.php" class="lien-menu">Catégories</a>
            <a href="liste.php" class="lien-menu actif">Articles</a>
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
                <h1 class="titre-page"><?= $id ? 'Modifier l\'article' : 'Ajouter un Article' ?></h1>
                <a href="liste.php" class="bouton-retour">Retour à la liste</a>
            </div>

            <!-- Affichage des erreurs éventuelles -->
            <?php if (!empty($erreur)): ?>
                <div style="background-color: #fee2e2; color: #b91c1c; padding: 10px; border-radius: 5px; margin-bottom: 20px; font-size: 14px;">
                    <?= htmlspecialchars($erreur) ?>
                </div>
            <?php endif; ?>

            <!-- Formulaire d'ajout/modification d'article (enctype = multipart/form-data pour l'upload de fichier) -->
            <form action="form.php<?= $id ? '?id=' . $id : '' ?>" method="POST" enctype="multipart/form-data" class="carte-formulaire">
                
                <input type="hidden" name="image_existante" value="<?= htmlspecialchars($image_existante) ?>">

                <div class="corps-formulaire">
                    <!-- Champ Titre -->
                    <div class="groupe-champ">
                        <label for="titre_article">Titre de l'article <span class="etoile-obligatoire">*</span></label>
                        <input type="text" id="titre_article" name="titre_article" class="champ-texte" 
                               placeholder="Ex: Les meilleures pratiques de développement" 
                               value="<?= htmlspecialchars($titre) ?>" required>
                    </div>

                    <!-- Ligne avec 2 champs (Catégorie et Auteur) -->
                    <div class="grille-champs">
                        
                        <!-- Champ Catégorie -->
                        <div class="groupe-champ">
                            <label for="categorie_article">Catégorie <span class="etoile-obligatoire">*</span></label>
                            <select id="categorie_article" name="categorie_article" class="champ-select" required>
                                <option value="" disabled <?= empty($categorie_id) ? 'selected' : '' ?>>Sélectionnez une catégorie</option>
                                <?php foreach ($categories as $cat): ?>
                                    <option value="<?= $cat['id'] ?>" <?= $categorie_id == $cat['id'] ? 'selected' : '' ?>>
                                        <?= htmlspecialchars($cat['libelle']) ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        </div>

                        <!-- Champ Auteur (Remplace le Statut) -->
                        <div class="groupe-champ">
                            <label for="auteur_article">Auteur de l'article <span class="etoile-obligatoire">*</span></label>
                            <select id="auteur_article" name="auteur_article" class="champ-select" required>
                                <option value="" disabled <?= empty($auteur_id) ? 'selected' : '' ?>>Sélectionnez un auteur</option>
                                <?php foreach ($auteurs as $aut): ?>
                                    <option value="<?= $aut['id'] ?>" <?= $auteur_id == $aut['id'] ? 'selected' : '' ?>>
                                        <?= htmlspecialchars($aut['prenom'] . ' ' . $aut['nom']) ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                        
                    </div>

                    <!-- Zone de téléchargement de l'image -->
                    <div class="groupe-champ">
                        <label for="image_article">Image de couverture</label>
                        <?php if ($image_existante): ?>
                            <p style="font-size: 12px; margin-bottom: 5px;">Image actuelle : <?= htmlspecialchars($image_existante) ?></p>
                        <?php endif; ?>
                        <div class="zone-telechargement">
                            <input type="file" id="image_article" name="image_article" accept="image/*">
                            <p class="texte-aide">PNG, JPG, GIF (Laissez vide pour conserver l'image actuelle)</p>
                        </div>
                    </div>

                    <!-- Champ Contenu (Zone de texte large) -->
                    <div class="groupe-champ">
                        <label for="contenu_article">Contenu de l'article <span class="etoile-obligatoire">*</span></label>
                        <textarea id="contenu_article" name="contenu_article" class="champ-texte" rows="10" 
                                  placeholder="Rédigez le contenu de votre article ici..." required><?= htmlspecialchars($contenu) ?></textarea>
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
