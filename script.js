function validateEmail(email) {

    var request = new XMLHttpRequest();
    request.open("GET", https://phonevalidation.abstractapi.com/v1?api_key=d228273636174d4e82639e8644086efd&phone" + email, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200)
        var result = request.responseText;
        data = JSON.parse(result);
        console.log(data.is_valid_format.value);
        if(data.autocorrect != "") {
            $("#autocorrect").text("Did you mean " + data.autocorrect + "?");
        }
        if (data.is_valid_format.value) {
            $("#valid").text(email + " is a valid email address");
            $("#email").css("box-shadow", "0px 0px 5px rgb(220, 247, 205)");


        } else {
            $("#valid").text(email + " is an invalid email address");
            $("#email").css("box-shadow", "0px 0px 5px rgb(247, 211, 205)");
        }
    }
    request.send();
    console.log(isValid);

}

$(document).ready(function(){
    $(":button").click(function(){
        if($("#email").val() == "") {
            $("#valid").text("Please enter an email to validate");
            $("#email").css("box-shadow", "0px 0px 5px rgb(247, 211, 205)");
        } else {
            validateEmail($("#email").val());
        }
    });
});
