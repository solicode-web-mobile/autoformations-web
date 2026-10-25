---
name: tutorial-writer
description: Conçoit et rédige des tutoriels techniques (unitaires ou en série progressive vers un code final) nativement simplifiés, concrets et vérifiables pour les apprenants, en chargeant obligatoirement les règles didactiques du domaine concerné et en rappelant l'emplacement exact du livrable dans le dépôt annuel.
version: 2.5.0
inspiration:
  source: "solicode-pedagogy"
  plugin: "pedagogy-referential"
  pattern: "incremental-series-progression, native-simplification & active-learning"
---

# 1. Mission
Ce skill est l'**artisan pédagogique universel** chargé de concevoir et rédiger des guides d'apprentissage techniques pas-à-pas (tutoriels).
Tout tutoriel produit est **directement et nativement simplifié dès sa conception** : sans surcharge cognitive, visuel d'abord, théorie courte (3 à 4 H3 max), et pratique ultra-ciblée.

### Trajectoire Pédagogique Globale
L'apprentissage au sein du cursus Spartel s'articule rigoureusement selon trois jalons complémentaires :
$$\text{Tutoriel (Comprendre avec le minimum de code)} \longrightarrow \text{Prototype (Pratiquer \& consolider)} \longrightarrow \text{Projet (Développer la compétence métier)}$$

> **Principe Cardinal de Charge Minimale :**
> Le but d'un tutoriel est de faire **comprendre** une notion avec le **strict minimum de code**. Le tutoriel n'a **pas** pour vocation de faire pratiquer intensivement pour développer la compétence (ce rôle appartient exclusivement au **Prototype**, puis au **Projet de fin de formation**). Inutile donc de multiplier les exercices dans la pratique d'un tutoriel : un seul cas d'application direct et concis suffit pour valider la compréhension.

Le skill prend en charge deux dynamiques pédagogiques :
1. **Le Tutoriel Unitaire Autonome :** Focalisé sur l'apprentissage isolé d'une notion avec son micro-livrable.
2. **La Série de Tutoriels avec Progression Incrémentale :** Découpe méthodique d'un **code source final d'arrivée** en étapes successives à travers le **plan d'une UA**, chaque tutoriel apportant une brique de code cumulée vers la réalisation finale complète.

Le cycle de pédagogie active s'applique en permanence :
$$\text{Comprendre} \longrightarrow \text{Reproduire} \longrightarrow \text{Expérimenter} \longrightarrow \text{Réaliser} \longrightarrow \text{Réutiliser}$$

---

