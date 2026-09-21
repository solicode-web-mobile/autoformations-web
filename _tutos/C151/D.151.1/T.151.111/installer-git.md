---
title: "Installer et configurer Git sur son ordinateur"
layout: tuto
slug: "installer-git"
permalink: /tutos/:slug/
tuto_id: "T.151.111"
type: "classique"
version: "normal"
ua: "UA.151.11"
nav_order: 1
data_html: ""
data_css: ""
data_js: ""
simplified: true
---

## 1. Objectif

Installer Git sur son ordinateur et configurer son **identité** (nom + email) pour identifier ses commits.

## 2. Prérequis

* Un ordinateur avec accès à Internet.
* Un terminal (sous Windows : **Git Bash** ou PowerShell).

## Partie 1 — Théorie

### 1.1. Git et l'identité d'un commit

Git est un outil de **gestion de versions** : il enregistre l'historique des changements d'un projet. Chaque enregistrement s'appelle un **commit**. Pour identifier qui a fait quoi, Git associe un nom et un email à chaque commit.

```mermaid
flowchart LR
    A[Vous modifiez\nun fichier] -->|git commit| B["Commit enregistré\n─────────────\n👤 Madani Ali\n📧 madani@example.com\n📝 'Ajout du formulaire'"]
    B --> C[Historique\ndu projet]
```

> Ces informations sont configurées **une seule fois** sur votre ordinateur avec `git config --global`.

## Partie 2 — Pratique

### Étape 1 — Vérifier si Git est installé

Ouvrez votre terminal et exécutez :

```bash
git --version
```

**Résultat attendu :**
```text
git version 2.43.0
```

✅ Si une version s'affiche → Git est installé, passez à l'étape 3.  
❌ Si une erreur s'affiche → Git n'est pas installé, passez à l'étape 2.

---

### Étape 2 — Installer Git (si nécessaire)

1. Rendez-vous sur [git-scm.com/downloads](https://git-scm.com/downloads).
2. Téléchargez la version pour votre système d'exploitation.
3. Lancez l'installation en conservant **toutes les options par défaut**.
4. Ouvrez un **nouveau terminal** après l'installation.
5. Vérifiez avec `git --version` (retour à l'étape 1).

---

### Étape 3 — Configurer votre nom et email

Exécutez ces deux commandes en remplaçant les valeurs par les vôtres :

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"
```

**Exemple concret :**
```bash
git config --global user.name "Madani Ali"
git config --global user.email "madani.ali@example.com"
```

---

### Étape 4 — Vérifier la configuration ← Livrable

Confirmez que tout est en place :

```bash
git config --global user.name
git config --global user.email
```

**Résultat attendu :**
```text
Madani Ali
madani.ali@example.com
```

### Résultat final

<iframe
    class="auto-wrapper"
    src="{{'/code/git/T.151.111.html' | relative_url}}"
    height="200"
    title="Résultat du tutoriel Git">
</iframe>

### Critère de réussite

Git est installé et vos commandes `git config` retournent votre nom et votre email sans erreur.

## Bilan

**Vous savez maintenant :**
* Vérifier et installer Git sur votre ordinateur.
* Configurer votre identité Git (`user.name` et `user.email`).
* Vérifier la configuration avec `git config --global`.

## Glossaire

* **Git** : Outil de gestion de versions, installé localement sur l'ordinateur.
* **Commit** : Enregistrement d'un état du projet dans l'historique Git.
* **`git config --global`** : Commande pour configurer Git pour tous vos projets sur cet ordinateur.
