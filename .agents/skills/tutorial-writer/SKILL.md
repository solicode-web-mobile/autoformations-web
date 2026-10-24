---
name: tutorial-writer
description: Conçoit et rédige des tutoriels techniques (unitaires ou en série progressive vers un code final) nativement simplifiés, concrets et vérifiables pour les apprenants.
version: 2.0.0
inspiration:
  source: "solicode-pedagogy"
  plugin: "pedagogy-referential"
  pattern: "incremental-series-progression, native-simplification & active-learning"
---

# 1. Mission
Ce skill est l'**artisan pédagogique universel** chargé de concevoir et rédiger des guides d'apprentissage techniques pas-à-pas (tutoriels).
Tout tutoriel produit est **directement et nativement simplifié dès sa conception** : sans surcharge cognitive, visuel d'abord, théorie courte (3 à 4 H3 max), et exercices mutualisés.

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
- **Ressource didactique interne (chargée à la demande) :**
  - [domaines-pedagogiques.md](resources/domaines-pedagogiques.md) : Règles spécifiques pour le domaine enseigné parmi les 17 domaines techniques (ex: livrable `.js` pur avec `array-svg.html` en algorithmique, requêtes préparées PDO en PHP, etc.).
- **Ressources transversales du projet :**
  - `.agents/rules/pedagogie-spartel.md` (Directives de style et progression N1).
  - `.agents/rules/standards-techniques.md` (Encodage UTF-8, règles Jekyll, `window.pageData`, livrables GitHub/MD).
  - Code réel et démonstrateurs sous `/code/`.

---

# 4. Contraintes & Règles Inviolables
- **Simplifié par Défaut (Right-First-Time) :** Tout tutoriel généré est nativement épuré. Interdiction formelle de rédiger un contenu bavard pour le simplifier après coup. Le Front Matter porte systématiquement `simplified: true` dès la création.
- **Théorie Visuelle & Concrète :** 3 à 4 sections H3 maximum. Tout paragraphe dépassant 4 lignes doit être accompagné d'un schéma visuel (Mermaid / SVG) ou d'un exemple concret (*« Je vois $\rightarrow$ Je comprends »*).
- **Exercices Mutualisés :** Regrouper les consignes dans un tableau de travail unifié plutôt que d'éparpiller des micro-questions successives.
- **Règle Stricte sur les Données de Départ :** La section `## 2. Données de départ` n'apparaît dans le texte QUE si au moins un des champs `data_html`, `data_css`, `data_js` ou `data_php` est non vide. Si tous les champs sont vides (`""`), la section est obligatoirement omise.
- **Code 100% Autonome & Exécutable :** Chaque bloc de code doit être exécutable immédiatement dans l'éditeur interactif (variables déclarées avec `let`/`const`, sorties `console.log`).
- **Preuve par le Code :** Le livrable est toujours un dépôt GitHub (ou fichier `.md` commité pour le CLI). Interdiction absolue d'exiger des captures d'écran en guise de livrable.

---

# 5. Procédure Pas-à-Pas

### Parcours A : Rédaction d'une Série de Tutoriels en Progression (Vers le Code Final)
1. **Étape 1 : Analyse du Code Source Final d'Arrivée :**
   - Étudier l'architecture du code cible (HTML, CSS, JS, PHP, SQL).
   - Identifier les blocs fonctionnels indépendants et les dépendances techniques.
2. **Étape 2 : Découpage en Itérations & Alignement avec le Plan de l'UA :**
   - Associer chaque tutoriel de la série à une itération incrémentale du code.
   - Définir l'état de départ ($E_{n-1}$) et l'état d'arrivée ($E_n$) de chaque tutoriel.
3. **Étape 3 : Chaînage Pédagogique Sans Rupture :**
   - Les `Données de départ` du tutoriel $N$ correspondent exactement au code produit par l'apprenant à la fin du tutoriel $N-1$.
   - Chaque tutoriel introduit une notion nouvelle, guide son implémentation sur le code existant, et valide la nouvelle brique.
4. **Étape 4 : Aboutissement au Dernier Tutoriel :**
   - Le dernier tutoriel de la série finalise la dernière brique, permettant à l'apprenant d'obtenir le code source complet d'arrivée.

