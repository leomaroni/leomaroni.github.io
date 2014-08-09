$(function() {
    alert ("Alle Angaben sind ohne Gewähr")
    var erstezahl;
    var zweitezahl;
    var klick
    
   $("#1").click(function(){
       $("#textfeld").val($("#textfeld").val() + "1")
   })
   $("#2").click(function(){
       $("#textfeld").val($("#textfeld").val() + "2")
   })
   $("#3").click(function(){
       $("#textfeld").val($("#textfeld").val() + "3")
   })
   $("#4").click(function(){
       $("#textfeld").val($("#textfeld").val() + "4")
   })
   $("#5").click(function(){
       $("#textfeld").val($("#textfeld").val() + "5")
   })
   $("#6").click(function(){
       $("#textfeld").val($("#textfeld").val() + "6")
       
   })
   $("#7").click(function(){
       $("#textfeld").val($("#textfeld").val() + "7")
   })
   $("#8").click(function(){
       $("#textfeld").val($("#textfeld").val() + "8")
   })
   $("#9").click(function(){
       $("#textfeld").val($("#textfeld").val() + "9")
   })
   $("#0").click(function(){
       $("#textfeld").val($("#textfeld").val() + "0")
   })
   $("#clear").click(function(){
       entf();
   })
   $("#plus").click(function(){
       plus();
   })
   $("#gleich").click(function(){
       gleich();
   })
   $("#mal").click(function(){
       mal();
       })
    $("#geteilt").click(function(){
       geteilt();
       }) 
       $("#minus").click(function(){
       minus();
       }) 
  function entf() {
   $("#textfeld").val("")
  }
  
  function plus() {
      klick = "plus"
      erstezahl = parseInt($("#textfeld").val())
      entf();
  }
  function gleich() {
      zweitezahl = parseInt($("#textfeld").val())
      entf();
      if(klick=="plus"){
      erstezahl = erstezahl + zweitezahl
      }
      else if(klick=="mal"){
          erstezahl = erstezahl * zweitezahl
      }
      else if(klick=="geteilt"){
          erstezahl = erstezahl / zweitezahl
      }
      else
      {
          erstezahl = erstezahl - zweitezahl
      }
      $("#textfeld").val(erstezahl)
  }
  function mal() {
      klick = "mal"
      erstezahl = parseInt($("#textfeld").val())
      entf();
  }
  function geteilt() {
      klick = "geteilt"
      erstezahl = parseInt($("#textfeld").val())
      entf();
  }
  function minus() {
      klick = "xlx"
      erstezahl = parseInt($("#textfeld").val())
      entf();
  }
    })