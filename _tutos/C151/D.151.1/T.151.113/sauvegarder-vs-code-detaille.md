---
title: "Sauvegarder son code en un clic avec VS Code"
layout: tuto
slug: "sauvegarder-vs-code"
permalink: /tutos/:slug/detaille
tuto_id: "T.151.113"
type: "classique"
version: "detaille"
ua: "UA.151.11"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Utiliser l'interface graphique avancée de VS Code pour gérer le cycle complet de Git sans utiliser le terminal.

## 2. Prérequis

Vous devez :

* avoir installé Git ;
* avoir configuré votre identité globale ;
* disposer d'un dépôt GitHub ;
* avoir installé VS Code.

## Partie 1 — Théorie

### 1.1. Pourquoi utiliser une interface graphique (GUI) ?

Git a été créé pour être utilisé dans un terminal.

Toutefois, mémoriser des commandes textuelles peut être difficile.

Une Interface Graphique Utilisateur (GUI) permet d'exécuter ces commandes avec des boutons.

VS Code inclut une interface Git par défaut.

Elle transforme vos clics en commandes Git invisibles en arrière-plan.

### 1.2. Le panneau Contrôle de code source

Dans la barre latérale de VS Code, l'icône de Git représente un embranchement de chemin de fer.

C'est le panneau **Contrôle de code source**.

Ce panneau observe en permanence votre dossier de travail.

Il détecte chaque fichier ajouté, modifié ou supprimé.

### 1.3. Le flux de travail visuel

Le cycle est le même que dans le terminal, mais visuel :

1. **Cloner** : Télécharger un dépôt distant.
2. **+ (Staging)** : Placer un fichier dans la zone de préparation.
3. **Commit** : Sauvegarder la zone de préparation.
4. **Synchroniser (Push)** : Envoyer le commit sur Internet.

### 1.4. À retenir

* VS Code ne remplace pas Git, il le pilote.
* L'interface simplifie la préparation et la validation.
* Un commit crée une sauvegarde locale.
* Le bouton "Synchroniser" effectue l'envoi distant.

## Partie 2 — Pratique

### 2.1. Cloner un dépôt

#### Étape 1 — Ouvrir l'outil

Cliquez sur l'icône **Contrôle de code source** dans la barre latérale gauche.

#### Étape 2 — Lancer le téléchargement

Cliquez sur **Cloner le dépôt**.

VS Code fait apparaître une barre de saisie en haut de l'écran.

Collez-y l'URL complète de votre dépôt GitHub.

VS Code vous demandera de choisir un dossier sur votre ordinateur pour y ranger le projet.

#### Étape 3 — Ouvrir le dossier

Une fois le téléchargement terminé, une notification apparaît en bas à droite.

Cliquez sur **Ouvrir**.

Le projet est maintenant chargé dans l'éditeur.

### 2.2. Préparer une modification (Staging)

#### Étape 4 — Simuler un changement

Ouvrez un fichier de votre projet (par exemple un fichier HTML).

Ajoutez un petit texte.

Enregistrez le fichier avec `Ctrl + S`.

#### Étape 5 — L'observation de VS Code

Retournez dans le panneau **Contrôle de code source**.

VS Code a détecté votre changement. 

Le fichier apparaît dans la liste "Modifications".

Un petit `M` (Modified) indique que le fichier a changé.

#### Étape 6 — Ajouter à la zone de préparation

Survolez le nom du fichier avec votre souris.

Cliquez sur le bouton **+** (Préparer les modifications).

Le fichier passe de la liste "Modifications" à la liste "Modifications intermédiaires".

Il est prêt pour le commit.

### 2.3. Créer un commit

#### Étape 7 — Le message obligatoire

Au-dessus de la liste des fichiers, il y a une zone de texte.

Git exige toujours un message descriptif.

Écrivez :

```text
Ajout d'un texte d'essai
```

#### Étape 8 — Valider la sauvegarde

Cliquez sur le grand bouton bleu **Valider (Commit)**.

La sauvegarde est créée dans votre historique local.

Les listes de fichiers se vident, car l'atelier est désormais propre.

### 2.4. Envoyer le commit vers GitHub (Push)

#### Étape 9 — Synchroniser

Votre commit existe sur votre ordinateur, mais pas encore sur GitHub.

Un bouton bleu **Synchroniser les modifications** est apparu.

Cliquez dessus.

VS Code exécute discrètement la commande pour envoyer (Push) le code vers le serveur.

Une fois l'opération terminée, le dépôt GitHub est à jour.

### Résultat attendu

Le cycle complet a été piloté à la souris :

```text
Bouton Cloner
   ↓
Bouton +
   ↓
Bouton Valider
   ↓
Bouton Synchroniser
```

La page de démonstration suivante présente le résultat attendu de l'interface :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-3-git.html' | relative_url}}"
    height="250"
    title="Résultat du tutoriel Git avec VS Code">
</iframe>

## Bilan

**Vous avez réalisé :**

Le pilotage de Git via l'interface graphique intégrée de l'éditeur VS Code.

**Vous savez maintenant :**

* cloner un projet via la barre de commande de l'éditeur ;
* lire les statuts des fichiers modifiés (`M`, etc.) ;
* utiliser le bouton `+` pour préparer une modification ;
* valider un commit localement ;
* utiliser le bouton de synchronisation pour pousser le code distant.

## Glossaire

* **GUI (Graphical User Interface)** : interface visuelle permettant d'utiliser un logiciel avec une souris.
* **Modifications intermédiaires** : traduction française de "Staging Area" dans VS Code.
* **Cloner** : récupérer la copie locale d'un dépôt distant.
* **Synchroniser** : action de mettre à jour le dépôt distant et le dépôt local simultanément.
