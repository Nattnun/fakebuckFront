import Button from "../../../components/Button";
import useAuth from "../../../hooks/use-auth";
import useProfile from "../hooks/use-profile";

export default function SenderAction() {
  const { cancelRequest } = useProfile();
  return (
    <div>
      <Button bg="gray" onClick={cancelRequest}>
        cancel request
      </Button>
    </div>
  );
}
