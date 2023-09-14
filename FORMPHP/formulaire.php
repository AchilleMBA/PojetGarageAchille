<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de contact</title>
</head>
<body>
<h1>Formulaire de contact</h1>

<p>
    Merci de remplir le formulaire ci-dessous, 
    en nous indiquant l'objet de votre demande.

</p>

<form id="register-form" action="traitement.php"  method="post">
    <label for="lastName">Nom:
        <input type="text" id="lastName" name="lastName"  >
    </label>

    <label for="firstName">Prenom:
        <input type="text" id="firstName" name="firstName"  >
    </label>

    
    <label for="email">E-mail:
        <input type="email" id="mail" name="mail">
    </label>

    <label for="phone">N° de tel:
        <input type="tel" id="phone" name="phone" placeholder="Entrer 10 chiffres">
    </label>

    <label for="adress">Votre adresse:
        <input type="text" id="adress" name="adress"  >
    </label>

    <label for="city">Ville:
        <input type="text" id="city" name="city" >
    </label>

    <label for="postcode">Code postal:
        <input type="text" id="postcode" name="postecode"  >
    </label>

    <label for="message">Message:
        <textarea id="message" name="mes" rows="9" cols="33" ></textarea>
    </label>

    <br>
    <span id="error"></span>
    <button type="submit">Valider</button>
</form>
    

</body>
</html>