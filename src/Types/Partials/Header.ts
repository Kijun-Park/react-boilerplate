export interface headerPropType {
  userName: string;
  theme: boolean;
  weather: {
    img: {
      src: string;
      alt: string;
    };
    isCelsius: boolean;
    setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
    temperature: number;
  };
}
