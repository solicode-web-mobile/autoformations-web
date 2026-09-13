---
title: "Installation de Visual Studio Code"
layout: tuto
slug: "installation-visual-studio-code"
permalink: /tutos/:slug/detaille
tuto_id: "T.122.110"
type: "classique"
version: "detaille"
ua: "UA.122.11"
nav_order: 0
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Installer Visual Studio Code (VS Code) sur votre ordinateur, comprendre pourquoi cet outil est essentiel, le configurer de manière optimale pour le développement web, et valider l'installation en créant votre tout premier fichier.

## 2. Prérequis

* Un ordinateur sous Windows (ou Mac/Linux).
* Une connexion Internet.
* Des droits d'administrateur sur votre session (parfois nécessaires pour l'installation).

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un éditeur de code ?

Un **éditeur de code** (ou IDE - Environnement de Développement Intégré) est un logiciel conçu spécifiquement pour aider les développeurs à écrire des programmes informatiques. 

Contrairement à un simple éditeur de texte comme le Bloc-notes (Notepad), un éditeur de code propose de nombreuses fonctionnalités avancées :
- **Coloration syntaxique** : le code s'affiche en différentes couleurs selon le langage (HTML, CSS, JS) pour le rendre plus lisible.
- **Auto-complétion** : le logiciel devine ce que vous allez écrire et vous fait des suggestions pour gagner du temps.
- **Détection d'erreurs** : il souligne les fautes de syntaxe avant même que vous n'exécutiez le code.

### 1.2. Pourquoi Visual Studio Code (VS Code) ?

**Visual Studio Code**, souvent abrégé **VS Code**, est aujourd'hui l'éditeur de code gratuit le plus utilisé au monde. Développé par Microsoft, il est léger, rapide, et peut être enrichi grâce à des milliers d'extensions créées par la communauté.

**À retenir :** 

L'éditeur de code est votre principal outil de travail. Bien le choisir et savoir l'installer correctement est la première étape de votre parcours de développeur.

## Partie 2 — Pratique

### 2.1. Télécharger VS Code

#### Étape 1 — Accéder au site officiel

Ouvrez votre navigateur web (Chrome, Firefox, Edge, etc.) et allez sur la page officielle :

```text
https://code.visualstudio.com/
```

#### Étape 2 — Choisir la bonne version

Sur la page d'accueil, un gros bouton bleu s'affiche automatiquement en fonction de votre système d'exploitation. 
Cliquez sur **Download for Windows**. 
*(Si vous êtes sur Mac ou Linux, utilisez le menu déroulant à côté du bouton pour choisir votre version).*

Le téléchargement du programme d'installation (un fichier `.exe` sous Windows) va démarrer.

### 2.2. Installer et configurer VS Code

#### Étape 3 — Lancer l'installation

Une fois le téléchargement terminé, cliquez sur le fichier téléchargé (ex: `VSCodeUserSetup.exe`) pour l'ouvrir.

1. Lisez et **Acceptez l'accord de licence**, puis cliquez sur *Suivant*.
2. Laissez le **Dossier de destination** par défaut, et cliquez sur *Suivant*.
3. Laissez le dossier du menu Démarrer par défaut, et cliquez sur *Suivant*.

#### Étape 4 — Options supplémentaires (Important)

L'écran "Sélectionner des tâches supplémentaires" est crucial pour optimiser votre utilisation :

- Cochez la case **"Ajouter l'action 'Ouvrir avec Code' au menu contextuel de Fichier"**.
- Cochez la case **"Ajouter l'action 'Ouvrir avec Code' au menu contextuel de Répertoire"**.

*(Ces options vous permettront de faire un clic droit sur n'importe quel dossier de votre ordinateur pour l'ouvrir directement dans VS Code)*.

- Cochez **"Ajouter à PATH"** (elle est souvent cochée par défaut).
- Cliquez sur *Suivant*, puis sur **Installer**.

### 2.3. Valider l'installation et découvrir l'interface

#### Étape 5 — Lancer l'application

À la fin de l'installation, laissez la case "Exécuter Visual Studio Code" cochée et cliquez sur **Terminer**. 

L'éditeur s'ouvre sur une page d'accueil (*Welcome*). Sur votre gauche, vous pouvez observer la **Barre d'activité** (avec les icônes de fichiers, de recherche, etc.). C'est ici que vous naviguerez dans vos futurs projets.

#### Étape 6 — Créer votre premier fichier

Nous allons créer un fichier pour s'assurer que vous pouvez écrire du code.

1. Dans le menu tout en haut, cliquez sur **File** (Fichier).
2. Cliquez sur **New Text File** (Nouveau fichier texte).
3. Un onglet vide apparaît. Appuyez sur les touches `Ctrl + S` de votre clavier pour l'enregistrer.
4. Dans la fenêtre qui s'ouvre, choisissez l'emplacement (ex: le Bureau), et nommez le fichier exactement ainsi :

```text
test.html
```

5. Cliquez sur *Enregistrer*. Remarquez que l'icône à côté du nom du fichier dans l'onglet a changé pour indiquer qu'il s'agit d'un fichier HTML (souvent représenté par des crochets `< >` ou le logo HTML5).

**Résultat attendu :**

Le logiciel VS Code est installé avec les options de menu contextuel, l'interface principale est fonctionnelle, et vous êtes capable d'y créer et d'y enregistrer un fichier de code `test.html`.

## Bilan

**Vous avez réalisé :** l’installation complète et l'optimisation (menu contextuel) de Visual Studio Code.

**Vous savez maintenant :** ce qu'est un éditeur de code, pourquoi utiliser VS Code, comment l'installer avec les bonnes options, et comment créer et sauvegarder un fichier informatique spécifique (`.html`).

## Glossaire

* **VS Code** : éditeur gratuit de Microsoft, utilisé par la majorité des développeurs web pour écrire du code.
* **Éditeur de code (IDE)** : logiciel spécialisé proposant des aides (coloration, complétion, vérification) pour la programmation.
* **Coloration syntaxique** : fonctionnalité qui donne des couleurs différentes aux mots-clés du code pour le rendre plus lisible.
* **Menu contextuel** : le menu qui apparaît lorsque vous faites un clic droit sur un fichier ou un dossier sous Windows.
