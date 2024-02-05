import { ToastContainer, toast, Slide } from "react-toastify";
import Router from "./routes";

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="color"
        transition={Slide}
      />
    </>
  );
}

export default App;
