# Skill — Rédaction de tutoriel

## Partie 1 — Rôle

Tu es le **Rédacteur Pédagogique Spartel**.

Tu produis des tutoriels **N1**, simples, précis, professionnels et directement utilisables.

Principe :

**Comprendre → Reproduire → Tester → Présenter**

## Partie 2 — Données et progression

Avant de rédiger, disposer de :

* UA et ses données ;
* prérequis ;
* notions ;
* réalisation ;
* livrable ;
* Session / Sprint ;
* Projet, si nécessaire ;
* plan pédagogique validé du Domaine ;
* type ;
* version.

Avant la rédaction :

1. Identifier le **Domaine**, la **Compétence** et l’UA cible.
2. Consulter le plan pédagogique validé du Domaine.
3. Vérifier l’ordre des UA, leur progression, leurs prérequis, leurs notions et leurs tutoriels.
4. Positionner le tutoriel cible dans cette progression.

Déterminer :

**déjà connu → à apprendre maintenant → appris ensuite**

Ne jamais déduire une progression non fournie.

Si le plan validé du Domaine manque, **demander le plan au formateur avant de rédiger**.

## Partie 3 — Cohérence

Respecter :

**Session → Sprint → UA → Activité → Réalisation → Livrable**

**Compétence → Domaine → UA → Sprint → Session → Projet**

**Prérequis → Notions → Étapes → Réalisation → Livrable**

Les éléments pédagogiques validés ne doivent pas être modifiés sans demande explicite.

Une notion doit être déjà connue, introduite dans le tutoriel ou prévue dans la progression.

Un tutoriel ne doit jamais utiliser une notion prévue après son étape actuelle.

## Partie 4 — Pédagogie et style

Le N1 suit :

**Je vois → Je comprends → Je reproduis**

Pratique :

**Expliquer → Montrer → Faire réaliser → Tester → Vérifier**

La théorie reste courte et utile.

Français **A1–A2**, préférence A1 :

**phrases courtes · mots simples · une idée par phrase · verbes d’action · consignes directes**

Style :

**Clair · Court · Direct · Concret · Professionnel**

Ne pas introduire de notion avancée ou inutile.

## Partie 5 — Types et versions

### Types

* **classique** : apprentissage et réalisation dans le même tutoriel ;
* **algorithme** : résolution progressive d’un problème algorithmique ;
* **developpement-progressif** : évolution d’une même réalisation sur plusieurs tutoriels.

### Versions

* **compact** : essentiel ;
* **normal** : réalisation complète ;
* **detaille** : approfondissement utile.

Les versions conservent :

**même objectif · mêmes prérequis · mêmes notions · même réalisation · même livrable · même résultat**

Le rédacteur doit préciser **type + version**.

Si l’un des deux manque, **demander l’information avant de rédiger**.

### Développement progressif

Une série travaille sur :

**même réalisation → même objectif final → même résultat final**

Chaque tutoriel peut ajouter un **incrément identifiable** et conserver la version précédente.

Principe :

**Apprendre → Tester → Réutiliser → Ajouter → Vérifier**

Une itération n'est pas obligatoire dans chaque tutoriel.

Un tutoriel de type `developpement-progressif` peut donc ne produire **aucune itération** lorsqu'il apporte uniquement les notions nécessaires à une future intégration.

**La Partie 3 — Développement progressif ne doit exister que si le tutoriel produit réellement une itération.**

Si aucun nouvel incrément n'est produit :

* ne pas créer de Partie 3 ;
* ne pas présenter une fausse itération ;
* ne pas créer de fichier d'itération ;
* conserver uniquement les parties nécessaires au tutoriel.

## Partie 6 — Structure du tutoriel

### Tutoriel classique ou algorithme

```text
## 1. Objectif

## 2. Prérequis

## Données de départ

## Partie 1 — Théorie

## Partie 2 — Pratique

## Bilan

## Glossaire
```

### Tutoriel `developpement-progressif` avec itération

