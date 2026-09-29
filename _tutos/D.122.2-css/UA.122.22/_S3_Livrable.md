# Le livrable de S3


d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\css\components.css
---
/* =========================================================
   COMPONENTS (components.css)
   Composants réutilisables : Boutons, Cartes, Étiquettes
========================================================= */

/* BOUTONS */
.bouton-principal {
    display: inline-block;
    padding: 10px 18px;
    color: white;
    background: var(--couleur-primaire);
    border-radius: 8px;
}

.bouton-principal:hover {
    background: var(--couleur-primaire-hover);
}

.bouton-secondaire {
    display: inline-block;
    padding: 10px 18px;
    color: var(--couleur-texte);
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 8px;
}

.bouton-secondaire:hover {
    color: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}


/* CARTES D'ARTICLES */
.carte-article {
    flex: 1;
    overflow: hidden;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 16px;
}

.carte-image {
    display: block;
}

.carte-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.carte-contenu {
    padding: 20px;
}

.carte-contenu h3 {
    margin: 0;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 20px;
    line-height: 1.4;
}

.carte-contenu p {
    margin: 12px 0;
    color: var(--couleur-secondaire);
    font-size: 14px;
    line-height: 1.7;
}

.carte-meta {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 16px;
    color: #9ca3af;
    font-size: 12px;
    border-top: 1px solid #f3f4f6;
}


/* ÉTIQUETTES CATÉGORIE (BADGES) */
.etiquette-categorie {
    display: inline-block;
    margin: 16px 16px 0;
    padding: 6px 10px;
    font-size: 11px;
    font-weight: 700;
    background: #f0f6ff;
    border-radius: 99px;
}

