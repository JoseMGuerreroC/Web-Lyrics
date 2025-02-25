import "./VideoPlayer.css";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

function VideoPlayer() {
  const videoplayer = useRef();
  const { contextSafe } = useGSAP({ scope: videoplayer });
  const video = useRef();
  const filter = useRef();
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null)
  const tl = useRef(null);
  const progressBar = useRef();

  const [isPaused, pause] = useState(true);
  const [duration, setDuration] = useState(0);
  const [actualSec, setActualSec] = useState(0);
  const [isManualUpdate, setIsManualUpdate] = useState(false);
  const [songName, setSongName] = useState(null);
  const [songAutor, setSongAutor] = useState(null);
  const [symbol, setSymbol] = useState("fa-play");

  useEffect(() => {
    fetch("/songs.json")
      .then((response) => response.json())
      .then((data) => {
        const song = data[0]; //Cambiar por un parámetro de link
        const lyrics = song.lyrics;

        setSongName(song.songname);
        setSongAutor(song.autor);

        const textRefs = {
          1: text1,
          2: text2,
          3: text3,
          4: text4,
        };

        tl.current = gsap.timeline({
          paused: true,
        });

        lyrics.forEach(({ text, newClass, time, duration, position }) => {
          const targets = position
            .map((pos) => textRefs[pos]?.current)
            .filter(Boolean);

          tl.current.to(
            targets,
            {
              duration: duration,
              text: {
                value: text,
                newClass: newClass,
              },
            },
            time
          );
        });

        tl.current.to(filter.current, {
          backdropFilter: "blur(0px)",
          duration: 1,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  function pauseVideo() {
    if (isPaused) {
      showSymbol(1);
      pause(false);
      video.current.play();
      tl.current.resume();
    } else {
      showSymbol(2);
      pause(true);
      video.current.pause();
      tl.current.pause();
    }
  }

  function restartVideo() {
    setActualSec(0);
    showSymbol(5);
    video.current.currentTime = 0;
    progressBar.current.style.width = `${(actualSec / duration) * 100}%`;
    if (isPaused) {
      tl.current.restart().pause();
    } else {
      tl.current.restart();
    }
  }

  function updateBarProgress(e) {
    if (!isManualUpdate) {
      setActualSec(e.target.currentTime);
      progressBar.current.style.width = `${(actualSec / duration) * 100}%`;
    }
  }

  function clickBarProgress(e) {
    const bar = e.target;
    const mousePosition = e.clientX - bar.getBoundingClientRect().left;
    const percentage = (mousePosition / bar.offsetWidth) * 100;
    const newTime = (percentage / 100) * duration;

    progressBar.current.style.width = `${percentage}%`;
    setIsManualUpdate(true);

    setActualSec(newTime);
    video.current.currentTime = newTime;
    tl.current.seek(newTime);

    setTimeout(() => {
      setIsManualUpdate(false);
    }, 100);
  }

  function moveBarProgress(state, e) {
    setIsManualUpdate(true);
    if (!state) {
      setActualSec(video.current.currentTime - 5);
      video.current.currentTime -= 5;
      tl.current.seek(actualSec - 5);
    } else {
      setActualSec(video.current.currentTime + 5);
      video.current.currentTime += 5;
      tl.current.seek(actualSec + 5);
    }
    setTimeout(() => {
      setIsManualUpdate(false);
    }, 100);
  }

  function formatTimer(value) {
    return value.toString().padStart(2, "00");
  }

  const showSymbol = contextSafe((value) => {
    switch (value) {
      case 1:
        setSymbol("fa-play");
        break;
      case 2:
        setSymbol("fa-pause");
        break;
      case 3:
        setSymbol("fa-forward");
        break;
      case 4:
        setSymbol("fa-backward");
        break;
      case 5:
        setSymbol("fa-rotate-right");
        break;
      default:
        break;
    }

    gsap.fromTo(
      ".symbolAlert",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 1,
      }
    );
  });

  return (
    <div ref={videoplayer} className="videoplayer">
      <div className="videoMenu">
        <button className="controlBtn">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <p className="songinfo">
          <span>{songName}</span> - <span>{songAutor}</span>
        </p>
        <button onClick={restartVideo} className="controlBtn restartButton">
          <i className="fa-solid fa-rotate-right"></i>
        </button>
      </div>
      <div className="videoContainer">
        <video
          ref={video}
          onLoadedMetadata={() => setDuration(video.current.duration)}
          onTimeUpdate={updateBarProgress}
          src="/vid_El_Club.mp4"
        ></video>
        <div ref={filter} className="filter"></div>
      </div>
      <div onClick={clickBarProgress} className="progressCont"></div>
      <div ref={progressBar} className="progress"></div>
      <p className="progressTimer">
        {formatTimer(Math.floor(actualSec / 60))}:
        {formatTimer(Math.floor(actualSec % 60))} |{" "}
        {formatTimer(Math.floor(duration / 60))}:
        {formatTimer(Math.floor(duration % 60))}
      </p>
      <div className="lyricCont">
        <p className="text">
          <span ref={text1} className="text1 atemica uppercase t-1"></span>
          <span ref={text2} className="text2 atemica uppercase t-1"></span>
          <span ref={text3} className="text3 atemica uppercase t-1"></span>
        </p>
      </div>
      <div className="subMenuCont">
        <button className="controlBtn">
          <i className="fa-solid fa-backward-step"></i>
        </button>
        <button
          onClick={(e) => {
            moveBarProgress(false);
            showSymbol(4);
          }}
          className="controlBtn back5"
        >
          <span>-5</span>
          <i className="fa-solid fa-rotate-left"></i>
        </button>
        <button onClick={pauseVideo} className="controlBtn pauseButton">
          <i className={`fa-solid ${isPaused ? "fa-play" : "fa-pause"}`}></i>
        </button>
        <button
          onClick={(e) => {
            moveBarProgress(true);
            showSymbol(3);
          }}
          className="controlBtn front5"
        >
          <i className="fa-solid fa-rotate-right"></i>
          <span>+5</span>
        </button>
        <button className="controlBtn">
          <i className="fa-solid fa-forward-step"></i>
        </button>
      </div>
      <div className="symbolAlert">
        <i className={`fa-solid ${symbol}`}></i>
      </div>
      zz
    </div>
  );
}

export default VideoPlayer;
