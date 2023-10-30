import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Pages";
import { RouteType } from "../Types/Route/Route";

const Router = () => {
	return (
		<BrowserRouter>
			{/* TODO::헤더 추가 */}
			<Routes>
				{routes.map((item: RouteType) => {
					return (
						<Route
							key={item.path}
							path={item.path}
							element={<item.component />}></Route>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
