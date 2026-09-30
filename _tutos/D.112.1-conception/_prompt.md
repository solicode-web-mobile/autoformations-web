# _prompt.md — Règles spécifiques au Domaine D.112.1

Ce fichier documente les règles supplémentaires à respecter pour la rédaction des tutoriels du domaine **D.112.1 — Modéliser les données**.

Ces règles s'ajoutent aux règles générales du Skill `rédacteur-tutos`.

Elles sont **cumulatives** : chaque nouvelle règle s'ajoute aux règles précédentes sans les remplacer.

---

## Règle 1 — Utiliser les noms de pages, pas les noms de fichiers

Ne jamais nommer un fichier de maquette directement dans le contenu visible du tutoriel.

Utiliser le **nom de la page** à la place du nom du fichier.

| À éviter                  | À utiliser                              |
| ------------------------- | --------------------------------------- |
| `public-article.html`     | Page Détail d'un article                |
| `admin-article-form.html` | Page de création d'un article           |
| `public-index.html`       | Page d'accueil du Blog                  |
| `admin-articles.html`     | Page de gestion des articles            |
| `admin-categories.html`   | Page de gestion des catégories          |
| `admin-dashboard.html`    | Tableau de bord de l'administration     |
| `admin-login.html`        | Page de connexion admin                 |
| `public-categorie.html`   | Page des articles d'une catégorie       |
| `public-apropos.html`     | Page À propos                           |

---

## Règle 2 — Données de référence pour l'auteur

L'auteur de référence est défini avec **deux données séparées** :

| Donnée          | Valeur  |
| --------------- | ------- |
| `nom_auteur`    | Madani  |
| `prenom_auteur` | Ali     |

Ne jamais utiliser "Madani Ali" comme valeur unique d'une seule donnée `nom_auteur`.

Ne jamais utiliser Jean Dupont, ESSARRAJ Fouad, ou tout autre nom inventé.

---

## Règle 3 — Cibler une seule maquette par tutoriel de découverte

Pour les tutoriels de niveau N1 qui introduisent une nouvelle notion, se concentrer sur **une seule maquette** par tutoriel.

La maquette de référence du domaine D.112.1 est : **Page Détail d'un article**.

Une maquette supplémentaire peut être ajoutée uniquement si la notion l'exige et si elle est introduite progressivement.

---

## Règle 4 — Fichier résultat dans `code/conception/`

Le fichier de résultat d'un tutoriel du domaine D.112.1 est un fichier **Markdown** enregistré dans :

```text
code/conception/[Code du tuto].md
```

**Exemple :**

```text
code/conception/T.112.111.md
```

Le fichier utilise le layout Jekyll **`conception`** et définit un permalink propre.

**Front matter obligatoire :**

```yaml
---
layout: conception
title: "[Titre du résultat]"
tuto_id: "[Code du tuto]"
permalink: /code/conception/[Code du tuto]/
---
```

Ne pas créer de sous-dossier par tutoriel dans `code/conception/`.

Ne pas utiliser de fichier `.html` standalone pour les résultats.

---

## Règle 5 — Intégrer le résultat par iframe

Lorsqu'un tutoriel produit un résultat observable (tableau, liste, maquette annotée), l'intégrer dans le tutoriel avec une `iframe`.

Le `src` doit pointer vers le **permalink** du fichier `.md` du résultat.

Format à utiliser :

```html
<iframe
    class="auto-wrapper"
    src="{{ '/code/conception/T.XXX.XXX/' | relative_url }}"
    height="700"
    title="Résultat attendu — [Description courte]">
</iframe>
```

Le permalink utilisé dans `src` correspond au `permalink` défini dans le front matter du fichier résultat.

---

## Règle 6 — Structure des dossiers des tutoriels

Les tutoriels du domaine D.112.1 sont déposés dans :

```text
_tutos/C112/D.112.1/[Code du tuto]/[nom-du-fichier].md
```

**Exemple :**

```text
_tutos/C112/D.112.1/T.112.111/observer-et-identifier.md
```

---

## Règle 7 — Lien vers la maquette en ligne

Dans la section **Données de départ** de chaque tutoriel, ajouter un lien cliquable vers la maquette en ligne.

URL de la maquette du Blog :

```text
https://solicode-web-mobile.github.io/maquette-blog/index.html
```

Format à utiliser :

```markdown
👉 [Ouvrir la maquette du Blog](https://solicode-web-mobile.github.io/maquette-blog/index.html)
```

Ce lien doit apparaître juste avant la consigne d'ouverture du navigateur.

---

## Tableau récapitulatif des règles

| Règle | Description                                                                          |
| ----- | ------------------------------------------------------------------------------------ |
| 1     | Noms de pages, pas noms de fichiers                                                  |
| 2     | Auteur de référence : `nom_auteur` = Madani, `prenom_auteur` = Ali                  |
| 3     | Une seule maquette de référence par tutoriel (Page Détail article)                   |
| 4     | Résultat : fichier `.md` dans `code/conception/` avec `layout: conception`           |
| 5     | Intégrer le résultat avec une `iframe` pointant vers le permalink                    |
| 6     | Dossier tutoriels : `_tutos/C112/D.112.1/[Code]/`                                   |
| 7     | Lien vers la maquette en ligne dans la section Données de départ                     |
| 8     | Ne pas introduire "donnée métier" avant T.112.132 (réalités métier et entités)      |

---

## Règle 8 — Ne pas introduire la notion de "donnée métier" prématurément

La notion de **donnée métier** implique qu'une donnée appartient à une entité du domaine fonctionnel.

Or, la notion d'**entité** n'est découverte qu'en T.112.132 (réalités métier, identifiants, dépendances).

**Ne jamais introduire "donnée métier" avant T.112.132.**

Progression à respecter :

| Tutoriel   | Notion autorisée                          |
| ---------- | ----------------------------------------- |
| T.112.111  | Donnée, Valeur, Donnée visible            |
| T.112.112  | Donnée saisie, stockée, calculée          |
| T.112.121  | Description d'une donnée, type           |
| T.112.131  | Occurrence, répétition                    |
| T.112.132  | Réalité métier, entité ← ici seulement   |

Dans les tutoriels antérieurs à T.112.132, utiliser uniquement le mot **"donnée"** sans le qualifier de "métier".
