import "./App.css";
import "animate.css";
import Posts from "./Components/Posts";
function App() {
  return (
    <div className="App ">
      <div className="BGD animate__animated animate__fadeIn animate__fadeInLeft"></div>
      <div className="Photo"></div>
      <div className="Title">
        <h1 className="animate__animated animate__fadeIn">
          CRUD App Using <span>Redux</span> Toolkit
        </h1>
      </div>
      <Posts />
    </div>
  );
}

export default App;
