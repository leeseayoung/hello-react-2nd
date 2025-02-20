import Counter from "./Counter";
import MyComponent from "./MyComponent";
import Say from "./Say";
function App() {
  return (
    <>
      <MyComponent favoriteNumber={1}>리액트</MyComponent>;
      <Counter />
      <Say />
    </>
  );
}

export default App;
