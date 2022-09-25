import { useState, useEffect } from 'react';
import Question from './components/Question';
import Respuestas from './components/Respuestas';

function App() {

  const [questions, setQuestions] = useState([]);
  const [juegos, setJuegos] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  let correctas = 0;

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then(data => setQuestions(data.results))
  }, [juegos])

  /* console.log(questions) */

  function handleClick() {
    setJuegos(oldValue => oldValue + 1)
  }
  

  function shuffle(array) {
    let copy = [], n = array.length, i;
    // While there remain elements to shuffle…
    while (n) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);
      // And move it to the new array.
      copy.push(array.splice(i, 1)[0]);
    }
    return copy;
  }

  function muestraCorrectas() {
    console.log(`You scored ${correctas}/5 answers`)
    const respuestasSeparadas = document.querySelectorAll('.respuestaIndividual')
    console.log(respuestasSeparadas)

    const respuestasCorrectas = document.querySelectorAll('.respuestaCorrecta');
    const respuestasIncorrectas = document.querySelectorAll('.respuestaIncorrecta');

    for (let i = 0; i < respuestasCorrectas.length; i++) {
      console.log(respuestasCorrectas[i])
      respuestasCorrectas[i].classList.add("correctaVerde")
    }

    for (let i = 0; i < respuestasIncorrectas.length; i++) {
      console.log(respuestasIncorrectas[i])
      respuestasIncorrectas[i].classList.add("incorrectaRosa")
    }
  }
  

  const preguntas = questions.map(dato => {
    const respuestas = [dato.correct_answer, ...dato.incorrect_answers]
    const shuffleRespuestas = shuffle(respuestas);
    
    
    function laCorrecta(e, correct_answer) {
      const respuestaCorrecta = correct_answer;
      const textoRespuesta = e.target.firstChild.data;
      const parrafoRespuesta = e.target;

      if(textoRespuesta === respuestaCorrecta) {
        parrafoRespuesta.classList.add("respuestaCorrecta");
        console.log("Respuesta correcta")
        correctas += 1
        console.log(`Respuestas correctas: ${correctas}`);
      } else {
        console.log("Respuesta incorrecta");
        parrafoRespuesta.classList.add("respuestaIncorrecta");
      }
    }

    return(
      <>
        <Question
            pregunta={dato.question}
        />
        <Respuestas
            respuestas={shuffleRespuestas}
            shuffleRespuestas={shuffleRespuestas}
            laCorrecta={(e) => laCorrecta(e, dato.correct_answer)}
        />      
      </>
    )
  
  })

  return (
    <div className="mainDiv">
      <h1>El main Div</h1>
      <button onClick={handleClick}>Preguntas</button>
      {preguntas}
      <button onClick={muestraCorrectas}>Check answers</button>
    </div>
  )
}
  

export default App
