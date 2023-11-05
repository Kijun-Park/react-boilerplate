// import NotFound from "../NotFound/NotFound";

import NotFound from "../Page/NotFound";
import TodoList from "../Page/TodoList";
import { RouteType } from "../Types/Route/Route";

const routes: RouteType[] = [
  {
    path: "/",
    component: TodoList,
  },
  {
    path: "/*",
    component: NotFound,
  },
];

export default routes;
