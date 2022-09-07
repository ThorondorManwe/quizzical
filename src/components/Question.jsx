import React from "react";

export default function Question(props) {
    console.log(props.questionText)
    return (
        <div className="question">
            <p>{props.questionText}</p>
        </div>
    )
}