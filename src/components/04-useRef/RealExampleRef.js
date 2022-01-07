import React, { useState } from 'react'
import '../02-useEffect/SimpleForm.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show,setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {
                show &&
                <div
                    className="container border rounded p-4 m-3"
                >
                    <MultipleCustomHooks/>
                </div>
                
            }
            

            <button
                className="btn btn-primary mt-5"
                onClick={()=>{
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
