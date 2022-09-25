import { Route, Routes } from "react-router-dom";
import { SinglePost } from "../components/SinglePost/SinglePost";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { EditUserPage } from "../pages/EditUerPage";
import { ProfilePage } from "../pages/ProfilePage";

import { TimeLine } from "../pages/TimeLine";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<TimeLine />} />
        <Route path="/:keyword" element={<TimeLine />} />
        <Route path="/post/:entryId" element={<SinglePost />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/edit" element={<EditUserPage />} />
        <Route path="/users/:id" element={<p>perfil de usuario</p>} />
        <Route path="/users" element={<ProfilePage />} />
      </Routes>
    </main>
  );
};
