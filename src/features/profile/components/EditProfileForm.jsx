import Avatar from "../../../components/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";
import useAuth from "../../../hooks/use-auth";

export default function EditProfileForm() {
  const {
    authUser: { profileImage, coverImage },
    updateUser,
  } = useAuth();

  const updateProfileImage = async (file) => {
    const formData = new FormData(); //Object key==>value
    formData.append("profileImage", file); // {profileImage ==> file}
    await updateUser(formData);
  };
  const updateCoverImage = async (file) => {
    const formData = new FormData();
    formData.append("coverImage", file);
    await updateUser(formData);
  };

  return (
    <div className="flex flex-col gap-4">
      <PictureForm
        title="Profile picture"
        initialSrc={profileImage}
        onSave={updateProfileImage}
      >
        {(src) => <Avatar size={10.5} src={src} />}
      </PictureForm>
      <PictureForm
        title="Cover photo"
        initialSrc={coverImage}
        onSave={updateCoverImage}
      >
        {(src) => <CoverImage src={src} />}
      </PictureForm>
    </div>
  );
}
