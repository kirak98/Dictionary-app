import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";


export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
const [results, setResults] = useState (null);
    const [photos, setPhotos] = useState ([]);
    
    function handleImages(response) {
        setPhotos(response.data.photos);
      }

    function handleResponse(response) {
        setResults(response.data);
        let apiKey = "f1cc8436d5e8084ob3affafba54dtceb";
        let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
        axios.get(apiUrl, {headers: {Authorization: `Bearer ${apiKey}`}}).then(handleImages);

    }

    function search(event) {
        event.preventDefault();
        
        let apiKey = "f1cc8436d5e8084ob3affafba54dtceb";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <section>
            <form onSubmit={search} className="form-control-lg ">
                <input type="search" placeholder="Search for a word..." onChange={handleKeywordChange} />
                
            </form>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    )
}
