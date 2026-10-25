---
title: "Les 3 zones de Git expliquées simplement"
layout: tuto
slug: "3-zones-git"
permalink: /tutos/3-zones-git/
tuto_id: "T.151.12.1"
type: "classique"
version: "normal"
ua: "UA.151.12"
domain: "D.151.1"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Contexte & Objectif

- **Objectif :** Comprendre le parcours d'un fichier dans Git, du moment où vous le modifiez dans votre éditeur jusqu'à son enregistrement durable dans l'historique.
- **Prérequis :** Avoir compris la différence entre Git et GitHub (T.151.11.2).

---

## 2. Théorie Pas-à-Pas

### 2.1. Le parcours d'une modification

Contrairement à un simple enregistrement de fichier (*Ctrl + S*), une sauvegarde dans Git traverse obligatoirement **trois zones distinctes** :

```mermaid
flowchart LR
    A["1. Dossier de Travail\nJe modifie mon fichier"] -->|"Préparation (git add)"| B["2. Zone de Préparation\nStaging Area"]
    B -->|"Validation (git commit)"| C["3. Dépôt Git\nHistorique officiel"]
```

Un fichier ne passe **jamais** directement du dossier de travail à l'historique : il doit toujours être "préparé" (sélectionné) d'abord.

### 2.2. Le rôle des 3 zones

1. **Le Dossier de travail (Working Directory) :** C'est le dossier de votre projet sur votre ordinateur. C'est ici que vous écrivez votre code, créez, modifiez ou supprimez des fichiers. Git détecte ces changements, mais ils ne sont pas encore sauvegardés dans l'historique.
2. **La Zone de préparation (Staging Area) :** C'est la "salle d'attente". Parmi toutes les modifications que vous avez faites, vous choisissez précisément celles qui sont prêtes à être regroupées dans une sauvegarde cohérente.
3. **Le Dépôt Git (Repository) :** C'est l'historique officiel de votre projet. Quand vous transformez le contenu de la zone de préparation en un **commit**, cet instantané est gravé dans l'historique avec une date, un auteur et un message descriptif.

---

## 3. Pratique & Réalisation Guidée

Pour fixer ce modèle mental, visualisez le déplacement d'un fichier à travers ce scénario :

1. Vous créez `article.html` ➔ Le fichier se trouve dans le **Dossier de travail** (état *Non suivi*).
2. Vous préparez le fichier avec `git add article.html` ➔ Le fichier entre dans la **Zone de préparation** (état *Prêt à être validé*).
3. Vous validez avec `git commit -m "feat: ajout de la page article"` ➔ Le fichier est gravé dans le **Dépôt Git** (état *Sauvegardé*).

---

## 4. Critères de Réussite

- Vous savez nommer les 3 zones de Git dans leur ordre logique d'exécution.
- Vous comprenez pourquoi la zone de préparation (Staging Area) permet d'isoler une modification avant de la valider.
- Vous retenez qu'aucun fichier n'entre dans l'historique sans avoir été préalablement préparé.

---

## 5. Glossaire

- **Dossier de travail (Working Directory) :** Fichiers actuels du projet modifiables sur votre machine.
- **Zone de préparation (Staging Area) :** Salle d'attente où l'on place les fichiers sélectionnés pour le prochain commit.
- **Dépôt Git (Repository) :** Base de données locale contenant l'historique de tous les commits validés.
- **Commit :** Enregistrement définitif d'un état du projet dans l'historique Git.
