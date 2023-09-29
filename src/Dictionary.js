import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    
    function handleResposnse(response) {
        console.log(response);

    }

    function search(event) {
        event.preventDefault();
        
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word={keyword}&key={apiKey}`;
        apiKey = "f1cc8436d5e8084ob3affafba54dtceb";
        axios.get(apirUrl).then(handleResposnse);
    }
    function handleKeywordChange(event) {
        console.log(keyword)
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    )
}
