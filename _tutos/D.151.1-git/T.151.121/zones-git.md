---
title: "Les 3 zones de Git expliquées simplement"
layout: tuto
slug: "3-zones-git"
permalink: /tutos/:slug/
tuto_id: "T.151.121"
type: "classique"
version: "normal"
ua: "UA.151.12"
nav_order: 1
simplified: true
en_construction: false
---

## 1. Objectif

Comprendre le parcours d'un fichier dans Git, du moment où vous le modifiez jusqu'à son enregistrement final.

À la fin de ce tutoriel, vous saurez identifier les rôles du **Dossier de travail**, de la **Zone de préparation** et du **Dépôt Git**.

## 2. Prérequis

- Avoir compris la différence entre Git et GitHub.
- Connaître la notion de fichier et de projet.

*(Note : Ce tutoriel est purement théorique pour poser les bases de la logique Git avant la pratique).*

## Partie 1 — Théorie

### 1.1. Le parcours d'une modification

Contrairement à un simple "Ctrl+S" (Enregistrer), une modification dans Git traverse obligatoirement **trois zones distinctes**.

```mermaid
flowchart LR
    A["Dossier de Travail\nJe modifie mon fichier"] -->|"Je sélectionne\n(Préparation)"| B["Zone de Préparation\nStaging Area"]
    B -->|"J'enregistre\n(Commit)"| C["Dépôt Git\nHistorique"]
```

Un fichier ne passe **jamais** directement du dossier de travail à l'historique : il doit toujours être "préparé" (sélectionné) d'abord.

### 1.2. Le rôle des 3 zones

<figure align="center">
    <img src="{{ '/images-tutos/D.151.1-git/T.151.121/git-zones.svg' | relative_url }}" alt="Schéma des 3 zones de Git" style="max-width: 600px; width: 100%;">
    <figcaption>Les 3 zones de Git</figcaption>
</figure>

1. **Le Dossier de travail (Working Directory)** : C'est le dossier de votre projet sur votre ordinateur. C'est ici que vous tapez du code, créez, modifiez ou supprimez des fichiers. Git détecte ces changements, mais ils ne sont pas encore sauvegardés dans l'historique.
2. **La Zone de préparation (Staging Area)** : C'est la "salle d'attente". Parmi toutes les modifications que vous avez faites dans votre dossier, vous choisissez celles qui sont prêtes à être regroupées. Vous pouvez très bien préparer un seul fichier modifié et en laisser un autre de côté pour plus tard.
3. **Le Dépôt Git (Repository)** : C'est l'historique officiel de votre projet. Quand vous transformez le contenu de la zone de préparation en un **commit**, cet instantané est gravé dans l'historique avec une date, un auteur, et un message descriptif.

### Résultat attendu

Voici à quoi ressemblent ces zones dans le terminal lorsque vous observez l'état de votre projet avec Git. Il sépare clairement les fichiers qui sont dans la zone de préparation (prêts à être validés) de ceux qui sont restés dans le dossier de travail.

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/git/T.151.121.html' | relative_url}}"
    height="300"
    title="Résultat de git status illustrant les 3 zones">
</iframe>

## Bilan

**Vous avez appris :**
- À distinguer le Dossier de travail (les fichiers sur lesquels vous travaillez), la Zone de préparation (votre sélection) et le Dépôt Git (l'historique).
- Qu'une modification ne va jamais directement dans l'historique sans avoir été préparée d'abord.

## Glossaire

- **Dossier de travail** : Fichiers actuels du projet modifiables sur votre machine.
- **Zone de préparation (Staging Area)** : Zone où l'on place les fichiers sélectionnés pour le prochain commit.
- **Dépôt Git** : L'historique contenant l'ensemble des commits du projet.
- **Commit** : Enregistrement définitif d'un état du projet dans l'historique Git.
