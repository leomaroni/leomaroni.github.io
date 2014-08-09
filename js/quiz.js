function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

$(function() {
    $("#neuefragen").submit(function (event) {
        var frage= $("#neuefragen [name=frage]").val()
        var r_antwort= $("#neuefragen [name=r_antwort]").val()
        var f_antwort1= $("#neuefragen [name=f_antwort1]").val()
        var f_antwort2= $("#neuefragen [name=f_antwort2]").val()
        var f_antwort3= $("#neuefragen [name=f_antwort3]").val()
        localStorage.setItem("frage", frage)
        localStorage.setItem("r_antwort", r_antwort)
        localStorage.setItem("f_antwort1", f_antwort1)
        localStorage.setItem("f_antwort2", f_antwort2)
        localStorage.setItem("f_antwort3", f_antwort3)
        event.preventDefault()
    })
    
    var antworten=[localStorage.getItem("r_antwort"),localStorage.getItem("f_antwort1"),localStorage.getItem("f_antwort2"),localStorage.getItem("f_antwort3")]
    shuffle(antworten)
    $("#beschreibung").text(localStorage.getItem("frage"))

    for (var i=0; i < 4; i++) {
        $("#nr" + i).text(antworten[i])
         $("#nr" + i).val(antworten[i])
    }
    $("#benutzer2").submit(function(event) {
        var eingabe = $("#antwortmoeglichkeiten").val()
        if (eingabe==localStorage.getItem("r_antwort")){
                alert("Richtig")
        }
        else{
        alert("Leider Falsch")
        }
        event.preventDefault()
    })
})