---
name: tutorial-writer
description: Rédige, simplifie et optimise des tutoriels techniques pas-à-pas progressifs, vérifiables et ancrés dans le code réel pour les apprenants.
version: 1.1.0
inspiration:
  source: "solicode-pedagogy"
  plugin: "pedagogy-referential"
  pattern: "competency-based active pedagogy, step-by-step guidance & tutorial simplification"
---

# 1. Mission
Ce skill a pour mission de **concevoir, rédiger, simplifier et optimiser** des guides d'apprentissage techniques pas-à-pas (tutoriels) clairs, didactiques et directement testables. Chaque tutoriel vise l'acquisition d'un savoir-faire précis par les apprenants en appliquant le principe de divulgation progressive et en éliminant toute surcharge cognitive inutile.

# 2. Déclenchement & Limites
- **Quand l'activer :**
  - Rédaction initiale d'un tutoriel guidé pas-à-pas (*« Rédige un tutoriel pour l'UA D.122.1 »*, *« Crée un guide pas-à-pas »*).
  - Simplification, optimisation ou allègement d'un tutoriel existant trop dense (*« Simplifie ce tutoriel »*, *« Allège la théorie et mutualise les exercices »*).
  - Harmonisation et mise en conformité pédagogique d'un tutoriel (*« Ajoute simplified: true et vérifie les données de départ »*).
  - Documentation pédagogique d'un composant complexe.
- **Quand NE PAS l'activer :**
  - Conception d'un sujet de TP ou brief d'évaluation autonome -> Déclencher `workshop-builder`.
  - Implémentation directe de code applicatif -> Déclencher `feature-dev`.
  - Fiche de contexte brute pour l'IA -> Déclencher `context-generator`.

# 3. Entrées & Ressources à Charger
- **Ressources méthodologiques internes (chargées à la demande) :**
  - [redaction-tutoriels.md](resources/redaction-tutoriels.md) : Gabarit canonique, règles d'or de simplification et gestion des données de départ.
- **Ressources transversales du projet :**
  - `.agents/references/conventions/project-conventions.md` (Pédagogie N1, cadre Spartel).
  - `.agents/references/conventions/domaines-pedagogiques.md` (Règles spécifiques au domaine ciblé).
  - Code réel et démonstrateurs sous `/code/`.

# 4. Contraintes & Règles Inviolables
- **Zéro Code Fictif :** Les exemples de code DOIVENT correspondre rigoureusement à l'architecture réelle enseignée (pas de faux code ni de snippets cassés).
- **Divulgation Progressive & Clarté :** Isoler une difficulté à la fois. Si une explication théorique dépasse 4 lignes, la remplacer ou l'accompagner d'un schéma (Mermaid/SVG) ou d'un exemple concret.
- **Règles d'Or de Simplification :**
  - Fusionner les notions indissociables (3 à 4 sections H3 maximum en théorie).
  - Mutualiser les exercices pratiques (un seul tableau synthétique au lieu de plusieurs micro-tableaux).
  - Déclarer `simplified: true` et supprimer `en_construction: true` dans le Front Matter lors d'une passe d'optimisation.
  - N'inclure la section "Données de départ" que si au moins un champ `data_*` est non vide.
  - Mettre à jour les fichiers de résultats et démos dans `/code/` associés au tutoriel.

# 5. Procédure Pas-à-Pas

### Parcours A : Rédaction d'un Nouveau Tutoriel
1. **Cadrage Pédagogique :** Identifier l'UA, la compétence, le domaine, le niveau (N1 par défaut) et les prérequis.
2. **Mise en Situation :** Formuler un cas d'étude narratif concret issu de la vie professionnelle.
3. **Étapes Pas-à-Pas :** Action à réaliser, fichier ciblé, code commenté, et observation du résultat.
4. **Pratique Continue :** Progression vers la réalisation finale de l'UA, livrable sous forme de dépôt GitHub (ou `.md` de commandes).
5. **Auto-Évaluation & Glossaire :** Checklist observable et glossaire court des termes nouveaux.

### Parcours B : Simplification d'un Tutoriel Existant
1. **Diagnostic Cognitif :** Repérer les digressions académiques, doublons théoriques ou exercices dispersés.
2. **Fusion & Élagage :** Regrouper les concepts théoriques sous 3 ou 4 sous-sections maximum, remplacer les longs paragraphes par des schémas visuels.
3. **Mutualisation Pratique :** Regrouper les consignes dans un tableau de travail unifié.
4. **Mise à Jour Front Matter & Dépendances :** Marquer `simplified: true`, vérifier les champs `data_*`, et ajuster le cas échéant les fichiers témoins dans `/code/`.

# 6. Gestion des Ambiguïtés & Décisions
- Si le niveau des apprenants n'est pas spécifié : calibrer par défaut pour un développeur débutant N1 (français A1-A2, explications concrètes).

# 7. Format de Sortie & Livrables
Un document Markdown structuré comprenant obligatoirement :
- Front Matter YAML normé (avec `title`, `layout: tuto`, `domain`, `ua`, etc.)
- Script `window.pageData` (si `data_*` présent)
- `## 1. Contexte & Objectif d'Apprentissage`
- `## 2. Données de départ` (uniquement si au moins un champ `data_*` est non vide)
- `## 3. Théorie Pas-à-Pas (Simplifiée & Illustrée)`
- `## 4. Pratique & Réalisation Guidée`
- `## 5. Livrable & Critères de Réussite`
- `## 6. Glossaire & Checklist d'Auto-Évaluation`

# 8. Contrôle Qualité (Checklist Binaire)
- [ ] Le code présenté est-il strictement conforme aux conventions réelles de SoliLMS ?
- [ ] Les étapes sont-elles reproductibles de bout en bout sans zone d'ombre ?
- [ ] Les pièges liés à Gapp (`Base/` vs classes enfants) sont-ils clairement signalés ?
- [ ] Le livrable inclut-il une checklist d'auto-évaluation ?

# 9. Gestion des Erreurs Fréquentes
| Erreur Typique | Cause | Solution Immédiate |
| :--- | :--- | :--- |
| Donner du code avec des variables non déclarées | Inattention lors de la rédaction | Vérifier la complétude de chaque extrait |
| Expliquer trop de concepts en même temps | Manque de cadrage pédagogique | Découper le tutoriel en sous-étapes plus digestes |

# 10. Exemples Concrets (Few-Shot)
**Exemple d'introduction d'étape :**
> **Étape 2 : Déclarer le filtre dans la couche Service**  
> Ouvrez le fichier enfant `modules/PkgFormation/Services/FiliereService.php`.  
> *Attention : Ne modifiez pas `BaseFiliereService.php` qui est écrasé par Gapp !*  
> Ajoutez la méthode `initFieldsFilterable()` pour injecter votre filtre...

