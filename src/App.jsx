import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./main.css";

import VideoPlayer from "./components/videoplayer/VideoPlayer";
import MainPage from "./components/mainpage/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage></MainPage>}
          ></Route>
          <Route path="/video" element={<VideoPlayer></VideoPlayer>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
