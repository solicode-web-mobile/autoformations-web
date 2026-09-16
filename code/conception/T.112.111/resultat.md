# Résultat — T.112.111 : Observer et identifier les données d'une application

## Maquette observée : `public-article.html`

### Données visibles

| Donnée             | Valeur observée dans la maquette                          |
|--------------------|-----------------------------------------------------------|
| `titre_article`    | Comment structurer ses composants UI avec Atomic Design ? |
| `nom_auteur`       | Jean Dupont                                               |
| `date_publication` | 14 Février 2026                                           |
| `nom_categorie`    | Développement                                             |
| `contenu_article`  | (texte complet de l'article)                              |

---

## Maquette observée : `admin-article-form.html`

### Données saisies

| Donnée             | Valeur saisie dans le formulaire            |
|--------------------|---------------------------------------------|
| `titre_article`    | Les meilleures pratiques de développement   |
| `nom_categorie`    | Développement                               |
| `statut_article`   | Brouillon                                   |
| `image_article`    | (fichier image téléchargé)                  |
| `contenu_article`  | (texte rédigé dans l'éditeur)               |

---

## Maquette observée : `public-index.html`

### Données visibles dans les cartes d'articles

| Donnée             | Article 1                               | Article 2                              |
|--------------------|-----------------------------------------|----------------------------------------|
| `titre_article`    | Comment bien débuter avec Tailwind CSS ? | L'importance des micro-interactions   |
| `extrait_article`  | Découvrez les concepts fondamentaux...  | Une interface belle n'est pas...       |
| `nom_categorie`    | Développement                           | UI / UX                                |
| `date_publication` | 14 Fév 2026                             | 10 Fév 2026                            |
| `duree_lecture`    | 5 min                                   | 3 min                                  |

---

## Données identifiées au total

```text
titre_article
contenu_article
extrait_article
nom_auteur
date_publication
nom_categorie
statut_article
duree_lecture
image_article
```
