import React from 'react'

function Restart() {

    function resetGame() {
        window.location.reload()
    }

    return (
        <div>
            <button onClick={resetGame}>Restart Game</button>
        </div>
    )
}

export default Restart