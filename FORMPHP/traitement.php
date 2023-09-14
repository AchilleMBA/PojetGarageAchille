<?php

$host= 'localhost';
$port= 3307;
$dbname = 'formulaire_client';
$user ='root';
$pwd = '';

$mysqlDsn = "mysql:host=$host;port=$port;dbname=$dbname";
try {
    $newDB = new PDO($mysqlDsn, $user, $pwd); 
    echo "Connexion établie";
} catch (PDOException $PDOException) {
    echo "Impossible de se connecter à la base de données : " . $PDOException->getMessage(); 
}

 if(isset($_POST['lastName'])&&
   isset($_POST['firstName'])&&
   isset($_POST['mail'])&&
   isset($_POST['phone'])&&
   isset($_POST['adress'])&&
   isset($_POST['city'])&&
   isset($_POST['postcode'])&&
   isset($_POST['mes'])) {

        $insertion = $newDB->prepare('INSERT INTO profil VALUES(NULL, 
        :lastName, 
        :firstName,
        :mail,
        :phone,
        :adress,
        :city,
        :postcode,
        :mes)');

        
    $insertion->bindValue(':lastName', $_POST['lastName']); 
    $insertion->bindValue(':firstName', $_POST['firstName']);
    $insertion->bindValue(':mail', $_POST['mail']);
    $insertion->bindValue(':phone', $_POST['phone']);
    $insertion->bindValue(':adress', $_POST['adress']); 
    $insertion->bindValue(':city', $_POST['city']);
    $insertion->bindValue(':postcode', $_POST['postcode']);
    $insertion->bindValue(':mes', $_POST['mes']);

   
    $verification = $insertion->execute();
    if ($verification) {
        echo "<br>Insertion réussie";
    } else {
        echo "Echec d'insertion";
    }
} else {
    echo "Une variable n'est pas déclarée et ou est null";
}
?>