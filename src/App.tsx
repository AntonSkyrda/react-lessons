import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>
        <MyComponent title={"hello1"}>
            Lorem ipsum dolor sit.
        </MyComponent>
        <MyComponent title={"hello2"}>
        </MyComponent>
        <MyComponent title={"hello3"}>
        </MyComponent>

    </>
  );
}

export default App
