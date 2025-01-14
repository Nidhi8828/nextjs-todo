import { useState, useEffect } from 'react';

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetch('/api/todos')
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, []);

    return (
        <div>
            <h1>To-Do App</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text} {todo.completed ? '(Completed)' : ''}
                    </li>
                ))}
            </ul>
        </div>
    );
}