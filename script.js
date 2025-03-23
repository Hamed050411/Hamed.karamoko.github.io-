    //Animation accueil
function Accueil(){
    let texteAccueil = document.querySelector("#texte-accueil");
    let photoAccueil = document.querySelector("#photo-accueil");
    
    texteAccueil.style.transform = "translateX(0)";
    texteAccueil.style.transition = "all 1s ease-in";

    photoAccueil.style.transform = "translateX(0)";
    photoAccueil.style.transition = "all 2s ease-in";

}
window.addEventListener("scroll", function (){
    //Animation a propos
    let presentation_texte = document.querySelectorAll(".presentation");
    presentation_texte.forEach(presentation_box => {
        let position_presentation = presentation_box.getBoundingClientRect().top;
        let hauterFenetre_presentation = window.innerHeight;

        if(position_presentation < hauterFenetre_presentation && position_presentation > 0 ){
            presentation_box.style.transform = "translateX(0px)";
        }
    })
    //Animation projet
    let projet = document.querySelectorAll(".projets .box");
    let projet_block = document.querySelctorAll(".block-projet");
    projet_block.forEach(projets_block => {
        let position_liste = projets_block.getBoundingClientRect().top;
        let hauterFenetre_liste = window.innerHeight;

        if(position_liste < hauterFenetre_liste && position_liste > 0 ){
            projet.style.transform = "translateY(0px)";
        }
    })
})
