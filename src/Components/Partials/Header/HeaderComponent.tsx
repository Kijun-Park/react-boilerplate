import { Box } from "../../../Atoms/Box";
import { Img } from "../../../Atoms/Img";
import { Text } from "../../../Atoms/Text";
import { headerPropType } from "../../../Types/Partials/Header";
import { Header } from "./style";

const HeaderComponent = ({ props }: { props: headerPropType }) => {
  const weather = props.weather;
  return (
    <Header>
      <Box width="33%" justifyContent="flex-start">
        <Text size="lg">Welcome, {props.userName}</Text>
      </Box>
      <Box width="33%">
        <Text size="lg">Todo List</Text>
      </Box>
      <Box width="33%" justifyContent="flex-end">
        <Box width="60px" height="50px">
          <Img src={weather.img.src} alt={weather.img.alt} />
        </Box>
        <Text size="lg">
          {weather.temperature}
          {weather.isCelsius ? "°C" : "°F"}
        </Text>
      </Box>
    </Header>
  );
};

export default HeaderComponent;
