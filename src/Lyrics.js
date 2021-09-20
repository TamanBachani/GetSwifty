import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import text from './Data'

export const Lyrics = () => {
    const [lyric, setLyric] = useState([])
    const [count, setCount] = useState(0)
    const [zero, setZero] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setZero('')
        // console.log(count)
        let random = text
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        // console.log(random)
        const display = random.slice(0, count)
        // console.log(display)
        setLyric(display)
    }
    const isZero = () => {
        if (lyric.length === 0) {
            setZero(["Things feel empty without Taylor here :("]);
        }
    }
    useEffect(() => {
        isZero()
    }, [])
    return (
        <>
            <div className="generate">
                <form onSubmit={handleSubmit}>
                <h4 className="gen-text">I need</h4>
                <input type="number" name="paras" id="paras-number" min="1" max="13" placeholder="13?" onChange={(e) => setCount(e.target.value)} />
                <h4 className='gen-text'>paras of text</h4>
                <button className='gen-button' type='submit'>Generate</button>
                </form>
            </div>
            <main>
                <p className='empty'>{zero}</p>
                {lyric.map((item, index) => {
                    return <p key={index}>
                    {item}
                    </p>
                })}
            </main> 
        </>
    )
}