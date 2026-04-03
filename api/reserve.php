<?php
/**
 * Saffron Restaurant — Reservation API
 * File: api/reserve.php
 *
 * Run the PHP dev server from project root:
 *   php -S localhost:8000 -t api/
 *
 * In vite.config.js, proxy /api → http://localhost:8000
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON body']);
    exit;
}

// ── Validate required fields ────────────────────────────────────────────────
$required = ['firstName', 'lastName', 'date', 'time', 'guests'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(422);
        echo json_encode(['error' => "Missing field: $field"]);
        exit;
    }
}

// ── Database (MySQL via PDO) ─────────────────────────────────────────────────
// Uncomment and configure to save reservations to a database:
/*
$pdo = new PDO(
    'mysql:host=localhost;dbname=saffron;charset=utf8mb4',
    'root',
    'your_password',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

$stmt = $pdo->prepare("
    INSERT INTO reservations (first_name, last_name, date, time, guests, phone, notes, created_at)
    VALUES (:firstName, :lastName, :date, :time, :guests, :phone, :notes, NOW())
");

$stmt->execute([
    ':firstName' => $data['firstName'],
    ':lastName'  => $data['lastName'],
    ':date'      => $data['date'],
    ':time'      => $data['time'],
    ':guests'    => $data['guests'],
    ':phone'     => $data['phone']  ?? '',
    ':notes'     => $data['notes'] ?? '',
]);

$reservationId = $pdo->lastInsertId();
*/

// ── Email confirmation (PHPMailer) ───────────────────────────────────────────
// Uncomment after: composer require phpmailer/phpmailer
/*
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host       = 'smtp.gmail.com';
$mail->SMTPAuth   = true;
$mail->Username   = 'your@gmail.com';
$mail->Password   = 'your_app_password';
$mail->SMTPSecure = 'tls';
$mail->Port       = 587;
$mail->setFrom('reservations@saffronrestaurant.com', 'Saffron Restaurant');
$mail->addAddress($data['email'] ?? 'guest@example.com', $data['firstName'] . ' ' . $data['lastName']);
$mail->isHTML(true);
$mail->Subject = 'Reservation Confirmed — Saffron Restaurant';
$mail->Body    = "<h1>Your reservation is confirmed!</h1>
                  <p>Date: {$data['date']} at {$data['time']}</p>
                  <p>Guests: {$data['guests']}</p>
                  <p>We look forward to welcoming you.</p>";
$mail->send();
*/

// ── Response ─────────────────────────────────────────────────────────────────
http_response_code(201);
echo json_encode([
    'status'        => 'confirmed',
    'reservationId' => 'RES-' . strtoupper(uniqid()),
    'message'       => 'Reservation confirmed. We will contact you shortly.',
    'data'          => [
        'name'   => $data['firstName'] . ' ' . $data['lastName'],
        'date'   => $data['date'],
        'time'   => $data['time'],
        'guests' => $data['guests'],
    ],
]);
