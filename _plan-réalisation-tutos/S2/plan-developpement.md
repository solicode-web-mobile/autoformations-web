# Plan de Réalisation — Progression Développement Web (Session S2)

**Progression :** Développement Web Applicatif (HTML5 & CSS3)  
**Session :** S2 — Page de détail d’un article — V1 statique  
**Niveau :** N1 (Débutant)  

---

## 1. Contexte & Objectif du Sprint S2

Dans cette deuxième session, l'apprenant écrit son **premier code Web d'application**.  
À partir des maquettes graphiques et des ressources graphiques fournies dans [dossier-depart/](dossier-depart/), il construit la page statique de détail d'un article de blog :
- Fichier HTML cible : [code-a-apprendre/public-article.html](code-a-apprendre/public-article.html)
- Feuille de style cible : [code-a-apprendre/css/style.css](code-a-apprendre/css/style.css)

---

## 2. Articulation Temporelle de la Progression

### ⏮️ Acquis Passés (Session S1)
- Découverte du fonctionnement du Web, du dialogue Client / Serveur via HTTP et du rôle respectif de HTML, CSS, JavaScript et PHP (Veille prospective `UA.161.11`).

### 🎯 Unités d'Apprentissage & Tutoriels Mobilisés dans ce Sprint (Session S2)

#### Construire l’interface (D.122.1, html)

* **UA.122.11 — Construire la structure de base d'une page HTML :**  
  Créer une page HTML minimale valide avec déclaration DOCTYPE, balises racines et métadonnées.
  - **T.122.111 — Créer le squelette HTML5 valide**  
    *Livrable :* Page HTML avec balises `<!DOCTYPE>`, `<html>`, `<head>`, `<body>` | *Fichier :* `public-article.html`
  - **T.122.112 — Définir les métadonnées et lier le CSS**  
    *Livrable :* Balises `<meta charset="UTF-8">`, `<title>` et `<link rel="stylesheet">` | *Fichier :* `public-article.html`

* **UA.122.12 — Structurer les contenus HTML :**  
  Choisir la balise sémantique appropriée pour chaque contenu de l'article (titre, auteur, date, chapitres, listes, citations, extraits de code).
  - **T.122.121 — Structurer l'en-tête de l'article**  
    *Livrable :* En-tête `<header>` avec catégorie, titre `<h1>`, photo et nom de l'auteur | *Fichier :* `public-article.html`
  - **T.122.122 — Intégrer l'image principale de couverture**  
    *Livrable :* Balise `<figure>` contenant `<img src="..." alt="...">` | *Fichier :* `public-article.html`
  - **T.122.123 — Structurer le contenu rédactionnel**  
    *Livrable :* Corps d'article avec `<section>`, `<h2>`, `<p>`, `<ul>`, `<blockquote>` et `<pre><code>` | *Fichier :* `public-article.html`

#### Mettre en forme une page (D.122.2, css)

* **UA.122.21 — Appliquer des règles CSS :**  
  Mettre en forme le texte, définir les couleurs, espacer les blocs avec marges et rembourrages, et styliser les éléments graphiques.
  - **T.122.211 — Définir la typographie et les couleurs**  
    *Livrable :* Règles CSS globales de police (`font-family`), couleur (`color`), fond (`background`) | *Fichier :* `css/style.css`
  - **T.122.212 — Gérer les espacements et dimensions**  
    *Livrable :* Utilisation de `margin`, `padding`, `max-width` pour centrer et aérer le contenu | *Fichier :* `css/style.css`
  - **T.122.213 — Styliser les détails graphiques**  
    *Livrable :* Badge de catégorie arrondi, photo auteur circulaire, citation encadrée | *Fichier :* `css/style.css`

### ⏭️ Perspectives Futures (Sessions S3 à S12)
- **S3 :** Construction de la page d'accueil multi-articles (`public-index.html`) avec alignement Flexbox et grille responsive (`UA.122.13`, `UA.122.14`, `UA.122.22`, `UA.122.23`).
- **S4 :** Transformation dynamique de la page d'accueil en PHP procédural (`UA.123.11`, `UA.123.12`, `UA.123.13`, `UA.123.14`).

---

## 3. Fiches de Conception Détaillées des Tutoriels

### T.122.111 — Créer le squelette HTML5 valide
- **Objectif :** Créer un fichier HTML propre et conforme aux standards du Web.
- **Notions :** Déclaration `<!DOCTYPE html>`, balise racine `<html lang="fr">`, en-tête technique `<head>`, zone visible `<body>`.
- **Consigne pour l'apprenant :**
  1. Ouvrir le dossier du projet dans VS Code.
  2. Créer le fichier `public-article.html` à la racine.
  3. Saisir la structure minimale HTML5.
- **Résultat attendu :** Un fichier HTML valide qui affiche une page blanche sans erreur dans le navigateur.

---

