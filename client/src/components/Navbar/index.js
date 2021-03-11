import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="row">
            <Link to="/" className="logo">
                <img src={logo} alt="Google Books" />
            </Link>
            <Switch>
                <Route path="/saved">
                    <Link to="/">Search</Link>
                    <div className="active">Saved</div>
                </Route>
                <Route path="/">
                    <div className="active">Search</div>
                    <Link to="/saved">Saved</Link>
                </Route>
            </Switch>
        </nav>
    );
};
