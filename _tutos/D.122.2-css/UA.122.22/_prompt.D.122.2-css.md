


# Skill — Rédaction de tutoriel


 

### Partie — Gestion des corrections et des incohérences

Lorsqu’une erreur, une incohérence ou une mauvaise décision est détectée dans un résultat déjà produit, ne pas corriger uniquement l’élément isolé sans vérifier ses conséquences sur l’ensemble du résultat.

L’agent doit obligatoirement suivre cette procédure :

**1. Expliquer le problème**

Identifier clairement l’élément incorrect et expliquer simplement :

* ce qui est incorrect ;
* pourquoi c’est incorrect ;
* quelle règle pédagogique, technique ou de dépendance n’est pas respectée ;
* quelles parties du résultat sont concernées.

L’explication doit être courte, précise et basée sur les règles du Skill et les données fournies.

**2. Déterminer la règle à corriger**

Indiquer la règle existante qui n’a pas été respectée lorsque cela est possible.

Si le Skill ne contient pas de règle suffisante pour éviter cette erreur, proposer une **nouvelle règle à ajouter**.

Si une règle existante est trop faible ou ambiguë, proposer une **modification de cette règle**.

La proposition doit être formulée sous une forme directement réutilisable dans le Skill.

**3. Ne pas masquer l’erreur**

Ne pas présenter directement un nouveau résultat comme si le résultat précédent était correct.

Reconnaître explicitement l’incohérence détectée avant de proposer la correction.

**4. Proposer la reconstruction du résultat complet**

Après avoir expliqué le problème et proposé la règle à ajouter ou à modifier, proposer de **recalculer ou reconstruire le résultat complet** en appliquant la nouvelle règle.

La correction complète doit prendre en compte les dépendances entre les éléments concernés.

Exemple :

```text
Problème détecté :
Le Tuto 1 utilise une feuille CSS externe liée avec <link>,
mais la liaison HTML–CSS est enseignée dans le Tuto 2.

Règle concernée :
Aucune notion future ne doit être utilisée dans un tutoriel précédent.

Règle à ajouter :
[nouvelle règle]

Correction proposée :
Recalculer le plan des tutoriels et des itérations avec cette règle.

Résultat :
Une nouvelle version complète du plan peut être produite
après application de la correction.
```

**5. Conserver les éléments valides**

Lors de la reconstruction, conserver les éléments déjà corrects et modifier uniquement les éléments impactés par la correction.

Ne pas réorganiser inutilement l’ensemble du résultat.

**6. Vérification après correction**

Après reconstruction, vérifier à nouveau les dépendances, la progression pédagogique et la cohérence avec les données d’entrée.

La nouvelle version doit respecter **toutes les règles du Skill**, y compris la règle nouvellement ajoutée ou modifiée.

### Principe

> **Lorsqu’une erreur est détectée : expliquer → identifier la règle → proposer la règle à ajouter ou modifier → proposer la reconstruction complète → vérifier le nouveau résultat.**






## 1. Identité

Tu es **Le Rédacteur Pédagogique Spartel**, spécialiste de pédagogie active et de rédaction pédagogique pour la **Spartel Dev Academy**.

Tu produis des contenus **simples, professionnels, cohérents et directement utilisables** par les apprenants et les formateurs.

## 2. Mission

À partir des éléments validés du **Framework Spartel**, produire les contenus demandés sans modifier la structure pédagogique existante.

Respecter systématiquement :

**Session → Sprint → UA → Activité → Réalisation → Livrable**

Les **Sessions, Sprints, UA, Compétences, Domaines et Projets validés sont des données de référence**.

**Ne jamais les modifier, fusionner, supprimer ou renommer sans demande explicite.**

## 3. Principe pédagogique

Les contenus doivent permettre une progression :

**Comprendre → Reproduire → Expérimenter → Réaliser → Réutiliser**

Respecter le niveau demandé, les prérequis et les objectifs de l’apprenant.

Ne jamais introduire une notion importante sans vérifier qu’elle est cohérente avec les **UA et prérequis**.

## 4. Niveau N1

Le N1 correspond à un **apprenant débutant**.

L’approche est principalement :

**Observation → Compréhension → Imitation → Reproduction**

Le contenu doit permettre à l’apprenant de comprendre et reproduire une solution simple à partir d’un exemple.

## 5. Français

Les apprenants sont majoritairement francophones non natifs.

Le niveau de français cible est **A1–A2**, avec une préférence pour **A1 simple**.

Utiliser :

* des phrases courtes ;
* des mots courants ;
* une idée par phrase ;
* des verbes d’action ;
* une consigne par étape ;
* des explications concrètes ;
* les termes techniques nécessaires uniquement.

Éviter :

* les phrases longues ;
* les formulations académiques ;
* les synonymes complexes ;
* le vocabulaire inutile ;
* les explications abstraites.

Le français doit être **simple mais professionnel**.

## 6. Style

Privilégier :

**Clair · Court · Direct · Concret · Professionnel**

Exemples :

> Ouvrez le projet.
> Créez le fichier.
> Ajoutez le code.
> Testez le résultat.
> Vérifiez que la page fonctionne.

Éviter :

> Afin de procéder à la réalisation de cette étape, il convient dans un premier temps de...

## 7. Précision technique

La simplicité du français ne doit jamais réduire la précision technique.

Chaque notion technique doit être :

* utilisée correctement ;
* expliquée à son premier usage si elle est nouvelle ;
* adaptée au niveau de l’apprenant ;
* directement liée à l’objectif.

Ne pas ajouter de notions avancées uniquement pour enrichir le contenu.

## 8. Cohérence pédagogique

Chaque contenu doit être cohérent avec :

**Compétence → Domaine → UA → Sprint → Session → Projet**

Avant de rédiger, identifier :

* l’objectif ;
* le niveau ;
* les prérequis ;
* les notions à mobiliser ;
* la réalisation attendue ;
* le livrable attendu.

## 9. Orientation pratique

La pédagogie Spartel privilégie la **réalisation**.

Les explications théoriques doivent rester **courtes et utiles**.

Lorsqu’une activité pratique est demandée :

**Expliquer → Montrer → Faire réaliser → Tester → Vérifier**

Toujours préciser le **résultat attendu** lorsque cela est pertinent.

## 10. Glossaire

Tout contenu qui introduit plusieurs nouveaux termes techniques doit prévoir un **glossaire**.

Chaque définition doit être :

* courte ;
* simple ;
* exacte ;
* compréhensible par un débutant.

Format recommandé :

```text
- **Terme** : explication simple.
```

## 11. Livrables

Chaque travail demandé doit préciser, lorsque nécessaire :

* **Travail à faire**
* **Livrable**
* **Résultat attendu**
* **Critère de réussite**

Le livrable doit être concret et vérifiable.

## 12. Règle de cohérence

Ne jamais inventer une information pédagogique absente des données fournies lorsque celle-ci peut modifier le parcours.

En cas d'information manquante, faire une **hypothèse minimale et cohérente**, sans modifier les éléments validés.

## 13. Règle de sortie

Produire uniquement le contenu demandé par le Skill actif.

Respecter exactement :

* le format demandé ;
* la structure demandée ;
* les noms des éléments existants ;
* le vocabulaire du Framework Spartel.

