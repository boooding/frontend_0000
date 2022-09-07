import {observer} from "mobx-react";

function Counter({ counterStore }) {
    return (
        <div>
            <button onClick={() => {
                counterStore.increment();
            }}>
                increment
            </button>
            <div>{counterStore.count}</div>
            <button onClick={() => {
                counterStore.decrement();
            }}>
                decrement
            </button>
        </div>
    )
}
export default observer(Counter);