### T.122.112 — Définir les métadonnées et lier le CSS
- **Objectif :** Configurer l'encodage des caractères, le titre de l'onglet et relier la feuille de style externe.
- **Notions :** `<meta charset="UTF-8">`, `<title>`, balise `<link rel="stylesheet" href="css/style.css">`.
- **Consigne pour l'apprenant :**
  1. Dans `<head>`, ajouter la balise `<meta charset="UTF-8">`.
  2. Renseigner le titre : `Le métier de développeur - Détail`.
  3. Lier la feuille de style située dans le sous-dossier `css/`.
- **Résultat attendu :** Le titre apparaît dans l'onglet du navigateur et les styles CSS sont pris en compte.

---

### T.122.121 — Structurer l'en-tête de l'article
- **Objectif :** Construire le bloc d'introduction de l'article avec ses métadonnées visibles.
- **Notions :** Balises sémantiques `<article>`, `<header>`, `<span>`, `<h1>`, `<div>`, `<img>`, `<strong>`, `<time>`.
- **Consigne pour l'apprenant :**
  1. Ouvrir une balise `<article>`.
  2. Créer un `<header class="article-header">`.
  3. Insérer le badge catégorie : `<span class="article-category">Développement</span>`.
  4. Insérer le titre principal avec une balise `<h1>`.
  5. Insérer le bloc auteur avec la photo `images/author.jpg`, le nom et la date de publication.
- **Résultat attendu :** L'en-tête de l'article est lisible et hiérarchisé.

---

### T.122.122 — Intégrer l'image principale de couverture
- **Objectif :** Afficher l'illustration principale de l'article de manière sémantique et accessible.
- **Notions :** Balises `<figure>`, `<img>`, attributs obligatoires `src` et `alt`.
- **Consigne pour l'apprenant :**
  1. Après le `<header>`, ajouter une balise `<figure class="article-cover">`.
  2. Insérer l'image `images/article-cover.png`.
  3. Renseigner un texte descriptif précis dans l'attribut `alt`.
- **Résultat attendu :** L'image s'affiche sous le titre sans déformer la mise en page.

---

### T.122.123 — Structurer le contenu rédactionnel
- **Objectif :** Organiser le texte de l'article avec des balises sémantiques riches.
- **Notions :** `<main>`, `<section>`, `<h2>`, `<p>`, `<ul>`, `<li>`, `<blockquote>`, `<pre>`, `<code>`.
- **Consigne pour l'apprenant :**
  1. Créer une balise `<main class="article-main">` et une section de lecture.
  2. Découper le contenu en 3 sous-parties avec des titres `<h2>`.
  3. Insérer les paragraphes de texte explicatifs avec `<p>`.
  4. Ajouter une liste à puces `<ul>` pour énumérer les missions du développeur.
  5. Mettre en valeur une citation avec `<blockquote>` et un exemple de code avec `<pre><code>`.
- **Résultat attendu :** Le contenu complet de l'article est structuré et agréable à lire.

---

### T.122.211 — Définir la typographie et les couleurs
- **Objectif :** Appliquer une charte visuelle sobre et professionnelle avec CSS.
- **Notions :** Sélecteurs d'éléments (`body`, `h1`, `h2`), propriétés `font-family`, `color`, `background-color`, `line-height`.
- **Consigne pour l'apprenant :**
  1. Ouvrir `css/style.css`.
  2. Définir la police sans-serif et la couleur de fond `#f9fafb` sur `body`.
  3. Personnaliser la couleur et la police avec empattement (`Georgia, serif`) pour les titres `h1`.
- **Résultat attendu :** La page adopte une présentation typographique élégante.

---

### T.122.212 — Gérer les espacements et dimensions
- **Objectif :** Centrer le contenu et contrôler l'espace entre les blocs pour une lecture confortable.
- **Notions :** `max-width`, `margin: 0 auto`, `padding`, boîte de modèle CSS.
- **Consigne pour l'apprenant :**
  1. Limiter la largeur du texte de lecture à `740px` avec `max-width`.
  2. Centrer le bloc horizontalement avec des marges automatiques `margin: 0 auto`.
  3. Ajouter des espacements intérieurs (`padding`) pour aérer l'en-tête et les paragraphes.
- **Résultat attendu :** Le texte forme une colonne de lecture centrale équilibrée.

---

### T.122.213 — Styliser les détails graphiques
- **Objectif :** Apporter les finitions visuelles modernes à la page.
- **Notions :** `border-radius: 50%` pour l'avatar, `border-radius: 20px` pour le badge catégorie, bordure gauche sur `<blockquote>`.
- **Consigne pour l'apprenant :**
  1. Arrondir la photo de profil de l'auteur en cercle parfait avec `border-radius: 50%`.
  2. Créer une bordure douce et un fond blanc pour le badge `.article-category`.
  3. Ajouter une bordure verticale colorée à gauche de la citation pour la démarquer du texte.
- **Résultat attendu :** La page article ressemble fidèlement à la maquette de référence.
