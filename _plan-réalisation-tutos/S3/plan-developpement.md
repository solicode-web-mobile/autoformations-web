# Plan de Réalisation — Progression Développement Web (Session S3)

**Progression :** Développement Web Applicatif (HTML5 & CSS3)  
**Session :** S3 — Page d’accueil du Blog — V1 statique  
**Niveau :** N1 (Débutant)  

---

## 1. Contexte & Objectif du Sprint S3

Dans cette troisième session, l'apprenant passe d'une page isolée à un **site Web complet multi-pages** :
- Il hérite de la page article réalisée en S2 dans [dossier-depart/](dossier-depart/).
- Il construit la page d'accueil du Blog présentant plusieurs articles dans [code-a-apprendre/public-index.html](code-a-apprendre/public-index.html).
- Il structure la grille de cartes d'articles et aligne la barre de navigation grâce à **Flexbox** en enrichissant le CSS dans [code-a-apprendre/css/](code-a-apprendre/css/).
- Il relie les pages entre elles grâce aux liens hypertextes `<a href="...">`.

---

## 2. Articulation Temporelle de la Progression

### ⏮️ Acquis Passés (Sessions S1 et S2)
- Découverte du fonctionnement du Web et du rôle des langages (Veille prospective `UA.161.11`).
- Création de la première page HTML5 sémantique (`public-article.html`) et application des premières règles CSS sur les textes et marges (`UA.122.11`, `UA.122.12`, `UA.122.21`).
- Découverte préparatoire des concepts modernes d'alignement avec Flexbox et CSS Grid (Veille prospective `UA.161.12`).

### 🎯 Unités d'Apprentissage & Tutoriels Mobilisés dans ce Sprint (Session S3)

#### Construire l’interface (D.122.1, html)

* **UA.122.13 — Structurer les zones d’une interface HTML :**  
  Construire l'organisation sémantique globale de la page d'accueil en séparant l'en-tête (`<header>`), la navigation (`<nav>`), la bannière de bienvenue (`<section class="hero">`), la zone principale (`<main>`) et le pied de page (`<footer>`).
  - **T.122.131 — Structurer l'en-tête global et la barre de navigation**  
    *Livrable :* Balises `<header>` et `<nav>` avec logo et liens | *Fichier :* `public-index.html`
  - **T.122.132 — Structurer la section de présentation (Hero Banner)**  
    *Livrable :* Zone de bienvenue `<section class="hero">` | *Fichier :* `public-index.html`
  - **T.122.133 — Structurer le pied de page du site**  
    *Livrable :* Pied de page sémantique `<footer>` avec mentions | *Fichier :* `public-index.html`

* **UA.122.14 — Structurer des ensembles répétitifs en HTML :**  
  Concevoir un modèle de carte d'article homogène et le répéter pour afficher plusieurs articles récents de façon régulière.
  - **T.122.141 — Créer la structure d'une carte d'article répétitive**  
    *Livrable :* Bloc `<article class="article-card">` complet | *Fichier :* `public-index.html`
  - **T.122.142 — Répéter les cartes et relier vers la page de détail**  
    *Livrable :* Grille de 6 articles avec liens `<a href="public-article.html">` | *Fichier :* `public-index.html`

#### Mettre en forme une page (D.122.2, css)

* **UA.122.22 — Gérer les dimensions et les espacements :**  
  Contrôler la largeur des conteneurs (`max-width: 1200px`), le centrage (`margin: 0 auto`) et l'aération entre les cartes avec `gap`.
  - **T.122.221 — Définir les conteneurs et les dimensions du site**  
    *Livrable :* Classe `.container` avec `max-width` et centrage | *Fichier :* `css/layout.css`

* **UA.122.23 — Disposer les éléments avec CSS :**  
  Utiliser les propriétés fondamentales de Flexbox (`display: flex`, `justify-content`, `align-items`, `flex-wrap`) pour aligner la barre de menu et agencer la grille de cartes d'articles.
  - **T.122.231 — Aligner la barre de navigation avec Flexbox**  
    *Livrable :* Menu aligné avec `display: flex` et `space-between` | *Fichier :* `css/layout.css`
  - **T.122.232 — Agencer les cartes d'articles en grille Flexbox**  
    *Livrable :* Grille multi-colonnes responsive avec `flex-wrap` et `gap` | *Fichier :* `css/components.css`

### ⏭️ Perspectives Futures (Sessions S4 à S12)
- **S4 :** Dynamiser la page d'accueil avec PHP procédural (`index.php`, `index-template.php`) pour générer automatiquement la liste des cartes depuis un tableau en mémoire sans copier-coller de code HTML (`UA.123.11` à `UA.123.14`).
- **S5 :** Modulariser l'affichage avec des fonctions PHP (`UA.123.15`).

---

## 3. Fiches de Conception Détaillées des Tutoriels

### T.122.131 — Structurer l'en-tête global et la barre de navigation
- **Objectif :** Créer la barre de navigation visible en haut de toutes les pages du Blog.
- **Notions :** Balises sémantiques `<header>`, `<nav>`, `<ul>`, `<li>`, `<a>`.
- **Consigne pour l'apprenant :**
  1. Ouvrir le fichier `public-index.html`.
  2. Ajouter la balise `<header class="site-header">`.
  3. Insérer à l'intérieur la balise `<nav class="navbar">`.
  4. Placer le logo du site à gauche : `<a href="public-index.html" class="brand">Mon<span>Blog.</span></a>`.
  5. Créer la liste des liens de navigation (`Accueil`, `Catégories`, `À propos`).
  6. Ajouter un bouton vers l'administration : `<a href="admin-login.html" class="button">Espace Admin</a>`.
- **Résultat attendu :** L'en-tête du site est structuré avec son logo et ses liens hypertextes.

