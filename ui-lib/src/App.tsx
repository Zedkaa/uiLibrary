import Button from "./components/Button/Button";

function App() {
  return (
    <Button
      variant={"primary"}
      size={"medium"}
      children={"hi from btn"}
      disabled={false}
      loading={false}
    />
  );
}

export default App;
