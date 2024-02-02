import { useContext } from "react";
import { AuthContext } from "../features/contexts/AuthContext.jsx";

export default function useAuth() {
  return useContext(AuthContext);
}
