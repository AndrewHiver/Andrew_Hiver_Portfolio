import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Detail/Detail";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Other from "./Other/Other";
import Project from "./Projects/Project";

//Ici on configure toute les routes pour accéder à toute les pages, et on import le Navbar qui sera présent partout

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/projects" exact component={Project} />
          <Route path="/other" exact component={Other} />
          <Route path="/detail" exact component={Detail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
