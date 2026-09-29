
# Formation CSS N1 — Plan complet

### 1. Architecture pédagogique globale

La progression CSS est organisée autour de cinq transformations successives :

**Appliquer → Dimensionner → Disposer → Harmoniser → Adapter**

| Session | UA                                                         | Finalité                                |
| ------- | ---------------------------------------------------------- | --------------------------------------- |
| **S2**  | **UA.122.21 — Appliquer des règles CSS**                   | Découvrir et appliquer les bases du CSS |
| **S3**  | **UA.122.22 — Gérer les dimensions et les espacements**    | Construire des composants maîtrisés     |
| **S3**  | **UA.122.23 — Disposer les éléments avec CSS**             | Organiser les composants avec Flexbox   |
| **S7**  | **UA.122.24 — Harmoniser la présentation d’une interface** | Réutiliser et uniformiser les styles    |
| **S12** | **UA.122.25 — Adapter une interface aux écrans**           | Construire une interface responsive     |

---

## 2. S2 — UA.122.21 : Appliquer des règles CSS

Cette UA constitue le **socle fondamental**. Les tutoriels existants sont conservés exactement tels quels.

| Ordre | Identifiant     | Titre                     | Notions principales                                                                                          |
| ----: | --------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------ |
|     1 | **T.122.211**   | Syntaxe CSS               | règle CSS, sélecteur, propriété, valeur, déclaration, `;`, `{}`                                              |
|     2 | **T.122.212**   | Liaison HTML–CSS          | inline, interne, externe, `<link>`, `rel`, `href`                                                            |
|     3 | **T.122.213**   | Sélecteurs                | classe, groupement, descendant                                                                               |
|     4 | **T.122.214**   | Texte & Couleurs          | `font-family`, `font-size`, `font-weight`, `font-style`, `text-align`, `line-height`, couleurs hexadécimales |
|     5 | **T.122.215**   | Arrière-plans & Affichage | `background`, `background-color`, `display: block`, `inline`, `inline-block`, `padding`                      |
|     6 | **T.122.216**   | Liens & Listes            | sélecteurs descendants, `margin`, `padding` sur listes et liens                                              |
|     7 | **T.122.217**   | Dimensions                | `width`, `height`, `max-width`, image `width: 100%`, `object-fit: cover`                                     |
|     8 | **T.122.218**   | Espacements & Bordures    | `margin: auto`, raccourcis `margin`, marge négative, `padding`, `border`, `border-radius`                    |
|     9 | **T.122.219**   | Affichage CSS             | `display: none`, `display: block`, modification du comportement d’un élément                                 |
|    10 | **T.122.21.10** | Projet de Synthèse CSS    | réinvestissement global                                                                                      |

Le projet de synthèse existant va déjà assez loin : architecture top-down, styles globaux, images fluides, dimensions, espacements, bordures et composants éditoriaux. 

#### État des acquis à la fin de S2

L’apprenant sait déjà :

- écrire une règle CSS ;
- relier HTML et CSS ;
- sélectionner des éléments ;
- styliser texte, couleurs, liens et listes ;
- gérer `width`, `height`, `max-width` ;
- utiliser `margin`, `padding`, `border`, `border-radius` ;
- comprendre `block`, `inline`, `inline-block` et `none` ;
- mettre en forme une page complète.

**Il ne faut donc pas recommencer ces notions dans S3.**

---

## 3. S3 — UA.122.22 : Gérer les dimensions et les espacements

### Intention pédagogique

L’objectif n’est plus d’apprendre `width`, `margin` ou `padding` comme des propriétés isolées.

L’objectif devient :

> **Construire une carte d’article avec un dimensionnement cohérent et un espacement maîtrisé.**

Les notions réellement nouvelles sont surtout `box-sizing`, les contraintes de dimensionnement et `gap`.

