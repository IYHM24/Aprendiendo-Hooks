import React, { useMemo, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { procesoPesado } from '../../Helpers/procesoPesado';

import '../05-useLayoutEffect/Layout.css'


export const MemoHook = () => {

    const {state, increment} = useCounter( 5000 );
    const [show, setShow] = useState( true );

    const memoProcesoPesado = useMemo(() => procesoPesado( state ), [ state ])

    return (
        <>
            <h1>MemoHook</h1>
            <hr/>

            <p>{ memoProcesoPesado }</p>

            <h3>
                <small>{ state }</small>
            </h3>
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
