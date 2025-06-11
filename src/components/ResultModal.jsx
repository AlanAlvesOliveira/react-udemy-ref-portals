export default function ResultModal({ ref,  result, targetTime }) {
  return (
    <dialog ref={ref} className="result-modal">
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
}
