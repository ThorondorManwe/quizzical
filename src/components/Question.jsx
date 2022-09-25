import React from "react";
import Respuestas from "./respuestas";

export default function Question(props) {
    return (
        <div className="questionComponent">
            <h2>{props.pregunta}</h2>
            <div>
                <p>Aquí las respuestas</p>
            </div>
        </div>
    )
}