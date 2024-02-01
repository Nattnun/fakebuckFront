export default function Input({ type = "text", placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full focus:outline-none px-3 py-1.5 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
    />
  );
}