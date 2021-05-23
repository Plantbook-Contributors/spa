import "./style/style.css"; 
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
function App() {

    return (
        <HashRouter>
            <div>
            <div className="header">
            <div className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Plantbook</a>
                <nav>
                    <ol className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link"><NavLink exact to="/">Login</NavLink></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"><NavLink to="/register">Register</NavLink></a>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
        </div>
                <div classNameName="content">
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                </div>
            </div>
        </HashRouter>
    );
}


export default App;
