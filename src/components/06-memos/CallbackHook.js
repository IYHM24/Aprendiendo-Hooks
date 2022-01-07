import React, { useCallback, useState } from 'react';

import '../05-useLayoutEffect/Layout.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [Counter, setCounter] = useState( 10 );

    const increment = useCallback(
        (num) => {
            setCounter( c => c + num);
        },
        [ setCounter ],
    )

    return (
        <div>
            <h1>useCallback Hook { Counter }</h1>
            <hr />
            <ShowIncrement increment={ increment }/>
        </div>
    );
}
