import React from "react";
import ProfileContextProvider from "../features/profile/contexts/profileContext";
import ProfileContainer from "../features/profile/components/ProfileContainer";

export default function ProfilePage() {
  return (
    <ProfileContextProvider>
      <ProfileContainer />
    </ProfileContextProvider>
  );
}
