import { Route, Routes } from "react-router-dom";
import { SinglePost } from "../components/SinglePost/SinglePost";
import { TimeLine } from "../pages/TimeLine";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<TimeLine />} />
        <Route path="/:keyword" element={<TimeLine />} />
        <Route path="/post/:entryId" element={<SinglePost />} />
      </Routes>
    </main>
  );
};
