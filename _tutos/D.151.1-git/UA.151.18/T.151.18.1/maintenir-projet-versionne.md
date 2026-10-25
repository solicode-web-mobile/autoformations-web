---
title: "Maintenir un dépôt propre et récupérable"
layout: tuto
slug: "maintenir-projet-versionne"
permalink: /tutos/:slug/
tuto_id: "T.151.18.1"
type: "classique"
version: "normal"
simplified: true
ua: "UA.151.18"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Vérifier la propreté de votre dépôt, s'assurer que tous les commits sont synchronisés sur GitHub et tester la récupération complète du projet.

## 2. Prérequis

Vous devez :

* avoir développé et fait évoluer votre application de Blog ;
* maîtriser les commandes `git status`, `git add`, `git commit`, `git push` et `git clone` ;
* avoir un compte GitHub configuré.

## Partie 1 — Théorie

### 1.1. Pourquoi auditer son dépôt en fin de projet ?

Un projet professionnel doit rester propre et prêt à être transmis ou cloné à tout moment.

Les trois critères d'un dépôt sain :

1. **Aucun fichier parasite ou secret :** Le fichier `.gitignore` bloque bien les logs, `.env` et dossiers système.
2. **Des commits atomiques et clairs :** Chaque commit a un préfixe conventionnel (`feat:`, `fix:`, `refactor:`, `docs:`).
3. **Une synchronisation parfaite :** La branche locale est alignée sur `origin/main`. Aucun commit n'est oublié en local.

### 1.2. Le test du miroir (Mirror test)

Pour prouver que votre travail est 100 % récupérable :

1. Vous poussez tout votre travail vers GitHub (`git push`).
2. Vous clonez votre propre dépôt dans un dossier test temporaire (ex : `mon-blog-test`).
3. Vous lancez l'application depuis ce dossier test.

Si tout fonctionne sans fichier manquant, votre projet est parfaitement pérenne.

### 1.3. À retenir

* `git status` doit indiquer `nothing to commit, working tree clean`.
* `git push` doit confirmer que GitHub est à jour.
* Le test de clonage miroir valide l'indépendance de votre travail.

## Partie 2 — Pratique

### Étape 1 — Contrôler la propreté locale et le fichier `.gitignore`

Ouvrez le terminal dans votre projet Blog :

```bash
git status
```

Vérifiez qu'aucun fichier sensible (`.env`, mot de passe, fichier temporaire) n'apparaît. Si c'est le cas, ajoutez son nom dans `.gitignore`.

### Étape 2 — Valider les dernières modifications

Si des fichiers du projet ont été modifiés lors de vos derniers travaux :

```bash
git add .
git commit -m "feat: finaliser et stabiliser l'application"
```

### Étape 3 — Synchroniser avec GitHub

Envoyez l'ensemble des commits :

```bash
git push
```

Vérifiez le retour de `git status` :

```text
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

### Étape 4 — Effectuer le test de récupération (miroir)

1. Ouvrez un terminal dans un dossier séparé (ex: `C:\temp\` ou votre dossier personnel).
2. Clonez votre projet sous un nom d'essai :

```bash
git clone https://github.com/votre-compte/mon-blog.git blog-verification
```

3. Entrez dans le dossier :

```bash
cd blog-verification
```

4. Démarrez le serveur local pour tester :

```bash
php -S localhost:8080
```

5. Ouvrez votre navigateur sur `http://localhost:8080`.

**Résultat attendu :**  
Toutes les pages de votre Blog s'affichent correctement. Le projet est entièrement autonome et récupérable.  
Vous pouvez ensuite supprimer le dossier temporaire `blog-verification`.

## Bilan

**Vous avez réalisé :**  
L'audit complet et le test de résilience de votre dépôt Git, garantissant sa transmission et sa pérennité.

**Vous savez maintenant :**
* vérifier la propreté d'un dépôt avant clôture de projet ;
* valider l'alignement strict entre dépôt local et GitHub ;
* certifier la récupérabilité de votre travail grâce au test de clonage miroir.

## Glossaire

* **Dépôt sain** : projet sans fichiers temporaires, avec un historique lisible et synchronisé.
* **Résilience** : capacité d'un projet à être réinstallé et exécuté instantanément sur une autre machine.
* **Test miroir** : vérification par clonage indépendant que le dépôt contient l'intégralité du code nécessaire.