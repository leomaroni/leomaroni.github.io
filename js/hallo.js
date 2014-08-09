$(function() {
    alert ("Du musst eine Zahl von 0 bis 100 erraten")
    function spiel() {
    var geheimnis = Math.floor(Math.random() * 100)
    $("body").css("background-color", "silver")
    
    $("#button").off("click");
    $("#button").click(function() {
        var eingabe = parseInt($("#eingabefeld").val())
        if (eingabe > geheimnis) {
            alert("Das Geheimnis ist kleiner!")
            $("body").css("background-color", "red")
        } else if (eingabe < geheimnis) {
            alert("Das Geheimnis ist größer!")
            $("body").css("background-color", "red")
        } else {
            alert("Erraten!")
            $("body").css("background-color", "green")
        }
    })
    
    $("#losung").off("click");
    $("#losung").click(function(){
        
        alert (geheimnis)
        spiel();
    })
    }
    
    spiel();
    
    $("#neu").click(function(){
        spiel();
    })
    

    })