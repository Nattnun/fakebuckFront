import { useContext } from "react";
import { ProfileContext } from "../contexts/profileContext";

export default function useProfile() {
  return useContext(ProfileContext);
}
