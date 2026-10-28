---
layout: tuto
title: "Lire et décoder un fichier avec file_get_contents et json_decode"
sous_titre: "Charger dynamiquement des données persistées depuis le système de fichiers"
slug: "lire-decoder-fichier-file-get-contents-json-decode"
permalink: /tutos/lire-decoder-fichier-file-get-contents-json-decode/
tuto_id: "T.123.162"
version: "normal"
ua: "UA.123.16"
nav_order: 2
simplified: true
data_html: ""
data_css: ""
data_js: ""
data_php: ""
---

## 1. Contexte & Objectif

Dans le tutoriel précédent (T.123.161), vous avez créé les fichiers de données externes `data/articles.json` et `data/categories.json`.  
Pour le moment, ces fichiers ne sont pas encore reliés à votre application : votre module `fonctions.php` renvoie toujours des tableaux statiques codés en dur.

Dans ce tutoriel, vous allez finaliser l'architecture de la session S5. Vous allez modifier les fonctions de `fonctions.php` pour lire le contenu des fichiers JSON avec `file_get_contents()` et les transformer en tableaux PHP avec `json_decode()`.  
Vous allez également sécuriser votre code avec `file_exists()` et la constante magique `__DIR__`.

* **Objectif technique :** Remplacer les retours en dur de `fonctions.php` par la lecture et le décodage dynamique de `data/articles.json` et `data/categories.json`.
* **Prérequis :** Avoir terminé le tutoriel `T.123.161` et disposer des fichiers JSON valides dans le dossier `data/`.

```mermaid
flowchart LR
    A["data/articles.json<br>(Texte brut JSON)"] -->|file_get_contents| B["Chaîne JSON en mémoire"]
    B -->|json_decode(..., true)| C["Tableau PHP associatif"]
    C -->|return| D["index.php<br>(Contrôleur)"]
    D --> E["index-template.php<br>(Vue d'affichage)"]
```

---

## 2. Théorie Pas-à-Pas

### 2.1. Construire un chemin de fichier fiable avec `__DIR__`

En PHP, les chemins relatifs simples comme `'data/articles.json'` dépendent du dossier d'exécution et peuvent provoquer des erreurs si un script est inclus depuis un autre répertoire.

Pour éviter ce problème, on utilise la **constante magique `__DIR__`**, qui contient le chemin absolu du dossier où se trouve le fichier PHP actuel :

```php
<?php
// Construit le chemin absolu vers le fichier de données
$chemin = __DIR__ . '/data/articles.json';
echo "Chemin absolu : " . $chemin;
```

### 2.2. Vérifier la présence d'un fichier avec `file_exists()`

Avant d'ouvrir un fichier, un développeur Web professionnel vérifie toujours si le fichier existe pour éviter les erreurs d'exécution (*Warning: file_get_contents...*).

On utilise la fonction native **`file_exists()`** :

```php
<?php
$fichier = __DIR__ . '/data/articles.json';

if (!file_exists($fichier)) {
    echo "Fichier introuvable.";
} else {
    echo "Fichier prêt pour la lecture.";
}
```

Si le fichier est absent, notre fonction renverra un tableau vide `[]` par sécurité, évitant ainsi de faire planter l'affichage du site.

### 2.3. Lire avec `file_get_contents()` et décoder avec `json_decode()`

Pour charger les données d'un fichier texte en mémoire PHP, on procède en deux étapes simples :

1. **`file_get_contents($chemin)`** : Lit l'intégralité du fichier sous forme de chaîne de caractères (texte brut).
2. **`json_decode($texte, true)`** : Analyse la chaîne JSON et la convertit en structure PHP.

```php
<?php
// Exemple de décodage en mémoire
$json_texte = '[{"id": 1, "nom": "Web"}]';

// Le second paramètre true est OBLIGATOIRE pour obtenir un tableau associatif
$donnees = json_decode($json_texte, true);

echo "Nom récupéré : " . $donnees[0]['nom'];
```

> **Attention au second paramètre `true` :**  
> Si vous oubliez d'écrire `true` dans `json_decode($json, true)`, PHP créera des objets standards (`stdClass`) au lieu de tableaux associatifs, ce qui provoquera une erreur lors de l'accès aux clés avec `$article['titre']`.

