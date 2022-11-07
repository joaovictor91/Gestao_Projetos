import React from "react";

class Mensagem extends React.Component {
    shoot = (t) => {
        console.log("Botão foi clicado");
        alert(t);
    }
    render(){
        return (
            <button onClick={()=>this.shoot("Olá Mundo")}>Clique</button>
        );
    }

}

export default Mensagem;