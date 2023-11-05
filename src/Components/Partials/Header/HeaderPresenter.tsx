import HeaderComponent from "./HeaderComponent";

import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { headerPropType } from "../../../Types/Partials/Header";
import { useState } from "react";

const HeaderPresenter = () => {
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

  return <HeaderComponent props={headerProps} />;
};

export default HeaderPresenter;
