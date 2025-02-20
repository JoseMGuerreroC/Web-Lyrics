import { useEffect, useRef, useState } from "react";
import "./TestCss.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(TextPlugin);

function testSong() {
    const text1 = useRef(null);
    const text2 = useRef(null);
    const text3 = useRef(null);
  
    const video = useRef();
    const filter = useRef();
    const [isPaused, pause] = useState(true);
    const container = useRef();
    const tl = useRef(null);
  
    useEffect(() => {
      tl.current = gsap
        .timeline({
          paused: true,
        })

        .to([text1.current, text2.current, text3.current], {
          delay: 0.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          delay: 2,
          duration: 2,
          text: {
            value: "¿Qué estará haciendo",
          },
        })
        .set(text2.current, { fontSize: "150px" })
        .to([text2.current], {
          duration: 0.5,
          text: {
            value: "mi ex?",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "Que hace tiempo",
          },
        })
        .to([text2.current], {
          duration: 1,
          text: {
            value: "por ahí no se ve",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 2.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "¿Será que ya me",
          },
        })
        .set(text2.current, { fontSize: "100px" })
        .to([text2.current], {
          duration: 1,
          text: {
            value: "superó",
          },
        })
        .set(text3.current, { fontSize: "100px" })
        .to([text3.current], {
          delay: 1.5,
          duration: 0.6,
          text: {
            value: "y le va bien?",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 2,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "Mientras que yo",
          },
        })
        .to([text2.current], {
          delay: 1,
          duration: 1,
          text: {
            value: "borracho pienso",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 2,
          text: {
            value: "¿Qué estará haciendo",
          },
        })
        .set(text2.current, { fontSize: "150px" })
        .to([text2.current], {
          duration: 0.5,
          text: {
            value: "mi ex?",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "Que hace tiempo",
          },
        })
        .to([text2.current], {
          duration: 1.3,
          text: {
            value: "por ahí no se ve",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 2.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "¿Será que ya me",
          },
        })
        .set(text2.current, { fontSize: "100px" })
        .to([text2.current], {
          duration: 1,
          text: {
            value: "superó",
          },
        })
        .set(text3.current, { fontSize: "100px" })
        .to([text3.current], {
          delay: 1.5,
          duration: 0.6,
          text: {
            value: "y le va bien?",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 2,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "Mientras que yo",
          },
        })
        .to([text2.current], {
          delay: 1,
          duration: 1,
          text: {
            value: "borracho pienso",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1,
          duration: 0,
          text: "",
        })
        .set(text1.current, { fontSize: "300px" })
        .to([text1.current], {
          delay: 1.8,
          duration: 0,
          text: {
            value: "¿Qué",
          },
        })
        .to([text1.current], {
          delay: 0.5,
          duration: 0,
          text: {
            value: "dia",
          },
        })
        .to([text1.current], {
          duration: 0,
          delay: 0.5,
          text: {
            value: "blos",
          },
        })
        .to([text1.current], {
          delay: 0.5,
          duration: 0,
          text: {
            value: "estará",
          },
        })
        .to([text1.current], {
          delay: 0.2,
          duration: 0,
          text: {
            value: "haciendo?",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.5,
          duration: 0,
          text: "",
        })
        .set(text1.current, { fontSize: "200px" })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "¿Estará jangueando?",
          },
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "¿Estará durmiendo?",
          },
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "¿Estará fumando?",
          },
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "¿Estará bebiendo?",
          },
        })
        .to([text1.current], {
          delay: 0.5,
          duration: 0,
          text: "",
        })
        .set([text1.current, text2.current, text3.current], { fontSize: "100px" })
        .to([text1.current], {
          duration: 0.8,
          text: {
            value: "¿Seguirá sola ",
          },
        })
        .to([text2.current], {
          duration: 0.8,
          text: {
            value: "o está saliendo?",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1.3,
          text: {
            value: "Con otro que no soy yo,",
          },
        })
        .to([text2.current], {
          delay: 1,
          duration: 0.5,
          text: {
            value: "no soy yo",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1.2,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1.3,
          text: {
            value: "Mami ese no soy yo,",
          },
        })
        .to([text2.current], {
          duration: 0.5,
          delay: 1,
          text: {
            value: "no soy yo",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.3,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 0.8,
          text: {
            value: "Aposte que",
          },
        })
        .to([text2.current], {
          duration: 1.6,
          text: {
            value: "te olvidaba y perdí",
          },
        })
        .set([text3.current], { fontSize: "150px" })
        .to([text3.current], {
          duration: 1,
          text: {
            value: "$500",
            newClass: "helvetica",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 2,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1.4,
          text: {
            value: "otra vez me ganaron",
          },
        })
        .to([text2.current], {
          duration: 1.1,
          text: {
            value: "los sentimientos",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.6,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1.4,
          text: {
            value: "Los muchacho' piensan",
          },
        })
        .to([text2.current], {
          delay: 0.7,
          duration: 1.2,
          text: {
            value: "que yo estoy contento",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1.5,
          duration: 0,
          text: "",
        })
        .set([text1.current], { fontSize: "250px" })
        .to([text1.current], {
          duration: 0.7,
          text: {
            value: "Pero no,",
          },
        })
  
        .to([text1.current], {
          delay: 1,
          duration: 0,
          text: {
            value: "Estoy",
          },
        })
        .to([text1.current], {
          duration: 0,
          delay: 0.5,
          text: {
            value: "muerto",
          },
        })
        .to([text1.current], {
          duration: 0,
          delay: 0.2,
          text: {
            value: "por",
          },
        })
        .to([text1.current], {
          duration: 0,
          delay: 0.2,
          text: {
            value: "dentro",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1.3,
          duration: 0,
          text: "",
        })
        .set([text1.current], { fontSize: "100px" })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "La disco está llena",
          },
        })
        .set([text2.current], { fontSize: "200px" })
        .to([text2.current], {
          delay: 0.1,
          duration: 1.2,
          text: {
            value: "y a la vez vacía",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.1,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "porque no está",
          },
        })
        .to([text2.current], {
          delay: 0.1,
          duration: 0.6,
          text: {
            value: "la nena mía",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.3,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "Con la que yo",
          },
        })
        .set([text2.current], { fontSize: "150px" })
        .to([text2.current], {
          delay: 0.1,
          duration: 0.6,
          text: {
            value: "siempre me reía",
          },
        })
        .to([text2.current], {
          delay: 1,
          duration: 0.6,
          text: {
            value: "siempre me venía",
          },
        })
        .to([text2.current], {
          delay: 1.2,
          duration: 0.8,
          text: {
            value: "hablaba to' los días",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1.2,
          text: {
            value: "Y ahora no sé na',",
          },
        })
        .to([text1.current], {
          delay: 1,
          duration: 1.2,
          text: {
            value: "Y ahora no sé na'",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          delay: 0.8,
          duration: 1.5,
          text: {
            value: "¿Qué estará haciendo",
          },
        })
        .set(text2.current, { fontSize: "150px" })
        .to([text2.current], {
          duration: 0.5,
          text: {
            value: "mi ex?",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "Que hace tiempo",
          },
        })
        .to([text2.current], {
          duration: 1,
          text: {
            value: "por ahí no se ve",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 2,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "¿Será que ya me",
          },
        })
        .set(text2.current, { fontSize: "100px" })
        .to([text2.current], {
          duration: 1,
          text: {
            value: "superó",
          },
        })
        .set(text3.current, { fontSize: "100px" })
        .to([text3.current], {
          delay: 1.2,
          duration: 0.6,
          text: {
            value: "y le va bien?",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1.2,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "Mientras que yo",
          },
        })
        .to([text2.current], {
          delay: 1,
          duration: 1,
          text: {
            value: "borracho pienso",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 2,
          duration: 0,
          text: "",
        })
        .set(text1.current, { fontSize: "180px" })
        .to([text1.current], {
          delay: 17.3,
          duration: 1,
          text: {
            value: "2019",
            newClass: "helvetica",
          },
        })
        .to([text2.current], {
          duration: 1,
          text: {
            value: "un pestañeo y",
          },
        })
        .to([text3.current], {
          duration: 1,
          text: {
            value: "ahora estamo' aquí",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "2020",
            newClass: "helvetica",
          },
        })
        .to([text2.current], {
          duration: 1,
          text: {
            value: "la última ve' ",
          },
        })
        .to([text3.current], {
          duration: 1,
          text: {
            value: "que yo fui feli'",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "2022",
            newClass: "helvetica",
          },
        })
        .to([text2.current], {
          duration: 1,
          text: {
            value: "la última ve' ",
          },
        })
        .to([text3.current], {
          duration: 1,
          text: {
            value: "que yo te vi",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.8,
          duration: 0,
          text: "",
        })
        .set(text1.current, { fontSize: "100px" })
        .to([text1.current], {
          duration: 1.5,
          text: {
            value: "la vida no me cumplió",
          },
        })
        .to([text2.current], {
          delay: 0.4,
          duration: 1.8,
          text: {
            value: "na' de lo que le pedí",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.9,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 2,
          text: {
            value: "No sé que pasó",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1.5,
          text: {
            value: "Yo le pedí a dio'",
          },
        })
        .to([text2.current], {
          delay: 0.2,
          duration: 1.5,
          text: {
            value: "pero él también me ghosteó",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.8,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1.2,
          text: {
            value: "el futuro me golpeó,",
          },
        })
        .to([text2.current], {
          delay: 0.5,
          duration: 1,
          text: {
            value: "en el pasado me dejó",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 3.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "La felicidad se alejó",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "Y me pregunto,",
          },
        })
        .to([text2.current], {
          delay: 0.2,
          duration: 3,
          text: {
            value: "¿qué estarás haciendo?",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 2.5,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 2,
          text: {
            value: "Si en mí estas pensando",
          },
        })
        .to([text1.current], {
          delay: 1.8,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 3,
          text: {
            value: "O si la luna estás viendo",
          },
        })
        .to([text1.current], {
          delay: 0.8,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "con otra persona,",
          },
        })
        .set(text2.current, { fontSize: "150px" })
        .to([text2.current], {
          duration: 2.5,
          text: {
            value: "conectando",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 0.5,
          duration: 0,
          text: "",
        })
        .set(text2.current, { fontSize: "100px" })
        .to([text1.current], {
          duration: 1,
          text: {
            value: "y si de mí le",
          },
        })
        .to([text2.current], {
          duration: 3,
          text: {
            value: "esta' hablando",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 2,
          duration: 0,
          text: "",
        })
        .to([text1.current], {
          delay: 2.6,
          duration: 0.5,
          text: {
            value: "Espero,",
          },
        })
        .to([text2.current], {
          duration: 0.5,
          text: {
            value: "aunque sea,",
          },
        })
        .to([text3.current], {
          delay: 0.7,
          duration: 3,
          text: {
            value: "ser un buen recuerdo",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1,
          duration: 0,
          text: "",
        })
        .set(text1.current, { fontSize: "200px" })
        .to([text1.current], {
          duration: 0.5,
          text: {
            value: "Ser",
          },
        })
        .to([text1.current], {
          duration: 0.5,
          text: {
            value: "un",
          },
        })
        .to([text1.current], {
          duration: 0.5,
          text: {
            value: "buen",
          },
        })
        .to([text1.current], {
          duration: 2,
          text: {
            value: "recuerdo",
          },
        })
        .to([text1.current, text2.current, text3.current], {
          delay: 1.89,
          duration: 0,
          text: "",
        })
        .to(filter.current, {
          backdropFilter: 'blur(0px)',
          duration: 1,
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
          <p ref={container} className="text">
            <span ref={text1} className="text1 atemica uppercase"></span>
            <span ref={text2} className="text2 atemica uppercase"></span>
            <span ref={text3} className="text3 atemica uppercase"></span>
          </p>
        </div>
      </>
    );
  }
  
  export default testSong;