import { ToastContainer, toast, Slide } from "react-toastify";
import Router from "./routes";
import useAuth from "./hooks/use-auth";
import Spinner from "./components/Spinner";

function App() {
  const { initialLoading } = useAuth();

  if (initialLoading) return <Spinner />;

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
