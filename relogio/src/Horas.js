import Typewriter from 'typewriter-effect';

function Horas(){
    let dianome = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
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
            <h2>Agora é {new Date().toLocaleTimeString()}.</h2>
            <h1>
          <Typewriter 
            onInit={(typewriter) =>{
                    typewriter.typeString('Venha para FATEC')
                    
                    .deleteAll()
                    .start();
            }}
          />
          </h1>
        </div>
    );
    
}


setInterval(Horas,1000);

export default Horas;