import Router from "./Router/Router";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global-style";
import lightTheme from "./styles/lightTheme";
import darkTheme from "./styles/darkTheme";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";

const App = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.value);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
