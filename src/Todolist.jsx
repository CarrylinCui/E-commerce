import React, { useState, useRef, useEffect } from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function Todolist() {

    const [todos, setTodos] = useState([
        { id: 1, name: 'aaa', info: 'duhsuhd' },
        { id: 2, name: 'baa', info: 'hdjsuhd' },
        { id: 3, name: 'caa', info: 'euhsduhsuhd' },
        { id: 4, name: 'ddaa', info: 'pihdduhsuhd' },
    ])

    const newtodo = useRef()

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    function AddNewTodo() {
        const name = newtodo.current.value

        setTodos(prevtodos => {
            return ([...prevtodos, { id: uuidv4(), name: name, info: 'jhjhk' }])
        })
        newtodo.current.value = null
    }

    return (
        <div>
            {
                todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo} />
                })
            }
            <input ref={newtodo} type='text' />
            <button className='btn-new' onClick={AddNewTodo}>Add</button>
        </div>
    )
}
