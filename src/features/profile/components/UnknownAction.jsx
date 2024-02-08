import Button from "../../../components/Button";
import useProfile from "../hooks/use-profile";

export default function UnknownAction() {
  const { requestFriend } = useProfile();
  return (
    <div>
      <Button bg="blue" color="white" onClick={requestFriend}>
        Add friend
      </Button>
    </div>
  );
}
