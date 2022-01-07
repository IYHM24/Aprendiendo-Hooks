import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../Hooks/useForm'

import './style.css'

/* 
const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false,
}] */

export const TodoApp = () => {

    const init = () =>{

/*         return [{
            id: new Date().getTime(),
            desc: 'Aprender React',
            done: false,
        }] */
        
        return JSON.parse(localStorage.getItem( 'todos' )) || [];

    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const {values, handleInputChange, reset} = useForm({
        description: "",
    });

    const {description} = values

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleDelete = (todoId) =>{
        const actionDelete = {
            type : "delete",
            payload: todoId,
        }
        dispatch( actionDelete );
    }

    const HandleSubmit = (e)=>{
        e.preventDefault();

        if( description.trim().length <= 1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        reset();
        dispatch( action );
    }

    return (
        <>
            <h1>TodoApp  ( {todos.length} )</h1>
            <hr />

            <div
                className="border rounded my-5 p-3"
            >
                <h3>Agregar Todo</h3>
                <form
                    className="d-flex justify-content-between my-3"
                    onSubmit={HandleSubmit}
                >
                    <input
                        className="form-control"
                        type="text"
                        name="description"
                        placeholder="Aprender..."
                        autoComplete="off"
                        value={description}
                        onChange={handleInputChange}
                    />

                    <button
                        className="btn btn-outline-primary mx-2"
                    >
                        Agegar
                    </button>
                </form>
            </div>

            <ul className="list-group">
                {
                    todos && todos.length > 0 && todos.map((todos, i) => (
                        <li
                            key={todos.id}
                            className="list-group-item d-flex justify-content-between"
                        >
                            <p className="complete">{i + 1}.</p>
                            <p className="pe complete">{todos.desc}</p>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(todos.id)}
                            >
                                eliminar
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
