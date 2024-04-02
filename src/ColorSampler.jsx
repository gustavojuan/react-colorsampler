import React, { useState } from "react";
import './ColorSampler.scss'; // Importa tu archivo SASS

const ColorSampler = () => {

    const [color, setColor] = useState('');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    return (
    <div class="d-flex">
        <label htmlFor="colorname">Write a color: </label>
        <input type="text" name="colorname" id="colorname" onChange={handleColorChange}/>
        <div className="result" style={{backgroundColor:color}}></div>       
    </div>
    )
    

}

export default ColorSampler