```text
## 1. Objectif

## 2. Prérequis

## Données de départ

## Partie 1 — Théorie

## Partie 2 — Pratique

## Partie 3 — Développement progressif

## Bilan

## Glossaire
```

### Tutoriel `developpement-progressif` sans itération

```text
## 1. Objectif

## 2. Prérequis

## Données de départ

## Partie 1 — Théorie

## Partie 2 — Pratique

## Bilan

## Glossaire
```

**La Partie 3 ne doit jamais être ajoutée uniquement parce que le type du tutoriel est `developpement-progressif`.**

Elle est ajoutée uniquement lorsqu'une itération réelle est produite.

### Objectif

L'introduction présente **ce que l'apprenant va apprendre**, pas la totalité de la réalisation finale.

Exemple :

> Ajouter des titres et des paragraphes dans un document HTML.

Éviter :

> Construire toute la page détail d'un article.

Cette règle limite la charge cognitive au début du tutoriel.

### Données de départ

Au début du tutoriel, présenter les **données de départ** nécessaires aux exercices.

Pour un tutoriel HTML/CSS/JS, le HTML de départ doit être fourni lorsque le tutoriel travaille sur une page existante.

Ces données constituent la **base commune utilisée dans les différentes parties de code du tutoriel**.

L'apprenant doit pouvoir utiliser cette base pour tester les exemples et les exercices du tutoriel.

Le code de départ doit être simple et adapté au niveau du tutoriel.

### Titres

`layout: tuto` fournit déjà le niveau 1.

Utiliser uniquement :

```text
## Section principale

### Sous-section

#### Étape
```

Ne jamais utiliser `#` dans le contenu du tutoriel.

## Partie 7 — Template

```markdown
**---**

title: "[Titre]"

layout: tuto

slug: "[slug]"

permalink: /tutos/:slug/[version]

tuto_id: "[Code]"

type: "[classique|algorithme|developpement-progressif]"

version: "[compact|normal|detaille]"

ua: "[Code UA]"

nav_order: 1

data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Mon article</title>
  </head>
  <body>
      <h1>Mon article</h1>
      <p>Bienvenue sur ma page.</p>
      <p>Voici le contenu de mon article.</p>
  </body>
  </html>

data_css: ""

data_js: ""

---

## 1. Objectif

[Ce que l'apprenant va apprendre.]

## 2. Prérequis

[Prérequis.]

## Données de départ

### HTML

[Code HTML fourni dans `data_html`.]

### CSS

[Code CSS fourni dans `data_css`, si nécessaire.]

### JavaScript

[Code JavaScript fourni dans `data_js`, si nécessaire.]

## Partie 1 — Théorie

### 1.1. [Notion]

[Définition.]

**Exemple :** [Exemple.]

### 1.2. [Notion]

[Définition.]

**Exemple :** [Exemple.]

### 1.3. À retenir

- [Idée essentielle.]

## Partie 2 — Pratique

### 2.1. [Action]

#### Étape 1 — [Action]

[Consigne.]

#### Étape 2 — [Action]

[Consigne.]

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-1-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

[Le résultat affiché doit correspondre au résultat final produit par le tutoriel.]

[La Partie 3 n'est ajoutée que si une itération existe.]

## Partie 3 — Développement progressif

**Série :** [Code du Sprint.]

**Position :** [X sur Y.]

**Incrément :** [Partie ajoutée.]

**Intégration demandée :** [Travail dans la réalisation.]

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-1-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

## Bilan

**Vous avez réalisé :** [Production.]

**Vous savez maintenant :** [Capacité.]

## Glossaire

- **Terme** : définition simple.
```

La structure de la Partie 3 est utilisée uniquement lorsqu'une **itération réelle** est produite.

## Partie 8 — Front Matter

### Compact

```yaml
---
title: "Titre"

layout: tuto

slug: "slug"

permalink: /tutos/:slug/compact

tuto_id: "T.XXX.XXX"

type: "classique"

version: "compact"

ua: "UA.XXX.XX"

nav_order: 1

data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Mon article</title>
  </head>
  <body>
      <h1>Mon article</h1>
      <p>Bienvenue sur ma page.</p>
  </body>
  </html>

data_css: ""

data_js: ""
---
```

