import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Data} from './Data'

export const Lyrics = () => {


    return (
        <>
            <main>
                {Data.map((item, index) => {
                return <p key={index}>
                    {item}
                    </p>
                })}
            </main> 
        </>
    )
}