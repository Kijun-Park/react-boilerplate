import TodoListComponent from "./TodoListComponent";

import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "@redux/Slice/ThemeSlice/themeSlice";
import { RootState } from "@redux/store";
import { TodoListPropType } from "@type/TodoList/TodoList";

const TodoListPresenter = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.value);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  const todoListProps: TodoListPropType = {
    todoList: [],
    theme: {
      theme,
      handleThemeChange,
    },
  };

  return <TodoListComponent props={todoListProps} />;
};

export default TodoListPresenter;
