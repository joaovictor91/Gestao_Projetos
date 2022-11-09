import React from "react";


class Exemplo3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "Vermelho"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "Amarelo"})
      }, 1000)
    }
    componentDidUpdate() {
      document.getElementById("mydiv").innerHTML =
      "Ela foi atualizada por " + this.state.favoritecolor;
    }
    render() {
      return (
        <div>
        <h1>Exemplo com o componentDidUpdate</h1>    
        <h3>Minha cor favorita {this.state.favoritecolor}</h3>
        <div id="mydiv"></div>
        </div>
      );
    }
  }

  export default Exemplo3;