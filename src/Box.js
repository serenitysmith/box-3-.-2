import React from "react"

export default function Box(props) {
    // Define a styles object that sets the background color based on the 'on' prop
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    // Return a JSX element representing a 'div' with the following properties:
    return (
        <div 
            style={styles} 
            className="box"
            // onClick={props.toggle}
            // changing it to an id to show wich box was clicked
            onClick={() =>props.toggle(props.id)}
        >
        </div>
    )
}


// Here's a breakdown of what this Box component does:

// It defines a functional component named Box that takes a single argument props. This component is responsible for rendering a square box.

// Inside the component, it defines a styles object that determines the background color of the div element based on the props.on property:

// If props.on is true, it sets the background color to "#222222" (a dark color).
// If props.on is false, it sets the background color to "transparent" (no background color).
// It returns a JSX element representing a div with the following properties:

// style={styles}: Applies the styles object as inline CSS to set the background color of the div based on the props.on value.
// className="box": Assigns the CSS class "box" to the div. This class can be used for additional styling or CSS rules.
// It attaches a click event handler to the div using onClick. When the div is clicked, it calls the props.toggle function and passes the props.id as an argument. This mechanism allows the parent component to handle the click event and perform actions based on the id of the square that was clicked.

// In summary, this Box component is a visual representation of a square box with background color determined by the props.on property. It can trigger the props.toggle function when clicked, allowing the parent component to handle the click event and potentially update the state or perform other actions based on the id of the square that was clicked.




// import React, {useState} from "react";
// export default function Box(props){
// This is a functional component named "Box" that takes some props as inputs
 // This line uses the "useState" hook to create a state variable "isOn"
  // and an associated function "setIsOn". The initial value of "isOn" is set
  // to the value passed in the "on" prop.

    // const[isOn, setIsOn] = useState(props.on);
    // const toggleBox = () => {
    //     setIsOn(!isOn);
    // };
  // This function "toggleBox" is defined to toggle the value of "isOn"
  // when the box is clicked.
  //  const clicked = {
  //   clickedBox: console.log('hoe bag ass shit')
    // This is an object named "clicked" with a property "clickedBox" that
  // logs a message to the console when this object is created.
  //  }
  //  return (
     // This is the JSX (JavaScript XML) that represents the component's UI.
  // It returns a <div> element with the following attributes:
//     <div click={clicked} className="box"
//     onClick={toggleBox}></div>
//    )
// }

// This is a React functional component named Box that takes some props as input. It uses the useState hook to manage the state of the isOn variable.

// The toggleBox function is used to toggle the value of isOn when the box is clicked. This function is called when the onClick event is triggered.

// The clicked object is defined, but it doesn't serve any apparent purpose within this component. It logs a message to the console when the component is rendered, but it doesn't affect the component's behavior or appearance.

// The JSX code defines a <div> element with the class "box" and an onClick event handler that calls the toggleBox function when the <div> is clicked. However, the click attribute doesn't have any standard meaning in React or HTML, and it's not clear how you intend to use the clicked object in this context.

// If you want to pass data to the <div> element, you should use the data-* attributes in HTML, like data-clicked={clicked.clickedBox} if you intend to store the clickedBox 