import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" href="#">
                    Apna Cart
                </Link>
                
               
            </nav>




        );
    }
}

export default Navbar;