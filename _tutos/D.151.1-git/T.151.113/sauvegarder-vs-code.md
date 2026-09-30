---
title: "Sauvegarder son code en un clic avec VS Code"
layout: tuto
slug: "sauvegarder-vs-code"
permalink: /tutos/:slug/
tuto_id: "T.151.113"
type: "classique"
version: "normal"
ua: "UA.151.11"
nav_order: 3
simplified: true
---

## 1. Objectif

Utiliser l'interface de VS Code pour réaliser le cycle de sauvegarde complet : **Cloner, Préparer (+), Valider (Commit) et Synchroniser (Push)**.

## 2. Prérequis

* Git installé et configuré (nom, email).
* VS Code installé.
* Un dépôt GitHub existant.

## Partie 1 — Théorie

### 1.1. Le cycle de travail dans VS Code

VS Code intègre un onglet **Contrôle de code source** qui permet d'utiliser Git via une interface graphique, sans taper de commandes complexes dans le terminal.



**Les actions clés :**
* **Créer (0)** : Initier un nouveau dépôt vide directement sur le site GitHub.
* **Cloner** : Télécharger le projet depuis GitHub vers l'ordinateur.
* **Préparer (+)** : Indiquer à Git quels fichiers modifiés doivent être sauvegardés.
* **Valider (Commit)** : Enregistrer ces modifications dans l'historique local avec un court message descriptif.
* **Synchroniser (Push)** : Envoyer l'historique local vers GitHub pour le sauvegarder en ligne.

### 1.2. Explication en vidéo

Pour mieux visualiser ce cycle de travail dans l'interface de VS Code, voici une explication pas-à-pas :

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" src="https://www.youtube.com/embed/1gDkpZ0AjlQ" title="Sauvegarder son code en un clic avec VS Code" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Partie 2 — Pratique

### Étape 0 — Créer le dépôt sur GitHub

1. Connectez-vous sur [GitHub](https://github.com) et créez un nouveau dépôt (bouton **New**).
2. Copiez l'URL de ce nouveau dépôt.

### Étape 1 — Cloner et ouvrir le projet

1. Dans VS Code, ouvrez l'onglet **Contrôle de code source** (icône de branche dans la barre latérale gauche).
2. Cliquez sur **Cloner le dépôt**.
3. Collez l'URL du dépôt copié à l'étape précédente et choisissez un dossier sur votre ordinateur.
4. Une fois le clonage terminé, cliquez sur **Ouvrir**.

### Étape 2 — Modifier et préparer

1. Ouvrez un fichier (ex: `index.html`), ajoutez du texte et sauvegardez (`Ctrl+S` / `Cmd+S`).
2. Retournez dans l'onglet **Contrôle de code source**. Votre fichier modifié apparaît dans la liste.
3. Survolez le fichier et cliquez sur le bouton **+ (Préparer la modification)**.

### Étape 3 — Valider et synchroniser

1. Dans le champ de texte situé au-dessus de la liste des fichiers, saisissez un message clair (ex: `Ajout du titre principal`).
2. Cliquez sur le bouton bleu **Valider (Commit)**.
3. Cliquez enfin sur le bouton **Synchroniser les modifications** (ou l'icône de nuage en bas à gauche) pour envoyer votre travail sur GitHub.

### Résultat attendu

Bien que vous ayez utilisé l'interface de VS Code, voici ce que Git a discrètement exécuté en arrière-plan pour vous :

<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/git/T.151.113.html' | relative_url}}"
    height="330"
    title="Résultat des actions VS Code dans Git">
</iframe>

### Critère de réussite

Vos modifications sont visibles directement sur la page de votre dépôt sur le site GitHub.

## Bilan

**Vous savez maintenant :**
* Cloner un dépôt directement depuis VS Code.
* Préparer (`+`) et valider (`Commit`) vos modifications avec un message.
* Envoyer le tout sur GitHub via le bouton **Synchroniser**.

## Glossaire

* **Contrôle de code source** : L'onglet de VS Code dédié à Git.
* **Cloner** : Copier un dépôt distant sur son ordinateur.
* **Préparer (Stage)** : Sélectionner les modifications à inclure dans le prochain commit.
* **Synchroniser (Sync)** : Action de VS Code qui envoie vos commits locaux vers le dépôt distant GitHub.