.etiquette-categorie.bleu { color: #1c5bba; }
.etiquette-categorie.rose { color: #db2777; background: #fdf2f8; }
.etiquette-categorie.vert { color: #059669; background: #ecfdf5; }

/* Filtres de catégorie (Pilules) */
.pilule-filtre {
    padding: 10px 16px;
    color: #4b5563;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 8px;
}

.pilule-filtre:hover {
    color: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}

.pilule-filtre.actif {
    color: white;
    background: var(--couleur-titre);
}

/* PAGINATION */
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 64px;
}

.bouton-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: var(--couleur-secondaire);
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 50%;
    font-weight: 500;
}

.bouton-pagination:hover {
    color: var(--couleur-primaire);
    background: #f0f6ff;
    border-color: #e0edff;
}

.bouton-pagination.actif {
    color: white;
    background: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\css\global.css
---
/* =========================================================
   GLOBAL (global.css)
   Variables natives, polices, reset basique
========================================================= */

:root {
    --couleur-texte: #1f2937;
    --couleur-fond: #f9fafb;
    --couleur-primaire: #2673e8;
    --couleur-primaire-hover: #1c5bba;
    --couleur-secondaire: #6b7280;
    --couleur-titre: #111827;
    --couleur-bordure: #e5e7eb;
}

body {
    margin: 0;
    color: var(--couleur-texte);
    background: var(--couleur-fond);
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\css\layout.css
---
/* =========================================================
   LAYOUT (layout.css)
   En-tête et pied de page communs à toutes les pages
========================================================= */

/* EN-TÊTE DU SITE (HEADER) */
.en-tete-site {
    padding: 20px 24px;
    background: white;
    border-bottom: 1px solid var(--couleur-bordure);
}

.barre-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    font-family: Georgia, serif;
    font-size: 22px;
    font-weight: 900;
}

.logo-sombre {
    color: var(--couleur-titre);
}

.logo-couleur {
    color: var(--couleur-primaire);
}

.liens-navigation {
    display: flex;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.liens-navigation a {
    color: var(--couleur-secondaire);
    font-size: 14px;
}

.liens-navigation a:hover {
    color: var(--couleur-primaire);
}


/* PIED DE PAGE (FOOTER) */
.pied-de-page {
    margin-top: 80px;
    padding: 48px 24px 24px;
    background: white;
    border-top: 1px solid var(--couleur-bordure);
}

.conteneur-pied-de-page {
    display: flex;
    justify-content: space-between;
    gap: 48px;
    max-width: 1200px;
    margin: 0 auto;
}

.colonne-pied-de-page {
    flex: 1;
}

.colonne-pied-de-page h2 {
    margin: 0 0 16px;
    color: var(--couleur-titre);
    font-size: 16px;
}

.colonne-pied-de-page p {
    max-width: 320px;
    margin: 0;
    color: var(--couleur-secondaire);
    font-size: 14px;
    line-height: 1.7;
}

.colonne-pied-de-page ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.colonne-pied-de-page li {
    margin-bottom: 10px;
}

.colonne-pied-de-page a {
    color: var(--couleur-secondaire);
    font-size: 14px;
}

.colonne-pied-de-page a:hover {
    color: var(--couleur-primaire);
}

.bas-pied-de-page {
    max-width: 1200px;
    margin: 40px auto 0;
    padding-top: 20px;
    text-align: center;
    border-top: 1px solid var(--couleur-bordure);
}

.bas-pied-de-page p {
    margin: 0;
    color: #9ca3af;
    font-size: 12px;
}

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\css\pages.css
---
/* =========================================================
   PAGES (pages.css)
   Styles spécifiques aux différentes pages
========================================================= */

/* PAGE ACCUEIL : BANNIÈRE (HERO) */
.banniere-accueil {
    padding: 96px 24px;
    text-align: center;
    background: #ffffff;
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 24px 24px;
}

.banniere-accueil h1 {
    max-width: 850px;
    margin: 0 auto;
    color: #0a2042;
    font-family: Georgia, serif;
    font-size: 56px;
    font-weight: 900;
    line-height: 1.15;
}

.banniere-accueil h1 span {
    color: var(--couleur-primaire);
}

.banniere-accueil p {
    max-width: 680px;
    margin: 24px auto 0;
    color: var(--couleur-secondaire);
    font-size: 17px;
    line-height: 1.7;
}

.actions-banniere {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 28px;
}

/* PAGE ACCUEIL : SECTION ARTICLES */
.section-articles {
    padding: 80px 24px;
}

.conteneur-articles {
    max-width: 1200px;
    margin: 0 auto;
}

.filtre-categories {
    margin-bottom: 64px;
}

.filtre-categories h2 {
    margin: 0 0 20px;
    color: var(--couleur-titre);
    font-size: 18px;
}

.liste-filtres {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.entete-liste-articles {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 32px;
}

.entete-liste-articles h2 {
    margin: 0;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 32px;
}

.entete-liste-articles p {
    margin: 8px 0 0;
    color: var(--couleur-secondaire);
}

.lien-voir-tout {
    color: var(--couleur-primaire);
    font-size: 14px;
    font-weight: 600;
}

.grille-articles {
    display: flex;
    gap: 24px;
}


/* PAGE DÉTAIL ARTICLE */
.entete-article-detail {
    padding: 96px 24px 64px;
    background: var(--couleur-fond);
    text-align: center;
}

.entete-article-detail h1 {
    margin: 0 auto;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 50px;
    line-height: 1.15;
}

.auteur-article {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
}

.auteur-article img {
    display: inline-block;
    width: 44px;
    height: 44px;
    border: 2px solid white;
    border-radius: 50%;
}

.auteur-article span {
    display: block;
    color: #9ca3af;
    font-size: 12px;
}

.couverture-article {
    height: 250px;
    margin: 0;
}

.couverture-article img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.conteneur-principal-article {
    max-width: 920px;
    margin: -100px auto 80px;
    padding: 0 24px;
}

.corps-article {
    padding: 110px 80px;
    color: var(--couleur-texte);
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 40px;
    font-size: 16px;
}

.corps-article h2,
.corps-article h3 {
    color: #0a2042;
    font-family: Georgia, serif;
    font-weight: 900;
    line-height: 1.3;
}

.corps-article h2 { margin: 0 0 24px; font-size: 32px; }
.corps-article h3 { margin: 48px 0 20px; font-size: 22px; }

.corps-article p { margin: 0 0 24px; }
.corps-article ul { margin: 0 0 24px; padding-left: 24px; }
.corps-article li { margin-bottom: 12px; }
.corps-article strong { color: var(--couleur-titre); }

.corps-article code {
    padding: 3px 7px;
    color: #0a2042;
    background: #f0f6ff;
    border-radius: 5px;
    font-family: monospace;
    font-size: 14px;
}

.figure-article { margin: 32px 0; }
.figure-article img { width: 100%; border-radius: 16px; }
.figure-article figcaption {
    margin-top: 10px;
    color: var(--couleur-secondaire);
    font-size: 13px;
    text-align: center;
}

.citation-article {
    margin: 40px 0;
    padding: 24px 28px;
    color: #4b5563;
    background: #f0f6ff;
    border-left: 4px solid var(--couleur-primaire);
    border-radius: 0 12px 12px 0;
}

.citation-article p { margin: 0; font-style: italic; }
.citation-article cite {
    display: block;
    margin-top: 12px;
    color: var(--couleur-secondaire);
    font-size: 13px;
    font-style: normal;
}

/* EN-TÊTE DE PAGE SIMPLE (Ex: À Propos, Catégorie) */
.entete-page-simple {
    padding: 96px 24px;
    text-align: center;
    background: white;
    border-bottom: 1px solid var(--couleur-bordure);
}

.entete-page-simple .etiquette {
    display: inline-block;
    margin-bottom: 16px;
    padding: 6px 16px;
    color: var(--couleur-secondaire);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 99px;
}

.entete-page-simple h1 {
    margin: 0 0 24px;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 48px;
    font-weight: 900;
}

.entete-page-simple p {
    max-width: 680px;
    margin: 0 auto;
    color: var(--couleur-secondaire);
    font-size: 18px;
    line-height: 1.7;
}

/* PHOTO DE PROFIL (À Propos) */
.photo-profil {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto 48px;
    object-fit: cover;
    border: 4px solid white;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\css\style.css
---
/* =========================================================
   COMPONENTS (components.css)
   Composants réutilisables : Boutons, Cartes, Étiquettes
========================================================= */

/* BOUTONS */
.bouton-principal {
    display: inline-block;
    padding: 10px 18px;
    color: white;
    background: var(--couleur-primaire);
    border-radius: 8px;
}

.bouton-principal:hover {
    background: var(--couleur-primaire-hover);
}

.bouton-secondaire {
    display: inline-block;
    padding: 10px 18px;
    color: var(--couleur-texte);
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 8px;
}

.bouton-secondaire:hover {
    color: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}


/* CARTES D'ARTICLES */
.carte-article {
    flex: 1;
    overflow: hidden;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 16px;
}

.carte-image {
    display: block;
}

.carte-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.carte-contenu {
    padding: 20px;
}

.carte-contenu h3 {
    margin: 0;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 20px;
    line-height: 1.4;
}

.carte-contenu p {
    margin: 12px 0;
    color: var(--couleur-secondaire);
    font-size: 14px;
    line-height: 1.7;
}

.carte-meta {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 16px;
    color: #9ca3af;
    font-size: 12px;
    border-top: 1px solid #f3f4f6;
}


/* ÉTIQUETTES CATÉGORIE (BADGES) */
.etiquette-categorie {
    display: inline-block;
    margin: 16px 16px 0;
    padding: 6px 10px;
    font-size: 11px;
    font-weight: 700;
    background: #f0f6ff;
    border-radius: 99px;
}

.etiquette-categorie.bleu { color: #1c5bba; }
.etiquette-categorie.rose { color: #db2777; background: #fdf2f8; }
.etiquette-categorie.vert { color: #059669; background: #ecfdf5; }

/* Filtres de catégorie (Pilules) */
.pilule-filtre {
    padding: 10px 16px;
    color: #4b5563;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 8px;
}

.pilule-filtre:hover {
    color: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}

.pilule-filtre.actif {
    color: white;
    background: var(--couleur-titre);
}

/* PAGINATION */
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 64px;
}

.bouton-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: var(--couleur-secondaire);
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 50%;
    font-weight: 500;
}

.bouton-pagination:hover {
    color: var(--couleur-primaire);
    background: #f0f6ff;
    border-color: #e0edff;
}

.bouton-pagination.actif {
    color: white;
    background: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}
/* =========================================================
   GLOBAL (global.css)
   Variables natives, polices, reset basique
========================================================= */

:root {
    --couleur-texte: #1f2937;
    --couleur-fond: #f9fafb;
    --couleur-primaire: #2673e8;
    --couleur-primaire-hover: #1c5bba;
    --couleur-secondaire: #6b7280;
    --couleur-titre: #111827;
    --couleur-bordure: #e5e7eb;
}

body {
    margin: 0;
    color: var(--couleur-texte);
    background: var(--couleur-fond);
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}
/* =========================================================
   LAYOUT (layout.css)
   En-tête et pied de page communs à toutes les pages
========================================================= */

/* EN-TÊTE DU SITE (HEADER) */
.en-tete-site {
    padding: 20px 24px;
    background: white;
    border-bottom: 1px solid var(--couleur-bordure);
}

.barre-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    font-family: Georgia, serif;
    font-size: 22px;
    font-weight: 900;
}

.logo-sombre {
    color: var(--couleur-titre);
}

.logo-couleur {
    color: var(--couleur-primaire);
}

.liens-navigation {
    display: flex;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.liens-navigation a {
    color: var(--couleur-secondaire);
    font-size: 14px;
}

.liens-navigation a:hover {
    color: var(--couleur-primaire);
}


/* PIED DE PAGE (FOOTER) */
.pied-de-page {
    margin-top: 80px;
    padding: 48px 24px 24px;
    background: white;
    border-top: 1px solid var(--couleur-bordure);
}

.conteneur-pied-de-page {
    display: flex;
    justify-content: space-between;
    gap: 48px;
    max-width: 1200px;
    margin: 0 auto;
}

.colonne-pied-de-page {
    flex: 1;
}

.colonne-pied-de-page h2 {
    margin: 0 0 16px;
    color: var(--couleur-titre);
    font-size: 16px;
}

.colonne-pied-de-page p {
    max-width: 320px;
    margin: 0;
    color: var(--couleur-secondaire);
    font-size: 14px;
    line-height: 1.7;
}

.colonne-pied-de-page ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.colonne-pied-de-page li {
    margin-bottom: 10px;
}

.colonne-pied-de-page a {
    color: var(--couleur-secondaire);
    font-size: 14px;
}

.colonne-pied-de-page a:hover {
    color: var(--couleur-primaire);
}

.bas-pied-de-page {
    max-width: 1200px;
    margin: 40px auto 0;
    padding-top: 20px;
    text-align: center;
    border-top: 1px solid var(--couleur-bordure);
}

.bas-pied-de-page p {
    margin: 0;
    color: #9ca3af;
    font-size: 12px;
}
/* =========================================================
   PAGES (pages.css)
   Styles spécifiques aux différentes pages
========================================================= */

/* PAGE ACCUEIL : BANNIÈRE (HERO) */
.banniere-accueil {
    padding: 96px 24px;
    text-align: center;
    background: #ffffff;
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 24px 24px;
}

.banniere-accueil h1 {
    max-width: 850px;
    margin: 0 auto;
    color: #0a2042;
    font-family: Georgia, serif;
    font-size: 56px;
    font-weight: 900;
    line-height: 1.15;
}

.banniere-accueil h1 span {
    color: var(--couleur-primaire);
}

.banniere-accueil p {
    max-width: 680px;
    margin: 24px auto 0;
    color: var(--couleur-secondaire);
    font-size: 17px;
    line-height: 1.7;
}

.actions-banniere {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 28px;
}

/* PAGE ACCUEIL : SECTION ARTICLES */
.section-articles {
    padding: 80px 24px;
}

.conteneur-articles {
    max-width: 1200px;
    margin: 0 auto;
}

.filtre-categories {
    margin-bottom: 64px;
}

.filtre-categories h2 {
    margin: 0 0 20px;
    color: var(--couleur-titre);
    font-size: 18px;
}

.liste-filtres {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.entete-liste-articles {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 32px;
}

.entete-liste-articles h2 {
    margin: 0;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 32px;
}

.entete-liste-articles p {
    margin: 8px 0 0;
    color: var(--couleur-secondaire);
}

.lien-voir-tout {
    color: var(--couleur-primaire);
    font-size: 14px;
    font-weight: 600;
}

.grille-articles {
    display: flex;
    gap: 24px;
}


/* PAGE DÉTAIL ARTICLE */
.entete-article-detail {
    padding: 96px 24px 64px;
    background: var(--couleur-fond);
    text-align: center;
}

.entete-article-detail h1 {
    margin: 0 auto;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 50px;
    line-height: 1.15;
}

.auteur-article {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
}

.auteur-article img {
    display: inline-block;
    width: 44px;
    height: 44px;
    border: 2px solid white;
    border-radius: 50%;
}

.auteur-article span {
    display: block;
    color: #9ca3af;
    font-size: 12px;
}

.couverture-article {
    height: 250px;
    margin: 0;
}

.couverture-article img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.conteneur-principal-article {
    max-width: 920px;
    margin: -100px auto 80px;
    padding: 0 24px;
}

.corps-article {
    padding: 110px 80px;
    color: var(--couleur-texte);
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 40px;
    font-size: 16px;
}

.corps-article h2,
.corps-article h3 {
    color: #0a2042;
    font-family: Georgia, serif;
    font-weight: 900;
    line-height: 1.3;
}

.corps-article h2 { margin: 0 0 24px; font-size: 32px; }
.corps-article h3 { margin: 48px 0 20px; font-size: 22px; }

.corps-article p { margin: 0 0 24px; }
.corps-article ul { margin: 0 0 24px; padding-left: 24px; }
.corps-article li { margin-bottom: 12px; }
.corps-article strong { color: var(--couleur-titre); }

.corps-article code {
    padding: 3px 7px;
    color: #0a2042;
    background: #f0f6ff;
    border-radius: 5px;
    font-family: monospace;
    font-size: 14px;
}

.figure-article { margin: 32px 0; }
.figure-article img { width: 100%; border-radius: 16px; }
.figure-article figcaption {
    margin-top: 10px;
    color: var(--couleur-secondaire);
    font-size: 13px;
    text-align: center;
}

.citation-article {
    margin: 40px 0;
    padding: 24px 28px;
    color: #4b5563;
    background: #f0f6ff;
    border-left: 4px solid var(--couleur-primaire);
    border-radius: 0 12px 12px 0;
}

.citation-article p { margin: 0; font-style: italic; }
.citation-article cite {
    display: block;
    margin-top: 12px;
    color: var(--couleur-secondaire);
    font-size: 13px;
    font-style: normal;
}

/* EN-TÊTE DE PAGE SIMPLE (Ex: À Propos, Catégorie) */
.entete-page-simple {
    padding: 96px 24px;
    text-align: center;
    background: white;
    border-bottom: 1px solid var(--couleur-bordure);
}

.entete-page-simple .etiquette {
    display: inline-block;
    margin-bottom: 16px;
    padding: 6px 16px;
    color: var(--couleur-secondaire);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 99px;
}

.entete-page-simple h1 {
    margin: 0 0 24px;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 48px;
    font-weight: 900;
}

.entete-page-simple p {
    max-width: 680px;
    margin: 0 auto;
    color: var(--couleur-secondaire);
    font-size: 18px;
    line-height: 1.7;
}

/* PHOTO DE PROFIL (À Propos) */
.photo-profil {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto 48px;
    object-fit: cover;
    border: 4px solid white;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\public-article.html
---
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le métier de développeur - Détail</title>
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
            <a href="public-index.html" class="logo">
                <span class="logo-sombre">Mon</span><span class="logo-couleur">Blog.</span>
            </a>
            <ul class="liens-navigation">
                <li><a href="public-index.html">Accueil</a></li>
                <li><a href="public-categorie.html">Catégories</a></li>
                <li><a href="public-apropos.html">À propos</a></li>
            </ul>
            <a href="admin-login.html" class="bouton-principal">
                Espace Admin
            </a>
        </nav>
    </header>

    <!-- =====================================================
         CONTENU DE L'ARTICLE
    ====================================================== -->
    <article>
        <header class="entete-article-detail">
            <span class="etiquette-categorie bleu">
                Développement
            </span>
            <h1>Le métier de développeur et ses principales missions</h1>
            
            <div class="auteur-article">
                <img src="images/author.jpg" alt="Portrait d'un développeur">
                <div>
                    <strong>Madani Ali</strong>
                    <span>Auteur du blog</span>
                </div>
            </div>
            
            <div style="margin-top:20px; color:#6b7280; font-size:14px;">
                <time datetime="2026-02-14">14 Février 2026</time> • <span>5 min de lecture</span>
            </div>
        </header>

        <figure class="couverture-article">
            <img src="images/article-cover.png" alt="Écran montrant du code informatique">
        </figure>

        <main class="conteneur-principal-article">
            <section class="corps-article">
                <h2>Le rôle du développeur</h2>
                <p>
                    Le développeur crée des applications.
                    Il transforme un besoin en solution informatique.
                    Son travail se fait en plusieurs étapes.
                    Il doit bien comprendre le projet.
                </p>
                <p>
                    La première mission est d'analyser le besoin.
                    Le développeur cherche les fonctionnalités nécessaires.
                    Il étudie les informations à utiliser.
                    Il peut aussi analyser une base de données.
                </p>
                
                <h3>Réaliser l'application</h3>
                <figure class="figure-article">
                    <img src="images/article-example.png" alt="Développeur écrivant du code">
                    <figcaption>Le développeur écrit le code de l'application.</figcaption>
                </figure>
                
                <blockquote class="citation-article">
                    <p>
                        Le développeur réalise l'application à partir du besoin.
                        Il utilise des technologies comme HTML, CSS et JavaScript.
                        Il organise son code et crée les fonctionnalités demandées.
                    </p>
                    <cite>— Métier de développeur</cite>
                </blockquote>
                
                <p>
                    Après la réalisation, le développeur doit vérifier l'application.
                    Il réalise des tests pour trouver les erreurs.
                    Il fait aussi du débogage pour corriger le code.
                </p>
                
                <ul>
                    <li><strong>Analyser le besoin</strong> : comprendre le projet et identifier les fonctionnalités.</li>
                    <li><strong>Réaliser l'application</strong> : écrire le code et développer les fonctionnalités.</li>
                    <li><strong>Vérifier l'application</strong> : tester l'application et corriger les erreurs.</li>
                    <li><strong>Déployer l'application</strong> : mettre l'application sur un serveur pour la rendre disponible.</li>
                </ul>
                
                <h3>Travailler en équipe</h3>
                <p>
                    Le développeur travaille aussi avec une équipe.
                    Il échange avec les autres membres du projet.
                    Il partage son code et ses informations.
                    Il participe aux différentes étapes du projet.
                    La collaboration est importante pour réussir le projet.
                </p>
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
                    <li><a href="public-index.html">Accueil</a></li>
                    <li><a href="public-categorie.html">Catégories</a></li>
                    <li><a href="public-apropos.html">À propos</a></li>
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

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\public-index.html
---
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
            <a href="public-index.html" class="logo">
                <span class="logo-sombre">Mon</span><span class="logo-couleur">Blog.</span>
            </a>
            <ul class="liens-navigation">
                <li><a href="public-index.html">Accueil</a></li>
                <li><a href="public-categorie.html">Catégories</a></li>
                <li><a href="public-apropos.html">À propos</a></li>
            </ul>
            <a href="admin-login.html" class="bouton-principal">
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
            <a href="public-apropos.html" class="bouton-secondaire">À propos de moi</a>
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
                    <a href="public-index.html" class="pilule-filtre actif">Tous les articles</a>
                    <a href="public-categorie.html" class="pilule-filtre">Développement</a>
                    <a href="public-categorie.html" class="pilule-filtre">Design UI/UX</a>
                    <a href="public-categorie.html" class="pilule-filtre">Productivité</a>
                    <a href="public-categorie.html" class="pilule-filtre">Management</a>
                </div>
            </section>

            <!-- EN-TÊTE DES ARTICLES -->
            <div class="entete-liste-articles">
                <div>
                    <h2>Dernières publications</h2>
                    <p>Les articles les plus récents de la communauté.</p>
                </div>
                <a href="public-categorie.html" class="lien-voir-tout">Explorer tout</a>
            </div>

            <!-- CARTES D'ARTICLES -->
            <div class="grille-articles">

                <!-- Article 1 -->
                <div class="carte-article">
                    <a href="public-article.html" class="carte-image">
                        <img src="images/article-example.png" alt="Code source affiché sur un écran">
                    </a>
                    <span class="etiquette-categorie bleu">Développement</span>
                    <div class="carte-contenu">
                        <h3><a href="public-article.html">Comment bien débuter avec Tailwind CSS en 2026 ?</a></h3>
                        <p>Découvrez les concepts fondamentaux de Tailwind CSS et pourquoi cette approche utilitaire est devenue le standard de l'industrie.</p>
                        <div class="carte-meta">
                            <span>14 Fév 2026</span>
                            <span>5 min</span>
                        </div>
                    </div>
                </div>

                <!-- Article 2 -->
                <div class="carte-article">
                    <a href="public-article.html" class="carte-image">
                        <img src="images/article-example.png" alt="Interface utilisateur moderne">
                    </a>
                    <span class="etiquette-categorie rose">UI / UX</span>
                    <div class="carte-contenu">
                        <h3><a href="public-article.html">L'importance des micro-interactions</a></h3>
                        <p>Une interface belle n'est pas suffisante. Comprendre comment animer de petites actions peut transformer l'expérience utilisateur.</p>
                        <div class="carte-meta">
                            <span>10 Fév 2026</span>
                            <span>3 min</span>
                        </div>
                    </div>
                </div>

                <!-- Article 3 -->
                <div class="carte-article">
                    <a href="public-article.html" class="carte-image">
                        <img src="images/article-example.png" alt="Équipe de développeurs en réunion">
                    </a>
                    <span class="etiquette-categorie vert">Management</span>
                    <div class="carte-contenu">
                        <h3><a href="public-article.html">Gérer une équipe de développeurs en Full Remote</a></h3>
                        <p>Les méthodes agiles et les rituels essentiels pour maintenir la cohésion de groupe et la productivité lorsque tous les membres sont distribués.</p>
                        <div class="carte-meta">
                            <span>05 Fév 2026</span>
                            <span>8 min</span>
                        </div>
                    </div>
                </div>

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
                    <li><a href="public-index.html">Accueil</a></li>
                    <li><a href="public-categorie.html">Catégories</a></li>
                    <li><a href="public-apropos.html">À propos</a></li>
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

---