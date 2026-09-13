# Cahier des Charges - Création de la Page de Détail d'un Article

## 1. Description du Travail à Faire
L'objectif est de préparer l'apprenant à reproduire la page détaillée d'un article de blog (`page-detail-v1.html` et son fichier CSS associé) lors d'un **Tutoriel de Synthèse** final (le dernier tutoriel). 
Le projet ne sera pas construit par petites étapes itératives sur le même fichier. L'apprenant s'entraînera d'abord sur des exemples isolés lors des premiers tutoriels, puis construira la version finale d'une seule traite à la fin du cours.

**Cible finale (Tutoriel de Synthèse) :**
- Structure complète en HTML sémantique (article, header, main, section, figure, blockquote).
- Mise en page centrée (utilisation de max-width) et esthétique riche (typographie, bordures, couleurs d'arrière-plan, puces de listes, citations).
- Rendu correspondant au code final se trouvant dans `blog/page-detail-v1/`.

---

## 2. Stratégie Pédagogique et Préparation

La stratégie repose sur une préparation rigoureuse. Le contenu de la version finale de la page de blog dicte exactement ce qui doit être enseigné dans les tutoriels précédents.

### Les Tutoriels de Préparation (Tutos 1 à 9)
* **Objectif :** Chaque tutoriel (1 à 9) introduit des notions spécifiques à travers des exercices isolés (mini-projets ou fichiers de test). 
* **Validation des exemples :** Il faut s'assurer que les exemples donnés dans ces tutoriels sont suffisants et pertinents pour armer l'apprenant face au projet final. Par exemple :
  - *Tuto 5* : Doit bien expliquer les couleurs de fond et `display: inline-block` (pour l'en-tête et les badges).
  - *Tuto 7* : Doit bien expliquer le dimensionnement des images et le centrage avec `max-width` (pour le corps de l'article).
  - *Tuto 9* : Doit bien expliquer les espacements internes/externes, bordures et le style des listes.

### Le Tutoriel de Synthèse (Dernier Tuto)
* **Objectif :** Réaliser le projet final de A à Z.
* L'apprenant va utiliser toutes les compétences accumulées dans les tutos 1 à 9 pour reproduire la maquette cible (`page-detail-v1.html`), sans aucune itération intermédiaire fournie dans les dossiers.

---

## 3. Architecture et Organisation des Fichiers

L'arborescence du projet reflète cette nouvelle stratégie. Tous les dossiers d'itérations ont été retirés au profit d'une séparation claire entre les "exercices" et le "projet de synthèse".

```text
code/
│
├── html/ (Exercices d'apprentissage HTML purs et Projet Final HTML)
│   ├── tuto-1/ (Bases HTML)
│   │   └── tuto-1-html.html
│   ├── tuto-3/ (Structure Texte)
│   │   └── tuto-3-html.html
│   ├── tuto-4/ (Listes)
│   │   └── tuto-4-html.html
│   ├── tuto-5/ (Liens)
│   │   └── tuto-5-html.html
│   ├── tuto-6/ (Images)
│   │   └── tuto-6-html.html
│   └── tuto-7/ (Tutoriel de Synthèse HTML)
│       ├── images/
│       └── page-detail-v1.html
│
├── css/ (Exercices d'apprentissage CSS isolés et Projet Final)
│   ├── tuto-1/ (Syntaxe CSS)
│   │   └── tuto-1-css.html
│   ├── tuto-2/ (Liaison HTML-CSS)
│   │   ├── tuto-2-css.html
│   │   └── tuto-2-css.css
│   ├── tuto-3/ (Sélecteurs)
│   │   ├── tuto-3-css.html
│   │   └── tuto-3-css.css
│   ├── tuto-4/ (Texte & Couleurs)
│   │   ├── tuto-4-css.html
│   │   └── tuto-4-css.css
│   └── tuto-10/ (Tutoriel de Synthèse - Espace de travail de l'apprenant)
│       ├── images/
│       ├── page-detail-v1.html
│       └── css/style.css
│
└── blog/ (Dossier de présentation cible - Code final du formateur)
    └── page-detail-v1/
        ├── images/                   (Ressources partagées / images du projet)
        ├── page-detail-v1.html       (Code HTML cible)
        └── css/style.css             (Code CSS cible)
```

**Règles de gestion :**
1. **Exercices isolés** : Les fichiers dans `html/` et `css/` sont placés dans leurs dossiers `tuto-X/` respectifs sans modification de leur code.
2. **Espace de travail final** : Le tutoriel final est ajouté à la liste sous la forme d'un dossier (ex: `css/tuto-10/`). C'est ici que l'apprenant réalisera le projet de synthèse de A à Z.
3. **Dossier de Présentation** : Le dossier `blog/page-detail-v1/` sert **exclusivement de présentation cible**. Il contient le code de référence parfait et la maquette, et ne doit pas être modifié par les étapes de l'apprenant.
4. **Nettoyage** : Tout ancien fichier brouillon (ex: `page-detail-html-v1.tuto-3-html.html` dans le dossier de présentation) sera supprimé.
