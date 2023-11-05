import TodoListComponent from "../../Page/TodoList/TodoListComponent";

export interface TodoListType {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  degree?: number;
  items: TodoListItemType[];
}

export interface TodoListItemType {
  id: string;
  content: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoListPropType {
  todoList: TodoListType[];
  theme: {
    theme: string;
    handleThemeChange: () => void;
  };
}
