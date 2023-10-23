<?php
    $to = 'autolustra@gmail.com';

    $subject = 'New Customer';

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $location = $_POST['location'];
    $carDetails = $_POST['carDetails'];
    $service = $_POST['service'];
    $condition = $_POST['condition'];

    $message = "Name: $name\nPhone: $phone\nEmail: $email\nLocation: $location\nCar Details: $carDetails\nService: $service\nCondition: $condition";

    $headers = "From: webmaster@example.com" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        header('Location: success.html');  // Redirect to a success page after sending the email.
    } else {
        header('Location: error.html');  // Redirect to an error page if email sending fails.
}
?>
