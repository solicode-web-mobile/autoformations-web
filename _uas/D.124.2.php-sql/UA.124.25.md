---
title: "Vérifier et corriger l’exploitation des données"
layout: ua
code: "UA.124.25"
competence: "C.124"
domaine: "D.124.2"
ordre: 5
duree: 1
objectif: >
  Observer les données obtenues dans l’application, identifier une anomalie simple et corriger le traitement responsable du problème.
description: >
  Identifier les anomalies lors de l'authentification et de la manipulation des données (ex. échec de connexion, gestion des exceptions PDO avec try/catch, hachage et vérification de mot de passe avec password_verify). 
  Appliquer une correction ciblée et gérer proprement les retours d'erreurs sans exposer d'informations sensibles.
notions:
  - "Gestion des exceptions PDO (try / catch, PDOException)"
  - "Vérification sécurisée de mot de passe (password_verify)"
  - "Détection et correction des erreurs de requête ou de correspondance"
  - "Affichage d'un message d'erreur sécurisé en cas d'identifiants incorrects"
livrable: >
  Script de connexion PHP robuste et sécurisé gérant les exceptions et corrigeant les anomalies d'accès aux données.
travail_a_faire: >
  Ajouter un bloc try/catch pour intercepter les erreurs PDO lors de la vérification de l'utilisateur, vérifier la correspondance du mot de passe avec password_verify, et afficher un message d'erreur approprié en cas d'échec.
---
