---
title: "Saisir et nommer les données"
layout: tuto
slug: "saisir-et-nommer-les-donnees"
permalink: /tutos/:slug/
tuto_id: "T.122.142"
type: "classique"
version: "normal"
ua: "UA.122.13"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

- créer un champ de texte avec `input` ;
- utiliser `type="text"` ;
- donner un nom à une donnée avec `name` ;
- utiliser `label` pour présenter le champ ;
- relier `label` et `input` avec `for` et `id`.

À la fin du tutoriel, le formulaire contiendra un champ pour saisir le titre d'un article.

## 2. Prérequis

Vous devez déjà savoir :

- créer une page HTML ;
- utiliser des balises HTML ;
- utiliser des attributs HTML ;
- utiliser `form` ;
- utiliser `action` ;
- utiliser `method` ;
- utiliser `post`.

Vous devez avoir réalisé :

**T.122.141 — Préparer le formulaire**

## Données de départ

Le formulaire est déjà préparé.

Il possède une destination et une méthode d'envoi.

### HTML

Le formulaire est actuellement :

```html id="gct4q8"
<form
    action="traiter-article.php"
    method="post"
    class="carte-formulaire"
>

    <div class="corps-formulaire">

    </div>

</form>
```

La zone `corps-formulaire` est vide.

C'est dans cette zone que le premier champ sera ajouté.

### CSS

Le fichier `admin-style.css` existe déjà.

La classe `carte-formulaire` est conservée.

Aucun nouveau CSS n'est étudié.

### JavaScript

Aucun JavaScript n'est utilisé.

## Partie 1 — Théorie

### 1.1. La balise `input`

La balise `input` permet de créer un champ de saisie.

Exemple :

```html id="0d08i2"
<input>
```

Elle peut recevoir différents types de données.

### 1.2. `type="text"`

Pour créer un champ de texte, utilisez :

```html id="2sm4cy"
<input type="text">
```

L'utilisateur peut alors saisir du texte.

Exemple :

```html id="xq4v3y"
<input
    type="text"
    value="Mon article"
>
```

### 1.3. L'attribut `name`

L'attribut `name` donne un nom à la donnée saisie.

Exemple :

```html id="70eq9h"
<input
    type="text"
    name="titre_article"
>
```

Ici, le nom de la donnée est :

```text
titre_article
```

Ce nom sera utilisé lors de l'envoi du formulaire.

### 1.4. La balise `label`

La balise `label` présente le nom du champ.

Exemple :

```html id="oepx2s"
<label>
    Titre de l'article
</label>
```

Elle permet à l'utilisateur de comprendre ce qu'il doit saisir.

### 1.5. Relier `label` et `input`

Le `label` peut être relié à un `input`.

Le `label` utilise `for` :

```html id="1s0rhi"
<label for="titre_article">
    Titre de l'article
</label>
```

Le `input` utilise le même nom avec `id` :

```html id="6bq73t"
<input
    type="text"
    id="titre_article"
>
```

Les deux valeurs doivent être identiques :

```text
for="titre_article"
       ↓
id="titre_article"
```

### 1.6. Le champ complet

Un champ de texte peut donc être construit ainsi :

```html id="ssqsa7"
<label for="titre_article">
    Titre de l'article
</label>

<input
    type="text"
    id="titre_article"
    name="titre_article"
>
```

Le `label` explique le champ.

Le `id` identifie le champ.

Le `name` donne le nom de la donnée envoyée.

### 1.7. À retenir

- `input` crée un champ ;
- `type="text"` crée un champ de texte ;
- `label` indique ce que l'on doit saisir ;
- `id` identifie le champ ;
- `for` relie le `label` au `input` ;
- `name` donne le nom de la donnée.

## Partie 2 — Pratique

### 2.1. Repérer la zone du formulaire

Dans le formulaire, recherchez :

```html id="0rjv8o"
<div class="corps-formulaire">

</div>
```

Cette zone va contenir le champ du titre.

### 2.2. Ajouter le `label`

Ajoutez :

```html id="a0fb0c"
<label for="titre_article">
    Titre de l'article
</label>
```

Le texte indique le rôle du champ.

La valeur de `for` est :

```text
titre_article
```

### 2.3. Ajouter le champ de texte

Sous le `label`, ajoutez :

```html id="28xvdb"
<input
    type="text"
    id="titre_article"
    name="titre_article"
>
```

Le navigateur affiche maintenant un champ de saisie.

### 2.4. Vérifier la liaison

Le code doit être :

```html id="17atjd"
<label for="titre_article">
    Titre de l'article
</label>

<input
    type="text"
    id="titre_article"
    name="titre_article"
>
```

Vérifiez :

```text
label for
     ↓
titre_article
     ↑
input id
```

Les deux valeurs sont identiques.

### 2.5. Vérifier le nom de la donnée