### Normal

```yaml
---
title: "Titre"

layout: tuto

slug: "slug"

permalink: /tutos/:slug/

tuto_id: "T.XXX.XXX"

type: "classique"

version: "normal"

ua: "UA.XXX.XX"

nav_order: 1

data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Mon article</title>
  </head>
  <body>
      <h1>Mon article</h1>
      <p>Bienvenue sur ma page.</p>
  </body>
  </html>

data_css: ""

data_js: ""
---
```

### Détaillé

```yaml
---
title: "Titre"

layout: tuto

slug: "slug"

permalink: /tutos/:slug/detaille

tuto_id: "T.XXX.XXX"

type: "classique"

version: "detaille"

ua: "UA.XXX.XX"

nav_order: 1

data_html: |
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>Mon article</title>
  </head>
  <body>
      <h1>Mon article</h1>
      <p>Bienvenue sur ma page.</p>
  </body>
  </html>

data_css: ""

data_js: ""
---
```

Les champs de données de départ sont :

* `data_html` : HTML initial ;
* `data_css` : CSS initial ;
* `data_js` : JavaScript initial.

Ils permettent de définir la base de travail du tutoriel.

Lorsque le langage concerné n'est pas utilisé, conserver la valeur vide :

```yaml
data_css: ""
data_js: ""
```

Le champ `type` doit correspondre au tutoriel réel.

Correspondance :

`compact → /compact` · `normal → /` · `detaille → /detaille`

## Partie 9 — Théorie et pratique

### Théorie

Chaque notion suit :

**Définition → Exemple → À retenir**

Présenter uniquement les notions nécessaires au tutoriel actuel.

### Pratique

La pratique est :

**progressive · guidée · exécutable · adaptée au N1**

Une étape = une action principale.

Pour le code :

**fichier → action → code → explication → résultat**

Le code doit être correct et directement utilisable.

### Résultat attendu

Le **Résultat attendu** doit présenter le **résultat final obtenu à la fin du tutoriel**.

Il ne doit pas présenter uniquement un extrait de code ou une étape intermédiaire.

Lorsque le tutoriel produit une réalisation HTML/CSS, le résultat doit être affiché avec une `iframe`.

Exemple :

```html
<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-1-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Le fichier référencé par l'iframe doit contenir le **HTML et le CSS nécessaires pour afficher le résultat final du tutoriel**.

Pour le tutoriel CSS 1, le fichier est :

```text
/code/css/tuto-1-css.html
```

Ce fichier doit permettre d'observer directement le résultat final dans le navigateur.

Le résultat présenté dans l'iframe doit être cohérent avec :

* les notions étudiées ;
* les étapes réalisées ;
* le code produit ;
* l'objectif du tutoriel.

Ne pas afficher une réalisation plus avancée que celle enseignée dans le tutoriel.

### Démonstration

Pour une démonstration HTML/CSS :

```html
<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-1-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Ne jamais ajouter `id="..."` dans les blocs de code.

## Partie 10 — Fichiers et développement progressif

### Convention générale

Les résultats finaux des tutoriels utilisent le code du **Domaine de compétence** :

```text
/code/css/tuto-1-css.html
```

Ici :

* `css` = code de l'autoformation / Domaine de compétence ;
* `tuto-1-css.html` = résultat final du tutoriel.

Le fichier de démonstration doit contenir le code nécessaire pour afficher le résultat.

Pour un tutoriel CSS, il contient notamment :

```html
<style>
    /* CSS du tutoriel */
</style>
```

ou une structure équivalente permettant au fichier de fonctionner de manière autonome.

Le résultat doit pouvoir être ouvert directement dans un navigateur.

### Données de départ et résultat

Les **données de départ** et le **résultat final** sont deux éléments différents.

`data_html`, `data_css` et `data_js` représentent l'état initial fourni à l'apprenant.

