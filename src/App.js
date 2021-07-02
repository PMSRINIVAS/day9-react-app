import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-primary text-light p-4 mb-2">
        <h3>Home</h3>
        <h3>Explore</h3>
        <h3>Notification</h3>
        <h3>Messages</h3>
      </div>

      <Route exact path="/" component={MyAppHomePage} />
      <Route exact path="/home" component={MyAppHomePage} />
      <Route exact path="/explore" component={MyAppExplorePage} />
      <Route exact path="/messages" component={MyAppMessagesPage} />
      <Route exact path="/notification" component={MyAppNotificationPage} />
    </Router>
  );
}
//http://localhost:3000
//http://localhost:3000/home
//http://localhost:3000/explore
//http://localhost:3000/messages
//http://localhost:3000/notification

function MyAppHomePage() {
  const [list] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top">Home</h2>

      {list.map((item, index) => (
        <div className="bg-secondary text-light p-3 m-3 rounded">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, excepturi.
        </div>
      ))}
    </div>
  );
}

function MyAppExplorePage() {
  const [list] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top text-center">Explore</h2>

      {list.map((item, index) => (
        <div className="bg-info text-light p-3 m-3 rounded">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, excepturi.
        </div>
      ))}
    </div>
  );
}

function MyAppNotificationPage() {
  const [list] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top text-center">
        Notification
      </h2>

      {list.map((item, index) => (
        <div className="bg-success text-light p-3 m-3 rounded">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, excepturi.
        </div>
      ))}
    </div>
  );
}

function MyAppMessagesPage() {
  const [list] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top text-center">
        Messages
      </h2>

      {list.map((item, index) => (
        <div className="bg-warning text-light p-3 m-3 rounded">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, excepturi.
        </div>
      ))}
    </div>
  );
}

export default App;
