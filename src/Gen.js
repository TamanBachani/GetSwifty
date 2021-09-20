import React from "react";

export const Generate = () => {
    return (
        <div className="generate">
        <form action="">
        <h4 className="gen-text">I need</h4>
        <input type="number" name="paras" id="paras-number" min="1" max="13" placeholder="13?" />
        <h4 className='gen-text'>paras of text</h4>
        <button className='gen-button'>Generate</button>
        </form>
    </div>
    )
}