<html>
<head>
    <link rel="stylesheet" href="css1.css">
</head>
<body>
<form action="2.php">

    <table border="1">
        <tr><td>Marker<span class="z">*</span></td><td>
            <select name="marker">
                <option disabled selected>Select</option>
                <option value="Toyota">Toyota</option>
                <option value="BMW">BMW</option>
                <option value="Mercedec">Mercedec</option>
            </select></td></tr>
        <tr><td>Year<span class="z">*</span></td><td>
            <select name="year">
                <option disabled selected>Select</option>
                <?php
                    for ($i=0;$i<20;$i++){
                        $y=1999+$i;
                        echo '<option>'.$y.'</option>';
                    }
                ?></select></td></tr>
        <tr><td>Model<span class="z">*</span></td><td><input name="model"></td></tr>
        <tr><td>Engine<span class="z">*</span></td><td>
            <label><input type="radio" name="engine" value="petrolium"/>Petrolium</label>
            <label><input type="radio" name="engine" value="gas"/>Gas</label>
            <label><input type="radio" name="engine" value="diesel"/>Diesel</label></td></tr>
        <tr><td>Price<span class="z">*</span></td><td><input name="price"></td></tr>
        <tr><td>Additional</td><td>
            <label><input type="checkbox"  name="tax"/>Tax payed</label></br>
            <label><input type="checkbox" name="check"/>Technical check passed</label></br>
            <label><input type="checkbox"  name="invest"/>Doesn't require investment</label></td></tr>
    </table>

    <input type="submit">

</form>
</body>
</html>