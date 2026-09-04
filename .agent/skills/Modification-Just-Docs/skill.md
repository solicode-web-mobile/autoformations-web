# Skill — Modification et personnalisation de Just the Docs

## 1. Objectif

Modifier et personnaliser un site **Jekyll utilisant Just the Docs** sans casser la structure existante.

Les modifications peuvent concerner :

**Navigation → Layouts → Includes → CSS → JavaScript → TOC → Composants UI/UX**

## 2. Règles générales

Respecter en priorité :

**Structure pédagogique → Structure Jekyll → Just the Docs → Modification demandée**

Ne jamais modifier inutilement :

* les fichiers du thème gem ;
* la structure pédagogique ;
* les URLs existantes ;
* les pages existantes ;
* la navigation fonctionnelle.

Privilégier les surcharges locales du projet.

## 3. Organisation des fichiers

Utiliser en priorité :

```text
_config.yml
_layouts/
_includes/
_sass/
assets/css/
assets/js/
```

Ne pas modifier directement les fichiers internes de :

```text
just-the-docs-*/
```

sauf nécessité exceptionnelle.

## 4. Navigation

Respecter la hiérarchie existante :

**Session → Tutoriels → Compétence / Domaine / Tutoriel**

Utiliser les propriétés Just the Docs adaptées :

```yaml
title:
parent:
nav_order:
nav_exclude:
has_toc:
permalink:
```

Lorsqu'une fonctionnalité nécessite une navigation spécifique, préférer un **menu personnalisé** plutôt que modifier le fonctionnement interne de Just the Docs.

## 5. Pages et variantes

Lorsqu'un contenu possède plusieurs versions, par exemple :

**Compact → Normal → Détaillée**

conserver les pages indépendantes si cela est demandé.

Utiliser des métadonnées communes :

```yaml
tutorial_id:
version:
domaine_code:
domaine_title:
```

Les variantes ne doivent pas créer de doublons inutiles dans la navigation.

## 6. Includes

Créer un composant réutilisable dans :

```text
_includes/
```

Exemple :

```liquid
{% include tutorial-versions.html %}
```

Le composant doit être générique et utiliser les données de `page`.

Éviter de recopier le même HTML dans plusieurs pages.

## 7. Layouts

Créer un layout spécifique lorsqu'une fonctionnalité concerne plusieurs pages.

Exemple :

```text
_layouts/tutorial.html
```

Le layout peut regrouper :

```text
Menu du domaine
→ Sélecteur de version
→ Contenu
```

Ne pas modifier `home` ou les layouts du thème directement si un layout local suffit.

## 8. CSS / UI / UX

Toute personnalisation visuelle doit :

* conserver la lisibilité de Just the Docs ;
* laisser suffisamment d'espace au contenu ;
* être responsive ;
* être cohérente avec les autres pages ;
* éviter les éléments visuels inutiles.

Pour un menu contextuel, privilégier les solutions simples :

**compactes → accessibles → non intrusives → faciles à maintenir**

## 9. JavaScript

Utiliser JavaScript uniquement lorsque HTML/CSS/Liquid ne suffit pas.

Le JavaScript doit :

* rester local au projet ;
* être minimal ;
* ne pas dépendre inutilement du DOM interne de Just the Docs ;
* fonctionner après le chargement de la page ;
* ne pas casser la navigation native.

## 10. Liquid

Pour les regroupements dynamiques, utiliser les métadonnées des pages :

```liquid
{% assign pages = site.pages
  | where: "domaine_code", page.domaine_code
  | where: "version", "normal"
%}
```

Filtrer les pages avant de générer un menu.

Ne jamais afficher les variantes non destinées à la navigation.

## 11. TOC personnalisé

Lorsque le TOC natif de Just the Docs ne répond pas au besoin :

```yaml
has_toc: false
```

puis créer un TOC personnalisé avec Liquid.

Le TOC personnalisé doit afficher uniquement les éléments réellement utiles à l'apprenant.

## 12. Principe de modification

Avant toute modification :

**Identifier → Vérifier la structure existante → Modifier au niveau le plus local → Tester → Vérifier la navigation**

Privilégier :

**Include > Layout > CSS/JS local > Configuration**

avant de modifier le thème.

## 13. Compatibilité

Toute modification doit rester compatible avec :

**Jekyll + Just the Docs + Git + structure actuelle du projet**

Ne pas introduire une dépendance externe lorsqu'une solution native ou locale suffit.

## 14. Contrôle final

Vérifier :

**Build Jekyll → navigation → URLs → responsive → affichage → liens → absence de doublons → absence d'erreurs Liquid**

En cas d'erreur, identifier sa cause avant d'ajouter une nouvelle solution.

## 15. Règle finale

> **Personnaliser Just the Docs sans modifier inutilement son fonctionnement : conserver la structure existante, utiliser les capacités natives de Jekyll et du thème, et créer des composants locaux simples, réutilisables et maintenables.**
