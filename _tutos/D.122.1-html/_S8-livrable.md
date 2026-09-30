d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S8\admin-categories.html
---
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Catégories - Admin Mon Blog</title>
    <!-- On utilise le CSS de l'administration -->
    <link rel="stylesheet" href="admin-style.css">
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
            <a href="admin-dashboard.html" class="lien-menu">Tableau de bord</a>
            <a href="admin-articles.html" class="lien-menu">Articles</a>
            <a href="admin-categories.html" class="lien-menu actif">Catégories</a>
        </nav>

        <div style="margin-top: auto; padding: 20px; border-top: 1px solid #374151;">
            <a href="admin-login.html" class="lien-menu" style="color: #f87171;">Déconnexion</a>
        </div>
    </aside>

    <!-- 2. ZONE PRINCIPALE -->
    <div class="zone-principale">
        
        <!-- En-tête du haut (Topbar) -->
        <header class="en-tete-haut">
            <div class="barre-recherche">
                <input type="text" placeholder="Rechercher...">
            </div>
            
            <div class="profil-admin">
                <a href="public-index.html" class="bouton-retour">Voir le site</a>
                <img src="images/author.jpg" alt="Profil" class="image-profil">
                <span style="font-weight: bold; font-size: 14px;">Jean D.</span>
            </div>
        </header>

        <!-- Contenu de la page -->
        <main class="contenu-page">
            
            <div class="entete-formulaire">
                <div>
                    <h1 class="titre-page">Gestion des Catégories</h1>
                    <p class="texte-aide">Organisez le contenu de votre blog.</p>
                </div>
                <a href="admin-categorie-form.html" class="bouton-enregistrer" style="text-decoration: none;">Nouvelle Catégorie</a>
            </div>

            <!-- Filtres (Recherche basique) -->
            <div style="margin-bottom: 20px;">
                <input type="text" class="champ-texte" placeholder="Rechercher une catégorie..." style="width: 300px;">
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
                    <tr>
                        <td><strong>Développement</strong></td>
                        <td>Bleu</td>
                        <td>24 articles</td>
                        <td>
                            <div class="actions-table">
                                <a href="admin-categorie-form.html" class="bouton-action">Éditer</a>
                                <button class="bouton-action" style="color: red; cursor: pointer;">Supprimer</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Design UI/UX</strong></td>
                        <td>Rose</td>
                        <td>12 articles</td>
                        <td>
                            <div class="actions-table">
                                <a href="admin-categorie-form.html" class="bouton-action">Éditer</a>
                                <button class="bouton-action" style="color: red; cursor: pointer;">Supprimer</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Productivité</strong></td>
                        <td>Vert</td>
                        <td>6 articles</td>
                        <td>
                            <div class="actions-table">
                                <a href="admin-categorie-form.html" class="bouton-action">Éditer</a>
                                <button class="bouton-action" style="color: red; cursor: pointer;">Supprimer</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </main>
    </div>

</body>
</html>

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S8\admin-categorie-form.html
---
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ajouter une Catégorie - Admin Mon Blog</title>
    <!-- Lien vers notre fichier CSS natif -->
    <link rel="stylesheet" href="admin-style.css">
</head>
<body>

    <!-- 1. Barre latérale gauche (Menu) -->
    <aside class="barre-laterale">
        <div class="en-tete-logo">
            <div class="logo-icone">B.</div>
            <div>
                <strong>Admin</strong>
                <div class="texte-aide">Mon Blog</div>
            </div>
        </div>

        <nav class="menu-navigation">
            <a href="admin-dashboard.html" class="lien-menu">Tableau de bord</a>
            <a href="admin-articles.html" class="lien-menu">Articles</a>
            <a href="admin-categories.html" class="lien-menu actif">Catégories</a>
        </nav>
    </aside>

    <!-- 2. Zone principale (Droite) -->
    <div class="zone-principale">
        
        <!-- En-tête haut de la page -->
        <header class="en-tete-haut">
            <div class="barre-recherche">
                <input type="text" placeholder="Rechercher...">
            </div>
            <div class="profil-admin">
                <a href="public-index.html" class="bouton-retour">Voir le site</a>
                <img src="images/author.jpg" alt="Profil" class="image-profil">
                <span>Jean D.</span>
            </div>
        </header>

        <!-- Contenu principal -->
        <main class="contenu-page">
            
            <div class="entete-formulaire">
                <h1 class="titre-page">Ajouter une Catégorie</h1>
                <a href="admin-categories.html" class="bouton-retour">Retour à la liste</a>
            </div>

            <!-- Formulaire d'ajout de catégorie -->
            <form class="carte-formulaire">
                
                <div class="corps-formulaire">
                    <!-- Champ Nom -->
                    <div class="groupe-champ">
                        <label for="nom_categorie">Nom de la catégorie <span class="etoile-obligatoire">*</span></label>
                        <input type="text" id="nom_categorie" name="nom_categorie" class="champ-texte" placeholder="Ex: Développement Web" required>
                        <p class="texte-aide">Ce nom sera affiché publiquement sur le blog.</p>
                    </div>

                    <!-- Ligne avec 2 champs (Couleur et Icône) -->
                    <div class="grille-champs">
                        
                        <!-- Champ Couleur -->
                        <div class="groupe-champ">
                            <label for="couleur_categorie">Couleur <span class="etoile-obligatoire">*</span></label>
                            <select id="couleur_categorie" name="couleur_categorie" class="champ-select" required>
                                <option value="" disabled selected>Sélectionnez une couleur</option>
                                <option value="bleu">Bleu</option>
                                <option value="rose">Rose</option>
                                <option value="emeraude">Émeraude</option>
                                <option value="violet">Violet</option>
                                <option value="orange">Orange</option>
                            </select>
                        </div>

                        <!-- Champ Icône -->
                        <div class="groupe-champ">
                            <label for="icone_categorie">Icône <span class="etoile-obligatoire">*</span></label>
                            <select id="icone_categorie" name="icone_categorie" class="champ-select" required>
                                <option value="" disabled selected>Sélectionnez une icône</option>
                                <option value="code">Code</option>
                                <option value="pinceau">Pinceau / Crayon</option>
                                <option value="eclair">Éclair</option>
                                <option value="livre">Livre</option>
                            </select>
                        </div>
                        
                    </div>
                </div>

                <!-- Boutons d'action -->
                <div class="pied-formulaire">
                    <button type="button" class="bouton-annuler">Annuler</button>
                    <button type="submit" class="bouton-enregistrer">Enregistrer la catégorie</button>
                </div>

            </form>
        </main>
    </div>

</body>
</html>

---