### Application mobile de blanchisserie
/*
* Blanchisserie - v1.0.0 (https://github.com/tounkaradiagui/blanchisserie_mobile_app)
* Copyright 2024-present Diagui TOUNKARA <tounkaradiagui@gmail.com>
* Licensed under MIT (https://opensource.org/licenses/MIT)
*/

### Users stories de l'application

1. [x] Implémenter une page de bienvenue presentant les services offert dans l'application :

> Pour cela, il est nécessaire d'utiliser le framework React Native et du code JavaScript. L'interface devra être simple et claire pour que les utilisateurs puissent rapidement ce que propose l'application et d'en savoir plus en cliquant sur le bouton "En savoir plus".
> Pour cela, il est nécessaire d'utiliser un framework frontend tel que React Native pour la partie graphique et Firebase pour le stockage des données utilisateurs.

2. [x] Création d'un compte utilisateur :

> Affichage du formulaire de création de compte avec un champ pour le nom, prénom et email ainsi qu'un mot de passe et sa confirmation.

3. [x] Authentification avec email et mot de passe :

> Pour authentifier un utilisateur, il est nécessaire d'avoir sa clé API Google Firebase enregistrée sur le serveur. Cette clé permet à l'utilisateur de se connecter avec son email et son mot de passe.

4. [x] Rediriger l'utilisateur vers la page de services( principalement de d'accueil) après authentification réussie : 
a. Envoi d'un mail de confirmation à l'utilisateur après la création du compte.
b. Demande de validation par le biais d'un lien envoyé par mail.
c. Affichage d'une page de connexion qui affiche un message indiquant que le compte est en attente de validation.
c. Si le lien est valide, connexion automatique de l'utilisateur. Sinon affichage d'une erreur.
d. Afficher un message de bienvenue si la connexion réussie.
e. Permettre au propriétaire de modifier son adresse e-mail ou son mot de passe.
f. Ajouter un bouton "Mot de passe oublié ?" qui redirige vers une page pour remettre le mot de passe.
i. La page doit contenir un formulaire où il faudra rentrer l’adresse e-mail associée au compte pour recevoir un nouveau mot de passe.
j. Une fois que l'utilisateur a validé le formulaire, il recevra un nouvel e-mail pour confirmer la modification de son mot de passe.

