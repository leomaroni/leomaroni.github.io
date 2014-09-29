function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function fragenladen(frage) {
    $("#neuefragen [name=frage]").val(localStorage.getItem(frage + "_frage"))
    $("#neuefragen [name=r_antwort]").val(localStorage.getItem(frage + "_r_antwort"))
    $("#neuefragen [name=f_antwort1]").val(localStorage.getItem(frage + "_f_antwort1"))
    $("#neuefragen [name=f_antwort2]").val(localStorage.getItem(frage + "_f_antwort2"))
    $("#neuefragen [name=f_antwort3]").val(localStorage.getItem(frage + "_f_antwort3"))
}

$(function() {
    $("#auswahlfrage").submit(function (event) {
        var welcheFragen = $("#fragen").val();
        fragenladen(welcheFragen);
        
        event.preventDefault()
    })
    
    
    $("#neuefragen").submit(function (event) {
        var welcheFragen = $("#fragen").val();
        
        var frage= $("#neuefragen [name=frage]").val()
        var r_antwort= $("#neuefragen [name=r_antwort]").val()
        var f_antwort1= $("#neuefragen [name=f_antwort1]").val()
        var f_antwort2= $("#neuefragen [name=f_antwort2]").val()
        var f_antwort3= $("#neuefragen [name=f_antwort3]").val()
        
        localStorage.setItem(welcheFragen + "_frage", frage)
        localStorage.setItem(welcheFragen + "_r_antwort", r_antwort)
        localStorage.setItem(welcheFragen + "_f_antwort1", f_antwort1)
        localStorage.setItem(welcheFragen + "_f_antwort2", f_antwort2)
        localStorage.setItem(welcheFragen + "_f_antwort3", f_antwort3)
        
        event.preventDefault()
    })
    
    fragenladen("frage1")
    
    /*
    $("#neuefragen [name=frage]").val(localStorage.getItem("frage"))
    $("#neuefragen [name=r_antwort]").val(localStorage.getItem("r_antwort"))
    $("#neuefragen [name=f_antwort1]").val(localStorage.getItem("f_antwort1"))
    $("#neuefragen [name=f_antwort2]").val(localStorage.getItem("f_antwort2"))
    $("#neuefragen [name=f_antwort3]").val(localStorage.getItem("f_antwort3"))
   */
})