# Skill — Configuration de `formation-web`

## 1. Objectif

Configurer la plateforme **`formation-web`** avec **Jekyll + Just the Docs** pour organiser, relier et publier les contenus de formation Solicode.

La plateforme doit représenter la structure pédagogique :

```text
Mission
  ↓
Compétence
  ↓
Domaine
  ↓
UA
  ↓
Tutoriel(s)
```

Une UA contient généralement **un tutoriel**, mais peut contenir plusieurs tutoriels.

Chaque tutoriel existe en trois versions de lecture :

```text
Compact
Normal
Détaillé
```

---

# 2. Structure pédagogique

## 2.1. Mission

Une Mission représente une mission réalisée par un développeur en entreprise.

Exemple :

```yaml
code: "N1-M1"
mission_code: "M1"
niveau: "N1"
title: "Analyser et concevoir une solution logicielle"
```

Exemple :

```text
N1-M1 — M1 — N1
Analyser et concevoir une solution logicielle
```

Une Mission contient plusieurs Compétences.

---

## 2.2. Compétence

Une Compétence représente une capacité professionnelle.

Une Compétence appartient à une Mission.

Exemple :

```yaml
code: "C.111"
mission: "M1"
title: "Analyser un besoin existant"
```

Exemple :

```text
C.111
Analyser un besoin existant
```

---

## 2.3. Domaine

Un Domaine représente une unité de contenu technique ou une micro-compétence.

Le code d'un Domaine suit la forme :

```text
D.xxx.x
```

Exemple :

```text
D.111.1
```

Exemple complet :

```yaml
code: "D.111.1"
competence: "C.111"
title: "Analyser un besoin existant"
```

Un Domaine appartient à une Compétence.

Une Compétence peut contenir plusieurs Domaines.

---

## 2.4. UA — Unité d’apprentissage

Une UA représente l'unité pédagogique de travail.

Le code d'une UA suit la forme :

```text
UA.xxx.xx
```

Exemple :

```text
UA.111.11
```

Exemple complet :

```yaml
code: "UA.111.11"
competence: "C.111"
domaine: "D.111.1"
session: "S1"
title: "..."
```

Une UA appartient à un Domaine.

Une UA peut contenir :

```text
1 tutoriel
```

ou :

```text
plusieurs tutoriels
```

Exemple :

```yaml
tutos:
  - "T.111.111"
```

ou :

```yaml
tutos:
  - "T.111.111"
  - "T.111.112"
```

---

## 2.5. Tutoriel

Un Tutoriel représente une ressource pédagogique permettant de travailler une UA.

Le code d'un Tutoriel suit la forme :

```text
T.xxx.xxx
```

Exemple :

```text
T.111.111
```

Ce tutoriel appartient à :

```text
UA.111.11
```

qui appartient à :

```text
D.111.1
```

Exemple :

```yaml
tuto_id: "T.111.111"
ua: "UA.111.11"
domaine: "D.111.1"
```

Le tutoriel reste donc relié à toute la chaîne pédagogique :

```text
Mission
  ↓
C.111
  ↓
D.111.1
  ↓
UA.111.11
  ↓
T.111.111
```

---

# 3. Session

Une Session organise les UA travaillées pendant une période de formation.

Exemple :

```yaml
code: "S1"
title: "Comprendre le projet et premiers traitements logiques"
```

Une Session contient plusieurs UA.

Exemple :

```text
S1
├── UA.111.11
├── UA.112.11
└── UA.121.11
```

Une UA peut être rattachée à une seule Session ou à plusieurs selon le référentiel utilisé.

---

# 4. Architecture Jekyll

Utiliser les collections suivantes :

```text
_sessions/
_missions/
_competences/
_domaines/
_uas/
_tutos/
```

Architecture recommandée :

```text
formation-web/
│
├── _config.yml
│
├── _missions/
├── _competences/
├── _domaines/
├── _uas/
├── _sessions/
├── _tutos/
│
├── _layouts/
│   ├── tuto.html
│   ├── ua.html
│   ├── session.html
│   └── default.html
│
├── _includes/
│   ├── version-switcher.html
│   ├── text-size-control.html
│   ├── tuto-card.html
│   ├── tuto-list.html
│   └── ua-tutos.html
│
├── assets/
│   ├── css/
│   └── js/
│
└── index.md
```

---

# 5. Configuration des collections

Dans `_config.yml` :

```yaml
collections:
  missions:
    output: true

  competences:
    output: true

  domaines:
    output: true

  uas:
    output: true

  sessions:
    output: true

  tutos:
    output: true
```

La configuration doit rester simple et compatible avec Just the Docs.

---

# 6. Navigation Just the Docs

La navigation principale doit rester courte.

Structure recommandée :

```text
Accueil

Sessions
  S1
  S2
  S3
  ...

Formations
  HTML
  CSS
  JavaScript
  PHP
  Laravel
  ...
```

Les collections suivantes ne doivent pas apparaître automatiquement dans le menu principal :

```text
Missions
Compétences
UA
Tutoriels
```

Elles doivent être accessibles depuis leur contexte.

