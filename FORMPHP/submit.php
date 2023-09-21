<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $email = $_POST["email"];
  $name = $_POST["name"];
  $password = $_POST["password"];


  if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email address";
  } else if (empty($name)) {
    echo "Name is required";
  } else if (empty($password)) {
    echo "Password is required";
  } else if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $password)) {
    echo "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.";
  } else {
    try {
      
      $conn = new mysqli("localhost", "username", "password", "database");

      
      $sql = "INSERT INTO users (email, name, password) VALUES (?, ?, ?)";
      $stmt = $conn->prepare($sql);

      
      $stmt->bind_param("sss", $email, $name, $password);

    
      $stmt->execute();

    
      $conn->close();

  
      header("Location: login.php");
    } catch (Exception $e) {
      echo "An error occurred: " . $e->getMessage();
    }
  }
}
?>