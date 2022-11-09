import React from "react";

class Exemplo2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {corfavorita: "Vermelho"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({corfavorita: "Azul"})
      }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
      document.getElementById("div1").innerHTML =
      "Antes da atualização, a cor favorita era  " + prevState.corfavorita;
    }
    componentDidUpdate() {
      document.getElementById("div2").innerHTML =
      "A cor foi atualizada por " + this.state.corfavorita;
    }
    render() {
      return (
        <div>
        <h1>Exemplo com o getSnapshotBeforeUpdate</h1>
        <h3>Minha cor favorita is {this.state.corfavorita}</h3>
        <div id="div1"></div>
        <div id="div2"></div>
        </div>
      );
    }
  }

export default Exemplo2;