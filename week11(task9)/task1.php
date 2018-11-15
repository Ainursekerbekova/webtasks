<html >
<head>
	<link rel="stylesheet" href="css1.css">

</head>
<body>

<?php
if ($_REQUEST["a"]) {

	$name=$_REQUEST["username"];
	$pass=$_REQUEST["password"];
	$conf=$_REQUEST["password2"];
    if(!$pass or !$conf){
        echo '<div class="wrong">You need to enter both passwords</div>';
    }
	elseif ($pass!= $conf) {
        echo '<div class="wrong">Your password and confirm password are different</div>';
    }
    if (!$name) {
        echo '<div class="wrong">You need to enter username</div>';
    }
    elseif ($name=="JohnDoe") {
        echo '<div class="wrong">Username JohnDoe is alredy reserved</div>';
    }
}
?>

<form action="task1.php">
	Username:    <input type="text" name="username"></br>
	Password:    <input type="password" name="password"></br>
	Confirm password:<input type="password" name="password2"></br>
	<input type="submit" name="submit"></br>
	<a href="task1.php">Clear</a>
	<input type="hidden" name="a" value="true" >
</div>
</form>
</body>
</html>