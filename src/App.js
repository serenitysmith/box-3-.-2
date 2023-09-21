import React, {useState} from "react"
import boxes from "./boxes"
import Box from "./Box"
import './App.css'
export default function App() {
    // Define a state variable 'squares' and a function 'setSquares'
    // Initial value of 'squares' is set to the 'boxes' array
    const [squares, setSquares] = React.useState(boxes)
    
    
    
    
    /// Define a function called 'toggle' that takes an 'id' parameter
    
    function toggle(id) {
        // Log the 'id' parameter to the console when a square is clicked
console.log(id)
    }
    // Create an array of React components (Box components) based on the 'squares' state
    const squareElements = squares.map(square => (

        // Create a 'Box' component for each square with the following props:
        // - 'key' is set to the 'id' of the square for React to efficiently update the list
        // - 'id' is set to the 'id' of the square
        // - 'on' is set to the 'on' property of the square (presumably to determine if it's active)
        // - 'toggle' is set to the 'toggle' function defined earlier
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    // Render all the 'squareElements' within a 'main' element
    return (
        <main>
            {squareElements}
        </main>
    )
}
// Here's a breakdown of what this App component does:

// It defines a React functional component named App.

// Inside the component, it initializes a state variable squares using React.useState, with an initial value of the boxes array.

// It defines a toggle function that takes an id parameter. Inside the toggle function:

// It logs the id parameter to the console when a square is clicked. This function is intended to handle square click events.
// It maps over the squares array and creates a React component (Box) for each square. It passes the key, id, on, and the toggle function as props to each Box component.

// key={square.id}: A unique identifier for each Box component to help React efficiently update the list.
// id={square.id}: The id of the square, presumably used for identification or tracking.
// on={square.on}: The on property of the square, which might be used to determine if the square is active.
// toggle={toggle}: The toggle function, which is passed to the Box component to handle square click events.
// Finally, it renders all the squareElements within a main element.

// The primary purpose of this code is to create a grid of square components (represented by Box components), each of which has its own id and on state. When a square is clicked, the toggle function logs the id of the clicked square to the console. This code is the foundation for creating a grid of interactive squares where you can implement further logic for handling the state and behavior of these squares when they are clicked.