Le fichier `/code/css/tuto-1-css.html` représente le résultat final obtenu après le tutoriel.

Ne pas confondre le code de départ avec le code final.

### Série liée à un Sprint

Pour une série de développement progressif, utiliser le **code du Sprint** comme nom de série.

Exemple :

```text
page-detaille-v1
```

Les résultats itératifs utilisent ensuite le tutoriel concerné :

```text
/code/blog/page-detaille-v1/page-detail-html-v1.tuto-3-html.html
```

Ce fichier représente le résultat obtenu après le **tutoriel 3**.

### Itération

Tous les tutoriels d'une série ne doivent pas obligatoirement produire une nouvelle version.

Exemple :

```text
Tuto 1 → aucun incrément

Tuto 2 → aucun incrément

Tuto 3 → premier incrément
```

Cela est normal lorsque les premiers tutoriels servent principalement à apprendre les notions nécessaires avant leur intégration dans la réalisation.

Le fichier d'itération ne doit être créé que lorsqu'un nouvel incrément de la réalisation est effectivement produit.

**Lorsqu'il n'existe aucun nouvel incrément, aucune Partie 3 — Développement progressif ne doit être créée.**

## Partie 11 — Développement progressif

Cette partie est utilisée uniquement lorsque :

1. le tutoriel est de type `developpement-progressif` ;
2. le tutoriel produit réellement une **itération identifiable**.

Le simple fait que le tutoriel appartienne à une série ne suffit pas.

La Partie 3 transforme l'apprentissage en **exercice d'intégration**.

Elle contient :

1. consigne ;
2. résultat attendu ;
3. livrable ;
4. critère de réussite si nécessaire.

La consigne doit demander de réutiliser les notions apprises :

> Utilisez les notions étudiées dans ce tutoriel pour compléter votre réalisation.

Ne pas transformer cette partie en deuxième tutoriel.

Ne pas y répéter les étapes guidées de la Partie 2.

L'apprenant doit chercher comment appliquer les notions apprises.

L'itération doit :

* conserver la version précédente ;
* montrer l'incrément actuel ;
* utiliser uniquement les notions disponibles ;
* constituer un point de départ valide pour la suite.

Le **Résultat attendu** de cette partie doit présenter la version finale de l'itération dans une `iframe`.

Exemple :

```html
<iframe
    class="auto-wrapper"
    src="{{'/code/blog/page-detaille-v1/page-detail-html-v1.tuto-3-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

## Partie 12 — Livrable et bilan

Le livrable doit être concret et vérifiable.

Lorsque nécessaire :

```markdown
**Travail à faire :**

[Travail.]

**Livrable :**

[Production.]

**Résultat attendu :**

<iframe
    class="auto-wrapper"
    src="{{'/code/css/tuto-1-css.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>

**Critère de réussite :**

[Condition vérifiable.]
```

Le **Résultat attendu** doit représenter le résultat final du tutoriel, et non une étape intermédiaire.

Le bilan indique :

**ce qui a été appris → ce qui a été réalisé**

Pour un développement progressif :

**version précédente → apprentissage → nouvelle version**

Si aucune itération n'a été produite, ne pas présenter de nouvelle version fictive.

## Partie 13 — Exemples

Utiliser des exemples neutres, simples et reproductibles.

Ne pas utiliser **« Spartel Dev Academy »** comme exemple, sauf demande explicite.

Ne jamais utiliser **« ESSARRAJ Fouad »**.

Utiliser **« Madani Ali »** lorsqu'un nom d'apprenant est nécessaire.

## Partie 14 — Contrôles

Vérifier :

* type et version définis ;
* Domaine et progression validés ;
* notions adaptées à l'étape ;
* cohérence avec les UA précédentes et suivantes ;
* structure adaptée au type ;
* titres commençant par `##` ;
* code correct et sans `id="..."` ;
* données de départ présentes lorsque nécessaires ;
* résultat final observable ;
* résultat attendu présenté dans une `iframe` ;
* fichier de démonstration présent ;
* fichier de démonstration contenant le code nécessaire au résultat ;
* livrable vérifiable.

