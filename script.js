function validateEmail(email) {

    var request = new XMLHttpRequest();
    request.open("GET", "https://phonevalidation.abstractapi.com/v1?api_key=d228273636174d4e82639e8644086efd&phone=" + phone, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200)
        var result = request.responseText;
        data = JSON.parse(result);
        console.log(data.valid.value);
     
        if (data.valid.value) {
            $("#valid").text(email + " is a valid email address");


        } else {
            $("#valid").text(email + " is an invalid email address");
        }
    }
    request.send();
    console.log(isValid);

}

$(document).ready(function(){
    $(":button").click(function(){
 
            validateEmail($("#email").val());
    });
});
