import React from "react";
import memesData from "../memesData";

function Meme() {
    function getRandomMeme(){
        const memes = memesData.data.memes;
        const meme = memes[Math.floor(Math.random()*memes.length)];
        
    }

    return(
        <div className="meme">
            <div className="memeForm">
                <div className="inputs">
                    <input type="text" placeholder="top text"/>
                    <input type="text" placeholder="bottom text"/>
                </div>
                <button onClick={getRandomMeme}>Get a new meme image</button>
            </div>
        </div>
    );
}

export default Meme;