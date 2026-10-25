---
title: "Veille technologique : DÃ©couvrir les bases de HTML5 et CSS3"
layout: tuto
slug: "veille-bases-html5-css3"
permalink: /tutos/:slug/
tuto_id: "T.161.115"
version: "normal"
ua: "UA.161.11"
nav_order: 5
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel de clÃ´ture de la session S1, vous allez rÃ©aliser votre premiÃ¨re **veille prospective** pour prÃ©parer le travail technique de la session S2 : la crÃ©ation de la page Article en HTML5 et CSS3.

Vous allez apprendre Ã  :
* comprendre l'intÃ©rÃªt du balisage sÃ©mantique en **HTML5** ;
* dÃ©couvrir comment **CSS3** transforme un document brut en interface soignÃ©e ;
* concevoir une slide de veille technologique respectant les 4 critÃ¨res du standard Spartel N1 ;
* prÃ©senter votre synthÃ¨se en 3 minutes maximum.

## 2. PrÃ©requis

* Avoir suivi les tutoriels de l'unitÃ© [UA.161.11 â€” DÃ©couvrir le Web et les langages](/tutos/partage-google-slides/).
* Savoir modifier et partager sa prÃ©sentation Google Slides.

---

## Partie 1 â€” ThÃ©orie

### 1.1. Pourquoi une veille prospective ?

La **veille technologique** consiste Ã  explorer une technologie **avant** de l'utiliser en atelier pratique.
Elle vous permet :
* d'arriver au sprint suivant avec des repÃ¨res clairs ;
* de comprendre le sens des balises et des rÃ¨gles de style dÃ¨s la premiÃ¨re dÃ©monstration ;
* de poser des questions pertinentes au formateur.

### 1.2. HTML5 : Le pouvoir de la sÃ©mantique

Avant HTML5, toutes les zones d'une page Ã©taient construites avec des balises gÃ©nÃ©riques sans signification (`<div>`, `<div>`, `<div>`).
HTML5 a introduit des **balises sÃ©mantiques** qui indiquent clairement le rÃ´le de chaque bloc :

```mermaid
flowchart TD
    Page["Page Web SÃ©mantique (HTML5)"] --> H["&lt;header&gt; : En-tÃªte du site ou de l'article"]
    Page --> M["&lt;main&gt; : Contenu principal"]
    M --> A["&lt;article&gt; : Contenu autonome d'un article"]
    Page --> F["&lt;footer&gt; : Pied de page et mentions lÃ©gales"]
```

Ces balises facilitent la lecture du code, amÃ©liorent le rÃ©fÃ©rencement naturel (SEO) et rendent le site accessible aux personnes malvoyantes.

### 1.3. CSS3 : SÃ©parer le fond de la forme

CSS3 permet d'isoler l'apparence visuelle dans un fichier sÃ©parÃ© :
* Si vous souhaitez changer la couleur ou la police de tout le site, vous modifiez une seule ligne de CSS sans toucher au HTML.
* Il offre un contrÃ´le prÃ©cis des espacements (`margin`, `padding`), des couleurs (`color`, `background-color`) et de la typographie.

---

## Partie 2 â€” Pratique

### 2.1. Travail Ã  faire : Concevoir la slide de veille HTML5 / CSS3

Dans votre prÃ©sentation Google Slides partagÃ©e, crÃ©ez **une slide unique** consacrÃ©e Ã  votre veille prospective.

**Contenu obligatoire de votre slide (les 4 critÃ¨res N1) :**
1. **Nom et logos :** HTML5 et CSS3.
2. **DÃ©finition simple (1 phrase) :** Exemple : *Â« HTML5 et CSS3 sont les standards du Web qui permettent de structurer le contenu avec du sens et de styliser son apparence visuelle. Â»*
3. **Le problÃ¨me concret rÃ©solu :** Pourquoi est-il indispensable de sÃ©parer le contenu (HTML) du design (CSS) plutÃ´t que de tout mÃ©langer ?
4. **Trois mots-clÃ©s essentiels :** *Balise sÃ©mantique* â€” *SÃ©lecteur CSS* â€” *SÃ©paration fond/forme*.

### 2.2. Livrable attendu

1. Mettez Ã  jour votre prÃ©sentation Google Slides avec cette slide de veille.
2. Dans votre dÃ©pÃ´t d'autoformation, crÃ©ez le fichier de synthÃ¨se :

```text
veille/prospective/bases-html5-css3/slide.md
```

**Contenu de votre fichier `slide.md` :**
```markdown
# Veille Technologique : Bases de HTML5 et CSS3

- **Auteur :** [Votre PrÃ©nom et Nom]
- **Session prÃ©parÃ©e :** S2 â€” Page Article (HTML/CSS)
- **Lien public de la prÃ©sentation :** [Coller ici votre URL Google Slides]

## RÃ©sumÃ© de ma veille
- **Technologie :** HTML5 & CSS3
- **ProblÃ¨me rÃ©solu :** SÃ©parer la structure sÃ©mantique du contenu et son style visuel
- **Points clÃ©s retenus pour S2 :**
  1. Utiliser `<header>`, `<article>`, `<section>` au lieu de simples `<div>`.
  2. CrÃ©er un fichier `style.css` externe propre.
  3. Comprendre la relation entre un sÃ©lecteur CSS et une balise HTML.
```

Commitez et poussez votre fichier sur votre dÃ©pÃ´t GitHub.

### CritÃ¨res de rÃ©ussite

* La slide de veille technologique comporte les 4 critÃ¨res imposÃ©s.
* Vous Ãªtes capable de rÃ©sumer oralement votre veille en **3 minutes chrono**.
* Le fichier `slide.md` est commitÃ© dans votre dÃ©pÃ´t d'autoformation.

---

## Bilan

* Vous avez rÃ©alisÃ© votre premiÃ¨re veille prospective en autonomie.
* Vous abordez la session S2 avec des repÃ¨res solides sur la sÃ©mantique HTML5 et les principes du style CSS3.
* Ce rituel de veille vous accompagnera Ã  chaque session pour prÃ©parer le dÃ©fi technique suivant.

## Glossaire

* **Veille prospective** : Recherche documentaire prÃ©paratoire sur une compÃ©tence Ã  acquÃ©rir au prochain sprint.
* **SÃ©mantique** : Sens donnÃ© Ã  une balise pour dÃ©crire la nature de son contenu (ex: `<article>` indique un article de presse ou de blog).
* **SÃ©lecteur CSS** : Expression indiquant Ã  quelle balise HTML s'appliquent les rÃ¨gles de style (ex: `p`, `.titre`, `#menu`).