import { decrement, increment } from "@/store/common-features";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="my-8 text-5xl">{count}</h2>
        <div className="flex flex-row gap-1">
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
