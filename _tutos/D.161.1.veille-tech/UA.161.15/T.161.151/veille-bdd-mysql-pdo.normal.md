---
title: "Veille technologique : Bases de données et MySQL"
layout: tuto
slug: "veille-bdd-mysql-pdo"
permalink: /tutos/:slug/
tuto_id: "T.161.151"
version: "normal"
ua: "UA.161.15"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel de **veille technologique** de la session S5, vous allez explorer un nouveau sujet technique clé pour votre formation.

Cette veille technologique a pour but de vous préparer au défi technique de la session suivante : **S6 — Persistance des données et MySQL**.

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

Jusqu'à la session S5, vos articles de blog sont stockés dans des tableaux en dur dans le code PHP.
Dès que le serveur redémarre ou que vous fermez la page, aucune nouvelle donnée saisie par un utilisateur ne peut être conservée.

En session S6, vous allez connecter votre code PHP à une vraie **Base de Données Relationnelle (MySQL)** :
* Les données seront stockées de façon **permanente** (persistance).
* Vous découvrirez le langage **SQL** pour interroger, ajouter et modifier des articles.
* Vous utiliserez l'outil moderne **PDO (PHP Data Objects)** pour dialoguer avec la base de données en toute sécurité.

### 1.2. Schéma de compréhension

```mermaid
flowchart LR
    PHP["Script PHP (Serveur)"] -- "Requête SQL via PDO" --> BDD["Base de Données MySQL<br><i>(Tables : articles, auteurs)</i>"]
    BDD -- "Résultats (Lignes de données)" --> PHP
```

---

## Partie 2 — Travail à Réaliser (Autonomie de l'Apprenant)

### 2.1. Votre mission de veille technologique

À l'aide de vos recherches documentaires (documentations officielles, tutoriels de référence), explorez le sujet puis concevez **une seule slide synthétique** dans votre présentation Google Slides de veille technologique.

**Votre slide doit obligatoirement respecter les 4 critères du standard de veille technologique Spartel N1 :**

1. **Nom de la technologie et logo officiel.**
2. **Définition simple (en une seule phrase accessible) :**  
   Expliquez ce qu'est un SGBD (Système de Gestion de Base de Données) relationnel comme MySQL.
3. **Le problème technique concret résolu :**  
   Expliquez la différence entre une donnée temporaire en mémoire vive (RAM) et une donnée persistante sur disque.
4. **Trois mots-clés ou caractéristiques clés :**  
   Exemples : *SGBDR (MySQL) — Langage SQL — Extension PDO sécurisée*.

### 2.2. Préparation de la restitution orale

Vous présenterez votre slide de veille technologique devant votre formateur ou vos pairs en **3 minutes maximum** :
* **Minute 1 :** Présentez le sujet et donnez votre définition simple.
* **Minute 2 :** Expliquez le problème concret que cela résout pour le projet de Blog.
* **Minute 3 :** Citez vos 3 mots-clés et concluez sur ce que cela vous apporte pour le prochain sprint.

### 2.3. Livrable attendu

Dans votre dépôt annuel de travail, créez le fichier de traçabilité suivant :

```text
veille/technologique/bdd-mysql-pdo/slide.md
```

**Contenu de votre fichier `slide.md` :**
```markdown
# Veille technologique : Bases de données et MySQL

- **Auteur :** [Votre Prénom et Nom]
- **Session de réalisation :** S5
- **Session préparée :** S6 — Persistance des données et MySQL
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
* **SGBDR** : Système de Gestion de Base de Données Relationnelle organisant les données sous forme de tables reliées.
* **MySQL** : Moteur de base de données relationnelle libre très répandu dans le développement Web.
* **PDO (PHP Data Objects)** : Interface sécurisée en PHP permettant d'exécuter des requêtes SQL sans dépendre d'un moteur spécifique.