---

### T.122.132 — Structurer la section de présentation (Hero Banner)
- **Objectif :** Accueillir le visiteur avec un titre accrocheur et une courte description de la ligne éditoriale du Blog.
- **Notions :** `<section class="hero">`, `<h1>`, `<p class="lead">`.
- **Consigne pour l'apprenant :**
  1. Après le `<header>`, ouvrir une balise `<section class="hero">`.
  2. Insérer un titre principal `<h1>` : *« Bienvenue sur mon Blog de développeur »*.
  3. Ajouter un paragraphe d'introduction invitant à découvrir les derniers articles techniques.
- **Résultat attendu :** Une section d'accueil conviviale qui introduit le contenu du site.

---

### T.122.133 — Structurer le pied de page du site
- **Objectif :** Terminer la page avec un pied de page sémantique clair.
- **Notions :** `<footer>`, copyright, date dynamique ou statique, liens secondaires.
- **Consigne pour l'apprenant :**
  1. Tout en bas de la page, avant `</body>`, ajouter une balise `<footer class="site-footer">`.
  2. Insérer le texte de copyright : `© 2026 Mon Blog Personnel - Tous droits réservés`.
  3. Ajouter un lien vers la page *À propos*.
- **Résultat attendu :** Le pied de page clôture proprement la structure du document.

---

### T.122.141 — Créer la structure d'une carte d'article répétitive
- **Objectif :** Modéliser un composant réutilisable pour présenter un résumé d'article.
- **Notions :** `<article class="article-card">`, image d'illustration, badge catégorie, titre `<h3>`, extrait de texte, métadonnées auteur et date.
- **Consigne pour l'apprenant :**
  1. Dans la zone `<main>`, créer une première carte avec `<article class="article-card">`.
  2. Ajouter une image miniature avec `<img src="images/article-cover.png" alt="...">`.
  3. Ajouter le badge catégorie : `<span class="badge">Développement</span>`.
  4. Insérer le titre de l'article avec un `<h3>`.
  5. Insérer un court extrait de résumé avec un paragraphe `<p>`.
  6. Ajouter une ligne d'informations contenant le nom de l'auteur et la date.
- **Résultat attendu :** Une première carte d'article complète, lisible et autonome.

---

### T.122.142 — Répéter les cartes et relier vers la page de détail
- **Objectif :** Présenter une collection de plusieurs articles et rendre chaque carte cliquable vers sa page complète.
- **Notions :** Réutilisation de structure HTML, attribut `href="public-article.html"`, accessibilité.
- **Consigne pour l'apprenant :**
  1. Dupliquer la carte pour obtenir au total 6 articles avec des titres et catégories variés (*Développement*, *CSS*, *Carrière*).
  2. Entourer le titre de chaque carte (ou ajouter un bouton *« Lire la suite »*) d'un lien `<a href="public-article.html">`.
  3. Tester le clic dans le navigateur pour vérifier la navigation fluide vers la page de détail.
- **Résultat attendu :** L'apprenant peut naviguer de l'accueil vers la page de détail d'un article.

---

### T.122.221 — Définir les conteneurs et les dimensions du site
- **Objectif :** Éviter que les contenus s'étirent sur toute la largeur des grands écrans.
- **Notions :** Classe utilitaire `.container`, `max-width: 1200px`, `margin: 0 auto`, `padding: 0 16px`.
- **Consigne pour l'apprenant :**
  1. Dans le fichier CSS, créer la classe `.container`.
  2. Définir une largeur maximale : `max-width: 1200px`.
  3. Centrer le conteneur horizontalement avec `margin-left: auto` et `margin-right: auto`.
  4. Ajouter un rembourrage de sécurité sur les côtés avec `padding: 0 16px`.
  5. Appliquer cette classe aux grandes zones du document (`navbar`, `hero`, `main`).
- **Résultat attendu :** L'interface reste élégamment centrée quelle que soit la résolution de l'écran.

---

### T.122.231 — Aligner la barre de navigation avec Flexbox
- **Objectif :** Disposer le logo à gauche, les liens au centre et le bouton d'administration à droite sur une même ligne.
- **Notions :** `display: flex`, `justify-content: space-between`, `align-items: center`, `gap: 20px`.
- **Consigne pour l'apprenant :**
  1. Cibler `.navbar` dans le CSS.
  2. Activer le mode flexible : `display: flex`.
  3. Aligner verticalement les éléments au centre : `align-items: center`.
  4. Répartir les 3 blocs aux extrémités : `justify-content: space-between`.
  5. Sur la liste de liens `.nav-links`, appliquer `display: flex` et `gap: 24px` pour les disposer horizontalement sans puces.
- **Résultat attendu :** La barre de menu s'affiche sur une seule ligne équilibrée et propre.

---

### T.122.232 — Agencer les cartes d'articles en grille Flexbox
- **Objectif :** Aligner les cartes d'articles par rangées de 3 colonnes avec des gouttières régulières.
- **Notions :** Conteneur `.articles-grid`, `display: flex`, `flex-wrap: wrap`, `gap: 24px`, calcul de largeur d'élément `flex: 0 0 calc(33.333% - 16px)`.
- **Consigne pour l'apprenant :**
  1. Cibler le conteneur parent `.articles-grid`.
  2. Activer Flexbox : `display: flex`.
  3. Autoriser le passage à la ligne : `flex-wrap: wrap`.
  4. Définir l'espacement automatique entre les cartes : `gap: 24px`.
  5. Définir la largeur des cartes `.article-card` pour former 3 colonnes sur grand écran.
- **Résultat attendu :** Les 6 cartes d'articles s'affichent en 2 rangées de 3 cartes parfaitement alignées.
