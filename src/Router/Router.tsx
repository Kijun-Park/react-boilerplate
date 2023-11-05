import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Pages";
import { RouteType } from "../Types/Route/Route";
import Header from "../Components/Partials/Header";
import { headerPropType } from "../Types/Partials/Header";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const handleHeaderSet = () => {
  const [isCelsius, setIsCelsius] = useState(true);
  const theme = useSelector((state: RootState) => state.themeReducer.value);

  const headerProps: headerPropType = {
    userName: "Kijun-Park",
    theme,
    weather: {
      isCelsius,
      setIsCelsius,
      temperature: 24,
      img: {
        src: "https://github.com/Kijun-Park/react-boilerplate/assets/35815788/3bf2ff46-2657-415c-94a1-97c600c82e79",
        alt: "sunny",
      },
    },
  };

  return <Header props={headerProps} />;
};

const Router = () => {
  return (
    <>
      {handleHeaderSet()}
      <BrowserRouter>
        {/* TODO::헤더 추가 */}
        <Routes>
          {routes.map((item: RouteType) => {
            return <Route key={item.path} path={item.path} element={<item.component />} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
