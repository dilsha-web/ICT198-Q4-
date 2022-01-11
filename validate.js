
function Validate(){
    var a = document.forms["Form"]["name"].value; // assuming that their is a field to ente name in a previously created html file
                                                  //id of name = name and the form_name = Form

    if(a == ""){
        alert ("Name Field cannot be empty!");
    }
}
