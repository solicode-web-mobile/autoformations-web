<?php
function get_derniers_articles() {
    return [
        [
            'id' => 1,
            'titre' => 'Comment structurer ses composants UI avec Atomic Design ?',
            'contenu' => 'Découvrez les concepts fondamentaux...',
            'image' => 'article-example.png',
            'date_creation' => '2026-02-14',
            'categorie_libelle' => 'Développement',
            'categorie_couleur' => 'bleu'
        ],
        [
            'id' => 2,
            'titre' => 'Maîtriser les micro-interactions UX',
            'contenu' => 'Une interface belle n\'est pas suffisante...',
            'image' => 'article-example.png',
            'date_creation' => '2026-02-10',
            'categorie_libelle' => 'Design UI/UX',
            'categorie_couleur' => 'rose'
        ]
    ];
}

function get_categories() {
    return [
        ['id' => 1, 'libelle' => 'Développement'],
        ['id' => 2, 'libelle' => 'Design UI/UX']
    ];
}
?>