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
    );
    
    function getMemeImage() {
        const memes = allMemeImages.data.memes;
        const newMemeUrl = memes[Math.floor(Math.random()*memes.length)].url;
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: newMemeUrl
            }
        })
    }

    function handleChange(event: any) {
        let {name, value} = event.target;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return(
        <div className="meme">
            <div className="memeForm">
                <div className="inputs">
                    <input 
                        type="text"
                        name="topText" 
                        value={meme.topText}
                        placeholder="top text"
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText" 
                        value={meme.bottomText}
                        placeholder="bottom text"
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage}>Get a new meme image</button>
                <div className="image">
                    <img src={meme.randomImage} alt="" />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </div>
    );
}

export default Meme;