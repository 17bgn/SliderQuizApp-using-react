import Slider from "./Slider";

function App() {
  return (
    <div className="container">
      <Header />
      <Slider />
    </div>
  );
}

function Header() {
  return (
    <h2>
      <u>Java Mcq Questions</u>
    </h2>
  );
}

function Footer() {
  return <h1>🙏Thank You🙏</h1>;
}
export { Footer };
export default App;
