$(document).ready(function(){
    let numero1 = 0;
    let numero2 = 0;

    let resultado =0;

    const regex = /^\ d+$/;

    $("#btnsumar").click(function(){
       
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe ingresar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        if(!regex.test(numero1)){
            $("#error1").text("Por favor ingrese solo numeros")
            $("#error1").css("color","red");
            
        }


        numero2 = $("#numero2").val();
        
        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo numero");
            $("#error2").css("color","red");
            return;
        }

        if(!regex.test(numero2)){
            $("#error2").text("Por favor ingrese solo numeros")
            $("#error2").css("color","red");
           
        }

        resultado = parseInt(numero1) + parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("color", "blue")
        $("#resultado").css("fontsize", "2rem")
       
    })
    
    $("#btnlimpiar").click(function(){

        limpiar();
    })

    function limpiar(){
        $("#numero1").val("");
        $("#numero2").val("");
    }

    $("#btnrestar").click(function(){

        
        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe ingresar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        if(!regex.test(numero1)){
            $("#error1").text("Por favor ingrese solo numeros")
            $("#error1").css("color","red");
            
        }


        numero2 = $("#numero2").val();
        
        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo numero");
            $("#error2").css("color","red");
            return;
        }

        if(!regex.test(numero2)){
            $("#error2").text("Por favor ingrese solo numeros")
            $("#error2").css("color","red");
           
        }

        resultado = parseInt(numero1) - parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("color", "blue")
        $("#resultado").css("fontsize", "2rem")
        
    })

    $("#btnmultiplicar").click(function(){

        
        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe ingresar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        if(!regex.test(numero1)){
            $("#error1").text("Por favor ingrese solo numeros")
            $("#error1").css("color","red");
            
        }


        numero2 = $("#numero2").val();
        
        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo numero");
            $("#error2").css("color","red");
            return;
        }

        if(!regex.test(numero2)){
            $("#error2").text("Por favor ingrese solo numeros")
            $("#error2").css("color","red");
           
        }

        resultado = parseInt(numero1) * parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("color", "blue")
        $("#resultado").css("fontsize", "2rem")
        
    })

    $("#btndividir").click(function(){

        
        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe ingresar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        if(!regex.test(numero1)){
            $("#error1").text("Por favor ingrese solo numeros")
            $("#error1").css("color","red");
            
        }


        numero2 = $("#numero2").val();
        
        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo numero");
            $("#error2").css("color","red");
            return;
        }

        if(!regex.test(numero2)){
            $("#error2").text("Por favor ingrese solo numeros")
            $("#error2").css("color","red");
           
        }

        resultado = parseInt(numero1) / parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("color", "blue")
        $("#resultado").css("fontsize", "2rem")
        
    })

    
    
});