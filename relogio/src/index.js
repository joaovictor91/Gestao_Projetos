import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Horas from './Horas';
// Não precisei utilizar
//import Data from './Data';
//import Baner from './Baner';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Hours(){
  root.render(
    <Horas/>
  );
}
setInterval(Hours,1000);
//Por hora não está funcionando
/*root.render(
  <div>
    <Data></Data>
    <p></p>
    <Horas></Horas>
    <p></p>
    <Baner></Baner>
  </div>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
