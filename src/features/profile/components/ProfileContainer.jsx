import Avatar from "../../../components/Avatar";
import CoverImage from "./CoverImage";
import ProfileAction from "./profileAction";
import ProfileInfo from "./ProfileInfo";
import useProfile from "../hooks/use-profile";

export default function profileContainer() {
  const {
    profileUser: { profileImage, coverImage },
  } = useProfile();
  console.log(coverImage);
  return (
    <div className="bg-gradient-to-b from-gray-300 to-white shadow">
      <CoverImage src={coverImage} rounded="bottom" />
      <div className="max-w-[68.5rem] mx-auto px-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end pb-4">
        <div className="-mt-20 sm:-mt-5">
          <Avatar size={10} src={profileImage} />
        </div>
        <div className="sm:flex-1">
          <ProfileInfo />
        </div>
        <div className="sm:mb-4">
          <ProfileAction />
        </div>
      </div>
    </div>
  );
}
