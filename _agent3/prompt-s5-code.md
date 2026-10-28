# MISSION : Implémentation du code cible de la Session S5 (Fonctions & Persistance JSON)

Tu agis en tant qu'**Agent 3 (Développeur & Responsable du Code de Session)** au sein de la chaîne de production Solicode.
Ta mission est de finaliser et tester le code cible complet de la session S5 dans `_plan-réalisation-tutos/S5/code-a-apprendre/` (et dans `app-sessions/S5/` si ce dossier miroir existe).

---

## 1. Contexte Pédagogique (Niveau N1 Débutant)

Dans la Session S5, l'apprenant passe de données codées en dur dans `index.php` (S4) à une architecture modulaire en deux phases :
1. **Phase 1 :** Modularisation par les fonctions dans un fichier séparé `fonctions.php`.
2. **Phase 2 :** Persistance et extraction des données dans des fichiers externes JSON (`data/*.json`), chargées via `file_exists()`, `file_get_contents()` et `json_decode(..., true)`.

---

## 2. Spécification des Fichiers à Créer et Modifier

### A. Créer le dossier et les fichiers JSON de données
Emplacement : `_plan-réalisation-tutos/S5/code-a-apprendre/data/`

1. **`data/articles.json`** :
Contient le tableau JSON des articles du Blog avec les attributs nécessaires au template :
```json
[
  {
    "id": 1,
    "titre": "Comment structurer ses composants UI avec Atomic Design ?",
    "contenu": "Découvrez les concepts fondamentaux pour concevoir des composants d'interface modulaires, cohérents et réutilisables dans vos projets web.",
    "image": "article-example.png",
    "date_creation": "2026-02-14",
    "categorie_libelle": "Développement",
    "categorie_couleur": "bleu"
  },
  {
    "id": 2,
    "titre": "Maîtriser les micro-interactions UX",
    "contenu": "Une interface belle n'est pas suffisante : découvrez comment de subtiles animations CSS et retours visuels améliorent l'expérience utilisateur.",
    "image": "article-example.png",
    "date_creation": "2026-02-10",
    "categorie_libelle": "Design UI/UX",
    "categorie_couleur": "rose"
  }
]
```

2. **`data/categories.json`** :
Contient le tableau JSON des catégories du Blog :
```json
[
  {
    "id": 1,
    "libelle": "Développement"
  },
  {
    "id": 2,
    "libelle": "Design UI/UX"
  }
]
```

---

### B. Mettre à jour `_plan-réalisation-tutos/S5/code-a-apprendre/fonctions.php`
Le fichier de fonctions doit charger dynamiquement les données depuis les fichiers JSON ci-dessus :

```php
<?php
// S5 : Fonctions modulaires avec chargement de données depuis des fichiers JSON

/**
 * Récupère la liste des derniers articles depuis le fichier JSON
 * @return array Liste des articles sous forme de tableaux associatifs
 */
function get_derniers_articles() {
    $fichier = __DIR__ . '/data/articles.json';
    if (!file_exists($fichier)) {
        return [];
    }
    $contenu_json = file_get_contents($fichier);
    $articles = json_decode($contenu_json, true);
    return is_array($articles) ? $articles : [];
}

/**
 * Récupère la liste des catégories depuis le fichier JSON
 * @return array Liste des catégories sous forme de tableaux associatifs
 */
function get_categories() {
    $fichier = __DIR__ . '/data/categories.json';
    if (!file_exists($fichier)) {
        return [];
    }
    $contenu_json = file_get_contents($fichier);
    $categories = json_decode($contenu_json, true);
    return is_array($categories) ? $categories : [];
}
?>
```

---

### C. Vérifier `_plan-réalisation-tutos/S5/code-a-apprendre/index.php`
Le fichier contrôleur principal reste concis et chef d'orchestre :

```php
<?php
// S5 : Contrôleur allégé - Modularité par fonctions et données externes
require_once 'fonctions.php';

$articles = get_derniers_articles();

$categories = get_categories();

require 'index-template.php';
?>
```

---

## 3. Contraintes Techniques Impératives

1. **Encodage strict UTF-8 sans BOM :** Tous les fichiers créés (`.json`, `.php`) doivent impérativement être encodés en UTF-8 sans BOM.
2. **Compatibilité ascendante :** Le rendu final dans le navigateur (en combinant `code-a-apprendre/` avec `dossier-depart/index-template.php`) doit afficher exactement les cartes et filtres sans avertissement PHP (`notice` ou `warning`).
3. **Miroir `app-sessions/S5/` :** Si le dossier `app-sessions/S5/` existe dans le dépôt, y appliquer exactement les mêmes modifications.

---

## 4. Livrable Attendu de ta Part

1. Les fichiers créés et modifiés sur disque.
2. La validation du test en ligne de commande :
   ```powershell
   php -r "require '_plan-réalisation-tutos/S5/code-a-apprendre/fonctions.php'; \$a = get_derniers_articles(); \$c = get_categories(); exit(count(\$a) == 2 && count(\$c) == 2 ? 0 : 1);"
   ```
3. Une confirmation explicite que le code cible S5 est prêt pour que l'Agent Planificateur puisse verrouiller le plan de réalisation `plan-developpement.md`.
