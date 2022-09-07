import Counter from "./components/Counter";
import counterStore from "./store/counter.store";

function App() {
  return (
    <div>
      <Counter counterStore={counterStore}/>
    </div>
  );
}

export default App;
