<!DOCTYPE html>
<html>
<head>
<title>AJAX JSON</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="styles.css">
<!-- the real javascript file -->
<script type="text/javascript" src="java.js"></script>
</head>

<body>
<br><br>
<h1>This website demonstrates AJAX and JSON programming</h1>
<br><br><br>

<div class="inner_row"> 
    <div class="row_item">
        <h1> COUNTRY </h1>
        <input type="text" id="country" name="country"><br>
        <span class="errMsg" id="countryError"></span> <br>
        <input type="submit" id="countrySubmit" name="submit" value="Get Capital City" />
        <br>
        <div id="display_countries"> </div> 
    </div>

    <div class="row_item">
        <h1> CITY </h1>
        <input type="text" id="city" name="city"><br>
        <span class="errMsg" id="cityError"></span> <br>
        <input type="submit" id="citySubmit" name="submit" value="Get Country" />
        <br>
        <div id="display_cities"> </div> 
    </div>
</div>

<div class="center" id="popUp"> </div>


<script type="text/javascript" src="check_r.js"></script>


</html>