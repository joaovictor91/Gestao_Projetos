import './App.css';
import Mensagem from './Mensagem';
import Header from './Header';

import Container from './Container';

function App() {
  return (
    <div className="App">
      <h1>Atividade 1</h1>
      <Mensagem/>
      <h1>Atividade 2</h1>
      <Header favcol="Amarelo"/>
      <h1>Atividade 3</h1>
      <br></br>
      <h1>Atividade 4</h1>
      <Container/>
      
    </div>
  );
}

export default App;
