# Domaine PHP Procédural (`domaine-php`)

> **Ressource Didactique — Solicode**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Syntaxe procédurale, variables, tableaux associatifs, formulaires, superglobales.

---

## 1. Syntaxe Simple et Accessible N1
- Variables préfixées par `$`, types primitifs (chaînes, entiers, booléens).
- Structures de contrôle : `if / elseif / else`, boucles `foreach` sur tableaux associatifs.
- Fonctions natives indispensables : `isset()`, `empty()`, `trim()`, `count()`.

---

## 2. Traitement des Formulaires Web
- Formulaires HTML avec méthode `GET` ou `POST` explicite.
- Récupération des données via les tableaux superglobaux `$_GET` et `$_POST`.
- Vérification systématique de l'existence des données avant utilisation (`if (isset($_POST['nom']))`).

---

## 3. Sécurité de Base : Protection XSS
- Enseigner immédiatement la neutralisation des caractères spéciaux lors de l'affichage avec `htmlspecialchars($variable, ENT_QUOTES, 'UTF-8')`.
- Règle d'or : *« Ne jamais faire confiance aux données saisies par l'utilisateur »*.
