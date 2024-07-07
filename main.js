function formValidate() {
    var Name = document.getElementById("username").value;
    var Email = document.getElementById("email").value;
    var Phone = document.getElementById("phone").value;
    var Error = document.getElementById("error");
    var Text = "";
    if (Name == "" || Email == "" || Phone == "") {
        Text = "Please Fill Your Data";
        Error.innerHTML = Text;
        return false;  
    } else if (Name.length < 3) {
        Text = "Please Enter Vaild Username";
        Error.innerHTML = Text;
        return false;
    } else if (Email.indexOf("@") == -1) {
        Text = "Please Enter Valid Email";
        Error.innerHTML = Text;
        return false;
    } else if (isNaN(Phone) || Phone.length != 11) {
        Text = "Please Enter Valid Phone";
        Error.innerHTML = Text;
        return false;
    } else {
        alert("Form Submited Sucessfully");
        return true;
    }
}