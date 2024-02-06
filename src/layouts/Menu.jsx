import { useLocation } from "react-router-dom";
import { HouseIcon, UserGroupIcon } from "../icon";
import MenuItem from "./MenuItem";

const menulist = [
  {
    id: 1,
    icon: HouseIcon,
    to: "/",
  },
  {
    id: 2,
    icon: UserGroupIcon,
    to: "/friend",
  },
];

export default function Menu() {
  const { pathname } = useLocation();

  return (
    <nav className="flex gap-2 justify-center py-1.5">
      {menulist.map((el) => (
        <MenuItem
          key={el.id}
          Icon={el.icon}
          to={el.to}
          active={pathname === el.to}
        />
      ))}
    </nav>
  );
}
