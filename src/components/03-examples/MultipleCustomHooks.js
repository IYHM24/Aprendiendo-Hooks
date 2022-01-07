import React from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import '../02-useEffect/SimpleForm.css';

export const MultipleCustomHooks = () => {

    const {state, increment, decrement} = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const { author, quote } = !!data && data[0];
    console.log(`Author`, author);
    console.log(`Quote`, quote);

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <figure className="text-end">
                            <blockquote className="blockquote">
                                <p>{quote}</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                {author}
                            </figcaption>
                        </figure>
                    )
            }

            <hr/>
                <div className="container p-3 d-flex justify-content-center">
                    <button 
                    className="btn btn-primary"
                    onClick={()=> increment(1)}
                    >
                        siguiente frase
                    </button> 
                    
                    <button 
                    className="btn btn-secondary"
                    onClick={()=> decrement(1)}
                    >
                        frase anterior
                    </button> 
                </div>
        </>
    )
}
