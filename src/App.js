import "./App.css";
import Covid from "./components/Covid";
import Nav from "./components/Nav";
import Countdown from "./components/Countdown";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Youtube from "./components/Youtube";
import DetailBlog from "./components/Blog/DetailBlog";
import AddNewBlog from "./components/AddNewBlog";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <Nav />
        </header>

        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>

          <Route path="/timer">
            <Countdown />
          </Route>

          <Route path="/youtube">
            <Youtube />
          </Route>

          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>

          <Route path="/add-new-blog">
            <AddNewBlog />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
