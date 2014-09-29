var naechsteFrage = 1;

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function fragenladen(frage) {
   var antworten=[
        localStorage.getItem(frage + "_r_antwort"),
        localStorage.getItem(frage + "_f_antwort1"),
        localStorage.getItem(frage + "_f_antwort2"),
        localStorage.getItem(frage + "_f_antwort3")
        
    ]
    shuffle(antworten)
    $("#beschreibung").text(localStorage.getItem(frage + "_frage"))

    for (var i=0; i < 4; i++) {
        $("#nr" + i).text(antworten[i])
         $("#nr" + i).val(antworten[i])
    }
    
    $("#benutzer2").unbind("submit")
    $("#benutzer2").submit(function(event) {
        var eingabe = $("#antwortmoeglichkeiten").val()
        if (eingabe==localStorage.getItem(frage + "_r_antwort")){
                alert("Richtig")
                naechsteFrage = naechsteFrage + 1
                if (naechsteFrage==5){
                    alert("Spiel zuende!")
                    window.location = "/quizeingeben.html";
                }else{
                  fragenladen("frage" + naechsteFrage);  
                }
                
        }
        else{
        alert("Leider Falsch")
        }
        event.preventDefault()
    })
}

$(function() {
    fragenladen("frage1")
    
    
})