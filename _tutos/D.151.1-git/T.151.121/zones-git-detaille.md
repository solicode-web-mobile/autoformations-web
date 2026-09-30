---
title: "Les 3 zones de Git expliquées simplement"
layout: tuto
slug: "3-zones-git"
permalink: /tutos/:slug/detaille
tuto_id: "T.151.121"
type: "classique"
version: "detaille"
ua: "UA.151.12"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Comprendre le parcours d'un fichier dans Git : **Dossier de travail → Zone de préparation → Dépôt Git**, et l'utilité d'avoir une zone intermédiaire.

## 2. Prérequis

Vous devez :

* avoir compris la différence entre Git et GitHub dans le Tuto 2 ;
* connaître la notion de fichier et de projet.

## Partie 1 — Théorie : Le parcours d'un fichier

### 1.1. Le dossier de travail (Working Directory)

Le **dossier de travail** est simplement le dossier sur votre ordinateur.

C'est là que les fichiers existent réellement pour vous.

Vous y écrivez votre code, vous testez, vous supprimez.

Dès que vous modifiez un fichier, Git le remarque.

Cependant, il ne sauvegarde rien automatiquement.

### 1.2. La zone de préparation (Staging Area)

C'est la particularité la plus importante de Git.

Au lieu de sauvegarder tout le dossier d'un coup, Git vous force à utiliser une zone intermédiaire.

Cette zone est la **zone de préparation** (ou Staging Area).

Son but est de vous permettre de sélectionner "à la carte" ce qui va constituer votre sauvegarde.

Par exemple, si vous avez travaillé sur la page d'accueil et sur la page de contact en même temps, vous pouvez préparer uniquement la page d'accueil pour faire une première sauvegarde précise.

Puis, vous préparerez la page de contact pour une deuxième sauvegarde.

### 1.3. Le dépôt Git (Le Commit)

Le **dépôt Git** est le grand livre comptable de votre projet.

Une fois votre sélection prête dans la zone de préparation, vous la validez.

Cette validation s'appelle un **commit**.

Le commit agit comme une photographie indélébile de votre sélection à un instant précis.

Chaque commit reçoit :
* une étiquette temporelle (date et heure) ;
* le nom de l'auteur ;
* un message obligatoire pour expliquer les changements ;
* un identifiant unique complexe.

### 1.4. À retenir

* Git ne passe jamais directement de votre brouillon à la sauvegarde finale.
* La zone de préparation vous oblige à structurer vos sauvegardes logiquement.
* Le commit est la photographie finale stockée dans l'historique du dépôt.

### Résultat attendu

Le schéma suivant résume les trois zones de Git et le parcours d'une modification :

<iframe
    class="auto-wrapper"
    src="{{'/code/git/tuto-4-git.html' | relative_url}}"
    height="250"
    title="Les 3 zones de Git">
</iframe>

## Bilan

**Vous avez réalisé :**

La compréhension des trois principales zones utilisées lors de l'enregistrement d'une modification avec Git.

**Vous savez maintenant :**

* identifier le dossier de travail ;
* expliquer l'intérêt de la zone de préparation pour organiser son travail ;
* comprendre le rôle du dépôt Git et du commit.

## Glossaire

* **Dossier de travail** : dossier du projet sur l'ordinateur.
* **Zone de préparation** : zone intermédiaire ("Staging") pour choisir précisément les modifications du futur commit.
* **Dépôt Git** : coffre-fort contenant tout l'historique des commits.
* **Commit** : instantané des fichiers placés dans la zone de préparation.
