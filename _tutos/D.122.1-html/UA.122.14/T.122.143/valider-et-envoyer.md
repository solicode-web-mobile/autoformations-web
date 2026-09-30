---
title: "Valider et envoyer"
layout: tuto
slug: "valider-et-envoyer"
permalink: /tutos/:slug/
tuto_id: "T.122.143"
type: "classique"
version: "normal"
ua: "UA.122.13"
nav_order: 3
data_html: ""
data_css: ""
data_js: ""
---
 
## 1. Objectif

Dans ce tutoriel, vous allez apprendre à :

- utiliser la balise `button` ;
- utiliser `type="submit"` ;
- rendre une saisie obligatoire avec `required` ;
- permettre la validation du formulaire.

À la fin du tutoriel, le formulaire demandera une saisie avant son envoi.

## 2. Prérequis

Vous devez déjà savoir :

- créer une page HTML ;
- utiliser `form` ;
- utiliser `action` ;
- utiliser `method` ;
- utiliser `post` ;
- utiliser `label` ;
- utiliser `input` ;
- utiliser `type="text"` ;
- utiliser `id` ;
- utiliser `name`.

Vous devez avoir réalisé :

**T.122.141 — Préparer le formulaire**

**T.122.142 — Saisir et nommer les données**

## Données de départ

Le formulaire possède déjà :

- une destination PHP ;
- une méthode `post` ;
- un champ pour le titre de l'article.

### HTML

Le formulaire est actuellement :

```html id="r4b9kv"
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

Le champ peut recevoir du texte.

Mais aucune contrainte n'empêche encore l'envoi d'une valeur vide.

Le formulaire ne possède pas encore de bouton d'envoi.

### CSS

Le fichier `admin-style.css` existe déjà.

Les classes suivantes sont conservées :

```text id="u0apn4"
carte-formulaire
corps-formulaire
groupe-champ
champ-texte
pied-formulaire
bouton-annuler
bouton-enregistrer
```

Aucun nouveau CSS n'est étudié.

### JavaScript

Aucun JavaScript n'est utilisé.

## Partie 1 — Théorie

### 1.1. La balise `button`

La balise `button` permet de créer un bouton.

Exemple :

```html id="6bq8p1"
<button>
    Enregistrer
</button>
```

Le texte entre les deux balises correspond au texte affiché sur le bouton.

### 1.2. `type="submit"`

Un bouton peut envoyer un formulaire avec :

```html id="wp2d7r"
<button type="submit">
    Enregistrer
</button>
```

Lorsque l'utilisateur clique sur ce bouton, le formulaire est soumis.

Le navigateur vérifie d'abord les contraintes du formulaire.

### 1.3. L'attribut `required`

L'attribut `required` permet d'exiger une valeur.

Exemple :

```html id="i4tm5r"
<input
    type="text"
    required
>
```

Le champ doit être rempli avant l'envoi du formulaire.

Si le champ est vide, le navigateur demande à l'utilisateur de le compléter.

### 1.4. `required` et `submit`

Les deux notions travaillent ensemble :

```html id="qygk36"
<input
    type="text"
    name="titre_article"
    required
>

<button type="submit">
    Enregistrer
</button>
```

Lorsque l'utilisateur clique sur le bouton :

- le navigateur vérifie le champ ;
- si le champ est vide, l'envoi est bloqué ;
- si le champ contient une valeur, le formulaire peut être soumis.

### 1.5. À retenir

- `button` crée un bouton ;
- `type="submit"` permet de soumettre le formulaire ;
- `required` rend un champ obligatoire ;
- le navigateur vérifie `required` avant la soumission ;
- le bouton `submit` lance la soumission du formulaire.

## Partie 2 — Pratique

### 2.1. Rendre le titre obligatoire

Dans le formulaire, recherchez :

```html id="5c0v3k"
<input
    type="text"
    id="titre_article"
    name="titre_article"
    class="champ-texte"
>
```

Ajoutez l'attribut :

```html id="14ij17"
required
```

Vous obtenez :

```html id="0xum3d"
<input
    type="text"
    id="titre_article"
    name="titre_article"
    class="champ-texte"
    required
>
```

Le titre doit maintenant être saisi avant l'envoi.

### 2.2. Ajouter la zone des boutons

Après le `corps-formulaire`, ajoutez :

```html id="zke9m0"
<div class="pied-formulaire">

</div>
```

Cette zone contient les boutons du formulaire.

### 2.3. Ajouter le bouton Annuler

Dans `pied-formulaire`, ajoutez :

```html id="4umgqv"
<button
    type="button"
    class="bouton-annuler"
>
    Annuler
</button>
```

Ce bouton n'envoie pas le formulaire.

Dans ce tutoriel, il sert uniquement à compléter la zone d'actions.

### 2.4. Ajouter le bouton d'envoi

Ajoutez ensuite :

```html id="b4z9du"
<button
    type="submit"
    class="bouton-enregistrer"
>
    Enregistrer l'article
