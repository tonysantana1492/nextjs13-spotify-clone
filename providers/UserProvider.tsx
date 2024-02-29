"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface IProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<IProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
