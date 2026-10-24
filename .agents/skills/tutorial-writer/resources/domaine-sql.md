# Domaine SQL (`domaine-sql`)

> **Ressource Didactique — Spartel N1**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Langage de requêtes relationnelles, DDL, DML, sélections, jointures.

---

## 1. Syntaxe Normée en Majuscules
Tous les mots-clés SQL doivent impérativement être rédigés en **MAJUSCULES** pour une lisibilité optimale :
`SELECT`, `FROM`, `WHERE`, `ORDER BY`, `GROUP BY`, `JOIN`, `ON`, `INSERT INTO`, `VALUES`, `UPDATE`, `SET`, `DELETE FROM`.

---

## 2. Jeu d'Essai Fourni Systématiquement
Tout tutoriel SQL doit obligatoirement fournir les instructions de création et d'insertion (`CREATE TABLE` et `INSERT INTO`) afin que l'apprenant puisse exécuter et tester ses requêtes directement sous phpMyAdmin ou en CLI :

```sql
CREATE TABLE auteurs (
    id_auteur INT AUTO_INCREMENT PRIMARY KEY,
    nom_auteur VARCHAR(100) NOT NULL
);

INSERT INTO auteurs (nom_auteur) VALUES ('Alice'), ('Bob');
```

---

## 3. Résultat Attendu Tabulaire
Sous chaque requête d'exemple, afficher impérativement le tableau Markdown reproduisant exactement le résultat retourné par le SGBD :

| id_auteur | nom_auteur |
| :---: | :--- |
| 1 | Alice |
| 2 | Bob |
