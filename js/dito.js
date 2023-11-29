
$(document).ready(function(){
    // Quando o botão de mais + for clicado
    $("#botaocardapio").click(function(){
        
        // EXEMPLO 1 
        // jquery de efeito - metodo: show() 
        // mostra o conteudo da div de classe 'oculta' e da div com o id 'sugestao' ao clicar no botão
        $(".oculta").show();
        $("#sugestao").show();

        // EXEMPLO 2
        // jquery de efeito - metodo: hide() 
        // oculta o botão com a id 'mostra' ao clicar no botão
        $("#botaocardapio").hide();

        //EXEMPLO 3
        // jquery html - metodo: html()
        // substitui o conteudo do paragrafo '#exemploParagrafo' por uma frase em negrito
        $("#exemploParagrafo").html("<b>Gostaria de sugerir um prato que não está no cardapio ?</b>");
    });

   // Quando o botão de enviar sugestão for clicado
   $("#botaosugestao").click(function(){
        //EXEMPLO 4
        // jquery html - metodo:val()
        // pega o conteudo do input de sugestão do cardapio e coloca na mensagem de alert alert  
        var novoPrato = $("#meuCampoInput").val();
        alert("Obrigado pela sugestão do prato: " + novoPrato);

   });
});


