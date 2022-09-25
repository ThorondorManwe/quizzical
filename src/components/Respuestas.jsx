import React from "react";

export default function Respuestas(props) {
    const respuestas = props.respuestas;
    console.log(props)

    const respuestasEnHTML = respuestas.map(respuesta => {
        return(
            <p onClick={props.laCorrecta} className="respuestaIndividual">{respuesta}</p>
        )
    })

    return(
        <div className="respuestas">{respuestasEnHTML}</div>
    )
}