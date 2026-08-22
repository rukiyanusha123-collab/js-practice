import { useDispatch, useSelector } from "react-redux";
import {
  increment1,
  decrement1,
  increment2,
  decrement2,
} from "./counterSlice";
import "./App.css";

function App() {
  const counter1 = useSelector((state) => state.counter.counter1);
  const counter2 = useSelector((state) => state.counter.counter2);

  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="counter-card">
        <h1 className="title">Redux Counter</h1>

        <div className="counter-section">
          <h2 className="counter-title">Counter 1</h2>
          <div className="count">{counter1}</div>

          <div className="button-group">
            <button
              className="counter-btn increment"
              onClick={() => dispatch(increment1())}
            >
              +
            </button>

            <button
              className="counter-btn decrement"
              onClick={() => dispatch(decrement1())}
            >
              -
            </button>
          </div>
        </div>

        <div className="divider"></div>

        <div className="counter-section">
          <h2 className="counter-title">Counter 2</h2>
          <div className="count">{counter2}</div>

          <div className="button-group">
            <button
              className="counter-btn increment"
              onClick={() => dispatch(increment2())}
            >
              +
            </button>

            <button
              className="counter-btn decrement"
              onClick={() => dispatch(decrement2())}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;