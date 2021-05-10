import React from "react";
import Home from "./components/HomeComponent";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <div className="container">
          <div className="row">
            <img
              className="col-2"
              src="foodrecipeapplogo.jpg"
              alt="SK's Food Recipes App"
              height="50px"
              width="50px"
            />
            <h1 className="col title">SK's Food Recipes App</h1>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <Home />
      </div>
      <footer className="footer text-center foot">
        <a
          href="https://www.linkedin.com/in/sai-kiran-shrinath-2048a0187/"
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: "floralwhite", textDecoration: "none" }}
        >
          <strong>Designed & Developed by SK </strong>
          <img
            src="6.jpg"
            width="100px"
            height="100px"
            alt="sk"
            style={{
              border: "2px solid  rgb(255, 217, 0)",
              borderRadius: "100%",
            }}
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
