import { useState } from "react";

function Counter() {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        setClickCount(clickCount + 1);
    }
    return (
        <div>
            <button onClick={handleClick}>{ clickCount }</button>
        </div>
    )
}

export default Counter;