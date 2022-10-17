import React from "react";
import memesData from "../memesData";

function Meme() {
    const [allMemeImages] = React.useState(memesData);
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: ""
        }
    )
    
    function getMemeImage(){
        const memes = allMemeImages.data.memes;
        const newMemeUrl = memes[Math.floor(Math.random()*memes.length)].url;
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: newMemeUrl
            }
        })
    }

    return(
        <div className="meme">
            <div className="memeForm">
                <div className="inputs">
                    <input type="text" placeholder="top text"/>
                    <input type="text" placeholder="bottom text"/>
                </div>
                <button onClick={getMemeImage}>Get a new meme image</button>
                <img src={meme.randomImage} alt="" />
            </div>
        </div>
    );
}

export default Meme;