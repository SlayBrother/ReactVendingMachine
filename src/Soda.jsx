import React from "react";
import { Link } from "react-router-dom";

function Soda() {
    return (
        <div>
            <h1>SO Refreshing</h1>
            <img
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmIybXJjMmNwbnNpM2hqczZsZnFuNXZwMGZsdGNiazc0aG1idzFrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1Ql0Na1e4ZxQrKdE1a/giphy.webp"
                alt="Diet Coke Exploding everywhere"
            />
            <h3>
                <Link to="/">Now that you've got your drink, click here to get whatever else you need</Link>
            </h3>
        </div>
    );
}

export default Soda; 