function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
        $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            var erro = response.erro
            if (erro==true){
                $(".ceep").hide();
                $(".barra-progresso").hide();
                alert("CEP inválido!");
            }
            else{
                $(".barra-progresso").show();
                document.getElementById("logradouro").innerHTML=response.logradouro;
                document.getElementById("complemento").innerHTML=response.complemento;
                document.getElementById("bairro").innerHTML=response.bairro;
                document.getElementById("localidade").innerHTML=response.localidade;
                //$("#uf").html(response.uf);
                document.getElementById("uf").innerHTML=response.uf;
                document.getElementById("titulo_cep").innerHTML="CEP " + response.cep;
                $(".ceep").show();
                $(".barra-progresso").hide();
                
            }
        }
        
        
    })
};

window.onload = function(){
    $(".ceep").show();
    $(".barra-progresso").hide();
 
};

function mapa (){

};