Ne pas ajouter de sections inutiles.

## 14. Priorité des règles

En cas de conflit, appliquer cet ordre :

**1. Framework Spartel validé**
**2. Données de la Session / UA / Projet**
**3. Skill actif**
**4. Ces règles communes**
**5. Choix rédactionnels**

## 15. Règle fondamentale

> **Le contenu doit être simple pour l’apprenant, précis sur le plan technique et strictement cohérent avec le Framework Spartel.**















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

Les trois versions partagent **strictement la même structure** (mêmes parties, mêmes étapes, mêmes exercices). La seule différence réside dans la formulation et le niveau de détail des explications en français.

* **compact** : va droit à l'essentiel, consignes directes, sans texte superflu.
* **normal** : version standard, équilibrée entre explication pédagogique et concision.
* **detaille** : contient exactement les mêmes étapes et parties que la version compacte, mais offre des explications beaucoup plus développées, des phrases complètes et un niveau de détail pédagogique approfondi. Il n'ajoute **aucune** partie ou exercice supplémentaire.

Toutes les versions conservent impérativement :

**même structure · même objectif · mêmes prérequis · mêmes notions · même réalisation · même livrable · même résultat**

#### Création d'une version spécifique depuis un tutoriel existant

Lors de la déclinaison d'un tutoriel vers une version `compact`, `normal` ou `detaille`, appliquer strictement ces règles :
1. **Interdiction de modifier la structure** : Vous ne devez **jamais** ajouter, supprimer ou fusionner des étapes (que ce soit dans la théorie ou la pratique). L'intégralité des titres, sous-titres, exercices guidés et exercices individuels de la version d'origine doit être conservée à l'identique. Une modification de la structure ou des étapes n'est autorisée **que si le concepteur le demande explicitement** (ex: "modifier le tuto pour retirer l'exercice guidé").
2. **Compression ou Expansion textuelle** : 
   - Vers `compact` : Réduire les paragraphes en phrases très courtes ou tirets (sans supprimer l'étape). Transformer les consignes en listes directes.
   - Vers `detaille` : Développer les phrases en paragraphes très didactiques pour débutants, sans ajouter de nouveaux concepts ou de nouvelles étapes.
3. **Maintien des données** : Les tableaux de données, le code de départ, le livrable et les critères de réussite restent absolument identiques.
4. **Front Matter et nom de fichier** : 
   - Mettre à jour `version` avec la bonne valeur (`compact`, `normal`, ou `detaille`).
   - Mettre à jour le `permalink` (ex: `/tutos/:slug/compact`).
   - Sauvegarder dans un fichier avec le suffixe correspondant (ex: `-compact.md`).

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

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
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

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
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
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
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
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
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
<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
    src="{{'/code/blog/page-detaille-v1/page-detail-html-v1.tuto-3-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

## Partie 12 — Livrable, Exercices et Bilan

### Exercices de la Partie 2 (Pratique)

L'exercice doit laisser l'apprenant réfléchir. Ne jamais prémâcher le travail en donnant les "Réponses attendues" ou de longs exemples résolus avant l'exercice. 
Lors de la création d'un exercice :
1. Poser un **contexte clair** (ex: tableau de données, situation de départ).
2. Fournir un **tableau vide** ou une question directe.
3. Utiliser un **vocabulaire non ambigu** (ex: demander directement "Saisie ou visible ?" plutôt que le terme vague "Rôle").
4. Laisser l'apprenant produire seul son livrable.

### Le Livrable

Le livrable doit être concret et vérifiable.

**Format du Livrable :** Le livrable doit toujours proposer à l'apprenant le choix entre le format Markdown et le format Google Doc :
> Créez un document Markdown (ou un Google Doc) contenant vos réponses.

Lorsque nécessaire :

```markdown
**Travail à faire :**

[Travail.]

**Livrable :**

Créez un document Markdown (ou un Google Doc) contenant vos réponses.

**Résultat attendu :**

<button class="btn btn-primary btn-toggle-resultat">Afficher le résultat</button>
<iframe
    class="auto-wrapper tuto-resultat"
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


# Formation CSS N1 — Plan complet

### 1. Architecture pédagogique globale

La progression CSS est organisée autour de cinq transformations successives :

**Appliquer → Dimensionner → Disposer → Harmoniser → Adapter**

| Session | UA                                                         | Finalité                                |
| ------- | ---------------------------------------------------------- | --------------------------------------- |
| **S2**  | **UA.122.21 — Appliquer des règles CSS**                   | Découvrir et appliquer les bases du CSS |
| **S3**  | **UA.122.22 — Gérer les dimensions et les espacements**    | Construire des composants maîtrisés     |
| **S3**  | **UA.122.23 — Disposer les éléments avec CSS**             | Organiser les composants avec Flexbox   |
| **S7**  | **UA.122.24 — Harmoniser la présentation d’une interface** | Réutiliser et uniformiser les styles    |
| **S12** | **UA.122.25 — Adapter une interface aux écrans**           | Construire une interface responsive     |

---

## 2. S2 — UA.122.21 : Appliquer des règles CSS

Cette UA constitue le **socle fondamental**. Les tutoriels existants sont conservés exactement tels quels.

| Ordre | Identifiant     | Titre                     | Notions principales                                                                                          |
| ----: | --------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------ |
|     1 | **T.122.211**   | Syntaxe CSS               | règle CSS, sélecteur, propriété, valeur, déclaration, `;`, `{}`                                              |
|     2 | **T.122.212**   | Liaison HTML–CSS          | inline, interne, externe, `<link>`, `rel`, `href`                                                            |
|     3 | **T.122.213**   | Sélecteurs                | classe, groupement, descendant                                                                               |
|     4 | **T.122.214**   | Texte & Couleurs          | `font-family`, `font-size`, `font-weight`, `font-style`, `text-align`, `line-height`, couleurs hexadécimales |
|     5 | **T.122.215**   | Arrière-plans & Affichage | `background`, `background-color`, `display: block`, `inline`, `inline-block`, `padding`                      |
|     6 | **T.122.216**   | Liens & Listes            | sélecteurs descendants, `margin`, `padding` sur listes et liens                                              |
|     7 | **T.122.217**   | Dimensions                | `width`, `height`, `max-width`, image `width: 100%`, `object-fit: cover`                                     |
|     8 | **T.122.218**   | Espacements & Bordures    | `margin: auto`, raccourcis `margin`, marge négative, `padding`, `border`, `border-radius`                    |
|     9 | **T.122.219**   | Affichage CSS             | `display: none`, `display: block`, modification du comportement d’un élément                                 |
|    10 | **T.122.21.10** | Projet de Synthèse CSS    | réinvestissement global                                                                                      |

Le projet de synthèse existant va déjà assez loin : architecture top-down, styles globaux, images fluides, dimensions, espacements, bordures et composants éditoriaux. 

#### État des acquis à la fin de S2

L’apprenant sait déjà :

- écrire une règle CSS ;
- relier HTML et CSS ;
- sélectionner des éléments ;
- styliser texte, couleurs, liens et listes ;
- gérer `width`, `height`, `max-width` ;
- utiliser `margin`, `padding`, `border`, `border-radius` ;
- comprendre `block`, `inline`, `inline-block` et `none` ;
- mettre en forme une page complète.

**Il ne faut donc pas recommencer ces notions dans S3.**

---

## 3. S3 — UA.122.22 : Gérer les dimensions et les espacements

### Intention pédagogique

L’objectif n’est plus d’apprendre `width`, `margin` ou `padding` comme des propriétés isolées.

L’objectif devient :

> **Construire une carte d’article avec un dimensionnement cohérent et un espacement maîtrisé.**

Les notions réellement nouvelles sont surtout `box-sizing`, les contraintes de dimensionnement et `gap`.

| ID             | Titre                                          | Objectif d’apprentissage                                                                    | Notions techniques                                                               |
| -------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **T.122.221**  | Comprendre le dimensionnement réel d’une carte | Comprendre comment contenu, `padding` et `border` influencent la taille réelle d’un élément | Box Model, `box-sizing`, `content-box`, `border-box`                             |
| **T.122.222**  | Contraindre les dimensions d’une carte         | Maintenir des cartes dans des dimensions cohérentes                                         | `width`, `min-width`, `max-width`, `min-height`, application dans un composant   |
| **T.122.223**  | Organiser l’espace dans une carte              | Séparer clairement contenu, image, titre et texte                                           | `padding`, `margin`, raccourcis d’espacement                                     |
| **T.122.224**  | Espacer plusieurs éléments avec `gap`          | Gérer simplement les espaces entre plusieurs éléments                                       | `gap`, `row-gap`, `column-gap`                                                   |
| **T.122.225**  | Construire une carte d’article homogène        | Réunir dimensionnement, espace et bordure dans un composant réutilisable                    | `box-sizing`, `max-width`, `padding`, `margin`, `gap`, `border`, `border-radius` |
| **T.122.22.6** | Projet de synthèse — Cartes d’articles         | Appliquer les acquis à plusieurs cartes homogènes de la page d’accueil                      | synthèse de l’UA                                                                 |

#### Pourquoi ne pas refaire `width`, `margin` et `padding` ?

Parce qu’ils sont déjà réellement enseignés. Le tutoriel T.122.217 utilise notamment `width`, `height`, `max-width` et `object-fit`, tandis que T.122.218 couvre `margin`, `padding`, les raccourcis et les bordures. 

Dans S3, ces propriétés deviennent donc **des outils de réalisation**, pas de nouvelles connaissances à mémoriser.

---

## 4. S3 — UA.122.23 : Disposer les éléments avec CSS

### Intention pédagogique

C’est l’étape où l’apprenant découvre réellement **Flexbox**.

La progression doit rester très limitée aux propriétés utiles à la page d’accueil du Blog.

| ID            | Titre                                       | Objectif d’apprentissage                                     | Notions techniques                                    |
| ------------- | ------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------- |
| **T.122.231** | Découvrir Flexbox                           | Comprendre le principe d’un conteneur flexible               | `display: flex`, conteneur flex, éléments flex        |
| **T.122.232** | Choisir la direction des éléments           | Organiser les éléments horizontalement ou verticalement      | `flex-direction`, `row`, `column`                     |
| **T.122.233** | Répartir les éléments                       | Contrôler la position des éléments sur l’axe principal       | `justify-content`, `start`, `center`, `space-between` |
| **T.122.234** | Aligner les éléments                        | Contrôler l’alignement sur l’axe secondaire                  | `align-items`, axes principal et secondaire           |
| **T.122.235** | Faire passer les éléments à la ligne        | Construire plusieurs lignes de cartes                        | `flex-wrap`, `wrap`                                   |
| **T.122.236** | Espacer les éléments Flexbox                | Appliquer un espacement propre entre les cartes              | `gap` avec Flexbox                                    |
| **T.122.237** | Répartir l’espace entre les cartes          | Permettre à plusieurs cartes de partager l’espace disponible | `flex`, `flex-grow` niveau introductif                |
| **T.122.238** | Projet de synthèse — Disposition des cartes | Réaliser la disposition prévue pour la page d’accueil        | Flexbox complet                                       |

#### Compétence attendue

À la fin de l’UA, l’apprenant doit savoir réaliser des consignes du type :

> mettre les cartes sur une ligne ;

> centrer les éléments ;

> espacer les cartes ;

> faire passer les cartes à la ligne ;

> distribuer l’espace disponible.

Il n’est pas nécessaire d’introduire à ce stade `order`, `flex-basis`, des calculs complexes ou des cas avancés d’alignement.

---

## 5. S7 — UA.122.24 : Harmoniser la présentation d’une interface

### Intention pédagogique

Cette UA marque un changement important.

L’apprenant ne stylise plus seulement **une page** : il doit appliquer un **langage visuel commun** à plusieurs pages du Blog.

Les notions nouvelles doivent donc concerner principalement la réutilisation des règles CSS et la maîtrise de la cascade.

| ID             | Titre                                      | Objectif d’apprentissage                                 | Notions techniques                                             |
| -------------- | ------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------------------- |
| **T.122.241**  | Réutiliser une classe CSS                  | Appliquer le même style à plusieurs éléments             | classes réutilisables                                          |
| **T.122.242**  | Regrouper les règles communes              | Réduire les répétitions dans la feuille CSS              | sélecteurs groupés, règles communes                            |
| **T.122.243**  | Comprendre la cascade CSS                  | Comprendre pourquoi une règle est appliquée ou remplacée | cascade, ordre des règles, spécificité simple                  |
| **T.122.244**  | Comprendre l’héritage                      | Éviter de répéter certains styles sur tous les éléments  | héritage, propriétés héritées                                  |
| **T.122.245**  | Gérer les états d’un élément               | Donner un retour visuel aux interactions                 | `:hover`, `:focus`, pseudo-classes simples                     |
| **T.122.246**  | Centraliser les valeurs visuelles          | Réutiliser les couleurs et espacements communs           | variables CSS, `:root`, `--nom`, `var()`                       |
| **T.122.247**  | Construire des styles communs aux pages    | Harmoniser les pages Accueil, Détail et Catégories       | feuille CSS commune, classes communes, composants              |
| **T.122.24.8** | Projet de synthèse — Harmonisation du Blog | Uniformiser la présentation via des fichiers séparés     | `global.css`, `layout.css`, `components.css`, balises `<link>` |

#### Règles strictes à appliquer en S7

*   **Les Variables CSS (`:root`)** : À partir de S7, l'utilisation des variables pour le thème (couleur primaire, fond, texte) est **obligatoire**. Aucune couleur en dur ne doit être tolérée dans le code.
*   **Organisation physique des fichiers** : Lors du projet de synthèse, l'apprenant doit être guidé pour séparer son CSS en plusieurs fichiers distincts (`global.css`, `layout.css`, `components.css`) reliés via plusieurs balises `<link>` ou `@import`. Cela prépare au travail modulaire de la S12.

#### Pourquoi cette UA est placée en S7

L’apprenant doit d’abord savoir **faire fonctionner une page** et **organiser ses éléments** avant de lui demander :

> « Comment éviter de refaire trois fois le même CSS ? »

C’est ici que le CSS commence à être perçu comme un **code réutilisable et maintenable**.

---

## 6. S12 — UA.122.25 : Adapter une interface aux écrans

### Intention pédagogique

Le responsive arrive en dernier parce qu’il repose sur les acquis précédents :

**dimensions → espacements → Flexbox → composants réutilisables.**

| ID            | Titre                                       | Objectif d’apprentissage                                        | Notions techniques                                                 |
| ------------- | ------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------ |
| **T.122.251** | Comprendre l’espace disponible              | Comprendre pourquoi une interface doit changer selon la largeur | viewport, largeur disponible, interface fluide                     |
| **T.122.252** | Utiliser des dimensions relatives           | Éviter certaines dimensions rigides                             | `%`, `rem`, `vw` à niveau introductif                              |
| **T.122.253** | Découvrir les Media Queries                 | Appliquer des styles selon la largeur de l’écran                | `@media`, `min-width`, `max-width`                                 |
| **T.122.254** | Adapter le conteneur et les espacements     | Faire évoluer les dimensions d’une interface                    | `max-width`, `padding`, `margin`, unités relatives + media queries |
| **T.122.255** | Adapter les cartes aux petits écrans        | Transformer la disposition pour mobile                          | Flexbox + media query                                              |
| **T.122.256** | Construire une disposition mobile et bureau | Passer d’une organisation mobile à une organisation bureau      | `flex-direction`, `flex-wrap`, `gap`, largeur des cartes           |
| **T.122.257** | Adopter une approche mobile-first           | Construire les styles à partir du petit écran                   | styles de base mobile, `min-width`, breakpoint                     |
| **T.122.258** | Projet de synthèse — Blog responsive        | Adapter la page d’accueil aux écrans mobile et bureau           | responsive complet                                                 |

#### Ce qui n’est pas nécessaire en N1

Je ne mettrais pas dans cette UA :

- CSS Grid ;
- `clamp()` ;
- container queries ;
- responsive avancé des images ;
- architecture CSS complexe ;
- animations responsive complexes.

Ces notions peuvent être introduites plus tard.

---

## 7. Vue complète du parcours

```text
S2
└── UA.122.21 — Appliquer des règles CSS
    ├── T.122.211  Syntaxe CSS
    ├── T.122.212  Liaison HTML–CSS
    ├── T.122.213  Sélecteurs
    ├── T.122.214  Texte & Couleurs
    ├── T.122.215  Arrière-plans & Affichage
    ├── T.122.216  Liens & Listes
    ├── T.122.217  Dimensions
    ├── T.122.218  Espacements & Bordures
    ├── T.122.219  Affichage CSS
    └── T.122.21.10 Projet de Synthèse CSS

S3
├── UA.122.22 — Gérer les dimensions et les espacements
│   ├── T.122.221  Dimensionnement réel
│   ├── T.122.222  Contraintes de dimensions
│   ├── T.122.223  Espace dans une carte
│   ├── T.122.224  Espacement avec gap
│   ├── T.122.225  Carte d’article homogène
│   └── T.122.22.6 Synthèse
│
└── UA.122.23 — Disposer les éléments avec CSS
    ├── T.122.231  Découvrir Flexbox
    ├── T.122.232  Direction
    ├── T.122.233  Répartition
    ├── T.122.234  Alignement
    ├── T.122.235  Retour à la ligne
    ├── T.122.236  Espacement Flexbox
    ├── T.122.237  Taille flexible
    └── T.122.238 Synthèse

S7
└── UA.122.24 — Harmoniser la présentation d’une interface
    ├── T.122.241  Réutiliser une classe
    ├── T.122.242  Règles communes
    ├── T.122.243  Cascade
    ├── T.122.244  Héritage
    ├── T.122.245  États
    ├── T.122.246  Variables CSS
    ├── T.122.247  Styles communs
    └── T.122.24.8 Synthèse

S12
└── UA.122.25 — Adapter une interface aux écrans
    ├── T.122.251  Espace disponible
    ├── T.122.252  Dimensions relatives
    ├── T.122.253  Media Queries
    ├── T.122.254  Conteneur et espacements adaptatifs
    ├── T.122.255  Cartes mobiles
    ├── T.122.256  Mobile / Bureau
    ├── T.122.257  Mobile-first
    └── T.122.258 Synthèse
```

---

## 8. Progression des compétences

| Étape         | Question que sait résoudre l’apprenant                                 |
| ------------- | ---------------------------------------------------------------------- |
| **UA.122.21** | « Comment appliquer un style à mon HTML ? »                            |
| **UA.122.22** | « Comment donner une taille et un espace cohérents à ma carte ? »      |
| **UA.122.23** | « Comment placer plusieurs cartes correctement ? »                     |
| **UA.122.24** | « Comment garder le même style sur plusieurs pages ? »                 |
| **UA.122.25** | « Comment faire fonctionner la même interface sur plusieurs écrans ? » |

La progression devient donc :

**Règle CSS → Composant → Layout → Système visuel → Responsive**

---

## 9. Principe N1 à appliquer à tous les nouveaux tutoriels

Chaque tutoriel doit rester centré sur **une transformation visible**.

La structure recommandée reste :

**Je vois → Je comprends → Je reproduis → Je teste → Je présente**

Et chaque notion doit être introduite parce qu’elle sert immédiatement la réalisation du Blog.

Exemple :

```css
.card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

L’apprenant ne mémorise pas seulement :

`display`, `flex-wrap`, `gap`.

Il comprend :

> « Je transforme cette liste de cartes pour qu’elles puissent se placer sur plusieurs lignes avec un espace régulier. »

---

## 10. Point de vigilance sur T.122.21.10

Le tutoriel existant T.122.21.10 est rédigé comme une **validation de l’ensemble du module CSS** et indique comme prérequis la maîtrise des tutoriels 1 à 9.

Comme il est déclaré **intouchable**, je ne recommande pas de le modifier.

Dans le référentiel pédagogique, il est simplement préférable de l'interpréter comme :

**« Projet de synthèse du socle CSS — UA.122.21 »**

et non comme la validation finale de toutes les compétences CSS du parcours.

La validation finale du CSS sera alors portée par les travaux de **S3, S7 et S12**, avec réutilisation progressive des acquis.



# Le livrable de S3


d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\css\components.css
---
/* =========================================================
   COMPONENTS (components.css)
   Composants réutilisables : Boutons, Cartes, Étiquettes
========================================================= */

/* BOUTONS */
.bouton-principal {
    display: inline-block;
    padding: 10px 18px;
    color: white;
    background: var(--couleur-primaire);
    border-radius: 8px;
}

.bouton-principal:hover {
    background: var(--couleur-primaire-hover);
}

.bouton-secondaire {
    display: inline-block;
    padding: 10px 18px;
    color: var(--couleur-texte);
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 8px;
}

.bouton-secondaire:hover {
    color: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}


/* CARTES D'ARTICLES */
.carte-article {
    flex: 1;
    overflow: hidden;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 16px;
}

.carte-image {
    display: block;
}

.carte-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.carte-contenu {
    padding: 20px;
}

.carte-contenu h3 {
    margin: 0;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 20px;
    line-height: 1.4;
}

.carte-contenu p {
    margin: 12px 0;
    color: var(--couleur-secondaire);
    font-size: 14px;
    line-height: 1.7;
}

.carte-meta {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 16px;
    color: #9ca3af;
    font-size: 12px;
    border-top: 1px solid #f3f4f6;
}


/* ÉTIQUETTES CATÉGORIE (BADGES) */
.etiquette-categorie {
    display: inline-block;
    margin: 16px 16px 0;
    padding: 6px 10px;
    font-size: 11px;
    font-weight: 700;
    background: #f0f6ff;
    border-radius: 99px;
}

.etiquette-categorie.bleu { color: #1c5bba; }
.etiquette-categorie.rose { color: #db2777; background: #fdf2f8; }
.etiquette-categorie.vert { color: #059669; background: #ecfdf5; }

/* Filtres de catégorie (Pilules) */
.pilule-filtre {
    padding: 10px 16px;
    color: #4b5563;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 8px;
}

.pilule-filtre:hover {
    color: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}

.pilule-filtre.actif {
    color: white;
    background: var(--couleur-titre);
}

/* PAGINATION */
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 64px;
}

.bouton-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: var(--couleur-secondaire);
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 50%;
    font-weight: 500;
}

.bouton-pagination:hover {
    color: var(--couleur-primaire);
    background: #f0f6ff;
    border-color: #e0edff;
}

.bouton-pagination.actif {
    color: white;
    background: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\css\global.css
---
/* =========================================================
   GLOBAL (global.css)
   Variables natives, polices, reset basique
========================================================= */

:root {
    --couleur-texte: #1f2937;
    --couleur-fond: #f9fafb;
    --couleur-primaire: #2673e8;
    --couleur-primaire-hover: #1c5bba;
    --couleur-secondaire: #6b7280;
    --couleur-titre: #111827;
    --couleur-bordure: #e5e7eb;
}

body {
    margin: 0;
    color: var(--couleur-texte);
    background: var(--couleur-fond);
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\css\layout.css
---
/* =========================================================
   LAYOUT (layout.css)
   En-tête et pied de page communs à toutes les pages
========================================================= */

/* EN-TÊTE DU SITE (HEADER) */
.en-tete-site {
    padding: 20px 24px;
    background: white;
    border-bottom: 1px solid var(--couleur-bordure);
}

.barre-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    font-family: Georgia, serif;
    font-size: 22px;
    font-weight: 900;
}

.logo-sombre {
    color: var(--couleur-titre);
}

.logo-couleur {
    color: var(--couleur-primaire);
}

.liens-navigation {
    display: flex;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.liens-navigation a {
    color: var(--couleur-secondaire);
    font-size: 14px;
}

.liens-navigation a:hover {
    color: var(--couleur-primaire);
}


/* PIED DE PAGE (FOOTER) */
.pied-de-page {
    margin-top: 80px;
    padding: 48px 24px 24px;
    background: white;
    border-top: 1px solid var(--couleur-bordure);
}

.conteneur-pied-de-page {
    display: flex;
    justify-content: space-between;
    gap: 48px;
    max-width: 1200px;
    margin: 0 auto;
}

.colonne-pied-de-page {
    flex: 1;
}

.colonne-pied-de-page h2 {
    margin: 0 0 16px;
    color: var(--couleur-titre);
    font-size: 16px;
}

.colonne-pied-de-page p {
    max-width: 320px;
    margin: 0;
    color: var(--couleur-secondaire);
    font-size: 14px;
    line-height: 1.7;
}

.colonne-pied-de-page ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.colonne-pied-de-page li {
    margin-bottom: 10px;
}

.colonne-pied-de-page a {
    color: var(--couleur-secondaire);
    font-size: 14px;
}

.colonne-pied-de-page a:hover {
    color: var(--couleur-primaire);
}

.bas-pied-de-page {
    max-width: 1200px;
    margin: 40px auto 0;
    padding-top: 20px;
    text-align: center;
    border-top: 1px solid var(--couleur-bordure);
}

.bas-pied-de-page p {
    margin: 0;
    color: #9ca3af;
    font-size: 12px;
}

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\css\pages.css
---
/* =========================================================
   PAGES (pages.css)
   Styles spécifiques aux différentes pages
========================================================= */

/* PAGE ACCUEIL : BANNIÈRE (HERO) */
.banniere-accueil {
    padding: 96px 24px;
    text-align: center;
    background: #ffffff;
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 24px 24px;
}

.banniere-accueil h1 {
    max-width: 850px;
    margin: 0 auto;
    color: #0a2042;
    font-family: Georgia, serif;
    font-size: 56px;
    font-weight: 900;
    line-height: 1.15;
}

.banniere-accueil h1 span {
    color: var(--couleur-primaire);
}

.banniere-accueil p {
    max-width: 680px;
    margin: 24px auto 0;
    color: var(--couleur-secondaire);
    font-size: 17px;
    line-height: 1.7;
}

.actions-banniere {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 28px;
}

/* PAGE ACCUEIL : SECTION ARTICLES */
.section-articles {
    padding: 80px 24px;
}

.conteneur-articles {
    max-width: 1200px;
    margin: 0 auto;
}

.filtre-categories {
    margin-bottom: 64px;
}

.filtre-categories h2 {
    margin: 0 0 20px;
    color: var(--couleur-titre);
    font-size: 18px;
}

.liste-filtres {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.entete-liste-articles {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 32px;
}

.entete-liste-articles h2 {
    margin: 0;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 32px;
}

.entete-liste-articles p {
    margin: 8px 0 0;
    color: var(--couleur-secondaire);
}

.lien-voir-tout {
    color: var(--couleur-primaire);
    font-size: 14px;
    font-weight: 600;
}

.grille-articles {
    display: flex;
    gap: 24px;
}


/* PAGE DÉTAIL ARTICLE */
.entete-article-detail {
    padding: 96px 24px 64px;
    background: var(--couleur-fond);
    text-align: center;
}

.entete-article-detail h1 {
    margin: 0 auto;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 50px;
    line-height: 1.15;
}

.auteur-article {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
}

.auteur-article img {
    display: inline-block;
    width: 44px;
    height: 44px;
    border: 2px solid white;
    border-radius: 50%;
}

.auteur-article span {
    display: block;
    color: #9ca3af;
    font-size: 12px;
}

.couverture-article {
    height: 250px;
    margin: 0;
}

.couverture-article img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.conteneur-principal-article {
    max-width: 920px;
    margin: -100px auto 80px;
    padding: 0 24px;
}

.corps-article {
    padding: 110px 80px;
    color: var(--couleur-texte);
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 40px;
    font-size: 16px;
}

.corps-article h2,
.corps-article h3 {
    color: #0a2042;
    font-family: Georgia, serif;
    font-weight: 900;
    line-height: 1.3;
}

.corps-article h2 { margin: 0 0 24px; font-size: 32px; }
.corps-article h3 { margin: 48px 0 20px; font-size: 22px; }

.corps-article p { margin: 0 0 24px; }
.corps-article ul { margin: 0 0 24px; padding-left: 24px; }
.corps-article li { margin-bottom: 12px; }
.corps-article strong { color: var(--couleur-titre); }

.corps-article code {
    padding: 3px 7px;
    color: #0a2042;
    background: #f0f6ff;
    border-radius: 5px;
    font-family: monospace;
    font-size: 14px;
}

.figure-article { margin: 32px 0; }
.figure-article img { width: 100%; border-radius: 16px; }
.figure-article figcaption {
    margin-top: 10px;
    color: var(--couleur-secondaire);
    font-size: 13px;
    text-align: center;
}

.citation-article {
    margin: 40px 0;
    padding: 24px 28px;
    color: #4b5563;
    background: #f0f6ff;
    border-left: 4px solid var(--couleur-primaire);
    border-radius: 0 12px 12px 0;
}

.citation-article p { margin: 0; font-style: italic; }
.citation-article cite {
    display: block;
    margin-top: 12px;
    color: var(--couleur-secondaire);
    font-size: 13px;
    font-style: normal;
}

/* EN-TÊTE DE PAGE SIMPLE (Ex: À Propos, Catégorie) */
.entete-page-simple {
    padding: 96px 24px;
    text-align: center;
    background: white;
    border-bottom: 1px solid var(--couleur-bordure);
}

.entete-page-simple .etiquette {
    display: inline-block;
    margin-bottom: 16px;
    padding: 6px 16px;
    color: var(--couleur-secondaire);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 99px;
}

.entete-page-simple h1 {
    margin: 0 0 24px;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 48px;
    font-weight: 900;
}

.entete-page-simple p {
    max-width: 680px;
    margin: 0 auto;
    color: var(--couleur-secondaire);
    font-size: 18px;
    line-height: 1.7;
}

/* PHOTO DE PROFIL (À Propos) */
.photo-profil {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto 48px;
    object-fit: cover;
    border: 4px solid white;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\css\style.css
---
/* =========================================================
   COMPONENTS (components.css)
   Composants réutilisables : Boutons, Cartes, Étiquettes
========================================================= */

/* BOUTONS */
.bouton-principal {
    display: inline-block;
    padding: 10px 18px;
    color: white;
    background: var(--couleur-primaire);
    border-radius: 8px;
}

.bouton-principal:hover {
    background: var(--couleur-primaire-hover);
}

.bouton-secondaire {
    display: inline-block;
    padding: 10px 18px;
    color: var(--couleur-texte);
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 8px;
}

.bouton-secondaire:hover {
    color: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}


/* CARTES D'ARTICLES */
.carte-article {
    flex: 1;
    overflow: hidden;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 16px;
}

.carte-image {
    display: block;
}

.carte-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.carte-contenu {
    padding: 20px;
}

.carte-contenu h3 {
    margin: 0;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 20px;
    line-height: 1.4;
}

.carte-contenu p {
    margin: 12px 0;
    color: var(--couleur-secondaire);
    font-size: 14px;
    line-height: 1.7;
}

.carte-meta {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 16px;
    color: #9ca3af;
    font-size: 12px;
    border-top: 1px solid #f3f4f6;
}


/* ÉTIQUETTES CATÉGORIE (BADGES) */
.etiquette-categorie {
    display: inline-block;
    margin: 16px 16px 0;
    padding: 6px 10px;
    font-size: 11px;
    font-weight: 700;
    background: #f0f6ff;
    border-radius: 99px;
}

.etiquette-categorie.bleu { color: #1c5bba; }
.etiquette-categorie.rose { color: #db2777; background: #fdf2f8; }
.etiquette-categorie.vert { color: #059669; background: #ecfdf5; }

/* Filtres de catégorie (Pilules) */
.pilule-filtre {
    padding: 10px 16px;
    color: #4b5563;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 8px;
}

.pilule-filtre:hover {
    color: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}

.pilule-filtre.actif {
    color: white;
    background: var(--couleur-titre);
}

/* PAGINATION */
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 64px;
}

.bouton-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: var(--couleur-secondaire);
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 50%;
    font-weight: 500;
}

.bouton-pagination:hover {
    color: var(--couleur-primaire);
    background: #f0f6ff;
    border-color: #e0edff;
}

.bouton-pagination.actif {
    color: white;
    background: var(--couleur-primaire);
    border-color: var(--couleur-primaire);
}
/* =========================================================
   GLOBAL (global.css)
   Variables natives, polices, reset basique
========================================================= */

:root {
    --couleur-texte: #1f2937;
    --couleur-fond: #f9fafb;
    --couleur-primaire: #2673e8;
    --couleur-primaire-hover: #1c5bba;
    --couleur-secondaire: #6b7280;
    --couleur-titre: #111827;
    --couleur-bordure: #e5e7eb;
}

body {
    margin: 0;
    color: var(--couleur-texte);
    background: var(--couleur-fond);
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}
/* =========================================================
   LAYOUT (layout.css)
   En-tête et pied de page communs à toutes les pages
========================================================= */

/* EN-TÊTE DU SITE (HEADER) */
.en-tete-site {
    padding: 20px 24px;
    background: white;
    border-bottom: 1px solid var(--couleur-bordure);
}

.barre-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    font-family: Georgia, serif;
    font-size: 22px;
    font-weight: 900;
}

.logo-sombre {
    color: var(--couleur-titre);
}

.logo-couleur {
    color: var(--couleur-primaire);
}

.liens-navigation {
    display: flex;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.liens-navigation a {
    color: var(--couleur-secondaire);
    font-size: 14px;
}

.liens-navigation a:hover {
    color: var(--couleur-primaire);
}


/* PIED DE PAGE (FOOTER) */
.pied-de-page {
    margin-top: 80px;
    padding: 48px 24px 24px;
    background: white;
    border-top: 1px solid var(--couleur-bordure);
}

.conteneur-pied-de-page {
    display: flex;
    justify-content: space-between;
    gap: 48px;
    max-width: 1200px;
    margin: 0 auto;
}

.colonne-pied-de-page {
    flex: 1;
}

.colonne-pied-de-page h2 {
    margin: 0 0 16px;
    color: var(--couleur-titre);
    font-size: 16px;
}

.colonne-pied-de-page p {
    max-width: 320px;
    margin: 0;
    color: var(--couleur-secondaire);
    font-size: 14px;
    line-height: 1.7;
}

.colonne-pied-de-page ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.colonne-pied-de-page li {
    margin-bottom: 10px;
}

.colonne-pied-de-page a {
    color: var(--couleur-secondaire);
    font-size: 14px;
}

.colonne-pied-de-page a:hover {
    color: var(--couleur-primaire);
}

.bas-pied-de-page {
    max-width: 1200px;
    margin: 40px auto 0;
    padding-top: 20px;
    text-align: center;
    border-top: 1px solid var(--couleur-bordure);
}

.bas-pied-de-page p {
    margin: 0;
    color: #9ca3af;
    font-size: 12px;
}
/* =========================================================
   PAGES (pages.css)
   Styles spécifiques aux différentes pages
========================================================= */

/* PAGE ACCUEIL : BANNIÈRE (HERO) */
.banniere-accueil {
    padding: 96px 24px;
    text-align: center;
    background: #ffffff;
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 24px 24px;
}

.banniere-accueil h1 {
    max-width: 850px;
    margin: 0 auto;
    color: #0a2042;
    font-family: Georgia, serif;
    font-size: 56px;
    font-weight: 900;
    line-height: 1.15;
}

.banniere-accueil h1 span {
    color: var(--couleur-primaire);
}

.banniere-accueil p {
    max-width: 680px;
    margin: 24px auto 0;
    color: var(--couleur-secondaire);
    font-size: 17px;
    line-height: 1.7;
}

.actions-banniere {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 28px;
}

/* PAGE ACCUEIL : SECTION ARTICLES */
.section-articles {
    padding: 80px 24px;
}

.conteneur-articles {
    max-width: 1200px;
    margin: 0 auto;
}

.filtre-categories {
    margin-bottom: 64px;
}

.filtre-categories h2 {
    margin: 0 0 20px;
    color: var(--couleur-titre);
    font-size: 18px;
}

.liste-filtres {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.entete-liste-articles {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 32px;
}

.entete-liste-articles h2 {
    margin: 0;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 32px;
}

.entete-liste-articles p {
    margin: 8px 0 0;
    color: var(--couleur-secondaire);
}

.lien-voir-tout {
    color: var(--couleur-primaire);
    font-size: 14px;
    font-weight: 600;
}

.grille-articles {
    display: flex;
    gap: 24px;
}


/* PAGE DÉTAIL ARTICLE */
.entete-article-detail {
    padding: 96px 24px 64px;
    background: var(--couleur-fond);
    text-align: center;
}

.entete-article-detail h1 {
    margin: 0 auto;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 50px;
    line-height: 1.15;
}

.auteur-article {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
}

.auteur-article img {
    display: inline-block;
    width: 44px;
    height: 44px;
    border: 2px solid white;
    border-radius: 50%;
}

.auteur-article span {
    display: block;
    color: #9ca3af;
    font-size: 12px;
}

.couverture-article {
    height: 250px;
    margin: 0;
}

.couverture-article img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.conteneur-principal-article {
    max-width: 920px;
    margin: -100px auto 80px;
    padding: 0 24px;
}

.corps-article {
    padding: 110px 80px;
    color: var(--couleur-texte);
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 40px;
    font-size: 16px;
}

.corps-article h2,
.corps-article h3 {
    color: #0a2042;
    font-family: Georgia, serif;
    font-weight: 900;
    line-height: 1.3;
}

.corps-article h2 { margin: 0 0 24px; font-size: 32px; }
.corps-article h3 { margin: 48px 0 20px; font-size: 22px; }

.corps-article p { margin: 0 0 24px; }
.corps-article ul { margin: 0 0 24px; padding-left: 24px; }
.corps-article li { margin-bottom: 12px; }
.corps-article strong { color: var(--couleur-titre); }

.corps-article code {
    padding: 3px 7px;
    color: #0a2042;
    background: #f0f6ff;
    border-radius: 5px;
    font-family: monospace;
    font-size: 14px;
}

.figure-article { margin: 32px 0; }
.figure-article img { width: 100%; border-radius: 16px; }
.figure-article figcaption {
    margin-top: 10px;
    color: var(--couleur-secondaire);
    font-size: 13px;
    text-align: center;
}

.citation-article {
    margin: 40px 0;
    padding: 24px 28px;
    color: #4b5563;
    background: #f0f6ff;
    border-left: 4px solid var(--couleur-primaire);
    border-radius: 0 12px 12px 0;
}

.citation-article p { margin: 0; font-style: italic; }
.citation-article cite {
    display: block;
    margin-top: 12px;
    color: var(--couleur-secondaire);
    font-size: 13px;
    font-style: normal;
}

/* EN-TÊTE DE PAGE SIMPLE (Ex: À Propos, Catégorie) */
.entete-page-simple {
    padding: 96px 24px;
    text-align: center;
    background: white;
    border-bottom: 1px solid var(--couleur-bordure);
}

.entete-page-simple .etiquette {
    display: inline-block;
    margin-bottom: 16px;
    padding: 6px 16px;
    color: var(--couleur-secondaire);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    background: white;
    border: 1px solid var(--couleur-bordure);
    border-radius: 99px;
}

.entete-page-simple h1 {
    margin: 0 0 24px;
    color: var(--couleur-titre);
    font-family: Georgia, serif;
    font-size: 48px;
    font-weight: 900;
}

.entete-page-simple p {
    max-width: 680px;
    margin: 0 auto;
    color: var(--couleur-secondaire);
    font-size: 18px;
    line-height: 1.7;
}

/* PHOTO DE PROFIL (À Propos) */
.photo-profil {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto 48px;
    object-fit: cover;
    border: 4px solid white;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\public-article.html
---
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le métier de développeur - Détail</title>
    <!-- CSS Organisé pour N1 -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
</head>
<body>
    
    <!-- =====================================================
         MENU (EN-TÊTE)
    ====================================================== -->
    <header class="en-tete-site">
        <nav class="barre-navigation">
            <a href="public-index.html" class="logo">
                <span class="logo-sombre">Mon</span><span class="logo-couleur">Blog.</span>
            </a>
            <ul class="liens-navigation">
                <li><a href="public-index.html">Accueil</a></li>
                <li><a href="public-categorie.html">Catégories</a></li>
                <li><a href="public-apropos.html">À propos</a></li>
            </ul>
            <a href="admin-login.html" class="bouton-principal">
                Espace Admin
            </a>
        </nav>
    </header>

    <!-- =====================================================
         CONTENU DE L'ARTICLE
    ====================================================== -->
    <article>
        <header class="entete-article-detail">
            <span class="etiquette-categorie bleu">
                Développement
            </span>
            <h1>Le métier de développeur et ses principales missions</h1>
            
            <div class="auteur-article">
                <img src="images/author.jpg" alt="Portrait d'un développeur">
                <div>
                    <strong>Madani Ali</strong>
                    <span>Auteur du blog</span>
                </div>
            </div>
            
            <div style="margin-top:20px; color:#6b7280; font-size:14px;">
                <time datetime="2026-02-14">14 Février 2026</time> • <span>5 min de lecture</span>
            </div>
        </header>

        <figure class="couverture-article">
            <img src="images/article-cover.png" alt="Écran montrant du code informatique">
        </figure>

        <main class="conteneur-principal-article">
            <section class="corps-article">
                <h2>Le rôle du développeur</h2>
                <p>
                    Le développeur crée des applications.
                    Il transforme un besoin en solution informatique.
                    Son travail se fait en plusieurs étapes.
                    Il doit bien comprendre le projet.
                </p>
                <p>
                    La première mission est d'analyser le besoin.
                    Le développeur cherche les fonctionnalités nécessaires.
                    Il étudie les informations à utiliser.
                    Il peut aussi analyser une base de données.
                </p>
                
                <h3>Réaliser l'application</h3>
                <figure class="figure-article">
                    <img src="images/article-example.png" alt="Développeur écrivant du code">
                    <figcaption>Le développeur écrit le code de l'application.</figcaption>
                </figure>
                
                <blockquote class="citation-article">
                    <p>
                        Le développeur réalise l'application à partir du besoin.
                        Il utilise des technologies comme HTML, CSS et JavaScript.
                        Il organise son code et crée les fonctionnalités demandées.
                    </p>
                    <cite>— Métier de développeur</cite>
                </blockquote>
                
                <p>
                    Après la réalisation, le développeur doit vérifier l'application.
                    Il réalise des tests pour trouver les erreurs.
                    Il fait aussi du débogage pour corriger le code.
                </p>
                
                <ul>
                    <li><strong>Analyser le besoin</strong> : comprendre le projet et identifier les fonctionnalités.</li>
                    <li><strong>Réaliser l'application</strong> : écrire le code et développer les fonctionnalités.</li>
                    <li><strong>Vérifier l'application</strong> : tester l'application et corriger les erreurs.</li>
                    <li><strong>Déployer l'application</strong> : mettre l'application sur un serveur pour la rendre disponible.</li>
                </ul>
                
                <h3>Travailler en équipe</h3>
                <p>
                    Le développeur travaille aussi avec une équipe.
                    Il échange avec les autres membres du projet.
                    Il partage son code et ses informations.
                    Il participe aux différentes étapes du projet.
                    La collaboration est importante pour réussir le projet.
                </p>
            </section>
        </main>
    </article>

    <!-- =====================================================
         PIED DE PAGE (FOOTER)
    ====================================================== -->
    <footer class="pied-de-page">
        <div class="conteneur-pied-de-page">
            <div class="colonne-pied-de-page">
                <h2>Mon Blog</h2>
                <p>Partager des connaissances, des tutoriels et des découvertes sur le développement web.</p>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="public-index.html">Accueil</a></li>
                    <li><a href="public-categorie.html">Catégories</a></li>
                    <li><a href="public-apropos.html">À propos</a></li>
                </ul>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Contact</h2>
                <p>Retrouvez les nouveaux articles chaque semaine.</p>
            </div>
        </div>
        <div class="bas-pied-de-page">
            <p>&copy; 2026 Mon Blog Personnel.</p>
        </div>
    </footer>

</body>
</html>

---

d:\spartelskills\05_contenu\contenu.n1.blog\app-sessions\S3\public-index.html
---
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Blog Personnel - Accueil</title>
    <!-- CSS Organisé pour N1 -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
</head>
<body>

    <!-- =====================================================
         MENU (EN-TÊTE)
    ====================================================== -->
    <header class="en-tete-site">
        <nav class="barre-navigation">
            <a href="public-index.html" class="logo">
                <span class="logo-sombre">Mon</span><span class="logo-couleur">Blog.</span>
            </a>
            <ul class="liens-navigation">
                <li><a href="public-index.html">Accueil</a></li>
                <li><a href="public-categorie.html">Catégories</a></li>
                <li><a href="public-apropos.html">À propos</a></li>
            </ul>
            <a href="admin-login.html" class="bouton-principal">
                Espace Admin
            </a>
        </nav>
    </header>

    <!-- =====================================================
         BANNIÈRE (HERO)
    ====================================================== -->
    <section class="banniere-accueil">
        <h1>
            Mon Blog Personnel :<br>
            <span>Développer &amp; Partager</span>
        </h1>
        <p>
            Découvrez mes derniers articles sur le développement web,
            l'architecture logicielle et les bonnes pratiques
            d'intégration UI/UX.
        </p>
        <div class="actions-banniere">
            <a href="#articles" class="bouton-principal">Lire les articles</a>
            <a href="public-apropos.html" class="bouton-secondaire">À propos de moi</a>
        </div>
    </section>

    <!-- =====================================================
         ARTICLES
    ====================================================== -->
    <section id="articles" class="section-articles">
        <div class="conteneur-articles">

            <!-- CATÉGORIES -->
            <section class="filtre-categories">
                <h2>Explorer par thème</h2>
                <div class="liste-filtres">
                    <a href="public-index.html" class="pilule-filtre actif">Tous les articles</a>
                    <a href="public-categorie.html" class="pilule-filtre">Développement</a>
                    <a href="public-categorie.html" class="pilule-filtre">Design UI/UX</a>
                    <a href="public-categorie.html" class="pilule-filtre">Productivité</a>
                    <a href="public-categorie.html" class="pilule-filtre">Management</a>
                </div>
            </section>

            <!-- EN-TÊTE DES ARTICLES -->
            <div class="entete-liste-articles">
                <div>
                    <h2>Dernières publications</h2>
                    <p>Les articles les plus récents de la communauté.</p>
                </div>
                <a href="public-categorie.html" class="lien-voir-tout">Explorer tout</a>
            </div>

            <!-- CARTES D'ARTICLES -->
            <div class="grille-articles">

                <!-- Article 1 -->
                <div class="carte-article">
                    <a href="public-article.html" class="carte-image">
                        <img src="images/article-example.png" alt="Code source affiché sur un écran">
                    </a>
                    <span class="etiquette-categorie bleu">Développement</span>
                    <div class="carte-contenu">
                        <h3><a href="public-article.html">Comment bien débuter avec Tailwind CSS en 2026 ?</a></h3>
                        <p>Découvrez les concepts fondamentaux de Tailwind CSS et pourquoi cette approche utilitaire est devenue le standard de l'industrie.</p>
                        <div class="carte-meta">
                            <span>14 Fév 2026</span>
                            <span>5 min</span>
                        </div>
                    </div>
                </div>

                <!-- Article 2 -->
                <div class="carte-article">
                    <a href="public-article.html" class="carte-image">
                        <img src="images/article-example.png" alt="Interface utilisateur moderne">
                    </a>
                    <span class="etiquette-categorie rose">UI / UX</span>
                    <div class="carte-contenu">
                        <h3><a href="public-article.html">L'importance des micro-interactions</a></h3>
                        <p>Une interface belle n'est pas suffisante. Comprendre comment animer de petites actions peut transformer l'expérience utilisateur.</p>
                        <div class="carte-meta">
                            <span>10 Fév 2026</span>
                            <span>3 min</span>
                        </div>
                    </div>
                </div>

                <!-- Article 3 -->
                <div class="carte-article">
                    <a href="public-article.html" class="carte-image">
                        <img src="images/article-example.png" alt="Équipe de développeurs en réunion">
                    </a>
                    <span class="etiquette-categorie vert">Management</span>
                    <div class="carte-contenu">
                        <h3><a href="public-article.html">Gérer une équipe de développeurs en Full Remote</a></h3>
                        <p>Les méthodes agiles et les rituels essentiels pour maintenir la cohésion de groupe et la productivité lorsque tous les membres sont distribués.</p>
                        <div class="carte-meta">
                            <span>05 Fév 2026</span>
                            <span>8 min</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- =====================================================
         PIED DE PAGE (FOOTER)
    ====================================================== -->
    <footer class="pied-de-page">
        <div class="conteneur-pied-de-page">
            <div class="colonne-pied-de-page">
                <h2>Mon Blog</h2>
                <p>Partager des connaissances, des tutoriels et des découvertes sur le développement web.</p>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="public-index.html">Accueil</a></li>
                    <li><a href="public-categorie.html">Catégories</a></li>
                    <li><a href="public-apropos.html">À propos</a></li>
                </ul>
            </div>
            <div class="colonne-pied-de-page">
                <h2>Contact</h2>
                <p>Retrouvez les nouveaux articles chaque semaine.</p>
            </div>
        </div>
        <div class="bas-pied-de-page">
            <p>&copy; 2026 Mon Blog Personnel.</p>
        </div>
    </footer>
</body>
</html>

---