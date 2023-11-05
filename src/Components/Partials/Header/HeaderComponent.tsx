import { headerPropType } from "../../../Types/Partials/Header";

const HeaderComponent = ({ props }: { props: headerPropType }) => {
  const weather = props.weather;
  return (
    <div className="header">
      <div className="user_name">
        <span>Welcome, {props.userName}</span>
      </div>
      <div className="title">
        <span>Todo List</span>
      </div>
      <div className="weather">
        <img src={weather.img.src} alt={weather.img.alt} />
        <span>
          {weather.temperature}
          {weather.isCelsius ? "°C" : "°F"}
        </span>
      </div>
    </div>
  );
};

export default HeaderComponent;