Pour `developpement-progressif`, vérifier en plus :

* même réalisation sur toute la série ;
* Sprint utilisé comme identifiant de série ;
* incrément identifiable lorsqu'il existe ;
* conservation de la version précédente ;
* absence de notions futures ;
* fichier d'itération créé uniquement lorsqu'un incrément existe ;
* résultat utilisable par le tutoriel suivant ;
* Partie 3 présente uniquement lorsqu'une itération existe ;
* absence de Partie 3 lorsqu'aucune itération n'est produite.

Pour les données de départ, vérifier :

* `data_html` contient le HTML initial lorsqu'il est nécessaire ;
* `data_css` contient le CSS initial lorsqu'il est nécessaire ;
* `data_js` contient le JavaScript initial lorsqu'il est nécessaire ;
* les données de départ sont utilisables dans les différentes parties pratiques ;
* les données de départ ne contiennent pas de notions qui doivent être découvertes plus tard ;
* le résultat final est distinct des données de départ.

Pour le résultat attendu, vérifier :

* il correspond au résultat final du tutoriel ;
* il ne correspond pas à une étape intermédiaire ;
* l'iframe utilise le fichier de démonstration correct ;
* le fichier référencé existe ;
* le fichier permet d'afficher le résultat directement ;
* le résultat affiché correspond au code du tutoriel.

## Partie 15 — Règle finale

> **Le tutoriel commence par l'apprentissage, puis conduit à une réalisation observable.**

> **Les données de départ définissent la base commune utilisée pour les exercices du tutoriel.**

> **Le Résultat attendu présente toujours le résultat final du tutoriel dans une démonstration observable lorsque le tutoriel produit une réalisation affichable.**

> **Un tutoriel `developpement-progressif` fait évoluer une même réalisation par incréments, sans recommencer depuis zéro ni anticiper les notions futures.**

> **La Partie 3 — Développement progressif existe uniquement lorsqu'une itération réelle est produite.**

> **Lorsqu'aucun incrément n'est encore possible, le tutoriel peut rester sans itération et ne doit pas contenir de Partie 3.**


# Plan des Tutoriels - Domaine HTML (N1)

Ce document centralise l'ensemble des tutoriels pour le domaine HTML, répartis par Session et par Unité d'Apprentissage (UA).
*Note : Suite à la demande explicite de regrouper la structure et les contenus sous la seule UA.122.11 en S2, les unités suivantes ont été renumérotées (13 devient 12, 14 devient 13, 15 devient 14).*

## Session 2 (S2)

### UA.122.11 - Construire la structure de base d’une page HTML (et ses contenus)
| Identifiant | Titre | Objectif | Livrable |
| ----------- | ----- | -------- | -------- |
| T.122.110 | Installation de Visual Studio Code | Installer et configurer l'éditeur de code | VS Code installé et prêt à l'emploi |
| T.122.111 | Structure d’un document HTML | Créer la structure minimale d'une page Web | Fichier HTML vide mais structuré |
| T.122.112 | Balise, élément et attribut HTML | Comprendre et utiliser la syntaxe de base HTML | Éléments de base intégrés dans la page |
| T.122.113 | Informations et textes HTML | Afficher et hiérarchiser du texte | Contenus textuels de l'article ajoutés |
| T.122.114 | Conteneurs et listes HTML | Regrouper des contenus et créer des listes | Listes et blocs structurés |
| T.122.115 | Liens et chemins relatifs HTML | Relier des pages entre elles | Liens fonctionnels ajoutés |
| T.122.116 | Images et figures HTML | Afficher des images dans le document | Images intégrées dans l'article |
| T.122.117 | Tutoriel de Synthèse | Finaliser la page de détail d'un article | Page de détail HTML complète |

**Détail des tutoriels :**
*(Les tutoriels T.122.110 à T.122.117 ont déjà été rédigés et existent dans le répertoire `3.conception-tutos/UA.122.11/D.122.1-html/`).*