| ID             | Titre                                          | Objectif d’apprentissage                                                                    | Notions techniques                                                               |
| -------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **T.122.221**  | Comprendre le dimensionnement réel d’une carte | Comprendre comment contenu, `padding` et `border` influencent la taille réelle d’un élément | Box Model, `box-sizing`, `content-box`, `border-box`                             |
| **T.122.222**  | Contraindre les dimensions d’une carte         | Maintenir des cartes dans des dimensions cohérentes                                         | `width`, `min-width`, `max-width`, `min-height`, application dans un composant   |
| **T.122.223**  | Organiser l’espace dans une carte              | Séparer clairement contenu, image, titre et texte                                           | `padding`, `margin`, raccourcis d’espacement                                     |
| **T.122.224**  | Espacer plusieurs éléments avec `gap`          | Gérer simplement les espaces entre plusieurs éléments                                       | `gap`, `row-gap`, `column-gap`                                                   |
| **T.122.225**  | Construire une carte d’article homogène        | Réunir dimensionnement, espace et bordure dans un composant réutilisable                    | `box-sizing`, `max-width`, `padding`, `margin`, `gap`, `border`, `border-radius` |
| **T.122.22.6** | Projet de synthèse — Cartes d’articles         | Appliquer les acquis à plusieurs cartes homogènes de la page d’accueil                      | synthèse de l’UA                                                                 |

#### Pourquoi ne pas refaire `width`, `margin` et `padding` ?

Parce qu’ils sont déjà réellement enseignés. Le tutoriel T.122.217 utilise notamment `width`, `height`, `max-width` et `object-fit`, tandis que T.122.218 couvre `margin`, `padding`, les raccourcis et les bordures. 

Dans S3, ces propriétés deviennent donc **des outils de réalisation**, pas de nouvelles connaissances à mémoriser.

---

## 4. S3 — UA.122.23 : Disposer les éléments avec CSS

### Intention pédagogique

C’est l’étape où l’apprenant découvre réellement **Flexbox**.

La progression doit rester très limitée aux propriétés utiles à la page d’accueil du Blog.

| ID            | Titre                                       | Objectif d’apprentissage                                     | Notions techniques                                    |
| ------------- | ------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------- |
| **T.122.231** | Découvrir Flexbox                           | Comprendre le principe d’un conteneur flexible               | `display: flex`, conteneur flex, éléments flex        |
| **T.122.232** | Choisir la direction des éléments           | Organiser les éléments horizontalement ou verticalement      | `flex-direction`, `row`, `column`                     |
| **T.122.233** | Répartir les éléments                       | Contrôler la position des éléments sur l’axe principal       | `justify-content`, `start`, `center`, `space-between` |
| **T.122.234** | Aligner les éléments                        | Contrôler l’alignement sur l’axe secondaire                  | `align-items`, axes principal et secondaire           |
| **T.122.235** | Faire passer les éléments à la ligne        | Construire plusieurs lignes de cartes                        | `flex-wrap`, `wrap`                                   |
| **T.122.236** | Espacer les éléments Flexbox                | Appliquer un espacement propre entre les cartes              | `gap` avec Flexbox                                    |
| **T.122.237** | Répartir l’espace entre les cartes          | Permettre à plusieurs cartes de partager l’espace disponible | `flex`, `flex-grow` niveau introductif                |
| **T.122.238** | Projet de synthèse — Disposition des cartes | Réaliser la disposition prévue pour la page d’accueil        | Flexbox complet                                       |

#### Compétence attendue

À la fin de l’UA, l’apprenant doit savoir réaliser des consignes du type :

> mettre les cartes sur une ligne ;

> centrer les éléments ;

> espacer les cartes ;

> faire passer les cartes à la ligne ;

> distribuer l’espace disponible.

Il n’est pas nécessaire d’introduire à ce stade `order`, `flex-basis`, des calculs complexes ou des cas avancés d’alignement.

---

## 5. S7 — UA.122.24 : Harmoniser la présentation d’une interface

### Intention pédagogique

Cette UA marque un changement important.

L’apprenant ne stylise plus seulement **une page** : il doit appliquer un **langage visuel commun** à plusieurs pages du Blog.

Les notions nouvelles doivent donc concerner principalement la réutilisation des règles CSS et la maîtrise de la cascade.

