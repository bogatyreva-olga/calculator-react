import './App.css';
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Calculator from "./component/calculator";
import Home from "./component/home";

class App extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/calculator" element={<Calculator />} />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
