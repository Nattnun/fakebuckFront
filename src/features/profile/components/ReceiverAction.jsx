import Button from "../../../components/Button";

export default function ReceiverAction() {
  return (
    <div className="flex gap-4">
      <Button bg="blue" color="white">
        Confirm request
      </Button>
      <Button bg="gray">Delete request</Button>
    </div>
  );
}