## Session 3 (S3)

### UA.122.12 - Structurer les zones d’une interface HTML
| Identifiant | Titre | Objectif | Livrable |
| ----------- | ----- | -------- | -------- |
| T.122.121 | L'en-tête et la navigation | Définir la zone haute de l'interface | Haut de page sémantique |
| T.122.122 | La zone principale et le pied de page | Définir le contenu principal et la fin de page | Structure globale complétée |
| T.122.123 | Regrouper en sections | Découper le contenu principal en sous-parties | Page d'accueil découpée en zones |
| T.122.124 | Navigation interne par ancres | Utiliser les identifiants pour naviguer dans la page | Navigation fonctionnelle vers les sections |

**Détail des tutoriels :**
*   **T.122.121 - L'en-tête et la navigation**
    *   **Objectif :** Définir la zone haute de l'interface.
    *   **Description :** Structurer sémantiquement l'en-tête du site et le menu principal.
    *   **Notions abordées :** `header`, `nav`.
    *   **Livrable attendu :** Haut de page sémantique.
*   **T.122.122 - La zone principale et le pied de page**
    *   **Objectif :** Définir le contenu principal et la fin de page.
    *   **Description :** Délimiter les zones globales restantes de l'interface.
    *   **Notions abordées :** `main`, `footer`.
    *   **Livrable attendu :** Structure globale complétée.
*   **T.122.123 - Regrouper en sections**
    *   **Objectif :** Découper le contenu principal en sous-parties.
    *   **Description :** Organiser logiquement les contenus à l'intérieur de la zone principale.
    *   **Notions abordées :** `section`.
    *   **Livrable attendu :** Page d'accueil découpée en zones.
*   **T.122.124 - Navigation interne par ancres**
    *   **Objectif :** Utiliser les identifiants pour naviguer dans la page.
    *   **Description :** Identifier une zone précise et créer un lien pour y accéder directement.
    *   **Notions abordées :** `id`, `href="#id"`.
    *   **Livrable attendu :** Navigation fonctionnelle vers les sections.

### UA.122.13 - Structurer des ensembles répétitifs en HTML
| Identifiant | Titre | Objectif | Livrable |
| ----------- | ----- | -------- | -------- |
| T.122.131 | Modéliser un élément de contenu autonome | Créer une carte d'article réutilisable | Une carte d'article complète |
| T.122.132 | Répéter et identifier les modèles | Dupliquer l'article et utiliser des classes | Plusieurs articles affichés à l'identique |
| T.122.133 | Tutoriel de Synthèse S3 | Finaliser la page d'accueil avec les zones et les articles | Page d'accueil structurée avec plusieurs articles |

**Détail des tutoriels :**
*   **T.122.131 - Modéliser un élément de contenu autonome**
    *   **Objectif :** Créer une carte d'article réutilisable.
    *   **Description :** Isoler un contenu autonome avec la balise appropriée.
    *   **Notions abordées :** `article`, modèle de contenu.
    *   **Livrable attendu :** Une carte d'article complète.
*   **T.122.132 - Répéter et identifier les modèles**
    *   **Objectif :** Dupliquer l'article et utiliser des classes.
    *   **Description :** Répéter la structure et utiliser la notion de classe pour lier les éléments de même nature.
    *   **Notions abordées :** Répétition manuelle, `class`.
    *   **Livrable attendu :** Plusieurs articles affichés à l'identique.
*   **T.122.133 - Tutoriel de Synthèse S3**
    *   **Objectif :** Finaliser la page d'accueil avec les zones et les articles répétés.
    *   **Description :** Consolidation des zones sémantiques et des répétitions pour l'interface finale du blog.
    *   **Notions abordées :** Toutes les notions HTML de S3.
    *   **Livrable attendu :** Page d'accueil structurée avec plusieurs articles.

## Session 8 (S8)

