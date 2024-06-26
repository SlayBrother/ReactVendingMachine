import React from "react";
import { Link } from "react-router-dom";

function Sardines() {
    return (
        <div>
            <h1>YOU DON'T EAT THE SARDINES THEY EAT YOU RUN AWAY</h1>
            <img
                src="https://media.giphy.com/media/nC30bN4yizgek/giphy.gif"
                alt="Fish doing a little spin around"
            />
            <h1>
                <Link to="/">TURN BACK! GO BACK TO THE VENDING MACHINE</Link>
            </h1>
        </div>
    );
}

export default Sardines; 