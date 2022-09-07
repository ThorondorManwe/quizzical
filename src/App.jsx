import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import Question from './components/Question';

function App() {
  
  const [questions, setQuestions] = useState([]);
  let htmlQuestions = ""

  useEffect(() => {
    console.log(`El array Questions modificado: ${questions}`)
  }, [])
  
  function generateQuestions() {
    /* console.log(questions) */
    /* console.log(questions.results[0].question)
    console.log(questions.length) */
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setQuestions(oldQuestions => oldQuestions = data.results)
        console.log("El contenido de htmlQuestions")
        console.log(htmlQuestions)
        htmlQuestions = questions.map(pregunta => {
          console.log(pregunta)
        })
      })
  }

  /* TODO */
  /* 1. Hace el API call y jala las preguntas cuando das clic en el botón
  2. Reemplaza la interfaz con las preguntas                              - Done está en el return con un ternary
  3. Activa el botón par mostrar las respuestas
  4. Activa el botón Play again que pone la generación de preguntas en marcha
  5. La lógica está aquií, en el component Question solo generas el html con los props que le pases */

  return (
    <div className="App">
      {
        questions.length > 0
        ?
        <div>
          <p>Tenemos preguntas</p>
          {console.log(htmlQuestions)}
        </div>
        :
        <div className="no-questions">
          <h1>Quizzical by Carlos</h1>
          <p>The best game to exersice your brain</p>
          <button onClick={generateQuestions}>Start quiz</button>
        </div>
      }
    </div>
  )
}

export default App
