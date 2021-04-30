function matchpass(){
    var password = document.f1.pass.value;
    var password2 = document.f1.pass2.value;

    if(password==password2){
        return true;
    }
        else{
            alert("password should match");
            return false;
        }
    }
