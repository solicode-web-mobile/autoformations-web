---
title: "Mettre à jour son ordinateur avec git pull"
layout: tuto
slug: "mettre-a-jour-pull"
permalink: /tutos/:slug/
tuto_id: "T.151.162"
type: "classique"
version: "normal"
simplified: true
ua: "UA.151.16"
nav_order: 2
data_html: ""
data_css: ""
data_js: ""
---

## 1. Objectif

Récupérer les nouveautés du dépôt distant GitHub avec la commande `git pull` pour mettre à jour votre ordinateur avant de travailler.

## 2. Prérequis

Vous devez :

* avoir un dépôt Git local lié à un dépôt GitHub (`origin`) ;
* avoir une connexion Internet active ;
* avoir un dépôt local sans modifications en cours (`working tree clean`).

## Partie 1 — Théorie

### 1.1. Pourquoi synchroniser avant de coder ?

Quand vous développez, votre projet peut évoluer depuis un autre endroit :

* vous avez travaillé sur un ordinateur du centre de formation et fait un `git push` ;
* le lendemain, vous travaillez chez vous sur votre PC portable ;
* ou un coéquipier a partagé une nouvelle fonctionnalité sur GitHub.

Si vous écrivez du nouveau code sans mettre à jour votre ordinateur, vous risquez des conflits.

### 1.2. Le rôle de `git pull`

La commande :

```bash
git pull
```

télécharge les nouveaux commits depuis GitHub et les intègre automatiquement dans votre dossier de travail.

Comparaison des deux commandes réseau :

* **`git push`** : envoie vos commits locaux vers GitHub.
* **`git pull`** : récupère les commits de GitHub vers votre ordinateur.

```text
Dépôt GitHub (en ligne)
          ↓
       git pull
          ↓
Dépôt local + Fichiers de travail (ordinateur)
```

### 1.3. Routine quotidienne du développeur

Chaque matin ou à chaque reprise de projet :

1. Ouvrir le terminal dans le projet.
2. Taper `git pull`.
3. Commencer à coder une fois le projet à jour.

## Partie 2 — Pratique

### Étape 1 — Vérifier la propreté du dossier local

Ouvrez le terminal dans votre projet Blog :

```bash
git status
```

Assurez-vous qu'aucun fichier n'est en cours de modification non enregistrée. Le terminal doit afficher :

```text
nothing to commit, working tree clean
```

### Étape 2 — Lancer la commande `git pull`

Tapez :

```bash
git pull
```

### Étape 3 — Interpréter le retour du terminal

**Cas 1 : Votre projet était déjà à jour :**

```text
Already up to date.
```

Aucun nouveau changement n'a été publié sur GitHub. Vous pouvez coder en sécurité.

**Cas 2 : De nouveaux commits ont été récupérés :**

Git affiche la liste des fichiers téléchargés et le nombre de lignes modifiées :

```text
Updating a1b2c3d..e4f5g6h
Fast-forward
 index.php | 5 +++++
 1 file changed, 5 insertions(+)
```

Vos fichiers dans VS Code sont actualisés automatiquement avec les derniers ajouts.

### Étape 4 — Confirmer avec l'historique

Affichez les 2 derniers commits reçus :

```bash
git log -n 2 --oneline
```

Le commit le plus récent correspond bien au dernier état de GitHub.

## Bilan

**Vous avez réalisé :**  
La mise à jour de votre environnement de travail local avec les derniers changements disponibles sur GitHub.

**Vous savez maintenant :**
* pourquoi il faut toujours synchroniser son code avant de commencer à travailler ;
* lancer la commande `git pull` ;
* vérifier si votre projet est à jour ou si de nouveaux commits ont été appliqués.

## Glossaire

* **`git pull`** : commande qui télécharge et fusionne les commits distants dans le dépôt local.
* **Fast-forward** : mise à jour directe de la branche locale qui se synchronise sans conflit avec la branche distante.
* **Already up to date** : message confirmant que votre ordinateur possède déjà la version la plus récente du code.