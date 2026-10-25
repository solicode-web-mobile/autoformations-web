---
title: "Déterminer les relations et les cardinalités"
layout: tuto
slug: "determiner-relations-cardinalites"
permalink: /tutos/:slug/normal
tuto_id: "T.112.141"
type: "classique"
version: "normal"
ua: "UA.112.14"
nav_order: 8
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## Objectif

Relier les entités du Blog entre elles à l'aide de **relations** et de **cardinalités** pour modéliser la structure de la base de données selon la norme Merise.

## Prérequis

- Savoir construire les entités à partir des données (T.112.133).

## Données de départ

Vos 4 entités créées précédemment : `ARTICLE`, `AUTEUR`, `VILLE`, `CATEGORIE`.

👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)

Sur la **Page Détail d'un article** et la **Page d'accueil**, observez comment ces données sont liées : un article est rédigé par un auteur et classé dans une catégorie.

---

## Partie 1 — Théorie

### 1.1. La règle de gestion et la relation

Une **règle de gestion** est une phrase simple qui décrit le lien métier entre deux entités. Elle utilise toujours un **verbe d'action**.

Dans un Modèle Conceptuel de Données (MCD) :
* Une **entité** est un rectangle (nom en haut, attributs en dessous, identifiant souligné).
* Une **relation** est un ovale portant le verbe d'action.
* Des **traits** relient chaque entité à la relation.
* Les **cardinalités** `(min, max)` sont notées sur le trait, du côté de l'entité.

### 1.2. Calculer les cardinalités (Méthode des 2 questions)

Une **cardinalité** indique combien de fois une entité participe à une relation. Elle s'écrit toujours : `(minimum, maximum)`.

Pour chaque côté, posez deux questions :

| Question | Réponse possible | Valeur retenue |
| :--- | :--- | :---: |
| **1. Est-ce obligatoire ?** (Minimum) | Non → `0`<br>Oui → `1` | `0` ou `1` |
| **2. Peut-il y en avoir plusieurs ?** (Maximum) | Une seule → `1`<br>Plusieurs → `N` | `1` ou `N` |

Les 4 couples possibles sont : `(0,1)`, `(1,1)`, `(0,N)`, `(1,N)`.

### 1.3. Les deux types de relations (1–N et N–N)

* **La relation 1–N (un à plusieurs) :**  
  Une occurrence d'un côté est liée à plusieurs occurrences en face.  
  *Exemple :* Un auteur rédige un ou plusieurs articles `(1,N)`. Un article est rédigé par un seul auteur `(1,1)`.

<svg viewBox="0 0 600 110" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Ligne AUTEUR - rédige -->
  <line x1="160" y1="55" x2="235" y2="55" stroke="#334155" stroke-width="2"/>
  <text x="175" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">1,N</text>

  <!-- Ligne rédige - ARTICLE -->
  <line x1="365" y1="55" x2="440" y2="55" stroke="#334155" stroke-width="2"/>
  <text x="405" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">1,1</text>

  <!-- Entité AUTEUR -->
  <g transform="translate(20, 15)">
    <rect width="140" height="80" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>
    <path d="M 0 6 C 0 2 2 0 6 0 L 134 0 C 138 0 140 2 140 6 L 140 28 L 0 28 Z" fill="#e2e8f0"/>
    <line x1="0" y1="28" x2="140" y2="28" stroke="#334155" stroke-width="1.5"/>
    <text x="70" y="19" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">AUTEUR</text>
    <text x="14" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" text-decoration="underline" fill="#1e293b">id_auteur</text>
    <text x="14" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748b">nom_auteur</text>
  </g>

  <!-- Relation rédige -->
  <g transform="translate(300, 55)">
    <ellipse cx="0" cy="0" rx="65" ry="26" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <text x="0" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#1e40af" text-anchor="middle">rédige</text>
  </g>

  <!-- Entité ARTICLE -->
  <g transform="translate(440, 15)">
    <rect width="140" height="80" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>
    <path d="M 0 6 C 0 2 2 0 6 0 L 134 0 C 138 0 140 2 140 6 L 140 28 L 0 28 Z" fill="#e2e8f0"/>
    <line x1="0" y1="28" x2="140" y2="28" stroke="#334155" stroke-width="1.5"/>
    <text x="70" y="19" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">ARTICLE</text>
    <text x="14" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" text-decoration="underline" fill="#1e293b">id_article</text>
    <text x="14" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748b">titre_article</text>
  </g>
</svg>

* **La relation N–N (plusieurs à plusieurs) :**  
  Les occurrences peuvent être multiples des deux côtés.  
  *Exemple :* Un article possède zéro ou plusieurs tags `(0,N)`. Un tag est associé à zéro ou plusieurs articles `(0,N)`.

