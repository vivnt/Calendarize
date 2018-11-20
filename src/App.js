import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import NavBar from "./NavBar";

const App = () => (<Router>
  <div>
    <Header/>
    <Route exact="exact" path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
  </div>
</Router>);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Topic = ({match}) => <h3>Requested Param: {match.params.id}</h3>;
const Topics = ({match}) => (<div>
  <h2>Topics</h2>

  <ul>
    <li>
      <Link to={`${match.url}/components`}>Components</Link>
    </li>
    <li>
      <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
    </li>
  </ul>

  <Route path={`${match.path}/:id`} component={Topic}/>
  <Route exact="exact" path={match.path} render={() => <h3>Please select a topic.</h3>}/>
</div>);
const Header = () => (<NavBar />
    );

export default App;