### Parcours B : Rédaction d'un Tutoriel Unitaire Autonome
1. **Étape 1 : Cadrage :** Définir l'objectif SMART, le domaine et les prérequis.
2. **Étape 2 : Cas d'Étude Concret :** Introduire une situation métier concrète (ex: une carte produit, un formulaire de contact).
3. **Étape 3 : Théorie Pas-à-Pas :** Rédiger 3 ou 4 sous-sections illustrées (Mermaid / code autonome).
4. **Étape 4 : Pratique & Livrable :** Consignes d'action claires, exercice mutualisé, livrable GitHub.
5. **Étape 5 : Glossaire :** Définition concise (1 ligne) de chaque nouveau terme technique.

### Parcours C : Modernisation d'un Ancien Tutoriel Existant
1. **Étape 1 : Élagage du Gras Théorique :** Supprimer les longues introductions et distinctions académiques non manipulées.
2. **Étape 2 : Schématisation & Mutualisation :** Remplacer le texte verbeux par des schémas visuels et unifier les exercices dispersés.
3. **Étape 3 : Front Matter & Dépendances :** Marquer `simplified: true`, supprimer `en_construction`, vérifier les champs `data_*` et actualiser les démonstrateurs sous `/code/`.

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
<!-- Exercice mutualisé dans un tableau unique, progression vers le code cible -->

## 5. Livrable & Critères de Réussite
- **Livrable :** Dépôt GitHub (dossier spécifique au tutoriel) ou fichier `.md`.
- **Critères :** Points vérifiables de réussite.

## 6. Glossaire
- **Terme technique** : Définition simple en une phrase.
```

---

# 8. Contrôle Qualité (Checklist Binaire)
- [ ] Le tutoriel est-il nativement simplifié dès sa création avec `simplified: true` ?
- [ ] Dans une série, chaque tutoriel s'appuie-t-il sur le résultat du tutoriel précédent vers le code final ?
- [ ] La théorie comporte-t-elle au maximum 3 à 4 sous-sections (H3) illustrées ?
- [ ] La section "Données de départ" est-elle omise si tous les champs `data_*` sont vides ?
- [ ] Si `data_*` est défini, le script `window.pageData` est-il injecté sous le Front Matter ?
- [ ] Le code d'exemple est-il 100% exécutable et autonome (variables déclarées, sortie console) ?
- [ ] Les médias sont-ils sourcés via `images-tutos/[Domaine]/[ID_Tuto]/` avec `relative_url` ?
- [ ] Le livrable exige-t-il un dépôt GitHub ou fichier `.md` (et zéro capture d'écran) ?
- [ ] Chaque terme nouveau est-il défini en une ligne dans le glossaire ?

---

# 9. Gestion des Erreurs Fréquentes
| Erreur Typique | Cause | Solution Immédiate |
| :--- | :--- | :--- |
| Rédiger un tutoriel verbeux pour le simplifier ensuite | Mauvaise posture de conception | Rédiger directement la version épurée et synthétique |
| Rupture de continuité dans une série | Tutoriel N déconnecté du résultat de N-1 | Vérifier que le code de départ de N reprend exactement le code final de N-1 |
| Bloc de code non exécutable | Variable non déclarée ou absence de `console.log` | Déclarer systématiquement les variables avec `let`/`const` |
| Afficher "Données de départ" quand les champs sont vides | Inattention | Supprimer la section si `data_*` est vide |
| Demander des captures d'écran en livrable | Violation de la règle du livrable | Remplacer par un lien vers le dépôt GitHub |

---

# 10. Exemples Concrets (Few-Shot)

### Exemple A : Découpage Incrémental en Série (Vers un composant "Carte Utilisateur")
> **Tutoriel 1 (HTML) :** Construire le squelette sémantique (`<article>`, `<img>`, `<h2>`, `<p>`). Livrable : `index.html`.  
> **Tutoriel 2 (CSS) :** Reprendre `index.html` de T1, appliquer les styles Flexbox et l'arrondi. Livrable : `style.css` lié.  
> **Tutoriel 3 (JS) :** Reprendre le composant stylisé de T2, ajouter le bouton interactif "Suivre" avec `addEventListener`. Livrable : composant final complet fonctionnel.

### Exemple B : Exercice Pratique Mutualisé (Tableau d'Action N1)
> | Étape | Action à réaliser | Fichier modifié | Résultat attendu |
> | :-: | :--- | :--- | :--- |
> | 1 | Ajouter la classe `.actif` au premier onglet | `index.html` | L'onglet passe en fond bleu |
> | 2 | Créer la règle `.actif` avec `background-color` | `style.css` | Le style visuel est confirmé |
