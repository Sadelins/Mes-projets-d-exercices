
// animation des objets //
  let nbr = 1
  let getscroll = function(){
  let jgk  = document.querySelector("section img#tonyhall-branding")
  let calculedetaille = jgk.getBoundingClientRect().top 
  let case1 = document.querySelector(".contt .jhsj")
  let case2 = document.querySelector(".contt .mlk")
 
    if(calculedetaille < "-270.765425"){
    case1.style.animation = "coll 1s ";
    case2.style.animation = "coll2 1s ";
  
    } 
  

//animation de la division case/////

    let calculedetaille2 = document.querySelector(".contt").getBoundingClientRect().top 
    let casee1 = document.querySelector(".case")
    if(calculedetaille2 < "-192.46875"){
      //si la taille de contt est inferieure à cette taille alors on qjoute l'animation 
      casee1.style.animation = "coll3 1s ";
    }

    //animation de la division poocb

    let calculedetaillepoocb = document.querySelector(".case").getBoundingClientRect().top 
    let caseepoocb = document.querySelector(".poocb")
    if(calculedetaillepoocb <"275.25"){
      //si la taille de contt est inferieure à cette taille alors on qjoute l'animation 
      caseepoocb.style.animation = "opa 1s";
    }
 
    // animation partie chocolat
    let objet = document.querySelector(".zec");
    let cal = objet.getBoundingClientRect().top;
    let imgcho  = document.querySelector(".owhief-img img");
    let cont = document.querySelector(".owhief-cont")
    if(cal < "-115.765625"){
    imgcho.style.animation = "imgch 1s"
    cont.style.animation = "imgch 1s"

    }
}


window.addEventListener('scroll',getscroll)



// partie btt changer le backg

let body = document.querySelector("body")
let bttchange = document.querySelector(".bgg")

bttchange.onclick = function(){
  let body = document.querySelector("body")

    body.style.background = "#000"
    body.style.color = "#fff"


}