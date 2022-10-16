import React from "react";

function Meme() {
    return(
        <div className="meme">
            <form action="">
                <div className="inputs">
                    <input type="text" placeholder="top text"/>
                    <input type="text" placeholder="bottom text"/>
                </div>
                <button>Get a new meme image</button>
            </form>
        </div>
    );
}

export default Meme;