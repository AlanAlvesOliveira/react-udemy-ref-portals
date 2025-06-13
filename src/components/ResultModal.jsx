import { forwardRef, useImperativeHandle, useRef } from "react";

//esse forwardRef é necessário para fazer funcionar em versões mais antigas do react
const ResultModal = forwardRef(function ResultModal({ onReset, targetTime, remainingTime }, ref) {

  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  //serve para esconder os detalhes internos desse componente.
  //ninguém deveria saber tem que usar esse showModal
  //em vez disso: mostre o open()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;

//versão moderna
// export default function ResultModal({ ref,  result, targetTime }) {
//   return (
//     <dialog ref={ref} className="result-modal">
//       <h2>you {result}</h2>
//       <p>
//         The target time was <strong>{targetTime} seconds</strong>
//       </p>
//       <p>
//         You stopped the timer with <strogn>X seconds left</strogn>
//       </p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// }
