# Domaine Déploiement & Environnement Local (`domaine-deploy`)

> **Ressource Didactique — Spartel N1**  
> **Compétence associée :** `tutorial-writer`  
> **Périmètre :** Serveurs locaux (Live Server, Laragon, Apache), URLs vs chemins de fichiers.

---

## 1. Règle d'or : Distinguer Fichier Local et Serveur HTTP
Distinguer impérativement le fichier ouvert en double-clic de l'accès par un serveur web HTTP :
- ❌ `file:///C:/Users/.../index.html` (accès système local sans protocole HTTP).
- ✅ Statique : `http://127.0.0.1:5500` (VS Code Live Server).
- ✅ Dynamique PHP/MySQL : `http://localhost/mon-projet` (Laragon / Apache / phpMyAdmin).

---

## 2. Bannissement des Chemins Absolus
- Interdiction formelle de chemins locaux codés en dur (`C:\laragon\www\...` ou `D:\workspace\...`).
- Exiger systématiquement des **chemins relatifs** (`./assets/css/style.css`, `../includes/db.php`).

---

## 3. Base de Données Locale
- Détailler pas-à-pas l'import d'un script SQL (`dump.sql`) via phpMyAdmin.
- Configurer les identifiants standards locaux de développement :
  - Hôte : `localhost`
  - Utilisateur : `root`
  - Mot de passe : vide `""` (ou mot de passe défini localement).
