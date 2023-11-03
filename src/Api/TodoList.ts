import { TodoListType } from "../Types/TodoList/TodoList";

export const getTodoList = async (): Promise<TodoListType[]> => {
	//TODO:: get Todolist

	const todoList: TodoListType[] = [
		{
			id: "1",
			title: "Work out",
			createdAt: "2023-11-03T14:19:31.182Z",
			updatedAt: "2023-11-03T14:19:31.182Z",
			items: [
				{
					id: "1",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "2",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "3",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "4",
					content: "Run on the treadmill for 30 minutes",
					isDone: false,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
			],
		},
		{
			id: "2",
			title: "Work out",
			createdAt: "2023-11-03T14:19:31.182Z",
			updatedAt: "2023-11-03T14:19:31.182Z",
			items: [
				{
					id: "1",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "2",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "3",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "4",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
			],
		},
		{
			id: "3",
			title: "Work out",
			createdAt: "2023-11-03T14:19:31.182Z",
			updatedAt: "2023-11-03T14:19:31.182Z",
			items: [
				{
					id: "1",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "2",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "3",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "4",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
			],
		},
		{
			id: "4",
			title: "Work out",
			createdAt: "2023-11-03T14:19:31.182Z",
			updatedAt: "2023-11-03T14:19:31.182Z",
			items: [
				{
					id: "1",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "2",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "3",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
				{
					id: "4",
					content: "Run on the treadmill for 30 minutes",
					isDone: true,
					createdAt: "2023-11-03T14:19:31.182Z",
					updatedAt: "2023-11-03T14:19:31.182Z",
				},
			],
		},
	];

	return todoList;
};
