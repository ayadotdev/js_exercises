function validPass(password){
    res = /^(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{3,20}$/g.test(password);
    if (res) {
        return "VALID";
    }
    else{
        return "INVALID";
    }
}

console.log(validPass("Username123"));

     /^(?=.*[0-9])      (?=.*[a-z])      [A-Za-z0-9]    {4,20}$/; 
