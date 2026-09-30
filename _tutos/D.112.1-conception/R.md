

## Observer les occurrences et repérer les répétitions

Il faut expliquee à l'appreannat c'est quoi le problème avec la répétion des valeurs pour une donnée dans la base de données  : Tableau de données, dans un tableau de donnée, 

on peut considérer une base de données comme plusieurs Tableau des données, 


fixer la pratique, selon les règle définit dans le skill


on peut signealer le problème sans donner la solution, le solution sera indiquer dans le tuto suivant


## Découvrir les réalités, les identifiants et les dépendances



## Construire les entités à partir des données




---


je veux apprendre à mes apprenant une nouvelle méthode pour consruite les entités. comme étape préliminaire pour ensuite créer le MCD.

Le problème : 
Le problème est que les débutant n'arrive pas à voire que nom_ville représente un entityé "ville" ou réaliser ville, 

il conséder que ville est un attrivu de l'auteur, , pour ensigne cette méthode, 

j'appliquer la stratégir suivant : 


1. devant un dictionnaire de données je demdne de trouver tous les dépendance fonctionnelle 


````
titre_article
contenu_article
date_publication
statut_article
image_article
nom_auteur
prenom_auteur
email_auteur
nom_ville
nom_categorie
duree_lecture
````

ici, on a deux solution, si l'apprenat à déctecter que on doit ajouter id_article dans le dictionnaire de données, dans ce que l'apprneant à détecter l'entityé : Aritcle, dans ce que il va donner 


duree_lecture = calculable, il ne doit pas être taité , il ne sera pas donnée stocké



id_aritcle -> titre_article, contenu_article, date_publication, statut_article, image_article, nom_auteur, prenom_auteur, email_auteur, nom_ville, nom_categorie

aussi, il peut donner 

email_auteur -> nom_auteur, prenom_auteur, email_auteur, nom_ville



il faut apprende à l'apprenant que chaque identifiant détecter et ajouter va facilité la tâche pour découvrire une entité.

Le problème est que l'apprenant ne remaque pas parfois les identifiant, 

dans ce que on leur apprnd une méthode simple : 

la répédittion des valeurs, si on remaque la répétition des valeurs , par exemple la répétion des valeur de nom_ville, 
on leut expliquer c'est quoi le problème, ( Modification)

aprés on leur expliquer la seul solution qui existe, créer un autre table, pour enregistrerr ces valeur, on crée une nouvelle identifant, 
et on chefche les autre valeur en relation avec ctte identifiant, 

cette relation est un peut spécial, 
à partie de id_ville on peut savoire une suel valeur de nom_ville, on dit il existe une dépendance fonctinnelle entre id_ville et nom_ville

id_ville -> nom_ville, 


mais l'inverse n'est pas vrai, à partir de nom_ville on ne peut pas savoire un suel valeur de id_ville, car il existe plusieurs ville qui ont le meme nom

la solution devient :




id_aritcle -> titre_article, contenu_article, date_publication, statut_article, image_article, nom_auteur, prenom_auteur, email_auteur, nom_ville, nom_categorie

aussi, il peut donner 

email_auteur -> nom_auteur, prenom_auteur, email_auteur, nom_ville

id_ville -> nom_ville


on leur explque que on doit changer le nom_ville de la tableau : Auteur par id_ville

email_auteur -> nom_auteur, prenom_auteur, email_auteur, id_ville

aussi dans Tableau : Article 

id_aritcle -> titre_article, contenu_article, date_publication, statut_article, image_article, nom_auteur, prenom_auteur, *email_auteur*, nom_ville, nom_categorie

on supprimer tous les colonnes quo sont en dépendnat fonctionnelle avec les autre identifiant , il 


id_aritcle -> titre_article, contenu_article, date_publication, statut_article, image_article, *email_auteur*, id_ville, nom_categorie


et on recommebcen à vérifier tous les colonnnes, on va découvrire la même chose avec "nom_categorie"

on ajouter une nouvelle identifiant : id_categorie, 


à la fin ou obtient les Tableau correct

- Pas de répétion des valeurs, 
- Enregisremen unique des valeurs


chaque Tableau est en réaliser un entité, que l'apprennt doit remarque au début de la conception, 