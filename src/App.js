import React, {useState} from "react"
import boxes from "./boxes"
import Box from "./Box"
import './App.css'
export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        // console.log('clicked')
        // changing it from cobsole.lof to shwo witch box was claicked 
console.log(id)
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
