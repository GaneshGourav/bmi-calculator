import { Routes, Route } from "react-router-dom";
import { Signup } from "../Pages/signup";
import { Login } from "../Pages/login";
export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/account-signin" element={<Signup />} />
        <Route path="/account-login" element={<Login />} />
      </Routes>
    </>
  );
};
