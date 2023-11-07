// import NotFound from "../NotFound/NotFound";

import NotFound from "@pages/NotFound";
import TodoList from "@pages/TodoList";
import { RouteType } from "@type/Route/Route";

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
