import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    function search(event) {
        event.preventDefault();
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
