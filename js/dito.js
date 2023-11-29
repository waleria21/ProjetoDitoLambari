
$(document).ready(function(){
   
    $("#botaocardapio").click(function(){
        
        // EXEMPLO 1 
        // jquery de efeito - metodo: show() 

        $(".oculta").show();
        $("#sugestao").show();

        // EXEMPLO 2
        // jquery de efeito - metodo: hide() 
      
        $("#botaocardapio").hide();

        //EXEMPLO 3
        // jquery html - metodo: html()
      
        $("#exemploParagrafo").html("<b>Gostaria de sugerir um prato que não está no cardapio ?</b>");
    });

   // Quando o botão de enviar sugestão for clicado
   $("#botaosugestao").click(function(){
        //EXEMPLO 4
        // jquery html - metodo:val()
       
        var novoPrato = $("#meuCampoInput").val();
        alert("Obrigado pela sugestão do prato: " + novoPrato);

   });
});


