import { createContext, useState, useEffect } from "react";

import * as authApi from "../../../src/api/auth";
import { storeToken } from "../../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {}, []);

  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    storeToken(res.data.accessToken);
  };

  const login = async (Credential) => {
    const res = await authApi.login(Credential);
    setAuthUser(res.data.user);
    storeToken(res.data.accessToken);
  };

  return (
    <AuthContext.Provider value={{ register, authUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}
