import { Routes, Route } from "react-router-dom";
import { Signup } from "../Pages/signup";
import { Login } from "../Pages/login";
import { BmiCalculate } from "../Pages/bmicalculate";
import { BmiHostory } from "../Pages/bmiHistory";
export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/bmi-calculation" element={<BmiCalculate/>} />
        <Route path="/account-signin" element={<Signup />} />
        <Route path="/account-login" element={<Login />} />
        <Route path="/bmi-history" element={<BmiHostory />} />

      </Routes>
    </>
  );
};
