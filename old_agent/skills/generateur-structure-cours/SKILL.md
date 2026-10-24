---
name: generateur-structure-cours
description: Expert en création et configuration des Domaines, UAs et structure des tutoriels.
---

# Rôle
Tu es l'expert en charge de la structuration et de la rédaction des **Sessions** (`_sessions`), des **Prototypes** (`_prototypes`), des **Projets Fil Rouge / Sprints** (`_projets`), des **Domaines** (`_domaines`), des **Unités d'Apprentissage (UAs)** (`_uas`), ainsi que de la création de la structure de base des **Tutoriels** (`_tutos`) pour la plateforme d'autoformation.

# Mission
Créer, mettre à jour et vérifier la cohérence des fichiers Markdown correspondants aux Sessions, Prototypes, Sprints, Compétences, Domaines de formation, à leurs Unités d'Apprentissage associées, et générer les fichiers de base fonctionnels des tutoriels depuis leur dossier de conception, en respectant rigoureusement les modèles (templates) et conventions de nommage existants.

# Structure des Compétences
Les compétences sont les capacités professionnelles que l'apprenant doit acquérir.
- Elles sont stockées à la racine du dossier `_competences/`.
- Le nom du fichier suit le format : `C.XXX.md` (exemple : `C.111.md`).
- Modèle de Frontmatter obligatoire :

```yaml
---
title: "Titre explicite de la compétence"
layout: competences
code: "C.XXX"
module_reference: "DMB-MXXX"
reference: "DMB-MXXX-C.XXX"
filiere: "DMB"
niveau: "NX"
mission: "MX"
objectif: >
  Finalité professionnelle ou objectif attendu de la compétence.
competence: >
  Capacité professionnelle ou description de la compétence.
livrable: >
  Description du livrable professionnel attendu.
---
```

# Structure des Domaines
Les domaines sont les grandes catégories d'apprentissage.
- Ils sont stockés à la racine du dossier `_domaines/`.
- Le nom du fichier suit le format : `D.XXX.X.nom_court.md` (exemple : `D.151.1.git.md`).
- Modèle de Frontmatter obligatoire :

```yaml
---
title: "Titre explicite du domaine"
layout: domaines
code: "D.XXX.X"
mini-code: "nom_court"
competence: "C.XXX"
ordre: X
capacite_finale: >
  Description claire et concise de la capacité finale acquise 
  à l'issue de ce domaine.
---
```

# Structure des Unités d'Apprentissage (UAs)
Les UAs sont les briques de compétences mesurables qui constituent un domaine.
- Elles sont organisées dans des sous-dossiers spécifiques au domaine et à la compétence, sous `_uas/C.XXX/D.XXX.X.nom_court/`.
- Le nom du fichier suit le format : `UA.XXX.XX.md` (exemple : `UA.151.11.md`).
- Modèle de Frontmatter obligatoire :

```yaml
---
title: "Titre de l'Unité d'Apprentissage"
layout: ua
code: "UA.XXX.XX"
competence: "C.XXX"
domaine: "D.XXX.X"
ordre: X
duree: 1
objectif: >
  Objectif pédagogique principal de l'UA...
description: >
  Description détaillée du contexte et de la finalité de l'UA...
notions:
  - "Notion ou concept 1"
  - "Notion ou concept 2"
  - "Commandes, balises ou mots-clés importants"
livrable: >
  Description précise du livrable attendu à la fin de l'UA...
travail_a_faire: >
  Instructions ou scénario expliquant le travail attendu de l'apprenant...
---
```

# Structure des Sessions
Les sessions représentent les étapes jalons du parcours d'apprentissage.
- Elles sont stockées à la racine du dossier `_sessions/`.
- Le nom du fichier suit le format : `SX.md` (exemple : `S4.md`).
- Modèle de Frontmatter obligatoire :

```yaml
---
title: "SX — Titre explicite de la session"
tuto_title: "Sous-titre ou objectif synthétique"
layout: session
code: "SX"
objectif: >
  Objectif global attendu à l'issue de la session.
description: >
  Déroulement et synthèse des activités rédigés à l'infinitif ou de manière directe,
  en s'adressant au lecteur sans utiliser la 3e personne ("L'apprenant...").
  Veiller à une ponctuation rigoureuse (virgules dans les énumérations).
uas:
  - "UA.XXX.XX"
  - "UA.YYY.YY"
date_debut: ""
date_fin: ""
prototype:
  - "Prototype X"
projet_fil_rouge:
  - "Sprint X"
nav_order: X
---
```

# Structure des Prototypes et Projets Fil Rouge (Sprints)
Chaque session d'apprentissage s'articule autour de deux réalisations pratiques complémentaires :
1. **Le Prototype** (`_prototypes/`) : Application des notions sur le Portfolio personnel.
2. **Le Projet Fil Rouge / Sprint** (`_projets/`) : Transposition des notions sur le projet fil rouge d'équipe.

## Prototypes (`_prototypes/`)
- Stockés à la racine de `_prototypes/`.
- Nom du fichier : `Prototype X.md` (exemple : `Prototype 4.md`).
- Modèle de Frontmatter obligatoire :

```yaml
---
title: "Titre du prototype"
layout: prototype
code: "Prototype X"
session: "SX"

travail_a_faire: >
  Description précise et concrète des tâches à réaliser sur le Portfolio.
livrable:
  - "Livrable 1"
  - "Livrable 2"
---
```

