import coverImage from "../../../assets/profile.png";

export default function CoverImage({ src }) {
  return (
    <div className="max-w-[68.5rem] max-h-[25.5rem] overflow-hidden rounded-lg mx-auto aspect-[1096/480] flex items-center justify-center">
      <img src={src || coverImage} alt="cover" />
    </div>
  );
}
