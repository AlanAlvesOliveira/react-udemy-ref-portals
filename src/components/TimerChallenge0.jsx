// import { useRef, useState } from "react";
// import ResultModal from "./ResultModal";

// export default function TimerChallenge({ title, targetTime }) {

//   const [timerExpired, setTimerExpired] = useState(false);
//   const [timerStarted, setTimerStarted] = useState(false);

//   const timer = useRef();
//   const dialog = useRef();

//   const handleStart = () => {
//     timer.current = setTimeout(() => {
//       setTimerExpired(true);
//       //dialog.current.showModal(); // essa funcionalidade é do html 5 e não do react
//       //https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog

//       //usando useImperativeHandle => serve para não conhecer os detalhes internos de ResultModal,
//       //e como se tivesse "exponto" um metodo publico
//       dialog.current.open();
//     }, targetTime * 1000);
//     setTimerStarted(true);
//   };

//   const handleStop = () => {
//     clearTimeout(timer.current);
//   };
//   return (
//     <>
//       <ResultModal ref={dialog} targetTime={targetTime} result={"lost"}/>
//       <section className="challenge">
//         <h2>{title}</h2>
//         {timerExpired && <p>You lost</p>}
//         <p className="challenge-time">
//           {targetTime} second {targetTime > 1 ? "s" : ""}
//         </p>
//         <button onClick={timerStarted ? handleStop : handleStart}>
//           {timerStarted ? "Stop" : "Start"} Challenge
//         </button>
//         <p className={timerStarted ? "active" : undefined}>
//           {timerStarted ? "Time is running..." : "Timer inactive"}
//         </p>
//       </section>
//     </>
//   );
// }