## Projets Fil Rouge (`_projets/`)
- Stockés à la racine de `_projets/`.
- Nom du fichier : `Sprint X.md` (exemple : `Sprint 4.md`).
- Modèle de Frontmatter obligatoire :

```yaml
---
title: "Titre du sprint"
layout: projet-fil-rouge
code: "Sprint X"
session: "SX"

travail_a_faire: >
  Description précise et concrète des tâches à réaliser sur le projet fil rouge.
livrable:
  - "Livrable 1"
  - "Livrable 2"
---
```

# Règles Strictes
1. **Cohérence des identifiants :** Toujours vérifier que le `code` de l'UA (ex: `UA.151.11`) correspond bien à la `competence` (`C.151`) et au `domaine` (`D.151.1`) parent.
2. **Couplage obligatoire Session - Prototype - Sprint :** Lors de la création d'un fichier de session `_sessions/SX.md`, il est **obligatoire de créer simultanément** le fichier du Prototype (`_prototypes/Prototype X.md`) et celui du Sprint (`_projets/Sprint X.md`). Cela garantit la cohérence du parcours et évite les erreurs de références manquantes dans le layout `session.html`.
3. **Rédaction de la description de Session :** Ne jamais parler de l'apprenant à la 3e personne ("L'apprenant transforme...", "Il utilise..."). Privilégier des verbes à l'infinitif ("Transformer...", "Utiliser...") ou une formulation directe, avec une ponctuation soignée.
4. **Syntaxe YAML :** Utiliser du YAML valide pour le frontmatter. Pour les textes longs (multilignes), utiliser systématiquement le caractère `>` pour éviter les erreurs d'échappement.
5. **Layouts :** Ne jamais oublier les layouts appropriés (`layout: session`, `layout: prototype`, `layout: projet-fil-rouge`, `layout: domaines`, `layout: ua`, `layout: tuto`).
6. **Vérification préalable :** Toujours s'appuyer sur la liste des UAs existantes (ex: `_liste-ua.md`) avant de générer de nouveaux fichiers en masse.

# Création des fichiers de Tutoriels (Structure de base)
En plus des Domaines et UAs, tu as la capacité de créer les fichiers de tutoriels vides (mais fonctionnels) à partir des dossiers de conception.

## Structure des dossiers des tutoriels

Chaque fichier de tutoriel est enregistré selon la hiérarchie suivante :

```text
_tutos/
└── [Code Domaine]-[mini-code domaine]/
    └── [Code UA]/
        └── [Code Tuto]/
            └── [slug-du-tutoriel].md
```

Règles :

* Le dossier racine des tutoriels est `_tutos/`.
* Le premier niveau est le **dossier du Domaine de compétence**, nommé avec le code du domaine suivi d'un tiret et du mini-code (ex: `D.122.2-css`).
* Le deuxième niveau est le **dossier de l'UA**, nommé avec le code de l'UA (ex: `UA.122.21`).
* Le troisième niveau est le **dossier du tutoriel**, nommé avec le code du tutoriel (ex: `T.122.21.10`).
* Le fichier Markdown du tutoriel est placé dans ce dossier, nommé avec le slug du tutoriel (ex: `tutoriel-synthese-css.md`).

Exemple complet :

```text
_tutos/
└── D.122.2-css/
    └── UA.122.21/
        └── T.122.21.10/
            └── tutoriel-synthese-css.md
```

Ne jamais placer un fichier de tutoriel directement dans `_tutos/` ou dans le dossier du Domaine sans respecter cette hiérarchie.

## Règles de création des tutoriels :
1. **Organisation des dossiers :** Respecter strictement la hiérarchie `_tutos/[Domaine]-[mini-code]/[UA]/[Tuto]/[slug].md` définie ci-dessus.
2. **Fichier de base (version normale) :** Au début, tu ne dois créer **que le fichier pour la version normale** du tutoriel.
   - Le nom du fichier doit être le slug du tutoriel (ex: `syntaxe-css.md`).
3. **Contenu du fichier généré — Front Matter uniquement :**
   - Lors de la création initiale d'un tutoriel, le fichier **ne contient que le Front Matter**. Aucun contenu Markdown ne doit être rédigé.
   - Le Front Matter doit être **complet et valide** pour la version `normal`, conforme aux règles du skill `rédacteur-tutos`.
   - Champs obligatoires : `title`, `layout: tuto`, `slug`, `permalink: /tutos/:slug/`, `tuto_id`, `type`, `version: normal`, `ua`, `nav_order`, `data_html`, `data_css`, `data_js`.
   - Les champs `data_html`, `data_css` et `data_js` sont laissés vides (`""`) lors de la création initiale.
   - **Aucune section Markdown** (`## Objectif`, `## Prérequis`, etc.) ne doit être ajoutée à cette étape.
   - La rédaction du contenu est une étape ultérieure distincte, réalisée avec le skill `rédacteur-tutos`.

## Template Front Matter (création initiale)

```yaml
---
title: "Titre du tutoriel"
layout: tuto
slug: "slug-du-tutoriel"
permalink: /tutos/slug-du-tutoriel/
tuto_id: "T.XXX.XXX"
type: "classique"
version: "normal"
ua: "UA.XXX.XX"
nav_order: X
data_html: ""
data_css: ""
data_js: ""
---
```

