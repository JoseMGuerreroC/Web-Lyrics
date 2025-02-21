import { data } from "react-router-dom";
import "./TestCss.css";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

function TestSongV2() {
  const video = useRef();
  const filter = useRef();
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  const tl = useRef(null);

  const [isPaused, pause] = useState(true);

  useEffect(() => {
    fetch("/songs.json")
      .then((response) => response.json())
      .then((data) => {
        const song = data[0];
        const lyrics = song.lyrics;

        const textRefs = {
          1: text1,
          2: text2,
          3: text3,
        };

        tl.current = gsap
          .timeline({
            paused: true,
          })
          .to(text1.current, {
            duration: 0.4,
            text: {
              value: song.songname,
              newClass: "atemicaItalic uppercase t-6",
            },
          })
          .to(text2.current, {
            duration: 0.4,
            text: {
              value: song.autor,
              newClass: "t-1",
            },
          })
          .to([text1.current, text2.current], {
            duration: 0.5,
            delay: 9.8,
            text: "",
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
      pause(false);
      video.current.play();
      tl.current.resume();
    } else {
      pause(true);
      video.current.pause();
      tl.current.pause();
    }
  }

  function restartVideo() {
    video.current.currentTime = 0;
    tl.current.restart();
  }

  return (
    <>
      <button onClick={pauseVideo} className="pauseButton">
        <i className={`fa-solid ${isPaused ? "fa-play" : "fa-pause"}`}></i>
      </button>
      <button onClick={restartVideo} className="restartButton">
        <i className="fa-solid fa-rotate-right"></i>
      </button>
      <div className="videoContainer">
        <video ref={video} src="/vid_El_Club.mp4"></video>
        <div ref={filter} className="filter"></div>
      </div>
      <div className="lyricCont">
        <p className="text">
          <span ref={text1} className="text1 atemica uppercase t-1"></span>
          <span ref={text2} className="text2 atemica uppercase t-1"></span>
          <span ref={text3} className="text3 atemica uppercase t-1"></span>
        </p>
      </div>
    </>
  );
}

export default TestSongV2;
