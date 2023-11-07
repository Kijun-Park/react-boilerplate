import { UserType } from "@type/User/User";

export const getUserData = async (): Promise<UserType> => {
  //TODO::get user data

  const userData: UserType = {
    id: "1",
    userName: "Kijun-Park",
    userId: "ekdlwns3685@naver.com",
    type: "google",
  };
  return userData;
};
