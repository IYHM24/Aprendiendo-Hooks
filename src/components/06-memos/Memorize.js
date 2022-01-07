import React, { useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import '../05-useLayoutEffect/Layout.css'
import {Small} from './Small'


export const Memorize = () => {

    const {state, increment} = useCounter( 10 );
    const [show, setShow] = useState( true );

    return (
        <>
            <h1>Memorize</h1>
            <hr/>
            <h1>
                <Small value= { state } />
            </h1>
            <button
                className="btn btn-primary"
                onClick={()=> increment(1)}
            >
                +1
            </button>

            <button 
                className="mx-2 btn btn-secondary"
                onClick={()=>{
                    setShow( !show );
                }}
            >
                Show/Hide: {JSON.stringify( show )}
            </button>

        </>
    )
}
