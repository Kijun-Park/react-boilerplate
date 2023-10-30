// import NotFound from "../NotFound/NotFound";

import NotFound from "../Page/NotFound/NotFound";
import WordList from "../Page/WordList/WordList";
import { RouteType } from "../Types/Route/Route";

const routes: RouteType[] = [
	{
		path: "/",
		component: WordList,
	},
	{
		path: "/*",
		component: NotFound,
	},
];

export default routes;
