let btt1 = document.querySelector(".def2");
let btt2 = document.querySelector(".def")
let message = document.querySelector(".sectionN-A");
message.style.animation = "coll4 3s infinite";
btt1.onclick = function () {
  let message = document.querySelector(".sectionN-A");
  message.innerHTML = `<div class="sectionN-A">
  <h3>Lo que dicen mis clientes</h3>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem natus dolore architecto? Ut asperiores cumque deserunt quis consectetur quae quos, rerum natus ipsum! Soluta cumque cum reiciendis vel sit quasi?</p>
  <div class="section-commentaire">
    <img src="/image/Captureprofil.PNG" alt="" width="70px">
    <div class="jza">
      <h5>John Deo</h5>
      <span>Magamusik R USA</span>
    </div>
  </div>
  <span id="crousel">
    <div id="ok3"></div>
    <div id="ok1"> </div>
    <div id="ok2"> </div>
  </span>
</div>`;


}

btt2.onclick = function () {
  let message = document.querySelector(".sectionN-A");
  message.innerHTML = `<div class="sectionN-A">
          <h3>Lo que dicen mis clientes</h3>
          <p>Cuando comenzamos el en redes sociales con Tony para Mgamusik en los Ángeles me ayudo
            bastante con el contenido con excelentes resultatdos. Los recomendaria sin dida.</p>
          <div class="section-commentaire">
            <img src="/image/Captureprofil.PNG" alt="" width="70px">
            <div class="jza">
              <h5>Alex Z.</h5>
              <span>Magamusik R USA</span>
            </div>
          </div>
          <span id="crousel">
            <div id="ok1"></div>
            <div id="ok2"> </div>
            <div id="ok3"> </div>
          </span>
      </div>`;

}

//nav partie //

// declaration des variables 

let btt = document.querySelector("header img");
let bttclose = document.querySelector("nav p");

// si on click sur le btt nav il affiche la partie nav
btt.onclick = function(){
  let nav = document.querySelector("nav");
  nav.style.display = "inherit"
}

bttclose.onclick = function(){
  let nav = document.querySelector("nav");
  nav.style.display = "none"
}