Utiliser notamment :

```yaml
nav_exclude: true
```

lorsqu'une page ne doit pas apparaître dans la navigation.

---

# 7. Identifiants et relations

Les relations doivent toujours utiliser les **codes**, jamais les titres.

Exemple :

```text
Mission    → M1
Compétence → C.111
Domaine    → D.111.1
UA         → UA.111.11
Tutoriel   → T.111.111
Session    → S1
```

Exemple de relation complète :

```yaml
mission: "M1"
competence: "C.111"
domaine: "D.111.1"
ua: "UA.111.11"
tuto_id: "T.111.111"
sessions:
  - "S1"
```

---

# 8. Trois versions d'un tutoriel

Chaque Tutoriel possède exactement trois versions :

```text
Compact
Normal
Détaillé
```

Les trois versions représentent **le même Tutoriel**.

Elles partagent le même code :

```text
T.111.111
```

Exemple :

```yaml
tuto_id: "T.111.111"
version: "compact"
```

```yaml
tuto_id: "T.111.111"
version: "normal"
```

```yaml
tuto_id: "T.111.111"
version: "detaille"
```

---

# 9. Exemple de fichiers

```text
_tutos/
└── D111/
    ├── T111111-compact.md
    ├── T111111-normal.md
    └── T111111-detaille.md
```

Les noms de fichiers peuvent varier.

L'identité du tutoriel est toujours définie par :

```yaml
tuto_id: "T.111.111"
```

---

# 10. Cohérence des trois versions

Les trois versions doivent conserver exactement :

```text
Même Tutoriel
Même code
Même UA
Même Domaine
Même Compétence
Même Session
Même objectif
Même prérequis
Mêmes notions
Même réalisation
Même livrable
Même résultat attendu
Même structure
```

La seule différence est la profondeur de l'explication.

```text
Compact
→ essentiel

Normal
→ explication nécessaire

Détaillé
→ explication approfondie
```

Les trois versions doivent utiliser le **même template de tutoriel** défini par le Skill de rédaction.

---

# 11. Version par défaut

La version **Normal** est la version de référence.

Lorsqu'un apprenant ouvre un tutoriel sans préférence enregistrée :

```text
Normal
```

est affiché.

---

# 12. Continuité du niveau de lecture

Le choix de l'apprenant doit être conservé pendant toute sa navigation.

Exemple :

```text
Choix : Compact
      ↓
T.111.111 → Compact
      ↓
T.111.112 → Compact
      ↓
T.112.111 → Compact
```

Même logique pour Normal et Détaillé.

Le niveau sélectionné doit être enregistré dans le **Local Storage** du navigateur.

Exemple :

```javascript
localStorage.setItem("tuto_version", "compact");
```

À l'ouverture d'un autre tutoriel, le système récupère automatiquement cette valeur.

---

# 13. Sélecteur de version

Créer :

```text
_includes/version-switcher.html
```

Interface recommandée :

```text
[ Compact ] [ Normal ] [ Détaillé ]
```

Le composant doit :

* afficher la version active ;
* permettre de changer de version ;
* enregistrer le choix ;
* utiliser le même `tuto_id` ;
* fonctionner sur ordinateur et mobile ;
* respecter les règles UI/UX.

Le tutoriel doit rester le même lorsque l'apprenant change de version.

---

# 14. Taille du texte

Créer :

```text
_includes/text-size-control.html
```

Interface :

```text
A−   A   A+
```

Fonctionnement :

```text
A− → texte plus petit
A  → taille normale
A+ → texte plus grand
```

La taille choisie doit être enregistrée dans le Local Storage :

```javascript
localStorage.setItem("text_size", "large");
```

Elle doit être restaurée automatiquement lors des prochaines visites.

Le changement de taille doit concerner principalement le contenu pédagogique et ne doit pas casser :

* la navigation ;
* les blocs de code ;
* les images ;
* les composants ;
* le responsive design.

---

# 15. UI / UX

Toute nouvelle interface ou tout nouveau composant doit respecter les principes **UI et UX**.

Privilégier :

```text
Simple
Lisible
Cohérent
Accessible
Responsive
Prévisible
```

Les composants doivent être adaptés à des apprenants débutants.

Éviter :

```text
Animations inutiles
Interactions complexes
Informations secondaires trop visibles
Menus surchargés
Effets visuels excessifs
```

L'interface doit faciliter la lecture et l'apprentissage.

---

# 16. Layout Tutoriel

Créer :

```text
_layouts/tuto.html
```

Ordre recommandé :

```text
Titre
Référentiel
Session / UA
Objectif
Prérequis

Sélecteur Compact / Normal / Détaillé
Contrôle de taille du texte

Contenu du tutoriel

Navigation suivante / précédente
```

Le layout doit réutiliser les composants natifs de Just the Docs autant que possible.

---

# 17. Layout UA

Créer :

```text
_layouts/ua.html
```

Une page UA doit présenter :

```text
UA.111.11
Titre de l'UA

Domaine : D.111.1
Compétence : C.111

Tutoriels
├── T.111.111
└── T.111.112
```