<svg viewBox="0 0 600 110" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Ligne ARTICLE - possède -->
  <line x1="160" y1="55" x2="235" y2="55" stroke="#334155" stroke-width="2"/>
  <text x="175" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">0,N</text>

  <!-- Ligne possède - TAG -->
  <line x1="365" y1="55" x2="440" y2="55" stroke="#334155" stroke-width="2"/>
  <text x="405" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">0,N</text>

  <!-- Entité ARTICLE -->
  <g transform="translate(20, 15)">
    <rect width="140" height="80" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>
    <path d="M 0 6 C 0 2 2 0 6 0 L 134 0 C 138 0 140 2 140 6 L 140 28 L 0 28 Z" fill="#e2e8f0"/>
    <line x1="0" y1="28" x2="140" y2="28" stroke="#334155" stroke-width="1.5"/>
    <text x="70" y="19" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">ARTICLE</text>
    <text x="14" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" text-decoration="underline" fill="#1e293b">id_article</text>
    <text x="14" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748b">titre_article</text>
  </g>

  <!-- Relation possède -->
  <g transform="translate(300, 55)">
    <ellipse cx="0" cy="0" rx="65" ry="26" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <text x="0" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#1e40af" text-anchor="middle">possède</text>
  </g>

  <!-- Entité TAG -->
  <g transform="translate(440, 15)">
    <rect width="140" height="80" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>
    <path d="M 0 6 C 0 2 2 0 6 0 L 134 0 C 138 0 140 2 140 6 L 140 28 L 0 28 Z" fill="#e2e8f0"/>
    <line x1="0" y1="28" x2="140" y2="28" stroke="#334155" stroke-width="1.5"/>
    <text x="70" y="19" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">TAG</text>
    <text x="14" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" text-decoration="underline" fill="#1e293b">id_tag</text>
    <text x="14" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748b">nom_tag</text>
  </g>
</svg>

---

## Partie 2 — Pratique

### 2.1. Exemple guidé : VILLE et AUTEUR

Appliquez les deux questions pour relier `VILLE` et `AUTEUR` avec le verbe **habite** :

1. **Sens VILLE → AUTEUR :**
   - Une ville accueille-t-elle obligatoirement des auteurs ? Oui → `min = 1`.
   - Peut-elle accueillir plusieurs auteurs ? Oui → `max = N`.
   - **Cardinalité côté VILLE = `(1,N)`**.
2. **Sens AUTEUR → VILLE :**
   - Un auteur a-t-il obligatoirement une ville ? Oui → `min = 1`.
   - Peut-il habiter dans plusieurs villes ? Non → `max = 1`.
   - **Cardinalité côté AUTEUR = `(1,1)`**.

### 2.2. Travail à faire

Déterminez les règles de gestion et les cardinalités des 3 relations restantes de l'application Blog.

Complétez le tableau suivant :

| Entité A | Cardinalité A | Verbe métier | Cardinalité B | Entité B | Règle de gestion |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **VILLE** | `1,N` | habite | `1,1` | **AUTEUR** | Une ville accueille un ou plusieurs auteurs. Un auteur habite dans une seule ville. |
| **AUTEUR** | *(à trouver)* | rédige | *(à trouver)* | **ARTICLE** | *(à formuler)* |
| **CATEGORIE** | *(à trouver)* | regroupe | *(à trouver)* | **ARTICLE** | *(à formuler)* |
| **ARTICLE** | *(à trouver)* | possède | *(à trouver)* | **TAG** | *(à formuler)* |

### Livrable attendu

Créez un fichier Markdown nommé `relations-cardinalites.md` contenant votre tableau complété, et commitez-le dans votre dépôt GitHub.

### Résultat attendu

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{ '/code/conception/T.112.141/' | relative_url }}"
    height="350"
    title="Résultat attendu — Relations et cardinalités">
</iframe>

### Critères de réussite

- Chaque relation utilise un verbe d'action clair.
- Les cardinalités `(min, max)` répondent précisément aux deux questions méthodologiques.
- Le fichier `relations-cardinalites.md` est rédigé et commité sur GitHub.

---

## Bilan

**Vous savez maintenant :**
- Formuler une règle de gestion avec un verbe d'action.
- Déterminer les cardinalités minimum et maximum d'une relation.
- Distinguer une relation 1–N d'une relation N–N.

Dans le prochain tutoriel, vous assemblerez vos entités et vos relations pour créer votre premier **Modèle Conceptuel de Données (MCD)** complet.

## Glossaire

- **Règle de gestion** : Phrase décrivant un fonctionnement métier entre deux entités.
- **Relation** : Lien logique entre deux entités, représenté par un verbe d'action dans un ovale Merise.
- **Cardinalité** : Couple `(minimum, maximum)` indiquant le nombre de participations d'une entité à une relation.
