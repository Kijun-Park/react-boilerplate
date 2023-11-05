import React from "react";
import TodoListComponent from "./TodoListComponent";

import { useSelector, useDispatch } from "react-redux";
import { light, dark } from "../../Redux/Slice/ThemeSlice/themeSlice";
import { RootState } from "../../Redux/store";
import { TodoListPropType } from "../../Types/TodoList/TodoList";

const TodoListPresenter = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.value);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    console.log(theme);
    switch (theme) {
      case "dark":
        dispatch(light());
        break;
      case "light":
        dispatch(dark());
        break;
      default:
        break;
    }
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
function dispatch(arg0: { payload: undefined; type: "theme/dark" }) {
  throw new Error("Function not implemented.");
}
