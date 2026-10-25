---
title: "Veille technologique : Sessions et hachage de mot de passe"
layout: tuto
slug: "veille-sessions-hachage-bcrypt"
permalink: /tutos/:slug/
tuto_id: "T.161.191"
version: "normal"
ua: "UA.161.19"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Objectif

Dans ce tutoriel de **veille technologique** de la session S9, vous allez explorer un nouveau sujet technique clé pour votre formation.

Cette veille technologique a pour but de vous préparer au défi technique de la session suivante : **S10 — Authentification et sécurité administrateur**.

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

Le protocole HTTP est dit « sans état » (stateless) : à chaque nouvelle page demandée, le serveur oublie immédiatement qui vous êtes.
Comment l'administrateur peut-il rester connecté d'une page à l'autre sans retaper son mot de passe ?
Et surtout : comment stocker les mots de passe sans risque en cas de piratage de la base de données ?

En session S10, vous découvrirez deux piliers majeurs de la sécurité Web :
1. **Les Sessions PHP (`session_start()`) :** créer un espace mémoire côté serveur associé à un identifiant unique (cookie de session) pour mémoriser l'utilisateur connecté.
2. **Le hachage cryptographique (Bcrypt) :** transformer un mot de passe en une empreinte irréversible avec `password_hash()`. **Il est formellement interdit de stocker un mot de passe en clair !**

### 1.2. Schéma de compréhension

```mermaid
flowchart LR
    Pass["Mot de passe : 'azerty'"] --> Hash["Fonction Bcrypt<br><code>password_hash()</code>"]
    Hash --> Empreinte["Empreinte irréversible :<br><code>$2y$10$e8w9f...</code>"]
    Empreinte --> BDD["Stockage sécurisé en BDD"]
```

---

## Partie 2 — Travail à Réaliser (Autonomie de l'Apprenant)

### 2.1. Votre mission de veille technologique

À l'aide de vos recherches documentaires (documentations officielles, tutoriels de référence), explorez le sujet puis concevez **une seule slide synthétique** dans votre présentation Google Slides de veille technologique.

**Votre slide doit obligatoirement respecter les 4 critères du standard de veille technologique Spartel N1 :**

1. **Nom de la technologie et logo officiel.**
2. **Définition simple (en une seule phrase accessible) :**  
   Expliquez le fonctionnement d'une session utilisateur et la différence entre un chiffrement réversible et un hachage à sens unique.
3. **Le problème technique concret résolu :**  
   Expliquez quelles sont les conséquences catastrophiques du stockage de mots de passe en clair dans une base de données.
4. **Trois mots-clés ou caractéristiques clés :**  
   Exemples : *Session PHP — Cookie de session — Hachage Bcrypt (password_hash)*.

### 2.2. Préparation de la restitution orale

Vous présenterez votre slide de veille technologique devant votre formateur ou vos pairs en **3 minutes maximum** :
* **Minute 1 :** Présentez le sujet et donnez votre définition simple.
* **Minute 2 :** Expliquez le problème concret que cela résout pour le projet de Blog.
* **Minute 3 :** Citez vos 3 mots-clés et concluez sur ce que cela vous apporte pour le prochain sprint.

### 2.3. Livrable attendu

Dans votre dépôt annuel de travail, créez le fichier de traçabilité suivant :

```text
veille/technologique/sessions-hachage-bcrypt/slide.md
```

**Contenu de votre fichier `slide.md` :**
```markdown
# Veille technologique : Sessions et hachage de mot de passe

- **Auteur :** [Votre Prénom et Nom]
- **Session de réalisation :** S9
- **Session préparée :** S10 — Authentification et sécurité administrateur
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
* **Session HTTP** : Mécanisme permettant au serveur de conserver des informations sur un utilisateur tout au long de sa navigation.
* **Hachage cryptographique** : Algorithme mathématique transformant une chaîne de texte en une empreinte numérique de taille fixe et irréversible.
* **Bcrypt** : Algorithme standard de hachage robuste intégrant un salage automatique pour protéger les mots de passe.
