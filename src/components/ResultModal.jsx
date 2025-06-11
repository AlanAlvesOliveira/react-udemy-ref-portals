import { forwardRef, useImperativeHandle, useRef } from "react";

//esse forwardRef é necessário para fazer funcionar em versões mais antigas do react
const ResultModal= forwardRef(function ResultModal({ result, targetTime }, ref) {

  const dialog =  useRef();

  //serve para esconder os detalhes internos desse componente.
  //ninguém deveria saber tem que usar esse showModal
  //em vez disso: mostre o open()
  
  useImperativeHandle(ref, () => {
    return {
      open(){
        dialog.current.showModal();
      }
    }
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>you {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>      
      <p>
        You stopped the timer with <strogn>X seconds left</strogn>
      </p>
      <form method="dialog">
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
