import { useState } from "react";
import Avatar from "../components/Avatar";
import { RightFromBracketIcon } from "../icon";
import { useEffect } from "react";
import { useRef } from "react";
import useAuth from "../hooks/use-auth";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const dropdownEl = useRef(null);

  const {
    authUser: { profileImage, firstName, lastName, id },
    logout,
  } = useAuth();

  useEffect(() => {
    if (open) {
      const handleClickOutside = (e) => {
        if (dropdownEl.current && !dropdownEl.current.contains(e.target))
          setOpen(false);
      };
      document.addEventListener("mouseup", handleClickOutside);
      return () => document.removeEventListener("mouseup", handleClickOutside);
    }
  }, [open]);

  return (
    <div className="relative" ref={dropdownEl}>
      <div role="button" onClick={() => setOpen(!open)}>
        <Avatar src={profileImage} />
      </div>
      {open && (
        <div className="absolute right-0 translate-y-1.5">
          <div className="w-96  bg-white shadow-[0_0_6px_rgb(0,0,0,0.2)] p-2 rounded-lg">
            <Link to={`/profile/${id}`} onClick={() => setOpen(false)}>
              <div
                role="button"
                className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg"
              >
                <Avatar size={3.75} src={profileImage} />
                <div className="flex flex-col">
                  <span className="font-semibold">
                    {firstName} {lastName}
                  </span>
                  <span className="text-sm text-gray-500">
                    See your profile
                  </span>
                </div>
              </div>
            </Link>
            <hr className="my-2 border border-gray-300" />
            <div
              onClick={logout}
              role="button"
              className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg"
            >
              <div
                role="button"
                className="bg-gray-300 w-9 h-9 rounded-full flex items-center justify-center"
              >
                <RightFromBracketIcon />
              </div>
              <span className=" font-semibold text-sm">Log out</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
