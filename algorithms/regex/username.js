// function validateUsr(username) {
//     res =  /^\S*[a-z\_\0-9]{4,16}$/.test(username) 
//     return res;
//   }



  function validateUsr(username) {
    res =  /^([a-z0-9_]){4,16}$/g.test(username) 
    return res;
  }

  console.log(validateUsr("Hasd_12assssssasasasasasaasasasasas"));


  //      /^(\d|[a-z]|_){4,14}$/