# 2. Déclenchement & Limites
- **Quand l'activer :**
  - Rédaction d'une **série de tutoriels en progression** à partir du plan de l'UA et du code source final cible (*« Rédige la série de tutoriels pour l'UA D.122 en partant de la maquette finale »*).
  - Rédaction d'un **tutoriel unitaire** autonome (*« Rédige un tutoriel pour créer un bouton animé en CSS »*).
  - Modernisation ou allègement d'un ancien tutoriel existant trop dense pour l'aligner sur le standard simplifié.
  - Création ou mise à jour des démonstrateurs interactifs associés sous `/code/`.
- **Quand NE PAS l'activer :**
  - Développement technique de composants, styles ou layouts Jekyll ➔ Utiliser [dev-jekyll](../dev-jekyll/SKILL.md).
  - Synchronisation du socle technique partagé (Core Theme) ➔ Utiliser [sync-theme](../sync-theme/SKILL.md).
  - Configuration de l'environnement IA, diagnostic ou installation de compétences ➔ Utiliser [project-setup](../project-setup/SKILL.md).
  - Conception, modification ou gouvernance des compétences et règles ➔ Utiliser [plugin-dev](../plugin-dev/SKILL.md).

---

# 3. Entrées & Ressources à Charger
- **Données d'entrée pour une série progressive :**
  1. Le **Plan des tutoriels de l'UA** : Liste ordonnée des tutoriels avec leurs notions cibles.
  2. Le **Code source final d'arrivée** : Fichier(s) complet(s) ou maquette terminée représentant le livrable final attendu à l'issue de l'UA.
- **Ressources didactiques internes par domaine (Chargement OBLIGATOIRE dès le cadrage) :**
  - [domaines-pedagogiques.md](resources/domaines-pedagogiques.md) : Index central d'orientation des 17 domaines techniques.
  - **Fiche modulaire dédiée au domaine en cours de rédaction** dans `resources/` (ex: [domaine-algo.md](resources/domaine-algo.md) pour l'algorithmique, [domaine-conception.md](resources/domaine-conception.md) pour les gabarits SVG de diagrammes MCD Merise, [domaine-css.md](resources/domaine-css.md), [domaine-php-sql.md](resources/domaine-php-sql.md), etc.).
- **Ressources transversales du projet :**
  - `.agents/rules/pedagogie-spartel.md` (Directives de style et progression N1).
  - `.agents/rules/standards-techniques.md` (Encodage UTF-8, règles Jekyll, `window.pageData`, livrables GitHub/MD).
  - Code réel et démonstrateurs sous `/code/`.

---

# 4. Contraintes & Règles Inviolables
- **Chargement Obligatoire de la Fiche Domaine :** Avant TOUTE rédaction, simplification ou refonte d'un tutoriel, l'agent DOIT impérativement identifier le domaine technique concerné (ex: `D.121.1-algo` → `resources/domaine-algo.md`, `D.112.1-conception` → `resources/domaine-conception.md`) et charger sa fiche didactique depuis `resources/`. L'agent applique strictement les contraintes propres au domaine (formats de code imposés, composants visuels spécifiques comme `array-svg.html`, structure du livrable, interdictions thématiques). Interdiction formelle d'engager la rédaction sans avoir consulté la fiche du domaine.
- **Preuve par le Code & Dépôt Unique des Autoformations :** L'apprenant dispose d'un **dépôt GitHub unique pour l'ensemble des livrables de l'année**, organisé par les **noms lisibles** (et NON les codes alphanumériques) des domaines, des UA et des tutoriels :
  ```text
  [nom-domaine]/[nom-ua]/[nom-tutoriel]/[nom-fichier]
  ```
  Exemple : `algo/fonctions/comprendre-fonctions/fonctions.js`.  
  **Règles strictes de nommage de l'arborescence :**
  - **Interdiction formelle d'utiliser les codes alphanumériques** (`UA.xxx`, `T.xxx`, `D.xxx`) dans les chemins de livrable. Utiliser exclusivement les noms ou slugs explicites (ex: `algo/fonctions/comprendre-fonctions/` et NON `D.121.1-algo/UA.121.14/T.121.141/`).
  - **Gouvernance globale au niveau du skill :** La règle et la structure des livrables sont définies exclusivement au niveau de ce skill (et non par domaine).
  - **Rappel obligatoire de l'emplacement :** Tout tutoriel DOIT obligatoirement indiquer à l'apprenant l'arborescence exacte où commiter son livrable dans son dépôt d'autoformation annuel.
  - **Conservation intégrale du code pratique :** Le fichier livré rassemble la totalité du code écrit pendant la séance pratique, délimité par des commentaires explicites.
  - **Zéro capture d'écran :** Le livrable est toujours constitué de code source commité sur GitHub.
- **Pratique Minimale Axée sur la Compréhension :** La pratique d'un tutoriel doit comporter le **strict minimum de code** nécessaire et suffisant pour valider la compréhension de la notion. Inutile d'empiler plusieurs exercices d'entraînement ou variations : un seul cas d'application direct et concis (ou au maximum deux micro-étapes d'un même scénario) suffit. Le tutoriel n'a pas pour objectif de développer la compétence ou l'endurance pratique de l'apprenant : cette consolidation intervient lors du **Prototype**, puis la compétence métier se développe dans les **Projets**.
- **Simplifié par Défaut (Right-First-Time) :** Tout tutoriel généré est nativement épuré. Interdiction formelle de rédiger un contenu bavard pour le simplifier après coup. Le Front Matter porte systématiquement `simplified: true` dès la création.
- **Théorie Visuelle & Concrète :** 3 à 4 sections H3 maximum. Tout paragraphe dépassant 4 lignes doit être accompagné d'un schéma visuel (Mermaid / SVG) ou d'un exemple concret (*« Je vois → Je comprends »*).
- **Règle Stricte sur les Données de Départ :** La section `## 2. Données de départ` n'apparaît dans le texte QUE si au moins un des champs `data_html`, `data_css`, `data_js` ou `data_php` est non vide. Si tous les champs sont vides (`""`), la section est obligatoirement omise.
- **Code 100% Autonome & Exécutable :** Chaque bloc de code doit être exécutable immédiatement dans l'éditeur interactif (variables déclarées avec `let`/`const`, sorties `console.log`).
- **Dissociation Nette Exercices vs Livrable :** Interdiction formelle d'intituler un exercice pratique `Travail à faire (Livrable)` car cela laisse faussement croire que seule cette dernière étape est à livrer. Chaque étape pratique porte un titre technique explicite sur la notion manipulée (ex: `2.1. Calculer et retourner un résultat`). La consigne de dépôt et les critères de réussite forment obligatoirement une **sous-section dédiée finale** (ex: `### 2.2. Livrable & Critères de réussite` ou `### 2.3. Livrable & Critères de réussite`), qui récapitule de manière cumulative l'intégralité du code produit pendant toute la séance pratique.

---

# 5. Procédure Pas-à-Pas

### Parcours A : Rédaction d'une Série de Tutoriels en Progression (Vers le Code Final)
1. **Étape 1 : Cadrage, Chargement du Domaine & Analyse du Code Cible :**
   - Identifier le domaine de l'UA et charger obligatoirement la fiche correspondante `resources/domaine-[nom].md` (via `domaines-pedagogiques.md`).
   - Relever les règles didactiques et contraintes techniques imposées pour ce domaine.
   - Étudier l'architecture du code cible (HTML, CSS, JS, PHP, SQL) et identifier les blocs fonctionnels indépendants.
2. **Étape 2 : Découpage en Itérations & Alignement avec le Plan de l'UA :**
   - Associer chaque tutoriel de la série à une itération incrémentale du code.
   - Définir l'état de départ ($E_{n-1}$) et l'état d'arrivée ($E_n$) de chaque tutoriel.
3. **Étape 3 : Chaînage Pédagogique Sans Rupture :**
   - Les `Données de départ` du tutoriel $N$ correspondent exactement au code produit par l'apprenant à la fin du tutoriel $N-1$.
   - Chaque tutoriel introduit une notion nouvelle, guide son implémentation sur le code existant, et valide la nouvelle brique.
4. **Étape 4 : Aboutissement au Dernier Tutoriel :**
   - Le dernier tutoriel de la série finalise la dernière brique, permettant à l'apprenant d'obtenir le code source complet d'arrivée.
   - Spécifier l'emplacement exact dans le dépôt d'autoformation (`[nom-domaine]/[nom-ua]/[nom-tutoriel]/`).

### Parcours B : Rédaction d'un Tutoriel Unitaire Autonome
1. **Étape 1 : Cadrage & Chargement de la Fiche Didactique du Domaine :**
   - Identifier le domaine technique et charger obligatoirement sa fiche `resources/domaine-[nom].md` (via `domaines-pedagogiques.md`).
   - Extraire les contraintes spécifiques au domaine (composants visuels, formats de code, exigences de livrable).
   - Déterminer l'arborescence exacte de destination dans le dépôt global de l'apprenant (`[nom-domaine]/[nom-ua]/[nom-tutoriel]/` ou `[nom-domaine]/[nom-tutoriel]/`).
   - Définir l'objectif SMART, le domaine et les prérequis.
2. **Étape 2 : Cas d'Étude Concret :** Introduire une situation métier concrète (ex: une carte produit, un formulaire de contact).
3. **Étape 3 : Théorie Pas-à-Pas :** Rédiger 3 ou 4 sous-sections illustrées (Mermaid / code autonome).
4. **Étape 4 : Pratique & Livrable :** Consignes d'action claires, exercice mutualisé, rappel explicite de l'emplacement du livrable dans le dépôt global d'autoformation (avec les noms de domaine, UA et tutoriel), critères de réussite mesurables.
5. **Étape 5 : Glossaire :** Définition concise (1 ligne) de chaque nouveau terme technique.

### Parcours C : Modernisation d'un Ancien Tutoriel Existant
1. **Étape 1 : Audit & Chargement de la Fiche Didactique du Domaine :**
   - Identifier le domaine du tutoriel et charger obligatoirement sa fiche `resources/domaine-[nom].md`.
   - Auditer le tutoriel au regard des règles du domaine (composants visuels imposés, code autonome, rappel de l'emplacement exact dans le dépôt d'autoformation avec les noms).
   - Élaguer le gras théorique et supprimer les longues introductions ou distinctions académiques non manipulées.
2. **Étape 2 : Schématisation & Mutualisation :** Remplacer le texte verbeux par des schémas visuels (Mermaid / SVG) et unifier les exercices dispersés.
3. **Étape 3 : Front Matter & Dépendances :** Marquer `simplified: true`, supprimer `en_construction`, vérifier les champs `data_*`, actualiser le chemin du livrable et tester les démonstrateurs sous `/code/`.

---

# 6. Gestion des Ambiguïtés & Décisions
- **Série sans code final fourni :** Ne pas inventer arbitrairement le code final. Demander le code source cible d'arrivée à l'utilisateur avant d'engager le découpage de la série.
- **Champs `data_*` tous vides :** Omettre complètement la section "Données de départ" du corps du tutoriel.
- **Initialisation de l'Éditeur :** Si au moins un champ `data_*` est valorisé, injecter systématiquement le script `window.pageData` sous le Front Matter.
- **Code de préparation :** Pour un exercice CSS, isoler le CSS décoratif dans une balise `<style>` dans `data_html` pour que le champ `data_css` de l'élève reste vierge.

---

# 7. Format de Sortie (Gabarit Canonique Normé)

Tout tutoriel produit respecte rigoureusement la structure suivante :

```markdown
---
layout: tuto
title: "Titre clair et concis"
domain: "d-xxx"
ua: "ua-xxx"
simplified: true
data_html: ""
data_css: ""
data_js: ""
data_php: ""
---

<!-- Script d'injection pageData présent UNIQUEMENT si au moins un champ data_* est non vide -->
<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>

## 1. Contexte & Objectif
- **Objectif :** Ce que vous allez réaliser concrètement.
- **Prérequis :** Notions déjà acquises nécessaires.

## 2. Données de départ
<!-- Présent UNIQUEMENT si au moins un champ data_* est non vide. Sinon, section omise -->

## 3. Théorie Pas-à-Pas
<!-- 3 à 4 H3 maximum, schémas Mermaid/SVG pour tout paragraphe > 4 lignes, code exécutable -->

## 4. Pratique & Réalisation Guidée
<!-- Strict minimum de code pour valider la compréhension de la notion (1 seul cas d'application concis, ou au maximum 2 micro-étapes d'un même scénario). Interdiction d'intituler un exercice "Travail à faire (Livrable)". -->

## 5. Livrable & Critères de Réussite (ou sous-section finale 2.2 / 2.3)
- **Emplacement dans votre dépôt d'autoformation :**
  `[nom-domaine]/[nom-ua]/[nom-tutoriel]/[nom_fichier]`
- **Contenu attendu du livrable :**
  Code complet de la manipulation pratique minimale et commentaire bilan.
- **Critères :** Points vérifiables de réussite.

## 6. Glossaire
- **Terme technique** : Définition simple en une phrase.
```

---

# 8. Contrôle Qualité (Checklist Binaire)
- [ ] La fiche didactique du domaine (`resources/domaine-[nom].md`) a-t-elle été obligatoirement chargée et ses règles spécifiques appliquées ?
- [ ] L'emplacement exact du livrable dans le dépôt global d'autoformation utilise-t-il les **noms** (et NON les codes) sous la forme `[nom-domaine]/[nom-ua]/[nom-tutoriel]/` ?
- [ ] La pratique utilise-t-elle le **strict minimum de code** pour faire comprendre l'objectif sans chercher à entraîner l'apprenant à la compétence (rôle réservé aux Prototypes et Projets) ?
- [ ] Les étapes pratiques portent-elles des titres techniques clairs (sans mention de "Travail à faire (Livrable)") et le livrable est-il isolé dans une section dédiée finale ?
- [ ] Le tutoriel est-il nativement simplifié dès sa création avec `simplified: true` ?
- [ ] Dans une série, chaque tutoriel s'appuie-t-il sur le résultat du tutoriel précédent vers le code final ?
- [ ] La théorie comporte-t-elle au maximum 3 à 4 sous-sections (H3) illustrées ?
- [ ] La section "Données de départ" est-elle omise si tous les champs `data_*` sont vides ?
- [ ] Si `data_*` est défini, le script `window.pageData` est-il injecté sous le Front Matter ?
- [ ] Le code d'exemple est-il 100% exécutable et autonome (variables déclarées, sortie console) ?
- [ ] Les médias sont-ils sourcés via `images-tutos/[Domaine]/[ID_Tuto]/` avec `relative_url` ?
- [ ] Le livrable respecte-t-il les exigences du domaine (format imposé, zéro capture d'écran) ?
- [ ] Le fichier de livrable rassemble-t-il le code produit délimité par des commentaires clairs ?
- [ ] Chaque terme nouveau est-il défini en une ligne dans le glossaire ?
- [ ] Le texte évite-t-il toute syntaxe mathématique LaTeX (`$...$`, `\ge`, `\rightarrow`) au profit de symboles Unicode ou texte lisible (`→`, `>=`, `<=`) ?

---

# 9. Gestion des Erreurs Fréquentes
| Erreur Typique | Cause | Solution Immédiate |
| :--- | :--- | :--- |
| Surcharger la pratique avec plusieurs exercices d'entraînement | Confondre le rôle du tutoriel (comprendre) avec celui du prototype/projet (acquérir la compétence) | Réduire la pratique au strict minimum de code (1 cas d'application concis et direct) |
| Intituler un exercice "Travail à faire (Livrable)" | Ambiguïté pédagogique (l'apprenant croit ne devoir livrer que cette partie) | Donner un titre technique à chaque exercice et isoler le livrable dans une sous-section finale dédiée |
| Utiliser les codes alphanumériques (UA.xxx, T.xxx) pour le chemin du livrable | Mauvaise convention d'arborescence | Utiliser impérativement les noms explicites : `[nom-domaine]/[nom-ua]/[nom-tutoriel]/` |
| Oubli de l'emplacement du livrable ou consigne d'un nouveau dépôt | Non-respect de l'organisation centralisée du dépôt annuel | Rappeler systématiquement le chemin exact `[nom-domaine]/[nom-ua]/[nom-tutoriel]/` dans le dépôt global d'autoformation |
| Écraser ou omettre le code des premières étapes pratiques | Perte du travail de l'apprenant | Concevoir le livrable comme l'accumulation ordonnée des étapes de manipulation |
| Rédiger ou simplifier sans charger la fiche du domaine | Oubli de vérifier les contraintes techniques propres au domaine | Consulter systématiquement `resources/domaines-pedagogiques.md` et charger `resources/domaine-[nom].md` dès le cadrage |
| Rédiger un tutoriel verbeux pour le simplifier ensuite | Mauvaise posture de conception | Rédiger directement la version épurée et synthétique |
| Rupture de continuité dans une série | Tutoriel N déconnecté du résultat de N-1 | Vérifier que le code de départ de N reprend exactement le code final de N-1 |
| Bloc de code non exécutable | Variable non déclarée ou absence de `console.log` | Déclarer systématiquement les variables avec `let`/`const` |
| Afficher "Données de départ" quand les champs sont vides | Inattention | Supprimer la section si `data_*` est vide |
| Demander des captures d'écran en livrable | Violation de la règle du livrable | Remplacer par un lien vers le dépôt GitHub |
| Utiliser la syntaxe mathématique LaTeX (`$...$`, `\ge`, `\rightarrow`) | Just the Docs ne charge pas MathJax par défaut, affichant la syntaxe brute | Utiliser des symboles Unicode simples (`→`, `>=`, `<=`) ou des balises de code en ligne |

---

# 10. Exemples Concrets (Few-Shot)

### Exemple A : Découpage Incrémental en Série (Vers un composant "Carte Utilisateur")
> **Tutoriel 1 (HTML) :** Construire le squelette sémantique (`<article>`, `<img>`, `<h2>`, `<p>`). Emplacement livrable : `html/structure-semantique/carte-utilisateur/index.html`.  
> **Tutoriel 2 (CSS) :** Reprendre `index.html` de T1, appliquer les styles Flexbox et l'arrondi. Emplacement livrable : `css/mise-en-page/carte-utilisateur/style.css`.  
> **Tutoriel 3 (JS) :** Reprendre le composant stylisé de T2, ajouter le bouton interactif "Suivre" avec `addEventListener`. Emplacement livrable : `js/animations-dom/carte-utilisateur/main.js`.

### Exemple B : Exercice Pratique Mutualisé (Tableau d'Action N1)
> | Étape | Action à réaliser | Fichier modifié | Résultat attendu |
> | :-: | :--- | :--- | :--- |
> | 1 | Ajouter la classe `.actif` au premier onglet | `index.html` | L'onglet passe en fond bleu |
> | 2 | Créer la règle `.actif` avec `background-color` | `style.css` | Le style visuel est confirmé |