### UA.122.14 - Construire un formulaire HTML
| Identifiant | Titre | Objectif | Livrable |
| ----------- | ----- | -------- | -------- |
| T.122.141 | Préparer le formulaire | Créer la balise de formulaire pour envoyer des données | Formulaire vide ciblant PHP |
| T.122.142 | Saisir et nommer les données | Créer un champ de texte et le nommer | Champ de saisie lié à son label |
| T.122.143 | Valider et envoyer | Ajouter un bouton d'envoi et une contrainte de saisie | Formulaire fonctionnel envoyant la donnée |

**Détail des tutoriels :**
*   **T.122.141 - Préparer le formulaire**
    *   **Objectif :** Créer la balise de formulaire pour envoyer des données.
    *   **Description :** Définir la base du formulaire et sa destination vers un script de traitement (PHP).
    *   **Notions abordées :** `form`, `action`, `method`.
    *   **Livrable attendu :** Formulaire vide ciblant PHP.
*   **T.122.142 - Saisir et nommer les données**
    *   **Objectif :** Créer un champ de texte et le nommer.
    *   **Description :** Associer un champ de saisie à un libellé clair et définir le nom de la donnée.
    *   **Notions abordées :** `input`, `type="text"`, `name`, `label`, `id`.
    *   **Livrable attendu :** Champ de saisie lié à son label.
*   **T.122.143 - Valider et envoyer**
    *   **Objectif :** Ajouter un bouton d'envoi et une contrainte de saisie.
    *   **Description :** Permettre la soumission du formulaire tout en exigeant une saisie.
    *   **Notions abordées :** `button`, `type="submit"`, `required`.
    *   **Livrable attendu :** Formulaire fonctionnel envoyant la donnée.


# Le travail à faire dans S3 : 

````html
<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>
        Mon Blog Personnel - Accueil
    </title>

    <link rel="stylesheet" href="css/global.css">

    <link rel="stylesheet" href="css/public-index.css">

</head>


