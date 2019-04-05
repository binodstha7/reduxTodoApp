import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// route components imported
import Home from "./components/home";
import TodoLists from "./components/todoLists";

export default function App() {
  return (
    <div className="App">

      <Router>
        {/* header navlink which navigate to components */}
        <div>
          <li><NavLink
            activeStyle={{ color: "red" }}
            exact to="/">Home</NavLink></li>
          <li><NavLink
            activeStyle={{ color: "red" }}
            to="/todoLists">TodoList</NavLink></li>
        </div>

        {/* routes with path name */}
        <Route exact path="/" component={Home} />
        <Route path="/todoLists" component={TodoLists} />

      </Router>

    </div>
  )
}


