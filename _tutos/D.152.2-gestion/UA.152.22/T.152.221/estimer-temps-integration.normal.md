---
title: "Estimer le temps nécessaire pour une tâche d'intégration"
layout: tuto
slug: "estimer-temps-integration"
permalink: /tutos/:slug/
tuto_id: "T.152.22.1"
type: "classique"
version: "normal"
ua: "UA.152.22"
domain: "D.152.2"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Contexte & Objectif

- **Objectif :** Découper un travail d'intégration Web en composants clés, estimer une durée réaliste en heures et construire un tableau prévisionnel d'avancement.
- **Prérequis :** Savoir identifier les livrables d'une page Web et manipuler une fiche de tâche (`T.152.21.2`).

---

## 2. Théorie Pas-à-Pas

### 2.1. Pourquoi estimer son temps en heures de travail ?

Dans un projet professionnel, le temps est une ressource limitée :

- **Éviter le retard :** Savoir dès le matin si la journée suffira pour terminer la page demandée.
- **Rythmer sa journée :** Se fixer des repères horaires précis pour chaque étape technique.
- **Alerter à temps :** Si une tâche estimée à 1 heure prend déjà 2 heures, le développeur signale immédiatement le décalage.

### 2.2. Les trois blocs d'une tâche d'intégration

Pour estimer une page Web (HTML/CSS), on décompose systématiquement l'effort en 3 étapes :

```mermaid
flowchart LR
    A["1. Structure HTML5<br/>(Balisage sémantique)"] --> B["2. Style CSS<br/>(Mise en page, responsive)"]
    B --> C["3. Recette & Tests<br/>(Navigateurs, validation)"]
```

1. **Structure HTML :** Baliser les zones de contenu (en-tête, sections, cartes, pied de page).
2. **Style CSS :** Appliquer la grille, les couleurs, la typographie et l'adaptation mobile.
3. **Recette et vérifications :** Tester l'affichage sur plusieurs tailles d'écran et corriger les défauts visuels.

### 2.3. La règle des blocs de temps et la marge de sécurité

Pour un apprenant développeur N1 :

- **Découpage idéal :** Chaque sous-tâche doit durer entre **30 minutes et 2 heures** maximum.
- **Marge de sécurité (+20%) :** Prévoyez toujours un temps de réserve pour gérer les erreurs imprévues (un lien CSS mal orthographié, une balise fermante oubliée).

| Bloc technique | Estimation brute | Marge de sécurité | Durée retenue |
| :--- | :---: | :---: | :---: |
| Structure HTML5 | 1 h 00 | + 15 min | **1 h 15** |
| Styles CSS Flexbox/Grid | 2 h 00 | + 30 min | **2 h 30** |
| Tests & Vérifications | 45 min | + 15 min | **1 h 00** |

---

## 3. Pratique & Réalisation Guidée

Dans ce sprint S3, vous devez intégrer la **page d'accueil statique du Blog** (`index.html` et `css/style.css`). Vous disposez d'une séance de **5 heures**. Vous allez établir votre planning prévisionnel d'intégration.

### 3.1. Identifier les blocs de travail de la page d'accueil

La consigne du sprint S3 demande :
1. Un en-tête (`<header>`) avec le nom du blog et un menu de navigation.
2. Une grille de 3 cartes d'articles récents en Flexbox (`<main>`).
3. Un pied de page (`<footer>`) avec mentions de copyright.
4. Les styles CSS pour harmoniser l'ensemble.
5. La vérification finale sur écran d'ordinateur et mobile.

### 3.2. Remplir le tableau prévisionnel d'heures

Calculez la durée prévisionnelle de chaque étape pour respecter le temps total alloué (5 heures) :

| N° | Action d'intégration | Fichier concerné | Heure de début | Heure de fin | Durée estimée |
| :-: | :--- | :--- | :---: | :---: | :---: |
| 1 | Squelette HTML5 et balisage du header | `index.html` | 09:00 | 10:00 | 1 h 00 |
| 2 | Intégration de la grille d'articles et footer | `index.html` | 10:00 | 11:15 | 1 h 15 |
| 3 | Styles de base, typographie et couleurs | `css/style.css` | 11:15 | 12:15 | 1 h 00 |
| 4 | Disposition Flexbox des cartes d'articles | `css/style.css` | 13:15 | 14:30 | 1 h 15 |
| 5 | Tests d'affichage et validation w3c | Navigateur | 14:30 | 15:00 | 0 h 30 |

Total estimé : **5 h 00**. Le planning est équilibré et couvre l'intégralité du sprint.

---

## 4. Livrable & Critères de Réussite

### Emplacement dans votre dépôt d'autoformation
Dans votre dépôt GitHub d'autoformation annuel, déposez votre document dans :
```text
gestion/estimer-temps/tableau-heures-integration/planning-heures.md
```

### Contenu attendu du livrable
Le fichier Markdown `planning-heures.md` contenant :
1. Le temps total alloué au sprint.
2. Le tableau prévisionnel complet avec les colonnes *Action*, *Fichier*, *Heure de début*, *Heure de fin* et *Durée estimée*.
3. La somme totale des durées vérifiée et égale au temps alloué.

### Critères de réussite du livrable
- [ ] Le fichier est commité dans le dossier `gestion/estimer-temps/tableau-heures-integration/`.
- [ ] Le découpage sépare distinctement la structure HTML, le style CSS et la phase de test.
- [ ] Aucune sous-tâche ne dépasse 2 heures.
- [ ] La somme totale correspond à la durée de la séance sans dépassement.
- [ ] Le document ne contient aucune capture d'écran.

---

## 5. Glossaire

- **Estimation :** Évaluation anticipée du temps nécessaire pour accomplir un travail technique.
- **Durée prévisionnelle :** Nombre d'heures ou de minutes planifié avant le début du développement.
- **Échéance :** Date ou heure limite fixée pour la livraison d'un résultat.
- **Recette (ou Test) :** Étape finale de contrôle qui vérifie la conformité de la page par rapport aux critères demandés.
