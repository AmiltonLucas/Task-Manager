import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { App } from "../pages/App";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/tasks" element={<SignUp />} />
      <Route path="/create-tasks" element={<SignUp />} />
      <Route path="/about" element={<SignUp />} />
      <Route path="*" element={<SignIn />} />
    </Routes>
  );
}
