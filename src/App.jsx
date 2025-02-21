import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./main.css";

import TestSongV2 from "./components/TestSongV2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/testSongV2" replace />}
          ></Route>
          <Route path="/testSongV2" element={<TestSongV2></TestSongV2>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
