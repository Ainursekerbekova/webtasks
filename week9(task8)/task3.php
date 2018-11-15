<html>
	<head>
        <link rel="stylesheet" href="css1.css">
		
	</head>
	<body>

		<div class="cards">
			<?php
			$cars = [["maker"=>"Toyota","model"=>"Carina","year"=>2001,"price"=>20000,"image"=>"car1.jpg"],
			["maker"=>"Toyota","model"=>"Camry","year"=>2005,"price"=>30000,"image"=>"car2.jpg"],
			["maker"=>"Audi","model"=>"A8","year"=>1986,"price"=>12000,"image"=>"car4.jpg"],
			["maker"=>"Audi","model"=>"A6","year"=>2005,"price"=>30000,"image"=>"car3.jpg"],
			["maker"=>"BMW","model"=>"X5","year"=>2007,"price"=>17000,"image"=>"car5.jpg"],
			["maker"=>"BMW","model"=>"X5","year"=>2015,"price"=>19000,"image"=>"car6.jpg"],
			["maker"=>"BMW","model"=>"Model 7","year"=>2014,"price"=>22000,"image"=>"car7.jpg"],
			["maker"=>"Lada","model"=>"Granta","year"=>2017,"price"=>7000,"image"=>"car8.jpg"]];

			if(isset($_GET['maker'])){
				$a = $_GET['maker'];
				foreach($cars as $i){
					if($i['maker']==$a){
						echo    '<div class="card">
								<img src="'.$i['image'].'" style="width:100px;height:100px;"/>
								<div class="description">
								<div class="title">'.$i['maker'].' '.$i['model'].'</div>
								<div class="price">'.$i['price'].'$</div>
								<div class="year">'.(2017-$i['year']).' years</div></div></div>';
					}
				}
			}
			else if(isset($_GET['year'])){
				foreach($cars as $i){
					if((2017-$i['year'])>=10){
						echo	'<div class="card">
								<img src="'.$i['image'].'" style="width:100px;height:100px;"/>
								<div class="description">
								<div class="title">'.$i['maker'].' '.$i['model'].'</div>
								<div class="price">'.$i['price'].'$</div>
								<div class="year">'.(2017-$i['year']).'years</div>
								</div>
								</div>';
					}
				}
				
			}
			else if(isset($_GET['price'])){
				foreach($cars as $i){
					if($i['price']>=20000){
						echo	'<div class="card">
								<img src="'.$i['image'].'" style="width:100px;height:100px;"/>
								<div class="description">
								<div class="title">'.$i['maker'].' '.$i['model'].'</div>
								<div class="price">'.$i['price'].'$</div>
								<div class="year">'.(2017-$i['year']).'years</div>
								</div>
								</div>';
					}
				}
				
			}
			?>
			
		</div>
		<div class="menu">
			<a href="task3.php">Home</a>|<a href="task3.php?maker=Toyota">Toyota</a>|<a href="task3.php?maker=BMW">BMW</a>|<a href="task3.php?maker=Audi">Audi</a>|<a href="task3.php?maker=Lada">Lada</a>
		</div>
		<div class="menu">
			<a href="task3.php?year=old">Old cars (More than 7 years)</a>|<a href="task3.php?price=expensive">Expensive cars (more than 20.000$)</a>
		</div>
	</body>
</html>