import React from "react";
import "./Dictionary.css";
import Synonyms from "./synonyms.js";

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
                    <Synonyms synonyms={props.meaning.synonyms} />
                </div>
            </div>
        );
    }
}