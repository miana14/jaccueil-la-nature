$(document).ready(function(){
    $("#tout").addClass("on");

    $("#plantes").click(function(){
        $(".tout").hide();
        $(".plantes").show();
        $("#tout,#visites").removeClass("on");
        $("#plantes").addClass("on");
    });
    $("#visites").click(function(){
        $(".tout").hide();
        $(".visites").show();
        $("#tout,#plantes").removeClass("on");
        $("#visites").addClass("on");
    });
    $("#tout").click(function(){
        $(".tout").show();
        $("#visites,#plantes").removeClass("on");
        $("#tout").addClass("on");
    });
})