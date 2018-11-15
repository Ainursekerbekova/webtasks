<link rel="stylesheet" href="css1.css">
<?php
$marker=$_REQUEST["marker"];
$model=$_REQUEST["model"];
$engine=$_REQUEST["engine"];
$price=$_REQUEST["price"];
$year=$_REQUEST["year"];
$old=2018-$year;

if(isset($_REQUEST["tax"])){
    $tax='yes';
} else{ $tax='no';}

if(isset($_REQUEST["check"])){
    $check='yes';
} else{ $check='no';}

if(isset($_REQUEST["invest"])){
    $invest='no';
} else{ $invest='yes';}


if (!$marker or !$year or !$model or !$engine or !$price){
    echo '<div class="wrong">Every * element must be filled</div>';
}
else{
    echo 'You added new car: '.$marker." ".$model.'</br>';
    echo 'Produced in '.$year.'year('.$old.'years old) with '.$engine.' engine'.'</br>';
    echo 'Tax payed: '.$tax.'</br>';
    echo 'Technical check passed: '.$check.'</br>';
    echo 'Require investment: '.$invest.'</br>';
    echo $price."$";
}


?>

