//declaration des variable 

mot_de_pass = document.querySelector("#password")
message = document.querySelector("#info")
message = document.querySelector("#info")
_name = document.querySelector("#name")
_forename = document.querySelector("#forename")
_num = document.querySelector("#num")
_code = document.querySelector("code")
bodyCase = document.querySelector(".complet")




//controle direct de mot de pass
mot_de_pass.onkeyup = function () {
  bodyCase.style.height = "799px"
  if ((mot_de_pass.value.length != 0) && (mot_de_pass.value == _forename.value || mot_de_pass.value == _name.value)) {
    // si le champ n'a pas été saisir on affiche le message "Veillez renseigner ce champ" et on change le background en blue 
    message.style.display = "inherit"
    message.style.backgroundColor = "red"
    message.style.color = "white"
    message.innerHTML = "Mot de pass ne peut pas etre votre nom"
    bodyCase.style.animation = "bouge .1s"
  } else if (mot_de_pass.value.length == 0) {
    // si le champ n'a pas été saisir on affiche le message "Veillez renseigner ce champ" et on change le background en blue 
    bodyCase.style.animation = "none"
    message.style.display = "inherit"
    message.style.backgroundColor = "red"
    message.style.color = "white"
    message.innerHTML = "Veillez remplir ce champ svp"
    bodyCase.style.animation = "bouge2 .1s"
  } else if (mot_de_pass.value.length < 6) {
    // si le champ n'a pas été saisir on affiche le message "Veillez renseigner ce champ" et on change le background en blue 
    message.style.display = "inherit"
    message.style.backgroundColor = "red"
    message.style.color = "white"
    message.innerHTML = "Mot de pass très faible"
    bodyCase.style.animation = "bouge3 .1s"
  } else if (mot_de_pass.value.length <= 8) {
    // si le champ n'a pas été saisir on affiche le message "Veillez renseigner ce champ" et on change le background en blue 
    message.style.display = "inherit"
    message.style.backgroundColor = "yellow"
    message.style.color = "black"
    message.innerHTML = "Mot de pass moyennement faible"
    bodyCase.style.animation = "bouge4 .1s"
  } else {
    // si le champ n'a pas été saisir on affiche le message "Veillez renseigner ce champ" et on change le background en blue 
    message.style.display = "inherit"
    message.style.backgroundColor = "green"
    message.style.color = "white"
    message.innerHTML = "Mot de passe très fort"
  }

}

btt = document.querySelector("#submit")
btt.onclick = function () {
  bodyCase.style.animation = "bouge5 .1s"
  console.log("Cool")
  bodyCase.style.height = "799px"
  if ((mot_de_pass.value.length != 0) && (mot_de_pass.value == _forename.value || mot_de_pass.value == _name.value)) {
    // si le champ n'a pas été saisir on affiche le message "Veillez renseigner ce champ" et on change le background en blue 
    message.style.display = "inherit"
    message.style.backgroundColor = "red"
    message.style.color = "white"
    message.innerHTML = "Mot de pass ne peut pas etre votre nom"
    bodyCase.style.animation = "bouge .1s"
  } else if (mot_de_pass.value.length == 0) {
    // si le champ n'a pas été saisir on affiche le message "Veillez renseigner ce champ" et on change le background en blue 
    bodyCase.style.animation = "none"
    message.style.display = "inherit"
    message.style.backgroundColor = "blue"
    message.style.color = "white"
    message.innerHTML = "Veillez remplir ce champ svp"
    bodyCase.style.animation = "bouge2 .1s"
  } else if (mot_de_pass.value.length < 6) {
    // si le champ n'a pas été saisir on affiche le message "Veillez renseigner ce champ" et on change le background en blue 
    message.style.display = "inherit"
    message.style.backgroundColor = "red"
    message.style.color = "white"
    message.innerHTML = "Mot de pass très faible"
    bodyCase.style.animation = "bouge3 .1s"
  } else if (mot_de_pass.value.length <= 8) {
    // si le champ n'a pas été saisir on affiche le message "Veillez renseigner ce champ" et on change le background en blue 
    message.style.display = "inherit"
    message.style.backgroundColor = "yellow"
    message.style.color = "black"
    message.innerHTML = "Mot de pass moyennement faible"
    bodyCase.style.animation = "bouge4 .1s"
  } else {
    // si le champ n'a pas été saisir on affiche le message "Veillez renseigner ce champ" et on change le background en blue 
    message.style.display = "inherit"
    message.style.backgroundColor = "green"
    message.style.color = "white"
    message.innerHTML = "Mot de passe très fort"
  }

  //funtion de controle complet 
function bordurecl(e) {
  e.style.border  = "solid red 2px"
  // if(e.value=" "){
    _code.innerHTML = "veillez renseigner les champs vides "
  // }else
  // {
    // _code.innerHTML = ""
  // }
 

 }

 function bordureval(e) {
  e.style.border  = "black solid 1px"
  _code.innerHTML = ""
 }

 if(_name.value == ""){
  bordurecl(_name)
 }else{
  bordureval(_name)
 }

 if(_forename.value == ""){
  bordurecl(_forename)
 }else{
  bordureval(_forename)
 }

 if(_num.value == ""){
  bordurecl(_num)
 }else{
  bordureval(_num)
 }

 if(mot_de_pass.value == ""){
  bordurecl(mot_de_pass)
  console.log(mot_de_pass.value)
 }else{
  bordureval(mot_de_pass)
 }
 


 
  

}


///////////////////Recapchat//////////////////////////////////////////////////////////

bbt_Capth  = document.querySelector("#jhg")
bbt_Capth.onclick = function(){
  boite_capth = document.querySelector(".boite-capch")
  boite_capth.style.display = "inherit"
}