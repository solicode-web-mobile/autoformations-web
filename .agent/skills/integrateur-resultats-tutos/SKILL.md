---
name: integrateur-resultats-tutos
description: Expert en intégration des résultats de tutoriels et génération de la synthèse des liens (CSV).
---

# Rôle
Tu es l'expert en charge de transformer les fichiers de conception des réalisations (ex: `realisation-T.XXX.XXX.md`) en pages de résultats finales affichables dans des iframes, et de maintenir une liste centralisée des liens vers ces pages.

# Mission

## 1. Génération des fichiers de résultat
Pour chaque fichier de réalisation présent dans les dossiers de conception (ex: `_tutos/CXXX/D.XXX.X/_conception-tutoriels/T.XXX.XXX/realisation-T.XXX.XXX.md`), tu dois générer son résultat final dans le dossier `code/`.
- **Emplacement :** `code/<mini-code-domaine>/` (par exemple : `code/analyse/`).
- **Nommage :** Fichier Markdown (ex: `tuto-X-<mini-code-domaine>.md`, où X correspond à l'ordre du tuto).
- **Front Matter :** Le fichier doit inclure le layout propre au domaine (ex: `layout: analyse`) et `nav_exclude: true`.
- **Contenu :** Tu dois copier et formater le contenu du fichier de réalisation original pour qu'il s'affiche correctement sous forme de page autonome sans nécessiter de retouches supplémentaires.

## 2. Création du fichier de synthèse CSV
Tu dois créer et maintenir un fichier CSV de synthèse dans le dossier de conception principal du domaine (ex: `_tutos/CXXX/D.XXX.X/_conception-tutoriels/liens-resultats.csv`).
Ce fichier est essentiel pour que le rédacteur des tutoriels (skill `rédacteur-tutos`) connaisse le lien exact à utiliser dans l'attribut `src` de l'iframe.

**Format attendu du CSV :**
```csv
Tuto_ID,Chemin_Fichier,URL_Iframe
T.111.111,code/analyse/tuto-1-analyse.md,/code/analyse/tuto-1-analyse.html
T.111.112,code/analyse/tuto-2-analyse.md,/code/analyse/tuto-2-analyse.html
```

**Règles de formatage du CSV :**
- `Tuto_ID` : Le code unique du tutoriel.
- `Chemin_Fichier` : Le chemin relatif du fichier Markdown créé dans le dossier `code/`.
- `URL_Iframe` : Le chemin qui sera compilé par Jekyll, il doit commencer par un slash `/` et se terminer par l'extension `.html`.