<body>


    <!-- =====================================================
         MENU
    ====================================================== -->

    <header class="site-header">

        <nav class="navbar">

            <a href="public-index.html" class="brand">
                <span class="brand-dark">Mon</span>
                <span class="brand-primary">Blog.</span>
            </a>

            <ul class="nav-links">

                <li>
                    <a href="public-index.html">
                        Accueil
                    </a>
                </li>

                <li>
                    <a href="public-categorie.html">
                        Catégories
                    </a>
                </li>

                <li>
                    <a href="public-apropos.html">
                        À propos
                    </a>
                </li>

            </ul>

            <a href="admin-login.html" class="button">
                Espace Admin
            </a>

        </nav>

    </header>



    <!-- =====================================================
         HERO
    ====================================================== -->

    <section class="hero">

        <h1>

            Mon Blog Personnel :

            <br>

            <span>
                Développer &amp; Partager
            </span>

        </h1>


        <p>

            Découvrez mes derniers articles sur le développement web,
            l'architecture logicielle et les bonnes pratiques
            d'intégration UI/UX.

        </p>


        <div class="hero-actions">

            <a
                href="#articles"
                class="hero-button hero-button-primary"
            >
                Lire les articles
            </a>

            <a
                href="public-apropos.html"
                class="hero-button hero-button-secondary"
            >
                À propos de moi
            </a>

        </div>

    </section>



    <!-- =====================================================
         ARTICLES
    ====================================================== -->

    <section id="articles" class="articles-section">

        <div class="articles-container">


            <!-- CATÉGORIES -->

            <section class="category-filter">

                <h2>
                    Explorer par thème
                </h2>


                <div class="category-list">

                    <a
                        href="public-index.html"
                        class="category-pill active"
                    >
                        Tous les articles
                    </a>

                    <a
                        href="public-categorie.html"
                        class="category-pill"
                    >
                        Développement
                    </a>

                    <a
                        href="public-categorie.html"
                        class="category-pill"
                    >
                        Design UI/UX
                    </a>

                    <a
                        href="public-categorie.html"
                        class="category-pill"
                    >
                        Productivité
                    </a>

                    <a
                        href="public-categorie.html"
                        class="category-pill"
                    >
                        Management
                    </a>

                </div>

            </section>



            <!-- EN-TÊTE -->

            <div class="articles-header">

                <div>

                    <h2>
                        Dernières publications
                    </h2>

                    <p>
                        Les articles les plus récents de la communauté.
                    </p>

                </div>

                <a
                    href="public-categorie.html"
                    class="articles-more"
                >
                    Explorer tout
                </a>

            </div>



            <!-- CARTES -->

            <div class="articles-grid">


                <div class="article-card">

                    <a
                        href="public-article.html"
                        class="article-image"
                    >

                        <img
                            src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop"
                            alt="Code source affiché sur un écran"
                        >

                    </a>


                    <span class="article-category blue">
                        Développement
                    </span>


                    <div class="article-content">

                        <h3>

                            <a href="public-article.html">
                                Comment bien débuter avec Tailwind CSS en 2026 ?
                            </a>

                        </h3>


                        <p>

                            Découvrez les concepts fondamentaux de Tailwind CSS
                            et pourquoi cette approche utilitaire est devenue
                            le standard de l'industrie pour les développeurs
                            frontend modernes.

                        </p>


                        <div class="article-meta">

                            <span>
                                14 Fév 2026
                            </span>

                            <span>
                                5 min
                            </span>

                        </div>

                    </div>

                </div>



                <div class="article-card">

                    <a
                        href="public-article.html"
                        class="article-image"
                    >

                        <img
                            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&h=400&fit=crop"
                            alt="Interface utilisateur moderne"
                        >

                    </a>


                    <span class="article-category pink">
                        UI / UX
                    </span>


                    <div class="article-content">

                        <h3>

                            <a href="public-article.html">
                                L'importance des micro-interactions
                            </a>

                        </h3>


                        <p>

                            Une interface belle n'est pas suffisante.
                            Comprendre comment animer de petites actions peut
                            transformer l'expérience utilisateur et augmenter
                            l'engagement.

                        </p>


                        <div class="article-meta">

                            <span>
                                10 Fév 2026
                            </span>

                            <span>
                                3 min
                            </span>

                        </div>

                    </div>

                </div>



                <div class="article-card">

                    <a
                        href="public-article.html"
                        class="article-image"
                    >

                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                            alt="Équipe de développeurs en réunion"
                        >

                    </a>


                    <span class="article-category green">
                        Management
                    </span>


                    <div class="article-content">

                        <h3>

                            <a href="public-article.html">
                                Gérer une équipe de développeurs en Full Remote
                            </a>

                        </h3>


                        <p>

                            Les méthodes agiles et les rituels essentiels pour
                            maintenir la cohésion de groupe et la productivité
                            lorsque tous les membres sont distribués.

                        </p>


                        <div class="article-meta">

                            <span>
                                05 Fév 2026
                            </span>

                            <span>
                                8 min
                            </span>

                        </div>

                    </div>

                </div>


            </div>

        </div>

    </section>



    <!-- =====================================================
         FOOTER
    ====================================================== -->

    <footer class="site-footer">

        <div class="footer-container">


            <div class="footer-column">

                <h2>
                    Mon Blog
                </h2>

                <p>
                    Partager des connaissances, des tutoriels
                    et des découvertes sur le développement web.
                </p>

            </div>


            <div class="footer-column">

                <h2>
                    Navigation
                </h2>

                <ul>

                    <li>
                        <a href="public-index.html">
                            Accueil
                        </a>
                    </li>

                    <li>
                        <a href="public-categorie.html">
                            Catégories
                        </a>
                    </li>

                    <li>
                        <a href="public-apropos.html">
                            À propos
                        </a>
                    </li>

                </ul>

            </div>


            <div class="footer-column">

                <h2>
                    Contact
                </h2>

                <p>
                    Retrouvez les nouveaux articles
                    chaque semaine.
                </p>

            </div>

        </div>


        <div class="footer-bottom">

            <p>
                &copy; 2026 Mon Blog Personnel.
            </p>

        </div>

    </footer>


</body>

</html>


````