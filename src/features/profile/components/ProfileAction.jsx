import Button from "../../../components/Button";
import { RELATIONSHIP_TO_AUTH_USER } from "../../../constants";
import useProfile from "../hooks/use-profile";
import FriendAction from "./FriendAction";
import MeAction from "./MeAction";
import SenderAction from "./SenderAction";
import UnknownAction from "./UnknownAction";

const mapping = {
  [RELATIONSHIP_TO_AUTH_USER.ME]: <MeAction />,
  [RELATIONSHIP_TO_AUTH_USER.UNKNOWN]: <UnknownAction />,
  [RELATIONSHIP_TO_AUTH_USER.FRIEND]: <FriendAction />,
  [RELATIONSHIP_TO_AUTH_USER.RECEIVER]: <SenderAction />,
};

export default function ProfileAction() {
  const { relationshipToAuthUser } = useProfile();
  return <>{mapping[relationshipToAuthUser]}</>;
}
