import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
