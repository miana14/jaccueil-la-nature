$(document).ready(function(){ 
    // if(page=="accueil"){
    //     $("#linkIdee").removeClass("choix");
    //     $("#linkAccueil").addClass("choix");
    // }
    // if(page=="idees"){
    //     $("#linkAccueil").removeClass("choix");
    //     $("#linkIdee").addClass("choix");
    // }   
    if($("main").hasClass("index")){
        $("#linkMentions,#linkContact","#linkActualites").removeClass("choix");
        $("#linkIndex").addClass("choix");
    }
    if($("main").hasClass("mentions")){
        $("#linkIndex,#linkContact","#linkActualites").removeClass("choix");
        $("#linkMentions").addClass("choix");
        }
    if($("main").hasClass("contact")){
        $("#linkIndex,#linkIdee","#linkActualites").removeClass("choix");
        $("#linkContact").addClass("choix");
        }
    if($("main").hasClass("actualites")){
        $("#linkIndex,#linkMentions","#linkContact").removeClass("choix");
        $("#linkActualites").addClass("choix");
        }
})