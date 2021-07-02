import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <Router>
      <div className="bg-dark text-light p-2 d-flex justify-content-between">
        <Link to="/page1">
          <h3>Page1</h3>
        </Link>

        <Link to="/page2">
          <h3>Page2</h3>
        </Link>
        <Link to="/page3">
          <h3>Page3</h3>
        </Link>
      </div>

      <Route exact path="/" component={Page1} />
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
      <Route exact path="/page3" component={Page3} />
    </Router>
  );
}

function Page1() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log("Page1", state);

  const incrementCounter = () => {
    dispatch({ type: "COUNTER_INCREMENT" });
  };

  const decrementCounter = () => {
    dispatch({ type: "COUNTER_DECREMENT" });
  };

  return (
    <div>
      <h1>Page1</h1>
      <div className="alert alert-secondary"> Counter : {state.counter}</div>

      <input
        type="button"
        value="INCREMENT"
        className="btn btn-success w-100 mb-1"
        onClick={incrementCounter}
      />

      <input
        type="button"
        value="DECREMENT"
        className="btn btn-danger w-100 mb-1"
        onClick={decrementCounter}
      />

      {state.cityList.map((item, index) => (
        <div key={index} className="alert alert-secondary">
          {item}
        </div>
      ))}

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem incidunt
        atque placeat iste quis, accusamus sapiente velit ratione in molestias.
      </p>
    </div>
  );
}

function Page2() {
  const state = useSelector((state) => state);
  // console.log("Page2", state);

  return (
    <div>
      <h1>Page2</h1>
      <div className="alert alert-secondary"> Counter : {state.counter}</div>

      {state.cityList.map((item, index) => (
        <div key={index} className="alert alert-secondary">
          {item}
        </div>
      ))}

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ad amet,
        dolores dolore quod illo ab a error cum id!
      </p>
    </div>
  );
}

function Page3() {
  const state = useSelector((state) => state);
  // console.log("Page3", state);
  return (
    <div>
      <h1>Page3</h1>
      <div className="alert alert-secondary"> Counter : {state.counter}</div>
      <div>
        <form>
          <div>
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Enter username"
            />
          </div>

          <div>
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Enter Password"
            />
          </div>

          <div>
            <input
              type="button"
              value="REGISTER"
              className="btn btn-dark w-100"
            />
          </div>
        </form>
      </div>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt
        sit impedit beatae magni vel quis, deserunt aperiam vero excepturi.
      </p>
    </div>
  );
}

export default App;