| ID             | Titre                                      | Objectif d’apprentissage                                 | Notions techniques                                             |
| -------------- | ------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------------------- |
| **T.122.241**  | Réutiliser une classe CSS                  | Appliquer le même style à plusieurs éléments             | classes réutilisables                                          |
| **T.122.242**  | Regrouper les règles communes              | Réduire les répétitions dans la feuille CSS              | sélecteurs groupés, règles communes                            |
| **T.122.243**  | Comprendre la cascade CSS                  | Comprendre pourquoi une règle est appliquée ou remplacée | cascade, ordre des règles, spécificité simple                  |
| **T.122.244**  | Comprendre l’héritage                      | Éviter de répéter certains styles sur tous les éléments  | héritage, propriétés héritées                                  |
| **T.122.245**  | Gérer les états d’un élément               | Donner un retour visuel aux interactions                 | `:hover`, `:focus`, pseudo-classes simples                     |
| **T.122.246**  | Centraliser les valeurs visuelles          | Réutiliser les couleurs et espacements communs           | variables CSS, `:root`, `--nom`, `var()`                       |
| **T.122.247**  | Construire des styles communs aux pages    | Harmoniser les pages Accueil, Détail et Catégories       | feuille CSS commune, classes communes, composants              |
| **T.122.24.8** | Projet de synthèse — Harmonisation du Blog | Uniformiser la présentation via des fichiers séparés     | `global.css`, `layout.css`, `components.css`, balises `<link>` |

#### Règles strictes à appliquer en S7

*   **Les Variables CSS (`:root`)** : À partir de S7, l'utilisation des variables pour le thème (couleur primaire, fond, texte) est **obligatoire**. Aucune couleur en dur ne doit être tolérée dans le code.
*   **Organisation physique des fichiers** : Lors du projet de synthèse, l'apprenant doit être guidé pour séparer son CSS en plusieurs fichiers distincts (`global.css`, `layout.css`, `components.css`) reliés via plusieurs balises `<link>` ou `@import`. Cela prépare au travail modulaire de la S12.

#### Pourquoi cette UA est placée en S7

L’apprenant doit d’abord savoir **faire fonctionner une page** et **organiser ses éléments** avant de lui demander :

> « Comment éviter de refaire trois fois le même CSS ? »

C’est ici que le CSS commence à être perçu comme un **code réutilisable et maintenable**.

---

## 6. S12 — UA.122.25 : Adapter une interface aux écrans

### Intention pédagogique

Le responsive arrive en dernier parce qu’il repose sur les acquis précédents :

**dimensions → espacements → Flexbox → composants réutilisables.**

| ID            | Titre                                       | Objectif d’apprentissage                                        | Notions techniques                                                 |
| ------------- | ------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------ |
| **T.122.251** | Comprendre l’espace disponible              | Comprendre pourquoi une interface doit changer selon la largeur | viewport, largeur disponible, interface fluide                     |
| **T.122.252** | Utiliser des dimensions relatives           | Éviter certaines dimensions rigides                             | `%`, `rem`, `vw` à niveau introductif                              |
| **T.122.253** | Découvrir les Media Queries                 | Appliquer des styles selon la largeur de l’écran                | `@media`, `min-width`, `max-width`                                 |
| **T.122.254** | Adapter le conteneur et les espacements     | Faire évoluer les dimensions d’une interface                    | `max-width`, `padding`, `margin`, unités relatives + media queries |
| **T.122.255** | Adapter les cartes aux petits écrans        | Transformer la disposition pour mobile                          | Flexbox + media query                                              |
| **T.122.256** | Construire une disposition mobile et bureau | Passer d’une organisation mobile à une organisation bureau      | `flex-direction`, `flex-wrap`, `gap`, largeur des cartes           |
| **T.122.257** | Adopter une approche mobile-first           | Construire les styles à partir du petit écran                   | styles de base mobile, `min-width`, breakpoint                     |
| **T.122.258** | Projet de synthèse — Blog responsive        | Adapter la page d’accueil aux écrans mobile et bureau           | responsive complet                                                 |

#### Ce qui n’est pas nécessaire en N1

Je ne mettrais pas dans cette UA :

- CSS Grid ;
- `clamp()` ;
- container queries ;
- responsive avancé des images ;
- architecture CSS complexe ;
- animations responsive complexes.

Ces notions peuvent être introduites plus tard.

---

## 7. Vue complète du parcours

