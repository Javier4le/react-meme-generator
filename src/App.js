import React, { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

   const [linea1, setLinea1] = useState("");
   const [linea2, setLinea2] = useState("");
   const [imagen, setImagen] = useState("");

   const onChangeLinea1 = function (evento) {
      // alert(evento.target.value)
      setLinea1(evento.target.value)
   }

   const onChangeLinea2 = function (evento) {
      // alert(evento.target.value)
      setLinea2(evento.target.value)
   }

   const onChangeImagen = function (evento) {
      setImagen(evento.target.value)
   }

   const onClickExportar = function (evento) {
      alert("Exportar")
      html2canvas(document.querySelector("#meme")).then(canvas => {
         let img = canvas.toDataURL("image/png");
         let link = document.createElement("a");
         link.download = "meme.png";
         link.href = img;
         link.click();
      });
   }

   return (
      <div className="App">

         <select onChange={onChangeImagen}>
            <option value="fire">Casa en llamas</option>
            <option value="futurama">Futurama</option>
            <option value="history">History Channel</option>
            <option value="matrix">Matrix</option>
            <option value="philosoraptor">Philosoraptor</option>
            <option value="smart">Smart Guy</option>
         </select> <br />

         <input onChange={onChangeLinea1} type="text" maxLength="22" placeholder="Línea 1" /> <br />

         <input onChange={onChangeLinea2} type="text" maxLength="22" placeholder="Línea 2" /> <br />

         <button onClick={onClickExportar}>Exportar</button>


         <div className="meme" id="meme">
            <span>{linea1}</span>
            <span>{linea2}</span>
            <img src={`/img/${imagen}.jpg`} alt="Meme" />
         </div>

      </div>
   );
}

export default App;
