import { useState } from "react";
import { createContext } from "react";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profileUser, setProfileUser] = useState({
    id: 5,
    firstName: "jim",
    lastName: "Ryan",
    profileImage:
      "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
    coverImage:
      "https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_1280.jpg",
  });

  const [profileUserFriends, setProfileUserFriends] = useState([
    {
      id: 5,
      firstName: "jim",
      lastName: "Ryan",
      profileImage:
        "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
      coverImage:
        "https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_1280.jpg",
    },
    {
      id: 5,
      firstName: "Bob",
      lastName: "lee",
      profileImage:
        "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
      coverImage:
        "https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_1280.jpg",
    },
  ]);

  const [relationshipToAuthUser, setRelationshipToAuthUser] = useState("ME");

  return (
    <ProfileContext.Provider
      value={{
        profileUser,
        setProfileUser,
        profileUserFriends,
        setProfileUserFriends,
        relationshipToAuthUser,
        setRelationshipToAuthUser,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
