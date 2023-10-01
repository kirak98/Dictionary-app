import React from "react";
import "./Dictionary.css";

export default function Meaning(props) {
    if (props.meaning) {
        return (
            <div className="Meaning">
                <h3>{props.meaning.partOfSpeech}</h3>
                <div>
                    <p>
                        {props.meaning.definition}
                        <br />
                        {props.meaning.example}
                    </p>
                </div>
            </div>
        );
    }
}