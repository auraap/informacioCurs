//Funció per validar que la data de fi és major que la data d'inici


$(document).ready(function() {
    $("#formulari").submit(function(evento){
        var dataInici = new Date($('#dataInici').val());
        var dataFi = new Date($('#dataFi').val()); 
        var validarDates = dataInici.getDate() +'/'+(dataInici.getMonth()+1)+'/'+dataInici.getFullYear();
        function calcularData(dataInici, dataFi) {
            return Math.round((dataFi-dataInici)/(1000*60*60*24));
    }
        var dies = calcularData(dataInici,dataFi);
    
        if(dataInici < dataFi){
            var afegirFila = $("<tr><td>"+$("#nomCurs").val()+"</td><td>"+$("#tipusCurs").val()
            +"</td><td>"+$("#nomProf").val()+"</td><td>"+validarDates+"</td><td>"+dies+"</td><td>"+$("#hores").val()+"</td></tr>");
            afegirFila.appendTo("#bodyTable"); 
            $("#formulari")[0].reset();
        }else{
            alert("La data de fi ha de ser major que la data d'inici"); 
            
            return false;
        }

            
    })

    
});
