---
title: "Veille technologique : Recherche textuelle SQL et filtres"
layout: tuto
slug: "veille-recherche-sql-filtres"
permalink: /tutos/:slug/
tuto_id: "T.161.1101"
version: "normal"
ua: "UA.161.110"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel de **veille technologique** de la session S10, vous allez explorer un nouveau sujet technique clé pour votre formation.

Cette veille technologique a pour but de vous préparer au défi technique de la session suivante : **S11 — Moteur de recherche et filtres multicritères**.

Vous allez apprendre à :
* comprendre le contexte et l'importance du sujet pour l'évolution de l'application Blog ;
* identifier les notions techniques fondamentales de la technologie étudiée ;
* concevoir votre slide de veille technologique selon les 4 critères imposés ;
* préparer votre restitution orale de 3 minutes.

## 2. Prérequis

* Avoir suivi la session précédente et maîtriser la présentation Google Slides ([T.161.111](/tutos/partage-google-slides/)).
* Être prêt à mener une recherche documentaire en autonomie.

---

## Partie 1 — Contexte & Importance du Sujet

### 1.1. Pourquoi ce sujet est-il crucial pour la suite du projet ?

Lorsque votre blog comportera des centaines d'articles, les utilisateurs voudront trouver un contenu précis sans parcourir toutes les pages une par une.

En session S11, vous allez implémenter un **moteur de recherche et des filtres multicritères** :
* Permettre à l'utilisateur de taper un mot-clé dans un champ de recherche.
* Utiliser la clause SQL `LIKE '%mot%'` pour repérer le terme n'importe où dans le titre ou le contenu de l'article.
* Combiner plusieurs filtres simultanément avec des conditions `AND` (ex: mot-clé 'voyage' ET catégorie 'Europe' ET publié en 2026).
* Dynamiser les interactions d'interface avec JavaScript.

### 1.2. Schéma de compréhension

```mermaid
flowchart TD
    Form["Formulaire de recherche :<br>Mot-clé + Catégorie + Auteur"] --> Requete["Construction dynamique de la requête SQL :<br><code>WHERE titre LIKE '%voyage%' AND categorie_id = 2</code>"]
    Requete --> Resultat["Affichage ciblé des résultats trouvés"]
```

---

## Partie 2 — Travail à Réaliser (Autonomie de l'Apprenant)

### 2.1. Votre mission de veille technologique

À l'aide de vos recherches documentaires (documentations officielles, tutoriels de référence), explorez le sujet puis concevez **une seule slide synthétique** dans votre présentation Google Slides de veille technologique.

**Votre slide doit obligatoirement respecter les 4 critères du standard de veille technologique Spartel N1 :**

1. **Nom de la technologie et logo officiel.**
2. **Définition simple (en une seule phrase accessible) :**  
   Expliquez comment fonctionne la recherche par motif textuel en SQL avec l'opérateur LIKE et les jokers (%).
3. **Le problème technique concret résolu :**  
   Expliquez comment construire une requête SQL lorsque l'utilisateur peut choisir de renseigner un filtre, plusieurs filtres, ou aucun.
4. **Trois mots-clés ou caractéristiques clés :**  
   Exemples : *Opérateur SQL LIKE — Joker textuel (%) — Filtres multicritères combinés*.

### 2.2. Préparation de la restitution orale

Vous présenterez votre slide de veille technologique devant votre formateur ou vos pairs en **3 minutes maximum** :
* **Minute 1 :** Présentez le sujet et donnez votre définition simple.
* **Minute 2 :** Expliquez le problème concret que cela résout pour le projet de Blog.
* **Minute 3 :** Citez vos 3 mots-clés et concluez sur ce que cela vous apporte pour le prochain sprint.

### 2.3. Livrable attendu

Dans votre dépôt annuel de travail, créez le fichier de traçabilité suivant :

```text
veille/technologique/recherche-sql-filtres/slide.md
```

**Contenu de votre fichier `slide.md` :**
```markdown
# Veille technologique : Recherche textuelle SQL et filtres

- **Auteur :** [Votre Prénom et Nom]
- **Session de réalisation :** S10
- **Session préparée :** S11 — Moteur de recherche et filtres multicritères
- **Lien public de la slide :** [Coller ici votre URL Google Slides accessible en mode Lecteur]

## Synthèse de ma veille technologique
- **Définition en une phrase :** [Votre phrase simple]
- **Problème résolu pour le projet :** [Pourquoi cet outil ou concept est indispensable]
- **Mes 3 mots-clés :** [Mot-clé 1] — [Mot-clé 2] — [Mot-clé 3]
```

Commitez et poussez votre fichier sur votre dépôt GitHub.

### Critères de réussite

* Votre slide de veille technologique est finalisée sur Google Slides avec un lien public accessible en lecture seule.
* Les 4 critères de contenu sont clairement identifiables en un coup d'œil.
* Vous êtes capable d'expliquer oralement l'intérêt de la technologie en 3 minutes chrono.
* Le fichier `slide.md` est commité dans votre dépôt d'autoformation à l'emplacement indiqué.

---

## Bilan

* Vous avez mené une démarche de **veille technologique** en autonomie pour préparer votre prochaine étape d'apprentissage.
* L'anticipation des concepts techniques vous permet d'aborder les ateliers pratiques avec confiance et curiosité.
* Cette autonomie documentaire constitue une compétence clé tout au long de votre parcours de développeur.

## Glossaire

* **Veille technologique** : Démarche méthodique d'information et d'exploration de technologies pour anticiper les évolutions et les défis d'un projet informatique.
* **Opérateur LIKE** : Opérateur SQL permettant de comparer une colonne à un motif de texte incomplet.
* **Joker textuel (%)** : Symbole représentant zéro, un ou plusieurs caractères quelconques dans une recherche SQL.
* **Filtre multicritères** : Mécanisme permettant de restreindre une liste de résultats selon plusieurs conditions simultanées.
