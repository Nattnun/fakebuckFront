import { useState } from "react";
import { createContext } from "react";
import * as userApi from "../../../api/user";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as relationshipApi from "../../../api/relationship";
import { RELATIONSHIP_TO_AUTH_USER } from "../../../constants/index";
import useAuth from "../../../hooks/use-auth";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profileUser, setProfileUser] = useState({});
  const [profileUserFriends, setProfileUserFriends] = useState([]);
  const [relationshipToAuthUser, setRelationshipToAuthUser] = useState("");

  const { userId } = useParams();
  const { authUser } = useAuth();

  const requestFriend = async () => {
    await relationshipApi.requestFriend(userId);
    setRelationshipToAuthUser(RELATIONSHIP_TO_AUTH_USER.RECEIVER);
  };

  const confirmRequest = async () => {
    await relationshipApi.confirmRequest(userId);
    setRelationshipToAuthUser(RELATIONSHIP_TO_AUTH_USER.FRIEND);
    setProfileUserFriends((prev) => [...prev, profileUser]);
  };

  const rejectRequest = async () => {
    await relationshipApi.rejectFriend(userId);
    setRelationshipToAuthUser(RELATIONSHIP_TO_AUTH_USER.UNKNOWN);
  };

  const cancelRequest = async () => {
    await relationshipApi.cancelRequest(userId);
    setRelationshipToAuthUser(RELATIONSHIP_TO_AUTH_USER.UNKNOWN);
  };

  const unfriend = async () => {
    await relationshipApi.unfriend(userId);
    setRelationshipToAuthUser(RELATIONSHIP_TO_AUTH_USER.UNKNOWN);
    setProfileUserFriends((prev) => prev.filter((el) => el.id !== authUser.id));
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await userApi.getTargetUserProfile(userId);
        setProfileUser(res.data.profileUser);
        setProfileUserFriends(res.data.profileUserFriends);
        setRelationshipToAuthUser(res.data.relationshipToAuthUser);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, [userId]);

  useEffect(() => {
    if (+userId === authUser.id) {
      setProfileUser(authUser);
    }
  }, [authUser, userId]);

  return (
    <ProfileContext.Provider
      value={{
        profileUser,
        setProfileUser,
        profileUserFriends,
        setProfileUserFriends,
        relationshipToAuthUser,
        setRelationshipToAuthUser,
        requestFriend,
        confirmRequest,
        rejectRequest,
        cancelRequest,
        unfriend,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
