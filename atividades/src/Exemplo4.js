import React from "react";


class Exemplo4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {corfavorita: "red"};
      }
      static getDerivedStateFromProps(props, state) {
        return {corfavorita: props.favcor };
      }
    render() {
      return (
        <div>
        <h1>Exemplo com o getDerivedStateFromProps</h1>
        <h3>Minha cor favorita é {this.state.corfavorita}</h3>
        </div>
      );
    }
  }

export default Exemplo4;