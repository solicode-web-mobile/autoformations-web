# Méthodologie de Rédaction & Simplification des Tutoriels

> **Document de référence normatif — Ingénierie Éditoriale**  
> **Composant :** Synthèse unifiée des compétences rédactionnelles d'`old_agent` (`redacteur-tutos`, `simplificateur-tutos`, `generateur-resultats-tutos`, `generateur-exemples-tutos`, `redacteur-docs`).

---

## 1. Structure Canonique d'un Tutoriel N1

Tout tutoriel publié sur la plateforme respecte rigoureusement la structure suivante :

```markdown
---
layout: tuto
title: "Titre clair et concis"
domain: "d-xxx"
ua: "ua-xxx"
simplified: true
---

<!-- Script d'injection pageData si au moins un champ data_* est non vide -->
<script>
window.pageData = {
    html: {{ page.data_html | default: "" | jsonify }},
    css: {{ page.data_css | default: "" | jsonify }},
    js: {{ page.data_js | default: "" | jsonify }},
    php: {{ page.data_php | default: "" | jsonify }}
};
</script>

## 1. Contexte & Objectif
- Objectif SMART : Ce que l'apprenant sera capable de réaliser à la fin du tutoriel.
- Prérequis : Notions déjà acquises indispensables.

## 2. Données de départ (Conditionnelle)
> N'inclure cette section QUE si au moins un des champs `data_html`, `data_css`, `data_js` ou `data_php` est non vide. Si tous les champs sont vides, cette section doit être entièrement omise.

## 3. Théorie Pas-à-Pas (Illustrée & Accessible)
- 3 à 4 sous-sections (H3) maximum.
- Phrases courtes, ton direct.
- Tout paragraphe dépassant 4 lignes doit comporter un schéma visuel (Mermaid, SVG) ou un extrait de code exécutable.

## 4. Pratique & Réalisation Guidée
- Consignes d'action unitaires.
- Exercices mutualisés (un seul tableau de travail complet plutôt que plusieurs micro-tableaux).
- Progression continue vers le résultat final de l'UA.

## 5. Livrable & Critères de Réussite
- Livrable attendu : Dépôt GitHub (ou fichier `.md` commité pour les commandes CLI).
- Critères observables : Comment l'apprenant auto-évalue sa réussite.
- **Règle absolue :** Aucune capture d'écran en guise de livrable.

## 6. Glossaire
- Définition concise (1 ligne) de chaque nouveau terme technique introduit.
```

---

## 2. Règles d'Or de la Simplification Cognitive

Lorsqu'un tutoriel existant est trop dense, abstrait ou surchargé, appliquer les 6 règles de simplification :

1. **Fusionner les concepts indissociables :** Ne pas créer de sections séparées pour des notions qui s'utilisent toujours ensemble. Viser 3 à 4 H3 maximum en théorie.
2. **Remplacer le texte par des visuels :** Appliquer la règle *« Je vois $\rightarrow$ Je comprends »*. Préférer un schéma Mermaid ou un snippet de code commenté à une longue explication textuelle.
3. **Mutualiser les exercices pratiques :** Regrouper les consignes dans un tableau de travail unifié plutôt que d'éparpiller des sous-questions successives.
4. **Tailler le superflu (Zéro gras académique) :** Éliminer les distinctions purement théoriques non mobilisées dans l'exercice.
5. **Indicateurs Front Matter :**
   - Ajouter systématiquement `simplified: true`.
   - Supprimer ou passer à `false` la variable `en_construction`.
6. **Mise à jour des démonstrateurs `/code/` :** Si le tutoriel référence un résultat attendu via une `iframe` vers `/code/...`, mettre impérativement à jour le fichier cible correspondant.

---

## 3. Rédaction Compacte & Efficace

- **Titre (H1/H2) :** Nom du composant ou de la compétence.
- **Principe (1 phrase) :** Ce que cela fait et le besoin auquel cela répond.
- **Fonctionnement (Puces) :** Les grandes étapes concrètes (3 à 5 puces maximum).
- **Utilisation (Code) :** Exemples de code directement exécutables et testables.
