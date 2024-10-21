import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function NotFound() {
  const { error } = useRouteError();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl text-orange-500 font-bold">Error: 404</h1>
      <h2 className="text-5xl font-bold my-10">Page Not Found</h2>
      {error && <h3 className="text-xl my-5">{error.message}</h3>}
      <h3 className="text-xl my-5">Browse back to:</h3>
      
      <NavBar></NavBar>
    </div>
  );
}

export default NotFound;
