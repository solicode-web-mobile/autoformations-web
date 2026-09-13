## Règle — Distinction entre chemin apprenant et chemin du site

Les chemins affichés dans les consignes adressées à l’apprenant doivent correspondre à **son espace de travail**.

Ne jamais présenter à l’apprenant un chemin interne utilisé uniquement par le site d’autoformation.

Exemple de chemin interne du site :

```html
src="{{'/autoformations-web/code/css/tuto-2-css.html' | relative_url}}"
```

Ce chemin est réservé à l'affichage du résultat dans le site Spartel.

Il ne doit pas être présenté comme le chemin que l’apprenant doit créer ou utiliser dans son projet.

Dans les consignes destinées à l’apprenant, utiliser uniquement le nom du fichier ou le chemin de travail prévu pour l’exercice.

Exemple :

```text
tuto-2-css.html
```

ou, lorsque le contexte du dossier est nécessaire :

```text
code/css/tuto-2-css.html
```

### Principe

**Chemin du site → réservé à l’iframe et au fonctionnement de l’autoformation.**

**Chemin apprenant → utilisé dans les consignes et les actions demandées à l’apprenant.**

Les deux chemins ne doivent jamais être confondus.



## Règle — Organisation des fichiers de l’apprenant

Chaque tutoriel doit disposer de son **propre dossier de travail** pour les fichiers utilisés par l’apprenant.

Le rédacteur doit utiliser cette organisation dans les consignes du tutoriel.

Exemple :

```text
tuto-2/
├── tuto-2-css.html
└── tuto-2-css.css
```

Le nom exact du dossier et des fichiers doit être cohérent avec la convention du projet.

Ne pas demander à l’apprenant de modifier directement les fichiers internes du site Spartel.

Le fichier utilisé par l’iframe du tutoriel peut être différent du fichier manipulé par l’apprenant lorsque l’architecture du site le nécessite.

### Principe

```text
Dossier du tutoriel de l’apprenant
        ↓
fichiers qu’il crée et modifie
        ↓
résultat du tutoriel

Site Spartel
        ↓
fichier de démonstration
        ↓
iframe
```

Ces deux espaces doivent être traités séparément dans la rédaction.


## Règle — Écriture des données de départ dans le Front Matter

Les champs `data_html`, `data_css`, `data_js` et `data_php` utilisent la syntaxe YAML multiligne avec `|`.

Le contenu doit être écrit comme du **vrai code**, sans ajouter de caractères d’échappement devant `<`, `>`, `"`, `'` ou les autres caractères du code.

Correct :

```yaml
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Mon article</title>
    </head>
    <body>
        <h1>Mon article</h1>
        <p>Bienvenue sur ma page.</p>
    </body>
    </html>
```

Incorrect :

```yaml
data_html: |
    \<!DOCTYPE html>
    \<html lang="fr">
    \<head>
        \<meta charset="UTF-8">
    \</head>
    \</html>
```

Les caractères d’échappement ajoutés uniquement pour représenter le code dans une explication ou une interface ne doivent pas être présents dans le fichier YAML réel.

### Règle d'indentation

Toutes les lignes appartenant à la valeur de `data_html`, `data_css`, `data_js` ou `data_php` doivent être indentées de manière cohérente sous le champ YAML.

Exemple :

```yaml
data_html: |
    <!DOCTYPE html>
    <html lang="fr">
        ...
    </html>
```

Le code contenu dans `data_*` doit rester directement utilisable comme code source.



## Règle — Utilisation des chemins internes dans les iframes

Le chemin utilisé dans une `iframe` représente **l’emplacement du fichier de démonstration sur le site Spartel**, et non l’emplacement du fichier chez l’apprenant.

Exemple :

```html
<iframe
    class="auto-wrapper"
    src="{{'/autoformations-web/code/css/tuto-2-css.html' | relative_url}}"
    height="700"
    title="Résultat final du Tuto 2">
</iframe>
```

Ce chemin ne doit pas être utilisé dans une consigne telle que :

> Créez le fichier `/autoformations-web/code/css/tuto-2-css.html`.

Cette formulation est incorrecte pour l’apprenant.

La consigne doit présenter le fichier de travail de l’apprenant :

> Créez le fichier `tuto-2-css.html`.

### Distinction obligatoire

```text
Consigne apprenant
→ tuto-2-css.html

Démonstration du site
→ /autoformations-web/code/css/tuto-2-css.html
```

La valeur de `src` de l’iframe doit rester le chemin interne réel du site.


## Règle — Contrôle des chemins avant validation

Avant de valider un tutoriel, vérifier chaque chemin de fichier.

Pour chaque chemin rencontré, déterminer s’il s’agit :

1. d’un **chemin de travail de l’apprenant** ;
2. d’un **chemin interne du site Spartel** ;
3. d’un **chemin de démonstration utilisé par une iframe**.

Ne jamais utiliser un chemin interne du site dans une consigne destinée à l’apprenant.

Ne jamais remplacer le chemin interne de l’iframe par le chemin simplifié destiné à l’apprenant.

La distinction doit être conservée dans tout le tutoriel :

```text
Chemin apprenant → consignes
Chemin site → iframe / démonstration
```

## Règle — Contrôle du Front Matter

Vérifier également que :

* `data_html` contient du HTML valide ;
* `data_css` contient du CSS valide lorsque nécessaire ;
* `data_js` contient du JavaScript valide lorsque nécessaire ;
* `data_php` contient du PHP valide lorsque nécessaire ;
* aucun caractère d’échappement artificiel n’a été ajouté au code ;
* l’indentation YAML est correcte ;
* les données de départ correspondent exactement à la section « Données de départ » ;
* `window.pageData` utilise ces mêmes données.
