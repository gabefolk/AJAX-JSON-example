function getCountries(){
    // create a variable we need to send to our PHP file
    var letter = document.getElementById("country").value;
    if (letter == ""){
      document.getElementById("display_countries").innerHTML = "";
      return; // get me outta here
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {   // call back funtion to handle the response from the php page "print json"
      if (this.readyState == 4 && this.status == 200) {
        var to_show = "";
        var results = JSON.parse(this.responseText); // parse converts the string into a js object
        if (results.countries.length > 0) {
            for (var i = 0; i < results.countries.length; i++) {
                to_show += results.countries[i].country + "<br>";
            }
        }else{
          to_show = "There is no country that starts with '"+letter+"'";
        }
        document.getElementById("display_countries").innerHTML = to_show;
      }
    } 
    xmlhttp.open("GET", "check_country.php?country=" + letter, true); // where to send the request
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    xmlhttp.send(); // initiate the request
}

function getCities(){
    // create a variable we need to send to our PHP file
    var letter = document.getElementById("city").value;
    if (letter == ""){
      document.getElementById("display_cities").innerHTML = "";
      return; // get me outta here
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {   // call back funtion to handle the response from the php page "print json"
      if (this.readyState == 4 && this.status == 200) {
        var to_show = "";
        var results = JSON.parse(this.responseText); // parse converts the string into a js object
        if (results.cities.length > 0) {
            for (var i = 0; i < results.cities.length; i++) {
                to_show += results.cities[i].city + "<br>";
            }
        }else{
          to_show = "There is no city that starts with '"+letter+"'";
        }
        document.getElementById("display_cities").innerHTML = to_show;
      }
    } 
    xmlhttp.open("GET", "check_city.php?city=" + letter, true); // where to send the request
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    xmlhttp.send(); // initiate the request
}


function getCity(){
  // create a variable we need to send to our PHP file
  var country = document.getElementById("country").value;
  document.getElementById("popUp").style.animation = "none";


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {   // call back funtion to handle the response from the php page "print json"
    if (this.readyState == 4 && this.status == 200) {
      var to_show = "";
      var result = this.responseText; 
      if (result != "") {
        to_show += "The capital city is ";
        to_show += result;
      }
      else{
        to_show += "no capital city found";
      }
      document.getElementById("popUp").style.animation = "popUp 3s";
      document.getElementById("popUp").innerHTML = to_show;
    }
  } 
  xmlhttp.open("GET", "get_cap_city.php?country=" + country, true); // where to send the request
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
  xmlhttp.send(); // initiate the request
}

function getCountry(){
  // create a variable we need to send to our PHP file
  var city = document.getElementById("city").value;
  document.getElementById("popUp").style.animation = "none";


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {   // call back funtion to handle the response from the php page "print json"
    if (this.readyState == 4 && this.status == 200) {
      var to_show = "";
      var result = this.responseText; 
      if (result != "") {
        to_show += "The country is ";
        to_show += result;
      }
      else{
        to_show += "no country found";
      }
      document.getElementById("popUp").style.animation = "popUp 3s";
      document.getElementById("popUp").innerHTML = to_show;
    }
  } 
  xmlhttp.open("GET", "get_country.php?city=" + city, true); // where to send the request
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
  xmlhttp.send(); // initiate the request
}