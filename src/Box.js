import React, {useState} from "react";
export default function Box(props){
    const[isOn, setIsOn] = useState(props.on);
    const toggleBox = () => {
        setIsOn(!isOn);
    };

   const clicked = {
    clickedBox: console.log('hoe bag ass shit')
   }
   return (
    <div click={clicked} className="box"
    onClick={toggleBox}></div>
   )
}