function Horas(){
    return (
        <div>
            
            <h2>Agora é {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    
}


setInterval(Horas,1000);

export default Horas;