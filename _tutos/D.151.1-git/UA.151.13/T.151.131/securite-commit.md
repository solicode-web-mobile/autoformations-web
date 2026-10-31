---
title: "Rédiger des messages de commit professionnels et sécurisés"
layout: tuto
slug: "securite-commit"
permalink: /tutos/securite-commit/
tuto_id: "T.151.131"
type: "classique"
version: "normal"
ua: "UA.151.13"
domain: "D.151.1"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Contexte & Objectif

- **Objectif :** Vérifier ses modifications avec `git diff` avant de créer un commit, éviter d'enregistrer des informations sensibles (mots de passe, clés) et rédiger un message de commit atomique et professionnel.
- **Prérequis :** Maîtriser le cycle local `git status`, `git add` et `git commit` (tutoriel T.151.122).

---

## 2. Théorie Pas-à-Pas

### 2.1. Pourquoi vérifier avant de commiter ?

Une fois qu'un commit est validé et poussé sur GitHub, son contenu est gravé dans l'historique public.
Si vous y avez laissé par inadvertance un mot de passe ou une clé d'API, n'importe qui peut le retrouver, même si vous le supprimez au commit suivant.

### 2.2. Le rôle de `git diff`

`git status` vous indique *quels* fichiers ont changé. `git diff` vous montre *exactement quelles lignes* ont été ajoutées ou supprimées :

```text
git status  → Quels fichiers sont modifiés ?
git diff    → Quel est le contenu exact des modifications ?
```

- Les lignes commençant par **`+`** (en vert) représentent du texte ajouté.
- Les lignes commençant par **`-`** (en rouge) représentent du texte supprimé.

### 2.3. L'anatomie d'un message de commit professionnel

Un commit doit être **atomique** (ne faire qu'une seule chose bien définie) et porter un message explicite commençant par un verbe ou un préfixe conventionnel :

- `feat: ...` : ajout d'une nouvelle fonctionnalité (ex: `feat: ajout du formulaire d'article`).
- `fix: ...` : correction d'un bug (ex: `fix: correction du calcul des lectures`).
- `docs: ...` : mise à jour de la documentation ou du README.

---

## 3. Pratique & Réalisation Guidée

Vous allez inspecter une modification, vérifier qu'aucun mot de passe n'est présent et enregistrer un commit propre.

### 3.1. Examiner les modifications avec `git diff`

1. Modifiez un fichier de votre projet (ex: `config.php` ou `article.php`).
2. Tapez dans le terminal :
   ```bash
   git status
   ```
3. Affichez les détails exacts avec :
   ```bash
   git diff
   ```
4. Examinez les lignes vertes (`+`).
   - Si vous repérez une information confidentielle (comme `password = "secret123"`), retournez immédiatement dans votre fichier et effacez-la avant de faire `git add` !

### 3.2. Préparer et valider un commit atomique

1. Lorsque le contenu vérifié est propre, préparez le fichier :
   ```bash
   git add article.php
   ```
2. Créez votre commit avec un message normé à l'impératif direct :
   ```bash
   git commit -m "feat: ajout de la fonction de calcul du temps de lecture"
   ```
3. Vérifiez avec `git status` que le dépôt est propre.

---

## 4. Critères de Réussite

- Vous exécutez systématiquement `git diff` avant de préparer vos fichiers avec `git add`.
- Aucune donnée sensible ou mot de passe n'est commité dans l'historique.
- Le message de commit est court, précis et respecte les conventions professionnelles (`feat:`, `fix:`).

---

## 5. Glossaire

- **git diff :** Commande affichant les lignes ajoutées et supprimées dans les fichiers modifiés.
- **Commit atomique :** Sauvegarde ciblée ne portant que sur une seule tâche ou correction à la fois.
- **Donnée sensible :** Information confidentielle (mot de passe, clé d'API, identifiant privé) qui ne doit jamais être partagée.
- **Convention de commit :** Norme de rédaction des messages facilitant la lecture de l'historique par l'équipe.
