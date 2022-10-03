import { Navigate, Route, Routes } from "react-router-dom";
import { EditUserPage } from "../pages/EditUerPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { ProfileUserPage } from "../pages/ProfileUserPage";
import { RegisterPage } from "../pages/RegisterPage";
import { SinglePost } from "../pages/SinglePost";
import { TimeLine } from "../pages/TimeLine";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<TimeLine />} />
        <Route path="/search/:keyword" element={<TimeLine />} />
        <Route path="/post/:entryId" element={<SinglePost />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/edit" element={<EditUserPage />} />
        <Route path="/users/:id" element={<ProfileUserPage />} />
        <Route path="/users" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
};
