import React from "react";

class Exemplo1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {corfavorita: "Azul"};
    }
    shouldComponentUpdate() {
      return true;
    }
    changecolor = () => {
        
      this.setState({corfavorita: "Vermelho"});
      
    }
    render() {
      return (
        <div>
        <h1>Exemplo com o shouldComponentUpdate</h1>
        {/*<p></p>*/}
        <h3>Minha cor favorita é {this.state.corfavorita}</h3>
        <button type="button" onClick={this.changecolor}>Mudar a Cor</button>
        </div>
      );
    }
  }

  export default Exemplo1;