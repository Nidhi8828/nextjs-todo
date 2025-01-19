import { useState, useEffect } from 'react';

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetch('/api/todos')
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, []);

    const addTodo = () => {
        setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }]);
        setNewTodo('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6  text-blue-600">To-Do App</h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-96  text-blue-600">
                <ul className="space-y-2 mb-4">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="p-2 rounded-md"
                        >
                            {todo.text}
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Add a new to-do"
                        className="p-2 border rounded-md"
                    />
                    <button
                        onClick={addTodo}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
