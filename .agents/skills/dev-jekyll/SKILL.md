---
name: dev-jekyll
description: Developpe, optimise et maintient l architecture frontend, les layouts, les assets CSS/JS et les fonctionnalites interactives du site Jekyll Just the Docs.
version: 1.0.0
inspiration:
  source: "jekyll-open-source"
  plugin: "just-the-docs"
  pattern: "modular-asset-pipeline & dynamic-layout-theming"
---

# 1. Mission
Ce skill est l'expert technique frontend pour le développement, la maintenance et l'optimisation du site statique Jekyll propulsé par Just the Docs. Il gère l'architecture modulaire des styles (`assets/css/`), les scripts interactifs (`assets/js/`), l'intégration des layouts Liquid et les composants enrichis (éditeur interactif, blocs plein écran, iframes, Mermaid).

# 2. Déclenchement & Limites
- **Quand l'activer :**
  - Ajout ou modification d'un layout Jekyll dans `_layouts/`.
  - Évolution d'un composant partagé dans `_includes/`.
  - Refactorisation ou ajout de styles dans `assets/css/`.
  - Développement de nouvelles fonctionnalités JavaScript dans `assets/js/` (ex: mode plein écran, boutons d'exécution, affichage conditionnel).
  - Résolution de bugs de compilation Jekyll ou d'affichage sous Just the Docs.
- **Quand NE PAS l'activer :**
  - Rédaction de contenu pédagogique ou de tutoriels ➔ Utiliser `tutorial-writer`.
  - Synchronisation avec le dépôt central ➔ Utiliser `sync-theme`.
  - Configuration de l'agent IA ➔ Utiliser `project-setup`.

# 3. Entrées & Ressources à Charger
- Référence locale : `.agents/references/conventions/jekyll-and-theme-conventions.md`.
- Fichiers sources : `_config.yml`, `_layouts/`, `_includes/`, `assets/css/`, `assets/js/`.

# 4. Contraintes & Règles Inviolables
- **Séparation Stricte du CSS :** Interdiction absolue d'écrire du CSS inline (balises `<style>` ou attributs `style="..."`) dans les fichiers HTML ou Liquid des layouts et includes. Tout le code CSS doit être placé dans les fichiers `.css` dédiés.
- **Composants Partagés dans `base.css` :** Les styles des composants réutilisés dans plusieurs layouts (ex: cartes, listes) doivent obligatoirement résider dans `assets/css/base.css`.
- **Chargement Conditionnel par Layout :** Charger un fichier CSS spécifique uniquement lorsque `page.layout` le nécessite via le filtre Liquid normé.
- **Syntaxe Liquid `jsonify` Sécurisée :** Ne jamais entourer `{{ variable | jsonify }}` de guillemets manuels en JavaScript.
- **Minimalisme & Performance :** Ne pas introduire de frameworks ou bibliothèques tierces sans justification validée. Préférer le Vanilla JS et Vanilla CSS légers.

# 5. Procédure Pas-à-Pas
1. **Étape 1 : Analyse d'Impact :** Identifier le layout ou composant ciblé, vérifier les dépendances existantes avec `base.css` et les layouts enfants.
2. **Étape 2 : Implémentation Modulaire :**
   - Si modification de style : modifier le fichier `assets/css/[layout].css` ou `base.css`.
   - Si composant HTML : modifier ou créer `_includes/[composant].html` avec code sémantique épuré.
   - Si script JS : ajouter la fonction dans `assets/js/` avec responsabilité unique et chargement `defer`.
3. **Étape 3 : Contrôle de Régression :** Vérifier que les variables Liquid ne produisent pas d'erreurs d'échappement et que Just the Docs conserve sa navigation intacte.

# 6. Gestion des Ambiguïtés & Décisions
- Si une règle CSS s'applique à un layout existant ET à un nouveau composant : basculer la règle dans `base.css` pour éviter toute duplication.

# 7. Format de Sortie & Livrables
- Le code source modifié ou créé avec explication de la séparation des préoccupations.
- Les instructions de test visuel local (`bundle exec jekyll serve`).

# 8. Contrôle Qualité (Checklist Binaire)
- [ ] Aucun style inline n'a été inséré dans les fichiers HTML/Liquid ?
- [ ] Les styles partagés sont-ils bien dans `base.css` ?
- [ ] Les variables JavaScript injectées depuis Liquid utilisent-elles `jsonify` sans guillemets superflus ?
- [ ] L'architecture des assets respecte-t-elle la nomenclature du projet ?

# 9. Gestion des Erreurs Fréquentes
| Erreur Typique | Cause | Solution Immédiate |
| :--- | :--- | :--- |
| Erreur de syntaxe JavaScript `""valeur""` | Double citation de `{{ val | jsonify }}` | Supprimer les guillemets autour de l'expression Liquid |
| Style écrasé ou non chargé | Oubli de déclaration du layout dans `css_layouts` | Ajouter le nom du layout dans la liste `split: ','` du header |

# 10. Exemples Concrets
> **Ajout d'un style spécifique pour le layout `session` :**  
> Créer `assets/css/session.css`, y inscrire les classes propres à l'affichage des sessions, et s'assurer que `session` est présent dans le bloc Liquid d'inclusion CSS de `_includes/head.html`.
