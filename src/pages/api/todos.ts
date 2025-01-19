// export default function handler(req: any, res: any) {
//     res.status(200).json([
//         { id: 1, text: 'Learn Next.js', completed: false },
//         { id: 2, text: 'Understand SSR', completed: true },
//     ]);
// }


import { NextApiRequest, NextApiResponse } from 'next';

// Define a type for the Todo items
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Todo[]>) {
    const todos: Todo[] = [
        { id: 1, text: 'Learn Next.js', completed: false },
        { id: 2, text: 'Understand SSR', completed: true },
    ];

    res.status(200).json(todos);
}
