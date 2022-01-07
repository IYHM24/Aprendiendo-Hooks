import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import './Layout.css';


export const LayoutEffect = () => {

    const {state, increment, decrement} = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const { quote } = !!data && data[0];
    const [boxSize, setBoxSize] = useState({});

    const pTag = useRef("")


    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <>
            <h1>Layout Effect</h1>
            <hr />

            <figure className="text-end">
                <blockquote className="blockquote">
                    <p 
                        ref={pTag} 
                        >{quote}</p>
                </blockquote>
            </figure>

            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>

            <hr/>
                <div className="container p-3 d-flex justify-content-center">
                    <button 
                    className="btn btn-secondary"
                    onClick={()=> decrement(1)}
                    >
                        frase anterior
                    </button> 
                    <button 
                    className="btn btn-primary"
                    onClick={()=> increment(1)}
                    >
                        siguiente frase
                    </button> 
                    
                </div>
        </>
    )
}