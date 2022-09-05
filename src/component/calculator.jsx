import React, {Component} from "react";
import {Link} from "react-router-dom";

class Calculator extends Component {
    render() {
        return (
            <div>
                <Link to="/">go to home</Link>
                <div className="calculator">
                    Калькулятор
                </div>
            </div>
        );
    }
}

export default Calculator;