```text
S2
└── UA.122.21 — Appliquer des règles CSS
    ├── T.122.211  Syntaxe CSS
    ├── T.122.212  Liaison HTML–CSS
    ├── T.122.213  Sélecteurs
    ├── T.122.214  Texte & Couleurs
    ├── T.122.215  Arrière-plans & Affichage
    ├── T.122.216  Liens & Listes
    ├── T.122.217  Dimensions
    ├── T.122.218  Espacements & Bordures
    ├── T.122.219  Affichage CSS
    └── T.122.21.10 Projet de Synthèse CSS

S3
├── UA.122.22 — Gérer les dimensions et les espacements
│   ├── T.122.221  Dimensionnement réel
│   ├── T.122.222  Contraintes de dimensions
│   ├── T.122.223  Espace dans une carte
│   ├── T.122.224  Espacement avec gap
│   ├── T.122.225  Carte d’article homogène
│   └── T.122.22.6 Synthèse
│
└── UA.122.23 — Disposer les éléments avec CSS
    ├── T.122.231  Découvrir Flexbox
    ├── T.122.232  Direction
    ├── T.122.233  Répartition
    ├── T.122.234  Alignement
    ├── T.122.235  Retour à la ligne
    ├── T.122.236  Espacement Flexbox
    ├── T.122.237  Taille flexible
    └── T.122.238 Synthèse

S7
└── UA.122.24 — Harmoniser la présentation d’une interface
    ├── T.122.241  Réutiliser une classe
    ├── T.122.242  Règles communes
    ├── T.122.243  Cascade
    ├── T.122.244  Héritage
    ├── T.122.245  États
    ├── T.122.246  Variables CSS
    ├── T.122.247  Styles communs
    └── T.122.24.8 Synthèse

S12
└── UA.122.25 — Adapter une interface aux écrans
    ├── T.122.251  Espace disponible
    ├── T.122.252  Dimensions relatives
    ├── T.122.253  Media Queries
    ├── T.122.254  Conteneur et espacements adaptatifs
    ├── T.122.255  Cartes mobiles
    ├── T.122.256  Mobile / Bureau
    ├── T.122.257  Mobile-first
    └── T.122.258 Synthèse
```

---

## 8. Progression des compétences

| Étape         | Question que sait résoudre l’apprenant                                 |
| ------------- | ---------------------------------------------------------------------- |
| **UA.122.21** | « Comment appliquer un style à mon HTML ? »                            |
| **UA.122.22** | « Comment donner une taille et un espace cohérents à ma carte ? »      |
| **UA.122.23** | « Comment placer plusieurs cartes correctement ? »                     |
| **UA.122.24** | « Comment garder le même style sur plusieurs pages ? »                 |
| **UA.122.25** | « Comment faire fonctionner la même interface sur plusieurs écrans ? » |

La progression devient donc :

**Règle CSS → Composant → Layout → Système visuel → Responsive**

---

## 9. Principe N1 à appliquer à tous les nouveaux tutoriels

Chaque tutoriel doit rester centré sur **une transformation visible**.

La structure recommandée reste :

**Je vois → Je comprends → Je reproduis → Je teste → Je présente**

Et chaque notion doit être introduite parce qu’elle sert immédiatement la réalisation du Blog.

Exemple :

```css
.card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

L’apprenant ne mémorise pas seulement :

`display`, `flex-wrap`, `gap`.

Il comprend :

> « Je transforme cette liste de cartes pour qu’elles puissent se placer sur plusieurs lignes avec un espace régulier. »

---

## 10. Point de vigilance sur T.122.21.10

Le tutoriel existant T.122.21.10 est rédigé comme une **validation de l’ensemble du module CSS** et indique comme prérequis la maîtrise des tutoriels 1 à 9.

Comme il est déclaré **intouchable**, je ne recommande pas de le modifier.

Dans le référentiel pédagogique, il est simplement préférable de l'interpréter comme :

**« Projet de synthèse du socle CSS — UA.122.21 »**

et non comme la validation finale de toutes les compétences CSS du parcours.

La validation finale du CSS sera alors portée par les travaux de **S3, S7 et S12**, avec réutilisation progressive des acquis.