import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./main.css";

import TestSong from "./components/TestSong";
import TestSongV2 from "./components/TestSongV2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/testSong" replace/>}></Route>
          <Route path="/testSong" element={<TestSong></TestSong>}></Route>
          <Route path="/testSongV2" element={<TestSongV2></TestSongV2>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
