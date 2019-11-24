<?php
 
if($_POST) {
    $name = "";
    $email = "";
    $phone = "";
    $subject = "";
    $message = "";
     
    if(isset($_POST['name'])) {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }
     
    if(isset($_POST['phone'])) {
        $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['subject'])) {
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['message'])) {
        $message = htmlspecialchars($_POST['message']);
    }
     
	$recipient = "webtest@mymalayaleeco-op.com";
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";
     
    if(mail($recipient, $phone, $message, $headers)) {
        echo "<p>Thank you for contacting us, $name.</p>";
    } else {
        echo '<p>We are sorry but your message did not go through. Kindly check your form submission. Thank you.</p>';
    }
     
} else {
    echo '<p>Something went wrong</p>';
}
 
?>