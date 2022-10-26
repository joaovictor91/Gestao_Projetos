function Data(){
    let dianome = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
    let mes = (new Date().getMonth() + 1);
    let nomemes;
    if(mes===1){nomemes = "Janeiro";}
        if(mes===2){nomemes = "Fevereiro";}
        if(mes===3){nomemes = "Março";}
        if(mes===4){nomemes = "Abril";}
        if(mes===5){nomemes = "Maio";}
        if(mes===6){nomemes = "Junho";}
        if(mes===7){nomemes = "Julho";}
        if(mes===8){nomemes = "Agosto";}
        if(mes===9){nomemes = "Setembro";}
        if(mes===10){nomemes = "Outubro";}
        if(mes===11){nomemes = "Novembro";}
        if(mes===12){nomemes = "Dezembro";}
    return (

        <div>
            <h1>Hoje é {dianome[new Date().getDay()] + ' Dia ' + new Date().getDate()+ ' do mês ' 
            + nomemes + ' do ano de ' + new Date().getFullYear()}.</h1>
        </div>
    );
    
}



export default Data;