---

## 3. Pratique & Réalisation Guidée

### Étape 1 — Modifier la fonction `get_derniers_articles()` dans `fonctions.php`

1. Ouvrez `fonctions.php` dans votre éditeur VS Code.
2. Remplacez le corps de la fonction `get_derniers_articles()` par la lecture dynamique :

```php
/**
 * Récupère la liste des derniers articles depuis le fichier JSON
 * @return array Liste des articles sous forme de tableaux associatifs
 */
function get_derniers_articles() {
    $fichier = __DIR__ . '/data/articles.json';
    
    // 1. Vérification de sécurité
    if (!file_exists($fichier)) {
        return [];
    }
    
    // 2. Lecture du fichier texte
    $contenu_json = file_get_contents($fichier);
    
    // 3. Décodage en tableau associatif
    $articles = json_decode($contenu_json, true);
    
    // 4. Renvoi des données ou d'un tableau vide en cas d'erreur
    return is_array($articles) ? $articles : [];
}
```

### Étape 2 — Modifier la fonction `get_categories()` dans `fonctions.php`

1. Appliquez la même logique à la fonction `get_categories()` pour charger `data/categories.json` :

```php
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
```

2. Enregistrez les modifications avec `Ctrl + S`.

### Étape 3 — Tester et observer la magie de la persistance externe

1. Ouvrez votre navigateur Web sur `http://localhost:8000/index.php`.
2. Constatez que la page d'accueil s'affiche parfaitement, avec les deux articles et les filtres de catégories.
3. **Expérimentation pratique :**
   - Ouvrez le fichier `data/articles.json` dans VS Code.
   - Modifiez le titre du premier article en ajoutant le mot `[NOUVEAU]` au début du titre.
   - Enregistrez `articles.json`.
   - Retournez sur votre navigateur et actualisez la page (`F5`).
4. **Résultat :** Le titre se met à jour instantanément sur votre site sans avoir touché au moindre fichier de code PHP !

Vous avez atteint l'objectif complet de la session S5 : une séparation nette entre le contrôleur d'orchestration (`index.php`), le module d'accès aux données (`fonctions.php`), le template HTML (`index-template.php`) et les données persistées (`data/*.json`).

---

## 4. Livrable & Critères de Réussite

### 4.1. Emplacement dans votre dépôt d'autoformation

Dans votre dépôt GitHub annuel d'autoformations, déposez votre fichier dans le dossier suivant :

```text
php/lire-donnees-fichiers/lire-decoder-fichier-file-get-contents-json-decode/
```

### 4.2. Contenu attendu du livrable

Votre dossier de livrable doit contenir :
* **`fonctions.php`** : Le module finalisé lisant dynamiquement les fichiers JSON.

```php
<?php
// fonctions.php — Module de gestion des données du Blog avec persistance JSON

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
```

### 4.3. Critères de réussite

* [ ] La constante `__DIR__` est utilisée pour construire les chemins absolus vers les fichiers JSON.
* [ ] La fonction `file_exists()` sécurise la lecture avant tout appel à `file_get_contents()`.
* [ ] Le second argument `true` est explicitement présent dans `json_decode($contenu, true)`.
* [ ] Les deux fonctions renvoient un tableau de repli `[]` si les fichiers sont absents ou corrompus.
* [ ] Modifier une valeur dans `data/articles.json` met à jour l'affichage dans le navigateur sans modifier le code PHP.
* [ ] Le livrable est constitué exclusivement de code source commité sur GitHub, sans capture d'écran.

---

## 5. Glossaire

* **`__DIR__`** : Constante magique de PHP qui contient le chemin absolu du dossier du fichier courant.
* **`file_exists()`** : Fonction native PHP qui vérifie si un fichier ou un dossier existe physiquement sur le disque.
* **`file_get_contents()`** : Fonction native PHP qui lit l'intégralité d'un fichier et renvoie son contenu sous forme de chaîne de caractères.
* **`json_decode()`** : Fonction native PHP qui analyse une chaîne au format JSON et la convertit en structure de données PHP (tableau associatif ou objet).
* **Tableau de repli (Fallback)** : Valeur par défaut (comme un tableau vide `[]`) renvoyée pour éviter qu'une erreur ne bloque le reste du programme.
