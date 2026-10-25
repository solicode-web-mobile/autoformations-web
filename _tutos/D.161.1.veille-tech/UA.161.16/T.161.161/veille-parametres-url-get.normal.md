---
title: "Veille technologique : Paramètres d'URL et méthode GET"
layout: tuto
slug: "veille-parametres-url-get"
permalink: /tutos/:slug/
tuto_id: "T.161.161"
version: "normal"
ua: "UA.161.16"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel de **veille technologique** de la session S6, vous allez explorer un nouveau sujet technique clé pour votre formation.

Cette veille technologique a pour but de vous préparer au défi technique de la session suivante : **S7 — Page Détail et filtrage dynamique**.

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

En session S6, vous apprenez à lire des articles dans la base de données. Mais sur la page d'accueil, quand l'utilisateur clique sur « Lire la suite », comment le serveur sait-il **quel article précis** afficher ?

En session S7, vous allez utiliser la **transmission de données par l'URL (Méthode GET)** :
* L'URL transportera un paramètre unique, par exemple : `article.php?id=3`.
* Le serveur PHP récupérera ce chiffre `3` via le tableau `$_GET['id']`.
* La requête SQL sélectionnera exactement l'article demandé : `WHERE id = 3`.
* Ce même mécanisme permettra de filtrer les articles par catégorie (`index.php?categorie=voyages`).

### 1.2. Schéma de compréhension

```mermaid
flowchart LR
    Lien["Clic sur l'article 3<br><code>href='article.php?id=3'</code>"] --> Req["URL envoyée :<br><code>article.php?id=3</code>"]
    Req --> PHP["PHP récupère :<br><code>$_GET['id'] = 3</code>"]
    PHP --> SQL["SQL : SELECT * FROM articles WHERE id = 3"]
```

---

## Partie 2 — Travail à Réaliser (Autonomie de l'Apprenant)

### 2.1. Votre mission de veille technologique

À l'aide de vos recherches documentaires (documentations officielles, tutoriels de référence), explorez le sujet puis concevez **une seule slide synthétique** dans votre présentation Google Slides de veille technologique.

**Votre slide doit obligatoirement respecter les 4 critères du standard de veille technologique Spartel N1 :**

1. **Nom de la technologie et logo officiel.**
2. **Définition simple (en une seule phrase accessible) :**  
   Expliquez ce qu'est la méthode HTTP GET et comment une variable transite dans une adresse Web (Query String).
3. **Le problème technique concret résolu :**  
   Expliquez pourquoi une URL avec paramètre permet de n'avoir qu'un seul fichier `article.php` pour des milliers d'articles différents.
4. **Trois mots-clés ou caractéristiques clés :**  
   Exemples : *Query String (?id=3) — Superglobale $_GET — Ciblage d'enregistrement*.

### 2.2. Préparation de la restitution orale

Vous présenterez votre slide de veille technologique devant votre formateur ou vos pairs en **3 minutes maximum** :
* **Minute 1 :** Présentez le sujet et donnez votre définition simple.
* **Minute 2 :** Expliquez le problème concret que cela résout pour le projet de Blog.
* **Minute 3 :** Citez vos 3 mots-clés et concluez sur ce que cela vous apporte pour le prochain sprint.

### 2.3. Livrable attendu

Dans votre dépôt annuel de travail, créez le fichier de traçabilité suivant :

```text
veille/technologique/parametres-url-get/slide.md
```

**Contenu de votre fichier `slide.md` :**
```markdown
# Veille technologique : Paramètres d'URL et méthode GET

- **Auteur :** [Votre Prénom et Nom]
- **Session de réalisation :** S6
- **Session préparée :** S7 — Page Détail et filtrage dynamique
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
* **Méthode GET** : Méthode HTTP transmettant les paramètres directement visibles dans l'adresse URL.
* **Query String** : Partie d'une URL située après le point d'interrogation (?) contenant des paires clé=valeur.
* **Superglobale $_GET** : Tableau associatif automatique en PHP contenant toutes les variables transmises par l'URL.