Vérifiez l'attribut :

```html id="oq6vxp"
name="titre_article"
```

Le formulaire donnera ce nom à la donnée saisie.

Ne confondez pas :

```text
id → identifie le champ dans la page
name → nomme la donnée du formulaire
```

### 2.6. Ajouter la structure de la zone

Pour conserver la présentation du formulaire, utilisez le groupe de champ existant dans le CSS :

```html id="jgk5nq"
<div class="groupe-champ">

    <label for="titre_article">
        Titre de l'article
    </label>

    <input
        type="text"
        id="titre_article"
        name="titre_article"
        class="champ-texte"
    >

</div>
```

La classe `groupe-champ` organise le champ.

La classe `champ-texte` conserve la présentation du champ.

Aucun nouveau CSS n'est nécessaire.

### 2.7. Vérifier le formulaire

Le formulaire doit maintenant être :

```html id="w2axl3"
<form
    action="traiter-article.php"
    method="post"
    class="carte-formulaire"
>

    <div class="corps-formulaire">

        <div class="groupe-champ">

            <label for="titre_article">
                Titre de l'article
            </label>

            <input
                type="text"
                id="titre_article"
                name="titre_article"
                class="champ-texte"
            >

        </div>

    </div>

</form>
```

Le formulaire possède maintenant un premier champ.

### 2.8. Tester le champ

Ouvrez la page dans le navigateur.

Vérifiez que :

- le texte « Titre de l'article » est visible ;
- le champ de texte est visible ;
- vous pouvez saisir du texte ;
- le champ possède la présentation prévue ;
- le reste de la page est inchangé.

Cliquez sur :

**Titre de l'article**

Le champ associé doit être identifié comme le champ correspondant au libellé.

### 2.9. Vérifier la structure

Vous devez pouvoir représenter le champ ainsi :

```text
groupe-champ
├── label
│   └── Titre de l'article
└── input
    ├── type="text"
    ├── id="titre_article"
    └── name="titre_article"
```

Le `label` et le `input` sont liés par `for` et `id`.

## Résultat attendu

Le formulaire doit contenir un champ de titre :

```html id="4yh911"
<form
    action="traiter-article.php"
    method="post"
    class="carte-formulaire"
>

    <div class="corps-formulaire">

        <div class="groupe-champ">

            <label for="titre_article">
                Titre de l'article
            </label>

            <input
                type="text"
                id="titre_article"
                name="titre_article"
                class="champ-texte"
            >

        </div>

    </div>

</form>
```

```html id="6c59dz"
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-142-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Le navigateur doit afficher un champ de saisie pour le titre de l'article.

## Partie 3 — Développement progressif

**Série :** Formulaire d'ajout d'un article

**Position :** 2e tutoriel de la série UA.122.13

**Incrément :** Ajout du premier champ de saisie du formulaire.

**Intégration demandée :**

À partir du formulaire préparé dans T.122.141, ajoutez le champ :

**Titre de l'article**

Le champ doit utiliser :

```text
label
input
type="text"
id
name
```

Reliez le `label` et le `input`.

Conservez :

- `action="traiter-article.php"` ;
- `method="post"` ;
- les classes CSS existantes ;
- la structure de la page.

N'ajoutez pas encore les autres champs du formulaire.

**Livrable :**

Un champ de saisie du titre lié à son label.

**Critère de réussite :**

Le champ :

- utilise `input` ;
- utilise `type="text"` ;
- possède `id="titre_article"` ;
- possède `name="titre_article"` ;
- possède un `label` ;
- utilise `for="titre_article"` pour relier le `label` au champ.

**Résultat attendu :**

```html id="1d3m6l"
<div class="groupe-champ">

    <label for="titre_article">
        Titre de l'article
    </label>

    <input
        type="text"
        id="titre_article"
        name="titre_article"
        class="champ-texte"
    >

</div>
```

```html id="fqn2j9"
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-142-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Le champ obtenu constituera la base pour les autres champs du formulaire dans les étapes suivantes.

## Bilan

**Vous avez réalisé :**

Un champ de saisie pour le titre d'un article.

**Vous savez maintenant :**

- créer un `input` ;
- utiliser `type="text"` ;
- utiliser `name` pour nommer une donnée ;
- utiliser `label` ;
- utiliser `id` ;
- relier un `label` et un `input` avec `for` et `id`.

## Glossaire

- **`input`** : élément HTML qui permet de saisir une donnée.
- **`type="text"`** : type d'input utilisé pour saisir du texte.
- **`label`** : texte qui indique le rôle d'un champ.
- **`id`** : identifiant d'un élément HTML.
- **`name`** : nom donné à une donnée du formulaire.
- **`for`** : attribut du `label` utilisé pour le relier à un élément.
- **Champ de saisie** : zone dans laquelle l'utilisateur entre une donnée.