Les tutoriels sont affichés comme des éléments pédagogiques uniques.

Les trois versions ne doivent jamais apparaître comme trois tutoriels différents.

---

# 18. Liste des tutoriels

Créer :

```text
_includes/tuto-list.html
```

Une liste doit afficher :

```text
T.111.111
Titre du tutoriel
```

et pointer vers la version active.

Exemple :

```text
T.111.111 — Structure d'une page HTML
```

Ne jamais afficher :

```text
T.111.111 Compact
T.111.111 Normal
T.111.111 Détaillé
```

dans une liste pédagogique.

---

# 19. Règle de déduplication

Le système considère :

```text
1 tuto_id = 1 tutoriel
```

Même si trois fichiers existent :

```text
Compact
Normal
Détaillé
```

Dans les listes d'UA, Sessions ou Domaines, le tutoriel ne doit apparaître qu'une seule fois.

---

# 20. Navigation contextuelle

Le parcours principal de l'apprenant est :

```text
Session
  ↓
UA
  ↓
Tutoriel
  ↓
Version choisie
```

Le parcours documentaire complémentaire peut être :

```text
Domaine
  ↓
UA
  ↓
Tutoriel
```

Le système doit toujours conserver le niveau de lecture choisi.

---

# 21. Exemple complet

Données :

```text
Mission
N1-M1 — Analyser et concevoir une solution logicielle

Compétence
C.111 — Analyser un besoin existant

Domaine
D.111.1 — Analyser un besoin existant

UA
UA.111.11

Tutoriel
T.111.111

Session
S1
```

Relation :

```text
N1-M1
  ↓
C.111
  ↓
D.111.1
  ↓
UA.111.11
  ↓
T.111.111
```

Versions du tutoriel :

```text
T.111.111
├── Compact
├── Normal
└── Détaillé
```

---

# 22. Exemple de Front Matter

## UA

```yaml
---
title: "Analyser un besoin existant"
layout: ua

code: "UA.111.11"
competence: "C.111"
domaine: "D.111.1"
session: "S1"

tutos:
  - "T.111.111"
---
```

## Tutoriel — Compact

```yaml
---
title: "Analyser un besoin existant"
layout: tuto

tuto_id: "T.111.111"
version: "compact"

competence: "C.111"
domaine: "D.111.1"
ua: "UA.111.11"

sessions:
  - "S1"
---
```

## Tutoriel — Normal

```yaml
---
title: "Analyser un besoin existant"
layout: tuto

tuto_id: "T.111.111"
version: "normal"

competence: "C.111"
domaine: "D.111.1"
ua: "UA.111.11"

sessions:
  - "S1"
---
```

## Tutoriel — Détaillé

```yaml
---
title: "Analyser un besoin existant"
layout: tuto

tuto_id: "T.111.111"
version: "detaille"

competence: "C.111"
domaine: "D.111.1"
ua: "UA.111.11"

sessions:
  - "S1"
---
```

---

# 23. Responsabilités des composants

```text
Jekyll
→ collections
→ données
→ Front Matter
→ génération statique
→ Liquid

Just the Docs
→ navigation
→ recherche
→ structure documentaire
→ responsive
→ thème

JavaScript
→ changement de version
→ Local Storage
→ taille du texte

Includes
→ composants réutilisables

Layouts
→ présentation des différents types de contenus
```

---

# 24. Séparation avec le Skill de rédaction

Le Skill de configuration ne rédige pas les tutoriels.

Le rôle de chaque Skill est :

```text
Skill rédaction tutoriel
→ produit le contenu

Skill configuration formation-web
→ organise et publie le contenu
```

La configuration ne doit pas modifier les données pédagogiques validées.

---

# 25. Contrôle final

Vérifier :

```text
✓ Mission configurée
✓ Compétence reliée à une Mission
✓ Domaine relié à une Compétence
✓ UA reliée à un Domaine
✓ UA reliée à une Session
✓ UA pouvant contenir 1 ou plusieurs tutoriels
✓ Tutoriel identifié par T.xxx.xxx
✓ Trois versions par tutoriel
✓ Même template pour les trois versions
✓ Même contenu pédagogique de référence
✓ Seule la profondeur d'explication varie
✓ Normal utilisé par défaut
✓ Niveau de lecture conservé pendant la navigation
✓ Choix enregistré dans Local Storage
✓ Taille du texte configurable
✓ Taille enregistrée dans Local Storage
✓ Navigation simple
✓ Tutoriels non dupliqués dans les listes
✓ Interface UI/UX
✓ Responsive
✓ Compatible Just the Docs
✓ Relations basées sur les codes
```

# 26. Règle finale

> **`formation-web` organise la formation selon la chaîne Mission → Compétence → Domaine → UA → Tutoriel. Une UA contient un ou plusieurs tutoriels. Chaque tutoriel possède trois versions — Compact, Normal et Détaillé — utilisant exactement le même template et le même objectif. Seule la profondeur de l'explication change. Le niveau de lecture et la taille du texte sont mémorisés dans le navigateur afin de conserver une expérience de lecture personnalisée pendant toute la navigation.**
