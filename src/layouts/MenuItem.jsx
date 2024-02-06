import { Link } from "react-router-dom";

export default function MenuItem({ Icon, active, to }) {
  return (
    <Link
      to={to}
      className={`${active ? "" : "hover:bg-gray-100"} py-2 px-12 rounded`}
    >
      <Icon className={active ? "fill-blue-500" : "fill-gray-500"} />
    </Link>
  );
}
