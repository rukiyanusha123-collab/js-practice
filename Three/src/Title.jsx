import { useState } from "react";
 function Title(){
    const [isHover,setIsHover]=useState(false);

    const handleMouseEnter=()=>{
        setIsHover(true)
    }
    const handleMouseLeave=()=>{
        setIsHover(false)
    }
    console.log(isHover,'isHover');

    return(
        <>
        <h3 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        style={isHover? {backgroundColor:"chocolate"}:{} }
        >WELCOME TO THE MYSTERIOUS WORLD</h3>
        </>
    )
 }
 export default Title;