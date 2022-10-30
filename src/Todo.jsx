import React from 'react'

export default function Todo({ todo }) {
    return (
        <>
            <div>id: {todo.id}</div>
            <div>{todo.name}
                {todo.info}</div>
        </>
    )
}
