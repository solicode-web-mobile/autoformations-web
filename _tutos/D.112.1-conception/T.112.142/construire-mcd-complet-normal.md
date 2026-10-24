---
title: "Construire le MCD complet"
layout: tuto
slug: "construire-mcd-complet"
permalink: /tutos/:slug/normal
tuto_id: "T.112.142"
type: "classique"
version: "normal"
ua: "UA.112.14"
nav_order: 9
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## Objectif

Assembler l'ensemble des entités, relations et cardinalités validées précédemment pour construire le **Modèle Conceptuel de Données (MCD) complet du Blog**.

## Prérequis

- Savoir construire les entités à partir des données (T.112.133).
- Savoir déterminer les relations et cardinalités (T.112.141).

## Données de départ

Vos résultats validés aux étapes précédentes :
- **Entités :** `ARTICLE`, `AUTEUR`, `VILLE`, `CATEGORIE`.
- **Relations :**
  - `VILLE (0,N) ─── habite ─── (1,1) AUTEUR`
  - `AUTEUR (0,N) ─── rédige ─── (1,1) ARTICLE`
  - `CATEGORIE (0,N) ─── regroupe ─── (1,1) ARTICLE`

---

## Partie 1 — Théorie

### 1.1. Qu'est-ce qu'un MCD ?

Le **Modèle Conceptuel de Données (MCD)** est la vue d'ensemble de votre base de données. Il rassemble :
1. Les **entités** (leurs attributs et leur identifiant souligné).
2. Les **relations** (les verbes d'action dans des ovales).
3. Les **cardinalités** (les couples `min,max` posés sur les traits).

> **Important :** Le MCD décrit la structure métier des données. Il ne contient pas encore de notions techniques de base de données (pas de clés étrangères ni de types SQL).

### 1.2. La règle d'assemblage

L'assemblage d'un MCD obéit à une règle simple :

$$\text{Entités existantes} + \text{Relations validées} + \text{Cardinalités fixées} = \text{MCD complet}$$

* **Règle d'or :** À cette étape, n'inventez aucune nouvelle entité, n'ajoutez aucune nouvelle relation et ne modifiez aucune cardinalité.

### 1.3. Contrôler le modèle assemblé

Avant de valider votre schéma, effectuez deux vérifications :
1. **Lecture dans les deux sens :** Chaque relation doit pouvoir se lire clairement dans les deux sens (*« Un auteur rédige 0 ou plusieurs articles »* et *« Un article est rédigé par un seul auteur »*).
2. **Exclusion des données calculées :** Vérifiez qu'aucune donnée calculée (comme `duree_lecture`) n'a été réintroduite par erreur.

---

## Partie 2 — Pratique

### 2.1. Les briques à assembler

Reprenez vos 4 entités avec leurs attributs respectifs :
- **VILLE** (`id_ville`, `nom_ville`)
- **AUTEUR** (`id_auteur`, `nom_auteur`, `prenom_auteur`, `email_auteur`)
- **ARTICLE** (`id_article`, `titre_article`, `contenu_article`, `date_publication`, `statut_article`, `image_article`)
- **CATEGORIE** (`id_categorie`, `nom_categorie`)

### 2.2. Exemple d'assemblage visuel

Organisez vos entités verticalement en reliant chaque bloc à sa relation :

<svg viewBox="0 0 320 250" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Lignes verticales VILLE - habite - AUTEUR -->
  <line x1="160" y1="80" x2="160" y2="105" stroke="#334155" stroke-width="2"/>
  <text x="175" y="98" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">0,N</text>

  <line x1="160" y1="145" x2="160" y2="170" stroke="#334155" stroke-width="2"/>
  <text x="175" y="162" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">1,1</text>

  <!-- Entité VILLE -->
  <g transform="translate(80, 10)">
    <rect width="160" height="70" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>
    <path d="M 0 6 C 0 2 2 0 6 0 L 154 0 C 158 0 160 2 160 6 L 160 26 L 0 26 Z" fill="#e2e8f0"/>
    <line x1="0" y1="26" x2="160" y2="26" stroke="#334155" stroke-width="1.5"/>
    <text x="80" y="18" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">VILLE</text>
    <text x="14" y="44" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-decoration="underline" fill="#1e293b">id_ville</text>
    <text x="14" y="62" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">nom_ville</text>
  </g>

  <!-- Relation habite -->
  <g transform="translate(160, 125)">
    <ellipse cx="0" cy="0" rx="55" ry="20" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <text x="0" y="5" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#1e40af" text-anchor="middle">habite</text>
  </g>

  <!-- Entité AUTEUR -->
  <g transform="translate(80, 170)">
    <rect width="160" height="70" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>
    <path d="M 0 6 C 0 2 2 0 6 0 L 154 0 C 158 0 160 2 160 6 L 160 26 L 0 26 Z" fill="#e2e8f0"/>
    <line x1="0" y1="26" x2="160" y2="26" stroke="#334155" stroke-width="1.5"/>
    <text x="80" y="18" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">AUTEUR</text>
    <text x="14" y="44" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-decoration="underline" fill="#1e293b">id_auteur</text>
    <text x="14" y="62" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">nom_auteur</text>
  </g>
</svg>

### 2.3. Travail à faire

Construisez le **MCD complet du Blog** en reliant l'ensemble des 4 entités (`VILLE`, `AUTEUR`, `ARTICLE`, `CATEGORIE`) avec leurs 3 relations (`habite`, `rédige`, `regroupe`) et leurs cardinalités.

### Livrable attendu

Créez un fichier Markdown nommé `mcd-blog.md` présentant votre MCD complet (sous forme de schéma textuel ou visuel), et commitez-le dans votre dépôt GitHub.

### Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.142/mcd-blog.html' | relative_url }}"
    height="650"
    title="Résultat attendu — MCD complet du Blog">
</iframe>

### Critères de réussite

- Les 4 entités sont présentes avec leurs attributs et leur identifiant souligné.
- Les 3 relations (`habite`, `rédige`, `regroupe`) relient correctement les entités.
- Les cardinalités correspondent exactement aux résultats validés au tutoriel précédent.
- La donnée calculée `duree_lecture` est bien absente du modèle.
- Le fichier `mcd-blog.md` est commité sur GitHub.

---

## Bilan

**Vous savez maintenant :**
- Assembler un Modèle Conceptuel de Données complet à partir d'entités et de relations isolées.
- Vérifier la cohérence globale et la double lecture d'un schéma Merise.

Dans le prochain tutoriel, vous transformerez ce MCD abstrait en **Modèle Logique de Données (MLD)** avec des tables relationnelles et des clés étrangères.

## Glossaire

- **MCD** : Schéma global qui rassemble les entités, les relations et les cardinalités selon la norme Merise.
- **Cohérence** : Contrôle assurant que le schéma final respecte toutes les règles de gestion sans contradiction.
