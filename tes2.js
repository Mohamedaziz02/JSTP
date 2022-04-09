
// alphabetique verification
function verifierAlpha(ch){
  test=1;
  for (var i = 0; i < ch.value.length; i++) {
    if((ch.value.charAt(i)<"A"|| ch.value.charAt(i)>"Z") && (ch.value.charAt(i)<"a"||ch.value.charAt(i)>"z")){
      test=0; // CONDITION FAUX
      break;
    }
  }
return test ;
}

// email verification

    /*
      email must have a domain name
      domain name can be with 2 letters like FR or tn or can be 3 letters like com
      Email Address strin
      g must contain "@" sign
      "."(dot) must be last character in string to test.
      consecutive "." (dot) should not be there.
      Length of string must be at-least 2 characters long.
    */ 
function verifemail(emaill){
  let erreuremail = document.getElementById("erreuremail")
  let val = emaill.value
  let test = 1;
  var atSymbol = val.indexOf("@");
  if(atSymbol < 1) {
    test = 0;
    emaill.style.borderColor = "red" ;
      emaill.style.borderSize = "2px" ;
      console.log("must have an @ symbole")
      erreuremail.innerHTML = "must have an @ symbole"
      erreuremail.style.color="red"
  }

  var dot = val.indexOf(".");
  if(dot <= atSymbol + 2) {
    test = 0
    emaill.style.borderColor = "red" ;
      emaill.style.borderSize = "2px" ;
      console.log("host name unvalide")
      erreuremail.innerHTML = "host name unvalide"
      erreuremail.style.color="red"
  };
  
  let ch=val.substr(val.indexOf(".")+1, val.length);
  if(ch.length != 2 && ch.length != 3){

    // console.log("test = "+test+" length = " +ch.length)
    test=0
    emaill.style.borderColor = "red" ;
    emaill.style.borderSize = "2px" ;
    console.log("domane undifine")
    erreuremail.innerHTML = "domane undifine"
    erreuremail.style.color="red"
  }
  return test
}




// age verification

function ageVerification(agee){
/*
  age should be a number
  age should be in range ]0..99]
*/
  if (isNaN(agee.value)){
    console.log("age est un nombre")
    agee.style.borderColor = "red" ;
    agee.style.borderSize = "2px" ;
  }else if (agee.value<=0 || agee.value >99){
    console.log("age out of range ")
    agee.style.borderColor = "red" ;
    agee.style.borderSize = "2px" ;
  } 
  else {
    agee.style.borderColor = "green" ;
    agee.style.borderSize = "2px" ; 
    console.log("agee valide")
    erreurname2.style.color = "green"
    erreurname2.innerHTML = "test valide"
  }

}
var errMessage = document.getElementById("errMessage")

function inputVirif(){
  let namee = document.getElementById("name")
  let agee = document.getElementById("age")
  let emaill = document.getElementById("email")

  let erreurname = document.getElementById("erreurname")
  let erreurname2 = document.getElementById("erreurname2")
  let erreuremail = document.getElementById("erreuremail")
  // name tests .. :D
  if (namee.value.length==0){
    namee.style.borderColor = "red" ;
    namee.style.borderSize = "2px" ;
    console.log("name vide")
    erreurname.style.color = "red"
    erreurname.innerHTML = "vide"
  }else if (!(verifierAlpha(namee))){
    namee.style.borderColor = "red" ;
    namee.style.borderSize = "2px" ;
    console.log("must be alphabitique")
    erreurname.style.color = "red"
    erreurname.innerHTML = "must be alphabitique"
  }else{
    namee.style.borderColor = "green" ;
    namee.style.borderSize = "2px" ;
    console.log("name valide")
  }
  // age testes .. :D
  if (agee.value.length==0){
    agee.style.borderColor = "red" ;
    agee.style.borderSize = "2px" ;
    console.log("age vide")
    erreurname2.style.color = "red"
    erreurname2.innerHTML = "vide"
  }else ageVerification(agee)

  // mail tests .. :D
  if (emaill.value.length==0){
    emaill.style.borderColor = "red" ;
    emaill.style.borderSize = "2px" ;
    console.log("emaill vide")
    erreuremail.innerHTML ="email vide"
    erreuremail.style.color="red"
  } else if (verifemail(emaill)){
    emaill.style.borderColor = "green" ;
    emaill.style.borderSize = "2px" ;
    console.log("emaill valide")
    erreuremail.innerHTML = ""

  }else verifemail(emaill)


 
}

function fun(){
  document.getElementById("myForm").reset();
} 






//
  //
    //
////////
    //  
  //
//