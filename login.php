<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Configuración de la conexión a la base de datos
$servername = "localhost";
$username = "root"; // Usuario de tu base de datos
$password = "";     // Contraseña de tu base de datos
$dbname = "usuarios"; // Nombre de la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener los datos enviados en la solicitud
$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

// Consulta para verificar el usuario
$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $response = array("status" => "success", "message" => "Login exitoso");
} else {
    $response = array("status" => "error", "message" => "Credenciales incorrectas");
}

// Enviar la respuesta en formato JSON
echo json_encode($response);

$conn->close();
?>
