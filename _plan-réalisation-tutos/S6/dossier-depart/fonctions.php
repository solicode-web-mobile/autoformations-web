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