import React, { Component } from "react";
import logo from "../images/logo.svg";
// import logo from '../images/lo'
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
