import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import ChapterDetail from "./pages/surah-detail/surah-detail";
import ChapterInfo from "./pages/chapter-info/ChapterInfo";
import { AudioPlayerrr } from "./components/audi-player/audio-player";
import { useSelector } from "react-redux";
import { getItem } from "./helpers";

function App() {
  const { audio } = useSelector(state => state.audio)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<ChapterDetail/>} />
        <Route path="/surah/:id/info" element={<ChapterInfo/>} />
      </Routes>
      {audio && <AudioPlayerrr/>}
    </div>
  )
}

export default App;
