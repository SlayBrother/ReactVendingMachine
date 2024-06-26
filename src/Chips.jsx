import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Chips() {
    // Declare a state variable to keep track of the counter
    const [count, setCount] = useState(0);

    // Function to increment the counter
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>How many chips would you like?</h1>
            <img
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzdzb3R6ZHgzd3YycjFmZ2I5eTcwMmo0MDdqNDR3c3dnMGs3ZTlxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EFUiKHUiZNQUo/200.webp"
                alt="Kirby Eating Chips"
            />
            <div>
                <button onClick={incrementCount}>Add Chip</button>
                <p>Number of chips: {count}</p>
            </div>
            <h3>
                <Link to="/">Do you need a soda to wash down those chips?</Link>
            </h3>
        </div>
    );
}

export default Chips;