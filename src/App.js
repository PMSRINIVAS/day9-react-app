import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { MyAppHomePage } from "./pages/MyAppHomePage";
import { MyAppExplorePage } from "./pages/MyAppExplorePage";
import { MyAppNotificationPage } from "./pages/MyAppNotificationPage";
import { MyAppMessagesPage } from "./pages/MyAppMessagesPage";

function App() {
  return (
    <Router>
      {/**COMMON NAVIGATION BAR WEBPAGE */}
      {/** "d-flex" and "justify-content-between" are used for getting in same line and have space  */}
      <div className="bg-primary text-light p-4 mb-2 d-flex justify-content-between">
        <Link to="/home">
          <h3 className="text-light">Home</h3>
        </Link>

        <Link to="/explore">
          <h3 className="text-light">Explore</h3>
        </Link>

        <Link to="/notification">
          <h3 className="text-light">Notification</h3>
        </Link>

        <Link to="/messages">
          <h3 className="text-light">Messages</h3>
        </Link>
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

export default App;
