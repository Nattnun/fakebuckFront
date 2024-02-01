const bgClass = {
  blue: "bg-blue-500 hover:bg-blue-600",
  green: "bg-green-500 hover:bg-green-600",
};

const colorClass = {
  white: "text-white",
};

const widthClass = {
  full: "w-full",
};

export default function Button({ children, bg, color, width }) {
  const classes = `
  ${bg ? bgClass[bg] : ""} 
  ${color ? colorClass[color] : ""}
  ${width ? widthClass[width] : ""}
  `;
  return (
    <button className={`px-3 py-1.5 rounded-md ${classes}`}>{children}</button>
  );
}