</button>
```

Ce bouton permet de soumettre le formulaire.

### 2.5. Vérifier la structure

Le formulaire doit maintenant être :

```html id="wh7itj"
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
                required
            >

        </div>

    </div>

    <div class="pied-formulaire">

        <button
            type="button"
            class="bouton-annuler"
        >
            Annuler
        </button>

        <button
            type="submit"
            class="bouton-enregistrer"
        >
            Enregistrer l'article
        </button>

    </div>

</form>
```

### 2.6. Vérifier `required`

Vérifiez que le champ possède :

```html id="rq5h66"
required
```

Ne mettez pas cette contrainte sur le champ de recherche situé dans l'en-tête.

Le `required` appartient au champ du formulaire d'article.

### 2.7. Vérifier `type="submit"`

Vérifiez que le bouton d'enregistrement utilise :

```html id="c2t48n"
type="submit"
```

Ne remplacez pas cette valeur par `button`.

Le bouton doit soumettre le formulaire.

### 2.8. Tester la validation

Ouvrez la page dans le navigateur.

Laissez le champ « Titre de l'article » vide.

Cliquez sur :

**Enregistrer l'article**

Le navigateur doit empêcher l'envoi.

Le champ obligatoire doit être signalé.

### 2.9. Tester avec une valeur

Saisissez par exemple :

```text id="vwsxw6"
Apprendre HTML
```

Cliquez sur :

**Enregistrer l'article**

Le formulaire peut maintenant être soumis vers :

```text id="0v5xar"
traiter-article.php
```

Dans cette autoformation, aucun traitement PHP n'est réalisé dans ce tutoriel.

Le point étudié est la soumission du formulaire et la validation du champ obligatoire.

### 2.10. Vérifier le résultat

Vérifiez que :

- le champ du titre est visible ;
- le champ est obligatoire ;
- le bouton « Enregistrer l'article » est visible ;
- le bouton utilise `type="submit"` ;
- le formulaire bloque une saisie vide ;
- le formulaire peut être soumis lorsque le titre est renseigné.

## Résultat attendu

Le formulaire doit être :

```html id="8ro7hv"
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
                required
            >

        </div>

    </div>

    <div class="pied-formulaire">

        <button
            type="button"
            class="bouton-annuler"
        >
            Annuler
        </button>

        <button
            type="submit"
            class="bouton-enregistrer"
        >
            Enregistrer l'article
        </button>

    </div>

</form>
```

```html id="7s7z6a"
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-143-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Le formulaire doit afficher :

- un champ « Titre de l'article » ;
- un bouton « Annuler » ;
- un bouton « Enregistrer l'article ».

Une saisie vide doit être refusée par le navigateur.

## Partie 3 — Développement progressif

**Série :** Formulaire d'ajout d'un article

**Position :** 3e tutoriel de la série UA.122.13

**Incrément :** Ajout de la validation du titre et du bouton de soumission.

**Intégration demandée :**

À partir du formulaire construit dans les tutoriels précédents :

- rendez le titre obligatoire ;
- ajoutez un bouton d'envoi ;
- utilisez `type="submit"` ;
- conservez la destination PHP ;
- conservez la méthode `post`.

Le formulaire doit empêcher l'envoi lorsque le titre est vide.

**Livrable :**

Un formulaire fonctionnel permettant de saisir et d'envoyer le titre d'un article.

**Critère de réussite :**

Le formulaire :

- possède `required` sur le champ du titre ;
- possède un bouton `button` avec `type="submit"` ;
- bloque l'envoi lorsque le titre est vide ;
- permet la soumission lorsque le titre est renseigné ;
- conserve `action="traiter-article.php"` ;
- conserve `method="post"`.

**Résultat attendu :**

```html id="9r3yeb"
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
                required
            >

        </div>

    </div>

    <div class="pied-formulaire">

        <button
            type="button"
            class="bouton-annuler"
        >
            Annuler
        </button>

        <button
            type="submit"
            class="bouton-enregistrer"
        >
            Enregistrer l'article
        </button>

    </div>

</form>
```

```html id="0x7jxm"
<iframe
    class="auto-wrapper"
    src="{{'/code/html/tuto-122-143-html.html' | relative_url}}"
    height="700"
    title="Résultat attendu">
</iframe>
```

Cette étape termine la première version fonctionnelle du formulaire : le titre est saisi, nommé, validé puis envoyé vers le script indiqué par `action`.

## Bilan

**Vous avez réalisé :**

Un formulaire capable de vérifier une saisie et de la soumettre.

**Vous savez maintenant :**

- utiliser `button` ;
- utiliser `type="submit"` ;
- utiliser `required` ;
- rendre une saisie obligatoire ;
- soumettre un formulaire ;
- préparer l'envoi d'une donnée vers un script PHP.

## Glossaire

- **`button`** : élément HTML qui crée un bouton.
- **`type="submit"`** : type de bouton qui soumet le formulaire.
- **`required`** : attribut qui rend une saisie obligatoire.
- **Validation** : vérification des données avant l'envoi.
- **Soumission** : action d'envoyer le formulaire.
- **Donnée** : valeur saisie dans un champ.