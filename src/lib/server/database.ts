type Todo = {
	id: nuber;
	text: string;
	completed: boolean;
};

let todos: Todo[] = [
	{
		id: Date.now(),
		text: 'Learn how forms work',
		completed: false
	}
];

export function getTodos() {
	return todos;
}

export function addTodo(text: string) {
	const todo = {
		id: Date.now(),
		text,
		completed: false
	};

	todos.push(todo);
}

export function removeTodo(id: number) {
	todos = todos.filter((todo) => todo.id !== id);
}

export function clearTodos() {
	todos = [];
}
