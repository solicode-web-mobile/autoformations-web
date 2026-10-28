# Guide d'Utilisation du Skill : dev-jekyll

## 1. Présentation & Rôle
`dev-jekyll` est le **spécialiste technique frontend** pour le développement, la maintenance et l'optimisation de la plateforme statique Jekyll propulsée par Just the Docs.

Il gouverne l'architecture modulaire des styles (`assets/css/`), les scripts interactifs (`assets/js/`), l'intégration des layouts Liquid (`_layouts/`) et des composants réutilisables (`_includes/`), garantissant une séparation stricte des préoccupations et des performances optimales.

---

## 2. Cas d'Usage Principaux
- **Quand utiliser ce skill :**
  - Création ou modification d'un layout dans `_layouts/` (ex: `layout: session`, `layout: tuto`).
  - Évolution d'un composant réutilisable dans `_includes/` (ex: barre de navigation, pied de page, bloc d'exécution).
  - Ajout ou réorganisation des feuilles de style CSS dans `assets/css/`.
  - Développement de fonctionnalités interactives en Vanilla JavaScript dans `assets/js/` (mode plein écran, bascule dynamique d'onglets).
  - Résolution d'anomalies de compilation Jekyll ou d'affichage sous Just the Docs.
- **Quand NE PAS utiliser ce skill :**
  - Rédaction de tutoriels ou de contenus éditoriaux ➔ Utiliser `tutorial-writer`.
  - Conception ou audit de la progression technique d'une session ➔ Utiliser `tutorial-planer`.
  - Synchronisation du thème partagé avec le dépôt central ➔ Utiliser `sync-theme`.
  - Initialisation d'agent ou diagnostic projet ➔ Utiliser `project-setup`.

---

## 3. Prompts Types d'Invocation

```markdown
# Ajout d'un nouveau style modulaire
@[.agents/skills/dev-jekyll/SKILL.md] Ajoute les styles pour le composant de carte de session dans assets/css/session.css et assure son inclusion conditionnelle.
```

```markdown
# Création d'un composant interactif
@[.agents/skills/dev-jekyll/SKILL.md] Crée un include _includes/fullscreen-button.html avec son script JS associé pour permettre d'agrandir un éditeur de code.
```

```markdown
# Résolution de bug Jekyll
@[.agents/skills/dev-jekyll/SKILL.md] Corrige l'erreur Liquid jsonify qui génère des guillemets doubles en trop dans le script window.pageData.
```

---

## 4. Prérequis & Données d'Entrée
- **Fichiers sources du site :**
  - `_config.yml` (configuration Jekyll et collections).
  - `_layouts/` et `_includes/` (templates Liquid).
  - `assets/css/` et `assets/js/` (ressources statiques).
- **Règles applicables :**
  - `.agents/rules/standards-techniques.md` (Zéro CSS inline, filtre Liquid `jsonify` sans guillemets manuels, UTF-8 sans BOM).

---

## 5. Déroulement Pas-à-Pas (Ce que fait l'Agent)
1. **Étape 1 — Analyse d'Impact :** Identifie les layouts ou composants impactés, vérifie les dépendances partagées avec `assets/css/base.css`.
2. **Étape 2 — Implémentation Modulaire Sans CSS Inline :**
   - Styles globaux ou partagés entre plusieurs layouts ➔ Placés dans `assets/css/base.css`.
   - Styles spécifiques à un layout ➔ Placés dans `assets/css/[layout].css`.
   - Composants HTML ➔ Structurés sémantiquement dans `_includes/[composant].html`.
   - Scripts ➔ Rédigés en Vanilla JS léger dans `assets/js/`.
3. **Étape 3 — Contrôle de Non-Régression :** Vérifie l'absence de balises `<style>` dans le code HTML/Liquid et teste le bon rendu.

---

## 6. Livrables Produits & Méthode de Vérification
- **Livrables attendus :**
  - Fichiers `.css`, `.js`, `.html` propres et modulaires.
  - Commandes de validation pour tester le serveur local.
- **Comment vérifier le résultat :**
  Lancer le serveur local de test Jekyll :
  ```powershell
  bundle exec jekyll serve
  ```
  Ouvrir `http://localhost:4000` et valider le rendu visuel et la console JavaScript (0 erreur).

---

## 7. Pièges Fréquents & Bonnes Pratiques
| Piège Fréquent | Risque | Bonne Pratique |
| :--- | :--- | :--- |
| Ajouter du CSS inline dans un layout Liquid | Violation des standards de séparation | Toujours déporter le CSS dans `assets/css/` |
| Entourer `{{ val \| jsonify }}` de guillemets | Erreur de syntaxe JavaScript `""valeur""` | Laisser `jsonify` générer les guillemets automatiquement |
| Dupliquer des styles identiques dans plusieurs CSS de layout | Code redondant et difficile à maintenir | Factoriser les règles réutilisées dans `assets/css/base.css` |
| Utiliser des bibliothèques externes lourdes | Dégradation des temps de chargement | Préférer le Vanilla JS et le Vanilla CSS purs et légers |
