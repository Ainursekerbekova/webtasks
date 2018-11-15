<html>
<head>
    <link rel="stylesheet" href="css1.css">
</head>
<body>
<form action="task3.php">
    <select name="standart">
        <option disabled selected>Select</option>
        <option value="TC">Toyota Camry(2008)</option>
        <option value="BMW">BMWx5(2014)</option>
        <option value="Mrc">Mercedec Benz(2010)</option>
    </select><input type="submit" value="set it">
</form>

<form action="2.php">

    <table border="1">
        <tr><td>Marker<span class="z">*</span></td><td>
                <select name="marker">
                    <option disabled <?php if(!$_REQUEST["standart"]){echo 'selected';} ?> >Select</option>
                    <option value="Toyota" <?php if($_REQUEST["standart"]=="TC"){echo 'selected';} ?> >Toyota</option>
                    <option value="BMW" <?php if($_REQUEST["standart"]=="BMW"){echo 'selected';} ?> >BMW</option>
                    <option value="Mercedec" <?php if($_REQUEST["standart"]=="Mrc"){echo 'selected';} ?> >Mercedec</option>
                </select></td></tr>
        <tr><td>Year<span class="z">*</span></td><td>
                <select name="year">
                    <option disabled <?php if(!$_REQUEST["standart"]){echo 'selected';} ?>>Select</option>
                    <?php
                    for ($i=0;$i<20;$i++){
                        $y=1999+$i;
                        if ($_REQUEST["standart"]=="TC" and $y==2008){echo '<option selected>'.$y.'</option>';}
                        if ($_REQUEST["standart"]=="BMW" and $y==2014){echo '<option selected>'.$y.'</option>';}
                        if ($_REQUEST["standart"]=="Mrc" and $y==2010){echo '<option selected>'.$y.'</option>';}
                        else{echo '<option>'.$y.'</option>';}
                    }
                    ?></select></td></tr>
        <tr><td>Model<span class="z">*</span></td><td><input name="model" <?php
                if($_REQUEST["standart"]=="TC"){echo 'value=Camry';}
                if($_REQUEST["standart"]=="BMW"){echo 'value=x5';}
                if($_REQUEST["standart"]=="Mrc"){echo 'value=Benz';}
                ?>></td></tr>
        <tr><td>Engine<span class="z">*</span></td><td>
                <label><input type="radio" name="engine" value="petrolium" <?php
                    if($_REQUEST["standart"]=="TC" or $_REQUEST["standart"]=="BMW" or $_REQUEST["standart"]=="Mrc"){echo 'checked';}
                    ?>  />Petrolium</label>
                <label><input type="radio" name="engine" value="gas"/>Gas</label>
                <label><input type="radio" name="engine" value="diesel"/>Diesel</label></td></tr>
        <tr><td>Price<span class="z">*</span></td><td><input name="price" <?php
                if($_REQUEST["standart"]=="TC"){echo 'value=30000';}
                if($_REQUEST["standart"]=="BMW"){echo 'value=50000';}
                if($_REQUEST["standart"]=="Mrc"){echo 'value=40000';}
                ?> ></td></tr>
        <tr><td>Additional</td><td>
                <label><input type="checkbox"  name="tax"/>Tax payed</label></br>
                <label><input type="checkbox" name="check"/>Technical check passed</label></br>
                <label><input type="checkbox"  name="invest"/>Doesn't require investment</label></td></tr>
    </table>

    <input type="submit">

</form>
</body>
</html>