import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={(match) => {
            var active = match ? 'active abc' : '';
            return (
                <li className={active}>
                    <NavLink to={to} title="check">Trang chủ</NavLink>
                </li>
            );
        }} />
    );
}
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App" >
                    {/* Menu Link */}
                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <NavLink exact to='/' title="check">Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>Giới thiệu</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>Liên hệ</NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* Nội dung */}
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </div>
            </Router>
        );
    }
}

export default App;
