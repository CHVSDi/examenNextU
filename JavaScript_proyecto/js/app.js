var calculadora = {}
window.onload = function () {
var display = document.getElementById("display")

}


calculadora = {
    init: function() {

      function igualar() {
        if (op=="no") {
          display.innerHTML=x
        }
        else{
          sl=ni+op+x;
          sol=eval(sl)
          display.innerHTML=sol
          x=sol;
          op="no";
          xi=1;
        }
      }

      var xi=1
      var op = "no"
      var ni=0
      var coma=0
      var x = "0"
      var operad = ""
      var cero = document.getElementById("0")
      var uno = document.getElementById("1")
      var dos = document.getElementById("2")
      var tres = document.getElementById("3")
      var cuatro = document.getElementById("4")
      var cinco = document.getElementById("5")
      var seis = document.getElementById("6")
      var siete = document.getElementById("7")
      var ocho = document.getElementById("8")
      var nueve = document.getElementById("9")
      var punto = document.getElementById("punto")
      var on = document.getElementById("on")
      var sign = document.getElementById("sign")
      var raiz = document.getElementById("raiz")
      var div = document.getElementById("dividido")
      var por = document.getElementById("por")
      var menos = document.getElementById("menos")
      var mas = document.getElementById("mas")
      var igual = document.getElementById("igual")

      cero.addEventListener("click",function(){
        this.numero = "0"
      })

      cero.addEventListener("click", function numerosEnPantalla(){
        var xx = this.numero
        if(x=="0" || xi==1){
          display.innerHTML= xx;
          x=xx;
        }
        else {
          if (x.length > 7) {

          }
          else {
            display.innerHTML+=xx
            x+=xx
          };
        }
        xi=0;
      })

      document.getElementById("0").addEventListener("mousedown", function(){
        document.getElementById("0").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("0").addEventListener("mouseout", function(){
        document.getElementById("0").setAttribute("style","transform:scale(1,1)")
      })
      uno.addEventListener("click", function(){
        this.numero = "1"
      })
      uno.addEventListener("click", function numerosEnPantalla(){
        var xx = this.numero
        if(x=="0" || xi==1){
          display.innerHTML= xx;
          x=xx;
        }
        else {
          if (x.length > 7) {

          }
          else {
            display.innerHTML+=xx
            x+=xx
          };
        }
        xi=0;
      })
      document.getElementById("1").addEventListener("mousedown", function(){
        document.getElementById("1").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("1").addEventListener("mouseout", function(){
        document.getElementById("1").setAttribute("style","transform:scale(1,1)")
      })
      dos.addEventListener("click", function(){
        this.numero = "2"
      })
      dos.addEventListener("click", function numerosEnPantalla(){
        var xx = this.numero
        display.maxLength = "8"
        if(x=="0" || xi==1){
          display.innerHTML= xx;
          x=xx;
        }
        else {
          if (x.length > 7) {

          }
          else {
            display.innerHTML+=xx
            x+=xx
          };
        }
        xi=0;
      })

      document.getElementById("2").addEventListener("mousedown", function(){
        document.getElementById("2").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("2").addEventListener("mouseout", function(){
        document.getElementById("2").setAttribute("style","transform:scale(1,1)")
      })
      tres.addEventListener("click", function(){
        this.numero = "3"
      })
      tres.addEventListener("click", function numerosEnPantalla(){
        var xx = this.numero
        display.maxLength = "8"
        if(x=="0" || xi==1){
          display.innerHTML= xx;
          x=xx;
        }
        else {
          if (x.length > 7) {

          }
          else {
            display.innerHTML+=xx
            x+=xx
          };
        }
        xi=0;
      })
      document.getElementById("3").addEventListener("mousedown", function(){
        document.getElementById("3").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("3").addEventListener("mouseout", function(){
        document.getElementById("3").setAttribute("style","transform:scale(1,1)")
      })
      cuatro.addEventListener("click", function(){
        this.numero = "4"
      })
      cuatro.addEventListener("click", function numerosEnPantalla(){
        var xx = this.numero
        display.maxLength = "8"
        if(x=="0" || xi==1){
          display.innerHTML= xx;
          x=xx;
        }
        else {
          if (x.length > 7) {

          }
          else {
            display.innerHTML+=xx
            x+=xx
          };
        }
        xi=0;
      })
      document.getElementById("4").addEventListener("mousedown", function(){
        document.getElementById("4").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("4").addEventListener("mouseout", function(){
        document.getElementById("4").setAttribute("style","transform:scale(1,1)")
      })
      cinco.addEventListener("click", function(){
        this.numero = "5"
      })
      cinco.addEventListener("click", function numerosEnPantalla(){
        var xx = this.numero
        display.maxLength = "8"
        if(x=="0" || xi==1){
          display.innerHTML= xx;
          x=xx;
        }
        else {
          if (x.length > 7) {

          }
          else {
            display.innerHTML+=xx
            x+=xx
          };
        }
        xi=0;
      })
      document.getElementById("5").addEventListener("mousedown", function(){
        document.getElementById("5").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("5").addEventListener("mouseout", function(){
        document.getElementById("5").setAttribute("style","transform:scale(1,1)")
      })
      seis.addEventListener("click", function(){
        this.numero = "6"
      })
      seis.addEventListener("click", function numerosEnPantalla(){
        var xx = this.numero
        display.maxLength = "8"
        if(x=="0" || xi==1){
          display.innerHTML= xx;
          x=xx;
        }
        else {
          if (x.length > 7) {

          }
          else {
            display.innerHTML+=xx
            x+=xx
          };
        }
        xi=0;
      })
      document.getElementById("6").addEventListener("mousedown", function(){
        document.getElementById("6").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("6").addEventListener("mouseout", function(){
        document.getElementById("6").setAttribute("style","transform:scale(1,1)")
      })
      siete.addEventListener("click", function(){
        this.numero = "7"
      })
      siete.addEventListener("click", function numerosEnPantalla(){
        var xx = this.numero
        if(x=="0" || xi==1){
          display.innerHTML= xx;
          x=xx;
        }
        else {
          if (x.length > 7) {

          }
          else {
            display.innerHTML+=xx
            x+=xx
          };
        }
        xi=0;
      })
      document.getElementById("7").addEventListener("mousedown", function(){
        document.getElementById("7").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("7").addEventListener("mouseout", function(){
        document.getElementById("7").setAttribute("style","transform:scale(1,1)")
      })
      ocho.addEventListener("click", function(){
        this.numero = "8"
      })
      ocho.addEventListener("click", function numerosEnPantalla(){
        var xx = this.numero
        if(x=="0" || xi==1){
          display.innerHTML= xx;
          x=xx;
        }
        else {
          if (x.length > 7) {

          }
          else {
            display.innerHTML+=xx
            x+=xx
          };
        }
        xi=0;
      })
      document.getElementById("8").addEventListener("mousedown", function(){
        document.getElementById("8").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("8").addEventListener("mouseout", function(){
        document.getElementById("8").setAttribute("style","transform:scale(1,1)")
      })
      nueve.addEventListener("click", function(){
        this.numero = "9"
      })
      nueve.addEventListener("click", function numerosEnPantalla(){
        var xx = this.numero
        if(x=="0" || xi==1){
          display.innerHTML= xx;
          x=xx;
        }
        else {
          if (x.length > 7) {

          }
          else {
            display.innerHTML+=xx
            x+=xx
          };
        }
        xi=0;
      })
      document.getElementById("9").addEventListener("mousedown", function(){
        document.getElementById("9").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("9").addEventListener("mouseout", function(){
        document.getElementById("9").setAttribute("style","transform:scale(1,1)")
      })
      punto.addEventListener("click", function(){
        this.numero = "."
      })
      punto.addEventListener("click", function numerosEnPantalla(){
        var xx = this.numero
        if(x=="0" || xi==1){
          display.innerHTML= xx;
          x=xx;
        }
        else {
          display.innerHTML+=xx
          x+=xx;
        }
        xi=0;
      })
      document.getElementById("punto").addEventListener("mousedown", function(){
        document.getElementById("punto").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("punto").addEventListener("mouseout", function(){
        document.getElementById("punto").setAttribute("style","transform:scale(1,1)")
      })
      on.addEventListener("click", function() {
        display.innerHTML=0;
        x="0";
        coma=0;
        ni=0
        op="no"
      })
      document.getElementById("on").addEventListener("mousedown", function(){
        document.getElementById("on").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("on").addEventListener("mouseout", function(){
        document.getElementById("on").setAttribute("style","transform:scale(1,1)")
      })
      sign.addEventListener("click", function() {
        nx=Number(x);
        nx=-nx;
        x=String(nx)
        display.innerHTML=x;
      })
      document.getElementById("sign").addEventListener("mousedown", function(){
        document.getElementById("sign").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("sign").addEventListener("mouseout", function(){
        document.getElementById("sign").setAttribute("style","transform:scale(1,1)")
      })
      raiz.addEventListener("click", function () {
        x=Math.sqrt(x);
        op="no";
        xi=1;
      })
      document.getElementById("raiz").addEventListener("mousedown", function(){
        document.getElementById("raiz").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("raiz").addEventListener("mouseout", function(){
        document.getElementById("raiz").setAttribute("style","transform:scale(1,1)")
      })
      div.addEventListener("click", function () {
        this.oper = "/"
      })
      div.addEventListener("click", function () {
        igualar();
        ni=x;
        op = this.oper;
        xi=1;
      })
      document.getElementById("dividido").addEventListener("mousedown", function(){
        document.getElementById("dividido").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("dividido").addEventListener("mouseout", function(){
        document.getElementById("dividido").setAttribute("style","transform:scale(1,1)")
      })
      por.addEventListener("click", function () {
        this.oper = "*"
      })
      por.addEventListener("click", function () {
        igualar();
        ni=x;
        op = this.oper;
        xi=1;
      })
      document.getElementById("por").addEventListener("mousedown", function(){
        document.getElementById("por").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("por").addEventListener("mouseout", function(){
        document.getElementById("por").setAttribute("style","transform:scale(1,1)")
      })
      menos.addEventListener("click", function () {
        this.oper = "-"
      })
      menos.addEventListener("click", function () {
        igualar();
        ni=x;
        op = this.oper;
        xi=1;
      })
      document.getElementById("menos").addEventListener("mousedown", function(){
        document.getElementById("menos").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("menos").addEventListener("mouseout", function(){
        document.getElementById("menos").setAttribute("style","transform:scale(1,1)")
      })
      mas.addEventListener("click", function () {
        this.oper = "+"
      })
      mas.addEventListener("click", function (){
        igualar();
        ni=x;
        op = this.oper;
        xi=1;
      })
      document.getElementById("mas").addEventListener("mouseout", function(){
        document.getElementById("mas").setAttribute("style","transform:scale(1,1)")
      })
      document.getElementById("mas").addEventListener("mousedown", function(){
        document.getElementById("mas").setAttribute("style","transform:scale(0.95,0.95)")
      })
      igual.addEventListener("click", function(){
        igualar()
      });
      document.getElementById("igual").addEventListener("mouseout", function(){
        document.getElementById("igual").setAttribute("style","transform:scale(1,1)")
      })
      document.getElementById("igual").addEventListener("mouseout", function(){
        document.getElementById("igual").setAttribute("style","transform:scale(1,1)")
      })

    }
}

calculadora.init()
