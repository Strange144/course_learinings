import { CountStore } from "../store/Countstore";
export default function NumCount() {
    const { Count, increaseCount, decreaseCount, reset } = CountStore()
    return (
        <div>
            <h1>Count is {Count}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}